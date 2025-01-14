define("DS/ENODOConversionRules/Views/ParamListView",["UWA/Class/View","DS/Handlebars/Handlebars","text!DS/ENODOConversionRules/assets/templates/edfm.formatparams.html","DS/ENODerivedFormatEssentials/Utils/DerivedFormatUtil","DS/ENO6WPlugins/jQuery","DS/ENO6WPlugins/jQueryUI","DS/Controls/TooltipModel","DS/Controls/ComboBox","DS/Controls/Button","DS/Controls/Slider","DS/Controls/LineEditor"],function(e,a,t,r,n,d,m,i,l,o,s){"use strict";return e.extend({tagName:"div",converter:"",className:"derivedformatparamlistview",setup:function(e){var r=this;r.selection=e.selection,r.paramlist=e.parameters?Object.assign({},e.parameters):{},r.derivedform=e.derivedForm,r.addButton=null;var n=a.compile(t),d=derivedformatmanagementinfra.getNLSData().label.parameters,m=r.getParameters();r.container.setHTML(n({rows:m||[],labels:derivedformatmanagementinfra.getNLSData().label,title:d}));var i=e.container?e.container:widget.body;r.derivedform&&(r.derivedform.getDocument().getElementById("derivedformatfield-formatparams").innerHTML="",i=r.derivedform.getDocument().getElementById("derivedformatfield-formatparams")),r.container.inject(i),r.populateMandatoryParameters(r,m.mandatoryParam,r.container);var o=document.getElementById("edfm-derivedformatparamview-input-addparams");r.addButton=new l({label:"",domId:"edfm-derivedformatparamview-input-addparams-button",icon:{iconName:"plus",fontIconFamily:WUXManagedFontIcons.Font3DS}}).inject(o),r.addButton.disabled=!0,r.addButton.addEventListener("click",r.paramListAdd.bind(null,r));var s=document.getElementById("edfm-derivedformatparamview-input-paramName");m.hasOwnProperty("rowsParam")&&0==m.rowsParam.length?s.disabled=!0:s.disabled=!1,document.getElementById("edfm-derivedformatparamview-input-paramName").addEventListener("change",r.paramListChange.bind(null,r,m)),document.getElementById("dfm-derivedformatform-parameter-table").addEventListener("click",r.paramListDelete.bind(null,r)),document.getElementById("derivedformatparamview-custominput-inputerror")&&(document.getElementById("derivedformatparamview-custominput-inputerror").style.display="none"),document.getElementById("edfm-derivedformatparamview-param-warning-row")&&(document.getElementById("edfm-derivedformatparamview-param-warning-row").style.display="none"),r.getCellTooltip(document.getElementsByClassName("edfm-derivedformatparamview-param-col-inputkey")),r.getCellTooltip(document.getElementsByClassName("edfm-derivedformatparamview-param-col-inputvalue"))},paramListDelete:function(e,a){var t=document.getElementById("derivedformatfield-converter"),r=document.getElementById("derivedformatfield-connector"),n=document.getElementById("derivedformatfield-source"),d=document.getElementById("derivedformatfield-target");if(a.target.classList.contains("edfm-derivedformatparamview-input-row-delete")){var m=a.target.parentElement.parentElement,i=m.cells[0].firstElementChild.name;if(e.paramlist.hasOwnProperty(i)&&delete e.paramlist[i],m.remove(),t&&r&&n&&d){var l=document.getElementById("edfm-derivedformatparamview-param-warning-row"),o=document.getElementById("edfm-derivedformatparamview-param-warning");("3DEXPERIENCE"===t.value&&"SOLIDWORKS"===r.value&&"SLDPRT"===n.value&&"ExactGeometry"===d.value&&"Polyhedral"===selectedParam.name||"3DEXPERIENCE"===t.value&&"3DEXPERIENCE"===r.value&&"ExactGeometry"===d.value&&"AdditionalFeatures"===selectedParam.name)&&(l.style.display="","Polyhedral"===selectedParam.name?o.innerHTML=derivedformatmanagementinfra.getNLSData().label.polyhedralwarning:"AdditionalFeatures"===selectedParam.name&&(o.innerHTML=derivedformatmanagementinfra.getNLSData().label.genericFeatureWarning))}}},paramListAdd:function(e,a){if(!0!==e.addButton.disabled){var t=document.getElementById("edfm-derivedformatparamview-input-addparams").parentElement.parentElement,r=t.parentElement,n=t.cells[0].firstChild.selectedOptions[0].value,d=(document.getElementById("edfm-derivedformatparamview-param-warning"),document.getElementById("derivedformatfield-converter")),m=document.getElementById("derivedformatfield-connector"),i=document.getElementById("derivedformatfield-source"),l=document.getElementById("derivedformatfield-target");d&&m&&i&&l&&("3DEXPERIENCE"==d.value&&"SOLIDWORKS"==m.value&&"SLDPRT"==i.value&&"ExactGeometry"==l.value&&"Polyhedral"==n||"3DEXPERIENCE"==d.value&&"3DEXPERIENCE"==m.value&&"ExactGeometry"==l.value&&"AdditionalFeatures"==n)&&(document.getElementById("edfm-derivedformatparamview-param-warning-row").style.display="none");var o,s,u=t.cells[0].firstChild.selectedOptions[0].innerHTML;if(t.cells[1].firstChild.id.contains("paramEnumValue")?(o=t.cells[1].firstChild.selectedOptions[0].value,s=t.cells[1].firstChild.selectedOptions[0].innerHTML):("number"===t.cells[1].firstChild.type&&t.cells[1].firstChild.checkValidity()||"text"===t.cells[1].firstChild.type&&e.validateParams(t.cells[1].firstChild.value))&&(o=s=t.cells[1].firstChild.value),n&&o)if(e.paramlist.hasOwnProperty(n)){e.paramlist[n]=o;for(var v=1;v<r.rows.length;v++)r.rows[v].cells[0].childNodes[0].name===n&&(r.rows[v].cells[1].childNodes[0].name=o,r.rows[v].cells[1].childNodes[0].value=s)}else{e.paramlist[n]=o;var f=r.insertRow(1),c=f.insertCell(0),p=f.insertCell(1),g=f.insertCell(2);c.width="45%",p.width="45%",g.width="10%";var y=UWA.createElement("input",{class:"edfm-derivedformatparamview-param-col-inputkey",type:"text",disabled:!0,value:u,name:n}).inject(c),E=UWA.createElement("input",{class:"edfm-derivedformatparamview-param-col-inputvalue",type:"text",disabled:!0,value:s,name:o}).inject(p);g.innerHTML='<span class="wux-ui-3ds wux-ui-3ds-1x wux-ui-3ds-trash edfm-derivedformatparamview-input-row-delete" style="font-size: 18px; cursor: pointer !important;"></span>',e.getCellTooltip([y,E])}t.cells[0].firstChild.options[0].selected=!0,t.cells[1].firstChild.remove();var w=UWA.createElement("select",{class:"form-control edfm-derivedformatparamview-input",id:"edfm-derivedformatparamview-input-paramEnumValue",disabled:!0}).inject(t.cells[1]);e.populateParameters(w,[{displayValue:derivedformatmanagementinfra.getNLSData().label.selectValue,value:"",selected:!0,disabled:!0}]),e.addButton.disabled=!0}},paramListChange:function(e,a,t){var r=document.getElementById("edfm-derivedformatparamview-input-paramName");if(r){var n=r.selectedOptions[0].value,d=a.rowsParam.find(function(e,a){return e.name==n}),m=document.getElementById("edfm-derivedformatparamview-input-paramValue-col");if(m.removeChild(m.firstChild),d&&"enum"===d.typeValue){UWA.createElement("select",{class:"form-control edfm-derivedformatparamview-input",id:"edfm-derivedformatparamview-input-paramEnumValue"}).inject(m);var i=document.getElementById("edfm-derivedformatparamview-input-paramEnumValue");e.populateParameters(i,d.options);var l=document.getElementById("derivedformatfield-converter"),o=document.getElementById("derivedformatfield-connector"),s=document.getElementById("derivedformatfield-source"),u=document.getElementById("derivedformatfield-target");if(l&&o&&s&&u){var v=document.getElementById("edfm-derivedformatparamview-param-warning-row"),f=document.getElementById("edfm-derivedformatparamview-param-warning");("3DEXPERIENCE"===l.value&&"SOLIDWORKS"===o.value&&"SLDPRT"===s.value&&"ExactGeometry"===u.value&&"Polyhedral"===d.name||"3DEXPERIENCE"===l.value&&"3DEXPERIENCE"===o.value&&"ExactGeometry"===u.value&&"AdditionalFeatures"===d.name)&&(v.style.display="","Polyhedral"===d.name?f.innerHTML=derivedformatmanagementinfra.getNLSData().label.polyhedralwarning:"AdditionalFeatures"===d.name&&(f.innerHTML=derivedformatmanagementinfra.getNLSData().label.genericFeatureWarning))}}else if(document.getElementById("edfm-derivedformatparamview-input-paramEnumValue")&&document.getElementById("edfm-derivedformatparamview-input-paramEnumValue").remove(),"integer"===d.typeValue||"real"===d.typeValue){var c="integer"===d.typeValue?1:.01,p=d.rangeValue.split("|"),g=p[0].NaN?"":p[0],y=p[1].NaN?"":p[1];UWA.createElement("input",{type:"number",value:d.defaultValue,step:c,min:g,max:y,class:"form-control edfm-derivedformatparamview-input"}).inject(m)}else"text"===d.typeValue&&UWA.createElement("input",{type:"text",value:d.defaultValue,class:"form-control edfm-derivedformatparamview-input"}).inject(m);e.addButton.disabled=!1}},getData:function(){return this.paramlist},onMandatoryParameterChange:function(e,a,t){a.length>0&&t.length>0&&(e.paramlist.hasOwnProperty(a),e.paramlist[a]=t,e.updateAliasOnMandChange(e))},updateAliasOnMandChange:function(e){var a={data:{converter:document.getElementById("derivedformatfield-converter").selectedOptions[0]?document.getElementById("derivedformatfield-converter").selectedOptions[0].value:"",category:document.getElementById("derivedformatfield-connector").selectedOptions[0]?document.getElementById("derivedformatfield-connector").selectedOptions[0].value:"",source:document.getElementById("derivedformatfield-source").selectedOptions[0]?document.getElementById("derivedformatfield-source").selectedOptions[0].value:"",target:document.getElementById("derivedformatfield-target").selectedOptions[0]?document.getElementById("derivedformatfield-target").selectedOptions[0].value:"",inputStreamId:"authoring",outputStreamId:"*",parameters:e.paramlist},url:"/resources/v1/modeler/conversionAdmin/derivedformatmanagement/getconversiondetails",method:"POST",onComplete:function(e){var a=UWA.is(e,"string")?JSON.parse(e):e;if(a.hasOwnProperty("outputStreamId")){var t=a.outputStreamId;document.getElementById("derivedformatfield-outputStreamId").value=t}},onFailure:function(e){console.log(e)}};r.sendServerRequest(a)},populateMandatoryParameters:function(e,a,t){for(var r=document.getElementsByClassName("edfm-derivedformatparamview-mandatoryparam"),n=0;n<r.length;n++){var d=r[n].firstElementChild.firstElementChild.name,m=r[n].children[1];e.parameterValueCreation(e,a,d,m)}},parameterValueCreation:function(e,a,t,r){if(t){var n=a.find(function(e,a){return e.name==t});if(r.removeChild(r.firstElementChild),n&&"enum"===n.typeValue){for(var d=null,m=[],l=0;l<n.options.length;l++){var u=n.options[l],v={value:u.value,label:u.displayValue};!0===u.selected&&(d=u.value),m.push(v)}n.hasOwnProperty("value")&&(d=n.value),e.onMandatoryParameterChange(e,t,d);var f=new i({elementsList:m,value:d,selectedIndex:0});f.inject(r),f.addEventListener("change",function(a){e.onMandatoryParameterChange(e,t,f.value)})}else if(document.getElementById("edfm-derivedformatparamview-input-paramEnumValue")&&document.getElementById("edfm-derivedformatparamview-input-paramEnumValue").remove(),"integer"===n.typeValue||"real"===n.typeValue){var c="integer"===n.typeValue?1:.01,p=n.rangeValue.split("|"),g=p[0].NaN?"":p[0],y=p[1].NaN?"":p[1],E=new o({value:n.defaultValue,minValue:g,maxValue:y,stepValue:c});E.inject(r),E.addEventListener("change",function(a){e.onMandatoryParameterChange(e,inputParamName,a.dsModel.value)})}else if("text"===n.typeValue){var w=new s({placeholder:"PlaceHolder",value:n.defaultValue});w.inject(r),w.addEventListener("change",function(a){w.value.length>=0&&e.onMandatoryParameterChange(e,inputParamName,w.value)})}}},getParameters:function(){var e={},a=new Array,t=new Array,r=new Array,n=this,d=derivedformatmanagementinfra.getInfraCollection();if(document.getElementById("derivedformatfield-converter")&&document.getElementById("derivedformatfield-connector")&&document.getElementById("derivedformatfield-source")&&document.getElementById("derivedformatfield-target")){var m=document.getElementById("derivedformatfield-converter").selectedOptions[0]?document.getElementById("derivedformatfield-converter").selectedOptions[0].value:"";n.converter=m;var i=document.getElementById("derivedformatfield-connector").selectedOptions[0]?document.getElementById("derivedformatfield-connector").selectedOptions[0].value:"",l=document.getElementById("derivedformatfield-source").selectedOptions[0]?document.getElementById("derivedformatfield-source").selectedOptions[0].value:"",o=document.getElementById("derivedformatfield-target").selectedOptions[0]?document.getElementById("derivedformatfield-target").selectedOptions[0].value:"",s=d.find(function(e,a){return e.get("name")==m});if(s){var u=s.get("connectors").find(function(e,a){return e.name==i});if(u){var v=u.supportedformats.find(function(e,a){return e.source.name==l});if(v){var f=v.targets.find(function(e,a){return e.target==o});if(f&&f.parameters)for(var c=0;c<f.parameters.length;c++){var p=f.parameters[c].values?f.parameters[c].values.split("|"):[],g=new Array,y=f.parameters[c].default?f.parameters[c].default:p[0],E=!!f.parameters[c].mandatory&&f.parameters[c].mandatory;for(var w in p)g.push({value:p[w],selected:y==p[w],displayValue:derivedformatmanagementinfra.getNLSData()[n.converter].parameter[p[w]]?derivedformatmanagementinfra.getNLSData()[n.converter].parameter[p[w]]:p[w]});var h={name:f.parameters[c].name,displayName:derivedformatmanagementinfra.getNLSData()[n.converter].parameter[f.parameters[c].name]?derivedformatmanagementinfra.getNLSData()[n.converter].parameter[f.parameters[c].name]:f.parameters[c].name,options:g,typeValue:f.parameters[c].type,defaultValue:f.parameters[c].default,rangeValue:f.parameters[c].range};!1===E?t.push(h):(h.value=f.parameters[c].default,h.displayValue=derivedformatmanagementinfra.getNLSData()[n.converter].parameter[h.value]?derivedformatmanagementinfra.getNLSData()[n.converter].parameter[h.value]:h.value,r.push(h))}}}}if(n.selection){var I=n.selection.get("parameters");for(var B in I){void 0===(E=r.find(function(e,a){if(e.name===B)return e.displayValue=derivedformatmanagementinfra.getNLSData()[n.converter].parameter[I[B]]?derivedformatmanagementinfra.getNLSData()[n.converter].parameter[I[B]]:I[B],e.value=I[B],!0}))&&a.push({name:B,displayName:derivedformatmanagementinfra.getNLSData()[n.converter].parameter[B]?derivedformatmanagementinfra.getNLSData()[n.converter].parameter[B]:B,value:I[B],displayValue:derivedformatmanagementinfra.getNLSData()[n.converter].parameter[I[B]]?derivedformatmanagementinfra.getNLSData()[n.converter].parameter[I[B]]:I[B]})}}}return e.rowsParam=t,e.deployedParam=a,e.mandatoryParam=r,e},validateParams:function(e){return!e.contains(",")&&!e.contains("|")},populateParameters:function(e,a){for(var t in a){var r=new Option(a[t].displayValue,a[t].value);a[t].selected&&(r.selected=!0),a[t].disabled&&(r.disabled=!0),e.add(r)}},getCellTooltip:function(e){if(e&&e.length>0)for(var a=0;a<e.length;a++){var t=e[a];(t.className.contains("inputkey")&&t.offsetWidth/t.value.length<7.5||t.className.contains("inputvalue")&&t.offsetWidth/t.value.length<6.6)&&(t.tooltipInfos=new m({shortHelp:t.value}))}}})});