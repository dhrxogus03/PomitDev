define("DS/DELMFNAfrCommands/CreateMfgItemAndLinkAltSubstCmd",["DS/ApplicationFrame/Command","DS/Logger/Logger","DS/CoreEvents/Events","UWA/Class/Options"],function(e,t,n,s){"use strict";var o=e.extend(s,{name:"CreateMfgItemAndLinkAltSubstCmd",_logger:null,_context:null,init:function(e){this._logger=t.getLogger(o),this._parent(e,{mode:"exclusive",isAsynchronous:!1}),this._context=this.getOption("context")},execute:function(){var e={arguments:this.getArguments()};this._logger.log(this._id+" execute"),n.publish({event:"DELMFNCommands/CreateMfgItemAndLinkAltSubstCmd",data:e})}});return o}),define("DS/DELMFNAfrCommands/AssignProductCmd",["DS/ApplicationFrame/Command","DS/Logger/Logger","DS/CoreEvents/Events","UWA/Class/Options"],function(e,t,n,s){"use strict";var o=e.extend(s,{name:"AssignProductCmd",_logger:null,_context:null,init:function(e){this._logger=t.getLogger(o),this._parent(e,{mode:"exclusive",isAsynchronous:!1}),this._context=this.getOption("context")},execute:function(){var e={arguments:this.getArguments()};this._logger.log(this._id+" execute"),n.publish({event:"DELMFNCommands/AssignProductCmd",data:e})}});return o}),define("DS/DELMFNAfrCommands/CreateMfgItemAndResultingProductCmd",["DS/ApplicationFrame/Command","DS/Logger/Logger","DS/CoreEvents/Events","UWA/Class/Options"],function(e,t,n,s){"use strict";var o=e.extend(s,{name:"CreateMfgItemAndResultingProductCmd",_logger:null,_context:null,init:function(e){this._logger=t.getLogger(o),this._parent(e,{mode:"exclusive",isAsynchronous:!1}),this._context=this.getOption("context")},execute:function(){var e={arguments:this.getArguments()};this._logger.log(this._id+" execute"),n.publish({event:"DELMFNCommands/CreateMfgItemAndResultingProductCmd",data:e})}});return o}),define("DS/DELMFNAfrCommands/CreateMfgItemAndScopeCmd",["DS/ApplicationFrame/Command","DS/Logger/Logger","DS/CoreEvents/Events","UWA/Class/Options"],function(e,t,n,s){"use strict";var o=e.extend(s,{name:"CreateMfgItemAndScopeCmd",_logger:null,_context:null,init:function(e){this._logger=t.getLogger(o),this._parent(e,{mode:"exclusive",isAsynchronous:!1}),this._context=this.getOption("context")},execute:function(){var e={arguments:this.getArguments()};this._logger.log(this._id+" execute"),n.publish({event:"DELMFNCommands/CreateMfgItemAndScopeCmd",data:e})}});return o});