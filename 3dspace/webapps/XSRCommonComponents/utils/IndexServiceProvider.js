define("DS/XSRCommonComponents/utils/IndexServiceProvider",["UWA/Class","UWA/Promise","DS/WAFData/WAFData","DS/XSRCommonComponents/utils/RequestUtil","DS/XSRCommonComponents/utils/Constants"],function(e,t,n,s,a){"use strict";var i=["resourceid","physicalid","ds6w:label","type_icon_url","ds6w:description","ds6w:globalType","ds6w:reserved","ds6w:cadMaster","ds6wg:EnterpriseExtension.V_PartNumber","ds6wg:PLMReference.V_isLastVersion","ds6w:reservedBy","ds6w:type","ds6w:responsible","ds6w:identifier","ds6wg:MaterialUsageExtension.DeclaredQuantity","ds6wg:revision","ds6w:kind","thumbnail_2d","ds6w:modified","ds6w:created"];const r=["ds6w:label","ds6w:type","physicalid","ro.plminstance.V_treeorder"];return e.extend({init:function(e){this._parent(e),this.platFormId=s.getPlatformId()},getSearchResults:function(e,a,i,r,o,d){var l=this,c=s.getSecurityContext()?s.getSecurityContext():d;return new t(function(t,s){var d=e,u={label:"Recent",version:2,order_field:"ds6w:modified",order_by:"desc",nresults:500,tenant:l.platFormId,locale:widget.lang,select_predicate:i,with_synthesis:!0,with_nls:!0,login:{"3dspace":{SecurityContext:c}},specific_source_parameter:{drive:{additional_query:' AND NOT ([policy]:"Version")'}},resourceid_in:o||void 0};u[a.key]=a.value,r&&(u.next_start=r),n.authenticatedRequest(d,{method:"POST",headers:{"content-type":"application/json",SecurityContext:c},data:JSON.stringify(u),onComplete:function(e){t(e)},onFailure:s})})},searchSpecifications:function(e,t,n,a,i){var r=s.get3DSearchURL()+"/search?tenant:"+this.platFormId;return this.getSearchResults(r,e,t,n,a,i)},recentSpecifications:function(e,t,n){var a=s.get3DSearchURL()+"/recent?tenant:"+this.platFormId;return this.getSearchResults(a,e,t,n)},fetchItemData:function(e,n){var a=this,r={label:"XSR-"+s.getloginUser().id+"-"+(new Date).getTime(),physicalid:e,select_file:["icon","thumbnail_2d"],tenant:a.platFormId,select_predicate:n&&null!=n?n:i};return new t(function(e,t){s.send3DSpaceRequest("resources/enoauthoring/fetch/v1?tenant="+a.platFormId,"POST",{type:"json",headers:{"Content-type":"application/json"},data:JSON.stringify(r)},e,t)})},fetchItemDataByFederated:function(e){var n=this,a="XSR-"+s.getloginUser().id+"-"+(new Date).getTime(),i={with_indexing_date:!1,with_synthesis:!1,with_synthesis_attribute:!1,with_nls:!1,nresults:1,locale:widget.lang,query:"physicalid:"+e,tenant:n.platFormId,start:0,label:a,select_file:["icon","thumbnail_2d"]};return new t(function(e,t){s.send3DSpaceRequestFedSearch("search?tenant="+n.platFormId,"POST",{type:"json",headers:{"Content-type":"application/json"},data:JSON.stringify(i)},e,t)})},expandV2:function(e){var n=this;let a="XSR-"+s.getloginUser().id+"-"+(new Date).getTime(),i={descending_condition_relation:{uql:'NOT (flattenedtaxonomies:"reltypes/XCADBaseDependency") AND ((flattenedtaxonomies:"reltypes/PLMInstance") OR (flattenedtaxonomies:"reltypes/MustBeMadeFrom"))'},descending_condition_object:{uql:'ds6w_58_globaltype:"ds6w:Document" OR ds6w_58_globaltype:"ds6w:Part" OR (flattenedtaxonomies:"types/Document") OR (flattenedtaxonomies:"types/Raw_Material")'}};e.isFormulaBOM&&(i={descending_condition_relation:{uql:'NOT (flattenedtaxonomies:"reltypes/XCADBaseDependency") AND ((flattenedtaxonomies:"reltypes/PLMInstance"))'},descending_condition_object:{uql:'ds6w_58_globaltype:"ds6w:Part" OR (flattenedtaxonomies:"types/Raw_Material")'}});let r={physical_id:e.pid},o=[{prefix_filter:{prefix_path:[{physical_id_path:[e.pid]}]}}];e.filter?o.push({and:{filters:[e.filter]}}):e.isFormulaBOM?o.push({and:{filters:[{sequence_filter:{sequence:[{uql:'((flattenedtaxonomies:"reltypes/PLMInstance")) AND (NOT (ds6wg_58_synchroebomext_46_v_95_inebomuser:"FALSE" ))'}]}}]}}):o.push({and:{filters:[{sequence_filter:{sequence:[{uql:'((flattenedtaxonomies:"reltypes/PLMInstance") OR (flattenedtaxonomies:"reltypes/MustBeMadeFrom")) AND (NOT (ds6wg_58_synchroebomext_46_v_95_inebomuser:"FALSE" ))'}]}}]}});let d={hits:{predefined_computation:["icons","urlstream|thumbnail_2d|2dthb"]},select_object:["ds6w:label","ds6w:modified","ds6w:created","ds6w:description","ds6wg:revision","ds6w:cadMaster","ds6w:responsible","ds6w:status","ds6w:type","ds6wg:EnterpriseExtension.V_PartNumber","ds6wg:MaterialUsageExtension.DeclaredQuantity","ds6wg:DELFmiContQuantity_Mass.V_ContQuantity","ds6wg:DELFmiContQuantity_Volume.V_ContQuantity","ds6wg:raw_material.v_dimensiontype","type","physicalid","ds6w:policy","ds6w:reservedBy","ds6w:globalType","ds6w:manufacturable","pathsr","ds6wg:PLMReference.V_isLastVersion","ds6w:reserved","ds6w:identifier","ds6w:docextension","islastrevision","type","policy","current","ds6wg:plmcorereference.v_isterminal","ds6wg:raw_material.v_dimensiontype"],select_relation:["ds6w:label","ds6w:type","ds6wg:SynchroEBOMExt.V_InEBOMUser","physicalid","ro.plminstance.V_treeorder","ds6wg:raw_material.v_dimensiontype","ro.madefromquantity_length.V_ContQuantity","ro.madefromquantity_mass.V_ContQuantity","ro.madefromquantity_area.V_ContQuantity","ro.madefromquantity_volume.V_ContQuantity","ro.madefromquantity_AsRequired.AsRequired","ro.VPMInstanceQuantity_Area.V_ContQuantity","ro.VPMInstanceQuantity_Mass.V_ContQuantity","ro.VPMInstanceQuantity_Volume.V_ContQuantity","ro.VPMInstanceQuantity_Length.V_ContQuantity","ro.VPMInstanceQuantity_AsRequired.AsRequired","ds6wg:madefrom_referencedescription.iscomputed","ds6wg:madefrom_referencedescription.referencename","type"],format:"entity_relation_occurrence"};e.isFormulaBOM&&d.select_relation.push(...["ro.FormulaIngredientPercent.Loss","ro.FormulaIngredientPercent.Max","ro.FormulaIngredientPercent.Min","ro.FormulaIngredientPercent.Target","ro.FormulaIngredientQuantityRange_Mass.Max","ro.FormulaIngredientQuantityRange_Mass.Min"]),e.instanceAttributes&&(d.select_relation=e.selRelations,d.select_object=e.selObject);let l={batch:{expands:[{graph:i,label:a,root:r,filter:{and:{filters:o}}}]},outputs:d};e.level&&(l.batch.expands[0].aggregation_processors=[{truncate:{max_distance_from_prefix:e.level,prefix_filter:{prefix_path:[{physical_id_path:[e.pid]}]}}}]);var c=s.getSecurityContext()?s.getSecurityContext():extApp_SC,u=s.getSecurityToken();return new t(function(e,t){s.send3DSpaceRequest("cvservlet/progressiveexpand/v2?tenant="+n.platFormId+"&output_format=cvjson","POST",{type:"json",headers:{"Content-type":"application/json;",Securitycontext:c,Securitytoken:u},data:JSON.stringify(l)},e,t)})},dbExpand:function(e){let n=this,a="XSR-"+s.getloginUser().id+"-"+(new Date).getTime(),o=Object.assign(["ds6w:status","ds6w:policy",...i]),d={no_type_filter_rel:["XCADBaseDependency"],expand_iter:void 0===e.level?"1":e.level,select_bo:o,select_rel:r,label:a,tenant:n.platFormId,root_path_physicalid:[e.pids]};return new t(function(e,t){s.send3DSpaceRequest("resources/enoauthoring/expand/v1?tenant="+n.platFormId,"POST",{type:"json",headers:{"Content-type":"application/json;"},data:JSON.stringify(d)},e,t)})},expand:function(e,n,o,d){var l=this;a.TYPE_DOCUMENT;let c="XSR-"+s.getloginUser().id+"-"+(new Date).getTime();var u={no_type_filter_rel:["XCADBaseDependency"],expand_iter:void 0===d?"1":d,select_bo:i,select_rel:r,label:c,tenant:l.platFormId,root_path_physicalid:[e]};return new t(function(e,t){s.send3DSpaceRequest("resources/enoauthoring/expand/v1?tenant="+l.platFormId,"POST",{type:"json",headers:{"Content-type":"application/json;"},data:JSON.stringify(u)},e,t)})},searchGlobal:function(e,t,n){var a=s.get3DSearchURL()+"/search";return this.getSearchResults(a,t,e,n)}})});