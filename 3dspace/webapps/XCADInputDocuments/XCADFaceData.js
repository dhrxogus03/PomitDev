define("DS/XCADInputDocuments/XCADFaceData",[],function(){"use strict";function e(){this.vertices=[],this.normals=[],this.singleTrianglesIndices=[],this.stripTrianglesIndices=[],this.nbVertexPerStripTriangle=[],this.fanTrianglesIndices=[],this.nbVertexPerFanTriangle=[]}return e.prototype={getFanTrianglesVertexPosition:function(e){return e},getNormalsNumber:function(){return void 0===this.normals?0:this.normals.length/3},getSingleTrianglesNumber:function(){return void 0===this.singleTrianglesIndices?0:this.singleTrianglesIndices.length/3},getStripTrianglesVertexPosition:function(e){return e},getVerticesNumber:function(){return void 0===this.vertices?0:this.vertices.length/3},setNormalAt:function(e,n,t,i){var s=3*e;this.normals[s++]=n,this.normals[s++]=t,this.normals[s]=i}},e});