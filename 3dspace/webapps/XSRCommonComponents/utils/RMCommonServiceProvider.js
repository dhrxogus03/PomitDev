define("DS/XSRCommonComponents/utils/RMCommonServiceProvider",["UWA/Class","UWA/Promise","DS/XSRCommonComponents/utils/IndexServiceProvider","DS/XSRCommonComponents/utils/RequestUtil","DS/XSRCommonComponents/utils/Constants"],function(e,t,n,o,s){"use strict";return e.extend({init:function(e){o.getPlatformId(),this.isChangeControlled=!(!e||!e.isChangeControlled),this.CSRFToken=o.get3DSpaceCSRFToken(),this.SC=o.getSecurityContext()},getHeaders:function(e){var t={"Content-type":"application/json"};return this.isChangeControlled&&Object.assign(t,o.getWorkUnderHeaders()),e&&Object.keys(e).forEach(function(n){t[n]=e[n]}),t},getUOMTypes:function(e){var n=this;return new t(function(t,s){o.send3DSpaceRequest("resources/RawMaterial/v1/Raw_Material/getUOMsAvailableOnRM?objectPID="+e,"GET",{type:"json",headers:n.getHeaders({ENO_CSRF_TOKEN:n.CSRFToken,SecurityContext:n.SC})},t,s)})},getUOMAndUnits:function(){var e=this;return new t(function(t,n){o.send3DSpaceRequest(s.RM_BASE_URL+"Raw_Material/getAllUOMTypes","GET",{type:"json",headers:e.getHeaders()},t,n)})}})});