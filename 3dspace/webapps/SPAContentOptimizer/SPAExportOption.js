/*!  Copyright 2015 Dassault Systemes. All rights reserved. */
define("DS/SPAContentOptimizer/SPAExportOption",["DS/CSICommandBinder/CSICommandBinder"],function(t){"use strict";var e=function(){this.exportIgesOptions=null,this.exportStepOptions=null};return t.declareType({type:"SPAExportOption",serialize:function(t,e){return t.writeObject("exportIgesOptions","COExportIgesOptions",e.exportIgesOptions),t.writeObject("exportStepOptions","COExportStepOptions",e.exportStepOptions),!0},unserialize:function(t){var p=new e;return p.exportIgesOptions=t.readObject("exportIgesOptions","COExportIgesOptions"),p.exportStepOptions=t.readObject("exportStepOptions","COExportStepOptions"),p}}),e});