(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6baed356"],{"0d8f":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("\n        "+t._s(t.child.title)+"\n      ")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",style:{color:t.child.color},attrs:{"start-val":0,"end-val":t.child.num,duration:2600}})],1)])])},i=[],r=e("ec1b"),s=e.n(r),o={components:{CountTo:s.a},props:{child:{type:Object,required:!0}},watch:{child:{handle:function(t){console.log(t)},deep:!0}},created:function(){console.log(this.child)},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)}}},u=o,c=(e("daab"),e("2877")),l=Object(c["a"])(u,a,i,!1,null,"51f8d12f",null);n["a"]=l.exports},"3eef":function(t,n,e){},"7a89":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("el-tabs",{staticClass:"tabContainer",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(n){t.activeName=n},expression:"activeName"}},t._l(t.games,(function(n,a){return e("el-tab-pane",{key:a,attrs:{label:n.title,name:n.name}},[e("div",{staticClass:"investMain"},[e("div",{staticClass:"Btn"},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.go_game_edit()}}},[t._v("发布任务")])],1),t._v(" "),t._l(t.invest,(function(n,a){return e("div",{key:a,staticClass:"investList"},[e("el-row",{staticClass:"investUl"},[e("el-col",{attrs:{span:12}},[e("ul",{staticClass:"investDetail"},[e("li",[t._v("\n                  活动名称："+t._s(null===n.game?"":n.game.name)+"\n                ")]),t._v(" "),e("li",[t._v("\n                  状态："+t._s(n.get_status)+"\n                ")]),t._v(" "),e("li",[t._v("任务时间："+t._s(n.valid_from)+" - "+t._s(n.valid_to))]),t._v(" "),e("li",[t._v("剩余金币："+t._s(n.residue_coin))])]),t._v(" "),e("el-button",{staticClass:"btn",on:{click:function(e){return t.go_game_edit(n.id)}}},[t._v("编辑活动")]),t._v(" "),e("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.go_prize}},[t._v("奖品管理")]),t._v(" "),e("el-button",{staticClass:"btn",attrs:{type:"success"}},[t._v("数据统计")]),t._v(" "),e("el-button",{staticClass:"btn",attrs:{type:"info"},on:{click:function(e){return t.deleteTask(n.id)}}},[t._v("删除")])],1),t._v(" "),void 0!==n.list?e("el-col",{staticStyle:{"border-left":"#DBDBDB solid 1px"},attrs:{span:12}},[e("h3",[t._v("数据统计")]),t._v(" "),e("div",{staticClass:"investData"},[e("el-row",{staticClass:"listContainer",staticStyle:{"margin-top":"20px !important"},attrs:{gutter:20}},t._l(n.list,(function(t,n){return e("el-col",{key:n,staticClass:"el-card2",attrs:{span:8}},[e("card",{attrs:{child:t}})],1)})),1)],1)]):t._e()],1)],1)})),t._v(" "),t.investNotice?e("p",{staticClass:"investNotice"},[t._v("暂无数据")]):t._e(),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],2)])})),1)],1)},i=[],r=(e("c5f6"),e("0d8f")),s=e("f8a4"),o=e("5f87"),u={components:{Card:r["a"]},data:function(){return{activeName:"Game::Wheel",company_id:"",games:[{title:"大转盘",name:"Game::Wheel"},{title:"砸金蛋",name:"Game::Egg"},{title:"刮刮卡",name:"Game::Scratch"}],invest:[{game:{name:""},status:1,valid_from:"",valid_to:"",residue_coin:"",list:[{title:"分享数",num:4621},{title:"浏览数",num:4621},{title:"分享消耗金币",num:4621},{title:"问卷收集",num:4621},{title:"问卷消耗金币",num:4621},{title:"获客成本（金币）",num:4621}]}],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,investNotice:!1}},created:function(){var t=Object(o["a"])();this.company_id=JSON.parse(t).id,console.log(this.company_id,t),this.getlist()},methods:{handleClick:function(t,n){this.getlist()},handleCurrentChange:function(t){console.log(t)},go_prize:function(){this.$router.push({path:"businessPrizeManagement"})},go_game_edit:function(t){var n="Game::Wheel"===this.activeName?"1":"Game::Tiger"===this.activeName?"2":"3";void 0!==t?this.$router.push({path:"BusinessGameTaskDetails?id=".concat(t,"&type=").concat(n)}):this.$router.push({path:"BusinessGameTaskDetails?type=".concat(n)})},getlist:function(){var t=this;console.log(this.company_id);var n={type:this.activeName,company_id:this.company_id,status:"",page:this.searchOption.pagination.currentPage,per_page:15};Object(s["n"])(n).then((function(n){console.log(n),t.invest=n.data,t.total=Number(n.headers["x-total"])}))},deleteTask:function(t){var n=this;this.$confirm("该任务将被删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["g"])(t).then((function(t){n.$message({message:"操作成功",type:"success"}),n.getList()}))}))}}},c=u,l=(e("85e7"),e("2877")),d=Object(l["a"])(c,a,i,!1,null,"1d9a99df",null);n["default"]=d.exports},8048:function(t,n,e){},"85e7":function(t,n,e){"use strict";var a=e("3eef"),i=e.n(a);i.a},daab:function(t,n,e){"use strict";var a=e("8048"),i=e.n(a);i.a},ec1b:function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){return function(t){function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/dist/",n(n.s=2)}([function(t,n,e){var a=e(4)(e(1),e(5),null,null);t.exports=a.exports},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(3);n.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,n,e,a){return e*(1-Math.pow(2,-10*t/a))*1024/1023+n}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,a.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,a.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,a.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,a.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var n=t-this.startTime;this.remaining=this.localDuration-n,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(n,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(n,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(n/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(n/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),n<this.localDuration?this.rAF=(0,a.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var n=t.split("."),e=n[0],a=n.length>1?this.decimal+n[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(e);)e=e.replace(i,"$1"+this.separator+"$2");return this.prefix+e+a+this.suffix}},destroyed:function(){(0,a.cancelAnimationFrame)(this.rAF)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=0,i="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)n.requestAnimationFrame=r=function(){},n.cancelAnimationFrame=s=function(){};else{n.requestAnimationFrame=r=window.requestAnimationFrame,n.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,u=0;u<i.length&&(!r||!s);u++)o=i[u],n.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],n.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(n.requestAnimationFrame=r=function(t){var n=(new Date).getTime(),e=Math.max(0,16-(n-a)),i=window.setTimeout((function(){t(n+e)}),e);return a=n+e,i},n.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}n.requestAnimationFrame=r,n.cancelAnimationFrame=s},function(t,n){t.exports=function(t,n,e,a){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var o="function"==typeof r?r.options:r;if(n&&(o.render=n.render,o.staticRenderFns=n.staticRenderFns),e&&(o._scopeId=e),a){var u=Object.create(o.computed||null);Object.keys(a).forEach((function(t){var n=a[t];u[t]=function(){return n}})),o.computed=u}return{esModule:i,exports:r,options:o}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},f8a4:function(t,n,e){"use strict";e.d(n,"u",(function(){return i})),e.d(n,"t",(function(){return r})),e.d(n,"e",(function(){return s})),e.d(n,"s",(function(){return o})),e.d(n,"z",(function(){return u})),e.d(n,"j",(function(){return c})),e.d(n,"l",(function(){return l})),e.d(n,"a",(function(){return d})),e.d(n,"k",(function(){return f})),e.d(n,"v",(function(){return p})),e.d(n,"f",(function(){return h})),e.d(n,"p",(function(){return m})),e.d(n,"c",(function(){return _})),e.d(n,"o",(function(){return v})),e.d(n,"x",(function(){return g})),e.d(n,"h",(function(){return b})),e.d(n,"n",(function(){return y})),e.d(n,"b",(function(){return k})),e.d(n,"m",(function(){return V})),e.d(n,"w",(function(){return w})),e.d(n,"A",(function(){return C})),e.d(n,"g",(function(){return F})),e.d(n,"r",(function(){return x})),e.d(n,"d",(function(){return q})),e.d(n,"q",(function(){return A})),e.d(n,"y",(function(){return N})),e.d(n,"i",(function(){return D}));var a=e("b775");function i(t){return a["a"].get("task_products",{params:t})}function r(t){return a["a"].get("products",{params:t})}function s(t){return a["a"].post("task_products",t)}function o(t){return a["a"].get("task_products/".concat(t))}function u(t,n){return a["a"].patch("task_products/".concat(t),n)}function c(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function d(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function p(t,n){return a["a"].patch("task_articles/".concat(t),n)}function h(t){return a["a"].delete("task_articles/".concat(t))}function m(t){return a["a"].get("task_questionnaires",{params:t})}function _(t){return a["a"].post("task_questionnaires",t)}function v(t){return a["a"].get("task_questionnaires/".concat(t))}function g(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function b(t){return a["a"].delete("task_questionnaires/".concat(t))}function y(t){return a["a"].get("task_game",{params:t})}function k(t){return a["a"].post("task_game",t)}function V(t){return a["a"].get("task_game/".concat(t))}function w(t,n){return a["a"].patch("task_game/".concat(t),n)}function C(t){return a["a"].post("tasks/audit",t)}function F(t){return a["a"].delete("task_game/".concat(t))}function x(t){return a["a"].get("task_links",{params:t})}function q(t){return a["a"].post("task_links",t)}function A(t){return a["a"].get("task_links/".concat(t))}function N(t,n){return a["a"].patch("task_links/".concat(t),n)}function D(t){return a["a"].delete("task_links/".concat(t))}}}]);