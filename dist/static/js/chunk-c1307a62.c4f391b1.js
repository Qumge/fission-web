(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1307a62","chunk-600fd891"],{"0128":function(e,t,r){"use strict";var o=r("033b"),s=r.n(o);s.a},"033b":function(e,t,r){},"16c3":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("TopTitle",{attrs:{title:e.title}}),e._v(" "),r("div",{staticClass:"orderDetailsMain"},[r("div",{staticClass:"orderMain"},[r("el-row",{staticClass:"orderTitle"},[r("el-col",{attrs:{span:4}},[r("h3",[e._v("图片")])]),e._v(" "),r("el-col",{attrs:{span:12}},[r("h3",[e._v("商品名称")])]),e._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[e._v("数量")])]),e._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[e._v("金额")])])],1),e._v(" "),e._l(e.order.good,(function(t,o){return r("el-row",{key:o,staticClass:"orderInfo",staticStyle:{"border-bottom":"#ccc solid 1px"}},[r("el-col",{attrs:{span:4}},[r("img",{attrs:{src:t.product.default_image}})]),e._v(" "),r("el-col",{attrs:{span:12}},[e._v(e._s(t.product.name))]),e._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[e._v(e._s(t.number))])]),e._v(" "),r("el-col",{attrs:{span:4}},[e._v("￥"+e._s(t.view_price)+"金币")])],1)}))],2),e._v(" "),e.order.sendInfo.hideValue?e._e():r("div",{staticClass:"sendInfo"},[r("h3",[e._v("配送信息")]),e._v(" "),r("div",[e._v("收货地址："+e._s(e.order.sendInfo.customer)+"，"+e._s(e.order.sendInfo.phone)+"，"+e._s(e.order.sendInfo.address))]),e._v(" "),r("div",[e._v("配送状态：\n        "+e._s("0"===e.order.sendInfo.status?"快递收件(揽件)":"")+"\n        "+e._s("1"===e.order.sendInfo.status?"在途中":"")+"\n        "+e._s("2"===e.order.sendInfo.status?"正在派件":"")+"\n        "+e._s("3"===e.order.sendInfo.status?"已签收":"")+"\n        "+e._s("4"===e.order.sendInfo.status?"派送失败":"")+"\n        "+e._s("5"===e.order.sendInfo.status?"疑难件":"")+"\n        "+e._s("6"===e.order.sendInfo.status?"退件签收":"")+"\n      ")]),e._v(" "),r("div",[e._v("快递公司："+e._s(e.order.sendInfo.company))]),e._v(" "),r("div",[e._v("快递单号："+e._s(e.order.sendInfo.companyNum))]),e._v(" "),r("div",{staticClass:"block"},[e._v("\n        物流跟踪：\n        "),r("el-timeline",{staticStyle:{"margin-left":"20px"}},e._l(e.order.sendInfo.list,(function(t,o){return r("el-timeline-item",{key:o,attrs:{timestamp:t.time}},[e._v("\n            "+e._s(t.status)+"\n          ")])})),1)],1)]),e._v(" "),r("div",{staticClass:"sendOrderInfo"},[r("h3",[e._v("订单信息")]),e._v(" "),r("div",[e._v("订单编号："+e._s(e.order.orderInfo.orderNO))]),e._v(" "),r("div",[e._v("订单状态："+e._s(e.order.orderInfo.status))]),e._v(" "),r("div",[e._v("客户："+e._s(e.order.orderInfo.customer))]),e._v(" "),r("div",[e._v("下单时间："+e._s(e.order.orderInfo.time))]),e._v(" "),r("div",[e._v("订单类型："+e._s(e.order.orderInfo.orderStatus))])]),e._v(" "),r("div",{staticClass:"orderBtn"},["待发货"===e.order.orderInfo.status?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogTableVisible=!0}}},[e._v("发货")]):e._e(),e._v(" "),r("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)]),e._v(" "),r("el-dialog",{attrs:{title:"发货",visible:e.dialogTableVisible,center:"",width:"40%"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[r("div",{staticClass:"sendInfo"},[r("h3",[e._v("订单编号："),r("span",[e._v(e._s(e.order.orderInfo.orderNO))])]),e._v(" "),r("h3",[e._v("收货地址："),r("span",[e._v(e._s(e.order.sendInfo.customer)+"，"+e._s(e.order.sendInfo.phone)+"，"+e._s(e.order.sendInfo.address))])])]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"快递公司:",prop:"company"}},[r("el-select",{attrs:{placeholder:"请选择快递公司"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}},[r("el-option",{attrs:{value:"EMS",label:"EMS"}}),e._v(" "),r("el-option",{attrs:{value:"STO",label:"申通快递"}}),e._v(" "),r("el-option",{attrs:{value:"YTO",label:"圆通快递"}}),e._v(" "),r("el-option",{attrs:{value:"ZTO",label:"中通快递"}}),e._v(" "),r("el-option",{attrs:{value:"SFEXPRESS",label:"顺丰快递"}}),e._v(" "),r("el-option",{attrs:{value:"YUNDA",label:"韵达快递"}}),e._v(" "),r("el-option",{attrs:{value:"TTKDEX",label:"天天快递"}}),e._v(" "),r("el-option",{attrs:{value:"DEPPON",label:"德邦物流"}}),e._v(" "),r("el-option",{attrs:{value:"HTKY",label:"汇通快递"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"快递单号:",prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.send}},[e._v("确 定")])],1)],1)],1)},s=[],n=(r("7f7f"),r("3a10")),a=r("7b94"),d={components:{TopTitle:a["a"]},data:function(){return{title:"订单详情",dialogTableVisible:!1,order:{img:"",status:"",good:[],sendInfo:{address:"",customer:"",phone:"",status:1,company:"",companyNum:"",companyInfo:"",list:[],hideValue:!1},orderInfo:{orderNO:"",orderStatus:1,customer:"",time:"",status:""}},form:{name:"",company:""},rules:{name:[{required:!0,message:"请输入物流编号",trigger:"blur"}],company:[{required:!0,message:"请选择物流信息",trigger:"change"}]}}},created:function(){this.$set(this.order,"status",this.$route.query.status),"2"===this.order.status||"3"===this.order.status?this.getLogisticsInfo():this.order.sendInfo.hideValue=!0,this.getDetails()},methods:{getDetails:function(){var e=this,t=this.$route.query.orderId;Object(n["f"])(t).then((function(t){200===t.status&&(e.order.good=t.data.order_products,e.order.orderInfo.orderNO=t.data.no,e.order.orderInfo.status="pay"===t.data.status?"待发货":"send"===t.data.status?"已发货":"receive"===t.data.status?"已完成":"已取消",e.order.orderInfo.customer=t.data.user.nick_name,e.order.orderInfo.time=t.data.created_at,e.order.orderInfo.orderStatus="Order::CoinOrder"===t.data.type?"兑换订单":"交易订单",e.order.sendInfo.address=t.data.address.content,e.order.sendInfo.customer=t.data.address.name,e.order.sendInfo.phone=t.data.address.phone)}))},getLogisticsInfo:function(){var e=this,t=this.$route.query.orderId;Object(n["e"])(t).then((function(t){200===t.status&&("0"===t.data.status?(e.order.sendInfo.company=t.data.result.expName,e.order.sendInfo.companyNum=t.data.result.number,e.order.sendInfo.list=t.data.result.list,e.order.sendInfo.status=t.data.result.deliverystatus,e.order.sendInfo.hideValue=!1):(e.order.sendInfo.hideValue=!0,e.$message.error(t.data.msg)))}))},send:function(){var e=this;this.$refs["form"].validate((function(t){if(t){var r={no:e.form.name,name:e.form.company},o=e.$qs.stringify(r),s=e.$route.query.orderId;Object(n["h"])(s,o).then((function(t){200===t.status&&(e.dialogTableVisible=!1)}))}}))},goBack:function(){this.$router.go(-1)}}},i=d,l=(r("0128"),r("2877")),u=Object(l["a"])(i,o,s,!1,null,"35c14d62",null);t["default"]=u.exports},"1b29":function(e,t,r){"use strict";var o=r("3812"),s=r.n(o);s.a},3812:function(e,t,r){},"3a10":function(e,t,r){"use strict";r.d(t,"g",(function(){return s})),r.d(t,"h",(function(){return n})),r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return d})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}));var o=r("b775");function s(e){return o["a"].get("orders",{params:e})}function n(e,t){return o["a"].post("orders/".concat(e,"/send"),t)}function a(e){return o["a"].get("orders/".concat(e))}function d(e){return o["a"].get("orders/".concat(e,"/express"))}function i(e){return o["a"].get("after_orders",{params:e})}function l(e,t){return o["a"].post("after_orders/".concat(e,"/after_sale"),t)}function u(e){return o["a"].get("after_orders/".concat(e))}function c(e){return o["a"].get("after_orders/".concat(e,"/express"))}},"7b94":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"topTitle"},[r("span"),r("span",{staticClass:"title"},[e._v(e._s(e.title))])])},s=[],n={props:{title:{type:String,required:!0}},data:function(){return{}}},a=n,d=(r("1b29"),r("2877")),i=Object(d["a"])(a,o,s,!1,null,"b4ebadd8",null);t["a"]=i.exports}}]);