define("DS/CfgDictionary/CfgDictionaryConverter",[],function(){"use strict";var a={convertFrom16XtoV2flat:function(a){var e={variantClasses:[],packs:[],options:[],rules:[]},i=a.features,n=0,o=0;for(n=0;n<i.length;n+=1){var s=i[n];if("Single"===s.selectionType){var t={};for(t.id=s.logicalId,t.image=s.image,t.name=s.displayValue,t.variants=[],o=0;o<s.options.length;o+=1){var r={};r.id=s.options[o].parentRelLogicalId,r.image=s.options[o].image,r.name=s.options[o].displayValue,t.variants.push(r)}e.variantClasses.push(t)}else for(o=0;o<s.options.length;o+=1){var l={};l.id=s.options[o].parentRelLogicalId,l.image=s.options[o].image,l.name=s.options[o].displayValue,e.options.push(l)}}var p=a.rules;for(n=0;n<p.length;n+=1){var g={};g.id=p[n].id,g.name=p[n].name,e.rules.push(g)}return e}};return a});