define("DS/ENOLifecycleUtility/ENOLifecycleUtility",[],function(){return{}}),define("DS/ENOLifecyleUtility/Dictionary",["UWA/Class"],function(t){"use strict";return t.extend({init:function(){this.data={}},add:function(t,i){this.data[t]=i},find:function(t){return this.data[t]},remove:function(t){delete this.data[t]},contains:function(t){return null!=this.data[t]},count:function(){var t=0;return Object.keys(this.data).map(function(i){++t}),t},clear:function(){this.data={}},each:function(t){var i=this.data;Object.keys(this.data).map(function(n){t(n,i[n])})}})});