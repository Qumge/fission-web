(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c3a9f7a"],{"0d8f":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("\n        "+t._s(t.child.title)+"\n      ")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",style:{color:t.child.color},attrs:{"start-val":0,"end-val":t.child.num,duration:2600}})],1)])])},i=[],r=e("ec1b"),s=e.n(r),o={components:{CountTo:s.a},props:{child:{type:Object,required:!0}},watch:{child:{handle:function(t){console.log(t)},deep:!0}},created:function(){console.log(this.child)},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)}}},u=o,c=(e("daab"),e("2877")),l=Object(c["a"])(u,a,i,!1,null,"51f8d12f",null);n["a"]=l.exports},"2c8a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"investMain"},[e("div",{staticClass:"Btn"},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.go_Links_edit()}}},[t._v("发布任务")])],1),t._v(" "),t._l(t.invest,(function(n,a){return e("div",{key:a,staticClass:"investList"},[e("el-row",{staticClass:"investUl"},[e("el-col",{attrs:{span:12}},[e("ul",{staticClass:"investDetail"},[e("li",[t._v("标题："+t._s(n.name))]),t._v(" "),e("li",[t._v("链接："+t._s(n.share_link))]),t._v(" "),e("li",[t._v("h5链接："+t._s(n.h5_link))]),t._v(" "),"1"===t.query?e("li",[t._v("状态：待审核")]):t._e(),t._v(" "),"2"===t.query?e("li",[t._v("状态：进行中")]):t._e(),t._v(" "),"3"===t.query?e("li",[t._v("状态：已结束")]):t._e(),t._v(" "),"4"===t.query?e("li",[t._v("状态：已拒绝")]):t._e(),t._v(" "),e("li",[t._v("任务时间："+t._s(n.valid_from)+"-"+t._s(n.valid_to))]),t._v(" "),e("li",[t._v("金币总数："+t._s(n.coin))])])]),t._v(" "),void 0!==n.list?e("el-col",{staticStyle:{"border-left":"#DBDBDB solid 1px"},attrs:{span:12}},[e("h3",[t._v("数据统计")]),t._v(" "),e("div",{staticClass:"investData"},[e("el-row",{staticClass:"listContainer",staticStyle:{"margin-top":"20px !important"},attrs:{gutter:20}},t._l(n.list,(function(t,n){return e("el-col",{key:n,staticClass:"el-card2",attrs:{span:6}},[e("card",{attrs:{child:t}})],1)})),1)],1)]):t._e()],1)],1)})),t._v(" "),t.investNotice?e("p",{staticClass:"investNotice"},[t._v("暂无数据")]):t._e(),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],2)])},i=[],r=(e("c5f6"),e("0d8f")),s=e("f8a4"),o=e("5f87"),u={components:{Card:r["a"]},props:{query:{type:String,required:!0}},data:function(){return{invest:[{name:"",valid_from:"",valid_to:"",coin:"",list:[]}],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,company_id:"",investNotice:!1}},created:function(){var t=Object(o["a"])();this.company_id=JSON.parse(t).id,this.getList()},methods:{handleCurrentChange:function(t){console.log(t)},go_Links_edit:function(t){void 0===t?this.$router.push({path:"TaskLinksDetail"}):this.$router.push({path:"TaskLinksDetail?id=".concat(t)})},getList:function(){var t=this,n="1"===this.query?"wait":"2"===this.query?"active":"3"===this.query?"overtime":"failed",e={page:this.searchOption.pagination.currentPage,per_page:15,company_id:this.company_id,status:n};Object(s["r"])(e).then((function(n){t.invest=n.data,t.total=Number(n.headers["x-total"]),console.log(n),console.log(t.invest),0===t.invest.length&&(t.investNotice=!0)}))},deleteTask:function(t){var n=this;this.$confirm("该任务将被删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["i"])(t).then((function(t){n.$message({message:"操作成功",type:"success"}),n.getList()}))}))}}},c=u,l=(e("bc139"),e("2877")),d=Object(l["a"])(c,a,i,!1,null,"25b1b70a",null);n["default"]=d.exports},8048:function(t,n,e){},b3137:function(t,n,e){},bc139:function(t,n,e){"use strict";var a=e("b3137"),i=e.n(a);i.a},daab:function(t,n,e){"use strict";var a=e("8048"),i=e.n(a);i.a},ec1b:function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){return function(t){function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/dist/",n(n.s=2)}([function(t,n,e){var a=e(4)(e(1),e(5),null,null);t.exports=a.exports},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(3);n.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,n,e,a){return e*(1-Math.pow(2,-10*t/a))*1024/1023+n}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,a.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,a.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,a.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,a.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var n=t-this.startTime;this.remaining=this.localDuration-n,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(n,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(n,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(n/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(n/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),n<this.localDuration?this.rAF=(0,a.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var n=t.split("."),e=n[0],a=n.length>1?this.decimal+n[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(e);)e=e.replace(i,"$1"+this.separator+"$2");return this.prefix+e+a+this.suffix}},destroyed:function(){(0,a.cancelAnimationFrame)(this.rAF)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=0,i="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)n.requestAnimationFrame=r=function(){},n.cancelAnimationFrame=s=function(){};else{n.requestAnimationFrame=r=window.requestAnimationFrame,n.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,u=0;u<i.length&&(!r||!s);u++)o=i[u],n.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],n.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(n.requestAnimationFrame=r=function(t){var n=(new Date).getTime(),e=Math.max(0,16-(n-a)),i=window.setTimeout((function(){t(n+e)}),e);return a=n+e,i},n.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}n.requestAnimationFrame=r,n.cancelAnimationFrame=s},function(t,n){t.exports=function(t,n,e,a){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var o="function"==typeof r?r.options:r;if(n&&(o.render=n.render,o.staticRenderFns=n.staticRenderFns),e&&(o._scopeId=e),a){var u=Object.create(o.computed||null);Object.keys(a).forEach((function(t){var n=a[t];u[t]=function(){return n}})),o.computed=u}return{esModule:i,exports:r,options:o}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},f8a4:function(t,n,e){"use strict";e.d(n,"u",(function(){return i})),e.d(n,"t",(function(){return r})),e.d(n,"e",(function(){return s})),e.d(n,"s",(function(){return o})),e.d(n,"z",(function(){return u})),e.d(n,"j",(function(){return c})),e.d(n,"l",(function(){return l})),e.d(n,"a",(function(){return d})),e.d(n,"k",(function(){return f})),e.d(n,"v",(function(){return p})),e.d(n,"f",(function(){return h})),e.d(n,"p",(function(){return m})),e.d(n,"c",(function(){return _})),e.d(n,"o",(function(){return v})),e.d(n,"x",(function(){return g})),e.d(n,"h",(function(){return y})),e.d(n,"n",(function(){return k})),e.d(n,"b",(function(){return V})),e.d(n,"m",(function(){return b})),e.d(n,"w",(function(){return w})),e.d(n,"A",(function(){return q})),e.d(n,"g",(function(){return F})),e.d(n,"r",(function(){return x})),e.d(n,"d",(function(){return A})),e.d(n,"q",(function(){return C})),e.d(n,"y",(function(){return D})),e.d(n,"i",(function(){return S}));var a=e("b775");function i(t){return a["a"].get("task_products",{params:t})}function r(t){return a["a"].get("products",{params:t})}function s(t){return a["a"].post("task_products",t)}function o(t){return a["a"].get("task_products/".concat(t))}function u(t,n){return a["a"].patch("task_products/".concat(t),n)}function c(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function d(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function p(t,n){return a["a"].patch("task_articles/".concat(t),n)}function h(t){return a["a"].delete("task_articles/".concat(t))}function m(t){return a["a"].get("task_questionnaires",{params:t})}function _(t){return a["a"].post("task_questionnaires",t)}function v(t){return a["a"].get("task_questionnaires/".concat(t))}function g(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function y(t){return a["a"].delete("task_questionnaires/".concat(t))}function k(t){return a["a"].get("task_game",{params:t})}function V(t){return a["a"].post("task_game",t)}function b(t){return a["a"].get("task_game/".concat(t))}function w(t,n){return a["a"].patch("task_game/".concat(t),n)}function q(t){return a["a"].post("tasks/audit",t)}function F(t){return a["a"].delete("task_game/".concat(t))}function x(t){return a["a"].get("task_links",{params:t})}function A(t){return a["a"].post("task_links",t)}function C(t){return a["a"].get("task_links/".concat(t))}function D(t,n){return a["a"].patch("task_links/".concat(t),n)}function S(t){return a["a"].delete("task_links/".concat(t))}}}]);