(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7694de8c","chunk-600fd891"],{"1b29":function(t,a,e){"use strict";var s=e("3812"),l=e.n(s);l.a},3812:function(t,a,e){},"484b":function(t,a,e){},"531f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"displayContent"},[e("el-row",[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"block"},[e("span",{staticClass:"demonstration"},[t._v("下单时间")]),t._v(" "),e("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},model:{value:t.value7,callback:function(a){t.value7=a},expression:"value7"}})],1)]),t._v(" "),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"inputBox fr"},[e("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},model:{value:t.stateValue,callback:function(a){t.stateValue=a},expression:"stateValue"}},t._l(t.statesList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),e("el-input",{attrs:{placeholder:"搜索商品名称",size:"small"},model:{value:t.inputSearchContent,callback:function(a){t.inputSearchContent=a},expression:"inputSearchContent"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)])],1),t._v(" "),e("div",{staticClass:"orderList"},[e("ul",t._l(t.tableData,(function(a,s){return e("li",{key:s},[e("el-row",{staticClass:"orderTitle"},[e("el-col",{attrs:{span:16}},[e("h3",[t._v("订单编号："+t._s(a.data1)),e("span",[t._v("下单时间："+t._s(a.data2))]),e("span",[t._v("订单类型："+t._s(1===a.data3?"兑换订单":"交易订单"))])])]),t._v(" "),e("el-col",{attrs:{span:8}},[1==a.afterSaleStatus?e("el-button",{staticClass:"orderStatus",attrs:{type:"text"},on:{click:function(e){return t.goDetail(a.id,a.afterSaleStatus)}}},[t._v("售后中>")]):t._e(),t._v(" "),2==a.afterSaleStatus?e("el-button",{staticClass:"orderStatus",attrs:{type:"text"},on:{click:function(e){return t.goDetail(a.id,a.afterSaleStatus)}}},[t._v("已售后>")]):t._e()],1)],1),t._v(" "),e("el-row",{staticClass:"orderMain"},[e("el-col",{staticClass:"orderName",attrs:{span:12}},[e("div",{staticClass:"orderImg"},[e("img",{attrs:{src:t.$commonImg}})]),t._v(" "),e("div",{staticClass:"orderNum"},[e("p",[t._v(t._s(a.data5))]),t._v(" "),e("p",[t._v("X"+t._s(a.data6))])])]),t._v(" "),e("el-col",{staticClass:"orderCoin orderStyle",attrs:{span:4}},[e("p",[e("i",{staticClass:"el-icon-circle-close-outline"}),t._v(t._s(a.data7)+"金币")])]),t._v(" "),e("el-col",{staticClass:"orderStyle",attrs:{span:4}},[t._v("\n              "+t._s(1==t.query?"待发货":"")+"\n              "+t._s(2==t.query?"已发货":"")+"\n              "+t._s(3==t.query?"已完成":"")+"\n              "+t._s(4==t.query?"已取消":"")+"\n            ")]),t._v(" "),e("el-col",{staticClass:"orderStyle",attrs:{span:4}},["1"===t.query?e("el-button",{attrs:{type:"text"},on:{click:function(a){t.dialogTableVisible=!0}}},[t._v("发货")]):t._e(),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.goDetail(a.id,3)}}},[t._v("查看详情")])],1)],1)],1)})),0)]),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1),t._v(" "),e("el-dialog",{attrs:{title:"发货",visible:t.dialogTableVisible,center:"",width:"40%"},on:{"update:visible":function(a){t.dialogTableVisible=a}}},[e("div",{staticClass:"sendInfo"},[e("h3",[t._v("订单编号："),e("span",[t._v("90908102382")])]),t._v(" "),e("h3",[t._v("收获地址："),e("span",[t._v("李晓明，13898979981，上海市长宁区临新路268弄")])])]),t._v(" "),e("el-form",{attrs:{model:t.form}},[e("el-form-item",{attrs:{label:"快递公司:"}},[e("el-select",{attrs:{placeholder:"请选择快递公司"},model:{value:t.form.company,callback:function(a){t.$set(t.form,"company",a)},expression:"form.company"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"快递单号:"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogTableVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogTableVisible=!1}}},[t._v("确 定")])],1)],1)],1)},l=[],n=(e("ac6a"),e("7b94")),i={components:{TopTitle:n["a"]},props:{query:{type:String,required:!0}},data:function(){return{title:"总共39个商品",dialogTableVisible:!1,statesList:[{value:"0",label:"商品名称"},{value:"1",label:"订单编号"}],stateValue:"",tableData:[{data1:"data1",data2:"data2",data3:"1",afterSaleStatus:"1",data5:"data4",data6:"data5",data7:"data6",data8:"1",id:1},{data1:"data1",data2:"data2",data3:"1",afterSaleStatus:"2",data5:"data4",data6:"data5",data7:"data6",data8:"1",id:2}],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,currentstatus:"",pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",[e,a])}},{text:"最近一个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",[e,a])}},{text:"最近三个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-7776e6),t.$emit("pick",[e,a])}}]},value7:"",form:{name:"0909090",company:""}}},watch:{$route:function(t,a){var e=this;console.log(t),this.currentstatus=this.$route.params.id,this.tableData.forEach((function(t){t.data3=e.$route.params.id}))}},created:function(){this.title="总共1234件商品",this.totle=1e3},methods:{handleCurrentChange:function(t){console.log(t)},handleSelectionChange:function(t){console.log(t)},inputSearch:function(){},goDetail:function(t,a){this.$router.push({path:"platformOrderDetails?orderId=".concat(t,"&afterSaleStatus=").concat(a)})}}},o=i,r=(e("fe5f"),e("2877")),c=Object(r["a"])(o,s,l,!1,null,"b45fb230",null);a["default"]=c.exports},"7b94":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},l=[],n={props:{title:{type:String,required:!0}},data:function(){return{}}},i=n,o=(e("1b29"),e("2877")),r=Object(o["a"])(i,s,l,!1,null,"b4ebadd8",null);a["a"]=r.exports},fe5f:function(t,a,e){"use strict";var s=e("484b"),l=e.n(s);l.a}}]);