define("DS/CATSmmJsApi/Api",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})}),define("DS/CATSmmJsApi/IdUtils",["require","exports"],function(e,t){"use strict";function s(e,t){if(t||(t=[]),null===e)return t;for(let s=0,n=e.length;s<n;s++){const n=e.charAt(s);if(a(n))t.push(n);else{let e=n.charCodeAt(0).toString(16),s=e.length;s%2!=0&&(e="0"+e,s++);for(let e=0;e<s;e+=2)t.push("~");t.push(e.toLocaleUpperCase("en-US"))}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.decodeBuf=t.decode=t.isSafeChar=t.encodeBuf=t.encode=t.getRootResourceId=t.constructAbsoluteId=t.getLocalId=t.getSuperResourceId=t.depth=t.ROOT_RESOURCE_ID=t.ID_SEPARATOR=void 0,t.ID_SEPARATOR="/",t.ROOT_RESOURCE_ID="",t.depth=function(e){let s=0;for(let n=0,o=e.length;n<o;n++)e.charAt(n)===t.ID_SEPARATOR&&s++;return s},t.getSuperResourceId=function(e){if(t.ROOT_RESOURCE_ID===e)return null;const s=e.lastIndexOf(t.ID_SEPARATOR);if(-1===s)throw new SyntaxError("IdUtils invalid id: "+e);return 0===s?t.ROOT_RESOURCE_ID:e.substring(0,s)},t.getLocalId=function(e){const s=e.lastIndexOf(t.ID_SEPARATOR);if(-1===s)throw new SyntaxError("IdUtils invalid id: "+e);return c(e,s+1,e.length)},t.constructAbsoluteId=function(e,n){const o=[];return t.ROOT_RESOURCE_ID!==e&&o.push(e),o.push(t.ID_SEPARATOR),s(n,o),o.join("")},t.getRootResourceId=function(e){if(t.ROOT_RESOURCE_ID===e)return"";const s=e.indexOf(t.ID_SEPARATOR,1);return-1==s?e:e.substring(0,s)},t.encode=function(e){const t=[];return s(e,t),t.join("")},t.encodeBuf=s;const n="A".charCodeAt(0),o="Z".charCodeAt(0),r="a".charCodeAt(0),i="z".charCodeAt(0);function a(e){const t=e.charCodeAt(0);return n<=t&&t<=o||r<=t&&t<=i||"0"<=e&&e<="9"||"."===e||"-"===e||"_"===e}function c(e,t,s){void 0===t&&(t=0),void 0===s&&(s=e.length);const n=[];return _(e,t,s,n),n.join("")}function _(e,t,s,n){n||(n=[]);let o=t;for(;o<s;){const t=e.charAt(o);if("~"===t){let t=2;for(o++;"~"===e.charAt(o);)t+=2,o++;const s=String.fromCharCode(parseInt(e.substring(o,o+t),16));n.push(s),o+=t}else n.push(t),o++}return n}t.isSafeChar=a,t.decode=c,t.decodeBuf=_}),define("DS/CATSmmJsApi/Constants",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LICENSE_KEY_TRA=t.DefaultServerPreferences=t.CLICK_DELAY=t.MOD_DOUBLE_CLICK=t.MOD_LONG_TOUCH=t.MOD_SHIFT=t.MOD1=t.TAG_RESOURCE=t.TAG_FILES=t.TAG_CAN_BE_ADDED_TO_CONTEXT=t.TAG_NAVIGATION_KIND_PREDICATE_REVERSED=t.TAG_NAVIGATION_KIND_PREDICATE=t.TAG_NAVIGATION_KIND_RESOURCE=t.C_SYC_ENOVIA=t.C_TRA_SCOPE=t.COMPONENT_SEARCH=t.COMPONENT_TRASH=t.COMPONENT_FILESYSTEM=t.COMPONENT_PREVIEW=t.COMPONENT_PROPERTIES=t.COMPONENT_TREE=t.C_VPM_REFERENCE_TYPE=t.C_VPM_INSTANCE_TYPE=t.P_SYC_CONTEXT_ROLE=t.P_SYC_ENOVIA_TYPE=t.P_SYC_DESCRIBES_NAVIGATION=t.P_SYC_CONTEXT=t.P_SYC_HAS_JS_SCRIPT=t.P_SYC_ACTION_ARGUMENT_CONSTRAINED_TO_POSSIBLE_VALUES=t.P_SYC_ACTION_ARGUMENT_POSSIBLE_VALUE=t.P_SYC_ACTION_ARGUMENT_INITIAL_VALUE=t.P_SYC_ACTION_ARGUMENT_TYPE=t.P_SYC_ACTION_ENABLED=t.P_SYC_ACTION_HAS_ARGUMENT=t.P_SYC_HAS_ACTION=t.C_SYC_PREVIEW=t.P_SYC_FACETS=t.P_SYC_PROPERTY_CHILD=t.P_SYC_UML_TYPE=t.P_SYC_OBJECT_ID=t.P_SYC_CONTENT_TYPE=t.P_SYC_i3DX=t.P_DECLARED_TYPE=t.P_SYC_TRA_SOURCE=t.C_TRACEABILITY_REQUIREMENT=t.C_TRACEABILITY_DOCUMENT=t.P_SYC_INNER_PART=t.P_HAS_PART=t.P_SYC_INSTANCE_OF=t.P_SYC_PREVIEW_IS_DEFAULT=t.P_SYC_PREVIEW_LOCATION=t.P_SYC_CAN_UPLOAD=t.P_SYC_ERROR=t.P_SYC_HAS_HELP=t.P_SYC_HAS_ICON=t.P_SYC_HAS_PREVIEW=t.P_SYC_IDENTIFIER=t.PS_SYC_CHILDREN=t.P_SYC_PAGE_ELEMENT=t.P_SYC_CHILD=t.P_SYC_VERSION=t.P_SYC_LEAF=t.P_SYC_TITLE=t.P_SYC_DISPLAY_TEXT=t.NS_SYC_TYPE=t.P_RDFS_label=t.C_RDFS_Resource=t.C_RDF_Property=t.C_RDF_XMLLiteral=t.P_RDF_type=t.XSD_dateTime=t.XSD_boolean=t.XSD_integer=t.XSD_string=t.NS_SYC=t.NS_DS_VOCABULARIES=t.HTML_SYC_CSS_INTERACT=t.HTML_SYC_DESCRIBES_NAVIGATION_PARAMETER=t.HTML_SYC_ICON_URL_PARAMETER=t.HTML_SYC_TITLE_PARAMETER=t.HTML_SYC_ENOVIA_TYPE=t.HTML_SYC_TYPES_PARAMETER=t.HTML_SYC_SORT_VALUE=t.HTML_SYC_SORT_VALUE_TYPE_DATE=t.HTML_SYC_SORT_VALUE_TYPE=t.HTML_SYC_FILTER_PARENT_ID=t.HTML_SYC_FILTER_ID=t.HTML_SYC_PREVIEW_PARAMETER=t.HTML_SYC_ID_ANCHOR_PREFIX=t.HTML_SYC_DRAGTAGS_PARAMETER=t.HTML_SYC_DROPTAGS_PARAMETER=t.HTML_SYC_AREA_PARAMETER=t.HTML_SYC_HREF_PARAMETER=t.HTML_SYC_FILENAME_PARAMETER=t.HTML_SYC_TRASHABLE_PARAMETER=t.HTML_SYC_DRAG_ID_PARAMETER=t.HTML_SYC_DRAG_DATA_PARAMETER=t.HTML_SYC_DOWNLOAD_URL_PARAMETER=t.HTML_SYC_UPLOAD_URL_PARAMETER=t.HAS_FILTER=t.HTML_SYC_ID_PARAMETER=t.STATEMENT_ID_PREFIX=t.SYC_CONTEXT_MACRO=t.ID_SEPARATOR=t.ROOT_RESOURCE_ID=t.SYC_TYPE_URI_SEPARATOR=t.URI_PARAM_FROM_MESSAGE=t.URI_PARAM_SELECTOR=t.URI_PARAM_CONTEXT=t.URI_PARAM_PREVIEW_OPTIONS_SELECTION=t.URI_PARAM_PREVIEW_LAYER_TAG=t.URI_PARAM_PREVIEW_EXTRA_OPTIONS=t.URI_PARAM_PREVIEW_OPTIONS=t.URI_PARAM_PREVIEW_TYPES=t.URI_PARAM_ENTRY=t.URI_PARAM_RESOURCE_ID=t.AuthenticationKind=t.ErrorCode=t.SelectorsAll=t.Selectors=t.PreviewFormat=void 0,t.PreviewFormat={Html:"1d-html",HtmlCanvas:"2d-canvas",Svg:"2d-svg",Vg:"2d-vg",Js:"js",Custom:"3d-custom",DataGridView:"datagridview",TableView:"tableconfigview"};t.Selectors={parents:"parents",path:"path",children:"children",details:"details",previews:"previews",nls:"nls",actions:"actions",display:"display"},t.SelectorsAll=[t.Selectors.parents,t.Selectors.children,t.Selectors.details,t.Selectors.previews,t.Selectors.nls,t.Selectors.actions],t.ErrorCode={AUTHENTICATION_NEEDED:1,INVALID_CREDENTIALS:2,INTERNAL_ERROR:3,INVALID_LICENSE:4},t.AuthenticationKind={Password:"User-Password",OAuth:"OAuth",OAuth1:"OAuth1",OAuth2:"OAuth2",CasOAuth1:"CasOAuth1",Cas:"Cas",WebSocketProxy:"WebSocketProxy",LoginTWC:"LoginTWC"},t.URI_PARAM_RESOURCE_ID="id",t.URI_PARAM_ENTRY="entry",t.URI_PARAM_PREVIEW_TYPES="pvwTypes",t.URI_PARAM_PREVIEW_OPTIONS="o",t.URI_PARAM_PREVIEW_EXTRA_OPTIONS="o2",t.URI_PARAM_PREVIEW_LAYER_TAG="tag",t.URI_PARAM_PREVIEW_OPTIONS_SELECTION="sel",t.URI_PARAM_CONTEXT="context",t.URI_PARAM_SELECTOR="selector",t.URI_PARAM_FROM_MESSAGE="m",t.SYC_TYPE_URI_SEPARATOR=".",t.ROOT_RESOURCE_ID="",t.ID_SEPARATOR="/",t.SYC_CONTEXT_MACRO="$sycContext",t.STATEMENT_ID_PREFIX="sycstatement:",t.HTML_SYC_ID_PARAMETER="sycid",t.HAS_FILTER="hasFilter",t.HTML_SYC_UPLOAD_URL_PARAMETER="sycuploadurl",t.HTML_SYC_DOWNLOAD_URL_PARAMETER="sycdownloadurl",t.HTML_SYC_DRAG_DATA_PARAMETER="sycdragdata",t.HTML_SYC_DRAG_ID_PARAMETER="sycdragid",t.HTML_SYC_TRASHABLE_PARAMETER="syctrashable",t.HTML_SYC_FILENAME_PARAMETER="sycfilename",t.HTML_SYC_HREF_PARAMETER="sychref",t.HTML_SYC_AREA_PARAMETER="sycarea",t.HTML_SYC_DROPTAGS_PARAMETER="sycdroptags",t.HTML_SYC_DRAGTAGS_PARAMETER="sycdragtags",t.HTML_SYC_ID_ANCHOR_PREFIX="__syc_lid__",t.HTML_SYC_PREVIEW_PARAMETER="sycpreview",t.HTML_SYC_FILTER_ID="sycfilterid",t.HTML_SYC_FILTER_PARENT_ID="sycfilterparentid",t.HTML_SYC_SORT_VALUE_TYPE="sycsortvaluetype",t.HTML_SYC_SORT_VALUE_TYPE_DATE="Date",t.HTML_SYC_SORT_VALUE="sycsortvalue",t.HTML_SYC_TYPES_PARAMETER="syctypes",t.HTML_SYC_ENOVIA_TYPE="sycenoviatype",t.HTML_SYC_TITLE_PARAMETER="syctitle",t.HTML_SYC_ICON_URL_PARAMETER="sycicon",t.HTML_SYC_DESCRIBES_NAVIGATION_PARAMETER="sycdescribesnavigation",t.HTML_SYC_CSS_INTERACT="syc-interact";const s="http://www.w3.org/2001/XMLSchema#",n="http://www.w3.org/1999/02/22-rdf-syntax-ns#",o="http://www.w3.org/2000/01/rdf-schema#";t.NS_DS_VOCABULARIES="http://www.3ds.com/vocabularies/",t.NS_SYC=t.NS_DS_VOCABULARIES+"syc/",t.XSD_string=s+"string",t.XSD_integer=s+"integer",t.XSD_boolean=s+"boolean",t.XSD_dateTime=s+"dateTime",t.P_RDF_type=n+"type",t.C_RDF_XMLLiteral=n+"XMLLiteral",t.C_RDF_Property=n+"Property",t.C_RDFS_Resource=o+"Resource",t.P_RDFS_label=o+"label",t.NS_SYC_TYPE=t.NS_SYC+"type/",t.P_SYC_DISPLAY_TEXT=t.NS_SYC+"displayText",t.P_SYC_TITLE="http://purl.org/dc/terms/title",t.P_SYC_LEAF=t.NS_SYC+"leaf",t.P_SYC_VERSION=t.NS_SYC+"version",t.P_SYC_CHILD=t.NS_SYC+"treeChild",t.P_SYC_PAGE_ELEMENT=t.NS_SYC+"pageElement",t.PS_SYC_CHILDREN=[t.P_SYC_CHILD,t.P_SYC_PAGE_ELEMENT],t.P_SYC_IDENTIFIER="http://purl.org/dc/terms/identifier",t.P_SYC_HAS_PREVIEW=t.NS_SYC+"preview",t.P_SYC_HAS_ICON=t.NS_SYC+"icon",t.P_SYC_HAS_HELP=t.NS_SYC+"help",t.P_SYC_ERROR=t.NS_SYC+"error",t.P_SYC_CAN_UPLOAD=t.NS_SYC+"canUpload",t.P_SYC_PREVIEW_LOCATION=t.NS_SYC+"previewLocation",t.P_SYC_PREVIEW_IS_DEFAULT=t.NS_SYC+"previewIsDefault",t.P_SYC_INSTANCE_OF=t.NS_SYC+"isInstanceOf",t.P_HAS_PART="http://purl.org/dc/terms/hasPart",t.P_SYC_INNER_PART=t.NS_SYC+"innerPart",t.C_TRACEABILITY_DOCUMENT=t.NS_SYC_TYPE+"Traceability.Document",t.C_TRACEABILITY_REQUIREMENT=t.NS_SYC_TYPE+"Traceability.Requirement",t.P_SYC_TRA_SOURCE=t.NS_SYC+"traceability/source",t.P_DECLARED_TYPE=t.NS_SYC+"declaredType",t.P_SYC_i3DX=t.NS_SYC+"i3DX",t.P_SYC_CONTENT_TYPE=t.NS_SYC+"MagicDraw/contentType",t.P_SYC_OBJECT_ID=t.NS_SYC+"MagicDraw/objectId",t.P_SYC_UML_TYPE=t.NS_SYC+"MagicDraw/Uml%20Type",t.P_SYC_PROPERTY_CHILD=t.NS_SYC+"propertyChild",t.P_SYC_FACETS=[t.P_SYC_INSTANCE_OF,t.P_SYC_PROPERTY_CHILD],t.C_SYC_PREVIEW=t.NS_SYC_TYPE+"Preview",t.P_SYC_HAS_ACTION=t.NS_SYC+"hasAction",t.P_SYC_ACTION_HAS_ARGUMENT=t.NS_SYC+"hasArgument",t.P_SYC_ACTION_ENABLED=t.NS_SYC+"enabled",t.P_SYC_ACTION_ARGUMENT_TYPE=t.NS_SYC+"argumentType",t.P_SYC_ACTION_ARGUMENT_INITIAL_VALUE=t.NS_SYC+"argumentInitValue",t.P_SYC_ACTION_ARGUMENT_POSSIBLE_VALUE=t.NS_SYC+"argumentPossibleValue",t.P_SYC_ACTION_ARGUMENT_CONSTRAINED_TO_POSSIBLE_VALUES=t.NS_SYC+"argumentConstrainedToPossibleValues",t.P_SYC_HAS_JS_SCRIPT=t.NS_SYC+"hasJsScript",t.P_SYC_CONTEXT=t.NS_SYC+"context",t.P_SYC_DESCRIBES_NAVIGATION=t.NS_SYC+"describesNavigation",t.P_SYC_ENOVIA_TYPE=t.NS_SYC+"enovia/type",t.P_SYC_CONTEXT_ROLE=t.NS_SYC+"enovia/contextRole",t.C_VPM_INSTANCE_TYPE=t.NS_SYC_TYPE+"Enovia.VPMInstance",t.C_VPM_REFERENCE_TYPE=t.NS_SYC_TYPE+"Enovia.VPMReference",t.COMPONENT_TREE="tree",t.COMPONENT_PROPERTIES="properties",t.COMPONENT_PREVIEW="preview",t.COMPONENT_FILESYSTEM="filesystem",t.COMPONENT_TRASH="trash",t.COMPONENT_SEARCH="search",t.C_TRA_SCOPE=t.NS_SYC_TYPE+"Scope",t.C_SYC_ENOVIA=t.NS_SYC_TYPE+"Enovia",t.TAG_NAVIGATION_KIND_RESOURCE="navigationKind:navigationResource",t.TAG_NAVIGATION_KIND_PREDICATE="navigationKind:predicate",t.TAG_NAVIGATION_KIND_PREDICATE_REVERSED="navigationKind:predicateReversed",t.TAG_CAN_BE_ADDED_TO_CONTEXT="canBeAddedToContext",t.TAG_FILES="Files",t.TAG_RESOURCE="Resource",t.MOD1="mod1",t.MOD_SHIFT="shift",t.MOD_LONG_TOUCH="long_touch",t.MOD_DOUBLE_CLICK="double_click",t.CLICK_DELAY=300,t.DefaultServerPreferences=["enableMultiContext","style"],t.LICENSE_KEY_TRA="CATTRA_AP"}),define("DS/CATSmmJsApi/Rdf",["require","exports","DS/CATSmmJsApi/Constants","DS/CATSmmJsApi/IdUtils"],function(e,t,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterByObject=t.someSubject=t.someObject=t.firstObject=t.getHtmlRDFS=t.getObject=t.getObjectType=t.objectIsResource=t.constructStatementId=t.Model=t.Resource=void 0;class o{constructor(e,t){this.uri=e,this.model=t}getSomeObject(e,t){return a([this.uri],[e],t,this.model.bySubject(this.uri))}get statements(){return this.model.bySubject(this.uri)}get inverseStatements(){return this.model.byObject(this.uri)}}t.Resource=o;class r{constructor(e){this._statementsBySubject={},this._statementsByObject={},this.length=0,e&&this.pushAll(e)}static merge(...e){if(0===e.length)return new r;const t=new r,s=e.sort((e,t)=>t.length-e.length),n=s[0];return Object.keys(n._statementsBySubject).forEach(e=>{t._statementsBySubject[e]=n._statementsBySubject[e].slice()}),Object.keys(n._statementsByObject).forEach(e=>{t._statementsByObject[e]=n._statementsByObject[e].slice()}),t.length=n.length,s.slice(1).forEach(e=>{Object.keys(e._statementsBySubject).forEach(s=>{e._statementsBySubject[s].forEach(e=>t.push(e))})}),t}getResource(e){return new o(e,this)}bySubject(e){if(null==e)return[];let t=this._statementsBySubject[e];return t||(this._statementsBySubject[e]=t=[]),t}byObject(e){if(null==e)return[];let t=this._statementsByObject[e];return t||(this._statementsByObject[e]=t=[]),t}pushAll(e){const t=e.length;for(let s=0;s<t;s++)this.push(e[s])}push(e){this.length++;let t=this._statementsBySubject[e.subjectId];if(t||(this._statementsBySubject[e.subjectId]=t=[]),function(e,t){for(const s of e)if(s.predicate===t.predicate&&s.objectId===t.objectId&&s.objectType===t.objectType&&s.objectValue===t.objectValue)return!0;return!1}(t,e)||t.push(e),void 0!==e.objectId){let t=this._statementsByObject[e.objectId];t||(this._statementsByObject[e.objectId]=t=[]),function(e,t){for(const s of e)if(s.predicate===t.predicate&&s.subjectId===t.subjectId)return!0;return!1}(t,e)||t.push(e)}}clearResource(e){this._statementsBySubject[e]=[]}}function i(e){return void 0!==e.objectId}function a(e,t,s,n){const o=function(e,t){let s,n;for(s=0;s<e.length;s++)if(t(n=e[s],s,e))return n;return null}(n,function(s){return(t=>-1!==e.indexOf(t))(s.subjectId)&&(e=>-1!==t.indexOf(e))(s.predicate)});if(o){if(i(o))return o.objectId;if(void 0!==o.objectValue)return o.objectValue;console.log("Unknown Statement type",o)}return s}t.Model=r,t.constructStatementId=function(e){if(void 0===e.objectId)return"";let t=[s.STATEMENT_ID_PREFIX];return n.encodeBuf(e.subjectId,t),t.push(n.ID_SEPARATOR),n.encodeBuf(e.predicate,t),t.push(n.ID_SEPARATOR),n.encodeBuf(e.objectId,t),t.join("")},t.objectIsResource=i,t.getObjectType=function(e){return i(e)?s.C_RDFS_Resource:void 0!==e.objectType?e.objectType:s.XSD_string},t.getObject=function(e){return void 0!==e.objectId?e.objectId:e.objectValue},t.getHtmlRDFS=function(e,t){let n=a([e],[s.P_RDFS_label],null,t);if(!n){let t=e.lastIndexOf("/"),s=e.lastIndexOf("#");s>t&&(t=s),n=(n=-1===t?e:e.substring(t+1)).substring(0,1).toLocaleUpperCase("en-US")+n.substring(1),n=decodeURIComponent(n)}return n},t.firstObject=function(e,t){if(t.length>0){const e=t[0];if(void 0!==e.objectId)return e.objectId;if(void 0!==e.objectValue)return e.objectValue;console.log("Unknown Statement type",e)}return e},t.someObject=a,t.someSubject=function(e){return e.length>0?e[0].subjectId:null},t.filterByObject=function(e,t,s){return s.filter(function(s){return(t=>void 0!==t&&-1!==e.indexOf(t))(s.objectId)&&(e=>-1!==t.indexOf(e))(s.predicate)})}}),define("DS/CATSmmJsApi/Utils",["require","exports","DS/CATSmmJsApi/Rdf","DS/CATSmmJsApi/Constants"],function(e,t,s,n){"use strict";function o(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(e){const t=document.createElement("div");t.innerHTML=e;const s=t.textContent;return s||""}function i(e,t,r){const i={id:r?r.resolveUrl(e):e,title:void 0,defaultTitle:"",canUpload:!1,types:[],icon:"",leaf:!1,errors:[],describesNavigation:!1,canBeAddedToContext:!1};for(let e=0,a=t.length;e<a;e++){const a=t[e];switch(a.predicate){case n.P_SYC_DISPLAY_TEXT:void 0!==a.objectValue&&(s.getObjectType(a)===n.C_RDF_XMLLiteral?i.title=a.objectValue:i.title=o(a.objectValue));break;case n.P_SYC_TITLE:void 0===i.title&&void 0!==a.objectValue&&(s.getObjectType(a)===n.C_RDF_XMLLiteral?i.title=a.objectValue:i.title=o(a.objectValue));break;case n.P_RDF_type:void 0!==a.objectId&&i.types.push(a.objectId);break;case n.P_SYC_HAS_ICON:const e=s.getObject(a);""===i.icon&&void 0!==e&&r&&(i.icon=r.resolveUrl(e));break;case n.P_SYC_LEAF:i.leaf="true"===a.objectValue;break;case n.P_SYC_ERROR:void 0!==a.objectValue&&i.errors.push(a.objectValue);break;case n.P_SYC_CAN_UPLOAD:i.canUpload="true"===a.objectValue;break;case n.P_SYC_DESCRIBES_NAVIGATION:i.describesNavigation="true"===a.objectValue;break;case n.P_SYC_ENOVIA_TYPE:i.enoviaType=a.objectValue;break;case n.P_SYC_PREVIEW_IS_DEFAULT:i.isDefaultPreview="true"===a.objectValue;break;case n.P_SYC_CONTEXT:i.canBeAddedToContext="true"===a.objectValue}}if(""===i.icon&&r)for(let e=0,t=i.types.length;e<t;e++){const t=i.types[e];if(0===t.indexOf(n.NS_SYC_TYPE)){i.icon=r.icons+"/type/"+t.substring(n.NS_SYC_TYPE.length);break}}return 0===e.indexOf(n.NS_SYC_TYPE)?i.defaultTitle=s.getHtmlRDFS(e,t):i.defaultTitle=i.id,i}function a(e){return null!=e&&(""===e||"/"===e.charAt(0))}Object.defineProperty(t,"__esModule",{value:!0}),t.escapeAttributeValue=t.offsetTopRelativeTo=t.fromPrototype=t.findElementWithClass=t.findElementWithAttribute=t.findElementWithTag=t.encodeQuery=t.decodeQuery=t.isBlankNode=t.isSycId=t.shortenUri=t.objectValueToHtml=t.getTitle=t.createResourceElement=t.asyncGetResourcesInfo=t.getResourceInfo=t.htmlToText=t.escapeHtml=t.getSycTypeFromTypeUri=t.UrlRegExp=void 0,t.UrlRegExp=/^(([^:/?#]+):)(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,t.getSycTypeFromTypeUri=function(e){return-1===e.indexOf(n.NS_SYC_TYPE)?null:decodeURIComponent(e.substring(n.NS_SYC_TYPE.length))},t.escapeHtml=o,t.htmlToText=r,t.getResourceInfo=i,t.asyncGetResourcesInfo=function(e,t,s=[]){const n=[];for(const o of t){const t=e.getResource(o,s).then(t=>{if(t.ok)return t.json().then(t=>i(o,t.bySubject(o),e.config));{const t=e.config.resolveUrl(o);return{id:t,title:void 0,defaultTitle:t,canUpload:!1,types:[],icon:"",leaf:!1,errors:[],describesNavigation:!1,canBeAddedToContext:!1}}});n.push(t)}return Promise.all(n)},t.createResourceElement=function(e){const t=document.createElement("span");if(t.className="syc-resource",a(e.id)?t.setAttribute(n.HTML_SYC_ID_PARAMETER,e.id):e.canUpload&&t.setAttribute(n.HTML_SYC_UPLOAD_URL_PARAMETER,e.id),e.errors.length>0&&t.classList.add("syc-error"),e.icon){const s=document.createElement("span");s.className="syc-resource-icon",s.style.backgroundImage=`url("${e.icon}")`,t.appendChild(s)}const s=document.createElement("span");return s.className="syc-resource-title",void 0!==e.title?s.innerHTML=e.title:s.innerHTML=e.defaultTitle,t.appendChild(s),t},t.getTitle=function(e,t){let o=void 0;for(let e=0,i=t.length;e<i;e++){const i=t[e];switch(i.predicate){case n.P_SYC_DISPLAY_TEXT:if(void 0!==i.objectValue)return s.getObjectType(i)===n.C_RDF_XMLLiteral?i.objectValue:r(i.objectValue);break;case n.P_SYC_TITLE:void 0!==i.objectValue&&(o=s.getObjectType(i)===n.C_RDF_XMLLiteral?i.objectValue:r(i.objectValue))}}return void 0!==o?o:0===e.indexOf(n.NS_SYC_TYPE)?s.getHtmlRDFS(e,t):e},t.objectValueToHtml=function(e,t,s){if("string"!=typeof e.objectValue)return null;let r;switch(e.objectType){case n.XSD_boolean:r=e.objectValue;break;case n.XSD_dateTime:r=o(new Date(e.objectValue).toLocaleString(null!=s?s:navigator.language));break;case n.C_RDF_XMLLiteral:r=t.resolveUrlInHtml(e.objectValue);break;default:r=o(e.objectValue)}return r},t.shortenUri=function(e){if(e){const t=e.lastIndexOf("/"),s=e.lastIndexOf("#");if(s>t)return e.substring(s+1);if(t>=0)return e.substring(t+1)}return e},t.isSycId=a,t.isBlankNode=function(e){return e.startsWith("_:")},t.decodeQuery=function(e){const t={};return e.length>0&&e.substring(1).split("&").map(e=>e.split("=")).forEach(e=>t[decodeURIComponent(e[0].replace(/\+/gm,"%20"))]=decodeURIComponent(e[1].replace(/\+/gm,"%20"))),t},t.encodeQuery=function(e){let t="";return Object.keys(e).forEach(s=>{const n=e[s];""!==n&&null!=n&&(""!==t&&(t+="&"),t+=encodeURIComponent(s)+"="+encodeURIComponent(n))}),""!==t?"?"+t:""},t.findElementWithTag=function(e,t){for(t=t.toLowerCase();e&&e.tagName.toLowerCase()!==t;)e=e.parentElement;return e},t.findElementWithAttribute=function(e,t){for(;e;){const s=e.getAttribute(t);if(s)return{element:e,attributeValue:s};e=e.parentElement}return null},t.findElementWithClass=function(e,t){for(;e;){for(const s of t)if(e.classList.contains(s))return e;e=e.parentElement}return null},t.fromPrototype=function(e,t){const s=Object.create(e);for(const e in t)t.hasOwnProperty(e)&&(s[e]=t[e]);return s},t.offsetTopRelativeTo=function(e,t){let s=e.offsetParent,n=e.offsetTop;for(;s!==t&&s&&null!==s.parentElement;)n+=s.offsetTop,s=s.offsetParent;return n},t.escapeAttributeValue=function(e,t){return e.replace(new RegExp("\\"+t,"g"),"\\'")}}),define("DS/CATSmmJsApi/PlmUtils",["require","exports","DS/CATSmmJsApi/Constants","DS/CATSmmJsApi/Utils","DS/CATSmmJsApi/IdUtils"],function(e,t,s,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTypeFromTypeUri=t.getIdFromResourceId=t.decomposeResourceId=t.CONNECTION_PREFIX=t.EXTRA_INFO_SEP=void 0,t.EXTRA_INFO_SEP="-",t.CONNECTION_PREFIX="_";const r="/S.";function i(e){const n=e.indexOf(s.ID_SEPARATOR,1);let i=e.indexOf(t.EXTRA_INFO_SEP,n+1);const a=e.indexOf(s.ID_SEPARATOR,n+1);a>n&&i>a&&(i=-1);const c=i>n?i:a,_=e.substr(n+1,t.CONNECTION_PREFIX.length)===t.CONNECTION_PREFIX;let u=e.substring(n+(_?2:1),c>n?c:void 0);const l=e.substring(0,n);let S=i>n?e.substring(i+1,a>n?a:void 0):void 0,p=S;if(S&&S.startsWith("Q-sysmod-")){let e=o.decode(S),t=e.split("branch:");e=t[0]+"branch:"+t[1].split("/")[0],p=o.encode(e);let n=e.indexOf(s.ID_SEPARATOR,1);if(n>0){const t=e.substring(n+1,e.length);n=t.indexOf(s.ID_SEPARATOR,1),u="cid:"+t.substring(n+1,t.length)}}return{envId:l.startsWith(r)?l.substring(r.length):"OnPremise",plmId:u,repositoryId:l,extraInfo:p,subResourcePath:a>n?e.substring(a+1):void 0,isConnection:_}}t.decomposeResourceId=i,t.getIdFromResourceId=function(e){return i(e).plmId},t.getTypeFromTypeUri=function(e){const t=n.getSycTypeFromTypeUri(e);if(t){const e=t.indexOf(s.SYC_TYPE_URI_SEPARATOR);if(e>=0)return t.substr(e+1)}return t}}),define("DS/CATSmmJsApi/JobReport",["require","exports","DS/CATSmmJsApi/Utils"],function(e,t,s){"use strict";class n{constructor(){this.messages=[]}static from(e){return s.fromPrototype(n.prototype,e)}getLastMessageStr(){return this.messages.length>0?this.messages[this.messages.length-1].text:""}getMinLevel(){let e=2;for(const t of this.messages)if(t.level<e&&(e=t.level),0===e)return e;return e}}return n.MessageStatus={Error:0,Warning:1,Info:2},n}),define("DS/CATSmmJsApi/Config",["require","exports","DS/CATSmmJsApi/Constants"],function(e,t,s){"use strict";class n{constructor(e){let t,s,n,o;if("string"==typeof e)s=(n=r(e))+"webapps/",t=n+"syc/";else{if(o=e.base,e.syc?t=r(e.syc):e.context&&(t=(n=r(e.context))+"syc/",s=n+"webapps/"),e.webapps&&(s=r(e.webapps)),!s)throw"Can't compute webapps url";if(!t)throw"Can't compute syc url"}const a=t+"rest/",c=t+"service/";this.context=null!=n?n:i(t),this.base=null!=o?o:i(this.context),this.webapps=s,this.syc=t,this.icons=t+"icon",this.publicApi=t+"api",this.rest=a,this.resource=a+"resource",this.preview=a+"preview",this.preview2=a+"preview2",this.data=a+"data",this.service=c,this.coreService=c+"core",this.interactionService=c+"interaction",this.actionService=c+"action",this.navigationService=c+"navigation",this.globalsettingsService=c+"globalsettings",this.propertiesCategoryConfig=c+"configfile/CATSmmWebPropCategories.json",this.defaultPreferencesService=c+"preference/CATSmmSettingsWebClientDefaults",this.jobService=c+"job",this.auth=t+"auth",this.event="ws"+t.substring(4)+"event",this.proxy="ws"+t.substring(4)+"ws/proxy",this.nls=t+"nls/",this.fullPage=this.webapps+"CATSmmUI/NavigationFullPage.html",this.widget=this.webapps+"CATSmmUI/Navigation.html"}resolveUrl(e){const t=s.SYC_CONTEXT_MACRO+"/webapps";return 0===e.indexOf(t)?this.webapps.substring(0,this.webapps.length-1)+e.substring(t.length):0===e.indexOf(s.SYC_CONTEXT_MACRO)?this.context.substring(0,this.context.length-1)+e.substring(s.SYC_CONTEXT_MACRO.length):e}resolveUrlInHtml(e){const t=s.SYC_CONTEXT_MACRO+"/webapps";let n=o(e,t,this.webapps.substring(0,this.webapps.length-1));return n=o(n,encodeURIComponent(t),encodeURIComponent(this.webapps.substring(0,this.webapps.length-1))),n=o(e,s.SYC_CONTEXT_MACRO,this.context.substring(0,this.context.length-1)),n=o(n,encodeURIComponent(s.SYC_CONTEXT_MACRO),encodeURIComponent(this.context.substring(0,this.context.length-1)))}getDataEntryUrl(e,t){return this.data+e+"?entry="+encodeURIComponent(t)}static fromLocation(e){return new n(n.getContextUrlFromLocation(e))}}function o(e,t,s){return e.replace(new RegExp(function(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}(t),"g"),s)}function r(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}function i(e,t=1){const{url:s,path:n}=function(e){const t=document.createElement("a");t.href=e;const s=t.pathname.split("/").filter(e=>""!==e);return{url:t,path:s}}(e);return r(s.protocol+"//"+s.host+"/"+n.slice(0,-1*t).join("/"))}return function(e){e.getContextUrlFromLocation=function(e){return i(e,3)},e.getWebappsUrlFromLocation=function(e){return i(e,2)}}(n||(n={})),n}),define("DS/CATSmmJsApi/Request",["require","exports","DS/CATSmmJsApi/JobReport","DS/CATSmmJsApi/Constants","DS/CATSmmJsApi/Utils","DS/WAFData/WAFData"],function(e,t,s,n,o,r){"use strict";function i(e){window.hasOwnProperty("widget")&&widget.lang&&(e.headers||(e.headers={}),e.headers["Accept-Language"]=widget.lang)}return class{constructor(e){this.config=e}getGlobalSettings(e,t){const s=this.config.globalsettingsService,n={method:"GET",responseType:"json",onComplete:e,onFailure:t,headers:{Accept:"application/json"},timeout:0};r.authenticatedRequest(s,n)}getPropertiesCategoryConfig(e,t){const s=this.config.propertiesCategoryConfig,n={method:"GET",responseType:"json",onComplete:e,onFailure:t,headers:{Accept:"application/json"},timeout:0};r.authenticatedRequest(s,n)}prepareInteractionRequestWithFiles(e,t,s,r,a,c){const _={};_[n.URI_PARAM_CONTEXT]=s.join(",");const u=this.config.interactionService+o.encodeQuery(_),l=new FormData;l.append("interaction",JSON.stringify(e));for(let e=0;e<t.length;e++)l.append(t[e].name,t[e]);const S={method:"POST",data:l,responseType:"json",onComplete:r,onFailure:a,onUploadProgress:c,headers:{Accept:"application/json"},timeout:0};return i(S),{url:u,options:S}}prepareInteractionRequest2(e,t,s,r,a,c,_){const u={};u[n.URI_PARAM_CONTEXT]=r.join(",");const l=this.config.interactionService+o.encodeQuery(u),S=new FormData;if(e&&S.append("actionCall",JSON.stringify(e)),S.append("interaction",JSON.stringify(t)),s)for(let e=0;e<s.length;e++)S.append(s[e].name,s[e]);const p={method:"POST",data:S,responseType:"json",onComplete:a,onFailure:c,onUploadProgress:_,headers:{Accept:"application/json"},timeout:0};return i(p),{url:l,options:p}}prepareInteractionRequest(e,t,s,r){const a={};a[n.URI_PARAM_CONTEXT]=t.join(",");const c=this.config.interactionService+o.encodeQuery(a),_={method:"POST",data:JSON.stringify(e),responseType:"json",onComplete:s,onFailure:r,headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json"},timeout:0};return i(_),{url:c,options:_}}prepareJobReportRequest(e,t,r,a){const c={};c[n.URI_PARAM_FROM_MESSAGE]=""+t,c.id=e;const _=this.config.jobService+o.encodeQuery(c),u={method:"GET",responseType:"json",onComplete:(e,t)=>r(s.from(e),t),onFailure:a,headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json"},timeout:0};return i(u),{url:_,options:u}}prepareJobReportsRequest(e,t){const s=this.config.jobService,n={method:"GET",responseType:"json",onComplete:e,onFailure:t,headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json"},timeout:0};return i(n),{url:s,options:n}}prepareActionRequest(e,t,s,r){const a={};a[n.URI_PARAM_CONTEXT]=t.join(",");const c=this.config.actionService+o.encodeQuery(a),_={method:"POST",data:JSON.stringify(e),responseType:"json",onComplete:s,onFailure:r,headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json"},timeout:0};return i(_),{url:c,options:_}}prepareGetDataEntries(e,t,s){const n=this.config.data+e,o={method:"GET",responseType:"json",onComplete:t,onFailure:s,headers:{Accept:"application/json"},timeout:0};return i(o),{url:n,options:o}}prepareGetDataRequest(e,t,s,n,o,r){const a=this.config.data+e+"?entry="+t,c={method:"GET",responseType:s,onComplete:n,onFailure:(e,t,s)=>{let n;try{t&&(n=JSON.parse(t))}catch(e){}finally{o&&o(e,n,s)}},onProgress:r,timeout:0};return i(c),{url:a,options:c}}prepareModifyDataRequest(e,t,s,n,o,r){const a=this.config.data+e+"?entry="+t,c={method:"PUT",data:s,onComplete:n,onFailure:o,onUploadProgress:r,timeout:0};return i(c),{url:a,options:c}}uploadFiles(e,t,s,n,o){const a={method:"PUT",data:t[0],type:"json",onComplete:s,onFailure:n,onUploadProgress:o,timeout:0};i(a),r.authenticatedRequest(e,a)}prepareResourceRequest(e,t,s,r,a){const c={};c[n.URI_PARAM_SELECTOR]=t.join(","),c[n.URI_PARAM_CONTEXT]=s.join(",");const _=this.config.resource+e+o.encodeQuery(c),u={method:"GET",responseType:"json",onComplete:(t,s)=>{t.unshift({subjectId:e,predicate:"http://www.3ds.com/vocabularies/syc/sycId",objectValue:e,objectType:n.XSD_string}),r(t,s)},onFailure:a,headers:{Accept:"application/json"},timeout:0};return i(u),{url:_,options:u}}preparePreviewRequest(e,t,s,r,a,c,_,u){const l={};l[n.URI_PARAM_PREVIEW_TYPES]=r.join(","),t&&t.selection&&t.selection.length>0&&(l[n.URI_PARAM_PREVIEW_OPTIONS_SELECTION]=t.selection.join(",")),(s||t)&&(l[n.URI_PARAM_PREVIEW_EXTRA_OPTIONS]=JSON.stringify(Object.assign({},t?t.specific:void 0,s))),a&&(l[n.URI_PARAM_PREVIEW_LAYER_TAG]=a.join(",")),c&&(l[n.URI_PARAM_CONTEXT]=c.join(","));const S=this.config.preview+e+o.encodeQuery(l),p={method:"GET",responseType:"json",onComplete:(t,s)=>{t.id=e,_(t,s)},onFailure:u,headers:{Accept:"application/json"},timeout:0};return i(p),{url:S,options:p}}}}),define("DS/CATSmmJsApi/Client",["require","exports","DS/CATSmmJsApi/Config","DS/CATSmmJsApi/Request","DS/CATSmmJsApi/Rdf","DS/CATSmmJsApi/Constants","DS/CATSmmJsApi/Utils","DS/WAFData/WAFData","DS/CATSystemCommon/Utils"],function(e,t,s,n,o,r,i,a,c){"use strict";const _=[r.PreviewFormat.Html,r.PreviewFormat.HtmlCanvas],u={loaded:0,loading:1};function l(e){window.hasOwnProperty("widget")&&widget.lang&&(e.headers||(e.headers={}),e.headers["Accept-Language"]=widget.lang)}function S(e,t){if(e===t)return!0;if(!e||!t)return!1;for(let s=0;s<t.length;s++)if(-1===e.indexOf(t[s]))return!1;return!0}function p(e){const t=()=>new Promise((t,s)=>{if("string"==typeof e.data)t(JSON.parse(e.data));else if(e.data instanceof Blob){const s=new FileReader;s.onloadend=(()=>{"string"==typeof s.result&&t(JSON.parse(s.result))}),s.readAsText(e.data)}else if(e.data instanceof ArrayBuffer){const s=new Blob([e.data]),n=new FileReader;n.onloadend=(()=>{"string"==typeof n.result&&t(JSON.parse(n.result))}),n.readAsText(s)}else t(e.data)}),s=e;return s.json=t,s.errorMessage=(()=>{const e=s.error;return e?t().then(e=>{if(e.detailedMessage)return e.detailedMessage;if(e.message)return e.message;throw new Error}).catch(()=>e.toString()):Promise.reject("No error")}),s}return class{constructor(e){this.display=!0,this.shortValidityPeriod=3e3,this.validityPeriod=36e5,this._models={},this._eventTarget=document.createDocumentFragment(),this.config=e||s.fromLocation(location.href),this._request=new n(this.config),this._context=[],this._optionsCache={}}getPreviewOptions(e){return this._optionsCache[e]}setPreviewOptions(e,t){this._optionsCache[e]=t}wrapRequest(e,t){}getContext(){return this._context.slice()}setContext(e){e||(e=[]),function(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.length===t.length){for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}return!1}(this._context,e)||(this._context=e.slice(),this.clearCache())}clearCache(){this._models={}}invalidateCache(e,t){const s=(new Date).getTime();e.forEach(e=>{const n=this._models[e];n&&s-n.timestamp>=t&&delete this._models[e]})}isTimeoutError(e,t){return t&&t.status?504===t.status:!(e.indexOf("ResponseCode with value ")<0)&&504===parseInt(e.split("ResponseCode with value ")[1].substr(1,3))}displayMode(e){if(this.display){const t=e.slice();return t.push(r.Selectors.display),t}return e}request(e,t){return new Promise((s,n)=>{const o={...t};void 0===o.timeout&&(o.timeout=0),o.onComplete=((n,o)=>{try{t&&t.onComplete&&t.onComplete(n,o)}finally{s(p({url:e,ok:!0,headers:o,data:n}))}}),o.onFailure=((n,o,r)=>{try{t&&t.onFailure&&t.onFailure(n,o,r)}finally{s(p({url:e,ok:!1,headers:r,error:n,data:o}))}}),l(o);const r={url:e,options:o};this.wrapRequest(r,this.config),a.authenticatedRequest(r.url,o)})}requestData(e,t){return this.request(e,t).then(e=>{if(e.ok)return e.data;throw e.data?e.data:e.error?e.error:e.errorMessage})}sendJson(e,t,s){const n={method:"POST",type:"json",data:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"},...s};return s&&(n.headers={...n.headers,...s.headers}),this.requestData(e,n)}_getJson(e,t,s){return new Promise((n,o)=>{const r={method:"GET",responseType:"json",onComplete:(s,o)=>{t&&t(s,o),n(p({url:e,ok:!0,headers:o,data:s}))},onFailure:(t,o,r)=>{s&&s(t,o,r),n(p({url:e,ok:!1,headers:r,error:t,data:o}))},headers:{Accept:"application/json"},timeout:0};l(r);const i={url:e,options:r};this.wrapRequest(i,this.config),a.authenticatedRequest(i.url,r)})}getGlobalSettings(e,t){return this._getJson(this.config.globalsettingsService,e,t)}getPropertiesCategoryConfig(e,t){return this._getJson(this.config.propertiesCategoryConfig,e,t)}getDefaultPreferences(e,t){return this._getJson(this.config.defaultPreferencesService,e,t)}hasLicense(e){return this.sendJson(this.config.service+"hasLicense",e)}getRepositoriesWithAddress(e){return this.requestPublicApiRes({method:"GET",query:e,resource:"",serviceName:"repositories",version:1,headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>{if(e.ok)return e.json();throw e.error?e.error:new Error("Error accessing requestPublicApiRes")})}getPreviewIds(e,t,s){this.getResource(e,[r.Selectors.previews],(s,n)=>{const o=[];for(const t of s.bySubject(e))t.predicate===r.P_SYC_HAS_PREVIEW&&t.objectId&&o.push(t.objectId);const a=o.map(e=>i.getResourceInfo(e,s.bySubject(e),this.config));t(a,n)},s)}getPreviewData(e){const t={};e.preferredFormats&&(t[r.URI_PARAM_PREVIEW_TYPES]=e.preferredFormats.join(",")),e.options&&e.options.selection&&e.options.selection.length>0&&(t[r.URI_PARAM_PREVIEW_OPTIONS_SELECTION]=e.options.selection.join(",")),(e.extraOptions||e.options)&&(t[r.URI_PARAM_PREVIEW_EXTRA_OPTIONS]=JSON.stringify(Object.assign({},e.options?e.options.specific:void 0,e.extraOptions))),e.tags&&(t[r.URI_PARAM_PREVIEW_LAYER_TAG]=e.tags.join(",")),this._context&&(t[r.URI_PARAM_CONTEXT]=this._context.join(","));const s=this.config.preview+e.previewId+i.encodeQuery(t);return new Promise((t,n)=>{const o={method:"GET",responseType:"text",onComplete:(e,n)=>{t(p({url:s,ok:!0,headers:n,data:e}))},onFailure:(e,n,o)=>{t(p({url:s,ok:!1,headers:o,error:e,data:n}))},headers:e.headers,timeout:0};l(o),a.authenticatedRequest(s,o)})}getPreviewWithOptions(e,t,s,n,o,r,i){if(this.overridePreviewOptions){s=s||{};for(const e in this.overridePreviewOptions)this.overridePreviewOptions.hasOwnProperty(e)&&(s[e]=this.overridePreviewOptions[e])}const c=this._request.preparePreviewRequest(e,t,s,n,o,this.getContext(),r,i);this.wrapRequest(c,this.config),a.authenticatedRequest(c.url,c.options)}getPreview(e,t,s,n,o){this.getPreviewWithOptions(e,this.getPreviewOptions(e),s,_,null,(e,s)=>{e.resourceId=t,n(e,s)},o)}requestPreview(e){const t=this.config.preview2;return this.sendJson(t,e).then(t=>(t.id=e.preview.id,t))}callCoreService(e,t,s){const n={};n[r.URI_PARAM_CONTEXT]=this.getContext().join(",");const o=this.config.coreService+i.encodeQuery(n),a={method:"POST",type:"json",data:JSON.stringify(e),onComplete:t,onFailure:s,headers:{"Content-Type":"application/json; charset=UTF-8"}};return this.request(o,a)}callInteractionService(e,t,s){return new Promise((n,o)=>{let r,i;r=t?(e,s)=>{try{t(e,s)}finally{n(e)}}:n,i=s?(e,t,n)=>{try{s(e,t,n)}finally{o(t||e)}}:(e,t)=>o(t||e);const c=this._request.prepareInteractionRequest(e,this.getContext(),r,i);this.wrapRequest(c,this.config),a.authenticatedRequest(c.url,c.options)})}callInteractionServiceWithFiles(e,t,s,n,o){return new Promise((r,i)=>{let c,_;c=s?(e,t)=>{try{s(e,t)}finally{r(e)}}:r,_=n?(e,t,s)=>{try{n(e,t,s)}finally{i(t||e)}}:(e,t)=>i(t||e);const u=this._request.prepareInteractionRequestWithFiles(e,t,this._context,c,_,o);this.wrapRequest(u,this.config),a.authenticatedRequest(u.url,u.options)})}callInteractionService2(e,t,s,n,o,r){return new Promise((i,c)=>{let _,u;_=n?(e,t)=>{try{n(e,t)}finally{i(e)}}:i,u=o?(e,t,s)=>{try{o(e,t,s)}finally{c(t||e)}}:(e,t)=>c(t||e);const l=this._request.prepareInteractionRequest2(e,t,s,this._context,_,u,r);this.wrapRequest(l,this.config),a.authenticatedRequest(l.url,l.options)})}callActionService(e,t,s){const n=this._request.prepareActionRequest(e,this._context,t,s);this.wrapRequest(n,this.config),a.authenticatedRequest(n.url,n.options)}callNavigationService(e,t){const s={};s[r.URI_PARAM_CONTEXT]=this.getContext().join(",");const n=this.config.navigationService+i.encodeQuery(s);return this.sendJson(n,e,t)}requestPublicApiRes(e){const t=this.config.publicApi+"/"+e.serviceName+"/v"+e.version+"/res"+e.resource+i.encodeQuery(e.query||{});return new Promise((s,n)=>{const o={method:e.method,responseType:e.responseType,data:e.data,onComplete:(e,n)=>{s(p({url:t,ok:!0,headers:n,data:e}))},onFailure:(e,n,o)=>{s(p({url:t,ok:!1,headers:o,error:e,data:n}))},headers:e.headers,timeout:0};l(o),a.authenticatedRequest(t,o)})}getJobReport(e,t,s,n){const o=this._request.prepareJobReportRequest(e,t,s,n);this.wrapRequest(o,this.config),a.authenticatedRequest(o.url,o.options)}getJobReports(e,t){const s=this._request.prepareJobReportsRequest(e,t);this.wrapRequest(s,this.config),a.authenticatedRequest(s.url,s.options)}getData(e,t,s,n,o,r){const i=this._request.prepareGetDataRequest(e,t,s,n,o,r);this.wrapRequest(i,this.config),a.authenticatedRequest(i.url,i.options)}getDataEntries(e,t,s){const n=this._request.prepareGetDataEntries(e,t,s);this.wrapRequest(n,this.config),a.authenticatedRequest(n.url,n.options)}modifyData(e,t,s,n,o,r){const i=this._request.prepareModifyDataRequest(e,t,s,n,o,r);this.wrapRequest(i,this.config),a.authenticatedRequest(i.url,i.options)}addEventListener(e,t,s){this._eventTarget.addEventListener(e,t,s)}removeEventListener(e,t,s){this._eventTarget.removeEventListener(e,t,s)}_dispatchResourceChanged(e,t){c.dispatchCustomEvent(this._eventTarget,"syc-resource-changed",{resource:t.statements.getResource(e),selectors:t.selectors})}getResource(e,t,s,n){if(null==e){const e="Resource is null or undefined";return n&&n(new Error(e),void 0,{}),Promise.reject(e)}const i=(new Date).getTime();let c=this._models[e];return c&&c.state===u.loading&&S(c.selectors,t)?(s&&c.pendingsComplete.push(s),n&&c.pendingsFailure.push(n),c.promise):c&&c.state===u.loaded&&i-c.timestamp<=this.validityPeriod&&S(c.selectors,t)?(s&&setTimeout(()=>s(c.statements,{}),0),c.promise):((c={timestamp:i,statements:new o.Model,state:u.loading,selectors:t,pendingsComplete:[],pendingsFailure:[],promise:new Promise(e=>{})}).promise=new Promise((o,i)=>{s&&c.pendingsComplete.push(s),n&&c.pendingsFailure.push(n),1===t.length&&t[0]===r.Selectors.path||(this._models[e]=c);let _=0;const l=this._request.prepareResourceRequest(e,this.displayMode(t),this._context,(t,s)=>{c.timestamp=(new Date).getTime(),c.statements.pushAll(t),c.state=u.loaded;for(const e of c.pendingsComplete)try{e(c.statements,s)}catch(e){console.error(e)}c.pendingsComplete=[],o(p({url:l.url,ok:!0,headers:s,data:c.statements})),this._dispatchResourceChanged(e,c)},(t,s,n)=>{if(this.isTimeoutError(t.message,s)&&_<6)a.authenticatedRequest(l.url,l.options),_++;else{_=0,delete this._models[e];for(const e of c.pendingsFailure)try{e(t,s,null!=n?n:{})}catch(e){console.error(e)}o(p({url:l.url,ok:!1,headers:null!=n?n:{},error:t,data:s}))}});this.wrapRequest(l,this.config),a.authenticatedRequest(l.url,l.options)}),c.promise)}}});