(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f47933"],{"43c1":function(t,a,e){},"847f":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"displayContent"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"created_at",label:"分享时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"task_name",label:"任务名"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company_name",label:"商户"}}),t._v(" "),e("el-table-column",{attrs:{prop:"user_name",label:"分享人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"token",label:"分享token",width:"300px"}})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},o=[],r=(e("c5f6"),e("ac6a"),e("a3f3")),i=e("5f87"),c={data:function(){return{tableData:[],searchOption:{pagination:{currentPage:1,mode:[15,20,50,100],defaultMode:15}},total:100}},watch:{$route:function(t,a){var e=this;console.log(t),this.currentstatus=this.$route.params.id,this.tableData.forEach((function(t){t.data3=e.$route.params.id}))}},created:function(){var t=Object(i["a"])();this.company_id="Operator"===JSON.parse(t).type?"":JSON.parse(t).id,console.log(this.company_id,t),this.getlist()},methods:{getlist:function(){var t=this;console.log(this.company_id);var a={company_id:"",page:this.searchOption.pagination.currentPage,per_page:15};Object(r["b"])(a).then((function(a){console.log(a),t.tableData=a.data,t.total=Number(a.headers["x-total"])}))},handleCurrentChange:function(t){console.log(t),this.searchOption.pagination.currentPage=t,this.getlist()}}},s=c,l=(e("8c2c"),e("2877")),p=Object(l["a"])(s,n,o,!1,null,"e0e68288",null);a["default"]=p.exports},"8c2c":function(t,a,e){"use strict";var n=e("43c1"),o=e.n(n);o.a},a3f3:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"a",(function(){return r}));var n=e("b775");function o(t){return n["a"].get("share_logs",{params:t})}function r(t){return n["a"].get("coin_logs",{params:t})}}}]);