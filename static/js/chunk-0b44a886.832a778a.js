(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b44a886"],{"3a10":function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"h",(function(){return r})),a.d(e,"f",(function(){return i})),a.d(e,"e",(function(){return l})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return u})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return p}));var n=a("b775");function s(t){return n["a"].get("orders",{params:t})}function r(t,e){return n["a"].post("orders/".concat(t,"/send"),e)}function i(t){return n["a"].get("orders/".concat(t))}function l(t){return n["a"].get("orders/".concat(t,"/express"))}function o(t){return n["a"].get("after_orders",{params:t})}function u(t,e){return n["a"].post("after_orders/".concat(t,"/after_sale"),e)}function c(t){return n["a"].get("after_orders/".concat(t))}function p(t){return n["a"].get("after_orders/".concat(t,"/express"))}},"66ff":function(t,e,a){"use strict";var n=a("d64b"),s=a.n(n);s.a},a883:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return r})),a.d(e,"f",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"g",(function(){return o})),a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return c}));var n=a("b775");function s(t){return Object(n["a"])({url:"/companies",method:"post",data:t})}function r(t){return n["a"].get("/companies",{params:t})}function i(t){return n["a"].get("/companies/".concat(t))}function l(t,e){return Object(n["a"])({url:"/companies/".concat(t),method:"patch",data:e})}function o(t){return n["a"].delete("/companies/".concat(t))}function u(t){return n["a"].post("/companies/change_status",t)}function c(t){return n["a"].post("/companies/destroy",t)}},d64b:function(t,e,a){},dea1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"displayContent"},[a("el-row",[a("el-col",{attrs:{span:9}},[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("下单时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},on:{change:t.dataTimeChange},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)]),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.searchValueChange},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},t._l(t.typeList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.searchValueChange},model:{value:t.typeDetailValue,callback:function(e){t.typeDetailValue=e},expression:"typeDetailValue"}},t._l(t.typeDetailList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"inputBox fr"},[a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},model:{value:t.stateValue,callback:function(e){t.stateValue=e},expression:"stateValue"}},t._l(t.statesList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),"0"==t.stateValue?a("el-input",{attrs:{placeholder:"搜索商品名称",size:"small"},on:{change:t.searchValueChange},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]):t._e(),t._v(" "),"1"==t.stateValue?a("el-input",{attrs:{placeholder:"搜索订单编号",size:"small"},on:{change:t.searchValueChange},model:{value:t.listQuery.no,callback:function(e){t.$set(t.listQuery,"no",e)},expression:"listQuery.no"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]):t._e()],1)])],1),t._v(" "),a("div",{staticClass:"orderList"},[a("ul",t._l(t.tableData,(function(e,n){return a("li",{key:n},[a("el-row",{staticClass:"orderTitle"},[a("el-col",{attrs:{span:24}},[a("h3",[t._v("订单编号："+t._s(e.no)+"\n                "),a("span",[t._v("下单时间："+t._s(e.created_at))]),t._v(" "),a("span",[t._v("订单类型："+t._s("Order::MoneyOrder"===e.type?"交易订单":"兑换订单"))]),t._v(" "),a("span",[t._v("商户名称："+t._s(null!==e.company?e.company.name:""))])])])],1),t._v(" "),t._l(e.order_products,(function(n,s){return a("el-row",{key:s,staticClass:"orderMain"},[a("el-col",{staticClass:"orderName",attrs:{span:12}},[a("div",{staticClass:"orderImg"},[a("img",{attrs:{src:n.product.default_image}})]),t._v(" "),a("div",{staticClass:"orderNum"},[a("p",[t._v(t._s(null!==n.product?n.product.name:""))]),t._v(" "),a("p",[t._v("X"+t._s(n.number))])])]),t._v(" "),a("el-col",{staticClass:"orderCoin orderStyle",attrs:{span:4}},[a("p",[t._v("￥"+t._s(n.view_amount))])]),t._v(" "),a("el-col",{staticClass:"orderStyle",attrs:{span:4}},[t._v("\n              "+t._s("pay"===e.status?"待发货":"")+"\n              "+t._s("send"===e.status?"已发货":"")+"\n              "+t._s("receive"===e.status?"已完成":"")+"\n              "+t._s("cancel"===e.status?"已取消":"")+"\n            ")]),t._v(" "),a("el-col",{staticClass:"orderStyle",attrs:{span:4}},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.goDetail(e.id,t.query)}}},[t._v("查看详情")])],1)],1)}))],2)})),0)]),t._v(" "),t.total?a("div",{staticClass:"pagingBox"},[a("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},s=[],r=(a("28a5"),a("c5f6"),a("ac6a"),a("3a10")),i=a("a883"),l={props:{query:{type:String,required:!0}},data:function(){return{dialogTableVisible:!1,statesList:[{value:"0",label:"商品名称"},{value:"1",label:"订单编号"}],typeList:[{value:"0",label:"全部类型"},{value:"1",label:"交易订单"},{value:"2",label:"抽奖订单"}],typeDetailList:[],stateValue:"",typeValue:"",typeDetailValue:"",tableData:[],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,currentstatus:"",pickerOptions2:{shortcuts:[{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}}]},value7:"",form:{name:"0909090",company:""},listQuery:{page:1,type:"Order::MoneyOrder",name:"",no:"",status:"",company_id:"",date_from:"",date_to:"",per_page:10}}},watch:{$route:function(t,e){var a=this;console.log(t),this.currentstatus=this.$route.params.id,this.tableData.forEach((function(t){t.type=a.$route.params.id}))},stateValue:function(t){"0"===t&&(this.listQuery.no=""),"1"===t&&(this.listQuery.name="")}},created:function(){this.getInit(),this.getCompaines()},methods:{getInit:function(){var t=this;this.listQuery.page=this.searchOption.pagination.currentPage,this.listQuery.status="1"===this.query?"pay":"2"===this.query?"send":"3"===this.query?"receive":"cancel","2"===this.typeValue?this.listQuery.game=1:this.listQuery.game=0,this.listQuery.company_id=this.typeDetailValue;var e=this.listQuery;Object(r["g"])(e).then((function(e){console.log(e),t.tableData=e.data,t.total=Number(e.headers["x-total"])}))},getCompaines:function(){var t=this,e={page:1,status:"",search:"",per_page:999999};Object(i["e"])(e).then((function(e){console.log(e.data),t.typeDetailList=e.data}))},handleCurrentChange:function(t){console.log(t),this.searchOption.pagination.currentPage=t,this.getInit()},handleSelectionChange:function(t){console.log(t)},goDetail:function(t,e){this.$router.push({path:"merchantOrderDetails?orderId=".concat(t,"&status=").concat(e)})},dataTimeChange:function(t){t[0]&&t[1]&&(this.listQuery.date_from=this.$formatDate(t[0].getTime()).split(" ")[0],this.listQuery.date_to=this.$formatDate(t[1].getTime()).split(" ")[0],this.getInit())},searchValueChange:function(){this.getInit()}}},o=l,u=(a("66ff"),a("2877")),c=Object(u["a"])(o,n,s,!1,null,"c45229ae",null);e["default"]=c.exports}}]);