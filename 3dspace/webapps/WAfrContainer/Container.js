define("DS/WAfrContainer/Container",["UWA/Core","UWA/Class/Promise","DS/Core/Core","DS/WAfrExecutionContext/mod_ExecutionContext","DS/PlatformAPI/PlatformAPI","DS/WAfrUtils/Logger","DS/WAfrUtils/PerformanceHelper","WebappsUtils/WebappsUtils","DS/WAFData/WAFData"],function(e,t,i,n,r,o,s,a,c){"use strict";var u=n.ExecutionContext,p=function(t){var i,n={view:null,debug:!1,infraComponents:[],proxified:!1,baseUrl:a.getWebappsBaseUrl()};if(i=e.extend(e.clone(n),t),this._proxified=i.proxified,this._view=i.view,!this._view)throw new Error("A view must be defined for the container");this.id=this._view.getId(),this._executionContexts=[],this._currentExecutionContext=-1,this._config=i.config,this._forceProxy=i.forceProxy,this._registeredInfraComponents=i.standardComponents,this._baseUrl=i.baseUrl,this._version=i.version,this._isTPA=i.isTPA,this._winID=t.winID,this._appContent=t.appContent,this._context=t.context?t.context:"Dashboard";var r=this.destroy.bind(this);this._view.addEvent("onDestroy",r),this._restoreContextsIfNeed(this._context);var o=this;this.subscribe("onCreateContext."+this.id,function(e){o.createNewExecutionContext(),o.loadCurrentConfig(e)}),Object.defineProperty(this,"currentApp",{get:function(){var e=this.getCurrentExecutionContext();if(e){var t=e.getSourceApp();if(t)return t}}}),Object.defineProperty(this,"lang",{get:function(){return this._view.getLanguage()}}),Object.defineProperty(this,"productTitle",{get:function(){return this._view.getValue("afrProductTitle")}})};function f(e,t){return new Promise((i,n)=>{require([`text!DS/WebAfr/Applications/${e}_${t}.json`],function(e){let t;try{t=JSON.parse(e)}catch(e){return n(e)}return i(t)},function(e){return n(e)})})}return p.prototype.destroy=function(e){return this.id==e&&(this._executionContexts.map(function(e){return e.dispose()}),this._executionContexts=[],this._currentExecutionContext=-1,this._view.setValues({afrCode:void 0,afrAppId:void 0,appId:void 0,title:void 0,appTitle:void 0,afrDebug:void 0,components:void 0}),this._view.destroy(),sessionStorage.removeItem("WAfrABV3FirstLaunch")),t.resolve()},p.prototype._restoreContextsIfNeed=function(e){var t=this._view.getValue("afrExecutionContexts")||[],i=this._view.getValue("afrCurrentExecutionContextIdx")||0,n=this._view.getValue("afrAppId");if(t.length>0&&!n&&(o.warn("A context has been found "+JSON.stringify({contexts:t})+" but the app id is null,Ignore the restoration of the saved context"),t=[]),0===t.length||"AppsTester"===e){var r=this.createNewExecutionContext();t.push({id:r.getId(),currentappId:null}),i=this._currentExecutionContext}else{var s=0;for(s=0;s<t.length;s++)this.createNewExecutionContext(t[s].id);if(i<0||i>=t.length)throw new Error("The current context index must be in the range of the list of contexts");this._currentExecutionContext=i}this._view.setValue("afrExecutionContexts",t.slice()),this._view.setValue("afrCurrentExecutionContextIdx",i),this._view.setValue("afrAppId",n)},p.prototype.createNewExecutionContext=function(e){var t=new u({id:e,container:this,config:this._config});return this._executionContexts.push(t),this._currentExecutionContext=this._executionContexts.length-1,this._view.addExecutionContextView(t,this.onChangeExecutionContext.bind(this)),t},p.prototype.onChangeExecutionContext=function(e){},p.prototype.getApplicationJSON=function(e){var t=e||this.getCurrentConfig();if(!t.afrAppId)return Promise.reject("The current configuration could not locate a WebAfr application");const i=t.afrAppId;return f(i,this._view.getLanguage?this._view.getLanguage():this._view.lang).catch(e=>f(i,"en"))},p.prototype.requestWAfrService=function(e,i){var n,r=this;if(!this._configService)return t.resolve();if(i&&!e)throw new Error("Must provide an app id to call the transition service");e=e||this._configService.afrAppId||this._configService.appId;var o,s=this._configService.afrService,a="GET";if(i&&(s=s.replace("/apps","/transition"),a="POST",o={containers:[{id:this.id,contexts:this._view.getValue("afrExecutionContexts"),currentIndex:this._view.getValue("afrCurrentExecutionContextIdx")}],currentIndex:0}),!(s+=e).startsWith("http")){var u=this._baseUrl.split("/");if(u.length>=2){var p=u[2].split(":"),f=p[0],h="";p.length>1&&!this._configService.afrServicePort&&(h=":"+p[1]),this._configService.afrServicePort&&(h=":"+this._configService.afrServicePort),s=u[0]+"//"+f+h+"/"+s}}this.lang&&(s+="?lang="+this.lang);var l=this._proxified?this._forceProxy?"proxifiedRequest":"authenticatedRequest":"request";return n=r._executionContexts[r._currentExecutionContext]._perf.start("WAFR: request the App data from WAfr Server"),new t(function(e,t){c[l](s,{type:"json",responseType:"json",method:a,data:o,onComplete:function(t){r._executionContexts[r._currentExecutionContext]._perf.stop(n),e(t)},onFailure:function(e){e.url=s,t(e)}})}).catch(function(e){if(e.message.contains("NetworkError"))return r.getApplicationJSON()})},p.prototype.loadCurrentConfig=function(e){s.checkpoint("requestWAfrService");var t=e||this.getCurrentConfig(),i=this;this._configService=null,t.appTitle&&"Apps supporting transition"!==t.appTitle||(t.appTitle=this._view.getTitleHeader().appTitle);var r=this.getCurrentExecutionContext();let o=null;return 1===this._version?o=Promise.resolve():2===this._version&&(t.afrService?(this._configService=t,o=this.requestWAfrService()):o="0.2"===t.afrVersion?Promise.resolve(null):"0.1"===t.afrVersion?this.getApplicationJSON().then(function(e){return Promise.resolve(e)},function(e){return Promise.resolve(null)}):this.getApplicationJSON()),o.then(e=>{if(n.hasConfigurationFor(e||t,"a2x")){if(!window._a2XWebFrame){require(["DS/WAfrA2XWebFrame/A2XWebFrame"],function(e){window._a2XWebFrame=new e},()=>{})}return this.initializeA2XSession(e||t).then(()=>(window._a2XWebFrame&&window._a2XWebFrame.init(),Promise.resolve(e)))}return Promise.resolve(e)}).then(e=>r.load(Object.assign(e||t,{isTPA:i._isTPA})))},p.prototype.initializeA2XSession=function(e){var t=this;let i=null;return(i=t._a2xClient?Promise.resolve():new Promise(function(e,i){require(["DS/WA2XCommunication/WA2XClient"],function(i){t._a2xClient=i.getA2XClient(),e()},i)})).then(()=>t.processA2XConfig(e)).then(e=>{if(t._a2xClient&&!t._a2xClient.isConnected()){const i=t.getCurrentExecutionContext();return t._a2xClient.initialize({...e,executionContext:i})}}).catch(e=>{throw e})},p.prototype.processA2XConfig=function(e){const t="default",i="custom",n="afrTest",r={hypervisorUrl:"ws://localhost:2097",poolName:"A2XPool"};let o=e.stdConf.a2x.configurationName;return new Promise(function(s,a){if(o)if(o===t)s(r);else if(o===i){let t=e.stdConf.a2x,i=t.configurationFile;i?require([i],e=>{s(JSON.parse(e))},e=>{a(e)}):s(t)}else if(o===n){if(!window.__karma__||!window.__karma__.config||!window.__karma__.config.json)throw new Error("Impossible to retrieve the json configuration from KARMA_ODT_CLIENT_JSON");const e=window.__karma__.config.json,t=`ws://localhost:${e.websocketPort}`,i=e.poolName;s({hypervisorUrl:t,poolName:i})}else require(["text!DS/WAfrContainer/assets/wafra2x/"+o+".json"],e=>{s(JSON.parse(e))},e=>{a(e)});else a(new Error("The configurationName property cannot be empty"))})},p.prototype.launchApp=function(i,n){var r=this.id;return new t(function(t,o){require(["DS/i3DXCompassServices/i3DXCompassPubSub"],function(s){s.subscribe("launchAppCallback",function(e){"COMPLETE"===e.response?t():o()});var a={widgetId:r,appId:i};a=e.extend(a,n),s.publish("launchApp",a)})})},p.prototype.getCurrentConfig=function(){var t=e.clone(this._view.getValues());return t.appId=this._view.getValue("appId"),t.afrAppId||(t.afrAppId=t.appId),t.version=this._view._version,t},p.prototype.publish=function(e,t){r.publish(e,t)},p.prototype.subscribe=function(e,t){r.unsubscribe(e),r.subscribe(e,t)},p.prototype.getCurrentExecutionContext=function(){return this._currentExecutionContext<0?null:this._executionContexts[this._currentExecutionContext]},p.prototype.registerInfraComponents=function(e){for(var t=0;t<this._registeredInfraComponents.length;t++){var i=this._registeredInfraComponents[t],n=i.DEFAULT_COMPONENT_NAME;e.createAndRegisterComponent(n,i,{container:this})}},p.prototype.updateTitle=function(e,t){if(!t){const e=this.getCurrentExecutionContext();e&&(t=e.getTargetApp()||e.getSourceApp())}t&&(e.appTitle=e.appTitle||t.getTitle()||this._view.getValue("appTitle"),e.brand=e.brand||t.getBrand()||this._view.getValue("brand")),this._view.setValue("afrProductTitle",e.title),this._view.setValue("title",e.title),this._view.setTitleHeader(e)},p.prototype.updateAppTitle=function(e){const t=this._view.getId(),i=window.top.UWA?window.top.UWA.Widgets?window.top.UWA.Widgets.instances:[]:void 0;if(i&&i.length){let n=i.findIndex(e=>t===e.id);if(-1!==n){const t=i[n]?i[n].environment:void 0;t&&t.wp&&t.wp.originalTitle&&(t.wp.originalTitle=e)}}},p});