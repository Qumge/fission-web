(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db87e36"],{"62d1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"displayContent"},[n("el-row",[1==t.currentstatus||3==t.currentstatus?n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(1)}}},[t._v("批量通过")]):t._e(),t._v(" "),1==t.currentstatus||2==t.currentstatus?n("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(){return t.BatchOperation(2)}}},[t._v("批量拒绝")]):t._e(),t._v(" "),n("div",{staticClass:"inputBox fr"},[n("el-input",{attrs:{placeholder:"搜索帖子标题",size:"small"},on:{blur:t.getList},model:{value:t.inputSearchContent,callback:function(e){t.inputSearchContent=e},expression:"inputSearchContent"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"帖子标题",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"user.nick_name",label:"用户",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"currentstatus",label:"状态"}},[[t._v("\n          "+t._s(1==t.currentstatus?"待审核":"")+"\n          "+t._s(2==t.currentstatus?"已发布":"")+"\n          "+t._s(3==t.currentstatus?"已拒绝":"")+"\n        ")]],2),t._v(" "),n("el-table-column",{attrs:{prop:"created_at",label:"提交时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.created_at?[t._v("\n          "+t._s(e.row.created_at)+"\n        ")]:void 0}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{prop:"user.view_num",label:"浏览数",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"currentstatus",width:"230",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==t.currentstatus||3==t.currentstatus?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,1)}}},[t._v("通过")]):t._e(),t._v(" "),1==t.currentstatus||2==t.currentstatus?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,2)}}},[t._v("拒绝")]):t._e(),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.goDetail(e.row.id,t.currentstatus)}}},[t._v("查看")])]}}])})],1),t._v(" "),t.total?n("div",{staticClass:"pagingBox"},[n("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},s=[],r=(n("ac6a"),n("c5f6"),n("ed08")),i=n("dbc5"),c={props:{query:{type:String,required:!0}},data:function(){return{tableData:[],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,currentstatus:"",arrID:[]}},created:function(){this.currentstatus=this.query,this.getList()},methods:{formatDate:r["d"],getList:function(){var t=this,e="1"===this.currentstatus?"wait":"2"===this.currentstatus?"success":"failed",n={search:this.inputSearchContent,status:e,page:this.searchOption.pagination.currentPage,per_page:15};Object(i["b"])(n).then((function(e){200===e.status&&(t.tableData=e.data,t.total=Number(e.headers["x-total"]))}))},handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t,this.getList()},handleSelectionChange:function(t){var e=[];t.forEach((function(t,n,a){e.push(t.id)})),this.arrID=e},BatchOperation:function(t){var e=this;if(0===this.arrID.length)return!1;1===t?this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(e.arrID)),t.append("status","success"),t.append("reason",""),Object(i["c"])(t).then((function(t){200===t.status&&(e.$message({message:"操作成功",type:"success"}),e.getList())}))})):2===t&&this.$prompt("请输入拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var n=t.value,a=new FormData;a.append("ids",JSON.stringify(e.arrID)),a.append("status","failed"),a.append("reason",n),Object(i["c"])(a).then((function(t){200===t.status&&(e.$message({message:"操作成功",type:"success"}),e.getList())}))})).catch((function(){}))},SingleOperation:function(t,e){var n=this,a=[];a.push(t),1===e?this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(a)),t.append("status","success"),t.append("reason",""),Object(i["c"])(t).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))})):2===e&&this.$prompt("请输入拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var e=t.value,s=new FormData;s.append("ids",JSON.stringify(a)),s.append("status","failed"),s.append("reason",e),Object(i["c"])(s).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))})).catch((function(){}))},goDetail:function(t,e){this.$router.push({path:"releaseDetails?id=".concat(t,"&type=").concat(e)})}}},u=c,o=(n("d390"),n("2877")),l=Object(o["a"])(u,a,s,!1,null,"7e14fd55",null);e["default"]=l.exports},d390:function(t,e,n){"use strict";var a=n("fd7f"),s=n.n(a);s.a},dbc5:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=n("b775");function s(t){return a["a"].get("posts",{params:t})}function r(t){return a["a"].post("posts/audit",t)}function i(t){return a["a"].get("posts/".concat(t))}},fd7f:function(t,e,n){}}]);