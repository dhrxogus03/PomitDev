define("DS/ENODerivedFormatManagement/Views/DORuleDetailDialog",["DS/Windows/Dialog","DS/Windows/ImmersiveFrame","DS/TreeModel/TreeDocument","DS/TreeModel/TreeNodeModel","DS/DataGridView/DataGridView","DS/DataGridView/DataGridViewLayout","DS/Controls/ModalContainer","DS/Controls/Button","DS/Controls/Accordeon","i18n!DS/ENODerivedFormatManagement/assets/ENODORules"],function(e,t,a,r,i,n,s,o,l,d){"use strict";var m=function(e,t){if(null==t)throw new Error(d.error.invalidFrame);if(!(e&&Object.keys(e).length>0))throw new Error(d.error.emptyParameter);e.parameters&&e.parameters.length>0&&(this._parameters=e.parameters),this._representedDO=e,this._parentContainer=t,this._dialog=void 0,this._parametersTable=void 0,this._modal=void 0,this.createDialog()};return m.prototype.constructor=m,m.prototype.getDialog=function(){return this._dialog},m.prototype.createDialog=function(){this._immersiveFrame=new t,this._immersiveFrame.getContent().addClassName("sidePanelDO_param_frame");var a=this.createView();this.okButton=new o({label:d.buttons.close,disabled:!1,allowUnsafeHTMLLabel:!1}),this.okButton.addEventListener("buttonclick",this.onClose.bind(this),!1),this._dialog=new e({immersiveFrame:this._immersiveFrame,title:d.labels.doDetails,content:a,activeFlag:!1,movableFlag:!1,resizableFlag:!1,width:360,height:-1,buttons:{Ok:this.okButton}}),this._dialog.addEventListener("close",this.onClose.bind(this),!1),this._modal=s.createModal(this._parentContainer,this._immersiveFrame.getContent())},m.prototype.onClose=function(){this._dialog.destroy(),this._dialog=null,delete this._immersiveFrame,this._immersiveFrame=null,s.removeModal(this._parentContainer)},m.prototype.createView=function(){var e=UWA.createElement("div",{class:"doinformationview_layout"}),t=[],a=new UWA.Element("div",{class:"dodetailsview_accordeoncontent",id:"doattributesview_content"}),r=[];if(void 0!==this._representedDO.origin&&this._representedDO.origin.length>0&&r.push({name:d.labels.origin,value:this._representedDO.origin}),void 0!==this._representedDO.format&&this._representedDO.format.length>0&&r.push({name:d.labels.format,value:this._representedDO.format}),void 0!==this._representedDO.outputStreamId&&this._representedDO.outputStreamId.length>0&&r.push({name:d.labels.alias,value:this._representedDO.outputStreamId}),void 0!==this._representedDO.forceUpdate&&r.push({name:d.labels.forceUpdate,value:this._representedDO.forceUpdate}),this.generateParamTable(r).inject(a),t.push({header:d.labels.doattributes,content:a,expandedFlag:!0}),0!==Object.keys(this._representedDO.parameters).length){var i=this.createParameters();t.push({header:d.labels.parameters,content:i,expandedFlag:!0})}new l({class:"dodetailsview_accordeonhandler",items:t,style:"simple",exclusive:!1}).inject(e);return e},m.prototype.generateParamTable=function(e){for(var t=new UWA.Element("table",{class:"doattributeview_table",styles:{width:"100%",height:"100%",cursor:"default"}}),a=new UWA.Element("tbody",{class:"doattributeview_tbody"}).inject(t),r=0;r<e.length;r++){var i=e[r].name,n=e[r].value,s=new UWA.Element("tr",{class:"doattributeview_tr"}).inject(a);new UWA.Element("td",{class:"doattributeview_td_parametername",text:i}).inject(s),i===d.labels.forceUpdate?new UWA.Element("td",{class:"doattributeview_td_parametervalue "+this._representedDO.forceUpdate,html:""}).inject(s):new UWA.Element("td",{class:"doattributeview_td_parametervalue",text:n}).inject(s)}return t},m.prototype.createParameters=function(){for(var e=UWA.createElement("div",{class:"dodetailsview_accordeoncontent",id:"doparameterview_content"}),t=[],a=Object.keys(this._representedDO.parameters),r=0;r<a.length;r++){var i=a[r],n=this._representedDO.converter,s=derivedformatmanagementinfra.getNLSData()[n].parameter[i],o=this._representedDO.parameters[i],l=derivedformatmanagementinfra.getNLSData()[n].parameter[o];t.push({name:s,value:l})}return this.generateParamTable(t).inject(e),e},m});