"undefined"==typeof define&&(define=function(t,e,i){CSIDeclarativeFunctionDefinition=i(CSICommands,CSIParameters,CSICommandSignatureDefinition),define=void 0}),define("DS/CSIIntrospectionWeb/CSIDeclarativeFunctionDefinition",["DS/CSICommandBinder/CSICommandBinder","DS/CSICommandBinder/CSIParameters","DS/CSIIntrospectionWeb/CSICommandSignatureDefinition"],function(t,e,i){"use strict";var n=function(t,e,n,r){this.name="",this.version=1,this.grammarVersion=e&&"number"==typeof e?e:1,this.pool="",this.desc="",this.filename="",this.filepath="",this.implementation={},this.onCall={},this.onCall.in=new i,this.onCall.out=new i,this.settingsTypeName=n,this.serializableSettings=r,"string"==typeof t&&(t=JSON.parse(t)),"object"==typeof t&&(this.name=t.name,this.version=parseInt(t.version),this.pool="string"==typeof t.pool?t.pool:"",this.desc=t.desc,this.filename="string"==typeof t.filename?t.filename:"",this.filepath="string"==typeof t.filepath?t.filepath:"","object"==typeof t.implementation&&(this.grammarVersion<3?("string"==typeof t.implementation.library&&(this.implementation.library=t.implementation.library),"string"==typeof t.implementation.debugLibrary&&(this.implementation.debugLibrary=t.implementation.debugLibrary)):("string"==typeof t.implementation.name&&(this.implementation.name=t.implementation.name),"number"==typeof t.implementation.version&&(this.implementation.version=t.implementation.version),"object"==typeof t.implementation.settings&&(this.implementation.settings=t.implementation.settings))),"object"==typeof t.onCall&&(this.onCall.in=new i(t.onCall.in),this.onCall.out=new i(t.onCall.out)),"object"==typeof t.throwError&&(this.throwError=new i(t.throwError)),"object"==typeof t.progress&&(this.progress=new i(t.progress)))};return n.prototype.getName=function(){return this.name},n.prototype.setName=function(t){"string"==typeof t&&(this.name=t)},n.prototype.getVersion=function(){return this.version},n.prototype.setVersion=function(t){if(void 0!==t){var e=parseInt(t);isNaN(e)||(this.version=e)}},n.prototype.getPoolName=function(){return this.pool},n.prototype.setPoolName=function(t){"string"==typeof t&&(this.pool=t)},n.prototype.getDescription=function(){return this.desc},n.prototype.setDescription=function(t){"string"==typeof t&&(this.desc=t)},n.prototype.getFilename=function(){return this.filename},n.prototype.getFilepath=function(){return this.filepath},n.prototype.clearImplementation=function(){delete this.implementation.library,delete this.implementation.debugLibrary,delete this.implementation.name,delete this.implementation.version,delete this.implementation.settings},n.prototype.getLibrary=function(){return this.implementation.library},n.prototype.setLibrary=function(t){if("string"==typeof t){var e=this.getDebugLibrary();this.clearImplementation(),this.implementation.library=t,this.implementation.debugLibrary=e}},n.prototype.clearLibrary=function(){delete this.implementation.library},n.prototype.getDebugLibrary=function(){return this.implementation.debugLibrary},n.prototype.setDebugLibrary=function(t){if("string"==typeof t){var e=this.getLibrary();this.clearImplementation(),this.implementation.library=e,this.implementation.debugLibrary=t}},n.prototype.clearDebugLibrary=function(){delete this.implementation.debugLibrary},n.prototype.getSignature=function(t){return void 0===t?this.onCall:"in"===t?this.getInputSignature():"out"===t?this.getOutputSignature():void 0},n.prototype.getInputSignature=function(){return this.onCall.in},n.prototype.getOutputSignature=function(){return this.onCall.out},n.prototype.getThrowErrorDefinition=function(){return this.throwError},n.prototype.getProgressDefinition=function(){return this.progress},function(){function i(t,i){t.writeString("name",i.name),t.writeUint32("version",i.version),"string"==typeof i.pool&&0!==i.pool.length&&t.writeString("pool",i.pool),t.writeString("desc",i.desc),"string"==typeof i.filename&&0!==i.filename.length&&t.writeString("filename",i.filename),"string"==typeof i.filepath&&0!==i.filepath.length&&t.writeString("filepath",i.filepath);var n=new e;if(i.grammarVersion<3)"string"==typeof i.implementation.library&&n.writeString("library",i.implementation.library),"string"==typeof i.implementation.debugLibrary&&n.writeString("debugLibrary",i.implementation.debugLibrary);else if("string"==typeof i.implementation.name&&n.writeString("name",i.implementation.name),"number"==typeof i.implementation.version&&n.writeUint32("version",i.implementation.version),"object"==typeof i.implementation.settings)if("library"===i.implementation.name){var r=new e;"string"==typeof i.implementation.settings.release&&r.writeString("release",i.implementation.settings.release),i.implementation.settings.debug&&"string"==typeof i.implementation.settings.debug&&r.writeString("debug",i.implementation.settings.debug),n.writeParameters("settings","Parameters",r)}else i.settingsTypeName&&i.serializableSettings?n.writeObject("settings",i.settingsTypeName,i.serializableSettings):"string"==typeof i.implementation.name&&n.writeObject("settings",i.implementation.name,i.implementation.settings);t.writeParameters("implementation","Parameters",n);var o=new e;return o.writeObject("in","CSICommandSignatureDefinition",i.onCall.in),o.writeObject("out","CSICommandSignatureDefinition",i.onCall.out),t.writeParameters("onCall","Parameters",o),"object"==typeof i.throwError&&t.writeObject("throwError","CSICommandSignatureDefinition",i.throwError),"object"==typeof i.progress&&t.writeObject("progress","CSICommandSignatureDefinition",i.progress),!0}function r(t){return new n(t.toJSObject())}t.declareType({type:"CSIDeclarativeFunctionDefinition",serialize:i,unserialize:r}),t.declareType({type:"CSIDeclarativeFunctionDefinitionV3",serialize:i,unserialize:r})}(),n});