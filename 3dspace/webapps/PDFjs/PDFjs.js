/*! Copyright 2014 Dassault Syst�mes */
if("undefined"!=typeof PDFJS)define("DS/VENPDFjs",function(){"use strict";return PDFJS});else{const r=window.PDFJS_VERSION||"1.9.426";-1===require.toUrl("DS/VENPDFjs").indexOf(r+"/build/pdf")&&(PDFJS_BASEPATH=require.toUrl("DS/VENPDFjs/"+r),PDFJS_BASEPATH.indexOf("?")>-1&&(PDFJS_BASEPATH=PDFJS_BASEPATH.substring(0,PDFJS_BASEPATH.indexOf("?"))),require.config({paths:{"DS/VENPDFjs":PDFJS_BASEPATH+"/build/pdf","DS/VENPDFjsWorker":PDFJS_BASEPATH+"/build/pdf.worker"},shim:{"DS/VENPDFjs":{deps:["DS/VENPDFjsWorker"],exports:"PDFJS"},"DS/VENPDFjsWorker":{exports:"PDFJSWorker"}}}))}define("DS/PDFjs/PDFjs",["DS/VENPDFjs"],function(r){"use strict";const e=window.PDFJS_VERSION||"1.9.426";return parseInt(e[0],10)>=2&&(r.GlobalWorkerOptions.workerSrc=require.toUrl("DS/VENPDFjsWorker").replace(/pdf\.worker\b/,"pdf.worker.js")),r.cMapUrl=PDFJS_BASEPATH+"/cmaps/",r.cMapPacked=!0,r});