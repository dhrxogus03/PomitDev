define("DS/TerminologySelectorWebInWin/TerminologyAssociation/TerminologyAssociationWebInWin",["DS/i3DXCompass/Data","DS/Windows/ImmersiveFrame","DS/IPClassifyActive/utils/IPClassifyActiveCommunication","DS/IPClassifyActive/utils/WidgetDataProvider","DS/TerminologySelector/TerminologyAssociation/TerminologyAssociation"],function(e,i,t,n,o){console.log("----- TerminologyAssociationWebInWin ------");require(["DS/UWPClientCode/PublicAPI"]),window.launchTerminologyAssociation=function(t){t=("string"==typeof t?JSON.parse(t):t).params;console.log("-> launchTerminologyAssociation");require(["DS/PADUtils/PADProbes","DS/PADUtils/PADSettingsMgt","DS/PADUtils/PADUtilsServices"],function(n,s,a){widget.setValue("noCompass",!0),t.userId&&(window.top.dsUserLogin=t.userId),s.setSetting("pad_security_ctx",t.securityContext),t.tenantId&&(s.setSetting("x3dPlatformId",t.tenantId),widget.setValue("x3dPlatformId",t.tenantId));let d=!widget.body;widget.body=d?UWA.createElement("div"):widget.body,widget.body.addClassName("TerminologyAssociation"),widget.body.setStyles({height:"100%",width:"100%","text-align":"initial",position:"relative"}),e.initialize({myAppsBaseUrl:t.myAppsUrl,userId:t.userId,passportUrl:"",proxyTicketUrl:""});var r=document.body.getElement("#tempDiv");r&&r.remove(),window.top.performance.mark("createWidget_begin"),a.app_initialization(function(){console.log("-> app_initialization");var e=t.objects,n=t.relations;let s=t.onInstance;var a=(s?n:e).map(function(e){return{id:e}});widget.body.empty();let r=widget.immersiveFrame;!r&&(r=new i).inject(widget.body,"top");var l=new o({immersiveFrame:r,items:a,webinwin:!0,isInstance:s,nodes:t.nodes,deactivateAssociate:s&&!!t.nodes,winClosable:!0});window.TerminologyAssociation=l;let c=UWA.createElement("div",{styles:{height:"100%",width:"100%",position:"relative","z-index":"40000"}});!0!==t.dialog&&c.setContent(l.nestedMenuInContext.getMultiSelectorContainer()),c.inject(r.getFreeZone()),d&&widget.body.inject(document.body,"top")}),widget.dispatchEvent("onRefresh"),widget.dispatchEvent("onDestroy"),widget.dispatchEvent("onResize")})};var s=function(){"undefined"!=typeof dscef&&dscef.sendString("readyForInit")},a={init:()=>{require(["UWA/Widget"],function(e){var i=window.widget=new e;i.addEvent("onLoad",a.onLoad.bind(this)),i.dispatchEvent("onLoad")})},onLoad:function(){if("undefined"==typeof dscef&&(location.search.contains("test=true")||!0===window.odt)){require(["DS/BksStandalone/Standalone"],e=>{e({objects:"",relations:"",onInstance:!1,nodes:""}).then(e=>{s(),e.objects=e.objects.split(","),e.relations=e.relations.split(","),e.nodes=e.nodes?JSON.parse(e.nodes):void 0,launchTerminologyAssociation({params:e})})})}s()}};a.init()}),require(["DS/TerminologySelectorWebInWin/TerminologyAssociation/TerminologyAssociationWebInWin"]);