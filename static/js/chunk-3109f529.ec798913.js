(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3109f529"],{8883:function(t,n,e){},f17e:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"investMain"},[e("div",{staticClass:"Btn"},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.go_read_edit()}}},[t._v("发布任务")])],1),t._v(" "),t._l(t.invest,(function(n,a){return e("div",{key:a,staticClass:"investList"},[e("el-row",{staticClass:"investUl"},[e("el-col",{attrs:{span:12}},[e("ul",{staticClass:"investDetail",staticStyle:{"border-right":"#DBDBDB solid 1px"}},[e("li",[t._v("\n              "+t._s(null===n.article?"":n.article.subject)+"\n            ")]),t._v(" "),"1"===t.query?e("li",[t._v("状态：待审核")]):t._e(),t._v(" "),"2"===t.query?e("li",[t._v("状态：进行中")]):t._e(),t._v(" "),"3"===t.query?e("li",[t._v("状态：已结束")]):t._e(),t._v(" "),"4"===t.query?e("li",[t._v("状态：已拒绝")]):t._e(),t._v(" "),e("li",[t._v("任务时间："+t._s(n.valid_from)+" - "+t._s(n.valid_to)+" ")]),t._v(" "),e("li",[t._v("金币总数："+t._s(n.coin))])]),t._v(" "),"4"===t.query?e("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){return t.go_read_edit(n.id)}}},[t._v("编辑")]):t._e(),t._v(" "),"4"===t.query?e("el-button",{staticClass:"btn",attrs:{type:"success"},on:{click:function(e){return t.deleteTask(n.id)}}},[t._v("删除")]):t._e(),t._v(" "),e("el-button",{staticClass:"btn",on:{click:function(e){return t.shareDetail(n.id)}}},[t._v("分享日志详情")])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("h3",[t._v("数据统计")]),t._v(" "),e("div",{staticClass:"data"},[e("el-row",[e("el-col",{staticClass:"dataItme",attrs:{span:6}},[e("h3",[t._v("分享数")]),t._v(" "),e("h3",[t._v(t._s(n.share_num))])]),t._v(" "),e("el-col",{staticClass:"dataItme",attrs:{span:6}},[e("h3",[t._v("浏览数")]),t._v(" "),e("h3",[t._v(t._s(n.view_num))])]),t._v(" "),e("el-col",{staticClass:"dataItme",attrs:{span:6}},[e("h3",[t._v("分享消耗金币")]),t._v(" "),e("h3",[t._v(t._s(n.cost_coin))])]),t._v(" "),e("el-col",{staticClass:"dataItme",attrs:{span:6}},[e("h3",[t._v("获客成本（金币）")]),t._v(" "),e("h3",[t._v(t._s(n.user_per_coin))])]),t._v(" "),e("el-col",{staticClass:"dataItme",attrs:{span:6}},[e("h3",[t._v("关联商品浏览")]),t._v(" "),e("h3",[t._v(t._s(n.view_num))])])],1)],1)])],1)],1)})),t._v(" "),t.investNotice?e("p",{staticClass:"investNotice"},[t._v("暂无数据")]):t._e(),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],2)])},r=[],i=(e("c5f6"),e("f8a4")),s=e("5f87"),c={props:{query:{type:String,required:!0}},data:function(){return{invest:[{article:{subject:"",id:""},valid_from:"",valid_to:"",residue_coin:"",list:[]}],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:"",company_id:"",investNotice:!1}},created:function(){var t=Object(s["a"])();this.company_id=JSON.parse(t).id,this.getList()},methods:{handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t,this.getList()},go_read_edit:function(t){void 0!==t?this.$router.push({path:"BusinessReadTaskEdit?id=".concat(t)}):this.$router.push({path:"BusinessReadTaskEdit"})},getList:function(){var t=this,n="1"===this.query?"wait":"2"===this.query?"active":"3"===this.query?"overtime":"failed",e={page:this.searchOption.pagination.currentPage,per_page:15,status:n,company_id:""};Object(i["l"])(e).then((function(n){200===n.status&&(t.invest=n.data,t.total=Number(n.headers["x-total"]),0===t.invest.length&&(t.investNotice=!0))}))},deleteTask:function(t){var n=this;this.$confirm("该任务将被删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["f"])(t).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))}))},shareDetail:function(t){this.$router.push({path:"/shareLog?id=".concat(t)})}}},u=c,o=(e("f4e3"),e("2877")),_=Object(o["a"])(u,a,r,!1,null,"58afbef4",null);n["default"]=_.exports},f4e3:function(t,n,e){"use strict";var a=e("8883"),r=e.n(a);r.a},f8a4:function(t,n,e){"use strict";e.d(n,"x",(function(){return r})),e.d(n,"v",(function(){return i})),e.d(n,"e",(function(){return s})),e.d(n,"u",(function(){return c})),e.d(n,"C",(function(){return u})),e.d(n,"j",(function(){return o})),e.d(n,"l",(function(){return _})),e.d(n,"a",(function(){return l})),e.d(n,"k",(function(){return d})),e.d(n,"y",(function(){return f})),e.d(n,"f",(function(){return p})),e.d(n,"p",(function(){return v})),e.d(n,"c",(function(){return h})),e.d(n,"o",(function(){return g})),e.d(n,"A",(function(){return k})),e.d(n,"h",(function(){return m})),e.d(n,"n",(function(){return y})),e.d(n,"b",(function(){return C})),e.d(n,"m",(function(){return b})),e.d(n,"z",(function(){return q})),e.d(n,"D",(function(){return w})),e.d(n,"g",(function(){return x})),e.d(n,"r",(function(){return O})),e.d(n,"d",(function(){return B})),e.d(n,"q",(function(){return j})),e.d(n,"B",(function(){return D})),e.d(n,"i",(function(){return L})),e.d(n,"w",(function(){return N})),e.d(n,"t",(function(){return T})),e.d(n,"s",(function(){return $}));var a=e("b775");function r(t){return a["a"].get("task_products",{params:t})}function i(t){return a["a"].get("products",{params:t})}function s(t){return a["a"].post("task_products",t)}function c(t){return a["a"].get("task_products/".concat(t))}function u(t,n){return a["a"].patch("task_products/".concat(t),n)}function o(t){return a["a"].delete("task_products/".concat(t))}function _(t){return a["a"].get("task_articles",{params:t})}function l(t){return a["a"].post("task_articles",t)}function d(t){return a["a"].get("task_articles/".concat(t))}function f(t,n){return a["a"].patch("task_articles/".concat(t),n)}function p(t){return a["a"].delete("task_articles/".concat(t))}function v(t){return a["a"].get("task_questionnaires",{params:t})}function h(t){return a["a"].post("task_questionnaires",t)}function g(t){return a["a"].get("task_questionnaires/".concat(t))}function k(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function m(t){return a["a"].delete("task_questionnaires/".concat(t))}function y(t){return a["a"].get("task_game",{params:t})}function C(t){return a["a"].post("task_game",t)}function b(t){return a["a"].get("task_game/".concat(t))}function q(t,n){return a["a"].patch("task_game/".concat(t),n)}function w(t){return a["a"].post("tasks/audit",t)}function x(t){return a["a"].delete("task_game/".concat(t))}function O(t){return a["a"].get("task_links",{params:t})}function B(t){return a["a"].post("task_links",t)}function j(t){return a["a"].get("task_links/".concat(t))}function D(t,n){return a["a"].patch("task_links/".concat(t),n)}function L(t){return a["a"].delete("task_links/".concat(t))}function N(t,n){return a["a"].get("task_questionnaires/".concat(t,"/reply"),{params:n})}function T(t){return a["a"].get("task_game/".concat(t,"/prizes"))}function $(t,n){return a["a"].get("task_game/".concat(t,"/prize_logs"),{params:n})}}}]);