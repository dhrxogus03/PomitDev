define("DS/DELPPWOperations3DViewerModule/ScopeMfgItemSelectionUI",["UWA/Core"],function(e){"use strict";return function(t,n,i){var s,o,a,r,c=1,l=2,d=n.getComponent("Element"),u=n.getComponent("Accordeon"),f=n.getComponent("Button"),g=n.getComponent("ComboBox"),p=n.getComponent("TooltipModel"),m=null,I=null,h=null;return s=function(s){var o,a,r;o=function(n){switch(n){case c:return function(){I.close()};case l:return function(){var t=h.rootField,n=h.occField,i=h.scopedMfgItemField;e.is(s,"function")&&e.is(t)&&e.is(n)&&e.is(i)&&s(t.value,n.value,i.value),I.close()};default:t.log("wrong option")}},a={No:new f({label:i.getNLSValue("ScopeMfgItemSelectionUI.Close.Title"),onClick:o(c)}),Yes:new f({disabled:!1,label:i.getNLSValue("ScopeMfgItemSelectionUI.Load.Title"),onClick:o(l)})},e.is(n)?(r={title:i.getNLSValue("ScopeMfgItemSelectionUI.Dialog.Title"),domId:"ScopeMfgItemSelectionUI-dialog",content:m,resizableFlag:!0,modalFlag:!1,minWidth:290,width:400,buttons:a,visibleFlag:!1},(I=n.create("Dialog",r)).close=function(){e.is(m)&&m.destroy(),this.destroy(),I=null,h=null}):t.debug("uxFactoryBehavior is not available.")},o=function(t){var n,i;return n=new e.Element("div",{class:"accordeon-section-container"}),i=new d("div",{class:"section-container"}),n.inject(m),new u({items:[{header:t,content:i,expandedFlag:!0}],style:"filled-separate"}).inject(n),i.addEvent("resize",function(){var t,n,s;s=i.getElements(".wux-field-container"),i.clientWidth<290?(t="inline-container",n="block-container"):(t="block-container",n="inline-container"),e.is(s)&&s.forEach(function(e){e.removeClassName(t),e.addClassName(n)})}),i},a=function(t,n){t.forEach(function(t){var i,s;i=new e.Element("div",{class:"wux-field-container inline-container"}),new e.Element("h6",{class:"wux-textElement",text:t.label}).inject(i).tooltipInfos=new p({shortHelp:t.label}),s=new g({elementsList:t.elementsList,actionOnClickFlag:!1,enableSearchFlag:!1,value:t.value,disabled:t.disabled}),e.is(t.onChange,"function")&&s.addEventListener("change",t.onChange.bind(null,h)),h[t.name]=s,s.inject(i),i.inject(n)})},r=function(t){var n,s,r,c,l,d={},u={};Array.isArray(t)&&t.length>0&&(r={name:"rootField",label:i.getNLSValue("ScopeMfgItemSelectionUI.Field.Root.Title"),elementsList:[],disabled:!0,onChange:function(t){var n,i,s,o,a,r,c;n=t.rootField,s=t.occField,r=t.scopedMfgItemField,e.is(n)&&e.is(s)&&e.is(r)&&(i=n.value,e.is(d[i])&&(a=(o=d[i])[0].valueItem,s.setProperties({elementsList:o,value:a}),e.is(u[a])&&(c=u[a],r.setProperties({elementsList:c,value:c[0].valueItem}))))}},c={name:"occField",label:i.getNLSValue("ScopeMfgItemSelectionUI.Field.Occurence.Title"),elementsList:[],disabled:!0,onChange:function(t){var n,i,s,o;n=t.occField,s=t.scopedMfgItemField,e.is(n)&&e.is(s)&&(i=n.value,e.is(u[i])&&(o=u[i],s.setProperties({elementsList:o,value:o[0].valueItem})))}},l={name:"scopedMfgItemField",label:i.getNLSValue("ScopeMfgItemSelectionUI.Field.ScopedMfgItem.Title"),elementsList:[],disabled:!0},t.forEach(function(e){var t=[];e.occurences.forEach(function(e){var n=[];t.push({labelItem:e.label,valueItem:e.pid}),e.scopedMfgItems.forEach(function(e){n.push({labelItem:e.label,valueItem:e.pid})}),u[e.pid]=n}),d[e.pid]=t}),s=t[0],r.disabled=!1,r.value=s.pid,r.elementsList=t.map(function(e){return{labelItem:e.label,valueItem:e.pid}}),e.is(d[r.value])&&(c.disabled=!1,c.elementsList=d[r.value],c.value=c.elementsList[0].valueItem,e.is(u[c.value])&&(l.disabled=!1,l.elementsList=u[c.value],l.value=l.elementsList[0].valueItem)),h=[],n=o(i.getNLSValue("ScopeMfgItemSelectionUI.Section.Process.Title")),a([r,c],n),n=o(i.getNLSValue("ScopeMfgItemSelectionUI.Section.MfgItems.Title")),a([l],n))},{createDialog:function(t){!e.is(I)&&e.is(t)&&e.is(t.data)&&e.is(t.onSelectCallback)&&(m=new d("div",{class:"ScopeMfgItemSelectionUI-Container"}),s(t.onSelectCallback),r(t.data),I.show())},isActive:function(){return!!e.is(I)&&I.visibleFlag},destroyUI:function(){e.is(I)&&I.close()}}}}),define("DS/DELPPWOperations3DViewerModule/Viewer3DModule",["UWA/Core"],function(){"use strict";return{behaviors:["RoutingsViewer3DBehavior","SelectionBehavior","LinkBehavior","ProcessImplementBehavior","ProductAbsPathHelperBehavior"],creator:function(){return{name:"Viewer3DModule",onStart:function(e,t){t()},onStop:function(){}}}}}),define("DS/DELPPWOperations3DViewerModule/Operations3DViewerModule",["UWA/Core","DS/TransientWidget/TransientWidget","DS/DELPPWOperations3DViewerModule/ScopeMfgItemSelectionUI"],function(e,t,n){"use strict";return{behaviors:["InterWidgetComBehavior","UXFactoryBehavior","ResourceBehavior","ModelBehavior","RootsBehavior","LinkBehavior","ProcessImplementBehavior","CapableResourceLinkBehaviour","SelectionBehavior","Operations3DViewerBehavior","BuildUpBehavior"],creator:function(i,s,o,a,r,c,l,d,u,f,g,p){const m="DELLmiHeaderWorkPlanReference",I={commands:[{identifier:"DELWebOERHomeCmd",disable:!0},{identifier:"DELWebOERToggleDataGridViewCmd",disable:!0}]};var h,P,v,S,D,b,E,R,L,O,y,C,M,V,w,A,k,T,W,U,B,F,x,j,N,H,K,Y,_,G,q,z,X,J,Q,Z,$,ee,te,ne,ie,se,oe,ae,re,ce,le,de=s.isCloud()?"DELOERC_AP":"DELOER_AP",ue=null,fe=null,ge=[],pe=[],me={};return v=function(){return g.getPreferences()},S=function(e,t,n){var s={loadedObjInfos:{sysPID:e,scopedMfgItemPID:t,resourceItemPID:n}};g.updatePreferences(s),i.notify("set3DVisibilityState",[{isVisible:!0,parentPID:t}])},D=function(t){var n,s=!!e.is(t)&&t;P=v(),g.updatePreferences(),fe=null,ue=null,s?p.resetAllSessions.call(p):p.resetActiveSession.call(p),e.is(P)&&(n=P.loadedObjInfos,e.is(n)&&i.notify("set3DVisibilityState",[{isVisible:!1,parentPID:n.scopedMfgItemPID}]))},b=function(e){var t,n=[];if(1===e.length)n=e;else for(t=0;t<e.length;t++)t%2==1&&n.push(e[t]);return n},E=function(t){var n,i,s=t.absPath,o=[],a=s[s.length-1],c=e.is(a)?a:t.nodeId,d=null,u=r.getReference(c);if(e.is(u)||(i=r.getInstance(a),e.is(i)&&(u=r.getReferenceModelFromInstance(i),d=i.id,c=u.id)),e.is(c))switch(r.getPPRType(u)){case"OPERATION":case"SYSTEM":l.getConnectedObjects(e.is(d)?d:c,s,{relationTypes:["ProcessImplementLink","ProcessImplementLinkOcc"]}).forEach(function(e){var t=r.transformToRIROccurrencePath(e);o.push(t)});break;case"PROCESS":case"RESOURCE":case"SERVICE":n=r.transformToRIROccurrencePath(s.length>0?s:c),o.push(n)}return o},R=function(t){var n,i,o,a=!1;return s.isOpsViewerWidgetLinked()&&(i=v(),e.is(i)&&(o=i.loadedObjInfos,e.is(o.sysPID)&&(t===o.sysPID?a=!0:(n=r.getReference(t),(r.isAKindOf(n,m)||r.isAKindOf(n,"DELLmiServiceHeaderWorkPlanReference"))&&r.getInstancesFromCollection(t).forEach(function(e){r.getReferenceModelFromInstance(e).get("PID")===o.sysPID&&(a=!0)}))))),a},L=function(t){var n,i,o,a=!1;return s.isOpsViewerWidgetLinked()&&(i=v(),!e.is(i)&&e.is(P)&&(o=P.loadedObjInfos,e.is(o.sysPID)&&(t===o.sysPID?a=!0:(n=r.getReference(t),(r.isAKindOf(n,m)||r.isAKindOf(n,"DELLmiServiceHeaderWorkPlanReference"))&&r.getInstancesFromCollection(t).forEach(function(e){r.getReferenceModelFromInstance(e).get("PID")===o.sysPID&&(a=!0)}))))),a},O=function(t,n){var i=[];return Array.isArray(t)&&t.length>0&&t.forEach(function(t){var s,o,a,c,d=[],u=[];o=r.getReference(t),r.isAKindOf(o,m)||r.isAKindOf(o,"DELLmiServiceHeaderWorkPlanReference")?((e.is(n)?n:r.getInstancesFromCollection(t)).forEach(function(e){var t,n,i=[];n=(t=r.getReferenceModelFromInstance(e)).get("PID"),l.getConnectedObjects(n,null,{relationTypes:["ProcessImplementLink","CapableResourcesStructureLink"]}).forEach(function(e){var t=r.getReference(e);"PROCESS"===t.get("PPRTYPE")||"SERVICE"===t.get("PPRTYPE")?d.push(e):"RESOURCE"===t.get("PPRTYPE")&&(a=e)}),d.length>0&&(d.forEach(function(e){var t=r.getReference(e);i.push({pid:e,label:t.get("PLMEntity.V_Name")})}),u.push({pid:n,label:t.get("PLMEntity.V_Name"),scopedMfgItems:i,resource:a})),d=[]}),u.length>0&&(s={pid:t,label:o.get("PLMEntity.V_Name"),occurences:u})):(l.getConnectedObjects(t,null,{relationTypes:["ProcessImplementLink","CapableResourcesStructureLink"]}).forEach(function(e){var t=r.getReference(e);"PROCESS"===t.get("PPRTYPE")||"SERVICE"===t.get("PPRTYPE")?d.push(e):"RESOURCE"===t.get("PPRTYPE")&&(a=e)}),d.length>0&&(c=[],d.forEach(function(e){var t=r.getReference(e);c.push({pid:e,label:t.get("PLMEntity.V_Name")})}),s={pid:t,label:o.get("PLMEntity.V_Name"),occurences:[{pid:t,label:o.get("PLMEntity.V_Name"),scopedMfgItems:c,resource:a}]})),e.is(s)&&i.push(s)}),i},y=function(t){var s,r,c,d,u;if(u=function(){var t,n;t=v(),e.is(t)&&(n=t.loadedObjInfos,e.is(n.scopedMfgItemPID)&&V(n.scopedMfgItemPID,n.resourceItemPID))},t.length>0){if(1===t.length&&(c=t[0],e.is(c.occurences)&&1===c.occurences.length&&(d=c.occurences[0],e.is(d.scopedMfgItems)&&1===d.scopedMfgItems.length)))return r=d.scopedMfgItems[0].pid,s=d.resource,u(),void M(d.pid,r,s);(h=new n(i,o,a)).createDialog({data:t,onSelectCallback:function(t,n,i){e.is(t)&&e.is(n)&&e.is(i)&&(u(),s=l.getConnectedObjects(n,null,{relationTypes:["CapableResourcesStructureLink"]}),M(n,i,s[0]))}})}},C=function(t,n){e.is(t)&&s.publishEvent("DS/DELExternalWidgetCom/"+t,n)},M=function(t,n,i){var s,o=[];s=r.getReferenceModel(t),e.is(s)&&"SYSTEM"===r.getPPRType(s)&&(S(t,n,i),o.push({id:n}),i&&o.push({id:i}),C("LoadData",{items:o}))},V=function(t,n){var i=[],s=r.getReferenceModel(t),o=r.getReferenceModel(n);!e.is(s)||"PROCESS"!==r.getPPRType(s)&&"SERVICE"!==r.getPPRType(s)||(D(),i.push({id:t}),e.is(o)&&"RESOURCE"===r.getPPRType(o)&&i.push({id:n}),C("RemoveRoots",{items:i}))},w=function(){C("RemoveAll")},A=function(e){var t=v().loadedObjInfos,n=r.getReferenceModel(e[0]);(r.isAKindOf(n,m)||r.isAKindOf(n,"DELLmiServiceHeaderWorkPlanReference"))&&e.splice(0,2),pe=p.getContextItemRIRPaths(),C("ActivateBuildUp",{id:fe,scopedMfg:{id:t.scopedMfgItemPID},path:e,session:{id:ue},context:pe})},k=function(e){var t=r.getReferenceModel(e[0]);(r.isAKindOf(t,m)||r.isAKindOf(t,"DELLmiServiceHeaderWorkPlanReference"))&&e.splice(0,2),C("DeactivateBuildUp",{path:e,session:{id:ue}})},T=function(t){var n,i,o,a,c,l,d,u;s.isOpsViewerWidgetLinked()&&(o=(n=t.changed.isSelected)?"Highlight":"UnHighlight",(i=E(t.changed)).length>0&&C(o,{path:i}),c=v(),e.is(c)&&(l=c.loadedObjInfos),u=(d=r.transformToRIROccurrencePath(t.changed.absPath.length>0?t.changed.absPath:t.changed.nodeId))[d.length-1],a=p.getBuildUpCmd(),e.is(a)&&a.getState()&&r.isOperation(u)&&-1!==d.indexOf(l.sysPID)&&n&&!e.Array.equals(ge,d)&&A(d))},W=function(){w()},U=function(e){var t,n,i;(e=Array.isArray(e)?e:e.impactedChildren).some(function(e){return L(e)})&&(t=P.loadedObjInfos,n=l.getConnectedObjects(t.sysPID,null,{relationTypes:["ProcessImplementLink"]}),i=l.getConnectedObjects(t.sysPID,null,{relationTypes:["CapableResourcesStructureLink"]}),n.indexOf(t.scopedMfgItemPID)>-1&&(i.indexOf(t.resourceItemPID)>-1&&M(t.sysPID,t.scopedMfgItemPID,t.resourceItemPID),M(t.sysPID,t.scopedMfgItemPID)))},B=function(){setTimeout(function(){C("GetAppStatus")},100)},F=function(){var t={},n=[],s=p.getBuildUpCmd();e.is(h)&&h.isActive()&&h.destroyUI(),D(!0),e.is(s)&&s.getState()&&s.setState(!1),e.is(ge)&&ge.length>0&&(t={absPath:r.transformRIRToAbsolutePath(ge),state:!1},n.push(t),i.notify("update3DBuildUpState",[n])),i.notify("widgetUnlinked")},x=function(){var e,t;t=c.getRoots()[0],e=O(t),C("SetAppConfig",I),e.length>0&&y(e),i.notify("widgetLinked")},j=function(){s.isOpsViewerWidgetLinked()?i.warn(a.getNLSValue("Operations3DViewerModule.OpViewerIsAlreadyAvilable")):t.showWidget(de,{})},N=function(e){var t=!1,n=["PROCESS","SYSTEM","OPERATION","SERVICE"];s.isOpsViewerWidgetLinked()&&((e=Array.isArray(e)?e:[e]).forEach(function(e){var i;i=r.getReferenceModelFromInstance(e),n.indexOf(r.getPPRType(i))>-1&&(t=!0)}),t&&C("Highlight",{path:[],clear:!0}))},H=function(t){var n,i,o,a,r=[];s.isOpsViewerWidgetLinked()&&(n=v(),e.is(n)&&(i=n.loadedObjInfos,o=i.sysPID,a=i.scopedMfgItemPID,e.is(o)&&e.is(a)&&(t=Array.isArray(t)?t:[t]).forEach(function(t){"ProcessImplementLink"===t.get("type")?t.get("from")===o&&t.get("to")===a&&w():"ProcessImplementLinkOcc"===t.get("type")&&f.getSelectionsWithPaths()[0].forEach(function(n){e.Array.equals(t.get("from"),n.path)&&(r=E({absPath:t.get("to")})).length>0&&C("UnHighlight",{path:r})})})))},K=function(t){var n,i;s.isOpsViewerWidgetLinked()&&(i=v(),e.is(i)||(n=O([t]),y(n)))},Y=function(t){var n,i;s.isOpsViewerWidgetLinked()&&(n=v(),e.is(n)&&t.some(function(e){return R(e.get("PID"))})&&(i=n.loadedObjInfos,V(i.scopedMfgItemPID,i.resourceItemPID)))},_=function(){var t,n,i;s.isOpsViewerWidgetLinked()&&(c.getRoots()[0].some(function(e){return R(e)})?(t=v().loadedObjInfos,n=l.getConnectedObjects(t.sysPID,null,{relationTypes:["ProcessImplementLink"]}),i=l.getConnectedObjects(t.sysPID,null,{relationTypes:["CapableResourcesStructureLink"]}),n.indexOf(t.scopedMfgItemPID)>-1&&(!e.is(t.resourceItemPID)||i.indexOf(t.resourceItemPID)>-1)?M(t.sysPID,t.scopedMfgItemPID,t.resourceItemPID):D()):D())},G=function(){D()},X=function(t){var n,s,o;e.is(t)&&e.is(t.items)&&e.is(t.items.length>0)&&t.items.forEach(function(t){s=function(){(n=r.getReferenceModel(t.id))&&(i.notify("referenceAdded",[n]),i.notify("HideLandingPage"))},o=function(){},n=r.getReferenceModel(t.id),e.is(n)?s():r.getDescendantsFromServer([t.id],s,{onFailure:o,silentMode:!0})})},z=function(t){var n,s,o,a,c,l,d,u,f=!1,g=!0;e.is(t)&&e.is(t.items)&&e.is(t.items.length>0)&&t.items.forEach(function(e){switch(e.pprType){case"MBOM":d=e.id,f=e.ViewerContentLoaded;break;case"RESOURCE":u=e.id,f=e.ViewerContentLoaded;break;case"SYSTEM":l=e.id,f=e.ViewerContentLoaded}}),f&&(n=v(),e.is(n)&&(n=n.loadedObjInfos).scopedMfgItemPID===d&&(e.is(u)&&n.resourceItemPID!==u&&(g=!0),g=!1),g&&(a=function(){s=r.getReferenceModel(l),o=r.getReferenceModel(d),s?i.notify("referenceAdded",[s]):o&&i.notify("referenceAdded",[o]),S(l,d,u),i.notify("HideLandingPage")},c=function(){},s=r.getReferenceModel(l),e.is(l)&&!e.is(s)?r.getDescendantsFromServer([l],a,{onFailure:c,silentMode:!0}):e.is(d)&&!e.is(o)?r.getDescendantsFromServer([d],a,{onFailure:c,silentMode:!0}):a()))},q=function(){D()},J=function(t){var n,s,o;n=this.isSelected?"selectNodes":"unSelectNodes",e.is(t.path)&&(s=t.path,o=[],s.forEach(function(e){var t=e.filter(function(e,t){var n=!1;return t%2!=0&&("PROCESS"!==r.getPPRType(e)&&"SERVICE"!==r.getPPRType(e)&&"RESOURCE"!==r.getPPRType(e)||(n=!0)),n});o.push(t)}),i.notify(n,[o]))},Q=function(e){var t=[],n=[];s.isOpsViewerWidgetLinked()&&((e=Array.isArray(e)?e:[e]).forEach(function(e){e.isVisible?n.push(e.rirPath):t.push(e.rirPath)}),t.length>0&&C("Hide",{path:t}),n.length>0&&C("Show",{path:n}))},Z=function(t){var n,s=this.isDisplayed,o={},a=[];e.is(t.attributes)&&(t.path.forEach(function(e){n=b(e),o={absPath:n,isVisible:s},a.push(o)}),i.notify("update3DVisibilityState",[a]))},$=function(t){var n,i,o,a,c,l,d;s.isOpsViewerWidgetLinked()&&((a=t.absPath).length>0?(c=a[0],l=r.getInstance(c),d=r.getAggregatingReferenceModelFromInstance(l)):d=r.getReference(t.nodeId),"SYSTEM"===r.getPPRType(d)&&(i=[d.get("PID")],e.is(l)&&(r.isAKindOf(d,m)||r.isAKindOf(d,"DELLmiServiceHeaderWorkPlanReference"))&&(o=[l]),n=O(i,o),y(n)))},ee=function(e){var t,n,i=[];s.isOpsViewerWidgetLinked()&&(t=v(),n=t.loadedObjInfos,e.forEach(function(e){e.indexOf(n.scopedMfgItemPID)>-1&&i.push(e)}),i.length>0&&C("Reframe",{path:i}))},te=function(t,n){var s,o;s=v(),e.is(s)&&(o=s.loadedObjInfos,p.initBuildUpSession(t,o,ie).then(function(s){ue=s,fe=t,i.info(a.getNLSValue("Operations3DViewerModule.BuildUpSessionCreationSuccess")),e.is(n)&&n.length>1&&-1!==n.indexOf(fe)&&A(n)},function(){ue=null,fe=null,i.warn(a.getNLSValue("Operations3DViewerModule.BuildUpSessionCreationFailed"))}))},ne=function(t){var n,s,o=[],c=f.getSelectionsWithPaths()[0];if(n=v(),e.is(n)&&(s=n.loadedObjInfos),1===c.length&&(o=r.transformToRIROccurrencePath(c[0].path)),t.state){let e=s.sysPID;null===fe?te(e,o):o.length>0&&-1!==o.indexOf(fe)&&A(o),i.info(a.getNLSValue("Operations3DViewerModule.BuildUpReviewModeIsEnabled"))}else e.is(ge)&&ge.length>0&&(k(ge),i.info(a.getNLSValue("Operations3DViewerModule.BuildUpReviewModeIsDisabled")))},ie=function(){e.is(ge)&&ge.length>0&&(A(ge),i.info(a.getNLSValue("Operations3DViewerModule.BuildUpResultRefresh")))},se=function(t){var n,i,o;s.isOpsViewerWidgetLinked()&&(n=v(),e.is(n)&&(i=n.loadedObjInfos),o=r.transformToRIROccurrencePath(t),null===fe&&-1!==o.indexOf(i.sysPID)?te(i.sysPID,o):-1!==o.indexOf(fe)&&A(o))},oe=function(t){var n,i,o;s.isOpsViewerWidgetLinked()&&(n=v(),e.is(n)&&(i=n.loadedObjInfos),-1!==(o=r.transformToRIROccurrencePath(t)).indexOf(i.sysPID)&&k(o))},ae=function(t){var n=v().loadedObjInfos,s=this.isActivated,o=b(t.path),a={},r=[];a={absPath:o,isActivated:s},r.push(a),e.is(ge)&&ge.length>0&&!e.Array.equals(t.path,ge)&&(a={absPath:o=b(ge),isActivated:!s},r.push(a)),i.notify("update3DBuildUpState",[r]),i.notify("set3DVisibilityState",[{isVisible:!0,parentPID:n.scopedMfgItemPID}]),ge=s?t.path:{},le(s)},re=function(){i.warn(a.getNLSValue("Operations3DViewerModule.BuildUpActivateFailed"))},ce=function(e){e.isActivated?se(e.absPath):oe(e.absPath)},le=function(t){var n=v().loadedObjInfos,i=!0===t?"Hide":"Show";e.is(n.resourceItemPID)&&(C(i,{path:[n.resourceItemPID]}),t||C("Reframe",{path:[n.resourceItemPID]}))},{listenTo:function(){return{select:T,addRootNode:K,hideRootNode:Y,onRecentContentLoaded:_,ResetRootsStore:G,refreshAll:W,onRefreshedAll:U,refreshImpacted:U,HideAll:W,instanceRemoved:N,connectionRemoved:H,Show3DViewerCmd:j,change3DVisibility:Q,LoadItemsIn3DViewer:$,ReframeItemsIn3DViewer:ee,BuildUpReviewModeCmd:ne,toggle3DBuildUpColumnButton:ce}},onStart:function(t,n){var o;me=e.extend(me,t),s.isOpsViewerWidgetLinked()?(i.notify("widgetLinked"),setTimeout(function(){C("GetAppStatus")},100)):(o=p.getBuildUpCmd(),e.is(o)&&o.disable()),s.addEventListener("link",B),s.addEventListener("unlink",F),s.subscribeEvent("DS/DELExternalWidgetCom/onGetAppStatus",function(e){!0===e.status?x():s.subscribeEvent("DS/DELExternalWidgetCom/onAppReady",x)}),s.subscribeEvent("DS/DELExternalWidgetCom/onDropData",X),s.subscribeEvent("DS/DELExternalWidgetCom/onLoadDataComplete",z),s.subscribeEvent("DS/DELExternalWidgetCom/onHome",q),s.subscribeEvent("DS/DELExternalWidgetCom/onSelect",J.bind({isSelected:!0})),s.subscribeEvent("DS/DELExternalWidgetCom/onUnSelect",J.bind({isSelected:!1})),s.subscribeEvent("DS/DELExternalWidgetCom/onShow",Z.bind({isDisplayed:!0})),s.subscribeEvent("DS/DELExternalWidgetCom/onHide",Z.bind({isDisplayed:!1})),s.subscribeEvent("DS/DELExternalWidgetCom/onBuildUpActivated",ae.bind({isActivated:!0})),s.subscribeEvent("DS/DELExternalWidgetCom/onBuildUpDeactivated",ae.bind({isActivated:!1})),s.subscribeEvent("DS/DELExternalWidgetCom/onBuildUpActivateFailed",re),n()},onStop:function(){}}}}});