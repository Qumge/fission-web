(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-171e8a8e"],{"03d5":function(t,e,i){"use strict";var o=i("b51e"),n=i.n(o);n.a},"09f4":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,i,o){return t/=o/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function a(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,i){var s=a(),r=t-s,c=20,l=0;e="undefined"===typeof e?500:e;var u=function t(){l+=c;var a=Math.easeInOutQuad(l,s,r,e);n(a),l<e?o(t):i&&"function"===typeof i&&i()};u()}},"0fef":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("TopTitle",{attrs:{title:t.title}}),t._v(" "),i("div",{staticClass:"displayContent"},[i("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:t.formData,rules:t.formRules,"label-width":"180px"}},[i("el-form-item",{attrs:{label:"选择帖子",prop:"brandName"}},[i("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:t.triggerDialogBanner}},[t._v("从帖子中选择")])],1),t._v(" "),i("el-form-item",{attrs:{label:"banner图片",prop:"goodsImageUrlList"}},[i("MyUpload",{ref:"uploads",attrs:{"file-size":100,"fixed-size":!1,size:{width:300,height:300},proportion:{width:2,height:1},"file-limit":1,"images-list":t.imagesFiles}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.operationButton(1)}}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.operationButton(2)}}},[t._v("取消")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[i("chooseTask",{attrs:{child:t.tableData},on:{updataId:t.changeTaskId}}),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("确 定")])],1)],1)],1)],1)},n=[],a=i("7b94"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-container"},[i("el-row",[i("div",{staticClass:"inputBox fr"},[i("el-input",{attrs:{placeholder:"搜索任务名称",size:"small"},on:{blur:function(e){return t.getList()}},model:{value:t.listQuery.condition1,callback:function(e){t.$set(t.listQuery,"condition1",e)},expression:"listQuery.condition1"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)]),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data},on:{"sort-change":t.sortChange}},[i("el-table-column",{attrs:{prop:"title",label:"帖子标题","min-width":"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"data2",label:"阅读数",sortable:"custom","class-name":t.getSortClass("data5"),"min-width":"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"number",label:"分享数",sortable:"custom","class-name":t.getSortClass("data6"),"min-width":"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"created_at",label:"帖子发布时间","min-width":"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"data5",width:"230",label:"选择","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.id!=t.child.taskId?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id)}}},[t._v("选择")]):t._e(),t._v(" "),e.row.id==t.child.taskId?i("el-button",{staticStyle:{color:"#ccc"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e()]}}])})],1),t._v(" "),t.total?i("div",{staticClass:"pagingBox"},[i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticStyle:{padding:"0"},attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getPost}})],1):t._e()],1)},r=[],c=(i("55dd"),i("c5f6"),i("333d")),l=i("f6c5"),u={components:{Pagination:c["a"]},props:{child:{type:Object,required:!0}},data:function(){return{search:"",listQuery:{page:1,limit:20,condition1:void 0,title:void 0,type:void 0,sort:"+id"},data:[],total:100,currentId:""}},watch:{child:{handler:function(t,e){console.log(t,e),this.getPost()},deep:!0}},created:function(){console.log(this.child),""!==this.child.taskId&&(this.currentId=this.child.taskId),this.getPost()},methods:{getPost:function(){var t=this,e={page:this.listQuery.page,per_page:15,status:"success",search:this.listQuery.condition1};Object(l["e"])(e).then((function(e){console.log(e),t.data=e.data,t.total=Number(e.headers["x-total"])}))},SingleOperation:function(t){this.currentId=t,this.$emit("updataId",t)},handleCurrentChange:function(t){console.log(t)},sortChange:function(t){var e=t.prop,i=t.order;e&&this.sortByID(i,e)},sortByID:function(t,e){this.listQuery.sort="ascending"===t?"+".concat(e):"-".concat(e),console.log(t,e);var i={sorts:JSON.stringify([{column:e,sort:"descending"===t?"desc":"asc"}])};this.getList(i)},getSortClass:function(t){console.log(t);var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":e==="-".concat(t)?"descending":""}}},d=u,f=(i("03d5"),i("2877")),p=Object(f["a"])(d,s,r,!1,null,"889b119e",null),g=p.exports,m=i("a796"),h={components:{TopTitle:a["a"],chooseTask:g,MyUpload:m["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,dialogTableVisible:!1,formData:{goodsClassifyTwo:"",brandName:"",goodsImageUrlList:""},imagesFiles:[],tableData:{taskId:""},formOption:{goodsImageList:[]},formRules:{brandName:[{required:!0,message:"请选择帖子",trigger:"blur"}],goodsImageUrlList:[{required:!0,message:"请上传图片",trigger:"blur"}]},title:"",disabled:!1,dialogTitle:"",type:""}},created:function(){console.log("当前组件渲染完成:"),void 0===this.$route.query.id?this.title="发布任务广告":this.title="编辑任务广告",this.getDetail()},methods:{operationButton:function(t){var e=this;console.log(this.$refs.uploads.images),this.formData.goodsImageUrlList=this.$refs.uploads.images[0],this.formData.brandName=this.tableData.taskId,this.$refs["formNode"].validate((function(i){if(i){var o={type:"Banner::PostBanner",image:e.$refs.uploads.images[0],task_id:e.tableData.taskId},n=e.$qs.stringify(o);if(void 0===e.$route.query.id&&1===t)Object(l["a"])(n).then((function(t){console.log(t),e.$message({message:"添加成功",type:"success"}),e.$router.go(-1)}));else if(void 0!==e.$route.query.id&&1===t){var a=e.$route.query.id;Object(l["g"])(a,n).then((function(t){console.log(t),e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)}))}else 2===t&&e.$router.go(-1)}}))},triggerDialogBanner:function(){this.dialogTableVisible=!0,this.dialogTitle="选择帖子"},changeTaskId:function(t){console.log(t),this.tableData.taskId=t},getDetail:function(){var t=this;if(void 0!==this.$route.query.id){var e=this.$route.query.id,i={type:"Banner::PostBanner"};Object(l["c"])(e,i).then((function(e){console.log(e.data.image),t.imagesFiles.push(e.data.image);var i="Task::ProductTask"===e.data.task.type?"0":"Task::GameTask"===e.data.task.type?"1":"Task::ArticleTask"===e.data.task.type?"3":"2";t.tableData.type=i;var o=["product","game","questionnaire","article"];t.tableData.taskId=e.data.task[o[i]].id,console.log(t.tableData.taskId)}))}}}},b=h,v=Object(f["a"])(b,o,n,!1,null,null,null);e["default"]=v.exports},"11c8":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"g",(function(){return a})),i.d(e,"i",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"k",(function(){return c})),i.d(e,"a",(function(){return l})),i.d(e,"h",(function(){return u})),i.d(e,"j",(function(){return d})),i.d(e,"m",(function(){return f})),i.d(e,"d",(function(){return p})),i.d(e,"e",(function(){return g})),i.d(e,"f",(function(){return m})),i.d(e,"l",(function(){return h}));var o=i("b775");function n(t){return o["a"].get("categories",{params:t})}function a(t){return o["a"].post("categories",t)}function s(t){return o["a"].delete("categories/".concat(t))}function r(t,e){return o["a"].patch("categories/".concat(t),e)}function c(t){return o["a"].get("products",{params:t})}function l(t){return o["a"].post("products/destroy",t)}function u(t){return o["a"].post("products",t)}function d(t){return o["a"].delete("products/".concat(t))}function f(t){return o["a"].get("products/".concat(t))}function p(t,e){return o["a"].patch("products/".concat(t),e)}function g(t){return o["a"].post("products/audit",t)}function m(t){return o["a"].post("products/change_status",t)}function h(){return o["a"].get("qiniu/token")}},"1b29":function(t,e,i){"use strict";var o=i("3812"),n=i.n(o);n.a},2341:function(t,e,i){"use strict";var o=i("2de7"),n=i.n(o);n.a},"2de7":function(t,e,i){},"2f21":function(t,e,i){"use strict";var o=i("79e5");t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3812:function(t,e,i){},"55dd":function(t,e,i){"use strict";var o=i("5ca1"),n=i("d8e8"),a=i("4bf8"),s=i("79e5"),r=[].sort,c=[1,2,3];o(o.P+o.F*(s((function(){c.sort(void 0)}))||!s((function(){c.sort(null)}))||!i("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(a(this)):r.call(a(this),n(t))}})},"7b94":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topTitle"},[i("span"),i("span",{staticClass:"title"},[t._v(t._s(t.title))])])},n=[],a={props:{title:{type:String,required:!0}},data:function(){return{}}},s=a,r=(i("1b29"),i("2877")),c=Object(r["a"])(s,o,n,!1,null,"b4ebadd8",null);e["a"]=c.exports},a796:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.disabled?i("div",[i("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):i("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:t.fileLimit,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[i("i",{staticClass:"el-icon-plus"}),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n      "+t._s(t.fixedSize?"建议图片尺寸"+t.size.width+"*"+t.size.height+"px ，大小不超过"+t.fileSize+"k":"建议图片比例是"+t.proportion.width+"（宽）："+t.proportion.height+"（高），大小不超过"+t.fileSize+"k")+"\n    ")])])],1)},n=[],a=(i("28a5"),i("7f7f"),i("ac6a"),i("c5f6"),i("11c8")),s=i("5f87"),r={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var t=this;this.imagesList&&this.imagesList.length>0&&this.imagesList.forEach((function(e){var i={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(i),t.images.push(e.file_path)}))},deep:!0}},created:function(){var t=this;this.$nextTick((function(){console.log(t.imagesList),t.imagesList&&t.imagesList.length>0&&t.imagesList.forEach((function(e){var i={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(i),t.images.push(e.file_path)}))}))},mounted:function(){var t=this;Object(a["l"])().then((function(e){t.QiniuData.token=e.data.qiniu_token}))},methods:{handleAvatarSuccessSpecifications:function(t,e,i,o){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(i),console.log(o),"000"===t.code?this.$set(this.formData.specificationsList[o],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),this.QiniuData.key="".concat(Object(s["c"])()).concat(t.name),e},handleAvatarSuccess:function(t,e,i){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(i),this.uploadPicUrl="".concat(t.key),console.log(this.uploadPicUrl);var o=[];console.log(i),i.forEach((function(t){"aaa"===t.name?o.push(t.url.split("//")[1].split("/")[1]):o.push("".concat(t.response.key))})),this.images=o,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(t,e){console.log("文件列表移除文件:");var i=[];console.log(e),e.forEach((function(t){"aaa"===t.name?i.push(t.url.split("//")[1].split("/")[1]):i.push("".concat(t.response.key))})),this.images=i,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 ".concat(this.fileLimit," 个文件，本次选择了 ").concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))}}},c=r,l=(i("2341"),i("2877")),u=Object(l["a"])(c,o,n,!1,null,null,null);e["a"]=u.exports},b51e:function(t,e,i){},f6c5:function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"a",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"f",(function(){return r})),i.d(e,"g",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"e",(function(){return u}));var o=i("b775");function n(t){return o["a"].get("banners",{params:t})}function a(t){return o["a"].post("banners",t)}function s(t,e){return o["a"].get("banners/".concat(t),{params:e})}function r(t,e){return o["a"].post("banners/".concat(t,"/sort"),e)}function c(t,e){return o["a"].patch("banners/".concat(t),e)}function l(t,e){return o["a"].delete("banners/".concat(t),{params:e})}function u(t){return o["a"].get("posts",{params:t})}}}]);