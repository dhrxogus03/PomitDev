define("UWA/Controls/Drag",["UWA/Internal/Deprecate","UWA/Core","UWA/Class","UWA/Class/Options","UWA/Utils","UWA/Utils/Client","UWA/Element","UWA/Event"],function(t,e,i,s,o,n,h,a){"use strict";var r,l=n.Features.eventCapture,c=function(){};function d(t){return t.type.startsWith("touch")}function p(t,e){var i,s=t.offsetParent;s&&1===s.nodeType?((i=h.getOffsets.call(s)).y+=parseInt(h.getStyle.call(s,"border-top-width"),10)||0,i.x+=parseInt(h.getStyle.call(s,"border-left-width"),10)||0):i={x:0,y:0},t.setStyles({top:e.y-i.y+"px",left:e.x-i.x+"px"})}function u(t){for(var e,i=h.getComputedSize;t&&"inline"===h.getStyle.call(t,"display");)t=t.getParent();return t?((e=h.getOffsets.call(t)).maxX=e.x+t.offsetWidth-i.call(t,"border-right-width","padding-right"),e.maxY=e.y+t.offsetHeight-i.call(t,"border-bottom-width","padding-bottom"),e.x+=i.call(t,"border-left-width","padding-left"),e.y+=i.call(t,"border-top-width","padding-top")):e={x:0,y:0,maxX:0,maxY:0},e}return(r=i.extend(s,{defaultOptions:{mouseSnap:10,mouseDelay:0,touchSnap:20,touchDelay:300,delegate:"*",document:document},init:function(e){this.setOptions(e),void 0!==this.options.snap&&(t.warn("Controls/Drag snap option","Use the mouseSnap and touchSnap options instead."),this.options.mouseSnap=this.options.touchSnap=this.options.snap),void 0!==this.options.delay&&(t.warn("Controls/Drag delay option","Use the mouseDelay and touchDelay options instead."),this.options.mouseDelay=this.options.touchDelay=this.options.delay);var i=this.onMove.bind(this),s=this.onStop.bind(this),o=this.onStart.bind(this);this.documentEvents={touchmove:i,mousemove:i,touchend:s,mouseup:s,touchcancel:s},this.elementEvents={touchstart:o,mousedown:o},this.attach()},setOptions:function(t){return this._parent(t),t=this.options,this.root=e.extendElement(t.root||document.body),this.element=e.extendElement(t.element||this.root),this.document=t.document,l||(this.clickDiscarder||(this.clickDiscarder=e.createElement("div",{styles:{position:"absolute",height:"1px",width:"1px"}})),this.clickDiscarder.inject(this.root)),this},destroy:function(){this.detach(),l||this.clickDiscarder.destroy()},attach:function(){return h.addEvents.call(this.element,this.elementEvents),this},detach:function(){return this.reset(),h.removeEvents.call(this.element,this.elementEvents),this},start:c,move:l?c:function(t){p(this.clickDiscarder,t)},snap:function(t){l||(p(this.clickDiscarder,t),this.clickDiscarder.show());var i=e.Controls&&e.Controls.Scroller;(i=i&&i.activeScroller)&&i.onScrollStop(this.currentEvent)},stop:c,cancel:c,reset:function(){clearTimeout(this.startTimeout),l?this.snapped&&(this.document.addEventListener("click",a.stopPropagation,!0),setTimeout(function(){this.document.removeEventListener("click",a.stopPropagation,!0)}.bind(this),300)):this.clickDiscarder.hide(),this.snapped=!1,this.startOrigin=this.currentDelta=this.currentEvent=this.target=null,h.removeEvents.call(this.document,this.documentEvents)},onStart:function(t){var e=a.getElement(t);if((t.which||t.button||0)<2&&!this.target&&h.match.call(e,this.options.delegate,this.root)&&(this.currentEvent=t,this.target=e,this.startOrigin=a.getPosition(t),this.start(this.startOrigin),this.target)){h.addEvents.call(this.document,this.documentEvents);var i=d(t)?this.options.touchDelay:this.options.mouseDelay;i&&(this.startTimeout=setTimeout(this.onMove.bind(this,!1),i)),d(t)||a.preventDefault(t)}},onMove:function(t){var e,i;t?(this.currentEvent=t,this.snapped&&a.preventDefault(t)):(t=this.currentEvent,i=!0);var s=a.getPosition(t);if(this.currentDelta=e={x:s.x-this.startOrigin.x,y:s.y-this.startOrigin.y,distance:0},e.distance=Math.sqrt(e.x*e.x+e.y*e.y),!this.snapped){var o=d(t)?this.options.touchSnap:this.options.mouseSnap,n=d(t)?this.options.touchDelay:this.options.mouseDelay;(n?i&&e.distance<=o:!o||e.distance>o)?(this.snapped=!0,this.snap(s,e)):n&&(this.cancel(),this.reset())}this.snapped&&this.move(s,e)},onStop:function(t){this.currentEvent=t,this.snapped?(this.stop(),a.stop(t)):this.cancel(),this.reset()}})).Move=r.extend({init:function(t){this._parent(t),this.refreshCache=this.refreshCache.bind(this)},setOptions:function(t){return t&&!t.root&&(t.root=t.container),this._parent(t)},start:function(t){this._parent(t),this.context=Object.create(this),!1!==this.call("start")&&!0!==this.call("fixed",this.target)||this.reset()},snap:function(t,i){this._parent(t,i);var s,o=this.options;this.handles=this.call("handles")||this.target,o.centerHandles&&p(this.handles,{x:t.x-this.handles.offsetWidth/2-i.x,y:t.y-this.handles.offsetHeight/2-i.y}),this.startPosition=h.getOffsets.call(this.handles),this.options.overlay&&(s=this.document.body||this.document,this.overlay=e.createElement("div",{styles:{position:"absolute",top:0,left:0,width:s.offsetWidth+"px",height:s.offsetHeight+"px"}}).inject(s)),this.refreshCache()},refreshCache:function(){var t=this.options;if(this.zones=t.zones?this.getList(t.zones):[this.root],this.positions=this.zones.map(function(t){var e=u(t);return e.element=t,e}),t.container&&this.handles){var e=u(t.container),i=h.getDimensions.call(this.handles);this.limit={x:[e.x,e.maxX-i.outerWidth],y:[e.y,e.maxY-i.outerHeight]}}else this.limit={x:[-1/0,1/0],y:[-1/0,1/0]}},reset:function(){this._parent(),this.zone=null,this.startPosition=null,this.overlay&&(this.overlay.destroy(),this.overlay=null)},stop:function(){this._parent(),this.zone&&!1!==this.call("drop")||(this.setPosition(this.startOrigin,{x:0,y:0}),this.call("cancel")),this.call("stop")},move:function(t,e){var i,s,o,n;for(this._parent(t,e),this.setPosition(t,e),i=0,s=this.positions.length;i<s;i+=1)(n=this.positions[i]).x<=t.x&&t.x<=n.maxX&&n.y<=t.y&&t.y<=n.maxY&&(o=n.element);this.zone!==o&&(this.zone&&(this.call("leave"),this.placeholder&&(this.placeholder.remove(),this.placeholder=null,this.refreshCache())),this.zone=o,o&&(this.placeholder=this.call("enter"),this.refreshPlaceholderCache())),this.zone&&this.placeholder&&this.placePlaceholder(),this.call("move")},setPosition:function(t,e){var i,s,o,n,h=this.limited={},a={};for(s=0;s<2;s+=1)o=s?"x":"y",i=this.limit[o],a[o]=this.startPosition[o]+e[o],n=0,i[1]<a[o]?(n=i[1]-a[o],h[s?"right":"bottom"]=n):i[0]>a[o]&&(n=i[0]-a[o],h[s?"left":"top"]=n),n&&(t[o]+=n,a[o]+=n,e[o]+=n);p(this.handles,a)},getList:function(t){var i=e.typeOf(t);return"array"===i?t:"function"===i?t.apply(this,Array.prototype.slice.call(arguments,1)):this.root.getElements(t)},call:function(t,e){var i=this.options[t];if(i)return o.attempt(i,0,null,this.context,e)},refreshPlaceholderCache:function(){var t,e,i,s=(this.zone||this.root).childNodes,o=[];for(e=0,i=s.length;e<i;e+=1)1===(t=s[e]).nodeType&&t!==this.handles&&t!==this.placeholder&&(t.offsetHeight||t.offsetWidth)&&this.clickDiscarder!==t&&!0!==this.call("fixed",t)&&(o[o.length]={element:t,position:h.getOffsets.call(t)});this.placeholderCache=o},placePlaceholder:function(){for(var t,e,i,s,o,n,a,r,l,c,d,p,u,f="offsetWidth",m=this.context.handles,v=this.context.placeholder,y=this.context.limited,g=this.zone||this.root,x=this.target,D=this.placeholderCache;x&&x.parentNode!==g;)x=x.parentNode;for(t=h.getOffsets.call(m),l={x:y.left?-1/0:y.right?1/0:t.x+m[f]/2,y:y.top?-1/0:y.bottom?1/0:t.y+m.offsetHeight/2},e=0,i=D.length;e<i;e+=1)t=(s=D[e]).position,(p=void 0===u||u>t.x)?d=void 0===u:c=!0,u=t.x+s.element[f],(p||t.x<=l.x)&&(d||t.y<=l.y)&&(o=e);n=0,void 0!==o&&(t=(s=D[o]).position,n=(c?t.x+s.element[f]/2>l.x:t.y+s.element.offsetHeight/2>l.y)?o:o+1),a=D[n]&&D[n].element,r=D[n-1]&&D[n-1].element,x===m||!x||this.options.allowBesidePlaceholder||r!==x&&a!==x?(a?a!==v&&a.previousSibling!==v:r?r!==v&&r.nextSibling!==v:g.lastChild!==v)&&(a||r?v.inject(a||r,a?"before":"after"):v.inject(g),this.refreshPlaceholderCache(),this.refreshCache()):h.isInjected.call(v)&&(v.remove(),this.refreshPlaceholderCache(),this.refreshCache())}}),e.namespace("Controls/Drag",r,e)});