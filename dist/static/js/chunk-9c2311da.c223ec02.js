(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c2311da","chunk-600fd891"],{"16c3":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("TopTitle",{attrs:{title:t.title}}),t._v(" "),o("div",{staticClass:"orderDetailsMain"},[o("div",{staticClass:"orderMain"},[o("el-row",{staticClass:"orderTitle"},[o("el-col",{attrs:{span:4}},[o("h3",[t._v("图片")])]),t._v(" "),o("el-col",{attrs:{span:12}},[o("h3",[t._v("商品名称")])]),t._v(" "),o("el-col",{attrs:{span:4}},[o("h3",[t._v("数量")])]),t._v(" "),o("el-col",{attrs:{span:4}},[o("h3",[t._v("金额")])])],1),t._v(" "),o("el-row",{staticClass:"orderInfo"},[o("el-col",{attrs:{span:4}},[o("img",{attrs:{src:t.$commonImg}})]),t._v(" "),o("el-col",{attrs:{span:12}},[t._v(t._s(t.order.good.goodName))]),t._v(" "),o("el-col",{attrs:{span:4}},[o("h3",[t._v(t._s(t.order.good.goodNum))])]),t._v(" "),o("el-col",{attrs:{span:4}},[o("i",{staticClass:"el-icon-circle-close-outline"}),t._v(t._s(t.order.good.goodPrice)+"金币")])],1)],1),t._v(" "),o("div",{staticClass:"sendInfo"},[o("h3",[t._v("配送信息")]),t._v(" "),o("div",[t._v("收获地址："+t._s(t.order.sendInfo.customer)+"，"+t._s(t.order.sendInfo.phone)+"，"+t._s(t.order.sendInfo.address))]),t._v(" "),o("div",[t._v("配送状态："+t._s(1===t.order.sendInfo.status?"已配送":"待配送"))]),t._v(" "),o("div",[t._v("快递公司："+t._s(t.order.sendInfo.company))]),t._v(" "),o("div",[t._v("快递单号："+t._s(t.order.sendInfo.companyNum))]),t._v(" "),o("div",[t._v("物流跟踪："+t._s(t.order.sendInfo.companyInfo))])]),t._v(" "),o("div",{staticClass:"sendOrderInfo"},[o("h3",[t._v("订单信息")]),t._v(" "),o("div",[t._v("订单编号："+t._s(t.order.orderInfo.orderNo))]),t._v(" "),o("div",[t._v("订单状态："+t._s(1===t.order.orderInfo.status?"已发货":"待发货"))]),t._v(" "),o("div",[t._v("客户："+t._s(t.order.orderInfo.customer))]),t._v(" "),o("div",[t._v("下单时间："+t._s(t.order.orderInfo.time))]),t._v(" "),o("div",[t._v("订单类型："+t._s(1===t.order.orderInfo.orderStatus?"兑换订单":"交易订单"))])]),t._v(" "),o("div",{staticClass:"orderBtn"},["3"===t.order.status?o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("发货")]):t._e()],1)]),t._v(" "),o("el-dialog",{attrs:{title:"发货",visible:t.dialogTableVisible,center:"",width:"40%"},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[o("div",{staticClass:"sendInfo"},[o("h3",[t._v("订单编号："),o("span",[t._v("90908102382")])]),t._v(" "),o("h3",[t._v("收获地址："),o("span",[t._v("李晓明，13898979981，上海市长宁区临新路268弄")])])]),t._v(" "),o("el-form",{attrs:{model:t.form}},[o("el-form-item",{attrs:{label:"快递公司:"}},[o("el-select",{attrs:{placeholder:"请选择快递公司"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"快递单号:"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("确 定")])],1)],1)],1)},r=[],a=o("7b94"),n={components:{TopTitle:a["a"]},data:function(){return{title:"订单详情",dialogTableVisible:!1,order:{img:"",status:"",good:{goodName:"商品名称2商品1商品3商品4商品5",goodNum:"3",goodPrice:"800"},sendInfo:{address:"上海市临新路268弄扬子江国际企业广场",customer:"李晓明",phone:"18790901890",status:1,company:"圆通快递",companyNum:"01808900808",companyInfo:"2019.11.11 10.00.09 上海市长宁区快递服务站"},orderInfo:{orderNO:"091090808091",orderStatus:1,customer:"赵丽颖",time:"2019.11.10 15:28:29",status:2}},form:{name:"0909090",company:""}}},created:function(){console.log(this.$route.query.afterSaleStatus),this.$set(this.order,"status",this.$route.query.afterSaleStatus),console.log(this.order.status)}},i=n,l=(o("ffae"),o("2877")),d=Object(l["a"])(i,s,r,!1,null,"6406f0f3",null);e["default"]=d.exports},"1b29":function(t,e,o){"use strict";var s=o("3812"),r=o.n(s);r.a},"2b38":function(t,e,o){},3812:function(t,e,o){},"7b94":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"topTitle"},[o("span"),o("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],a={props:{title:{type:String,required:!0}},data:function(){return{}}},n=a,i=(o("1b29"),o("2877")),l=Object(i["a"])(n,s,r,!1,null,"b4ebadd8",null);e["a"]=l.exports},ffae:function(t,e,o){"use strict";var s=o("2b38"),r=o.n(s);r.a}}]);