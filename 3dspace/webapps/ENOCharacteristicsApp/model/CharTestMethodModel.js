define("DS/ENOCharacteristicsApp/model/CharTestMethodModel",["DS/SpecGridView/model/GridItemModel","DS/XSRCommonComponents/utils/Utils","i18n!DS/ENOCharacteristicsApp/assets/nls/ENOCharacteristicsApp"],function(e,s,t){"use strict";return class extends e{constructor(e){super(e),this.appCore=e.appCore,this.currentTabKey=e.currentTabKey;let s=this.getProperties();Object.keys(s).forEach(e=>{Object.defineProperty(this.options.grid,e,{value:s[e],writable:!0,enumerable:!0,configurable:!0})})}getProperties(){return{description:"",title:"",owner:"",type:"",name:""}}isLastVersion(){return this.options.grid["ds6w:isLastRevision"]}set(e){if(e instanceof Array){let s=e.reduce((e,s)=>("ds6w:type"===s.name?e[s.name]=s.dispValue:"ds6w:status"===s.name?e[s.name]=s.dispValue:e[s.name]=s.value,e),{});this.setResponse(s)}else{let s=e.dataelements;s.resourceid=e.id,this.setResponse(s)}return this.updateOptions(this.options),this.options.contextualMenu=["test"],this.options.subLabel=this.getTileSubLabel(),this}getTileSubLabel(){return this.options.grid.isLastVersion?this.getTypeActualName()+" | "+this.getRevision()+"  "+t.label_Latest:this.getTypeActualName()+" | "+this.getRevision()}getPreferredTileAttribute(){var e=this,s=[],t=[];return t.push("ds6w:status"),t.push("ds6w:name"),t.forEach(function(t){switch(t){case"ds6w:status":s.push({name:"Maturity State",value:e.getMaturity()+" | "+e.getModifedDate()});break;case"ds6w:name":s.push({name:"Name",value:e.getName()})}}),s}setResponse(e){for(var t in e)if(e.hasOwnProperty(t))switch(t){case"resourceid":this.options.grid.physicalId=e[t];break;case"ds6w:label":case"title":this.options.grid["ds6w:label"]=this.options.label=this.options.grid.tree=e[t];break;case"ds6w:description":case"description":this.options.grid["ds6w:description"]=e[t];break;case"ds6w:type":case"typeNLS":this.options.grid["ds6w:type"]=this.options.grid["ds6w:type_value"]=e[t];break;case"type_icon_url":case"typeicon":this.options.thumbnail_2d=e[t];break;case"ds6w:policy":case"policy":this.options.grid["ds6w:policy"]=this.options.grid["ds6w:policy_value"]=e[t];break;case"ds6w:isLastRevision":case"isLatestRevision":this.options.grid.isLastVersion=this.options.grid["ds6w:isLastRevision"]="true"===e[t].toLowerCase();break;case"ds6w:responsible":this.options.grid["ds6w:responsible"]=this.options.grid.owner=e[t];break;case"ds6w:identifier":case"name":this.options.grid["ds6w:identifier"]=this.options.grid["ds6w:name"]=this.options.grid.name=e[t];break;case"ds6wg:revision":case"revision":this.options.grid["ds6wg:revision"]=e[t];break;case"ds6w:status":case"stateNLS":this.options.grid["ds6w:status"]=e[t];break;case"state":this.options.grid["ds6w:status_value"]=e[t];break;case"ds6w:modified":case"modified":this.options.grid["ds6w:modified"]=s.getformatedDate(e[t]);break;case"ds6w:lastModifiedBy":this.options.grid["ds6w:lastModifiedBy"]=s.getformatedDate(e[t]);break;case"ds6w:created":case"originated":this.options.grid["ds6w:created"]=s.getformatedDate(e[t]);break;case"preview_url":case"image":this.options.thumbnail=e[t];break;case"ds6w:project":case"collabspace":this.options.grid["ds6w:project"]=e[t];break;case"parentId":this.options.grid.parentId=e[t]}}}});