define("DS/VisuIdentification/Pattern",["UWA/Class"],function(t){"use strict";var e=t.extend({init:function(t,e,n){return this.space=t,this.context=e,this.shared=n,this},getSpace:function(){return this.space},getContext:function(){return this.context},getSharability:function(){return this.shared},setSpace:function(t){this.space=t},setContext:function(t){this.context=t},setSharability:function(t){this.shared=t},copy:function(t){return this.space=t.space,this.context=t.context,this.shared=t.shared,this},isEqual:function(t){return this.space===t.space&&this.context===t.context&&this.shared===t.shared}});return UWA.namespace("THREEDS/Identification/Pattern",e)}),define("DS/VisuIdentification/Node",["UWA/Class","DS/VisuIdentification/Pattern"],function(t,e){"use strict";var n=[],i=t.extend({init:function(t,e){return this.pattern=this._findOrCreatePattern(t),this.localId=e,this},getLocalId:function(){return this.localId},getPattern:function(){return this.pattern},getSpace:function(){return this.pattern.space},getContext:function(){return this.pattern.context},getSharability:function(){return this.pattern.shared},setLocalId:function(t){this.localId=t},setPattern:function(t){this.pattern=this._findOrCreatePattern(t)},computeId:function(){var t="";return this.pattern?(t+=this.pattern.getContext(),t+=i.delimiter,t+=this.localId):t},_findOrCreatePattern:function(t){for(var i=0;i<n.length;i++){var r=n[i];if(r.isEqual(t))return r}return new e(t.space,t.context,t.shared)}});return i.delimiter="#",i.atomicDelimiter="/",UWA.namespace("THREEDS/Identification/Node",i)}),define("DS/VisuIdentification/Converter",["UWA/Class","DS/Visualization/PathElement","DS/VisuIdentification/Node","DS/Visualization/Mesh3D","DS/Visualization/SubElement"],function(t,e,n,i,r){"use strict";var a=null,s=t.extend({init:function(){return a||(a=this,this)},buildGlobalId:function(t){for(var e="",i="",r=null,a=null,s=null,o=!1,c=!0,u=!0,l=t.getLength()-1;l>=0;l--){var d=t.getElement(l).getModelIdentification();d&&(r=d.getSpace(),o=d.getSharability(),i=d.computeId(),(s=d.getContext())&&r&&s===a&&(u=!0),u&&(c||(i+=n.atomicDelimiter),c=!1,e=i+=e),(u=o)||(a=r))}return e},decodeGlobalId:function(t,i,a){var s=i.split(n.atomicDelimiter),o=new e,c=null,u=t;o.addElement(u);for(var l=0;l<s.length;l++){var d=s[l],f=this.findNodeByIdentifier(u,d,a);if(f)if(f instanceof r)o.addElement(f);else{for(var h=f,p=[];f!==u;)if(c=f.getParents(),p.push(f),f=c[0],c.length>1){if(-1===c.indexOf(u))return console.warn("Impossible to create a PathElement from the identifier."),null;f=u}for(var g=p.length-1;g>=0;g--)o.addElement(p[g]);u=h}}return o},findNodeByIdentifier:function(t,e,r){var a=e.split(n.delimiter),s=a[0],o=a[1];if(t instanceof i)return t.getPrimitive(parseInt(o),r);var c={node:null};return t.traverse(function(t,e){var n=t.getModelIdentification(),i=n?n.getLocalId():null,r=n?n.getContext():null;return i==o&&r===s&&(e.node=t,!0)},c),c.node}});return UWA.namespace("THREEDS/Identification/Converter",s)});