define("DS/ENOXVersionExplorerSubwayListView/VersionExplorerColumnManager",["UWA/Core","DS/GraphListView/ColumnManagerBase","DS/WidgetServices/WidgetServices","DS/ENOXVersionExplorerUtils/VersionExplorerSettings","DS/ENOXVersionExplorerUtils/VersionExplorerEnums","i18n!DS/ENOXVersionExplorerSubwayListView/assets/nls/SubwayColumnsTitles","i18n!DS/ENOXVersionExplorerViews/assets/nls/VersionExplorerView"],function(e,t,n,o,i,s,r){"use strict";const l={day:"numeric",year:"numeric",month:"long",hour:"numeric",minute:"numeric"};return t.extend({init:function(t){if(this._parent(t),this.versionExplorerController=t.versionExplorerController,this.setDefaultColumns([{dataIndex:"__GRAPH__",getCellValueForSort:function(e){return e},sortFunction:function(e,t){return e.options.fakeDate<t.options.fakeDate?-1:1},compareFunction:function(e,t){return e.options.fakeDate<t.options.fakeDate?-1:1}},{width:250,dataIndex:"tree",onCellRequest:function(e){if(!e.isHeader){var t=e.nodeModel,n=(t.getTreeDocument()||this.treeDocument)._DATA_MODEL_TYPE;if(n!==i.DATA_MODEL_TYPES.MODEL_P&&n!==i.DATA_MODEL_TYPES.MODEL_REVISION){var o=e.cellView.reuseCellContent("title_cell_view");o||(o=e.cellView.getContent());var s,r,l=o.getElement(".symbol");if(t.options.ancestors&&t.options.ancestors.length){l.show();for(var a=0;a<t.options.ancestors.length;a++)s&&"I"!==t.options.ancestors[a].semantic||(s=t.options.ancestors[a].icon),"I"!==t.options.ancestors[a].semantic&&(r=t.options.ancestors[a].semantic);s?(l.setHTML('<img src="'+s+'">'),l.setStyle("background-color","transparent")):(l.setHTML(r),l.setStyle("background-color",null))}else l.hide();o.getElement(".title").setHTML(t.options.label)}else e.cellView.getContent().setContent(e.nodeModel.options.label);var d=e.cellView.getContent();d.tooltipInfos&&(d.tooltipInfos.shortHelp=t.options.label)}}}]),t.versionExplorerController&&t.versionExplorerController.options&&t.versionExplorerController.options.customizeColumnHash)for(var n=t.versionExplorerController.options.customizeColumnHash,o=Object.keys(n),s=0;s<o.length;s++){var r=n[o[s]];r.columnDefFunction&&r.columnDefFunction(this)}this._customColumnViews.push({id:"thumbnail_cell_view",buildContent:function(){return new e.Element("div",{styles:{height:"80px","background-repeat":"no-repeat","background-size":"contain","background-position":"center center"}})}},{id:"title_cell_view",buildContent:function(){return e.createElement("div",{class:"with-version-semantic",html:["<span>",'<div class="symbol"></div>','<div class="title"></div>',"</span>"].join("\n")})}})},_customizeColumnView:function(t){if("modified"===(t=this._parent(t)).dataIndex)t.onCellRequest=function(e){if(!e.isHeader){var o=e.nodeModel,i=n.getLanguage();if(o.options.grid[t.dataIndex]instanceof Date){var s=o.options.grid[t.dataIndex].toLocaleString(i,l),r=e.cellView.getContent();r.setHTML(s),r.tooltipInfos&&(r.tooltipInfos.shortHelp=s)}}};else if("creationDate"===t.dataIndex)t.onCellRequest=function(e){if(e.isHeader){var i=e.cellView._cellInfos.manager.getOrderedColumnState(),s=!0;o.historyConfig&&o.historyConfig.settings&&o.historyConfig.settings.subwayGraph&&Array.isArray(o.historyConfig.settings.subwayGraph.sortColumns)&&o.historyConfig.settings.subwayGraph.sortColumns.length&&(s=o.historyConfig.settings.subwayGraph.sortColumns.indexOf("creationDate")>=0),s&&"creationDate"===i.dataIndex||"__GRAPH__"===i.dataIndex||"code"===i.dataIndex?e.cellView.getContent().addClassName("wux-ui-sort-"+i.sortOrder):(e.cellView.getContent().removeClassName("wux-ui-sort-asc"),e.cellView.getContent().removeClassName("wux-ui-sort-desc"))}else{var r=e.nodeModel,a=n.getLanguage();if(r.options.grid[t.dataIndex]instanceof Date){var d=r.options.grid[t.dataIndex].toLocaleString(a,l),c=e.cellView.getContent();c.setHTML(d),c.tooltipInfos&&(c.tooltipInfos.shortHelp=d)}}};else if("code"===t.dataIndex)t.width=75,t.sortFunction=function(e,t){var n=e.options.grid.code,o=t.options.grid.code;const i=e=>(+e).toString()===e,s=n.match(/\d+|\D+/g),r=o.match(/\d+|\D+/g);let l=0,a=Math.min(s.length,r.length);for(;l<a&&s[l]===r[l];)l++;return l===a?s.length-r.length:i(s[l])&&i(r[l])?s[l]-r[l]:s[l].localeCompare(r[l])},t.getCellValueForSort=function(e){return e},t.compareFunction=function(e,n){return t.sortFunction(e,n)},t.onCellRequest=function(n){if(n.isHeader){var i=n.cellView._cellInfos.manager.getOrderedColumnState(),s=!0;o.historyConfig&&o.historyConfig.settings&&o.historyConfig.settings.subwayGraph&&Array.isArray(o.historyConfig.settings.subwayGraph.sortColumns)&&o.historyConfig.settings.subwayGraph.sortColumns.length&&(s=o.historyConfig.settings.subwayGraph.sortColumns.indexOf("code")>=0),s&&"creationDate"===i.dataIndex||"__GRAPH__"===i.dataIndex||"code"===i.dataIndex?n.cellView.getContent().addClassName("wux-ui-sort-"+i.sortOrder):(n.cellView.getContent().removeClassName("wux-ui-sort-asc"),n.cellView.getContent().removeClassName("wux-ui-sort-desc"))}else{var r=n.nodeModel.options.grid[t.dataIndex];r=e.String.escapeHTML(r),n.cellView.getContent().setHTML(r)}};else if("current"===t.dataIndex);else if("resp"===t.dataIndex);else if("thumbnail"===t.dataIndex)t.width=131,t.onCellRequest=function(n){if(!n.isHeader){var o=n.nodeModel.options.grid.thumbnail||n.nodeModel.options.grid.icon||"";let i=e.createElement("div",{className:"title_cell_view",height:"80px",styles:{"background-repeat":"no-repeat","background-size":"contain","background-position":"center center",width:"100%",height:"100%","background-image":"url("+o+")"},events:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),"function"==typeof t.cellClickCB&&t.cellClickCB(n,e)}}});n.cellView.getContent().setContent(i),n.cellView.getContent().tooltipInfos&&(n.cellView.getContent().tooltipInfos.shortHelp=r.ClickToViewThumbnail)}},t.cellClickCB=function(e){e.cellModel&&require(["DS/PADUtils/views/PADThumbnail"],function(t){new t({cellModel:e.cellModel})._modal.elements.body.getElement(".padthumbnail_main").setStyle("background-image","url("+e.cellModel+")")})};else if("maturity_nls"===t.dataIndex){t.versionExplorerController=this.versionExplorerController;var i=t.versionExplorerController._isMaturityButtonDisabled();if(t.versionExplorerController._statesData&&t.versionExplorerController._statesData.policies&&t.versionExplorerController._statesData.policies.length>0){t.states=t.versionExplorerController._statesData.policies[0].states,t.onCellRequest=function(n){if(!n.isHeader){var o=n.nodeModel,s=o.options.grid[t.dataIndex],r=o.options.grid.maturity,l=[];t.versionExplorerController._statesData.policies&&(l=t.versionExplorerController._statesData.policies[0].states);for(var a="red",d=0;d<l.length;d++)if(l[d].stateSysName===r){a=l[d].activeColor;break}let c=e.createElement("div",{class:"wux-controls-label",html:s,styles:{backgroundColor:a,color:"#FFFFFF"===a?"#000000":"#FFFFFF",paddingLeft:"5px",paddingRight:"5px","margin-block":"auto"},events:{mousedown:function(e){1!=i&&(e.preventDefault(),e.stopPropagation(),"function"==typeof t.cellClickCB&&t.cellClickCB(n,e))}}});"#FFFFFF"===a&&(c.style.border="1px solid #E2E4E3"),n.cellView.getContent().setContent(c)}};var s=t.versionExplorerController._setUseWebCommandsOnNative(),a=t.versionExplorerController.areCommandsEnabled(),d=t.versionExplorerController._isFromWebInWinWrapper();!a||t.versionExplorerController._isMIB||1==i||1==d&&1!=s||(t.cellClickCB=function(e,n){if(e.cellModel&&0==n.button&&!t.isProcessingMaturityClick){t.isProcessingMaturityClick=!0;var o=e.nodeModel;t.versionExplorerController.publishEvent("preEventCompletedENOXVersionExplorerShowMaturity",o),setTimeout(function(){t.isProcessingMaturityClick=!1},500)}})}}else t.onCellRequest=function(o){if(!o.isHeader){var i=o.nodeModel.options.grid[t.dataIndex],s=o.cellView.getContent();if(i instanceof Date){var r=n.getLanguage(),a=i.toLocaleString(r,l);s.setHTML(a),s.tooltipInfos&&(s.tooltipInfos.shortHelp=a)}else{var d="";i&&(d=e.String.escapeHTML(i)),s.setHTML(d)}}};return t},getColumns:function(){var e=this._parent();return o.historyConfig&&o.historyConfig.settings&&o.historyConfig.settings.subwayGraph&&Array.isArray(o.historyConfig.settings.subwayGraph.sortColumns)&&o.historyConfig.settings.subwayGraph.sortColumns.length&&e.forEach(function(e){e.isSortable=o.historyConfig.settings.subwayGraph.sortColumns.indexOf(e.dataIndex)>=0}),e}})}),define("DS/ENOXVersionExplorerSubwayListView/VersionExplorerSubwayListView",["UWA/Core","DS/GraphListView/GraphDataGridListView","DS/ENOXVersionExplorerSubwayListView/VersionExplorerColumnManager","DS/ENOXVersionExplorerUtils/VersionExplorerSettings","DS/ENOXVersionExplorerUtils/VersionExplorerEnums","DS/ENOXVersionExplorerUtils/ENOXVersionExplorerUtils","DS/LifecycleServices/LifecycleServicesSettings","DS/UIKIT/Mask","css!DS/ENOXVersionExplorerSubwayListView/styles/VersionExplorerSubwayListView"],function(e,t,n,o,i,s,r,l,a){"use strict";function d(e){var t=[];if(e[0]&&e[1]){if(void 0===e[0].__SUBWAYGRAPHNODE__||void 0===e[1].__SUBWAYGRAPHNODE__)return t;var n=e[0].__SUBWAYGRAPHNODE__.data.parentEdges.find(function(t){return t.parentNode===e[1].__SUBWAYGRAPHNODE__})||e[0].__SUBWAYGRAPHNODE__.data.childEdges.find(function(t){return t.childNode===e[1].__SUBWAYGRAPHNODE__});if(n)t.push(n);else{for(var o,i=0,s=this._grMergeConnections.length;i<s;i++){var r=this._grMergeConnections[i];if(r.grParent===e[0].__SUBWAYGRAPHNODE__&&r.grChild.__SUBWAYGRAPHNODE__===e[1]||r.grParent===e[1].__SUBWAYGRAPHNODE__&&r.grChild===e[0].__SUBWAYGRAPHNODE__){o=r;break}}o&&(o.edge?t.push(o.edge):o.edges&&(t=o.edges))}}return t}return t.extend({_options:void 0,init:function(t){var i=this;this._options=e.extend({columnManager:new n(t),customOnDrop:t.customOnDrop,defaultCellHeight:48,enableListSelection:!0,useGlobalStorage:t.model.useGlobalStorage,globalStorageName:t.model.globalStorageName,versionExplorerController:t.versionExplorerController,onDragStartCell:function(e,t){var n=t.nodeModel._options.data,o=t.nodeModel.options.grid,i=o&&o.contents&&o.contents.length>0?o.contents[0].id:n.id,s={protocol:"3DXContent",version:"1.0",source:"ENOSTDE_AP",data:{items:[{envId:r.getTenant(),serviceId:n.serviceId,contextId:n.contextId,objectId:i,objectType:n.type,displayName:n.displayName+" "+n.revision,session_object:!1}]}};try{e.dataTransfer.effectAllowed="uninitialized",e.dataTransfer.setData("text/searchitems",JSON.stringify(s)),e.dataTransfer.setData("Text",JSON.stringify(s))}catch(t){e.dataTransfer.setData("Text",JSON.stringify(s))}},onDropCell:function(e,t){"function"==typeof this.options.customOnDrop&&this.options.customOnDrop(e)},onDropBlank:function(e,t){"function"==typeof this.options.customOnDrop&&this.options.customOnDrop(e)},onDragOverColumnHeader:function(e,t){return 1!=t.cellView.collectionView.columns[t.columnID].alwaysOn},onDragEnterColumnHeader:function(e,t){return!1},columnDragEnabledFlag:function(e,t){return 1!=t.cellView.collectionView.columns[t.columnID].alwaysOn},onDragStartColumnHeader:function(e,t){return 1!=t.cellView.collectionView.columns[t.columnID].alwaysOn},onDragEndColumnHeader:function(e,t){return i._options.versionExplorerController.saveCustomizedColumns(),!0},onDropColumnHeader:function(e,t){return i._options.versionExplorerController.saveCustomizedColumns(),!0},onContextualEvent:function(e){if(!(e.cellInfos&&e.cellInfos.nodeModel&&e.cellInfos.nodeModel.__MASTER__)){return e.collectionView.buildDefaultContextualMenu(e,{filter:!0,pin:!1,sizeColumnToFit:!1,firstColumnsVisibility:!1,columnsManagement:!1})}this.setActiveCell(e.cellInfos.nodeModel),i._options.onNodeDropdownMenu({cellInfos:e.cellInfos,event:e.data.event})},graphSortingColumnID:["code","creationDate","__GRAPH__"],ascending:o.UserSettings.subwaySortAscending,enableActiveUI:!0,enableKeyboardNavigation:!0},t),this._parent(this._options)},updateSelectionMode:function(e){var t=this._manager;e||this.prepareUpdateColumns(),void 0!==this.layout.getColumnVisibleState("__DROPDOWN__")&&this.options.columnManager[this._model._SELECTION_MODE&i.SELECTION_MODES.WITH_COMMANDS?"showColumns":"hideColumns"](["__DROPDOWN__"]),this._model._SELECTION_MODE&i.SELECTION_MODES.MULTI_SELECT_ONLY?t.options.selection.canMultiSelect=!0:(t.options.selection.canMultiSelect=!1,this._model.getXSO().get().length>1&&this._model.getXSO().empty()),e||this.pushUpdateColumns(),(!(this._model._SELECTION_MODE&i.SELECTION_MODES.MULTI_SELECT_ONLY)||!(this._model._SELECTION_MODE&i.SELECTION_MODES.MULTI_SELECT_ACTIVE))&&this._treeDoc.getXSO().get().length>1&&this._treeDoc.getXSO().empty()},onSelectListView:function(e){if(!this._model._FILTER_ENABLED||e.data.nodeModel.__MASTER__.getAttribute("__filter__")){this._parent(e);var t=this._model.getXSO().get();if(!(this._model._SELECTION_MODE&i.SELECTION_MODES.MULTI_SELECT_ACTIVE)&&t.length>1){for(var n=0;n<t.length;n++)t[n].options.grid.__checked__=!0;e.data.nodeModel.__MASTER__._modelEvents.publish({event:"_ENOXVersionExplorerManageMultiSelect",data:!1})}}else this._model._FILTER_ENABLED&&!e.data.nodeModel.__MASTER__.getAttribute("__filter__")&&(e.data.nodeModel.unselect(),this._processMask(e.data.nodeModel._getRowID(),!0))},onUnselectListView:function(e){this._parent(e)},onHighlightLink:function(e){var t=this._graph,n=d.bind(this)(e.data);t.withLockedUpdate(function(){n.forEach(function(e){t.addToSelection(e)})})},onUnhighlightLink:function(e){var t=this._graph,n=d.bind(this)(e.data);t.withLockedUpdate(function(){n.forEach(function(e){t.removeFromSelection(e)})})},_addEventListeners:function(){var e=this;this._parent(),this._addEvent("LISTVIEWMANAGER","preFullUpdateView",function(t){e._manager.onPostUpdateViewOnce(function(t){e.onUpdateViewComplete.bind(e)(t)})}),this._addEvent("LISTVIEWMANAGER","showColumn",function(t){"creationDate"===e._manager.getDataIndexFromColumnID(t.columnID)&&e._manager._setColumnState(t.columnID,"sort:"+(e.options.ascending?"asc":"desc"))}),this._addEvent("LISTVIEWMANAGER","click",function(t){var n=e._manager.options.columns.find(function(e){return e.dataIndex===t.dataIndex});n&&"function"==typeof n.cellClickCB&&n.cellClickCB(t)}),e._addEvent("MODEL","highlightLink",e.onHighlightLink.bind(this)),e._addEvent("MODEL","unhighlightLink",e.onUnhighlightLink.bind(this))},onMasterNodeAttributeChanged:function(e){e.data;this._parent(e),this.onUpdateViewComplete(e)},_setActive:function(e){this._manager},_setFilter:function(e){this._manager;var t=e._getRowID();this._model._FILTER_ENABLED&&!e.__MASTER__.getAttribute("__filter__")&&this._processMask(t,!0)},onUpdateViewComplete:function(e){var t;this._manager;if("attributeChanged"===e.event&&(t=e.data.nodeModel),t&&t.__LISTVIEWCOPY__)this._setActive(t.__LISTVIEWCOPY__),this._setFilter(t.__LISTVIEWCOPY__);else for(var n,o=0,i=this._treeDoc.getAllDescendants(),s=i.length;o<s;o+=1)n=i[o],this._setActive(n),this._setFilter(n)},_processMask:function(e,t){var n,o=this._manager;"function"==typeof o.processCellsOfRow&&o.processCellsOfRow({rowID:e,minColumnID:0},function(e,o,i){(n=e.getView())&&(t?(l.mask(n.getContent(),""),n.getContent().getElement(".spinner").hide()):l.unmask(n.getContent()))})},onSort:function(e){this._parent(e),"creationDate"===e.columnDataIndex&&o._saveUserSettings("subwaySortAscending",this.options.ascending,this._model.useGlobalStorage,this._model.globalStorageName,this._model.webToWinComSocket)},updateNodes:function(){if(!(this.sortModel&&this.sortModel.length>0)){this.sortModel=[{dataIndex:"creationDate",sort:"desc"}];var e=this.layout.getCellType(this.sortModel[0].dataIndex);this._applySortModel(this.sortModel[0].dataIndex,{typeOfCell:e,sortOrder:this.sortModel[0].sort})}this._parent(),this.layout.saveColumnSortModelInPreferences()},deactivate:function(){this._parent();var e=this._graph;e.withLockedUpdate(function(){for(var t,n=e.edges.first;n;n=t)t=n.next,n.isSelected()&&e.removeFromSelection(n)})},activate:function(){this._parent(),this._updateGraphSelection()},prepareUpdateView:function(){this._removeEvent("MASTER","select"),this._removeEvent("MASTER","unselect"),this._removeEvent("MASTER","attributeChanged")},pushUpdateView:function(){this._addEvent("MASTER","select",this.onSelectMaster.bind(this)),this._addEvent("MASTER","unselect",this.onUnselectMaster.bind(this)),this._addEvent("MASTER","attributeChanged",this.onMasterNodeAttributeChanged.bind(this))},setRowHeight:function(e){var t=this.options.columnManager.getColumns().findIndex(function(e){return"thumbnail"===e.dataIndex&&!e.isHidden})>=0?80:e;return this._parent(t),t},_updateGraphSelection:function(){var e=this._model.getHighlightedLinksData(),t=[],n=this._graph;if(e.length)for(var o=0,i=e.length;o<i;o++)t=t.concat(d.bind(this)(e[o]));n.withLockedUpdate(function(){for(var e,o=n.edges.first;o;o=e)e=o.next,o.isSelected()&&n.removeFromSelection(o);t.forEach(function(e){if(e&&e.getGraph()===n)n.addToSelection(e);else;})})}})});