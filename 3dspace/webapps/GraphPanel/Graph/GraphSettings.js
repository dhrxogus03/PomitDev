define("DS/GraphPanel/Graph/GraphSettings",["DS/CoreEvents/ModelEvents","DS/Core/Core","DS/UIKIT/Iconbar","css!DS/UIKIT/UIKIT.css","css!DS/GraphPanel/Graph/GraphPresenter.css"],function(e,t,n){"use strict";var s=function(t){this._modelEventParent=t&&t.modelEvents?t.modelEvents:new e,this._init(t)};return s.prototype._init=function(e){this._initDom(e)},s.prototype._initDom=function(e){this._content=document.createElement("div"),this._content.classList.add("settings-panel"),this._items=[];for(var t=0;t<e.listKPI.length;t++)this._items[t]={text:e.listKPI[t],selectable:!0,selected:!0},e.modelC3.selectedItems[t]=e.listKPI[t];var s=this;this._iconbar=new n({renderTo:this._content,items:[{fonticon:"cog",innerComponent:{type:"dropdownmenu",options:{items:this._items,multiSelect:!0,closeOnClick:!1,events:{onClick:function(){this._selectedItems=this.getSelectedItems(),e.modelC3.selectedItems=[];for(var t=0;t<this._selectedItems.length;t++)e.modelC3.selectedItems[t]=this._selectedItems[t].name;s._modelEventParent.publish({event:"change-view",data:e.modelC3.selectedItems})}}}}}]})},s.prototype.inject=function(e){e.appendChild(this._content)},s.prototype.destroy=function(){this._content=null},s});