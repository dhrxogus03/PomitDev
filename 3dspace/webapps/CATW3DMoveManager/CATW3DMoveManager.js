/*!  Copyright 2015 Dassault Systemes. All rights reserved. */
define("DS/CATW3DMoveManager/CATW3DMoveManager",["UWA/Core","UWA/Class","DS/CoreEvents/ModelEvents","DS/Visualization/PathElement","DS/Visualization/IdPath","DS/Visualization/ThreeJS_DS","DS/SceneGraphOverrides/SceneGraphOverrideSet","DS/ENOPAD3DViewer/utils/PAD3DViewerModelServices"],function(e,t,n,o,r,a,i,l){"use strict";var s=["PPRContext","Drawing"];function c(t){var n=[];return t&&t.modelController?(n.modelController=t.modelController,n.isIn=function(e){var t;return this.some(function(n){return t=n.path.isEqual(e)?n:null}),t},n.initMove=function(e){var t=this.isIn(e);return t||(t={path:e.clone(),lockedID:l.getNodeID(e.getLastElement(!0).children[0])},this.modelController.lockNodes({ids:[t.lockedID]}),this.push(t)),t},n.addMove=function(e){var t=this.isIn(e);return t&&(t.moved=!0,t.hasOwnProperty("isLocked")||(t.isLocked=!1)),t},n.clean=function(e){var t=(e||this).map(function(e){var t=e.lockedID;return delete e.lockedID,t}).filter(function(e){return e});t.length&&this.modelController.unlockNodes({ids:t})},n):(e.log("Creation fails"),n)}function u(e){return e&&l.isInstance(e)}var d=t.extend({init:function(e){var t,d,f,v,h,g,M=this,p=new n,m=e.context,x=[],P=new c({modelController:m.getController()}),D="Persistent",b=[],w=e.saveToDatabase,E=!1;function C(e){var t=e.externalPath.map(function(e){return l.getNodeID(e)}).filter(function(e){return e});return t.unshift(f),new r(t)}function I(e){var n,o;if(e&&e.path){t?-1===t.getSceneGraphOverrideSetIndex(d)&&t.pushSceneGraphOverrideSet(d):(f=m.getController().getRootBagId(),t=m.getViewer().getSceneGraphOverrideSetManager(),d=new i(m.getController().getRootBag(),f),t.pushSceneGraphOverrideSet(d));var r=C(e.path);if((n=d.getUniqueOverrideFromIdPath(r))||(n=d.createIdPathOverride({idPathes:[r]})),e.transformation)o=(new a.Matrix4).copy(e.initWorldMatrix).multiply(e.transformation);else{if(e.leafMatrix)return n.setPosition(e.leafMatrix),0;if(e.worldMatrix)o=e.worldMatrix;else if(e.vector){var l=(new a.Vector3).getPositionFromMatrix(e.initWorldMatrix).add(e.vector);o=(new a.Matrix4).copy(e.initWorldMatrix).setPosition(l)}else if(e.axis&&e.center&&void 0!==e.angle){var s=(new a.Matrix4).copy(e.initWorldMatrix),c=(new a.Matrix4).makeRotationAxis(e.axis,e.angle),u=(new a.Matrix4).setPosition(e.center),v=(new a.Matrix4).getInverse(u).multiply(s),h=(new a.Matrix4).copy(c).multiply(v);o=(new a.Matrix4).copy(u).multiply(h)}}if(o){var g=(new a.Matrix4).getInverse(e.path.getParentPath().getWorldMatrix());return n.setPosition(g.multiply(o)),0}}}function S(){m&&(P&&P.clean(),P=new c({modelController:m.getController()}),x=[],D=null,d&&d.deleteOverrides(d.getOverrides()),m.getViewer().render())}function L(e){var t=[];e.forEach(function(e){if(e.moved){var n={};t.push(n),n.path=e.path,n.currentMatrix=e.path.getMatrix(),n.isLocked=e.isLocked;var o=d?d.getUniqueOverrideFromIdPath(C(e.path)):null;o&&o.setPosition(null),delete e.moved,delete e.isLocked}}),p.publish({event:"onCancelMove",data:{objectsCancelled:t,bEmptyMove:!P.some(function(e){return e.moved}),someMovedObjectsAreLocked:P.some(function(e){return e.isLocked})}}),m&&(m.getViewer().render(),m.publish({event:"onModelUpdated",data:{rootNodes:m.getRoots()}}))}function k(){for(var e=[],t=P.length-1;t>=0;--t){var n=P[t];n.moved&&(e.push(n),P.splice(t,1))}L(e),P.clean(e),S()}function O(e){var t=[];return e.forEach(function(e){if(e.path||e.pathElement){var n=M.getSubPathToMovable(e.path||e.pathElement);!n||t.some(function(e){return e.path.isEqual(n)})||t.push({path:n})}}),t}b.push(m.subscribe({event:"onRootRemoved"},function(e){var t=[],n=new c({modelController:m.getController()});P.forEach(function(o){o.path&&(l.getNodeID(o.path.externalPath[1])!==e.id?n.push(o):t.push(o))}),n.length!==P.length&&(L(t),P.clean(t),P=n)})),b.push(m.subscribe({event:"onEndDelete"},function(e){for(var t=[],n=e.pathToReparent,o=P.length-1;o>=0;--o){var r=P[o];r.path.externalPath.some(function(e){return l.getNodeID(e)===n})&&(t.push(r),P.splice(o,1))}L(t),P.clean(t)})),b.push(m.subscribe({event:"onBeginReparent"},function(){k()})),b.push(m.subscribe({event:"onEndMatriceUpdate"},function(){k()})),require(["DS/UPSCommands/UPSCmdUtils"],function(e){v=e}),this.cancelLocked=function(){!function(){for(var e=[],t=P.length-1;t>=0;--t){var n=P[t];n.isLocked&&(e.push(n),P.splice(t,1))}L(e),P.clean(e)}()},this.onMoveBegin=function(e){if(E=!0,x=[],e&&e.objectsMoved&&e.from&&e.moveMode&&("Persistent"===e.moveMode||"Transient"===e.moveMode)){D=e.moveMode,h=void 0,g=void 0;var t=O(e.objectsMoved);t.forEach(function(t){var n={path:t.path,beforeMoveMatrix:t.path.getMatrix(),initWorldMatrix:t.path.getWorldMatrix()};e.axis&&e.center?(n.axis=e.axis,n.center=e.center,n.angle=0):n.vector=new a.Vector3,x.push(n),P.initMove(t.path)}),p.publish({event:"MoveBegin",data:{objectsMoved:t,from:e.from,moveMode:D}})}},this.onMove=function(e){if(E=!0,e&&e.objectsMoved&&e.from&&(e.vector||void 0!==e.angle||e.transformation||e.leafMatrix||e.worldMatrix)&&("Persistent"===D||"Transient"===D)){if(e.transformation||e.leafMatrix||e.worldMatrix)h=void 0,g=void 0;else if(void 0===h&&e.vector)h=new a.Vector3;else if(void 0===g&&void 0!==e.angle)g=0;else if(g&&void 0===e.angle||h&&void 0===e.vector)return;var t,n,o=O(e.objectsMoved);h?(t=(new a.Vector3).subVectors(e.vector,h),h=(new a.Vector3).copy(e.vector)):void 0!==g&&(n=e.angle-g,g=e.angle);var r=!1;o.forEach(function(o){x.some(function(a){return!!o.path.isEqual(a.path)&&(e.transformation?(a.transformation=e.transformation,a.vector=a.angle=a.leafMatrix=a.worldMatrix=void 0):e.leafMatrix?(a.leafMatrix=e.leafMatrix,a.vector=a.angle=a.transformation=a.worldMatrix=void 0):e.worldMatrix?(a.worldMatrix=e.worldMatrix,a.vector=a.angle=a.transformation=a.leafMatrix=void 0):a.vector?(a.vector.add(t),a.transformation=a.leafMatrix=a.worldMatrix=void 0):a.axis&&void 0!==a.axis&&(a.angle+=n,a.transformation=a.leafMatrix=a.worldMatrix=void 0),("Transient"===D||"Persistent"===D&&0===I(a))&&(r=!0),!0)})}),o.length>0&&"Persistent"===D&&o.forEach(function(e){u(e.path.getLastElement(!0))&&(P.addMove(e.path),P.bPersistantMoved=!0)}),r&&p.publish({event:"Move",data:{objectsMoved:o,from:e.from,moveMode:D}})}},this.onMoveEnd=function(e){if(E=!1,e&&e.from&&e.status&&("Persistent"===D||"Transient"===D)){if("Persistent"===D&&"Cancelled"===e.status)x.forEach(function(e){var t=d.getUniqueOverrideFromIdPath(C(e.path));t&&t.setPosition(e.beforeMoveMatrix)});else if("Transient"===D&&"Moved"===e.status){var t=[];if(x.forEach(function(e){if(0===I(e)){var n={path:e.path.clone()};t.push(n)}}),t.length>0){var n={objectsMoved:[],from:e.from,moveMode:"Persistent"};t.forEach(function(e){if(u(e.path.getLastElement(!0))){var t=P.addMove(e.path);t&&n.objectsMoved.push(t)}}),p.publish({event:"Move",data:n})}}p.publish({event:"MoveEnd",data:{from:e.from,status:e.status}}),m.publish({event:"onModelUpdated",data:{rootNodes:m.getRoots()}}),x=[]}},this.isMoving=function(){return E},this.subscribe=function(e,t){var n;return"MoveBegin"!==e&&"Move"!==e&&"MoveEnd"!==e&&"onValidateMove"!==e&&"onCancelMove"!==e||(n=p.subscribe({event:e},t)),n},this.unsubscribe=function(e){p.unsubscribe(e)},this.getSubPathToMovable=function(e){if(e){for(var t=new o(e.externalPath);t&&!u(t.getLastElement(!0));)t=t.getParentPath();if(t){var n=t.externalPath.length>1?l.getNodeType(t.externalPath[t.externalPath.length-2]):"";s.indexOf(n)>-1&&(t=null)}return t}},this.terminateMove=function(e){!0===e.save?function(){var e=[],t=[],n=[],o={};function r(){if(p.publish({event:"onValidateMove",data:{objectsMoved:t,objectsCancelled:e,splitInstances:n,eventID:"success"}}),m.getController().onMove3D&&Array.isArray(o.instances)){var r=o.instances.filter(function(e){return!n.some(function(t){return t.oldId===e.instance})});r.length&&m.getController().onMove3D({instances:r})}S(),t.length&&m.getController().forceRefresh()}function a(){S(),p.publish({event:"onValidateMove",data:{objectsMoved:[],objectsCancelled:e.concat(t),eventID:"error"}})}if(P.forEach(function(n){if(n.moved){var o={};(n.isLocked?e:t).push(o),o.instanceId=l.getNodeID(n.path.getLastElement(!0)),o.path=n.path,o.currentMatrix=n.path.getMatrix(),o.isLocked=n.isLocked,delete n.moved,delete n.isLocked}}),!w)return p.publish({event:"onValidateMove",data:{objectsMoved:t.map(function(e){return{pathElement:e.path,worldMatrix:e.path.getWorldMatrix()}}),eventID:"success"}}),void S();(o={onComplete:function(e){"success"===e.status?(e.results&&e.results.length&&e.results.forEach(function(e){"success"!==e.status&&window.console.log("Whole transaction is OK but it fails for an instance. Unexpected!!"),e.instanceOut&&e.instance&&e.instance!==e.instanceOut&&n.push({oldId:e.instance,newId:e.instanceOut})}),t.length&&m.getController().switchAuthoringMode(!0,!0,"PADSession_disabling_index_authoring"),t.forEach(function(e){!0===require("DS/PADUtils/PADSettingsMgt").getSetting("enopad3dviewer_lightNodeModel")?m.getController().updateInstance(e.instanceId,{matrix:e.currentMatrix}):e.path.getLastElement(!0).setMatrix(e.currentMatrix)}),n.length?m.getController().replaceInstances({data:n},{onComplete:r,onFailure:function(){window.console.log("An id has no node associated. Unexpected!!"),r()}}):r()):a()},onFailure:a,instances:t.map(function(e){return{instance:e.instanceId,hasPositioningMatrix:[0,1,2,4,5,6,8,9,10,12,13,14].map(function(t){return e.currentMatrix.elements[t]})}})}).instances.length?v.move3D(o):r()}():k()},this.isPathLocked=function(e){if(!e||!e.pathElement||!e.onCompleted)return{returnCode:-1};var t,n=e.pathElement.getLastElement(!0);if(l.getRoots(m).some(function(e){return e===n}))return t={returnCode:0,pathElement:e.pathElement,isLocked:!1},setTimeout(function(){e.onCompleted(t)},0),t;if(!l.isInstance(n))return{returnCode:-2};t={returnCode:0};var o=P.isIn(e.pathElement);return o&&o.hasOwnProperty("isLocked")?(t.pathElement=e.pathElement,t.isLocked=o.isLocked,setTimeout(function(){e.onCompleted({pathElement:e.pathElement,isLocked:o.isLocked})},0)):(o||(o=P.initMove(e.pathElement)),o.isLocked=!1,t.pathElement=e.pathElement,t.isLocked=o.isLocked,setTimeout(function(){e.onCompleted({pathElement:e.pathElement,isLocked:o.isLocked})},0)),t},this._destroy=function(){b.forEach(function(e){m.unsubscribe(e)}),b=[],k(),S(),d&&t&&t.removeSceneGraphOverrideSet(d),m=t=M=null}}}),f=[];return t.singleton({init:function(){},giveMoveManager:function(e){var t;return e&&e.context&&f.some(function(n){if(n.context===e.context)return t=n.moveManager,!0}),t},getMoveManager:function(e){var t;if(e&&e.context&&(f.some(function(n){if(n.context===e.context)return t=n.moveManager,!0}),!t)){var n=new d(e);f.push({context:e.context,moveManager:n}),t=n}return t},unreferenceMoveManager:function(e){f.some(function(t,n){return t.context===e.context&&(f.splice(n,1),t.moveManager._destroy(),!0)})}})}),define("DS/CATW3DMoveManager/CATW3DMoveReferent",["UWA/Class","DS/Visualization/PathElement","DS/ENOPAD3DViewer/utils/PAD3DViewerModelServices","i18n!DS/CATW3DMoveManager/assets/nls/CATW3DMoveReferent"],function(e,t,n,o){"use strict";var r=["PPRContext","Drawing"],a="defaultMoveReferent",i="moveLeafPart";function l(e){return e&&n.isPLMNode(e)}function s(e){return e&&n.isReference(e)}function c(e){return e&&n.isInstance(e)}function u(e){if(!e||!e.externalPath||0===e.externalPath.length||e.internalPath&&e.internalPath.length)return!1;if(!l(e.externalPath[e.externalPath.length-1]))return!1;for(var t=e.externalPath.length-2;t>=0;--t)if(l(e.externalPath[t]))return!1;return!0}function d(e){if(e&&e.externalPath)for(var t=0;t<e.externalPath.length;t++){var n=e.externalPath[t];if(l(n))return n}}var f=e.extend({init:function(e){var o={},a=e.context;n.getRoots(a).forEach(function(e){o[n.getNodeID(e)]=[]}),a.subscribe({event:"onRootAdded"},function(e){e&&e.id&&(o[e.id]=[])}),a.subscribe({event:"onRootRemoved"},function(e){e&&e.id&&delete o[e.id]}),this.addMoveReferent=function(e){var t,r,a,i,l,f,v,h=!1;if(!u(e)&&(t=d(e))&&(r=n.getNodeID(t))&&o[r])for(a=o[r],f=e.externalPath.length-1;f>=0;--f)if(v=e.externalPath[f],h)s(v)&&-1!==(l=a.indexOf(n.getNodeID(v)))&&a.splice(l,1);else if(c(v)){var g=v.children&&v.children.length?v.children[0]:null;if(!g||!s(g))return;i=n.getNodeID(g),-1===a.indexOf(i)&&a.push(i),h=!0}},this.getMoveReferent=function(e){if(e){var a;if(u(e))a=null;else{a=new t;var l=this.getSubPathToMovable(e),f=d(l),v=n.getNodeID(f);if(!v||!o[v])return;var h,g=o[v],M=!1;for(h=0;h<l.externalPath.length;h++){var p=l.externalPath[h];if(c(p)){var m=p.children[0],x=n.getNodeID(m);g.indexOf(x)>-1&&(M=!0)}if(a.addElement(p),M)break}if(!M){var P=!1,D="FirstLevel"!==i&&"moveFirstLevel"!==i;for(h=D?a.externalPath.length-1:0;D?h>=0:h<a.externalPath.length;D?--h:++h){var b=a.externalPath[h];if(s(b)&&r.indexOf(n.getNodeType(b))>-1)h++;else if(c(b)){P=!0,a.externalPath.length=h+1;break}}P||(a=null)}}return a}},this.getSubPathToMovable=function(e){if(e){for(var o,a=new t(e.externalPath);a&&!c(a.getLastElement(!0));)a=a.getParentPath();if(a){var i=a.externalPath.length>1?n.getNodeType(a.externalPath[a.externalPath.length-2]):"";r.indexOf(i)>-1&&(a=null)}if(!a)o=new t,e.externalPath.some(function(e){return o.addElement(e),s(e)})&&(a=o);if(!a)o=new t,e.externalPath.some(function(e){return o.addElement(e),l(e)})&&(a=o);return a}}}}),v=[];return e.singleton({init:function(){},getPreferencesDefinition:function(){return[{nls:o.title,id:"W3MprefMove",type:"section",preferences:[{nls:o.allowDirectManipulation,id:"C3DAllowDirectManipulation",type:"checkbox",setValue:function(e){e!==("true"===localStorage.getItem("C3DAllowDirectManipulation"))&&localStorage.setItem("C3DAllowDirectManipulation",e?"true":"false")},getValue:function(){return"true"===localStorage.getItem("C3DAllowDirectManipulation")},getDefaultValue:function(){return!1}},{nls:o.moveSection,type:"radio",id:a,options:[{id:"moveFirstLevel",nls:o.first},{id:"moveLeafPart",nls:o.leaf}],setValue:function(e){"moveFirstLevel"===e?localStorage.setItem(a,"FirstLevel"):localStorage.removeItem(a)},getValue:function(){return"FirstLevel"===localStorage.getItem(a)?"moveFirstLevel":"moveLeafPart"},getDefaultValue:function(){return"moveLeafPart"}}]}]},getMoveReferentManager:function(e){var t;if(e&&e.context&&(v.some(function(n){return n.context===e.context&&(t=n.moveReferent,!0)}),!t)){var n=new f(e);v.push({context:e.context,moveReferent:n}),t=n}return t},setMoveReferentDefault:function(e){i=e}})});