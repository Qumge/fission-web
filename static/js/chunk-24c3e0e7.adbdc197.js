(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c3e0e7"],{9506:function(t,n,e){},9639:function(t,n,e){"use strict";var a=e("9506"),r=e.n(a);r.a},a883:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var a=e("b775");function r(t){return a["a"].get("/companies",{params:t})}},d3dc:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"displayContent"},[e("el-row",[e("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.getList},model:{value:t.stateValue,callback:function(n){t.stateValue=n},expression:"stateValue"}},t._l(t.statesList,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),1==t.currentstatus||4==t.currentstatus?e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(1)}}},[t._v("批量通过")]):t._e(),t._v(" "),1==t.currentstatus?e("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(){return t.BatchOperation(2)}}},[t._v("批量拒绝")]):t._e(),t._v(" "),2==t.currentstatus?e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(3)}}},[t._v("批量结束")]):t._e(),t._v(" "),e("div",{staticClass:"inputBox fr"},[e("el-input",{attrs:{placeholder:"搜索文章标题",size:"small"},on:{blur:t.getList},model:{value:t.inputSearchContent,callback:function(n){t.inputSearchContent=n},expression:"inputSearchContent"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),e("el-table-column",{attrs:{prop:"article.subject",label:"阅读任务",width:"300"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company.customer.login",label:"商户",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s("wait"==n.row.status?"待审核":"")+"\n          "+t._s("active"==n.row.status?"进行中":"")+"\n          "+t._s("overtime"==n.row.status?"已结束":"")+"\n          "+t._s("failed"==n.row.status?"已拒绝":"")+"\n        ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"任务时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s(n.row.valid_from)+" - "+t._s(n.row.valid_to)+"\n        ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"status",width:"230",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return["wait"==n.row.status||"failed"==n.row.status?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(n.row.id,1)}}},[t._v("通过")]):t._e(),t._v(" "),"wait"==n.row.status?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(n.row.id,2)}}},[t._v("拒绝")]):t._e(),t._v(" "),"active"==n.row.status?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(n.row.id,3)}}},[t._v("结束")]):t._e(),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.dataStatistics(n.row.id)}}},[t._v("数据统计")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-search"},on:{click:function(){return t.triggerDelete(n.row.id)}}})]}}])})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},r=[],s=(e("c5f6"),e("ac6a"),e("ed08")),i=e("f8a4"),o=e("a883"),c={props:{query:{type:String,required:!0}},data:function(){return{statesList:[],stateValue:"",tableData:[],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,currentstatus:"",arrID:""}},watch:{$route:function(t,n){console.log(t)}},created:function(){this.currentstatus=this.query,this.getList(),this.getCompaines()},methods:{formatDate:s["d"],triggerEdit:function(t){return!1},triggerRecovery:function(t){},triggerDelete:function(t){this.$router.push({path:"readTaskDetails?id=".concat(t,"&type=").concat(this.query)})},handleCurrentChange:function(t){console.log(t),this.getList()},dataStatistics:function(t){},handleSelectionChange:function(t){console.log(t);var n=[];t.forEach((function(t,e,a){console.log(t),n.push(t.id)})),this.arrID=n,console.log(n,this.arrID)},BatchOperation:function(t){var n=this;if(0===this.arrID.length)return!1;if(1===t)this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(n.arrID)),t.append("status","success"),t.append("reason",""),Object(i["v"])(t).then((function(t){n.$message({message:"操作成功",type:"success"}),n.getList()}))}));else if(2===t||3===t){var e=2===t?"请输入拒绝原因":"请输入结束原因";this.$prompt(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var a=e.value,r=2===t?"failed":"overtime",s=new FormData;s.append("ids",JSON.stringify(n.arrID)),s.append("status",r),s.append("reason",a),Object(i["v"])(s).then((function(t){n.$message({message:"操作成功",type:"success"}),n.getList()}))})).catch((function(){}))}},SingleOperation:function(t,n){var e=this,a=[];if(a.push(t),1===n)this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(a)),t.append("status","success"),t.append("reason",""),Object(i["v"])(t).then((function(t){e.$message({message:"操作成功",type:"success"}),e.getList()}))}));else if(2===n||3===n){var r=2===n?"请输入拒绝原因":"请输入结束原因";this.$prompt(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var r=t.value,s=2===n?"failed":"overtime",o=new FormData;o.append("ids",JSON.stringify(a)),o.append("status",s),o.append("reason",r),Object(i["v"])(o).then((function(t){e.$message({message:"操作成功",type:"success"}),e.getList()}))})).catch((function(){}))}},getList:function(){var t=this,n="1"===this.query?"wait":"2"===this.query?"active":"3"===this.query?"overtime":"failed",e={page:this.searchOption.pagination.currentPage,pre_page:15,company_id:this.stateValue,status:n,name:this.inputSearchContent};Object(i["j"])(e).then((function(n){console.log(n),t.tableData=n.data,t.total=Number(n.headers["x-total"])}))},getCompaines:function(){var t=this,n={page:1,status:"",search:"",per_page:15};Object(o["a"])(n).then((function(n){t.statesList=n.data}))}}},u=c,l=(e("9639"),e("2877")),p=Object(l["a"])(u,a,r,!1,null,"278c2f84",null);n["default"]=p.exports},f8a4:function(t,n,e){"use strict";e.d(n,"q",(function(){return r})),e.d(n,"p",(function(){return s})),e.d(n,"d",(function(){return i})),e.d(n,"o",(function(){return o})),e.d(n,"u",(function(){return c})),e.d(n,"h",(function(){return u})),e.d(n,"j",(function(){return l})),e.d(n,"a",(function(){return p})),e.d(n,"i",(function(){return f})),e.d(n,"r",(function(){return d})),e.d(n,"e",(function(){return g})),e.d(n,"n",(function(){return h})),e.d(n,"c",(function(){return m})),e.d(n,"m",(function(){return _})),e.d(n,"t",(function(){return v})),e.d(n,"g",(function(){return b})),e.d(n,"l",(function(){return k})),e.d(n,"b",(function(){return w})),e.d(n,"k",(function(){return y})),e.d(n,"s",(function(){return x})),e.d(n,"v",(function(){return O})),e.d(n,"f",(function(){return S}));var a=e("b775");function r(t){return a["a"].get("task_products",{params:t})}function s(t){return a["a"].get("products",{params:t})}function i(t){return a["a"].post("task_products",t)}function o(t){return a["a"].get("task_products/".concat(t))}function c(t,n){return a["a"].patch("task_products/".concat(t),n)}function u(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function p(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function d(t,n){return a["a"].patch("task_articles/".concat(t),n)}function g(t){return a["a"].delete("task_articles/".concat(t))}function h(t){return a["a"].get("task_questionnaires",{params:t})}function m(t){return a["a"].post("task_questionnaires",t)}function _(t){return a["a"].get("task_questionnaires/".concat(t))}function v(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function b(t){return a["a"].delete("task_questionnaires/".concat(t))}function k(t){return a["a"].get("task_game",{params:t})}function w(t){return a["a"].post("task_game",t)}function y(t){return a["a"].get("task_game/".concat(t))}function x(t,n){return a["a"].patch("task_game/".concat(t),n)}function O(t){return a["a"].post("tasks/audit",t)}function S(t){return a["a"].delete("task_game/".concat(t))}}}]);