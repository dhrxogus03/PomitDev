define("DS/VisuLoaders/OBJReader",["DS/Visualization/Node3D","DS/Visualization/Mesh3D","DS/Visualization/MaterialManager","DS/VisuLoaders/OBJMTLLoader","DS/VisuLoaders/SceneGraphConverter"],function(e,a,i,n,t){"use strict";return function(a,i,o){var r,d,u;r=a,d=void 0!==i?i:null,u=null,this.load=function(a,i,l,s){var D=new e;D.productType="Reference3D";var c=new n(o);c.addEventListener("load",function(e){var a=e.content;u=new t(r,a),D.add(u.getRootNode()),null!==d&&d({hack:!0,updateInfinitePlane:!0}),s&&s()}),c.load(a),i&&i(D)}}}),define("Visualization/OBJReader",["DS/Visualization/OBJReader","DS/DSMigration/DSMigration"],function(e,a){return a.deprecateModule("Visualization/OBJReader"),e});