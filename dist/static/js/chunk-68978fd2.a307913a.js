(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68978fd2"],{1099:function(t,e,a){"use strict";var n=a("31d1"),s=a.n(n);s.a},"26be":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"displayContent"},[a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:t.go_account}},[t._v("创建商户")]),t._v(" "),a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.getCompaines},model:{value:t.stateValue,callback:function(e){t.stateValue=e},expression:"stateValue"}},t._l(t.statesList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.getCompaines},model:{value:t.switchValue,callback:function(e){t.switchValue=e},expression:"switchValue"}},t._l(t.statesList1,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(1)}}},[t._v("批量冻结")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(){return t.BatchOperation(2)}}},[t._v("批量解冻")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(3)}}},[t._v("批量删除")]),t._v(" "),a("div",{staticClass:"inputBox fr"},[a("el-input",{attrs:{placeholder:"搜索商户名称",size:"small"},on:{blur:t.getCompaines},model:{value:t.inputSearchContent,callback:function(e){t.inputSearchContent=e},expression:"inputSearchContent"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),a("el-table-column",{attrs:{prop:"no",label:"商户编号",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商户名称",width:"220"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s("active"==e.row.status?"正常":"已冻结")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"live",label:"是否活跃"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1==e.row.live?"活跃":"不活跃")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.created_at?[t._v("\n          "+t._s(e.row.created_at)+"\n        ")]:void 0}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{prop:"status",width:"230",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.CheckOperation(e.row.id)}}},[t._v("查看")]),t._v(" "),"active"===e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row,1)}}},[t._v("冻结")]):t._e(),t._v(" "),"locked"===e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row,1)}}},[t._v("解冻")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,3)}}},[t._v("删除")])]}}])})],1),t._v(" "),t.total?a("div",{staticClass:"pagingBox"},[a("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},s=[],i=(a("7f7f"),a("c5f6"),a("ac6a"),a("a883")),o=a("ed08"),r={data:function(){return{statesList:[{value:"",label:"所有状态"},{value:"active",label:"正常"},{value:"locked",label:"已冻结"}],statesList1:[{value:"",label:"所有状态"},{value:"1",label:"活跃"},{value:"2",label:"不活跃"}],stateValue:"",tableData:[],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:"",currentstatus:"",arrID:[],switchValue:""}},watch:{$route:function(t,e){var a=this;this.currentstatus=this.$route.params.id,this.tableData.forEach((function(t){t.data3=a.$route.params.id}))}},created:function(){this.getCompaines()},methods:{formatDate:o["d"],getCompaines:function(){var t=this,e={page:this.searchOption.pagination.currentPage,status:this.stateValue,search:this.inputSearchContent,live:this.switchValue,per_page:15};Object(i["e"])(e).then((function(e){200===e.status&&(t.total=Number(e.headers["x-total"]),t.tableData=e.data)}))},handleCurrentChange:function(t){},handleSelectionChange:function(t){var e=[];t.forEach((function(t,a,n){e.push(t.id)})),this.arrID=e},BatchOperation:function(t){var e=this;if(0===this.arrID.length)return this.$message.error("请选择需要批量操作的商户账号"),!1;if(1===t||2===t){var a=new FormData;a.append("status",1===t?"locked":"active"),a.append("ids",JSON.stringify(this.arrID));var n=2===t?"此操作将解冻商户，是否继续？":"此操作将冻结商户，是否继续？";this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["a"])(a).then((function(t){200===t.status&&(e.$message({message:"操作成功",type:"success"}),e.getCompaines())}))}))}else if(3===t){var s=new FormData;s.append("ids",JSON.stringify(this.arrID)),this.$confirm("此操作将删除商户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])(s).then((function(t){200===t.status&&(e.$message({message:"删除商户成功",type:"success"}),e.getCompaines())}))}))}},SingleOperation:function(t,e){var a=this;if(3===e)this.$confirm("此操作将删除商户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["g"])(t).then((function(t){200===t.status&&(a.$message({message:"删除商户成功",type:"success"}),a.getCompaines())}))}));else if(1===e){var n=t,s="locked"===n.status?"active":"locked",o=new FormData;o.append("name",n.name),o.append("login",n.customer.login),o.append("status",s);var r=n.id,c="locked"===n.status?"此操作将解冻商户，是否继续？":"此操作将冻结商户，是否继续？";this.$confirm(c,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["c"])(r,o).then((function(t){200===t.status&&(a.$message({message:"操作成功",type:"success"}),a.getCompaines())}))}))}},go_account:function(){this.$router.push({path:"addMerchant"})},CheckOperation:function(t){this.$router.push({path:"merchantDetails?id=".concat(t)})}}},c=r,l=(a("1099"),a("2877")),u=Object(l["a"])(c,n,s,!1,null,"1609a16d",null);e["default"]=u.exports},"31d1":function(t,e,a){},a883:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"g",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return u}));var n=a("b775");function s(t){return Object(n["a"])({url:"/companies",method:"post",data:t})}function i(t){return n["a"].get("/companies",{params:t})}function o(t){return n["a"].get("/companies/".concat(t))}function r(t,e){return Object(n["a"])({url:"/companies/".concat(t),method:"patch",data:e})}function c(t){return n["a"].delete("/companies/".concat(t))}function l(t){return n["a"].post("/companies/change_status",t)}function u(t){return n["a"].post("/companies/destroy",t)}}}]);