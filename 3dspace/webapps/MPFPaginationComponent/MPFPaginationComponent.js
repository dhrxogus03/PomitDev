define("DS/MPFPaginationComponent/PaginationComponent",["UWA/Core","UWA/Class/View","DS/MPFModel/MPFCollection","DS/MPFServices/ObjectService","css!DS/MPFPaginationComponent/MPFPaginationComponent.css"],function(e,t,s,i){"use strict";const n=Object.freeze({CHANGE_PAGE:"changePage"}),a=t.extend({className:"mpf-pagination",tagName:"nav",setup:function(e={}){i.requiredOfPrototype(this.collection,s,"options.collection must be a MPFCollection"),this.pageSize=e.pageSize||20,this.pageCount=this._computePageCount(),this.currentPage=e.currentPage||1,this.backArrow=this._createBackArrow(),this.nextArrow=this._createNextArrow(),this.pages=this._createPages(),this._refreshControls(),this.listenTo(this.collection,"onReset",this.onCollectionUpdate.bind(this))},render:function(){return this.container.setContent(e.createElement("ol",{class:"mpf-page-selection",html:[this.backArrow,this.pages,this.nextArrow]})),this},destroy:function(){this.stopListening(this.collection),this.collection=null,this._parent()},_createBackArrow:function(){return e.createElement("li",{class:"mpf-pagination-item",html:{tag:"a",class:"mpf-link fonticon fonticon-chevron-left"},events:{click:this._goToPreviousPage.bind(this)}})},_goToPreviousPage:function(){const e=this.currentPage-1;e>0&&this.changePage(e)},_createNextArrow:function(){return e.createElement("li",{class:"mpf-pagination-item",html:{tag:"a",class:"mpf-link fonticon fonticon-chevron-right"},events:{click:this._goToNextPage.bind(this)}})},_goToNextPage:function(){const e=this.currentPage+1;e<=this.pageCount&&this.changePage(e)},_createPages:function(){const t=[],s=Math.max(2,this.currentPage-5),i=Math.min(this.pageCount-1,this.currentPage+5),n=this._getDisplayedXsPages();t.push(this._createPage(1)),s>2&&t.push(this._createEllipsis()),n.length>1&&n[0]>2&&t.push(this._createEllipsis({xsOnly:!0}));for(let e=s;e<=i;e++)t.push(this._createPage(e,n));return i<this.pageCount-1&&t.push(this._createEllipsis()),n.length>1&&n[n.length-1]<this.pageCount-1&&t.push(this._createEllipsis({xsOnly:!0})),this.pageCount>1&&t.push(this._createPage(this.pageCount)),e.createElement("li",{class:"mpf-pagination-item",html:{tag:"ol",class:"mpf-pages",html:t}})},_getDisplayedXsPages(){const e=this._getPagesArray(this.currentPage,this.pageCount,2);return e.join("").length<10?e:this._getPagesArray(this.currentPage,this.pageCount,1)},_getPagesArray(e,t,s){const i=Math.max(2,e-s),n=Math.min(t,e+s),a=[];for(let e=i;e<=n;e++)a.push(e);return a},_createEllipsis:function(t){const s=["mpf-pagination-item"];return t&&!0===t.xsOnly?s.push("mpf-visible-xs"):s.push("mpf-hidden-xs"),e.createElement("li",{class:s.join(" "),text:"…"})},_createPage:function(t,s){const i=["mpf-pagination-item"];s&&!s.includes(t)&&i.push("mpf-hidden-xs");const n=e.createElement("li",{class:i.join(" "),html:[{tag:"a",class:"mpf-link",text:t}],events:{click:this.changePage.bind(this,t)}});return n.setData("pageNumber",t),n},_computePageCount:function(){const e=this.collection.getTotalModelCount();return Math.ceil(e/this.pageSize)},changePage:function(e,t={}){e>0&&e<=this.pageCount&&(this.currentPage=e,!0!==t.silent&&this.dispatchEvent(n.CHANGE_PAGE,{page:this.currentPage}),this._refreshControls())},_refreshControls:function(){this.backArrow.removeClassName("mpf-disabled"),this.nextArrow.removeClassName("mpf-disabled"),1===this.currentPage&&this.backArrow.addClassName("mpf-disabled"),this.currentPage===this.pageCount&&this.nextArrow.addClassName("mpf-disabled"),this._highlightSelectedPage()},_highlightSelectedPage:function(){this.pages.getElements(".mpf-pagination-item").forEach(function(e){e.getData("pageNumber")===this.currentPage?e.addClassName("mpf-selected"):e.removeClassName("mpf-selected")},this)},onCollectionUpdate:function(){this.pageCount=this._computePageCount(),this.backArrow=this._createBackArrow(),this.nextArrow=this._createNextArrow(),this.pages=this._createPages(),this._refreshControls(),this.render()}});return a.Events=Object.freeze(n),a});