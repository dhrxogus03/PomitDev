define("DS/UWAUtils/WUXUWAUtils2",["require","exports","UWA/Core"],function(t,e,i){"use strict";var r=function(){},s=/xyz/.test(function(){i.xyz()}),n=s?/\b_parent\b/:/^/,p=s?/\b_previous\b/:/^/;function o(t,e,i,s){i._original&&(i=i._original);var o=n.test(i),a=p.test(i);if(!o&&!a)return i;"function"!=typeof e&&(e=s?r:t||r),"function"!=typeof t&&(t=a?r:e);var l=function(){var r,s,n;return null!=this?(o&&(s=this._parent,this._parent=t),a&&(n=this._previous,this._previous=e),r=i.apply(this,arguments),o&&(this._parent=s),a&&(this._previous=n)):r=i.apply(this,arguments),r};return l.displayName="(method wrapper)",l._original=i,l}return function(){function t(){}return t.implement=function(){for(var t,e,r,s,n=this.prototype||this,p=0,a=arguments.length;p<a;p+=1){t=arguments[p],"class"===(e=i.typeOf(t))&&(t=t.prototype);var l=void 0;for(var h in l=t.name?t.name:n.name?i.owns(n,"name")?n.name:"("+n.name+" inheritor)":"(anonymous class)",t)if("constructor"!==h)if(r=t[h],i.is(r,"function")){var u=(s=("class"===e?arguments[p]:this).parent)&&s.prototype&&s.prototype[h],f=i.owns(n,h)&&n[h];"__uwaPrivateConstructor"===h&&(h="init",u||(u=s&&s.prototype&&s.prototype[h]),f||(f=i.owns(n,h)&&n[h])),r.displayName=l+"#"+("__uwaPrivateConstructor"===h?"init":h),n[h]=o(u,f,r,"class"===e)}else i.is(r,"plain")?(i.owns(n,h)||(n[h]=i.is(n[h],"plain")?i.clone(n[h]):{}),i.extend(n[h],r,!0)):n[h]=r}return this},t.extend=function(e){t.extendingClassFlag=!0;var r=new this;t.extendingClassFlag=!1;var s=r.constructor,n=function(){!t.extendingClassFlag&&this.init&&s.apply(this,arguments)};r.constructor=n;var p={prototype:r,parent:this,extend:t.extend,implement:t.implement};return this.singleton&&(p.singleton=t.singleton),i.extend(n,p),t.implement.apply(n,arguments),n},t.singleton=function(){var e,i=this.extend.apply(this,arguments),r=i.prototype,s=!1,n=[];function p(t){e[t]=function(){if(!s){if("throw"===e.uninitializedCalls)throw new Error("Singleton called before being initialized");if("ignore"===e.uninitializedCalls)return;e.init()}return e[t].apply(this,arguments)}}for(var o in t.extendingClassFlag=!0,e=new i,t.extendingClassFlag=!1,r)"function"==typeof r[o]&&"init"!==o&&"constructor"!==o&&(n.push(o),p(o));var a=e.init,l=!1;return e.init=function(){if(s){if(l)throw new Error("Singleton is already initialized");return l=!0,void a.call(this)}var t,r;for(s=!0,t=0,r=n.length;t<r;t++)delete e[n[t]];return i.apply(this,arguments),this},e},t.inheritUtils=function(e,r){var s=t.extend.call(e,r),n=i.merge(r.publishedProperties||{},r._privateProperties||{});return t.generatePropertiesSettersAndGetters(s,n),s.inherit=t.inherit,s},t.inherit=function(e){return t.inheritUtils(this,e)},t.generatePropertiesSettersAndGetters=function(t,e){var r=t;for(var s in e)!function(t){Object.defineProperty(r.prototype,t,{get:function(){if(this._properties&&this._properties[t])return this._properties[t].value},enumerable:!0,configurable:!0})}(s),!0!==e[s].readOnly&&function(t){var s=t.substring(0,1).toUpperCase()+t.substring(1,t.length),n="_apply"+s;if(!0!==e[t].advancedSetter)Object.defineProperty(r.prototype,t,{set:function(e){var r;if(!(this._properties&&this._properties[t]&&(Array.isArray(this._properties[t].value)?i.equals(this._properties[t].value,e):this._properties[t].value===e))&&(this._properties[t]?(r=this._properties[t].value,this._properties[t].value=e):this._properties[t]={value:e},this._propertyChanged(t,r,e),!(this.publishedProperties[t]||this._privateProperties[t]).noNeedToApplyFlag)){if(this._properties[t].dirty=!0,this[n])this[n](r,e);else{var s={};s[t]=r,this._applyProperties(s)}this._properties[t].dirty=!1}}});else{var p="_preEdit"+s,o="_postEdit"+s;Object.defineProperty(r.prototype,t,{set:function(e){var r;if(this._properties[t]&&(r=this._properties[t].value),this[p]){var s=this[p](r,e);if(!1===s)return;"object"==typeof s&&Object.keys(s).indexOf("validValue")>=0&&(e=s.validValue)}if(this._properties&&this._properties[t]&&(Array.isArray(this._properties[t].value)?i.equals(this._properties[t].value,e):this._properties[t].value===e))this[o]&&this[o](r,e);else{if(this._properties[t]?this._properties[t].value=e:this._properties[t]={value:e},this._propertyChanged(t,r,e),!(this.publishedProperties[t]||this._privateProperties[t]).noNeedToApplyFlag){if(this._properties[t].dirty=!0,this[n])this[n](r,e);else{var a={};a[t]=r,this._applyProperties(a)}this._properties[t].dirty=!1}this[o]&&this[o](r,e)}}})}}(s);return r},t}()});