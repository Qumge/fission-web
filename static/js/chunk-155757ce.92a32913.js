(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-155757ce"],{"5c90":function(t,n,a){},"7a89":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app-container"},[a("el-tabs",{staticClass:"tabContainer",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(n){t.activeName=n},expression:"activeName"}},t._l(t.games,(function(n,e){return a("el-tab-pane",{key:e,attrs:{label:n.title,name:n.name}},[a("div",{staticClass:"investMain"},[a("div",{staticClass:"Btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.go_game_edit()}}},[t._v("发布任务")])],1),t._v(" "),t._l(t.invest,(function(n,e){return a("div",{key:e,staticClass:"investList"},[a("el-row",{staticClass:"investUl"},[a("el-col",{attrs:{span:12}},[a("ul",{staticClass:"investDetail",staticStyle:{"border-right":"#DBDBDB solid 1px"}},[a("li",[t._v("\n                  活动名称："+t._s(null===n.game?"":n.game.name)+"\n                ")]),t._v(" "),a("li",[t._v("\n                  状态："+t._s(n.get_status)+"\n                ")]),t._v(" "),a("li",[t._v("任务时间："+t._s(n.valid_from)+" - "+t._s(n.valid_to))]),t._v(" "),a("li",[t._v("金币总数："+t._s(n.coin))])]),t._v(" "),"failed"===n.get_status?a("el-button",{staticClass:"btn",on:{click:function(a){return t.go_game_edit(n.id)}}},[t._v("编辑活动")]):t._e(),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(a){return t.go_prize(n.id)}}},[t._v("奖品管理")]),t._v(" "),"failed"===n.get_status?a("el-button",{staticClass:"btn",attrs:{type:"info"},on:{click:function(a){return t.deleteTask(n.id)}}},[t._v("删除")]):t._e(),t._v(" "),a("el-button",{staticClass:"btn",on:{click:function(a){return t.shareDetail(n.id)}}},[t._v("分享日志详情")])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("h3",[t._v("数据统计")]),t._v(" "),a("div",{staticClass:"data"},[a("el-row",[a("el-col",{staticClass:"dataItme",attrs:{span:6}},[a("h3",[t._v("分享数")]),t._v(" "),a("h3",[t._v(t._s(n.share_num))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:6}},[a("h3",[t._v("浏览数")]),t._v(" "),a("h3",[t._v(t._s(n.view_num))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:6}},[a("h3",[t._v("分享消耗金币")]),t._v(" "),a("h3",[t._v(t._s(n.cost_coin))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:6}},[a("h3",[t._v("获客成本（金币）")]),t._v(" "),a("h3",[t._v(t._s(n.user_per_coin))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:6}},[a("h3",[t._v("中奖人数")]),t._v(" "),a("h3",[t._v(t._s(null!==n.game?n.game.prize_user_num:"-"))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:6}},[a("h3",[t._v("中奖金币数")]),t._v(" "),a("h3",[t._v(t._s(null!==n.game?n.game.prize_coin:"-"))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:6}},[a("h3",[t._v("中奖商品数")]),t._v(" "),a("h3",[t._v(t._s(null!==n.game?n.game.prize_product_num:"-"))])])],1)],1)])],1)],1)})),t._v(" "),t.investNotice?a("p",{staticClass:"investNotice"},[t._v("暂无数据")]):t._e(),t._v(" "),t.total?a("div",{staticClass:"pagingBox"},[a("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],2)])})),1)],1)},s=[],i=(a("c5f6"),a("f8a4")),r=a("5f87"),c={data:function(){return{activeName:"Game::Wheel",company_id:"",games:[{title:"大转盘",name:"Game::Wheel"},{title:"砸金蛋",name:"Game::Egg"},{title:"刮刮卡",name:"Game::Scratch"}],invest:[{game:{name:""},status:1,valid_from:"",valid_to:"",residue_coin:""}],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:"",investNotice:!1}},created:function(){var t=Object(r["a"])();this.company_id=JSON.parse(t).id,console.log(this.company_id,t),this.getlist()},methods:{handleClick:function(t,n){this.getlist()},handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t,this.getList()},go_prize:function(t){this.$router.push({path:"businessPrizeManagement?id=".concat(t)})},go_game_edit:function(t){var n="Game::Wheel"===this.activeName?"1":"Game::Egg"===this.activeName?"2":"3";void 0!==t?this.$router.push({path:"BusinessGameTaskDetails?id=".concat(t,"&type=").concat(n)}):this.$router.push({path:"BusinessGameTaskDetails?type=".concat(n)})},getlist:function(){var t=this;console.log(this.company_id);var n={type:this.activeName,company_id:"",status:"",page:this.searchOption.pagination.currentPage,per_page:15};Object(i["n"])(n).then((function(n){200===n.status&&(t.invest=n.data,t.total=Number(n.headers["x-total"]))}))},deleteTask:function(t){var n=this;this.$confirm("该任务将被删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["g"])(t).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))}))},shareDetail:function(t){this.$router.push({path:"/shareLog?id=".concat(t)})}}},o=c,u=(a("beaf"),a("2877")),l=Object(u["a"])(o,e,s,!1,null,"3e534c9f",null);n["default"]=l.exports},beaf:function(t,n,a){"use strict";var e=a("5c90"),s=a.n(e);s.a},f8a4:function(t,n,a){"use strict";a.d(n,"x",(function(){return s})),a.d(n,"v",(function(){return i})),a.d(n,"e",(function(){return r})),a.d(n,"u",(function(){return c})),a.d(n,"C",(function(){return o})),a.d(n,"j",(function(){return u})),a.d(n,"l",(function(){return l})),a.d(n,"a",(function(){return _})),a.d(n,"k",(function(){return d})),a.d(n,"y",(function(){return p})),a.d(n,"f",(function(){return f})),a.d(n,"p",(function(){return v})),a.d(n,"c",(function(){return g})),a.d(n,"o",(function(){return m})),a.d(n,"A",(function(){return h})),a.d(n,"h",(function(){return k})),a.d(n,"n",(function(){return b})),a.d(n,"b",(function(){return C})),a.d(n,"m",(function(){return y})),a.d(n,"z",(function(){return x})),a.d(n,"D",(function(){return N})),a.d(n,"g",(function(){return w})),a.d(n,"r",(function(){return z})),a.d(n,"d",(function(){return O})),a.d(n,"q",(function(){return B})),a.d(n,"B",(function(){return D})),a.d(n,"i",(function(){return G})),a.d(n,"w",(function(){return q})),a.d(n,"t",(function(){return I})),a.d(n,"s",(function(){return $}));var e=a("b775");function s(t){return e["a"].get("task_products",{params:t})}function i(t){return e["a"].get("products",{params:t})}function r(t){return e["a"].post("task_products",t)}function c(t){return e["a"].get("task_products/".concat(t))}function o(t,n){return e["a"].patch("task_products/".concat(t),n)}function u(t){return e["a"].delete("task_products/".concat(t))}function l(t){return e["a"].get("task_articles",{params:t})}function _(t){return e["a"].post("task_articles",t)}function d(t){return e["a"].get("task_articles/".concat(t))}function p(t,n){return e["a"].patch("task_articles/".concat(t),n)}function f(t){return e["a"].delete("task_articles/".concat(t))}function v(t){return e["a"].get("task_questionnaires",{params:t})}function g(t){return e["a"].post("task_questionnaires",t)}function m(t){return e["a"].get("task_questionnaires/".concat(t))}function h(t,n){return e["a"].patch("task_questionnaires/".concat(t),n)}function k(t){return e["a"].delete("task_questionnaires/".concat(t))}function b(t){return e["a"].get("task_game",{params:t})}function C(t){return e["a"].post("task_game",t)}function y(t){return e["a"].get("task_game/".concat(t))}function x(t,n){return e["a"].patch("task_game/".concat(t),n)}function N(t){return e["a"].post("tasks/audit",t)}function w(t){return e["a"].delete("task_game/".concat(t))}function z(t){return e["a"].get("task_links",{params:t})}function O(t){return e["a"].post("task_links",t)}function B(t){return e["a"].get("task_links/".concat(t))}function D(t,n){return e["a"].patch("task_links/".concat(t),n)}function G(t){return e["a"].delete("task_links/".concat(t))}function q(t,n){return e["a"].get("task_questionnaires/".concat(t,"/reply"),{params:n})}function I(t){return e["a"].get("task_game/".concat(t,"/prizes"))}function $(t,n){return e["a"].get("task_game/".concat(t,"/prize_logs"),{params:n})}}}]);