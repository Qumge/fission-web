(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abd9ab4a"],{1514:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"displayContent"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"user_name",label:"收益人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"share_name",label:"分享人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"channel",label:"渠道"}}),t._v(" "),e("el-table-column",{attrs:{prop:"coin",label:"金币数"}})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},r=[],i=(e("c5f6"),e("ac6a"),e("a3f3")),o=e("5f87"),s={data:function(){return{tableData:[],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:""}},watch:{$route:function(t,a){var e=this;this.currentstatus=this.$route.params.id,this.tableData.forEach((function(t){t.data3=e.$route.params.id}))}},created:function(){var t=Object(o["a"])();this.company_id=JSON.parse(t).id,this.getlist()},methods:{getlist:function(){var t=this,a={company_id:"",page:this.searchOption.pagination.currentPage,per_page:15},e=this.$qs.stringify(a);Object(i["a"])(e).then((function(a){200===a.status&&(t.tableData=a.data,t.total=Number(a.headers["x-total"]))}))},handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t()}}},c=s,u=(e("9775"),e("2877")),l=Object(u["a"])(c,n,r,!1,null,"15aaaa98",null);a["default"]=l.exports},"7aa0":function(t,a,e){},9775:function(t,a,e){"use strict";var n=e("7aa0"),r=e.n(n);r.a},a3f3:function(t,a,e){"use strict";e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return o}));var n=e("b775");function r(t){return n["a"].get("share_logs",{params:t})}function i(t){return n["a"].post("accounts/coin_logs",t)}function o(t){return n["a"].get("share_logs/task",{params:t})}}}]);