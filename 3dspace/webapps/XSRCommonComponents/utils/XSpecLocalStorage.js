define("DS/XSRCommonComponents/utils/XSpecLocalStorage",["UWA/Core","UWA/Class"],function(t,e){"use strict";return e.singleton({init:function(e){if(t.is(localStorage)){var i=localStorage.getItem("xSpecData");if(t.is(i))try{this.xSpecData=JSON.parse(i)}catch(t){console.error("error during parsing !")}t.is(this.xSpecData)||(this.xSpecData={},this._commit()),this._commit()}},setItem:function(e,i){t.is(localStorage)&&(this.xSpecData[e]=t.clone(i),this._commit())},getItem:function(e){if(t.is(localStorage))return this.xSpecData[e]},removeItem:function(e){t.is(localStorage)&&(delete this.xSpecData[e],this._commit())},_commit:function(){localStorage.setItem("xSpecData",JSON.stringify(this.xSpecData))}})});