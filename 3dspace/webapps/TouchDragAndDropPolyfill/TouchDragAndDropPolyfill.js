!function(){"use strict";var t=function(){var t={getPoint:function(t,e){return e=e||"client",t&&t.touches&&(t=t.touches[0]),{x:t[e+"X"],y:t[e+"Y"]}},getDistance:function(e,n){var o=t.getPoint(e),r=t.getPoint(n);return Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2))},getTarget:function(e,n,o){n=n||t.getSameOriginTop().document,o=o||{x:0,y:0};var r,i=t.getTopCoordinates(t.getPoint(e)),s=n.elementFromPoint(i.x-o.x,i.y-o.y);try{if(s&&"IFRAME"===s.nodeName&&s.contentDocument)return r=s.getBoundingClientRect(),t.getTarget(e,s.contentDocument,{x:o.x+r.left,y:o.y+r.top})}catch(e){}return s},getTopCoordinates:function(e,n){n=n||window;try{if(!n.frameElement)return e}catch(t){return e}var o=n.frameElement.getBoundingClientRect();return t.getTopCoordinates({x:e.x+o.left,y:e.y+o.top},n.parent)},copyStyle:function(e,n){var o,r,i;for(r=0;r<n.attributes;++r)i=n.attributes[r],-1===["id","class","style","draggable"].indexOf(i.name)&&0!==i.name.indexOf("on")||n.removeAttribute(i.name);e instanceof HTMLCanvasElement&&(n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0)),o=getComputedStyle(e),[].forEach.call(o,function(t){-1===t.indexOf("transition")&&(n.style[t]=o[t])}),n.style.pointerEvents="none",[].forEach.call(e.children,function(e,o){t.copyStyle(e,n.children[o])})},getSameOriginTop:function(e){e=e||window;try{return e!==e.parent&&e.parent?(e.parent.document,t.getSameOriginTop(e.parent)):e}catch(t){return e}}};return t}(),e=function(){function t(){this.dropEffect="move",this.effectAllowed="all",Object.defineProperty(this,"_data",{value:{},configurable:!0,writable:!0,enumerable:!1}),Object.defineProperty(this,"_image",{value:null,configurable:!0,writable:!0,enumerable:!1})}function e(t){switch(t=t.toLowerCase()){case"text":return"text/plain";case"url":return"text/uri-list";default:return t}}return Object.defineProperty(t.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),t.prototype.clearData=function(t){null!=t?delete this._data[e(t)]:this._data={}},t.prototype.getData=function(t){return this._data[e(t)]||""},t.prototype.setData=function(t,n){this._data[e(t)]=n},t.prototype.setDragImage=function(t,e,n){this._image={element:t,offsets:{x:e||0,y:n||0}}},t}(),n=function(){function e(e){var n,o,r,i,s=e.source,u=e.offsets;this._offsets=JSON.parse(JSON.stringify(u)),this.element=s.cloneNode(!0),n=s.getBoundingClientRect(),i=s.style.transform,s.style.transform="",o=s.getBoundingClientRect(),s.style.transform=i,this._offsets.x-=n.left-o.left,this._offsets.y-=n.top-o.top,t.copyStyle(s,this.element),(r=this.element.style).left="-9999px",r.opacity="0.5",r.position="absolute",r.pointerEvents="none",r.zIndex="999999"}return e.prototype.move=function(e){requestAnimationFrame(function(){if(this.element){var n=t.getPoint(e,"page"),o=this.element.style;o.left=Math.round(n.x+this._offsets.x)+"px",o.top=Math.round(n.y+this._offsets.y)+"px"}}.bind(this))},e.prototype.destroy=function(){this.element&&this.element.parentElement&&(this.element.parentElement.removeChild(this.element),this.element=null,this._offsets=null)},e}(),o=function(){var o,r=null,i=null,s=null,u=!1,a=null,c=null,l=null,d=null,f=!1,h=-1,g=-1;function p(t){return t&&!t.defaultPrevented&&t.touches&&t.touches.length<2}function m(t){var e,n,o=t.source,r=t.target,i=t.type;return e=document.createEvent("Event"),n=o.touches?o.touches[0]:o,e.initEvent(i,!0,!0),e.button=0,e.which=e.buttons=1,e.view=o.view,["altKey","ctrlKey","metaKey","shiftKey"].forEach(function(t){e[t]=o[t]}),["pageX","pageY","clientX","clientY","screenX","screenY"].forEach(function(t){e[t]=n[t]}),e.dataTransfer=l,r.dispatchEvent(e),e}function y(){d&&d.destroy(),d=null,i=null,(r=null)&&s&&r.removeEventListener("touchend",s),s=null,u=!1,l=new e,f=!1,a=null,c=null,clearTimeout(h),clearTimeout(g)}return o={touchstart:function(e){var n;p(e)&&(y(),r=e.target,(n=function(t){for(;t&&(!t.hasAttribute("draggable")||!t.draggable);)t=t.parentElement;return t}(r))&&(i=n,a=e,s=function(){u=!0},r.addEventListener("touchend",s,!0),h=setTimeout(function(){return u?y():i!==n||t.getDistance(e,a)>15?void 0:m({source:e,type:"contextmenu",target:n}).defaultPrevented?y():void 0},1e3),g=setTimeout(function(){if(u)return y();f=!0,o.touchmove(e)},300)))},touchmove:function(e){var o,r=a?t.getDistance(a,e):0;if(f){if(i&&e&&e.touches&&e.touches.length>0){if(o=t.getTarget(e),d)e.preventDefault();else{if(m({source:e,type:"dragstart",target:i}).defaultPrevented)return y();!function(e){var o=t.getTopCoordinates({x:0,y:0}),r=t.getTopCoordinates(i.getBoundingClientRect()),s=t.getPoint(e);(d=new n({source:(l._image||{}).element||i,container:document.body,offsets:l._image?{x:o.x-l._image.offsets.x,y:o.y-l._image.offsets.y}:{x:r.x-s.x,y:r.y-s.y}})).move(e),t.getSameOriginTop().document.body.appendChild(d.element)}(e),m({source:e,type:"dragenter",target:o})}a=e,o!==c&&(c&&(m({source:a,type:"dragleave",target:c}),o&&m({source:e,type:"dragenter",target:o})),c=o),d.move(e),o&&m({source:e,type:"dragover",target:o})}}else r>15&&y()},touchend:function(t){p(t)&&a?(d?d.destroy():i=null,i&&(c&&-1===t.type.indexOf("cancel")&&m({source:a,type:"drop",target:c}),m({source:a,type:"dragend",target:i})),y()):y()}}}(),r=function(){function t(t){this.window=t||self}return t.prototype={constructor:t,isIOS:function(){return/ip(hone|od|ad)/i.test(this.window.navigator.userAgent)},getIOSVersion:function(){return this.window.navigator.userAgent.match(/([0-9_]+) like Mac OS X/)[1].replace(/_/g,".")},isAndroid:function(){return/android/i.test(this.window.navigator.userAgent)},isChromium:function(){return/chrom(e|ium)/i.test(this.window.navigator.userAgent)},getChromiumVersion:function(){return this.window.navigator.userAgent.match(/chrom(e|ium)\/([0-9]+)\./i)[2]},isFirefox:function(){return/firefox/i.test(this.window.navigator.userAgent)},isMobileEmulator:function(){return this.isIOS()&&!/ip(hone|od|ad)/i.test(this.window.navigator.platform)||this.isAndroid()&&!/android/i.test(this.window.navigator.platform)},supportsDragEvents:function(){var t=this.window.document.documentElement;return"ondragstart"in t&&"draggable"in t},supportsTouchEvents:function(){return"ontouchstart"in this.window.document.documentElement},supportsTouchDragAndDrop:function(){return this.supportsDragEvents()&&!(this.isAndroid()&&this.isChromium()&&parseInt(this.getChromiumVersion())<75||this.isIOS()&&(!/ipad|simulator/i.test(this.window.navigator.platform)||parseFloat(this.getIOSVersion())<11)||!this.isAndroid()&&!this.isIOS()&&(this.isChromium()||this.isFirefox())&&!this.supportsTouchEvents()||this.isMobileEmulator()&&!this.supportsTouchEvents())},supportsPassiveEvents:function(){var t={},e=!1;return Object.defineProperty(t,"passive",{get:function(){return e=!0,!0}}),this.window.document.addEventListener("test",function(){},t),e}},t}(),i=function(){return function(t){var e,n=new r;!t&&n.supportsTouchDragAndDrop()||(e=!!n.supportsPassiveEvents()&&{passive:!1,capture:!1},document.addEventListener("touchstart",o.touchstart,e),document.addEventListener("touchmove",o.touchmove,e),document.addEventListener("touchend",o.touchend),document.addEventListener("touchcancel",o.touchend))}}();window.TouchDragAndDropPolyfill||i(),window.TouchDragAndDropPolyfill=!window.DebugTouchDragAndDropPolyfill||{Utils:t,DataTransfer:e,Preview:n,Events:o,FeatureDetector:r,polyfill:i}}();