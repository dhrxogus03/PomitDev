define("DS/ENOCharacteristicsApp/service/CharacteristicsServiceWrapper",["UWA/Core","UWA/Promise","DS/Controls/Abstract","DS/ENOCharacteristicsApp/model/SpecificationModel","DS/ENOCharacteristicsApp/utils/CharacteristicsServiceProvider","DS/XSRCommonComponents/utils/TypeUtils","DS/ENOCharacteristicsApp/utils/Constants"],function(t,e,n,r,i,c,a){"use strict";return n.extend({init:function(t){t&&(this.modelEvents=t.modelEvents,this.options=t,this.appCore=t.appCore)},getSpecData:function(t){var n=this;return new e(function(e,r){console.time("getSpecification from service"),(new i).fetchSpecificationsData(t).then(function(t){let r=t.data.specsData;var i=n.buildExtensionAttributesInfo(t),c=n.createSpecNodes(r);return e({listNodes:c,extensionAttributesColumnInfo:i})}).catch(function(t){return r(t)})})},buildExtensionAttributesInfo:function(t){let e=this,n={};if(t&&t.data){t.data.specsData.forEach(t=>{if(t.hasOwnProperty("additionalAttributes")&&r(t.additionalAttributes),t.hasOwnProperty("characteristics")){t.characteristics.forEach(t=>{t.hasOwnProperty("additionalAttributes")&&r(t.additionalAttributes)})}});let i=t.data.additionalAttributes;return e.appCore.defaultExtensionAttributes=i,r(i),Object.values(n)}return[];function r(t){t.forEach(t=>{let e="";if("Change Id"===(e=t.nlsName?t.nlsName:function(t){let e="";e=t.includes("XP_PerformanceSpec_Ext")?t.replace("XP_PerformanceSpec_Ext.",""):t.includes("XP_PerformanceChar_Ext")?t.replace("XP_PerformanceChar_Ext.",""):t;return e}(t.name)))return;let r=t.extension+"||"+t.name;n.hasOwnProperty(r)||(n[r]={dataIndex:r,text:e,typeRepresentation:"string",editableFlag:!0,extension:t.extension},t.hasOwnProperty("rangevalue")&&(n[r].range=t.rangevalue))})}},createSpecNodes:function(e){var n=[];if(void 0!==e){for(var r=0;r<e.length;r++){var i=this.createSpecNode(e[r]);t.is(i)&&n.push(i)}return n}},createSpecNode:function(t){var e=new r({appCore:this.appCore}).set(t);return e.charModelEvents=this.modelEvents,e},updateCharacteristicsData:function(t,n,r){return new e(function(e,c){(new i).updateCharacteristics(t,n,r).then(function(t){return e(t)}).catch(function(t){return c(t)})})},updateSpecificationData:function(t,n,r){return new e(function(e,c){(new i).updateSpecificaton(t,n,r).then(function(t){return e(t)}).catch(function(t){return c(t)})})},reorderchar:function(t,n,r){return new e(function(e,c){(new i).reorder(t,n,r).then(function(t){return e(t)}).catch(function(t){return c(t)})})},createCharacteristics:function(t){return new e(function(e,n){(new i).createCharacteristics(t).then(function(t){var r=JSON.parse(t),i=r.data.physicalid;return null!=t&&null!=i?e(r):n(r)}).catch(function(t){var e=JSON.parse(t).errorMessage;return console.log(e),n(e)})})},deleteInstances:function(t){var e=t[0].getTypeActualName(),n=new i(this.options);return c.isPerformanceSpecification(e)?n.deleteSpecifications(t):n.deleteCharacteristics(t)},removeDerivedSpecs:function(t,e){return new i(this.options).removeDerivedSpecs(t,e)},getDimensionDisplayUnitSet:function(){return new e(function(t,e){(new i).fetchDimensionDisplayUnitSet().then(function(e){return t(e)}).catch(function(t){return e(t)})})},createSpecification:function(t,n){return new e(function(e,r){(new i).createSpecification(t,n).then(function(t){var n=JSON.parse(t),i=n.data.physicalid;return null!=t&&null!=i?e(n):r(n)}).catch(function(t){var e=JSON.parse(t).errorMessage;return console.log(e),r(e)})})},getSpecDataById:function(t,n,r){return new e(function(e,c){(new i).fetchSpecificationsDataByID(t,n,r).then(function(t){return t.data?e(t.data):null}).catch(function(t){return c(t)})})},duplicateInstances:function(t,n){return new e(function(e,r){(new i).duplicateCharacteristics(t,n).then(function(t){return e(t)}).catch(function(t){return r(t)})})},syncPerformanceSpecs:function(t,n){return new e(function(e,r){(new i).syncPerformanceSpecs(t,n).then(function(t){return e(t)}).catch(function(t){return r(t)})})},getScopedEngItem:function(t){return new e(function(e,n){(new i).getScopedEngItem(t).then(function(t){return e(t)}).catch(function(t){return n(t)})})},getMeasurementCharacteristicLimitsConfiguration:function(){return new e(function(t,e){(new i).getMeasurementCharacteristicLimitsConfiguration().then(function(e){return JSON.parse(e).data?t(JSON.parse(e).data):null}).catch(function(t){return e(t)})})},getType:function(){return new e(function(t,e){(new i).getType().then(function(e){return e.data?t(e.data):null}).catch(function(t){return e(t)})})}})});