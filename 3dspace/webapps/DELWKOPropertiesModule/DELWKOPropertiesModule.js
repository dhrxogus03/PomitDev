define("DS/DELWKOPropertiesModule/DELWKOEditPropDate",["UWA/Core","UWA/Class"],function(e,t){"use strict";return Date.prototype.getEditPropDateFormat=function(){if(e.is(this)){var t=this.getMonth()+1,i=this.getDate(),n=this.getHours(),r=this.getMinutes();return(t>9?"":"0")+t+"/"+(i>9?"":"0")+i+"/"+this.getFullYear()+" "+n+":"+(r>9?r:"0"+r)}},function(t){var i=new Date(t);return i instanceof Date&&e.is(i)&&!isNaN(i)?i:void 0}}),define("DS/DELWKOPropertiesModule/DELWKOPropWorkOrderFacet",["DS/EditPropWidget/facets/Properties/EditPropController"],function(e){return e.extend({_onCompleteLoadModel:function(e){if(this._parent.apply(this,arguments),this.editPropertiesUI&&(this.editPropertiesUI.elements&&this.editPropertiesUI.elements.formSection&&this.editPropertiesUI.elements.formSection._accordionProperties&&(this.editPropertiesUI.elements.formSection._accordionProperties.asset_resource={name:"asset_resource",nameNLS:"KB9 - TEST",weight:0}),this.editPropertiesUI.addSection({name:"asset_resource",section:"asset_resource",list:[]}),this.editPropertiesUI.elements&&this.editPropertiesUI.elements.formSection&&this.editPropertiesUI.elements.formSection.getOrganizers)){var t=this.editPropertiesUI.elements.formSection.getOrganizers();if(t&&t.asset_resource&&t.asset_resource.elements&&t.asset_resource.elements.container){e&&e.results&&1===e.results.length&&e.results[0].physicalID&&e.results[0].physicalID,t.asset_resource.elements.container.appendText('<div><div><img class="editProp_iconAttribute" src="https://vdevpril2834am.ux.dsone.3ds.com:443/3DSpace/snresources/images/icons/small/I_PPRWorkOrder.png"></div></div>')}}}})}),define("DS/DELWKOPropertiesModule/DELWKOPropertiesModule",["UWA/Core","DS/EditPropWidget/EditPropWidget","DS/EditPropWidget/models/EditPropAttributeModel","DS/EditPropWidget/models/EditPropModel","DS/EditPropWidget/constants/EditPropConstants","DS/EditPropWidget/constants/ConstantsMapping"],function(e,t,i,n,r,s){"use strict";return{behaviors:["UXFactoryBehavior","SelectionBehavior","ModelBehavior","ResourceBehavior"],creator:function(i,s,o,a,l){var c,d,p,u,g,E,f,m,D,v,S;return E=function(n){var o,E,f=i.getElement(),m=s.getComponent("WUXDockAreaEnum"),D=s.getComponent("WUXFrameWindowsManager").getFrameWindow(i.getAppContext());e.is(D)&&(o=D.getImmersiveFrame(),e.is(o)&&((c=s.create("Panel",{position:{at:"top right"},side:m.RightDockArea,currentDockArea:m.RightDockArea,title:l.getNLSValue("Cmd.DisplayProperties.Title"),minWidth:450,height:300,content:f,resizableFlag:!0,visibleFlag:!1,collapsibleFlag:!0,floatableFlag:!0,verticallyStretchableFlag:!0})).close=function(){i.notify("toggleCmdCheckHeaderState",{cmdName:"DisplayProperties",cmdState:!1})},c.immersiveFrame=o,E=o.getDockingElement(c.currentDockArea),e.is(E)&&(E.collapseDockingZoneFlag=!1),d=new t({className:"DisplayPropertiesPanel",typeOfDisplay:r.ALL,selectionType:r.NO_SELECTION,displayType:r.STANDARD,readOnly:!1,extraNotif:!0,editMode:!1}),p=(p=a.get3DSpaceUrl()).endsWith("/")?p.substring(0,p.length-1):p,u=a.getTenant(),(g={}).selectedId=S(),g.platformUrl=p,g.platformTenant=u,g.getSecurityContext=function(){return a.getSecurityContext()},g.getSelectedRefId=function(){return S()},"WORKORDER"===a.getPPRType(g.selectedId)&&d.removeFacets([r.FACET_INSTANCE,r.FACET_EFFECTIVITY,r.FACET_SHARING,r.FACET_DOCUMENTS,r.FACET_RELATIONS,r.FACET_REVISIONS,r.FACET_CHANGE,r.FACET_SPECIFICATIONS]),d.inject(f)))},f=function(){return o.getSelections().reduce(function(e,t){return e.concat(t)},[])},S=function(){var e=f()[0];return a.getReferenceId(e)},m=function(){return f().map(function(e){return new n({tenant:a.getTenant(),service:"3DSpace",objectId:e})})},D=function(){var t;e.is(d)&&(t=m(),d.initDatas(t))},v=function(e){D()},{listenTo:function(){return{select:v}},onStart:function(t){E(),D(),e.is(c)&&c.show()},onStop:function(){e.is(c)&&(c.hide(),e.is(d)&&(d.destroyComponent(),d=null),c.destroy(),c=null)}}}}}),define("DS/DELWKOPropertiesModule/DELWKOPropMainController",["DS/EditPropWidget/constants/EditPropConstants","DS/EditPropWidget/constants/ConstantsMapping","DS/EditPropWidget/controllers/EditPropMainController","DS/EditPropWidget/UI/EditPropSkeleton"],function(e,t,i,n){return i.extend({_setup:function(i){var r=this,s=t.getMapping(i),o=t.getDefaultFacets();i.facets&&(o=i.facets,delete i.facets);var a=[],l=!1;o.forEach(function(t){var i=r._getFacet(s,t);i&&(!l&&i.facet&&i.facet.name===e.FACET_PROPERTIES&&(l=!0,i.alwaysVisible=!0),a.push(i))}),l||(s[e.FACET_PROPERTIES].visible=!1,a.push(s[e.FACET_PROPERTIES])),this.skeleton=new n(a,i)}})}),define("DS/DELWKOPropertiesModule/DELWKOPropEditWidget",["DS/DELWKOPropertiesModule/DELWKOPropMainController","DS/EditPropWidget/EditPropWidget"],function(e,t){return t.extend({_getController:function(t){return this.controller?this.controller:new e(t)}})}),define("DS/DELWKOPropertiesModule/DELWKOEditPropWidgetCloud",["UWA/Core","UWA/Class","DS/Controls/Tab","DS/Controls/Expander","DS/DELPPWResourceServices_FD02/ResourceUtils","DS/DELPPWWebServices_FD02/WebserviceUtils","DS/DELWKOModelServices/DELWKOCollectionUtilsCloud","DS/DELWKOPropertiesModule/DELWKOEditPropDate","i18n!DS/DELWKOPropertiesModule/assets/nls/DELWKOEditPropWidgetCloud","i18n!DS/DELWKOApp/assets/nls/NLS","css!DS/DELWKOPropertiesModule/assets/css/DELWKOEditPropWidgetCloud"],function(e,t,i,n,r,s,o,a,l,c){"use strict";return t.extend({_refModels:[],init:function(e){},initDatas:function(t){var i=this;i._options=t,i._refModels=[];var n=e.createElement("div",{class:"contentModalView"});if(e.is(i._options.refModels)&&i._options.refModels.length>1)i._options.refModels.forEach(e=>{i._refModels.push(o.getReferenceFromCollection(e))}),i.buildMultipleHeader(n),i.buildMultipleTabContent(n);else if(e.is(i._options.refModels)&&1===i._options.refModels.length)i._options.refModels.forEach(e=>{i._refModels.push(o.getReferenceFromCollection(e))}),i.buildHeader(n),i.buildTabContent(n);else{var r=e.createElement("div",{class:"propertiesContent"});r.setAttribute("style","display : flex");var s=new e.Element("span",{class:"value"}).inject(r);s.setAttribute("style","margin-left : 48%; margin-top : 48%"),s.innerText="no object select",r.inject(n)}i.div=n},buildHeader:function(t){var i=o.getReferenceFromCollection(this._options.refModels[0]),n=e.createElement("div",{class:"idCardContainer"});n.setAttribute("style","display : flex"),n.inject(t);var r,a=e.createElement("div",{class:"thumbnail"}),l=i.get("type");"DELLmiWorkOrderReference"===l&&(r="I_PPRWorkOrder"),"DELLmiExecHeaderOperationReference"===l&&(r="I_PPRSeqExecHeader"),a.setAttribute("style","background-image: url('"+s.get3DSpaceUrl()+"/snresources/images/icons/large/"+r+"108x144.png');width: 144px;height: 108px"),a.inject(n);var c=e.createElement("div",{class:"propertiesHeader"});c.inject(n),c.setAttribute("style","display: inline-grid");var d=new e.Element("span",{class:"propertiesHeaderTitle"}).inject(c);d.setAttribute("style","font-size: large; font-weight: bold; color: gray"),d.innerText=i.get("V_Name"),(d=new e.Element("span",{class:"propertiesHeaderTitle"}).inject(c)).innerText=i.get("owner")+" "+i.get("originated")},buildMultipleHeader:function(t){var i=e.createElement("div",{class:"idCardContainer"});i.setAttribute("style","display : flex"),i.inject(t);var n=e.createElement("div",{class:"propertiesHeader"});n.inject(i),n.setAttribute("style","display: inline-grid");var r=new e.Element("span",{class:"propertiesHeaderTitle"}).inject(n);r.setAttribute("style","font-size: large; font-weight: bold; color: gray"),r.innerText+=this._refModels.length+" objects selected",(r=new e.Element("span",{class:"propertiesHeaderTitle"}).inject(n)).innerText="(multiple) ";var s=0;this._refModels.forEach(e=>{s>0&&(r.innerText+=", "),r.innerText+=e.get("V_Name"),s++})},buildTabContent:function(t){var n=new i({displayStyle:"strip"});n.tabBar.centeredFlag=!1;var s=document.createElement("div");s.className="propertiesTab",n.elements.container.setStyle("margin-top","3%");var d=o.getReferenceFromCollection(this._options.refModels[0]),p=l[d.get("type")],u=p.public,g=p.extension,E=Object.keys(d._attributes),f=Object.values(d._attributes),m=0,D=0;E.forEach(t=>{var i=u[t];if(e.is(f[m])&&e.is(i)){var n=e.createElement("div",{class:"propertiesContent"});0===D?n.setAttribute("style","margin-top : 3%; display : flex"):n.setAttribute("style","display : flex"),D++,n.inject(s);var o=e.createElement("div",{class:"key",id:t}).inject(n),l=new e.Element("span",{class:"value"}).inject(o);if(l.innerText=i.nls,o=e.createElement("div",{class:"value",id:f[m]}).inject(n),0===m&&o.setAttribute("style","margin-top : 3%"),"Type"===i.nls){o.setAttribute("style","display : inline-flex"),e.createElement("div",{class:"dsdsd",id:"image"}).inject(o).setAttribute("style","background-image: url('"+r.getIconURLFromKey(d.get("type"))+"'); height : 22px; width : 22px"),(l=new e.Element("span",{class:"value"}).inject(o)).innerText=c["Type."+d.get("type")]}else{l=new e.Element("span",{class:"value"}).inject(o);var p=u[t].type,g=new a(d.get(t));if("Date"===p&&g instanceof Date&&e.is(g)){var E=g.getEditPropDateFormat();l.innerText=E}else l.innerText=d.get(t)}}m++}),m=0,E.forEach(t=>{var i=g[t];if(e.is(f[m])&&e.is(i)){var n=e.createElement("div",{class:"propertiesContent"});n.setAttribute("style","display : flex"),n.inject(s);var r=e.createElement("div",{class:"key",id:t}).inject(n);0===m&&r.setAttribute("style","margin-top : 3%");var o=new e.Element("span",{class:"value"}).inject(r);o.innerText=i.nls,r=e.createElement("div",{class:"value",id:f[m]}).inject(n),0===m&&r.setAttribute("style","margin-top : 3%"),(o=new e.Element("span",{class:"value"}).inject(r)).innerText=d.get(t)}m++}),n.add({icon:{iconName:"properties",fontIconFamily:WUXManagedFontIcons.Font3DS},label:l.PropertiesTab,content:s,isSelected:!0}),n.inject(t)},buildMultipleTabContent:function(t){var n=new i({displayStyle:"strip"});n.tabBar.centeredFlag=!1;var r=document.createElement("div");r.className="propertiesTab",n.elements.container.setStyle("margin-top","3%");var s=new Map;this._refModels.forEach(t=>{var i=l[t.get("type")],n=i.public,o=(i.extension,Object.keys(t._attributes)),d=Object.values(t._attributes),p=0,u=0;o.forEach(i=>{var o=n[i];if(e.is(d[p])&&e.is(o)){var l=s.get(o.nls);if(e.is(l)){var g;if("Type"===o.nls)(g=c["Type."+t.get("type")]).indexOf(l.innerText)<0&&(l.innerText="(multiple) "+l.innerText+", "+c["Type."+t.get("type")]);else if((g=t.get(i)).indexOf(l.innerText)<0)if((v=new a(t.get(i)))instanceof Date&&e.is(v))(S=v.getEditPropDateFormat()).indexOf(l.innerText)<0&&(l.innerText="(multiple) "+l.innerText+", "+S);else l.innerText="(multiple) "+l.innerText+", "+g}else{var E=e.createElement("div",{class:"propertiesContent"});0===u?E.setAttribute("style","margin-top : 3%; display : flex"):E.setAttribute("style","display : flex"),u++,E.inject(r);var f=e.createElement("div",{class:"key",id:i}).inject(E),m=new e.Element("span",{class:"value"}).inject(f);if(m.innerText=o.nls,f=e.createElement("div",{class:"value",id:d[p]}).inject(E),0===p&&f.setAttribute("style","margin-top : 3%"),"Type"===o.nls)f.setAttribute("style","display : inline-flex"),(m=new e.Element("span",{class:"value"}).inject(f)).innerText=c["Type."+t.get("type")],s.set(o.nls,m);else{m=new e.Element("span",{class:"value"}).inject(f);var D=n[i].type,v=new a(t.get(i));if("Date"===D&&v instanceof Date&&e.is(v)){var S=v.getEditPropDateFormat();m.innerText=S,s.set(o.nls,m)}else m.innerText=t.get(i),s.set(o.nls,m)}}}p++}),0}),n.add({icon:{iconName:"properties",fontIconFamily:WUXManagedFontIcons.Font3DS},label:l.PropertiesTab,content:r,isSelected:!0}),n.inject(t)}})}),define("DS/DELWKOPropertiesModule/DELWKOPropertiesModuleCloud",["UWA/Core","DS/DELWKOPropertiesModule/DELWKOEditPropWidgetCloud","DS/DELWKOModelServices/DELWKOCollectionUtilsCloud","DS/EditPropWidget/EditPropWidget","DS/EditPropWidget/models/EditPropAttributeModel","DS/EditPropWidget/models/EditPropModel","DS/EditPropWidget/constants/EditPropConstants","DS/EditPropWidget/constants/ConstantsMapping"],function(e,t,i,n,r,s,o,a){"use strict";return{behaviors:["UXFactoryBehavior","SelectionBehavior","ModelBehavior","ResourceBehavior"],creator:function(r,a,l,c,d){var p,u,g,E,f,m,D,v,S,P,y,T;return D=function(i){var s,l,D=r.getElement(),v=a.getComponent("WUXDockAreaEnum"),S=a.getComponent("WUXFrameWindowsManager").getFrameWindow(r.getAppContext());e.is(S)&&(s=S.getImmersiveFrame(),e.is(s)&&((p=a.create("Panel",{position:{at:"top right"},side:v.RightDockArea,currentDockArea:v.RightDockArea,title:d.getNLSValue("Cmd.DisplayProperties.Title"),minWidth:450,height:300,content:D,resizableFlag:!0,visibleFlag:!1,collapsibleFlag:!0,floatableFlag:!0,verticallyStretchableFlag:!0})).close=function(){r.notify("toggleCmdCheckHeaderState",{cmdName:"DisplayProperties",cmdState:!1})},p.immersiveFrame=s,l=s.getDockingElement(p.currentDockArea),e.is(l)&&(l.collapseDockingZoneFlag=!1),E=(E=c.get3DSpaceUrl()).endsWith("/")?E.substring(0,E.length-1):E,f=c.getTenant(),(m={}).selectedId=T(),m.platformUrl=E,m.platformTenant=f,m.getSecurityContext=function(){return c.getSecurityContext()},m.getSelectedRefId=function(){return T()},"WORKORDER"===c.getPPRType(m.selectedId)||"EXECHEADER"===c.getPPRType(m.selectedId)?(g=new t,D.setAttribute("style","background-color: white")):((u=new n({className:"DisplayPropertiesPanel",typeOfDisplay:o.ALL,selectionType:o.NO_SELECTION,displayType:o.STANDARD,readOnly:!1,extraNotif:!0,editMode:!1})).inject(D),"WORKORDER"===c.getPPRType(m.selectedId)&&u.removeFacets([o.FACET_INSTANCE,o.FACET_EFFECTIVITY,o.FACET_SHARING,o.FACET_DOCUMENTS,o.FACET_RELATIONS,o.FACET_REVISIONS,o.FACET_CHANGE,o.FACET_SPECIFICATIONS]),u.inject(D))))},v=function(){return l.getSelections().reduce(function(e,t){return e.concat(t)},[])},T=function(){var e=v()[0];return c.getReferenceId(e)},S=function(){return v().map(function(e){return new s({tenant:c.getTenant(),service:"3DSpace",objectId:e})})},P=function(){var t;if(e.is(u))t=S(),u.initDatas(t);else if(e.is(g)){var n=r.getElement();e.is(g.div)&&e.is(n)&&n.removeChild(g.div);var s=[];l.getSelections().forEach(t=>{t.forEach(t=>{var n=i.getReferenceFromCollection(t);if(!e.is(n)){var r=i.getInstanceFromCollection(t);e.is(r)&&(n=i.getReferenceModelFromInstance(r))}e.is(n)&&s.push(n)})});var o={};o.refModels=s,g.initDatas(o),g.div.inject(n)}},y=function(e){P()},{listenTo:function(){return{select:y,changeReference:y}},onStart:function(t){D(),P(),e.is(p)&&p.show()},onStop:function(){e.is(p)&&(p.hide(),e.is(u)&&(u.destroyComponent(),u=null),p.destroy(),p=null)}}}}});