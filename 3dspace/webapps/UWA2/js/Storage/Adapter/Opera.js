define("UWA/Storage/Adapter/Opera",["UWA/Core","UWA/Storage/Adapter/Abstract"],function(e,t){"use strict";var r=t.extend({type:"Dashboard",limit:65536,connect:function(e){this.database=e,this.storage.isReady=!0},isAvailable:function(){return window.widget&&window.widget.preferences&&window.widget.preferences.getItem},getKey:function(e){return"uwa-"+this.database+"-"+e},get:function(e){this.interruptAccess();var t=window.widget.preferences.getItem(this.getKey(e));if(null!==t&&""!==t)return t},set:function(e,t){return this.interruptAccess(),window.widget.preferences.setItem(t,this.getKey(e))},rem:function(e){this.interruptAccess();var t=this.get(e);return this.set(e,null),t}});return e.namespace("Storage/Adapter/Opera",r,e)});