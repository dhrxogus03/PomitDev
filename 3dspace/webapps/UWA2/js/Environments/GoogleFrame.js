define("UWA/Environments/GoogleFrame",["UWA/Core","UWA/String","UWA/Environment","UWA/Element","UWA/Storage/Adapter/IGoogle","UWA/Storage/Adapter/Object"],function(e,t,o,i){"use strict";return o.extend({name:"googleFrame",onInit:function(){var e=document.body,t=i.getElement.bind(e);t(".moduleGoogleFrame")||this.buildSkeleton(e),this.html={wrapper:t(".module"),header:t(".moduleHeader"),content:t(".moduleWrapper"),body:t(".moduleContent"),footer:t(".moduleFooter")}},onResize:function(){var e=this.html.wrapper.getScrolls(),t=e.width,o=e.height;if(o>0&&o!==this.prevHeight&&(this.prevHeight=o,window._IG_AdjustIFrameHeight&&_IG_AdjustIFrameHeight(o)),this.prevWidth===t)return!1;this.prevWidth=t},onUpdateTitle:function(e){window._IG_SetTitle&&_IG_SetTitle(e=t.stripTags(e))},buildSkeleton:function(t){var o=e.hosts,r=e.i18n;i.setContent.call(t,{tag:"div",class:"module moduleGoogleFrame",html:[{tag:"div",class:"moduleWrapper",html:[{tag:"div",class:"moduleEdit"},{tag:"div",class:"moduleContent",html:r("Loading...")}]},{tag:"div",class:"moduleFooter",html:[{tag:"a",class:"powered",href:o.netvibes,text:r("© Netvibes")},{tag:"a",class:"share",href:o.ecosystem,text:r("Subscribe to this app")}]}]})}})});