define("DS/GEONavDriveAPI/GEOdriveServices",["UWA/Core","DS/VisuDataAccess/ProxyAbstraction","DS/Visualization/Utils","DS/WAFData/WAFData","DS/GEONavCommonAPI/GEONavCommonServices"],function(e,t,i,n,o){"use strict";return{callDriveService:function(e,t,i){var n=UWA.clone(e);n.serviceName="3DDrive",o.callService(n,t,i)},getObject:function(e,t,i){this.callDriveService({URI:"/resources/3ddrive/v1/bos/"+e.objectId,envId:e.envId},t,function(t){console.log(t.message);var n={message:"GEOdriveServices: Impossible to retrieve the object from the PhysicalID : "+e.objectId};i(n)})},getObjectIDFromPath:function(e,t,i,n){var o=new RegExp("[\\\\\\/]+","g"),r=t.split(o);return r.length&&"."!=r[0]&&r.unshift("."),this.getObjectIDFromPathArray(e,r,i,function(e){console.log(e.message),n({message:"GEOdriveServices: Impossible to retrieve the object from the target path : "+t})})},getObjectIDFromPathArray:function(e,t,i,n){var o=this;if(t.length){var r=t[0];".."==r||"."==r?o.getParent(e,function(r){var s=t.slice(1);s.length?o.getObjectIDFromPathArray({objectId:r,envId:e.envId},s,i,n):i(r)},n):o.searchInContent(e,{title:r},function(r){var s=t.slice(1);s.length?o.getObjectIDFromPathArray({objectId:r,envId:e.envId},s,i,n):i(r)},n)}},getContent:function(e,t,i){this.callDriveService({URI:"/resources/3ddrive/v1/bos/"+e.objectId+"/contents",envId:e.envId},t,function(t){console.log(t.message);var n={message:"GEOdriveServices: Impossible to get the content of the directory : "+e.objectId};i(n)})},getDownloadURL:function(e,t,i){this.callDriveService({URI:"/resources/3ddrive/v1/bos/"+e.objectId+"/fileurl",envId:e.envId},t,function(t){console.log(t.message);var n={message:"GEOdriveServices: Impossible to get the URL to download the file linked to item : "+e.objectId};i(n)})},getParent:function(e,t,i){this.getObject(e,function(n){if(n&&n.parentid)t(n.parentid);else{var o={message:"GEOdriveServices: No Parent directory has been found for the item : "+e.id};i(o)}},i)},searchInContent:function(e,t,i,n){var o={message:"GEOdriveServices: The searched criteria has not been found in directory : "+e.objectId,criteria:t};this.getContent(e,function(e){var r;e.items&&((r=e.items.filter(function(e){var i=!0;for(var n in t){var o=t[n];if(!e[n]||e[n]!=o){i=!1;break}}return i}))&&r.length?i(r[0].id):n(o))},function(e){console.log(e.message),n(o)})},getURLFromPath:function(e,t,i,n){var o=this,r={message:"GEOdriveServices: Impossible to get the URL to download the file :"+t+" linked to item : "+e.objectId};o.getObjectIDFromPath(e,t,function(t){o.getDownloadURL({objectId:t,envId:e.envId},function(e){i(e)},function(e){console.log(e.message),n(r)})},function(e){console.log(e.message),n(r)})},findFileURL:function(e,t,i,n){var o;t.serverurl&&t.serverurl;if(t.filename?t.filename:"",void 0!==t&&void 0!==t.physicalid&&(o=t.physicalid),void 0===o&&void 0!==t.originalAsset&&"3DDRIVE"===t.originalAsset.provider&&(o=t.originalAsset.physicalid),void 0!==o)this.getURLFromPath({objectId:o,envId:t.tenant},e,function(e){i(e.url)},n);else{var r=(t.serverurl?t.serverurl:"")+(t.filename?t.filename:""),s=r.slice(0,r.lastIndexOf("/")+1)+e,a=JSON.stringify(t),c=JSON.parse(a);c.serverurl="",c.filename=s,i(c)}},getTicket:function(e,t,i){var n="/resources/3ddrive/v1/bos/ticket?tenant="+this.getTenant();this.callDriveService({URI:n,envId:e.envId},t,function(e){console.log(e.message);i({message:"GEOdriveServices: Impossible to get fcsTicket : "})})},uploadDocument:function(e,t,i){var n,r=this;if(e.file)n=e.file;else if(e.blob)try{n=new File([e.blob],e.filename,{type:e.blob.type,lastModified:Date.now()})}catch(t){var s=new Blob([e.blob],{type:e.blob.type});s.name=e.filename,s.lastModified=Date.now(),s.lastModifiedDate=new Date(s.lastModified).toString(),n=s}if(n)r.getTicket(e,function(s){var a=new FormData;a.append(s.jobticket,s.ticket),a.append("file_0",n),a.append("file-name",n.name),a.append("file-title",n.name),a.append("file-description",n.name),o.callFCSService({actionurl:s.actionurl,requestOptions:{method:"POST",data:a}},function(o){var s;s=(new DOMParser).parseFromString(o,"text/html").querySelectorAll('[name="__fcs__jobReceipt"]')[0].attributes.value;var a={description:"",file:n.name,receipt:s.value,title:n.name,type:"Document"},c=JSON.stringify(a),l="/resources/3ddrive/v1/bos/DSROOT/contents?tenant="+r.getTenant();r.callDriveService({URI:l,envId:e.envId,requestOptions:{method:"POST",data:c,headers:{"Content-Type":"application/json;charset=UTF-8"}}},t,function(e){console.log(e.message);i({message:"GEOdriveServices: Impossible to create document "})})},function(e){console.log(e.message);i({message:"GEOdriveServices: Impossible to get fcsTicket "})})},function(e){console.log(e.message);i({message:"GEOdriveServices: Impossible to upload Document "})});else{i({message:"GEOdriveServices: bad arguments "})}},load:function(e,o,r,s){var a=this;a.loadUrl=function(e,o,r){var s=e.serverurl?e.serverurl:"";if(s+=e.filename?e.filename:"",e.provider&&"FILE"==e.provider)n.handleRequest(s,{method:"GET",withCredentials:!0,type:"arraybuffer",timeout:25e4,onComplete:o,onFailure:r,onTimeout:r,proxy:"none"});else{var a=new t;i.setProxyFromSpec(e,a),a.executeGetHttpRequest(s,"arraybuffer",null,o,r)}},o.length?("\\"!=o[0]&&"/"!=o[0]||(o="."+o),a.findFileURL(o,e,function(t){var i;e&&void 0===(i=e.physicalid)&&void 0!==e.originalAsset&&(i=e.originalAsset.physicalid),void 0!==i?n.handleRequest(t,{method:"GET",withCredentials:!0,type:"arraybuffer",timeout:25e4,onComplete:r,onFailure:s,onTimeout:s,proxy:"none"}):a.loadUrl(t,r,s)},s)):a.loadUrl(e,r,s)},getTenant:function(){return widget.getValue("x3dPlatformId")}}});