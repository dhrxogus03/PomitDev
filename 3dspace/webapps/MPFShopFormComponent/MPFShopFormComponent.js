define("DS/MPFShopFormComponent/SectionFactory",[],function(){"use strict";return class{static create({title:e,form:t,infos:o}){return[{tag:"div",class:"mpf-section-title",text:e},{tag:"div",class:"mpf-section-content",html:[{tag:"div",class:"mpf-section-form",html:t},this._renderGuidanceContainer(o)]}]}static _renderGuidanceContainer(e){const t=[{tag:"p",html:[{tag:"span",class:"fonticon fonticon-info"},{tag:"span",text:e[0]}]}];for(let o=1;o<e.length;o++)t.push({tag:"p",text:e[o]});return{tag:"div",class:"mpf-section-guidance",html:t}}}}),define("DS/MPFShopFormComponent/CurrencySection",["UWA/Class/View","UWA/Core","DS/MPFServices/MarketplaceServices","DS/MPFServices/ObjectService","DS/MPFShopModel/ShopModel","DS/MPFShopModel/ShopServiceModel","DS/MPFCurrencySelectComponent/CurrencySelectComponent","i18n!DS/MPFShopFormComponent/assets/nls/ShopFormComponent","css!DS/MPFShopFormComponent/MPFShopFormComponent"],function(e,t,o,s,n,r,i,a){"use strict";return e.extend({className:"mpf-shop-form-v2-section mpf-currency-section mpf-form",setup:function(e){e||(e={}),this._checkPrototypes(e),this._parent(e),this.service=e.service||o.ENGINEERING,this.shop=e.shop,this.shopService=e.shopService,this.title=this._createTitleContainer(),this.guidance=this._createGuidanceContainer(),this.currencySelect=this._createCurrencySelect()},render:function(){var e,o;return e=t.createElement("div",{class:"mpf-section-form",html:this.currencySelect.render()}),o=t.createElement("div",{class:"mpf-section-content",html:[e,this.guidance]}),this.container.setContent([this.title,o]),this},validate:function(){return this.currencySelect.validate().isValid},_createGuidanceContainer:function(){var e,o;return e=t.createElement("span",{class:"fonticon fonticon-info"}),o=t.createElement("p",{html:[e,t.createElement("span",{text:a.get("currencyGuidanceText")})]}),t.createElement("div",{class:"mpf-section-guidance",html:o})},_createTitleContainer:function(){return t.createElement("div",{class:"mpf-section-title",text:a.get("currency")})},_areFieldsReadOnly:function(){return this.readOnly||this.shop.getState()===n.States.SUBMITTED||this.shop.getState()===n.States.ACTIVE&&this.shopService&&this.shopService.getState()===r.States.SUBMITTED},_createCurrencySelect:function(){return new i({model:this.shop,readOnly:this._areFieldsReadOnly()})},_checkPrototypes:function(e){s.requiredOfPrototype(e.shop,n,"options.shop must be a ShopModel"),t.is(e.shopService)&&s.requiredOfPrototype(e.shopService,r,"options.shopService must be a ShopServiceModel")},destroy:function(){this.shop=null,this.shopService=null,this._parent(),this.container=null}})}),define("DS/MPFShopFormComponent/LegalEntityTypeSelector",["UWA/Core","UWA/Class/View","DS/UIKIT/Input/Toggle","i18n!DS/MPFShopFormComponent/assets/nls/ShopFormComponent","css!DS/MPFShopFormComponent/MPFShopFormComponent"],function(e,t,o,s){"use strict";return t.extend({className:"mpf-legal-entity-type",setup:function(e){e||(e={}),this.individualToggle=this._createIndividualToggle(),this.companyToggle=this._createCompanyToggle()},render:function(){return this.container.setContent([this.individualToggle,this.companyToggle]),this},_createIndividualToggle:function(){var e=this;return new o({className:"primary",name:"individualToggle",value:"individual",label:s.get("individual"),checked:!0,events:{onChange:function(){this.isChecked()&&(e.companyToggle.setCheck(!1),e.dispatchEvent("legalEntityTypeChanged","individual"))}}})},_createCompanyToggle:function(){var e=this;return new o({className:"primary",name:"companyToggle",value:"company",label:s.get("company"),checked:!1,events:{onChange:function(){this.isChecked()&&(e.individualToggle.setCheck(!1),e.dispatchEvent("legalEntityTypeChanged","company"))}}})}})}),define("DS/MPFShopFormComponent/CompanyInformationSection",["UWA/Class/View","UWA/Core","DS/MPFServices/MarketplaceServices","DS/MPFServices/ObjectService","DS/MPFCountryModel/CountryCollection","DS/MPFCompanyModel/CompanyModel","DS/MPFShopModel/ShopModel","DS/MPFShopModel/ShopServiceModel","DS/MPFAddressModel/AddressModel","DS/MPFAddressModel/AddressFactory","DS/MPFCompanyComponent/CompanyNameInput","DS/MPFAddressFormComponent/AddressFormComponentV2","DS/MPFCurrencySelectComponent/CurrencySelectComponent","DS/MPFShopFormComponent/SectionFactory","i18n!DS/MPFShopFormComponent/assets/nls/ShopFormComponent","css!DS/MPFShopFormComponent/MPFShopFormComponent"],function(e,t,o,s,n,r,i,a,c,h,d,p,l,m,y){"use strict";return e.extend({className:"mpf-shop-form-v2-section mpf-company-section mpf-form",setup:function(e={}){s.requiredOfPrototype(e.countries,n,"options.countries must be a CountryCollection"),s.requiredOfPrototype(e.address,c,"options.addressModel must be an AddressModel"),s.requiredOfPrototype(e.company,r,"options.companyModel must be a CompanyModel"),s.requiredOfPrototype(e.addressFactory,h,"options.addressFactory must be an AddressFactory"),s.requiredOfPrototype(e.shop,i,"options.shop must be a ShopModel"),t.is(e.shopService)&&s.requiredOfPrototype(e.shopService,a,"options.shopService must be a ShopServiceModel"),this._parent(e),this.service=e.service||o.ENGINEERING,this.addressFactory=e.addressFactory,this.address=e.address,this.company=e.company,this.shop=e.shop,this.shopService=e.shopService,this.countries=e.countries,this.readOnly=e.readOnly,this.isCompanyReadOnly=e.isCompanyReadOnly,this.isCountryReadOnly=e.isCountryReadOnly,this.companyNameInput=this._createCompanyNameInput(),this.addressForm=this._createAddresFormComponent(),this.currencySelect=this._createCurrencySelect(),this.isCountryReadOnly||this.isCompanyReadOnly||this.listenTo(this.address,"onChange:"+c.Fields.COUNTRY,this._onCountryChange.bind(this))},render:function(){return this.container.setContent(m.create({title:y.get("companyInformation"),form:[this.companyNameInput.render(),this.addressForm.render(),this.currencySelect.render()],infos:[y.get("companyGuidanceText1"),y.get("companyGuidanceText2")]})),this},validate:function(){var e=this.companyNameInput.validate().isValid,t=this.addressForm.validate(),o=this.currencySelect.validate().isValid;return e&&t&&o},saveAdress:function(e){return this.addressForm.savePromise(e)},_renderGuidanceContainer:function(){return t.createElement("div",{class:"mpf-section-guidance",html:[{tag:"p",html:[{tag:"span",class:"fonticon fonticon-info"},{tag:"span",text:y.get("companyGuidanceText1")}]},{tag:"p",text:y.get("companyGuidanceText2")}]})},_checkCurrencyLock:function(){t.is(this.shop.getServices())&&t.is(this.shop.getServices().products)&&this.shop.getServices().products.length>0&&this.currencySelect.setReadOnly(!0)},_onCountryChange:function(){this.company.setCountry(this.address.getCountry())},_createCurrencySelect:function(){return new l({model:this.shop,readOnly:!this.shop.isNew()})},_createCompanyNameInput:function(){return new d({model:this.company,readOnly:!0===this.isCompanyReadOnly,required:!0,maxlength:120,dynamicValidation:!0})},_createAddresFormComponent:function(){return new p({addressModel:this.address,addressConstraints:this.addressFactory.getConstraints(),countries:this.countries,countryReadOnly:this.isCountryReadOnly,readOnly:this.readOnly||this.isCompanyReadOnly,horizontalLayout:!0})},destroy:function(){this.stopListening(),this.company=null,this.address=null,this.shop=null,this.shopService=null,this.countries=null,this._parent(),this.container=null}})}),define("DS/MPFShopFormComponent/ContactInformationSection",["UWA/Class/View","UWA/Core","DS/MPFServices/MarketplaceServices","DS/MPFServices/ObjectService","DS/MPFPersonModel/PersonModel","DS/MPFCompanyModel/CompanyModel","DS/MPFShopModel/ShopModel","DS/MPFShopModel/ShopServiceModel","DS/MPFCompanyComponent/CompanyCeoInputs","DS/MPFView/FieldTextInputV2","DS/MPFShopFormComponent/SectionFactory","i18n!DS/MPFShopFormComponent/assets/nls/ShopFormComponent","css!DS/MPFShopFormComponent/MPFShopFormComponent"],function(e,t,o,s,n,r,i,a,c,h,d,p){"use strict";return e.extend({className:"mpf-shop-form-v2-section mpf-contact-section mpf-form",setup:function(e={}){s.requiredOfPrototype(e.me,n,"options.me must be a PersonModel"),s.requiredOfPrototype(e.shop,i,"options.shop must be a ShopModel"),s.requiredOfPrototype(e.company,r,"options.company must be a CompanyModel"),t.is(e.shopService)&&s.requiredOfPrototype(e.shopService,a,"options.shopService must be a ShopServiceModel"),this._parent(e),this.service=e.service||o.ENGINEERING,this.me=e.me,this.company=e.company,this.shop=e.shop,this.shopService=e.shopService,this.isCompanyReadOnly=e.isCompanyReadOnly,this.readOnly=!0===e.readOnly,this.ceoForm=this._createCeoForm(),this.emailInput=this._createEmailInput(),this.phoneInput=this._createPhoneInput()},render:function(){return this.container.setContent(d.create({title:p.get("contactInformation"),form:[this.ceoForm.render(),this.emailInput.render(),this.phoneInput.render()],infos:[p.get("contactGuidanceText1"),p.get("contactGuidanceText2")]})),this},validate:function(){var e,t,o;return e=this.ceoForm.validate(),t=this.emailInput.validate().isValid,o=this.phoneInput.validate().isValid,e&&t&&o},_createCeoForm:function(){return new c({model:this.company,readOnly:!0===this.isCompanyReadOnly,required:!0,maxlength:255,dynamicValidation:!0})},_createEmailInput:function(){return new h({model:this.shop,fieldName:i.Fields.EMAIL,fieldLabel:p.get("emailAddress"),required:!0,readOnly:this._areFieldsReadOnly(),dynamicValidation:!0,trim:!0,maxlength:70})},_createPhoneInput:function(){return new h({model:this.shop,fieldName:i.Fields.PHONE_NUMBER,fieldLabel:p.get("phoneNumber"),required:!0,readOnly:!this.me.isDSOperator()&&this._areFieldsReadOnly(),dynamicValidation:!0,trim:!0,type:"tel"})},_areFieldsReadOnly:function(){return this.readOnly||this.shop.getState()===i.States.SUBMITTED||this.shop.getState()===i.States.ACTIVE&&this.shopService&&this.shopService.getState()===a.States.SUBMITTED},destroy:function(){this.company=null,this.shop=null,this._parent(),this.container=null}})}),define("DS/MPFShopFormComponent/LabInformationSection",["UWA/Class/View","UWA/Core","UWA/String","DS/MPFServices/MarketplaceServices","DS/MPFServices/ObjectService","DS/MPFShopModel/ShopModel","DS/MPFShopModel/ShopServiceModel","DS/MPFView/FieldTextInputV2","DS/MPFShopFormComponent/SectionFactory","i18n!DS/MPFShopFormComponent/assets/nls/ShopFormComponent","css!DS/MPFShopFormComponent/MPFShopFormComponent"],function(e,t,o,s,n,r,i,a,c,h){"use strict";return e.extend({className:"mpf-shop-form-v2-section mpf-lab-section mpf-form",setup:function(e={}){n.requiredOfPrototype(e.shop,r,"options.shop must be a ShopModel"),t.is(e.shopService)&&n.requiredOfPrototype(e.shopService,i,"options.shopService must be a ShopServiceModel"),this._parent(e),this.service=e.service||s.ENGINEERING,this.shop=e.shop,this.shopService=e.shopService,this.serviceTerm=e.serviceTerm,this.readOnly=!0===e.readOnly,this.labNameInput=this._createLabNameInput()},render:function(){return this.container.setContent(c.create({title:h.get("labInformation"),form:this.labNameInput.render(),infos:[h.get("labGuidanceText")]})),this},validate:function(){return this.labNameInput.validate().isValid},_createLabNameInput:function(){const e=o.ucfirst(o.format(h.get("serviceName"),this.serviceTerm));return new a({model:this.shop,fieldName:r.Fields.NAME,fieldLabel:e,required:!0,readOnly:this._areFieldsReadOnly(),dynamicValidation:!0,maxlength:40,silent:!1,trim:!0})},_areFieldsReadOnly:function(){return this.readOnly||this.shop.getState()===r.States.SUBMITTED||this.shop.getState()===r.States.ACTIVE&&this.shopService&&this.shopService.getState()===i.States.SUBMITTED},destroy:function(){this.shop=null,this.shopService=null,this._parent(),this.container=null}})}),define("DS/MPFShopFormComponent/ShopFormComponentV2",["UWA/Core","UWA/Class/View","UWA/Promise","DS/UIKIT/Alert","DS/UIKIT/Input/Button","DS/UIKIT/Mask","DS/PlatformAPI/PlatformAPI","DS/MPFServices/MarketplaceServices","DS/MPFServices/ObjectService","DS/MPFCountryModel/CountryCollection","DS/MPFShopModel/ShopModel","DS/MPFShopModel/ShopServiceModel","DS/MPFCompanyModel/CompanyModel","DS/MPFAddressModel/AddressModel","DS/MPFPersonModel/PersonModel","DS/MPFAddressModel/AddressFactory","DS/MPFShopModel/ShopServiceFactory","DS/MPFError/ValidationError","DS/MPFShopFormComponent/CompanyInformationSection","DS/MPFShopFormComponent/LabInformationSection","DS/MPFShopFormComponent/ContactInformationSection","i18n!DS/MPFShopFormComponent/assets/nls/ShopFormComponent","css!DS/MPFShopFormComponent/MPFShopFormComponent"],function(e,t,o,s,n,r,i,a,c,h,d,p,l,m,y,S,u,C,F,v,f,M){"use strict";const g=t.extend({className:"mpf-shop-form-v2 mpf-horizontal",domEvents:{'change select[name="country"]':"_onCountryChange",'change input[name*="addressLine"]':"_onAddressChange",'change input[name="city"]':"_onAddressChange",'change input[name="state"]':"_onAddressChange",'change select[name="state"]':"_onAddressChange",'change input[name="postalCode"]':"_onAddressChange",'change input[name="shopName"]':"_onShopChange",'change input[name="email"]':"_onShopChange",'change input[name="phoneNumber"]':"_onShopChange",'change select[name="supportedCurrencies"]':"_onShopChange"},setup(t={}){this._checkPrototypes(t),this._parent(t),this.service=t.service||a.ENGINEERING,this.addressFactory=t.addressFactory,this.shopServiceFactory=t.shopServiceFactory,this.me=t.me,this.shop=this.model,this.shopService=t.shopService,this.countries=t.countries,this.company=t.company,this.address=t.address,this.serviceTerm=e.is(t.serviceTerm,"string")?t.serviceTerm:M.get("lab"),this.readOnly=!0===t.readOnly&&!this.me.isDSOperator(),this.isCompanyReadOnly=this.readOnly||!!this.company.getDrupalId(),this.isCountryReadOnly=this.readOnly||!!this.company.getCountry()||!!this.company.getDrupalId(),this.companyInformationSection=this._createCompanyInformationSection(),this.labInformationSection=this._createLabInformationSection(),this.contactInformationSection=this._createContactInformationSection(),this.saveButtonOperator=this._createSaveButtonOperator(),this.hasAddressBeenModified=!1,this.hasShopBeenModified=!1},render(){return this.container.setContent([this.companyInformationSection.render(),this.labInformationSection.render(),this.contactInformationSection.render(),{tag:"div",class:"mpf-shop-form-v2-section guidance",text:M.get("guidanceSectionText")}]),this.me.isDSOperator()&&this.container.addContent(this.saveButtonOperator),this},validate(){if(!this.readOnly){const e=this.companyInformationSection.validate(),t=this.labInformationSection.validate(),o=this.contactInformationSection.validate();return e&&t&&o}},save(){return this.readOnly?o.resolve():this.validate()?this._saveCompany().then(this._saveAddress.bind(this)).then(this._saveShop.bind(this)).then(this._notifySaveOk.bind(this)).catch(this._handleError.bind(this)):o.reject(new C("ShopFormComponentV2 validation failed"))},_handleError(e){let t;return Object.prototype.isPrototypeOf.call(Error.prototype,e)?t=e.toString()||M.get("errorMsg"):(t=M.get("errorMsg"),e=new Error(t)),new s({messageClassName:"error",closable:!0,visible:!0,messages:t}).inject(this.container,"top"),o.reject(e)},_notifySaveOk(t){const s=[this.company,this.shop,this.address];return e.is(t)&&s.push(t),i.publish("labInfoPage",{completed:!0}),i.publish("newLabCreated",{id:this.shop.id}),o.resolve(s)},_saveCompany(){return this.company.isNew()?(this.company.unset(l.Fields.TAX_REGISTRATION_ID),this.company.unset(l.Fields.REGISTRATION_ID),this.company.savePromise()):this.company.hasPendingChanges()?this.company.savePromise(this.company.getPendingChanges(),{patch:!0}).catch(function(e){return console.error(e),o.reject(new Error(M.get("anErrorOccured")))}):o.resolve()},_saveAddress(){return this.address.isNew()?(this.address.setParentResourceId(this.company.id),this.companyInformationSection.saveAdress()):this.hasAddressBeenModified?this.companyInformationSection.saveAdress({method:"PUT"}):o.resolve()},_saveShop(){return this.shop.isNew()?(this.service===a.INNOVATE?(this.shop.setParentResourceId(this.company.id),this.shop.set("address",{id:this.address.id}),this.shop.setOwner(void 0),this.shop.set("currency",this.shop.getSupportedCurrencies()[0])):(this.shop.setOwner(this.company.id),this.shop.setAddress(this.address.id)),this.shop.savePromise().then(()=>{if(this.service!==a.INNOVATE){const e=this.shopService||this.shopServiceFactory.createModel(u.Types.SHOP_SHOP_SERVICE);return e.set(p.Fields.IS_AVAILABLE_FOR_TENDER,this.service===a.MAKE),e.parentResourceId=this.shop.id,e.savePromise()}})):this.hasShopBeenModified?this.shop.savePromise(this.shop.getPendingChanges(),{patch:!0}):o.resolve()},_onShopChange(){this.hasShopBeenModified=!0},_onAddressChange(){this.hasAddressBeenModified=!0},_onCountryChange(){this.company.setCountry(this.address.getCountry()),this._onAddressChange()},_createSaveButtonOperator(){return new n({className:"primary",value:M.get("save"),events:{onClick:()=>(r.mask(this.saveButtonOperator.elements.container),this.save().finally(r.unmask.bind(r,this.saveButtonOperator.elements.container)))}})},_createContactInformationSection(){return new f({service:this.service,me:this.me,company:this.company,shop:this.shop,readOnly:this.readOnly,shopService:this.shopService,isCompanyReadOnly:this.isCompanyReadOnly})},_createCompanyInformationSection(){return new F({service:this.service,addressFactory:this.addressFactory,address:this.address,company:this.company,countries:this.countries,shop:this.shop,shopService:this.shopService,readOnly:this.readOnly,isCompanyReadOnly:this.isCompanyReadOnly,isCountryReadOnly:this.isCountryReadOnly})},_createLabInformationSection(){return new v({service:this.service,readOnly:this.readOnly,shop:this.shop,shopService:this.shopService,serviceTerm:this.serviceTerm})},_checkPrototypes(e){c.requiredOfPrototype(e.me,y,"options.me must be a PersonModel"),c.requiredOfPrototype(this.model,d,"this.model must be a ShopModel"),c.requiredOfPrototype(e.countries,h,"options.countries must be a CountryCollection"),c.requiredOfPrototype(e.address,m,"options.address must be an AddressModel"),c.requiredOfPrototype(e.company,l,"options.company must be a CompanyModel"),c.requiredOfPrototype(e.addressFactory,S,"options.addressFactory must be an AddressFactory"),c.requiredOfPrototype(e.shopServiceFactory,u,"options.shopServiceFactory must be a ShopServiceFactory"),e.shopService&&c.requiredOfPrototype(e.shopService,p,"options.shopService must be a ShopServiceModel")},destroy(){this.model=null,this.shop=null,this.me=null,this.shopService=null,this._parent(),this.container=null}});return g.isCompleted=function(t,o){c.requiredOfPrototype(t,d,"shop must be a ShopModel"),c.requiredOfPrototype(o,l,"company must be a CompanyModel");const s=e.is(o)&&!o.isNew()&&e.is(o.getName())&&e.is(o.getCeoFirstName())&&e.is(o.getCeoLastName()),n=e.is(t)&&!t.isNew()&&e.is(t.getName())&&e.is(t.getEmail())&&e.is(t.getSupportedCurrencies())&&t.getSupportedCurrencies().length>0&&e.is(t.getAddress());return s&&n},g}),define("DS/MPFShopFormComponent/ShopFormFactory",["UWA/Class","DS/MPFServices/MarketplaceServices","DS/MPFConnector/Connector","DS/MPFShopModel/ShopModel","DS/MPFShopModel/ShopFactory","DS/MPFShopModel/ShopServiceFactory","DS/MPFPersonModel/PersonFactory","DS/MPFCountryModel/CountryFactory","DS/MPFCompanyModel/CompanyFactory","DS/MPFModelFactory/MPFFactoriesV2","DS/MPFAddressModel/AddressFactory","DS/MPFShopFormComponent/ShopFormComponentV2","DS/MPFServices/ObjectService","DS/MPFUrl/UrlUtils"],function(e,t,o,s,n,r,i,a,c,h,d,p,l,m){"use strict";return e.extend({init:function(e={}){l.requiredOfPrototype(e.connector,o,"options.connector must be a Connector"),this.connector=e.connector,this.isCompanyReadOnly=!0===e.isCompanyReadOnly,this.isReadOnly=!0===e.isReadOnly,this.factoryDispenser=h.getInstance(this.connector),this.service=e.service||t.ENGINEERING},async fromMe(e,o){const d=h.getInstance(this.connector),[l,m,y,S,u,C]=await Promise.all([d.getFactory(h.Types.PERSON),d.getFactory(h.Types.COUNTRY),d.getFactory(h.Types.SHOP),d.getFactory(h.Types.SHOP_SERVICE),d.getFactory(h.Types.COMPANY),d.getFactory(h.Types.ADDRESS)]);u.addressFactory=C;const F=l.createModel(i.Types.ME),v=y.createCollection(n.Types.ME),f=m.createCollection(a.Types.SELLER);let M;await Promise.all([F.fetchPromise(),v.fetchPromise({expand:[s.Expands.SHOP_SERVICES]}),f.fetchPromise()]),v.isEmpty()||!0===o?this.service===t.INNOVATE?M=y.createModel(n.Types.COMPANY_SHOP_V2):(M=y.createModel(n.Types.ME)).set(s.Fields.IS_AUTOMATIC_PRICING,"FALSE"):M=v.get(e)||v.first();const g=S.createModel(r.Types.SHOP_SHOP_SERVICE,M.getService(this.service),{parentResourceId:M.get("id")}),P=F.getCompany(),O=P?this._fetchCompanyFromUrl({companyUrl:P,companyFactory:u,addressFactory:C}):Promise.resolve(u.createModel(c.Types.ME)),[I,_]=await Promise.all([this._fetchShopAddressV2({shop:M,addressFactory:C}),O]),D=I||this._getCompanyAddressV2({company:_,addressFactory:C});return new p({service:this.service,readOnly:this.isReadOnly,model:M,me:F,shopService:g,shopServiceFactory:S,countries:f,company:_,address:D,addressFactory:C})},async fromShopId(e){const t=h.getInstance(this.connector),[o,s,n,c,d,l]=await Promise.all([t.getFactory(h.Types.PERSON),t.getFactory(h.Types.COUNTRY),t.getFactory(h.Types.SHOP),t.getFactory(h.Types.SHOP_SERVICE),t.getFactory(h.Types.COMPANY),t.getFactory(h.Types.ADDRESS)]);d.addressFactory=l;const[m,y,{shop:S,company:u,address:C}]=await Promise.all([o.createModel(i.Types.ME).fetchPromise(),s.createCollection(a.Types.SELLER).fetchPromise(),this._fetchShopCompanyAndAddress({shopId:e,shopFactory:n,companyFactory:d,addressFactory:l})]),F=c.createModel(r.Types.SHOP_SHOP_SERVICE,S.getService(this.service),{parentResourceId:S.get("id")});return new p({service:this.service,readOnly:this.isReadOnly,model:S,me:m,shopService:F,shopServiceFactory:c,countries:y,company:u,address:C,addressFactory:l})},async _fetchShopCompanyAndAddress({shopId:e,shopFactory:t,companyFactory:o,addressFactory:r}){const i=t.createModel(n.Types.SHOP,{id:e});await i.fetchPromise({expand:[s.Expands.SHOP_SERVICES]});const[a,c]=await Promise.all([this._fetchShopAddressV2({shop:i,addressFactory:r}),this._fetchCompanyFromUrl({companyUrl:i.getOwner(),companyFactory:o,addressFactory:r})]);return{shop:i,company:c,address:a||this._getCompanyAddressV2({company:c,addressFactory:r})}},_fetchShopAddressV2({shop:e,addressFactory:t}){let o=e.getAddress();if("string"==typeof o&&o.length>0){const e=new m(o).extractId();return(o=t.createModel(d.Types.ADDRESS,{id:e})).fetchPromise()}return o},_fetchCompanyFromUrl({companyUrl:e,companyFactory:t,addressFactory:o}){const s=(e.match(/[A-Z0-9]{32}$/)||[]).pop();return t.createModel(null,{id:s},{addressFactory:o}).fetchPromise()},_getCompanyAddressV2({company:e,addressFactory:t}){const o=e.get("id");let s;if(o&&e.addresses.setParentResourceId(o),!e.addresses||e.addresses.isEmpty()){s=t.createModel(d.Types.COMPANY,null,{parentResourceId:e.get("id")});const o=e.getCountry();o&&s.setCountry(o)}else s=e.addresses.first();return s}})});