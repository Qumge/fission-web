(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf4e6e54","chunk-600fd891"],{"0c1d":function(e,t,r){"use strict";var n=r("1b4c"),s=r.n(n);s.a},"1b29":function(e,t,r){"use strict";var n=r("3812"),s=r.n(n);s.a},"1b4c":function(e,t,r){},3812:function(e,t,r){},"3a10":function(e,t,r){"use strict";r.d(t,"g",(function(){return s})),r.d(t,"h",(function(){return o})),r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return d})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r("b775");function s(e){return n["a"].get("orders",{params:e})}function o(e,t){return n["a"].post("orders/".concat(e,"/send"),t)}function a(e){return n["a"].get("orders/".concat(e))}function d(e){return n["a"].get("orders/".concat(e,"/express"))}function i(e){return n["a"].get("after_orders",{params:e})}function u(e,t){return n["a"].post("after_orders/".concat(e,"/after_sale"),t)}function c(e){return n["a"].get("after_orders/".concat(e))}function l(e){return n["a"].get("after_orders/".concat(e,"/express"))}},"7b94":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"topTitle"},[r("span"),r("span",{staticClass:"title"},[e._v(e._s(e.title))])])},s=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},a=o,d=(r("1b29"),r("2877")),i=Object(d["a"])(a,n,s,!1,null,"b4ebadd8",null);t["a"]=i.exports},"8a1c":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("TopTitle",{attrs:{title:e.title}}),e._v(" "),r("div",{staticClass:"orderDetailsMain"},[r("div",{staticClass:"orderMain"},[r("el-row",{staticClass:"orderTitle"},[r("el-col",{attrs:{span:4}},[r("h3",[e._v("图片")])]),e._v(" "),r("el-col",{attrs:{span:12}},[r("h3",[e._v("商品名称")])]),e._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[e._v("数量")])]),e._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[e._v("金额")])])],1),e._v(" "),e._l(e.order.good,(function(t,n){return r("el-row",{key:n,staticClass:"orderInfo",staticStyle:{"border-bottom":"#ccc solid 1px"}},[r("el-col",{attrs:{span:4}},[r("img",{attrs:{src:t.product.default_image}})]),e._v(" "),r("el-col",{attrs:{span:12}},[e._v(e._s(t.product.name))]),e._v(" "),r("el-col",{attrs:{span:4}},[r("h3",[e._v(e._s(t.number))])]),e._v(" "),r("el-col",{attrs:{span:4}},[e._v("￥"+e._s(t.view_amount))])],1)}))],2),e._v(" "),e.order.sendInfo.hideValue?e._e():r("div",{staticClass:"sendInfo"},[r("h3",[e._v("退货信息")]),e._v(" "),r("div",[e._v("收获地址："+e._s(e.order.sendInfo.customer)+"，"+e._s(e.order.sendInfo.phone)+"，"+e._s(e.order.sendInfo.address))]),e._v(" "),r("div",[e._v("配送状态：\n        "+e._s("0"===e.order.sendInfo.status?"快递收件(揽件)":"")+"\n        "+e._s("1"===e.order.sendInfo.status?"在途中":"")+"\n        "+e._s("2"===e.order.sendInfo.status?"正在派件":"")+"\n        "+e._s("3"===e.order.sendInfo.status?"已签收":"")+"\n        "+e._s("4"===e.order.sendInfo.status?"派送失败":"")+"\n        "+e._s("5"===e.order.sendInfo.status?"疑难件":"")+"\n        "+e._s("6"===e.order.sendInfo.status?"退件签收":"")+"\n        "+e._s(void 0===e.order.sendInfo.status?"无":"")+"\n      ")]),e._v(" "),r("div",[e._v("快递公司："+e._s(void 0===e.order.sendInfo.company?"无":e.order.sendInfo.company))]),e._v(" "),r("div",[e._v("快递单号："+e._s(e.order.sendInfo.companyNum))]),e._v(" "),r("div",[e._v("物流跟踪：\n        "),r("el-timeline",{staticStyle:{"margin-left":"20px"}},e._l(e.order.sendInfo.list,(function(t,n){return r("el-timeline-item",{key:n,attrs:{timestamp:t.time}},[e._v("\n            "+e._s(t.status)+"\n          ")])})),1)],1)]),e._v(" "),r("div",{staticClass:"sendOrderInfo"},[r("h3",[e._v("售后单信息")]),e._v(" "),r("div",[e._v("售后单编号："+e._s(e.order.orderInfo.orderNO))]),e._v(" "),"apply"===e.order.status?r("div",[e._v("售后单状态：申请")]):e._e(),e._v(" "),"agree"===e.order.status?r("div",[e._v("售后单状态：已同意")]):e._e(),e._v(" "),"failed"===e.order.status?r("div",[e._v("售后单状态：已拒绝")]):e._e(),e._v(" "),"receive"===e.order.status?r("div",[e._v("售后单状态：已退货，待退款")]):e._e(),e._v(" "),"refund"===e.order.status?r("div",[e._v("售后单状态：已退款")]):e._e(),e._v(" "),r("div",[e._v("申请时间："+e._s(e.order.orderInfo.time))]),e._v(" "),r("div",[e._v("客户："+e._s(e.order.orderInfo.customer))])]),e._v(" "),r("div",{staticClass:"orderBtn"},["agree"===e.order.status&&"AfterOrder::All"===e.order.type?r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.SingleOperate(e.order.id,3)}}},[e._v("已发货")]):e._e(),e._v(" "),"apply"===e.order.status?r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.SingleOperate(e.order.id,2)}}},[e._v("拒绝")]):e._e(),e._v(" "),"apply"===e.order.status?r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.SingleOperate(e.order.id,1)}}},[e._v("同意")]):e._e(),e._v(" "),r("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)])],1)},s=[],o=(r("7f7f"),r("7b94")),a=r("3a10"),d={components:{TopTitle:o["a"]},data:function(){return{title:"售后订单详情",order:{id:"",status:"",good:[],sendInfo:{address:"",customer:"",phone:"",status:1,company:"",companyNum:"",companyInfo:"",hideValue:!1},orderInfo:{orderNO:"",orderStatus:1,customer:"",time:"",status:2}}}},created:function(){this.getDetails()},methods:{getDetails:function(){var e=this,t=this.$route.query.orderId;Object(a["a"])(t).then((function(t){200===t.status&&(e.order.good=t.data.order.order_products,e.order.orderInfo.orderNO=t.data.order.no,e.order.orderInfo.status="pay"===t.data.order.status?"待发货":"send"===t.data.status?"已发货":"receive"===t.data.status?"已完成":"已取消",e.order.orderInfo.customer=t.data.order.user.nick_name,e.order.orderInfo.time=t.data.order.created_at,e.order.orderInfo.orderStatus="Order::CoinOrder"===t.data.order.type?"兑换订单":"交易订单",e.order.sendInfo.address=t.data.order.address.content,e.order.sendInfo.customer=t.data.order.address.name,e.order.sendInfo.phone=t.data.order.address.phone,e.order.status=t.data.status,e.order.id=t.data.id,null!==t.data.express_no?e.getLogisticsInfo():e.order.sendInfo.hideValue=!0)}))},getLogisticsInfo:function(){var e=this,t=this.$route.query.orderId;Object(a["b"])(t).then((function(t){200===t.status&&("0"===t.data.status?(e.order.sendInfo.company=t.data.result.expName,e.order.sendInfo.companyNum=t.data.result.number,e.order.sendInfo.list=t.data.result.list,e.order.sendInfo.status=t.data.result.deliverystatus,e.order.sendInfo.hideValue=!1):(e.order.sendInfo.hideValue=!0,e.$message.error(t.data.msg)))}))},SingleOperate:function(e,t){var r=this,n={1:{title:"是否同意该订单售后操作？",value:"agree"},2:{title:"是否拒绝该订单售后操作？",value:"failed"},3:{title:"确定该订单是否已收货？",value:"receive"}},s={status:n[t].value},o=this.$qs.stringify(s);this.$confirm(n[t].title,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["d"])(e,o).then((function(e){200===e.status&&(r.$message({message:"操作成功",type:"success"}),r.$router.go(-1))}))}))},goBack:function(){this.$router.go(-1)}}},i=d,u=(r("0c1d"),r("2877")),c=Object(u["a"])(i,n,s,!1,null,"48e27142",null);t["default"]=c.exports}}]);