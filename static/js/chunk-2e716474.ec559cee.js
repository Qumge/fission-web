(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e716474","chunk-600fd891"],{1583:function(t,n,e){"use strict";var a=e("8b0d"),r=e.n(a);r.a},"1b29":function(t,n,e){"use strict";var a=e("3812"),r=e.n(a);r.a},3812:function(t,n,e){},"7a2b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"tableContainer"},[e("h3",[e("span",[t._v("问卷标题：")]),t._v(t._s(t.name))]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"created_at",label:"提交时间"},scopedSlots:t._u([{key:"default",fn:function(n){return n.row.created_at?[t._v("\n          "+t._s(n.row.created_at)+"\n        ")]:void 0}}],null,!0)}),t._v(" "),e("el-table-column",{attrs:{prop:"user.nick_name",label:"提交人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"questionData",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return n.row.questionData?[e("el-popover",{attrs:{placement:"top-start",title:"问题及答案",width:"200",trigger:"click"}},[t._l(n.row.questionData,(function(n,a){return e("div",{key:a,style:{textAlign:"left"}},[t._v("问题"+t._s(a+1)+":"+t._s(n.question)+"("+t._s(n.type)+")"),e("br"),t._v("\n              答案："+t._s(n.answers)+"\n            ")])})),t._v(" "),e("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("查看")])],2)]:void 0}}],null,!0)})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)],1)},r=[],u=(e("c5f6"),e("7f7f"),e("ac6a"),e("7b94")),o=e("f8a4"),i=e("ed08"),c={components:{TopTitle:u["a"]},data:function(){return{title:"",name:"",tableData:[],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100}},created:function(){this.title="问卷收集",this.getList()},methods:{formatDate:i["d"],getList:function(){var t=this,n={page:this.searchOption.pagination.currentPage,per_page:15},e=this.$route.query.id;Object(o["w"])(e,n).then((function(n){if(200===n.status){var e=n.data,a=[];e.forEach((function(t,n){var e=t.answers;t.questionnaire.questions.forEach((function(t,n){var r="";e.forEach((function(n,e){n.question_id===t.id&&t.options.forEach((function(t,e){t.id===n.option_id&&(r=r?r+","+t.name:t.name)}))}));var u={"Question::Multiple":"多选","Question::Single":"单选","Question::Completion":"文本"};a.push({question:t.name,answers:r,type:u[t.type]})})),t.questionData=a})),t.tableData=n.data,t.name=n.data[0].questionnaire.name,t.total=Number(n.headers["x-total"])}}))},handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t,this.getList()},SingleOperation:function(t,n){console.log("查看")}}},s=c,f=(e("1583"),e("2877")),l=Object(f["a"])(s,a,r,!1,null,"b5ab1296",null);n["default"]=l.exports},"7b94":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],u={props:{title:{type:String,required:!0}},data:function(){return{}}},o=u,i=(e("1b29"),e("2877")),c=Object(i["a"])(o,a,r,!1,null,"b4ebadd8",null);n["a"]=c.exports},"8b0d":function(t,n,e){},f8a4:function(t,n,e){"use strict";e.d(n,"x",(function(){return r})),e.d(n,"v",(function(){return u})),e.d(n,"e",(function(){return o})),e.d(n,"u",(function(){return i})),e.d(n,"C",(function(){return c})),e.d(n,"j",(function(){return s})),e.d(n,"l",(function(){return f})),e.d(n,"a",(function(){return l})),e.d(n,"k",(function(){return d})),e.d(n,"y",(function(){return p})),e.d(n,"f",(function(){return _})),e.d(n,"p",(function(){return g})),e.d(n,"c",(function(){return k})),e.d(n,"o",(function(){return h})),e.d(n,"A",(function(){return m})),e.d(n,"h",(function(){return v})),e.d(n,"n",(function(){return b})),e.d(n,"b",(function(){return q})),e.d(n,"m",(function(){return w})),e.d(n,"z",(function(){return y})),e.d(n,"D",(function(){return C})),e.d(n,"g",(function(){return x})),e.d(n,"r",(function(){return O})),e.d(n,"d",(function(){return D})),e.d(n,"q",(function(){return E})),e.d(n,"B",(function(){return S})),e.d(n,"i",(function(){return j})),e.d(n,"w",(function(){return z})),e.d(n,"t",(function(){return T})),e.d(n,"s",(function(){return P}));var a=e("b775");function r(t){return a["a"].get("task_products",{params:t})}function u(t){return a["a"].get("products",{params:t})}function o(t){return a["a"].post("task_products",t)}function i(t){return a["a"].get("task_products/".concat(t))}function c(t,n){return a["a"].patch("task_products/".concat(t),n)}function s(t){return a["a"].delete("task_products/".concat(t))}function f(t){return a["a"].get("task_articles",{params:t})}function l(t){return a["a"].post("task_articles",t)}function d(t){return a["a"].get("task_articles/".concat(t))}function p(t,n){return a["a"].patch("task_articles/".concat(t),n)}function _(t){return a["a"].delete("task_articles/".concat(t))}function g(t){return a["a"].get("task_questionnaires",{params:t})}function k(t){return a["a"].post("task_questionnaires",t)}function h(t){return a["a"].get("task_questionnaires/".concat(t))}function m(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function v(t){return a["a"].delete("task_questionnaires/".concat(t))}function b(t){return a["a"].get("task_game",{params:t})}function q(t){return a["a"].post("task_game",t)}function w(t){return a["a"].get("task_game/".concat(t))}function y(t,n){return a["a"].patch("task_game/".concat(t),n)}function C(t){return a["a"].post("tasks/audit",t)}function x(t){return a["a"].delete("task_game/".concat(t))}function O(t){return a["a"].get("task_links",{params:t})}function D(t){return a["a"].post("task_links",t)}function E(t){return a["a"].get("task_links/".concat(t))}function S(t,n){return a["a"].patch("task_links/".concat(t),n)}function j(t){return a["a"].delete("task_links/".concat(t))}function z(t,n){return a["a"].get("task_questionnaires/".concat(t,"/reply"),{params:n})}function T(t){return a["a"].get("task_game/".concat(t,"/prizes"))}function P(t,n){return a["a"].get("task_game/".concat(t,"/prize_logs"),{params:n})}}}]);