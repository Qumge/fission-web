(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a628426e","chunk-600fd891"],{"1b29":function(t,e,n){"use strict";var a=n("3812"),i=n.n(a);i.a},"34b1":function(t,e,n){"use strict";var a=n("726e"),i=n.n(a);i.a},3812:function(t,e,n){},"726e":function(t,e,n){},"7b94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTitle"},[n("span"),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},i=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},s=o,r=(n("1b29"),n("2877")),l=Object(r["a"])(s,a,i,!1,null,"b4ebadd8",null);e["a"]=l.exports},a0ce:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"displayContent"},[n("Tab1",{attrs:{type:t.activeName}})],1)],1)},i=[],o=n("7b94"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-row",{attrs:{getter:30}},[n("el-col",{attrs:{span:3}},[n("router-link",{attrs:{to:t.tableData.length<6?"editAdvertisement":""}},[n("el-button",{class:t.tableData.length<6?"":"iconFalse",attrs:{type:"text",icon:"el-icon-plus"}},[t._v("添加任务广告")])],1)],1),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"tips"},[t._v("最多添加6个")])])],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"id",label:"编号","min-width":"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"image.image_path",label:"banner图片","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!==e.row.image.image_path?n("img",{staticStyle:{height:"50px"},attrs:{src:e.row.image.image_path,alt:""}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"task.type",label:"类型","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.task&&"Task::ArticleTask"===e.row.task.type?"阅读任务":"")+"\n        "+t._s(e.row.task&&"Task::ProductTask"===e.row.task.type?"商品任务":"")+"\n        "+t._s(e.row.task&&"Task::GameTask"===e.row.task.type?"游戏任务":"")+"\n        "+t._s(e.row.task&&"Task::QuestionnaireTask"===e.row.task.type?"调查任务":"")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"task.name",label:"名称","min-width":"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"data7",width:"230",label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"editAdvertisement?id="+e.row.id}},[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])],1),t._v(" "),1!=t.tableData.length&&0!=e.$index?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,1)}}},[t._v("上移")]):t._e(),t._v(" "),e.$index!=t.tableData.length-1&&1!=t.tableData.length?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,2)}}},[t._v("下移")]):t._e(),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,3)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-dialog",{attrs:{title:t.dialogTipContent.title,visible:t.dialogTipContent.visible,width:"30%",center:""},on:{"update:visible":function(e){return t.$set(t.dialogTipContent,"visible",e)}}},[n("el-input",{attrs:{type:t.dialogTipContent.type,rows:2,maxlength:t.dialogTipContent.maxlength,placeholder:t.dialogTipContent.placeholder},model:{value:t.dialogTipContent.content,callback:function(e){t.$set(t.dialogTipContent,"content",e)},expression:"dialogTipContent.content"}}),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogTipContent.visible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTipContent.visible=!1}}},[t._v("确 定")])],1)],1)],1)},r=[],l=n("f6c5"),c=n("ed08"),u={data:function(){return{tableData:[],currentstatus:"",dialogStatus:!1,centerDialogVisible:!1,dialogTipContent:{maxlength:50,content:"",title:"",placeholder:"",type:"",visible:!1},reason:""}},created:function(){this.getList()},methods:{formatDate:c["d"],getList:function(){var t=this,e={type:"Banner::CompanyBanner",page:1,per_page:15};Object(l["d"])(e).then((function(e){200===e.status&&(t.tableData=e.data)}))},SingleOperation:function(t,e){this.messageBox(t,e)},messageBox:function(t,e){var n=this,a={1:"上移",2:"下移",3:"删除"};this.$confirm("是否将此商品".concat(a[e]),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if(3===e){var i={type:"Banner::CompanyBanner"};Object(l["b"])(t,i).then((function(t){200===t.status&&(n.$message({type:"success",message:"".concat(a[e],"成功")}),n.getList())}))}else if(1===e||2===e){var o=1===e?"up":"down",s=new FormData;s.append("type","Banner::CompanyBanner"),s.append("action",o),Object(l["f"])(t,s).then((function(t){200===t.status&&(n.$message({type:"success",message:"".concat(a[e],"成功")}),n.getList())}))}})).catch((function(){n.$message({type:"info",message:"已取消".concat(a[e])})}))},controlCenterDialogVisible:function(){}}},p=u,d=(n("34b1"),n("2877")),f=Object(d["a"])(p,s,r,!1,null,"4e31cba4",null),b=f.exports,g={components:{Tab1:b,TopTitle:o["a"]},data:function(){return{activeName:"first",title:"广告位配置"}},methods:{handleClick:function(t){console.log(this.activeName)}}},m=g,v=Object(d["a"])(m,a,i,!1,null,"35930eaf",null);e["default"]=v.exports},f6c5:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return u}));var a=n("b775");function i(t){return a["a"].get("banners",{params:t})}function o(t){return a["a"].post("banners",t)}function s(t,e){return a["a"].get("banners/".concat(t),{params:e})}function r(t,e){return a["a"].post("banners/".concat(t,"/sort"),e)}function l(t,e){return a["a"].patch("banners/".concat(t),e)}function c(t,e){return a["a"].delete("banners/".concat(t),{params:e})}function u(t){return a["a"].get("posts",{params:t})}}}]);