define("DS/ENOCharacteristicsApp/model/CharacteristicsTreeDocument",["UWA/Core","UWA/Class","DS/ENOCharacteristicsApp/model/TreeDocument","DS/ENOCharacteristicsApp/utils/Constants","DS/TreeModel/TreeNodeModel","DS/XSRCommonComponents/utils/TypeUtils","DS/ENOCharacteristicsApp/utils/Notification","DS/TreeModel/DataModelSet","i18n!DS/ENOCharacteristicsApp/assets/nls/ENOCharacteristicsApp"],function(e,t,o,r,n,a,i,d,s){"use strict";return t.extend({init:function(e){e&&(this.modelEvents=e.modelEvents?e.modelEvents:null,this.enableCrossWidgetFeature=!!e.enableCrossWidgetFeature&&e.enableCrossWidgetFeature,this.enableRightInteractivity=e.enableRightInteractivity,this.currentTabKey=e.currentTabKey?e.currentTabKey:void 0,this.parentModel=e.parentModel,this.appCore=e.appCore)},getTreeDocuments:function(e){var t=new d;if(this.model=new o({dataModelSet:t,useAsyncPreExpand:!1,shouldAcceptDrop:function(e){if(a.isPerformanceSpecification(e.draggedNodes[0].getTypeActualName()))return i.clearNotifications(),i.displayNotification({eventID:"error",msg:s.Error_PerformanceSpec_Resequence}),!1;if(a.isPerformanceCharacteristics(e.draggedNodes[0].getTypeActualName())){if("IN_WORK"==e.draggedNodes[0].getParent().getMaturityActualName())return e.draggedTreeNodeModel.getParent()===e.dropNode.getParent()?"middle"!==e.dropPosition&&e.draggedTreeNodeModel.getParent()===e.dropNode.getParent():(i.clearNotifications(),i.displayNotification({eventID:"error",msg:s.Error_NonParent_Resequence}),!1);i.clearNotifications(),i.displayNotification({eventID:"error",msg:s.Error_PerformanceChar_Resequence})}}}),this.model.setUseChangeTransactionMode(!0),this.model.prepareUpdate(),e){var r=this;e.forEach(function(e){r.model.addRoot(e.getTreeModel())})}return this.model.pushUpdate(),this.model.expandAll(),this.addEventsOnModel(),this.model},groupRoots:function(e){var t=Array.isArray(e)?{propertiesToGroup:e}:{propertiesToGroup:[e]};this.model.groupRoots(t),this.model.expandAll()},publishSelectedNodesInGrid:function(){let e=this.model.getSelectedNodes(),t=e.length;if(1==t){let o=!e[0]._canBeGrouped(),n=e[0].options.grid["ds6w:type"];o||this.modelEvents.publish({event:r.CHARACTERISTICS_GRID_TOTAL_SELECTED_NODES,data:{count:t,currentModel:e,gridModel:this.model,type:n}})}else this.modelEvents.publish({event:r.CHARACTERISTICS_GRID_TOTAL_SELECTED_NODES,data:{count:t,currentModel:e,gridModel:this.model}})},manageTriptychRightPanel:function(){var e=this,t=e.model.getSelectedNodes();if("DELRME_AP"!==widget.data.appId&&"DELRMEC_AP"!==widget.data.appId){var o=e.appCore.triptychManager;if(o.setLaunchFromIcon(!1),t&&o.isRightPanelVisible){var n=t.length;if(n>1)e.appCore.basicModelEvents.publish({event:r.EVENT_SPEC_GRID_NODES_SELECTION_ACTION,data:{currentTab:e.currentTabKey,count:n,commandId:o.commandId,currentModel:e.model}});else if(1==n){!t[0]._canBeGrouped()||setTimeout(function(){e.appCore.basicModelEvents.publish({event:r.EVENT_SPEC_GRID_NODES_SELECTION_ACTION,data:{currentTab:e.currentTabKey,count:n,commandId:o.commandId,currentModel:t[0]}})},50)}else setTimeout(function(){e.appCore.basicModelEvents.publish({event:r.EVENT_SPEC_GRID_NODES_SELECTION_ACTION,data:{currentTab:e.currentTabKey,count:n,commandId:o.commandId,currentModel:t[0],parentModel:void 0}})},50)}}},addEventsOnModel:function(){var e=this,t=function(){var t=e.model.getSelectedNodes(),o=t.length;o=t?t.length:0;e.modelEvents.publish({event:r.UPDATE_CHARVIEW_TOOLBOOR_COUNT,data:o})};this.model.getXSO().onPostAdd(function(o){for(var r=0;r<o.length;r++){var n=o[r];!n._canBeGrouped()?n.selectAll():t()}e.enableRightInteractivity&&(e.manageTriptychRightPanel(),e.publishSelectedNodesInGrid())}),this.model.getXSO().onPostRemove(function(o){for(var r=0;r<o.length;r++){var n=o[r];!n._canBeGrouped()?n.unselectAll():t()}e.enableRightInteractivity&&(e.manageTriptychRightPanel(),e.publishSelectedNodesInGrid())})},addRoot:function(e,t){var o=function(e){var t=e.getTreeModel();r.model.addRoot(t)};if(e){var r=this,n=!1!==t;Array.isArray(e)?e.forEach(function(e){o(e),n&&e.select()}):e&&(o(e),n&&e.select())}this.model.acceptChanges()},removeRoot:function(e){if(e){var t=this,o=function(e){t.model.removeRoot(e);e.getParent();t.model.acceptChanges()};Array.isArray(e)?e.forEach(function(e){o(e)}):o(e)}},destroy:function(){this.platFormSusbcribtion&&PlatformAPI.unsubscribe(this.platFormSusbcribtion)}})});