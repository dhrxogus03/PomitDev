define("DS/ENODerivedFormatManagement/ENODerivedFormatManagement",["UWA/Class/View","DS/ENODerivedFormatManagement/ENODerivedFormatManagementInfra"],function(e,n){return{plugin:function(a){window.derivedformatmanagementinfra=new n,derivedformatmanagementinfra.setup();var r={derivedFormatManagement:{collection:"DS/ENODOConversionRules/Collections/DerivedFormatRules",view:"DS/ENODOConversionRules/Views/DerivedFormatListView",viewOptions:{actions:e}}};a.rendererMap=Object.assign(r,a.rendererMap)}}});