(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7827a3f3"],{"1b29":function(t,a,e){"use strict";var n=e("3812"),o=e.n(n);o.a},3812:function(t,a,e){},"737b":function(t,a,e){"use strict";var n=e("ab5b"),o=e.n(n);o.a},"7b94":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},l=i,r=(e("1b29"),e("2877")),s=Object(r["a"])(l,n,o,!1,null,"b4ebadd8",null);a["a"]=s.exports},ab5b:function(t,a,e){},b17a:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"displayContent"},[e("div",{staticClass:"account_top"},[e("span",[t._v("剩余金币："),e("span",[t._v(t._s(t.coin))])]),e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogVisible=!0}}},[t._v("去充值")])],1),t._v(" "),e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.changeTab}},[e("el-tab-pane",{attrs:{label:"充值记录"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rechargeRecord}},[e("el-table-column",{attrs:{prop:"data1",label:"充值时间","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(a){return a.row.data1?[t._v("\n              "+t._s(t.$formatDate(a.row.data1))+"\n            ")]:void 0}}],null,!0)}),t._v(" "),e("el-table-column",{attrs:{prop:"data2",label:"充值金额","min-width":"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data3",label:"获得金币数","min-width":"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data4",label:"支付方式","min-width":"100"}})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1),t._v(" "),e("el-tab-pane",{attrs:{label:"消费记录"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.consumptionRecords}},[e("el-table-column",{attrs:{prop:"data1y",label:"时间","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(a){return a.row.data1y?[t._v("\n              "+t._s(t.$formatDate(a.row.data1y))+"\n            ")]:void 0}}],null,!0)}),t._v(" "),e("el-table-column",{attrs:{prop:"data2y",label:"消耗金币数","min-width":"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data3y",label:"方式","min-width":"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data4y",label:"用户昵称","min-width":"100"}})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)],1)],1),t._v(" "),e("el-dialog",{staticClass:"rechargeDialog",attrs:{visible:t.dialogVisible,width:"46%","before-close":t.handleClose},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("span",[e("div",{staticClass:"demo-input-suffix"},[t._v("\n        充值金额：\n        "),e("el-input",{attrs:{placeholder:"请输入充值金额"},model:{value:t.rechargeAmount,callback:function(a){t.rechargeAmount=a},expression:"rechargeAmount"}}),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.payCode}},[t._v("生成支付码")])],1),t._v(" "),e("div",{staticClass:"payment_code"},[e("span",[e("img",{attrs:{src:t.qrCode,alt:""}})]),t._v(" "),e("span",{staticClass:"line"}),t._v(" "),e("span",[e("img",{attrs:{src:t.qrCode,alt:""}})])])])])],1)},o=[],i=e("7b94"),l=e("072e"),r={components:{TopTitle:i["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,title:"我的账号",rechargeRecord:[{data1:"11624861492149",data2:"充值金额",data3:"获得金币数",data4:"支付方式"}],consumptionRecords:[{data1y:"812648169149",data2y:"消耗金币数",data3y:"方式",data4y:"用户昵称"}],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,dialogVisible:!1,rechargeAmount:"",coin:"",qrCode:""}},created:function(){console.log("当前组件渲染完成:"),console.log(this.$route.query.id),this.getInfo()},methods:{getInfo:function(){var t=this;Object(l["g"])().then((function(a){console.log(a),t.coin=a.data.coin}))},handleCurrentChange:function(t){console.log(t)},handleClose:function(t){this.dialogVisible=!1},changeTab:function(t){console.log(t),t.index,t.index},payCode:function(){var t=this,a={company_id:"",amount:this.rechargeAmount},e=this.$qs.stringify(a);Object(l["d"])(e).then((function(a){console.log(a),t.qrCode=a.data.qrcode}))}}},s=r,c=(e("737b"),e("2877")),d=Object(c["a"])(s,n,o,!1,null,"cae2a594",null);a["default"]=d.exports}}]);