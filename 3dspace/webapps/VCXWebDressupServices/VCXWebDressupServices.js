define("DS/VCXWebDressupServices/ViewerUtils",["require","exports","DS/VCXWebVisualization/VCXVisuManager","DS/Visualization/WebGLV6Viewer","DS/Visualization/Viewpoint"],function(e,t,r,i,n){"use strict";return class{static createViewer(e,t,o,a){var g,s;let d=e.getManager("VCXContextManager").getRootNode();var l=r.getViewerOptions();l.div=t,l.planeV2=a.planeV2;let V=new i(l);V.setIdPathMatcher(a.getIdPathMatcher());let c=new n({viewer:V,angle:45});V.setHighlight(!1),V.addViewpoint(c),V.displayPoints(!0),V.setReferenceAxisSystem(!1);var p=V.getRobot();p&&p.setVisibility(!1),V.setOIT(!0);var u=null===(s=null===(g=e.getManager("VCXDressupManager"))||void 0===g?void 0:g.QueryInterface("W3AISGNodeHolder"))||void 0===s?void 0:s.getSGNode();u&&V.addNode(u),V.addNode(d),V.getSceneGraphOverrideSetManager().pushSceneGraphOverrideSet(e.getManager("VCXContextManager").getSharedSceneGraphOverrideSet());var h=a.currentViewpoint;c.setProjectionType(h.getProjectionType()),c.setPixelCulling(h.camera.pixelCulling),c.getControl().setRotationRolling(!1),c.setAngle(h.getAngle()),c.setEyePosition(h.getEyePosition().clone()),c.setTarget(h.getTarget().clone()),c.setUpDirection(h.getUpDirection().clone()),e.getManager("VCXContextManager").addViewer(o,V);let v=e.getManager("VCXVisuManager").getActiveViewport().QueryInterface("VCXIModifiable");var C=v.GetProperties();v._forceRefresh=!0,C.onEachProperty(function(e,t){v.OnChangeProperty(e,t.GetPropertyValue())}),v.OnChangePropertiesEnd();var y=v.QueryInterface("W3AISGNodeHolder");return y&&y.setSGNodeDirty(!0),v._forceRefresh=!1,v.GetObject().setLightingMode(v.GetPropertyValue("Render.Lighting.Override"),v.GetPropertyValue("Render.Lighting.Mode"),v.GetPropertyValue("Render.Lighting.Intensity"),v.GetPropertyValue("Render.Lighting.Static")),V}static disposeViewer(e,t,r){for(;r.getRootNode().getChildren().length;)r.getRootNode().removeChild(r.getRootNode().getChildren()[0]);r.removeViewpoint(0),r.dispose(),r=null,e.getManager("VCXContextManager").removeViewer(t)}}});