define("DS/CfgInstantiatedConfigurationUX/scripts/CfgReplaceProductConfigurationFactory",["UWA/Core","DS/Handlebars/Handlebars4","i18n!DS/CfgBaseUX/assets/nls/CfgBaseUX","DS/EffectivityWebExternalJS/scripts/CfgReplaceProductConfigurationFactoryLoader"],function(t,e,i){"use strict";return UWA.Class.extend({vEObject:{},create:function(t,e,i,n,o,a,r){CfgReplaceProductConfigurationFactory(t,e,i,n,o,a,r,this.vEObject)},getVEObject(){return this.vEObject.value}})}),define("DS/CfgInstantiatedConfigurationUX/scripts/CfgReplacePCVersionExplorerView",["UWA/Class/View","DS/CfgInstantiatedConfigurationUX/scripts/CfgReplaceProductConfigurationFactory","DS/CfgBaseUX/scripts/CfgData","css!DS/CfgInstantiatedConfigurationUX/styles/CfgReplacePCVersionExplorerView.css"],function(t,e,i){"use strict";return t.extend({className:"cfg-replace-product-configuration-by-revision-versionexplorerview",init:async function(t){this._parent(t),this.displayCompactMode=!this.options.displayCompactMode||0!=this.options.displayCompactMode,this.CfgReplaceProductConfigurationFactoryObj=new e,this.options.callBackFunction=(()=>this.pubSubEvents()),await this.CfgReplaceProductConfigurationFactoryObj.create(this.options.productConfigurationId,this.options.callBackFunction,enoviaServerFilterWidget.tenant,enoviaServerFilterWidget.baseURL,enoviaServerFilterWidget.getSecurityContext(),this.container,this.options.pcVersionToBeSelectedInVEObj,this.CfgReplaceProductConfigurationFactoryObj.vEObject)},render:function(){return this.container},pubSubEvents:function(){this.CfgReplaceProductConfigurationFactoryObj.getVEObject().subscribeEvent("select",t=>i.cfgReplaceProductConfigurationActionEvents.publish({event:"selectionInReplaceProductConfigurationDialog",data:t})),this.CfgReplaceProductConfigurationFactoryObj.getVEObject().subscribeEvent("unselect",t=>i.cfgReplaceProductConfigurationActionEvents.publish({event:"unselectionInReplaceProductConfigurationDialog"}))}})});