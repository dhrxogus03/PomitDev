define("DS/MPFTCContractModel/SoftwareAgreementModel",["UWA/Core","UWA/Promise","DS/MPFModel/MPFModel"],function(t,e,r){"use strict";const n=Object.freeze({ID:"id",URL:"url",CODE:"code",MESSAGE:"message"}),o=r.extend({defaults:function(){const t={};return t[n.ID]=null,t[n.URL]=null,t},setup:function(t,e){this._parent(t,e),this._type="SoftwareAgreementModel"},getID:function(){return this.get(n.ID)},getUrl:function(){return this.get(n.URL)},getCode:function(){return this.get(n.CODE)},getMessage:function(){return this.get(n.MESSAGE)}});return o.Fields=n,o}),define("DS/MPFTCContractModel/TCDocumentDataProxy",["UWA/Core","DS/MPFDataProxy/DataProxy"],function(t,e){"use strict";return e.extend({init:function(t,e){switch(e){case"documents":this._parent(t,"/mdcontract/contract-documents/{0}");break;case"general":this._parent(t,"/mdcontract/general-tcdocuments");break;case"general-public":this._parent(t,"/mdcontract/public/general-tcdocuments");break;case"ds-sellers":this._parent(t,"/mdcontract/dssellers-tcdocuments/3dprint");break;case"ds-buyers":this._parent(t,"/mdcontract/dsbuyers-tcdocuments/3dprint");break;case"seller-buyer":this._parent(t,"/mdcontract/sellerbuyer-tcdocuments/shop-services/{0}");break;case"new-NDA":this._parent(t,"/mdcontract/contract-documents?document-type=MP_NDADocument");break;case"new-CustomTCSellers":this._parent(t,"/mdcontract/contract-documents?document-type=MP3DP_CustomTCSellersDocument");break;case"privacy-policy":this._parent(t,"/mdcontract/dataprivacy-tcdocuments");break;default:this._parent(t,"/mdcontract/contract-documents/{0}")}},url:function(e){var r;return r=e.get("shopServicesID")?t.String.format(this.resourcePath,e.get("shopServicesID")):t.String.format(this.resourcePath,e.id),this.connector.url(r)}})}),define("DS/MPFTCContractModel/SoftwareAgreementDataProxy",["UWA/Core","DS/MPFDataProxy/DataProxy","DS/MPFUrl/UrlUtils"],function(t,e,r){"use strict";return e.extend({init:function(t){this._parent(t,"/software-agreement/v1")},urlGet:function(t,e){var n;return e||(e={}),n=this._parent(t,e),e.token&&(n=new r(n).addParameter("token",e.token).getUrl()),e.cartId&&(n=new r(n).addParameter("cart-id",e.cartId).getUrl()),n},_computeDefaultUrl:function(t){return this.connector.url(this.resourcePath)}})}),define("DS/MPFTCContractModel/TCDocumentModel",["DS/MPFTcDocumentModel/TcDocumentModel"],function(t){"use strict";return t}),define("DS/MPFTCContractModel/TCContractModel",["UWA/Promise","DS/MPFModel/MPFModel"],function(t,e){"use strict";var r,n,o={},a={},c={},i={};return o.DOCUMENT_TYPE="documentType",o.DOCUMENT_ID="documentID",o.SUPPLIER_ID="supplierID",o.CONSUMER_ID="consumerID",o.ID="id",o.SIGNING_REVISION="signingRevision",o.ACTIVE_REVISION="activeRevision",o.CART_ITEM_ID="cartItemID",o.CURRENT_STATE="currentState",o.TYPE="type",o.NAME="name",o.ORGANIZATION="organization",o.SIGNING_DATE="signingDate",n={draft:"DRAFT",inEffect:"IN_EFFECT",archived:"ARCHIVED"},a.NDA="MP_NDADocument",a.DEFAULT_SALES_CONDITIONS="MP3DP_DefaultTCSellersDocument",a.SPECIFIC_SALES_CONDITIONS="MP3DP_CustomTCSellersDocument",a.DATA_PRIVACY="MP_DataPrivacyTCDocument",a.DS_SELLERS="MP3DP_DSSellersTCDocument",a.DS_BUYERS="MP3DP_DSBuyersTCDocument",a.CLICKNBUY_TC="MP_ClickNBuyTCDocument",c.MP_CONTRACT="MP_Contract",i.COMMON="common",i.DATA_PRIVACY="data-privacy",i.DS_SELLER="ds-seller",i.DS_BUYER="ds-buyer",i.CLICKNBUY_TC="clicknbuy-tc",(r=e.extend({defaults:function(){var t={};return t[o.DOCUMENT_TYPE]=null,t[o.DOCUMENT_ID]=null,t[o.SUPPLIER_ID]=null,t[o.CONSUMER_ID]=null,t},setup:function(t,e){this._parent(t,e),this._type="TCContractModel"},saveSpecificSalesConditions:function(e,r){var n,o=t.deferred();return n=new FormData,e.file&&n.append("documentFile",e.file),e.documentID&&n.append("documentID",e.documentID),n.append("consumerID",e.consumerID),n.append("supplierID",e.supplierID),n.append("documentType",a.SPECIFIC_SALES_CONDITIONS),n.append("cartItemID",e.cartItemID),r||(r={}),r.method="POST",r.data=n,r.onComplete=o.resolve,r.onFailure=o.reject,this.save(null,r),o.promise},saveNDAConditions:function(e,r){var n=t.deferred(),o=new FormData;return e.supplierID&&o.append("supplierID",e.supplierID),e.consumerID&&o.append("consumerID",e.consumerID),e.cartItemID&&o.append("cartItemID",e.cartItemID),e.file&&o.append("documentFile",e.file),e.documentID&&o.append("documentID",e.documentID),o.append("documentType",a.NDA),r||(r={}),r.method="POST",r.data=o,r.onComplete=n.resolve,r.onFailure=n.reject,this.save(null,r),n.promise},getID:function(){return this.get(o.ID)},setID:function(t){this.set(o.ID,t)},getDocumentType:function(){return this.get(o.DOCUMENT_TYPE)},setDocumentType:function(t){this.set(o.DOCUMENT_TYPE,t)},getDocumentID:function(){return this.get(o.DOCUMENT_ID)},setDocumentID:function(t){this.set(o.DOCUMENT_ID,t)},getSupplierID:function(){return this.get(o.SUPPLIER_ID)},setSupplierID:function(t){this.set(o.SUPPLIER_ID,t)},getConsumerID:function(){return this.get(o.CONSUMER_ID)},setConsumerID:function(t){this.set(o.CONSUMER_ID,t)},getActiveRevision:function(){return this.get(o.ACTIVE_REVISION)},setActiveRevision:function(t){this.set(o.ACTIVE_REVISION,t)},getSigningRevision:function(){return this.get(o.SIGNING_REVISION)},setSigningRevision:function(t){this.set(o.SIGNING_REVISION,t)},getCartItemID:function(){return this.get(o.CART_ITEM_ID)},setCartItemID:function(t){this.set(o.CART_ITEM_ID,t)},getCurrentState:function(){return this.get(o.CURRENT_STATE)},setCurrentState:function(t){this.set(o.CURRENT_STATE,t)},getType:function(){return this.get(o.TYPE)},setType:function(t){this.set(o.TYPE,t)},getName:function(){return this.get(o.NAME)},setName:function(t){this.set(o.NAME,t)},getOrganization:function(){return this.get(o.ORGANIZATION)},setOrganization:function(t){this.set(o.ORGANIZATION,t)},getSigningDate:function(){return this.get(o.SIGNING_DATE)},setSigningDate:function(t){this.set(o.SIGNING_DATE,t)}})).STATUS=Object.freeze(n),r.FIELDS=Object.freeze(o),r.Fields=Object.freeze(o),r.DOCUMENT_TYPES=Object.freeze(a),r.TYPES=Object.freeze(c),r.TcTypes=Object.freeze(i),r}),define("DS/MPFTCContractModel/ContractDataProxy",["DS/MPFDataProxy/DataProxy","DS/MPFError/NotImplementedError"],function(t,e){"use strict";return t.extend({init:function(t){this._parent(t,"/mdcontract/contracts")},urlPost:e.emit,urlPut:e.emit,urlDelete:e.emit})}),define("DS/MPFTCContractModel/TCContractDataProxy",["UWA/Core","DS/MPFDataProxy/DataProxy"],function(t,e){"use strict";return e.extend({init:function(t,e){switch(e){case"existing-document":this._parent(t,"/mdcontract/contracts/existing-document");break;case"new-document":this._parent(t,"/mdcontract/contracts/new-document");break;case"consumed-contracts":this._parent(t,"/mdcontract/consumed-contracts");break;case"supplied-contracts":this._parent(t,"/mdcontract/supplied-contracts");break;case"contracts":this._parent(t,"/mdcontract/contracts/{0}");break;case"contract-document":this._parent(t,"/mdcontract/contracts/{0}/contract-document");break;case"cartItem-contracts":this._parent(t,"/mdcontract/cart-items/{0}/contracts");break;default:this._parent(t,"/mdcontract/contracts/{0}")}},url:function(e){var r;return r=e.parentResourceId?t.String.format(this.resourcePath,e.parentResourceId):t.String.format(this.resourcePath,e.id),this.connector.url(r)}})}),define("DS/MPFTCContractModel/CartBiddingDocumentDataProxy",["DS/MPFTcDocumentModel/BiddingDocumentDataProxy"],function(t){"use strict";return t}),define("DS/MPFTCContractModel/SoftwareAgreementByLanguageDataProxy",["UWA/Core","UWA/String","DS/MPFDataProxy/DataProxy","DS/MPFUrl/UrlUtils"],function(t,e,r,n){"use strict";return r.extend({init:function(t){this._parent(t,"/software-agreement/by-language/v1/{0}")},_computeDefaultUrl:function(t){var r=e.format(this.resourcePath,t.get("language"));return this.connector.url(r)}})}),define("DS/MPFTCContractModel/SoftwareAgreementFactory",["DS/MPFModelFactory/Factory","DS/MPFTCContractModel/SoftwareAgreementModel","DS/MPFTCContractModel/SoftwareAgreementDataProxy","DS/MPFTCContractModel/SoftwareAgreementByLanguageDataProxy"],function(t,e,r,n){"use strict";var o={BY_LANGUAGE:"byLanguage",AGREEMENTS:"agreements"},a=t.extend({createModel:function(t,r,n){return n||(n={}),r||(r={}),n.dataProxy=this._getDataProxy(t),new e(r,n)},_getDataProxy:function(t){var e=null;switch(t){case o.AGREEMENTS:this.dataProxies.softwareAgreement||(this.dataProxies.softwareAgreement=new r(this.connector)),e=this.dataProxies.softwareAgreement;break;case o.BY_LANGUAGE:this.dataProxies.byLanguage||(this.dataProxies.byLanguage=new n(this.connector)),e=this.dataProxies.byLanguage;break;default:this.dataProxies.softwareAgreement||(this.dataProxies.softwareAgreement=new r(this.connector)),e=this.dataProxies.softwareAgreement}return e}});return a.Types=Object.freeze(o),a}),define("DS/MPFTCContractModel/SuppliedContractsDataProxy",["DS/MPFDataProxy/DataProxy","DS/MPFTCContractModel/ContractDataProxy","DS/MPFError/NotImplementedError"],function(t,e,r){"use strict";return t.extend({init:function(t){this._parent(t,"/mdcontract/supplied-contracts",new e(t))},buildPath:function(t){return this.resourcePath},urlPatch:function(t,e){return this.delegate.urlPatch(t,e)},urlPost:r.emit,urlPut:r.emit,urlDelete:r.emit})}),define("DS/MPFTCContractModel/TermsAndConditionsDataProxy",["DS/MPFDataProxy/DataProxy","DS/MPFTCContractModel/ContractDataProxy","DS/MPFUrl/UrlUtils","DS/MPFError/NotImplementedError"],function(t,e,r,n){"use strict";return t.extend({init:function(t){this._parent(t,"/mdcontract/contracts/tnc",new e(t))},buildPath:function(){return this.resourcePath},urlGet:function(t,e){var n;return e||(e={}),n=this._parent(t,e),e.type&&e.type.length&&e.type.length>0&&(n=new r(n).addParameter("type",e.type.join(",")).getUrl()),n},urlPatch:function(t,e){return this.delegate.urlPatch(t,e)},urlPost:n.emit,urlPut:n.emit,urlDelete:n.emit})}),define("DS/MPFTCContractModel/TCContractCollection",["DS/MPFModel/MPFCollection","DS/MPFTCContractModel/TCContractModel"],function(t,e){"use strict";return t.extend({model:e,findCurrentContractOfType(t,r){return this.find(n=>n.getConsumerID()===r&&n.getDocumentType()===t&&n.getCurrentState()!==e.STATUS.archived&&n.getSigningRevision()===n.getActiveRevision())},hasSignedContractOfType(t){return!!this.find(r=>r.getDocumentType()===t&&r.getCurrentState()===e.STATUS.inEffect)}})}),define("DS/MPFTCContractModel/ExistingDocumentDataProxy",["DS/MPFDataProxy/DataProxy","DS/MPFTCContractModel/ContractDataProxy","DS/MPFError/NotImplementedError"],function(t,e,r){"use strict";return t.extend({init:function(t){this._parent(t,"/mdcontract/contracts/existing-document",new e(t))},buildPath:function(t){return this.resourcePath},urlPatch:function(t,e){return this.delegate.urlPatch(t,e)},urlGet:r.emit,urlPut:r.emit,urlDelete:r.emit})}),define("DS/MPFTCContractModel/CustomTcSellerDataProxy",["UWA/String","DS/MPFDataProxy/DataProxy","DS/MPFTCContractModel/ContractDataProxy","DS/MPFError/NotImplementedError"],function(t,e,r,n){"use strict";return e.extend({init:function(t){this._parent(t,"/mdcart/carts/{0}/custom-tc-seller",new r(t))},buildPath:function(e){return t.format(this.resourcePath,e.parentResourceId)},urlPatch:function(t,e){return this.delegate.urlPatch(t,e)},urlPost:n.emit,urlPut:n.emit,urlDelete:n.emit})}),define("DS/MPFTCContractModel/ConsumedContractsDataProxy",["DS/MPFDataProxy/DataProxy","DS/MPFTCContractModel/ContractDataProxy","DS/MPFError/NotImplementedError"],function(t,e,r){"use strict";return t.extend({init:function(t){this._parent(t,"/mdcontract/consumed-contracts",new e(t))},buildPath:function(t){return this.resourcePath},urlPatch:function(t,e){return this.delegate.urlPatch(t,e)},urlPost:r.emit,urlPut:r.emit,urlDelete:r.emit})}),define("DS/MPFTCContractModel/NdaDataProxy",["UWA/String","DS/MPFDataProxy/DataProxy","DS/MPFTCContractModel/ContractDataProxy","DS/MPFError/NotImplementedError"],function(t,e,r,n){"use strict";return e.extend({init:function(t){this._parent(t,"/mdcart/carts/{0}/nda",new r(t))},buildPath:function(e){return t.format(this.resourcePath,e.parentResourceId)},urlPatch:function(t,e){return this.delegate.urlPatch(t,e)},urlPost:n.emit,urlPut:n.emit,urlDelete:n.emit})}),define("DS/MPFTCContractModel/TCContractFactory",["DS/MPFModelFactory/Factory","DS/MPFTCContractModel/TCContractModel","DS/MPFTCContractModel/TCContractCollection","DS/MPFTCContractModel/TCContractDataProxy","DS/MPFTCContractModel/TermsAndConditionsDataProxy","DS/MPFTCContractModel/ContractDataProxy","DS/MPFTCContractModel/NdaDataProxy","DS/MPFTCContractModel/ExistingDocumentDataProxy","DS/MPFTCContractModel/CustomTcSellerDataProxy","DS/MPFTCContractModel/SuppliedContractsDataProxy","DS/MPFTCContractModel/ConsumedContractsDataProxy"],function(t,e,r,n,o,a,c,i,s,u,d){"use strict";var D,l={CONTRACT_DOCUMENT:"contract-document",EXISTING_DOCUMENT:"existing-document",NEW_DOCUMENT:"new-document",CONSUMED_CONTRACTS:"consumed-contracts",SUPPLIED_CONTRACTS:"supplied-contracts",CONTRACTS:"contracts",CART_ITEM_CONTRACTS:"cartItem-contracts",TERMS_AND_CONDITIONS:"termsAndConditions",NDA:"nda",CUSTOM_TC_SELLER:"customTcSeller"};return(D=t.extend({createModel:function(t,r,n){return this._parent(e,t,r,n)},createCollection:function(t,e,n){return this._parent(r,t,e,n)},getDataProxy:function(t){var e=null;switch(t){case l.CONTRACT_DOCUMENT:this.dataProxies.contractDocument||(this.dataProxies.contractDocument=new n(this.connector,t)),e=this.dataProxies.contractDocument;break;case l.EXISTING_DOCUMENT:this.dataProxies.existingDocument||(this.dataProxies.existingDocument=new i(this.connector)),e=this.dataProxies.existingDocument;break;case l.NEW_DOCUMENT:this.dataProxies.newDocument||(this.dataProxies.newDocument=new n(this.connector,t)),e=this.dataProxies.newDocument;break;case l.CONSUMED_CONTRACTS:this.dataProxies.consumedContracts||(this.dataProxies.consumedContracts=new d(this.connector)),e=this.dataProxies.consumedContracts;break;case l.SUPPLIED_CONTRACTS:this.dataProxies.suppliedContracts||(this.dataProxies.suppliedContracts=new u(this.connector)),e=this.dataProxies.suppliedContracts;break;case l.CONTRACTS:this.dataProxies.contracts||(this.dataProxies.contracts=new a(this.connector)),e=this.dataProxies.contracts;break;case l.CART_ITEM_CONTRACTS:this.dataProxies.cartItemContracts||(this.dataProxies.cartItemContracts=new n(this.connector,t)),e=this.dataProxies.cartItemContracts;break;case l.TERMS_AND_CONDITIONS:this.dataProxies.termsAndConditions||(this.dataProxies.termsAndConditions=new o(this.connector)),e=this.dataProxies.termsAndConditions;break;case l.NDA:this.dataProxies.nda||(this.dataProxies.nda=new c(this.connector)),e=this.dataProxies.nda;break;case l.CUSTOM_TC_SELLER:this.dataProxies.customTcSeller||(this.dataProxies.customTcSeller=new s(this.connector)),e=this.dataProxies.customTcSeller;break;default:this.dataProxies.contracts||(this.dataProxies.contracts=new a(this.connector)),e=this.dataProxies.contracts}return e}})).Types=Object.freeze(l),D});