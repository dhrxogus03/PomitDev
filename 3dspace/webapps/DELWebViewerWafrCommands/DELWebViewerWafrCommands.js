define("DS/DELWebViewerWafrCommands/actions/StandardActions",["DS/Selection/CSOManager","DS/DELWeb3DViewerV2/NodeUtil"],function(e,t){"use strict";return{toggleHideShow:async function(n,i){const o=i.executionContext.getComponent("DELWebViewer");let r=e.get()||[],a=o.getViewerBehavior();a&&await a.toggleNodeVisibility({path:r.map(e=>t.getPathFromPathElement(e.pathElement))}),n()},activateBuildUp:function(e,t){const n=t.executionContext,i=n.getComponent("DELWebViewer"),o=n.getComponent(WAfrStandardComponentKey.ModelEvents);i.getViewerBehavior().setOperation({...t.args,clear:!0}).then(()=>{o.publish({event:"onBuildUpActivated",data:{data:t.args,origin:name}})}).fail(e=>{o.publish({event:"onBuildUpActivateFailed",data:{data:e.input,error:e.error,origin:name}}),e&&e.error&&"DELVIEWER_E003"===e.error.code&&o.publish({event:"onBuildupConnectionFailed",data:{data:t.args,error:e.error,origin:name}})})},deactivateBuildUp:function(e,t){const n=t.executionContext,i=n.getComponent("DELWebViewer"),o=n.getComponent(WAfrStandardComponentKey.ModelEvents);i.getViewerBehavior().removeOperation().then(()=>{o.publish({event:"onBuildUpDeactivated",data:{data:t.args}}),e()})},initializeBuildup:function(e,t){const n=t.executionContext,i=n.getComponent("DELWebViewer"),o=n.getComponent(WAfrStandardComponentKey.ModelEvents);i.getViewerBehavior().initializeBuildup(function(e={}){let t=e.scopedMfg||{},n=e.resource||{};return{mfgId:t.id,installPath:t.occurrence,resourceId:n.id,processId:e.occurrence&&e.occurrence.length>0?e.occurrence[0]:e.id,filter:e.filter?e.filter:null}}(t.args)).then(()=>{o.publish({event:"onBuildupInitializeComplete",data:{data:t.args}}),e()}).fail(function(e){o.publish({event:"onBuildupInitializeFailed",data:{data:t,error:e.error}})})}}});