define("DS/XCADLoader/XCADSingleton",[],function(){"use strict";var t=null;function n(){this.data=[]}return n.getInstance=function(){return null===t&&(t=new n),t},n.prototype={constructor:n,addData:function(n){t.data=n},getDataValue:function(n){return t.data[n]}},n.getInstance()});