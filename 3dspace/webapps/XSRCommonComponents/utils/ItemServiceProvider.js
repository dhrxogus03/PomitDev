define("DS/XSRCommonComponents/utils/ItemServiceProvider",["UWA/Class","UWA/Promise","DS/XSRCommonComponents/utils/IndexServiceProvider","DS/XSRCommonComponents/utils/RequestUtil","DS/XSRCommonComponents/utils/Constants"],function(e,t,n,a,s){"use strict";var r;return e.extend({init:function(e){r=a.getPlatformId(),this.isChangeControlled=!(!e||!e.isChangeControlled),this.securityToken=a.getSecurityToken(),this.tenantID=a.getPlatformId(),this.SC=a.getSecurityContext()},fetchItemData:function(e,a){let s=this;return new t(function(t,r){(new n).fetchItemData(e,a).then(async function(e){let n=e.results.reduce((e,t)=>(e.push(t.attributes.find(e=>"resourceid"===e.name).value),e),[]),a=(await s.gateMaturityNPolicy(n)).result.reduce((e,t)=>(e[t.id]=t,e),{});e.results.forEach(e=>{let t=e.attributes.find(e=>"resourceid"===e.name).value,{policy:n,status:s}=a[t];e.attributes.push({name:"ds6w:status",value:n+"."+s}),e.attributes.push({name:"ds6w:policy",value:n})}),t(e)})}).catch(function(e){console.log(e)})},gateMaturityNPolicy:function(e){let n=this,s={prodIDS:e};return new t(function(e,t){a.send3DSpaceRequest("resources/formulatedproduct/v1/formulatedproduct/policy-state","POST",{type:"json",headers:n.getHeaders({ENO_CSRF_TOKEN:n.CSRFToken,SecurityContext:n.SC}),data:UWA.Json.encode(s)},e,t)})},getStatesNLS:function(e){let n=this,s="resources/lifecycle/maturity/getStatesAttributes?xrequestedwith=xmlhttprequest&tenant="+r+"&SecurityContext="+n.SC;return new t(function(t,r){a.send3DSpaceRequest(s,"POST",{type:"json",headers:n.getHeaders(),data:JSON.stringify(e)},t,r)})},getMBMF:function(e){let n=this;return new t(function(t,s){a.send3DSpaceRequest("resources/v1/modeler/dsspec/invoke/dsspec:mbmf","POST",{type:"json",headers:n.getHeaders({ENO_CSRF_TOKEN:a.get3DSpaceCSRFToken(),SecurityContext:n.SC,"Accept-Language":a.getLanguage()}),data:JSON.stringify(e)},t,s)})},getRefBatchSize:function(e){return new t(function(t,n){a.send3DSpaceRequest("resources/formulatedproduct/v1/formulatedproduct/"+e+"/batchsize","GET",{type:"json",headers:{Accept:"application/json; charset=UTF-8"}},t,n)})},fetchPhysicalPrdAttributes:function(e){let n=this,s=(new Date).getTime(),i="resources/v1/collabServices/authoring/op/getJSProxyNew";return i=i+"?tenant="+r+"&Type=assembly&objType="+e+"&timestamp"+s+"="+s,new t(function(e,t){a.send3DSpaceRequest(i,"GET",{type:"json",headers:n.getHeaders(),data:void 0},e,t)})},createPhysicalPrd:function(e){var n={type:"assembly",preferredCAD:null,cadOriginType:"V6"};e&&e.data&&(n.title=e.data.title,n.filename=e.data.filename,e.data.parentId&&(n.aggregating_context=[e.data.parentId]),e.data.Templates&&e.data.Templates.length>0&&(n.CheckfilenameDisplay=e.data.CheckfilenameDisplay,n.filenameStatus=e.data.filenameStatus,n.Templates=e.data.Templates,n.Specializedtypes=e.data.Specializedtypes,n.cadOriginType=e.data.cadOriginType),e.data.type!==s.TYPE_VPMREFERENCE&&(n.specializedtype=e.data.type),e.data.attributes&&(n.attributes=e.data.attributes));var i=this,o=JSON.stringify(n);return new t(function(e,t){a.send3DSpaceRequest("resources/v1/collabServices/authoring/op/createContent?select=type&select=physicalid&select=cestamp&tenant="+r,"POST",{type:"json",headers:i.getHeaders(),data:o},e,t)})},getCADData:function(e){var n;if(e&&e.data){var s=e.data instanceof FormData;n=s||"fetchCADTemplates"===e.calledFrom?e.data:JSON.stringify(e.data)}else n='{"dummy" : "dummy"}',"fetchCADInsertables"===e.calledFrom&&(n="");var r=this,i="resources/v1/collabServices/authoring/op";return i="fetchCADTemplates"===e.calledFrom?i.concat("/getTemplatesNames"):i.concat("/getInsertableCADS"),new t(function(e,t){a.send3DSpaceRequest(i,"GET",{type:"json",headers:r.getHeaders(),data:n},e,t)})},dbExpand:function(e){return(new n).dbExpand(e)},expand:function(e,t,a){return(new n).expand(e,t,!0,a)},expandV2:function(e){return(new n).expandV2(e)},authoringExpandOfItem:function(e,n){var i=this;let o=(new Date).getTime();var c={label:a.getCVRequestLabel(o),no_type_filter_rel:["XCADBaseDependency"],"q.iterative_filter_query_bo":s.TYPE_DOCUMENT===n?'[ds6w:globalType]:"ds6w:Document"':'[ds6w:globalType]:"ds6w:Document" OR [ds6w:globalType]:"ds6w:Part"',expand_iter:"0",fcs_url_mode:"REDIRECT",compute_select_bo:["thumbnail_2d","icon"],paths:[e],types:["VPMReference","VPMRepReference","VPMInstance"],root_path_physicalid:[e],select_bo:["ds6w:label","ds6w:modified","ds6w:created","ds6w:description","ds6wg:revision","ds6w:responsible","ds6w:status","ds6w:type","ds6wg:EnterpriseExtension.V_PartNumber","ds6wg:MaterialUsageExtension.DeclaredQuantity","physicalid","ds6w:reservedBy","ds6w:globalType","ds6wg:PLMReference.V_isLastVersion","ds6w:reserved","ds6w:identifier"],select_rel:["ds6w:label","ds6w:type","physicalid"],tenant:r,locale:widget.lang};return new t(function(e,t){let n=encodeURIComponent(a.getSecurityToken());a.send3DSpaceRequest("resources/enoauthoring/expand/v1?tenant="+r+"&_="+o,"POST",{type:"json",headers:i.getHeaders({SecurityToken:n}),data:JSON.stringify(c)},e,t)})},updateAttributes:function(e){var n={requests:[]};let s=(new Date).getTime(),i=e.nodeModel?e.nodeModel:void 0;var o={method:"PATCH",body:[],queryParams:{select:["physicalid","modified"]}},c=e.request;let u=e.isRelorBus;u&&"bus"!==u?o.path="model/"+u+"/"+e.relId:(u="bus",o.path="model/"+u+"/"+e.itemid),o.body=[];for(var d=0;d<c.length;d++){var l={},p=c[d];l.op="replace",p.extension&&(l.facet=p.extension),l.path=p.attribute,l.value=p.value,e.customAttribute&&void 0!==e.customAttribute?i&&i.getCustomDimensionType&&i.getCustomDimensionType()&&(l.unitName=i.getCustomUnit&&i.getCustomUnit()?i.getCustomUnit():void 0,l.dimensionType=i.getCustomDimensionType()):i&&i.getDimensionType&&i.getDimensionType()&&(l.unitName=i.getUnitName&&i.getUnitName()?i.getUnitName():void 0,l.dimensionType=i.getDimensionType()),o.body.push(l),p.attrSelectable?o.queryParams.select.push(p.attrSelectable):o.queryParams.select.push("attribute["+p.attribute+"]")}n.requests.push(o);var g=this;return new t(function(e,t){a.send3DSpaceRequest("resources/v1/collabServices/attributes/op/update?tenant="+r+"&_="+s,"PUT",{type:"json",headers:g.getHeaders(),data:JSON.stringify(n)},e,t)})},getAlternateInfo:function(e){var n=this;let s=(new Date).getTime(),i=encodeURIComponent(a.getSecurityToken());return new t(function(t,o){a.send3DSpaceRequest("resources/v1/alternateManagement/getAlternateInfo?tenant="+r+"&_="+s,"POST",{type:"json",headers:n.getHeaders({SecurityToken:i}),data:JSON.stringify(e)},t,o)})},addInstance:function(e){var n={version:"1.0",bAllOrNothing:!0,operations:[]},s={};s.parent={isInstanceOf:e.parentId,children:e.instanceIDs,cacheId:0},s.child={isInstanceOf:e.itemId,cacheId:0},n.operations.push(s);for(var i=0;i<e.quantity-1;i++){n.operations.push({parent:{cacheId:0},child:{cacheId:0}})}var o=this;return new t(function(e,t){a.send3DSpaceRequest("resources/product/instances?tenant="+r,"POST",{type:"json",headers:o.getHeaders(),data:JSON.stringify(n)},e,t)})},removeInstance:function(e){var n={version:"1.0",bAllOrNothing:!0};n.instances=e.instances;var s=this;return new t(function(e,t){a.send3DSpaceRequest("resources/product/authoring/unparent?tenant="+r+"&securityContext="+a.getSecurityContext(),"POST",{type:"json",headers:s.getHeaders(),data:JSON.stringify(n)},e,t)})},deleteItem:function(e){var n=!!e.isWholeStructure,s={};s.data=[{physicalid:e.itemId}],s.options=[{nlsKey:"Whole Structure",type:"checkbox",value:n,key:"wholeStructure"}];var i=this;return new t(function(e,t){a.send3DSpaceRequest("resources/lifecycle/Delete/structure?tenant="+r,"POST",{type:"json",headers:i.getHeaders(),data:JSON.stringify(s)},e,t)})},getCoreMatInfo:function(e){var n=this;return new t(function(t,s){a.send3DSpaceRequest("resources/v1/engineeringItem/getAppliedCoreMaterial?tenant="+n.tenantID,"POST",{type:"json",headers:n.getHeaders({SecurityToken:n.securityToken,SecurityContext:n.SC}),data:UWA.Json.encode(e)},t,s)})},fetchCoreMatDetails:function(e){var n=this;return new t(function(t,a){n.getCoreMatInfo(e).then(function(e){if(e&&e.references&&e.references_infos){for(var n=e.references,a=e.references_infos,s=new Map,r=0;r<n.length;r++)for(var i=n[r].physicalid,o=n[r].corematerial[0].physicalid,c=0;c<a.length;c++)o===a[c].physicalid&&s.set(i,a[c]);return t(s)}return t(null)}).catch(function(e){return a(e)})})},checkMaterialMismatch:function(e){var n=this,r={itemPID:e};return new t(function(e,t){a.send3DSpaceRequest(s.MATERIAL_BASE_URL+"dsspec:checkMaterialMismatch","POST",{type:"json",headers:n.getHeaders({ENO_CSRF_TOKEN:n.CSRFToken,SecurityContext:n.SC,"Accept-Language":n.lang}),data:UWA.Json.encode(r)},e,t)})},listMaterials:function(e){var n=this,r={itemPID:e};return new t(function(e,t){a.send3DSpaceRequest(s.MATERIAL_BASE_URL+"dsspec:getAppliedMaterilals","POST",{type:"json",headers:n.getHeaders({ENO_CSRF_TOKEN:n.CSRFToken,SecurityContext:n.SC,"Accept-Language":n.lang}),data:UWA.Json.encode(r)},e,t)})},getHeaders:function(e){var t={"Content-type":"application/json"};return this.isChangeControlled&&Object.assign(t,a.getWorkUnderHeaders()),e&&Object.keys(e).forEach(function(n){t[n]=e[n]}),t}})});