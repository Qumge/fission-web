(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79fdbeb6","chunk-600fd891"],{1843:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("TopTitle",{attrs:{title:t.title}}),t._v(" "),r("div",{staticClass:"orderDetailsMain"},[r("div",{staticClass:"orderMain"},[r("el-row",{staticClass:"orderTitle"},[r("el-col",{attrs:{span:4}},[r("h3",[t._v("图片")])]),t._v(" "),r("el-col",{attrs:{span:12}},[r("h3",[t._v("商品名称")])]),t._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[t._v("数量")])]),t._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[t._v("金额")])])],1),t._v(" "),t._l(t.order.good,(function(e,n){return r("el-row",{key:n,staticClass:"orderInfo",staticStyle:{"border-bottom":"#ccc solid 1px"}},[r("el-col",{attrs:{span:4}},[r("img",{attrs:{src:e.product.default_image}})]),t._v(" "),r("el-col",{attrs:{span:12}},[t._v(t._s(e.product.name))]),t._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[t._v(t._s(e.number))])]),t._v(" "),r("el-col",{attrs:{span:4}},[t._v("￥"+t._s(e.product.coin)+"金币")])],1)}))],2),t._v(" "),t.order.sendInfo.hideValue?t._e():r("div",{staticClass:"sendInfo"},[r("h3",[t._v("退货信息")]),t._v(" "),r("div",[t._v("收获地址："+t._s(t.order.sendInfo.customer)+"，"+t._s(t.order.sendInfo.phone)+"，"+t._s(t.order.sendInfo.address))]),t._v(" "),r("div",[t._v("配送状态：\n        "+t._s("0"===t.order.sendInfo.status?"快递收件(揽件)":"")+"\n        "+t._s("1"===t.order.sendInfo.status?"在途中":"")+"\n        "+t._s("2"===t.order.sendInfo.status?"正在派件":"")+"\n        "+t._s("3"===t.order.sendInfo.status?"已签收":"")+"\n        "+t._s("4"===t.order.sendInfo.status?"派送失败":"")+"\n        "+t._s("5"===t.order.sendInfo.status?"疑难件":"")+"\n        "+t._s("6"===t.order.sendInfo.status?"退件签收":"")+"\n      ")]),t._v(" "),r("div",[t._v("快递公司："+t._s(t.order.sendInfo.company))]),t._v(" "),r("div",[t._v("快递单号："+t._s(t.order.sendInfo.companyNum))]),t._v(" "),r("div",[t._v("物流跟踪：\n        "),r("el-timeline",{staticStyle:{"margin-left":"20px"}},t._l(t.order.sendInfo.list,(function(e,n){return r("el-timeline-item",{key:n,attrs:{timestamp:e.time}},[t._v("\n            "+t._s(e.status)+"\n          ")])})),1)],1)]),t._v(" "),r("div",{staticClass:"sendOrderInfo"},[r("h3",[t._v("售后单信息")]),t._v(" "),r("div",[t._v("售后单编号："+t._s(t.order.orderInfo.orderNO))]),t._v(" "),"apply"===t.order.status?r("div",[t._v("售后单状态：申请")]):t._e(),t._v(" "),"agree"===t.order.status?r("div",[t._v("售后单状态：已同意")]):t._e(),t._v(" "),"failed"===t.order.status?r("div",[t._v("售后单状态：已拒绝")]):t._e(),t._v(" "),"receive"===t.order.status?r("div",[t._v("售后单状态：已退货，待退款")]):t._e(),t._v(" "),"refund"===t.order.status?r("div",[t._v("售后单状态：已退款")]):t._e(),t._v(" "),r("div",[t._v("申请时间："+t._s(t.order.orderInfo.time))]),t._v(" "),r("div",[t._v("客户："+t._s(t.order.orderInfo.customer))])]),t._v(" "),r("div",{staticClass:"orderBtn"},[r("el-button",{on:{click:t.back}},[t._v("返回")]),t._v(" "),"agree"===t.order.status&&"AfterOrder::All"===t.order.type?r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.SingleOperate(t.order.id,3)}}},[t._v("已发货")]):t._e(),t._v(" "),"apply"===t.order.status?r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.SingleOperate(t.order.id,2)}}},[t._v("拒绝")]):t._e(),t._v(" "),"apply"===t.order.status?r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.SingleOperate(t.order.id,1)}}},[t._v("同意")]):t._e()],1)])],1)},s=[],o=(r("7f7f"),r("7b94")),a=r("3a10"),d={components:{TopTitle:o["a"]},data:function(){return{title:"售后订单详情",order:{id:"",status:"",good:[],sendInfo:{address:"",customer:"",phone:"",status:1,company:"",companyNum:"",companyInfo:"",hideValue:!1},orderInfo:{orderNO:"",orderStatus:1,customer:"",time:"",status:2}}}},created:function(){this.getDetails(),this.getLogisticsInfo()},methods:{getDetails:function(){var t=this,e=this.$route.query.orderId;Object(a["a"])(e).then((function(e){console.log(e),t.order.good=e.data.order.order_products,t.order.orderInfo.orderNO=e.data.order.no,t.order.orderInfo.status="pay"===e.data.order.status?"待发货":"send"===e.data.status?"已发货":"receive"===e.data.status?"已完成":"已取消",t.order.orderInfo.customer=e.data.order.user.nick_name,t.order.orderInfo.time=e.data.order.created_at,t.order.orderInfo.orderStatus="Order::CoinOrder"===e.data.order.type?"兑换订单":"交易订单",t.order.sendInfo.address=e.data.order.address.content,t.order.sendInfo.customer=e.data.order.address.name,t.order.sendInfo.phone=e.data.order.address.phone,t.order.status=e.data.status,t.order.id=e.data.id}))},getLogisticsInfo:function(){var t=this,e=this.$route.query.orderId;Object(a["b"])(e).then((function(e){console.log(e),"201"===e.data.status?(t.order.sendInfo.hideValue=!0,t.$message.error(e.data.msg)):"0"===e.data.status&&(t.order.sendInfo.hideValue=!1,t.order.sendInfo.company=e.data.result.expName,t.order.sendInfo.companyNum=e.data.result.number,t.order.sendInfo.list=e.data.result.list,t.order.sendInfo.status=e.data.result.deliverystatus)}))},SingleOperate:function(t,e){var r=this,n={1:{title:"是否同意该订单售后操作？",value:"agree"},2:{title:"是否拒绝该订单售后操作？",value:"failed"},3:{title:"确定该订单是否已收货？",value:"receive"}},s={status:n[e].value},o=this.$qs.stringify(s);this.$confirm(n[e].title,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["d"])(t,o).then((function(t){console.log(t),r.$message({message:"操作成功",type:"success"}),r.$router.go(-1)}))}))},back:function(){this.$router.go(-1)}}},i=d,u=(r("45fd"),r("2877")),c=Object(u["a"])(i,n,s,!1,null,"3b20a253",null);e["default"]=c.exports},"1b29":function(t,e,r){"use strict";var n=r("3812"),s=r.n(n);s.a},3812:function(t,e,r){},"3a10":function(t,e,r){"use strict";r.d(e,"g",(function(){return s})),r.d(e,"h",(function(){return o})),r.d(e,"f",(function(){return a})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r("b775");function s(t){return n["a"].get("orders",{params:t})}function o(t,e){return n["a"].post("orders/".concat(t,"/send"),e)}function a(t){return n["a"].get("orders/".concat(t))}function d(t){return n["a"].get("orders/".concat(t,"/express"))}function i(t){return n["a"].get("after_orders",{params:t})}function u(t,e){return n["a"].post("after_orders/".concat(t,"/after_sale"),e)}function c(t){return n["a"].get("after_orders/".concat(t))}function l(t){return n["a"].get("after_orders/".concat(t,"/express"))}},"45fd":function(t,e,r){"use strict";var n=r("d237"),s=r.n(n);s.a},"7b94":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topTitle"},[r("span"),r("span",{staticClass:"title"},[t._v(t._s(t.title))])])},s=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},a=o,d=(r("1b29"),r("2877")),i=Object(d["a"])(a,n,s,!1,null,"b4ebadd8",null);e["a"]=i.exports},d237:function(t,e,r){}}]);