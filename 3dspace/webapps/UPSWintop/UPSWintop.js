/*!  COPYRIGHT DASSAULT SYSTEMES 2016   */
define("DS/UPSWintop/UPSWebInWinHelper",["DS/WebInWinUtils/dscef"],function(n){"use strict";return{sendNotificationToNative:function(e){void 0!==n?n.sendString(e):console.log("> sendNotification(",e,")")},getFakeRevisions:function(n,e){var t={};function i(n,e){if(!t[e]){var i=[];n.some(function(n){if(n.id===e)return i.push(n),!0});for(var o=e,r=function(n){if(n.ancestors&&n.ancestors[0].id===o)return i.push(n),o=n.id,!0};n.some(r););return t[e]=i,i}return t[e]}function o(n,e,t){var i=void 0;if(n.some(function(n){if(n.id===t)return i=t,!0}),void 0!==i)return i;for(var o=e,r=function(n){if(n.id===o){if(n.ancestors&&n.ancestors[0].id)return o=n.ancestors[0].id,!0;i=o}};n.some(r););return i}var r=[],s="string"==typeof e?JSON.parse(e):e;return n.forEach(function(n){var e=n,t=function(n,e){for(var t=n.length,r=0;r<t;r++)for(var s=n[r],a=s.versions,c=a.length,d=s.item.vid,u=0;u<c;u++)if(a[u].id===e)return i(a,d=o(a,e,d))}(s,e);r[e]=t}),r}}}),define("DS/UPSWintop/UPSWebInWinContext",["DS/UPSWintop/UPSWebInWinHelper"],function(n){"use strict";return{myContext:"webInWin",isExternalContext:!0,_jsonIn:void 0,_nodes:[],init:function(n){var e=this,t=0;e._jsonIn=n,function i(o,r){var s=o.referenceId,a=n.data[s],c={nodeId:t,referenceId:s,instanceId:o.instanceId,parentIdx:r,children:[],options:{grid:{}},isExpanded:function(){return this.bExpanded},isExpandable:function(){return this.children.length>0}};c.bExpanded=!0===o.isExpanded&&o.isExpanded,c.isSelected=void 0!==o.isSelected&&o.isSelected,c.isReplaceable=void 0===a.isReplaceable||a.isReplaceable,void 0!==a.name&&(c.name=a.name,c.options.label=a.name),void 0!==a.type&&(c.type=a.type),void 0!==a.type_nls&&(c.type_nls=a.type_nls,c.options.grid["ds6w:type"]=a.type_nls),void 0!==a.owner&&(c.owner=a.owner,c.options.grid["ds6w:responsible"]=a.owner),void 0!==a.icon&&(c.options.icons=[a.icon]),void 0!==a.code&&(c.options.grid["ds6wg:revision"]=a.code),void 0!==a.maturity_nls&&(c.options.grid.maturityCurrent=a.maturity_nls),e._nodes.push(c);r=t;return t++,o.children&&(c.children=[],o.children.forEach(function(n){var e=i(n,r);c.children.push(e)})),c.nodeId}(n.structure,void 0)},getSelectedNodes:function(){var n=this,e=[];return[n._nodes[0]].forEach(function(t){!function t(i){i.isSelected&&e.push(i),i.children.forEach(function(e){t(n._nodes[e])})}(t)}),e},isThereARootSelected:function(){var n=this,e=this.getSelectedNodes(),t=0;if(e.length>0)return e.forEach(function(e){n.isRoot(e)&&t++}),t>0},getSelectedRoots:function(){var n=this,e=this.getSelectedNodes(),t=[];if(e.length>0)return e.forEach(function(e){n.isRoot(e)&&t.push(e)}),t},getParentWithChild:function(n){var e=[];if(null!=n&&n.length)for(var t=n.length,i=0;i<t;i++)for(var o=n[i],r=0;r<t;r++)if(i!==r)for(var s=n[r],a=this.getParent(s);a;)a===o&&e.push({parent:o,child:s}),a=this.getParent(a);return e},getInstance:function(n){return n.instanceId},getRelationID:function(n){return n.instanceId},getReference:function(n){return n.referenceId},getParent:function(n){if(void 0!==n.parentIdx)return this._nodes[n.parentIdx]},getParents:function(n){for(var e=[],t=this.getParent(n);void 0!==t;)e.push(t),t=this.getParent(t);return e},getRoot:function(n){var e=this.getParents(n);return 0===e.length?n:e[e.length-1]},getRoots:function(){return[this._nodes[0]]},getType:function(n){return n.type},getName:function(n){return n.name},getChildren:function(n){var e=this,t=[];return void 0!==n.children&&n.children.forEach(function(n){t.push(e._nodes[n])}),t},getOrdering:function(n){},getNodesById:function(n){var e=this,t=[];return e.getRoots().forEach(function(i){!function i(o){o.referenceId===n?t.push(o):e.getChildren(o).forEach(function(n){i(n)})}(i)}),t},isRoot:function(n){return void 0===n.parentIdx},isDescendantOf:function(n,e){if(null!=n){if(this.getReference(n)===e)return!0;if(!this.isRoot(n)){var t=this.getParent(n);if(t)return this.isDescendantOf(t,e)}}return!1},refresh:function(n){},author:function(n){},beginBlockingTransaction:function(n){require(["DS/Controls/ModalContainer"],function(n){var e=void 0;e=widget&&widget.body?widget.body:document.body,n.removeModal(e),n.createModal(e)})},endBlockingTransaction:function(){require(["DS/Controls/ModalContainer"],function(n){var e=void 0;e=widget&&widget.body?widget.body:document.body,n.removeModal(e)})},displayNotification:function(e){n.sendNotificationToNative("onDisplayNotification="+JSON.stringify(e))},modalChooser:function(n){},addRoot:function(n,e,t){},getSetting:function(n){switch(n){case"tenant":return this._jsonIn.settings.tenant;case"lang":return this._jsonIn.settings.lang;case"securityContext":return this._jsonIn.settings.security_context;default:return}}}}),define("DS/UPSWintop/UPSReplaceByRevisionForWintop",["DS/UPSWintop/UPSWebInWinContext","DS/UPSWintop/UPSWebInWinHelper","DS/UPSCommands/commands/UPSAuthCmdReplaceByRevision"],function(n,e,t){"use strict";return{init:function(i,o){console.log("> UPSReplaceByRevisionForWintop.init");var r=n;r.init(i);var s=i.options;void 0===s.webInWin&&(s.webInWin=!0),s.launchVersionExplorer=function(n){e.sendNotificationToNative("launchVersionExplorer="+n)},s.cbUpdateWIWselection=function(n){e.sendNotificationToNative("cbUpdateWIWselection="+JSON.stringify(n))};var a={context:r,options:s,ID:"UPSAuthCmdReplaceByRevision",isEnabled:!0,arguments:[],onWIWClose:function(n){e.sendNotificationToNative("onOKButton="+JSON.stringify(n))},onWIWCancel:function(){e.sendNotificationToNative("onCancelButton=true")},onWIWPageReady:function(){e.sendNotificationToNative("onPageReady=true")}};!0===o&&(a.fakeRevisions=i.graphs,a.getFakeRevisions=function(n,t){return e.getFakeRevisions(n,t)});var c=new t(a);return c.beginExecute(),c}}}),define("DS/UPSWintop/UPSUpdateRevisionForWintop",["DS/UPSWintop/UPSWebInWinContext","DS/UPSWintop/UPSWebInWinHelper","DS/UPSCommands/commands/UPSAuthCmdRevisionUpdate"],function(n,e,t){"use strict";return{init:function(i,o){console.log("> UPSUpdateRevisionForWintop.init");var r=n;r.init(i);var s=i.options;void 0===s.webInWin&&(s.webInWin=!0),s.launchVersionExplorer=function(n){e.sendNotificationToNative("launchVersionExplorer="+n)},s.cbUpdateWIWselection=function(n){e.sendNotificationToNative("cbUpdateWIWselection="+JSON.stringify(n))};var a={context:r,options:s,ID:"UPSAuthCmdRevisionUpdate",isEnabled:!0,arguments:[],onWIWClose:function(n){e.sendNotificationToNative("onOKButton="+JSON.stringify(n))},onWIWCancel:function(){e.sendNotificationToNative("onCancelButton=true")},onWIWPageReady:function(){e.sendNotificationToNative("onPageReady=true")}};!0===o&&(a.fakeRevisions=i.graphs,a.getFakeRevisions=function(n,t){return e.getFakeRevisions(n,t)});var c=new t(a);return c.beginExecute(),c}}});