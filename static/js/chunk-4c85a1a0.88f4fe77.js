(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c85a1a0"],{"1b29":function(o,t,a){"use strict";var e=a("3812"),s=a.n(e);s.a},3812:function(o,t,a){},"7b94":function(o,t,a){"use strict";var e=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{staticClass:"topTitle"},[a("span"),a("span",{staticClass:"title"},[o._v(o._s(o.title))])])},s=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},n=i,r=(a("1b29"),a("2877")),l=Object(r["a"])(n,e,s,!1,null,"b4ebadd8",null);t["a"]=l.exports},"86ae":function(o,t,a){"use strict";a.r(t);var e=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{staticClass:"app-container"},[a("TopTitle",{attrs:{title:o.title}}),o._v(" "),a("div",{staticClass:"displayContent"},[a("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:o.formData,rules:o.formRules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"商品类目",prop:"goodsClassifyTwo"}},[a("el-select",{attrs:{disabled:o.disabled,placeholder:"请选择"},on:{change:function(t){return o.queryClassifyListByParentId(t,3)}},model:{value:o.formData.goodsClassifyTwo,callback:function(t){o.$set(o.formData,"goodsClassifyTwo",t)},expression:"formData.goodsClassifyTwo"}},o._l(o.formOption.goodsClassifyTwoSelectList,(function(o){return a("el-option",{key:o.classifyId,attrs:{label:o.classifyName,value:o.classifyId}})})),1),o._v(" "),a("el-select",{attrs:{disabled:o.disabled,placeholder:"请选择"},model:{value:o.formData.classifyId,callback:function(t){o.$set(o.formData,"classifyId",t)},expression:"formData.classifyId"}},o._l(o.formOption.classifySelectList,(function(o){return a("el-option",{key:o.classifyId,attrs:{label:o.classifyName,value:o.classifyId}})})),1)],1),o._v(" "),a("el-form-item",{attrs:{label:"商品名称",prop:"brandName"}},[a("el-input",{attrs:{disabled:o.disabled},model:{value:o.formData.brandName,callback:function(t){o.$set(o.formData,"brandName",t)},expression:"formData.brandName"}})],1),o._v(" "),a("el-form-item",{attrs:{label:"商品头图",prop:"goodsImageUrlList"}},[o.disabled?a("div",[a("img",{staticClass:"goodsPhone",attrs:{src:o.$commonImg}})]):a("el-upload",{attrs:{"before-upload":o.beforeAvatarUpload,"on-remove":o.handleRemove,"on-success":o.handleAvatarSuccess,"file-list":o.formOption.goodsImageList,limit:5,"on-exceed":o.handleExceed,action:o.BASE_API+"function/file/upload/product","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),o._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[o._v("345*345 图片大小不超过60k")])])],1),o._v(" "),a("el-form-item",{attrs:{label:"商品价格",prop:"goodsNames"}},[a("el-input",{attrs:{disabled:o.disabled},model:{value:o.formData.goodsNames,callback:function(t){o.$set(o.formData,"goodsNames",t)},expression:"formData.goodsNames"}})],1),o._v(" "),a("el-form-item",{attrs:{label:"购买返金币",prop:"jinbi"}},[a("el-input",{attrs:{disabled:o.disabled},model:{value:o.formData.jinbi,callback:function(t){o.$set(o.formData,"jinbi",t)},expression:"formData.jinbi"}})],1),o._v(" "),a("el-form-item",{attrs:{label:"商品详情",prop:"description"}},[a("Tinymce",{attrs:{disabled:o.disabled},model:{value:o.formData.description,callback:function(t){o.$set(o.formData,"description",t)},expression:"formData.description"}})],1),o._v(" "),o.disabled?a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"}},[o._v("通过")]),o._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"}},[o._v("拒绝")]),o._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:o.editButton}},[o._v("编辑")])],1):a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:o.cancelButton}},[o._v("取消")]),o._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:o.submitButtonTip}},[o._v("保存")])],1)],1)],1)],1)},s=[],i=(a("20d6"),a("c5f6"),a("ac6a"),a("8256")),n=a("7b94"),r={components:{Tinymce:i["a"],TopTitle:n["a"]},data:function(){return{BASE_API:Object({VUE_APP_BASE_API:"/prod-api",NODE_ENV:"production",BASE_URL:"/"}).BASE_API,formData:{goodsId:"",brandName:"",goodsName:"",goodsNames:"",goodsClassifyOne:null,goodsClassifyTwo:null,classifyId:null,goodsType:null,goodsImageUrlList:[],specificationsList:[],limitCounts:null,description:"",freightTemplateId:1,own:null,invoice:null,useCoupon:0,returnIntegral:0,integralMultiple:null,recommendGoods:0,cartRecommend:0,goodsStatus:null},formOption:{hasModifyGoodsImage:!1,goodsImageList:[],goodsImageUrlList:[],goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],classifySelectList:[],freightTemplateIdSelectList:[],goodsStatusSelectList:[{value:1,label:"上架"},{value:2,label:"下架"}]},formRules:{aaa:[{required:!0,message:"zzz不能为空",trigger:"change"}]},title:"查看商品",disabled:!0}},created:function(){console.log("当前组件渲染完成:"),console.log(this.$route)},methods:{init:function(){console.log("加载默认数据");var o={};this.$webApi.parent("API",o).then((function(o){console.log(o)}))},onSubmit:function(o){var t=this;this.$refs[o].validate((function(a){if(a){console.log("提交表单:"),console.log(t.formData),t.formData.goodsImageUrlList=[],console.log(t.formOption.goodsImageUrlList),t.formOption.hasModifyGoodsImage?t.formOption.goodsImageUrlList.forEach((function(o){o.response&&o.response.data?t.formData.goodsImageUrlList.push(o.response.data):t.formData.goodsImageUrlList.push(o.url)})):t.formOption.goodsImageList.forEach((function(o){t.formData.goodsImageUrlList.push(o.url)}));var e={goodsId:t.formData.goodsId,goodsNames:t.formData.goodsNames,goodsClassifyOne:t.formData.goodsClassifyOne,goodsClassifyTwo:t.formData.goodsClassifyTwo,classifyId:t.formData.classifyId,goodsImageUrlList:t.formData.goodsImageUrlList,specificationsList:t.formData.specificationsList,limitCounts:t.formData.limitCounts>0?parseInt(t.formData.limitCounts):0,description:t.formData.description,freightTemplateId:t.formData.freightTemplateId?t.formData.freightTemplateId:1,useCoupon:t.formData.useCoupon?1:0,returnIntegral:t.formData.returnIntegral?1:0,integralMultiple:t.formData.returnIntegral?Number(t.formData.integralMultiple):null,recommendGoods:t.formData.recommendGoods?1:0,cartRecommend:t.formData.cartRecommend?1:0,goodsStatus:t.formData.goodsStatus};e.specificationsList.forEach((function(o){""===o.pricingRmb&&o.pricingRmb}));var s={platformId:t.$route.params.qid};t.$webApi.product("update",e,s).then((function(a){console.log(a),t.$store.dispatch("setLoadingStatus",!1),t.$refs[o].resetFields(),t.$message({type:"success",message:"编辑成功!"}),t.reload()})).catch((function(){t.$store.dispatch("setLoadingStatus",!1)}))}}))},remoteMethodBrandName:function(o){var t=this;if(console.log("模糊搜索-品牌"),""!==o){var a={brandName:o};this.productOption.brandNameLoading=!0,this.$webApi.public("brandList",a).then((function(o){console.log(o),t.productOption.brandNameLoading=!1,o.data&&o.data.length>0&&(t.productOption.brandNameSelectList=o.data)}))}},resetForm:function(o,t){console.log("重置表单:"),this[t]=!1,this.$refs[o].resetFields()},getProductInof:function(o){var t=this;console.log("选择当前商品为发布的商品，并获取商品信息:");var a={goodsId:o},e={platformId:this.$route.params.qid};this.$webApi.product("detail",a,e).then((function(a){if(console.log("加载默认数据："),console.log("res"),a.data&&(t.formData.goodsId=o,t.formData=a.data,t.queryClassifyListByParentId(0,1,a.data.goodsClassifyOne),a.goodsClassifyTwo&&t.queryClassifyListByParentId(a.goodsClassifyOne,1,a.data.goodsClassifyTwo),a.classifyId&&t.queryClassifyListByParentId(a.goodsClassifyTwo,1,a.data.classifyId),t.formOption.hasModifyGoodsImage=!1,a.data&&a.data.goodsImageUrlList&&a.data.goodsImageUrlList.length>0&&a.data.goodsImageUrlList.forEach((function(o){var a={name:"aaa",url:o};t.formOption.goodsImageList.push(a),t.formData.goodsImageUrlList.push(a)})),t.formData.specificationsList&&t.formData.specificationsList.length>0)){var e=t.formData.specificationsList.findIndex((function(o){return 1===Number(o.defaultSpecification)}));-1===e&&(t.formData.specificationsList[0].defaultSpecification=1)}t.formOption.categoryOneName=a.data.categoryOneName,t.formOption.categoryTwoName=a.data.categoryTwoName,t.formOption.categoryThreeName=a.data.categoryThreeName}))},handleAvatarSuccessSpecifications:function(o,t,a,e){console.log("文件上传成功:"),console.log(o),console.log(t),console.log(a),console.log(e),"000"===o.code?this.$set(this.formData.specificationsList[e],"thumbnailUrl",o.data):this.$message.error(o.message)},beforeAvatarUploadSpecifications:function(o){console.log("上传文件之前:");var t="image/jpeg"===o.type||"image/png"===o.type;return t||this.$message.error("上传图片只能是 JPG/PNG 格式!"),t},queryClassifyListByParentId:function(o,t,a){var e=this,s={parentId:o},i={platformId:this.$route.params.qid};this.$webApi.public("queryClassifyListByParentId",s,i).then((function(o){console.log("商品分类列表查询-"+t+"级："),console.log(o),1===t?(e.formData.goodsClassifyOne="",e.formData.goodsClassifyTwo="",e.formData.classifyId="",e.formOption.goodsClassifyOneSelectList=o.data&&o.data.length>0?o.data:[],e.formData.goodsClassifyOne=a||""):2===t?(e.formData.goodsClassifyTwo="",e.formData.classifyId="",e.formOption.goodsClassifyTwoSelectList=o.data&&o.data.length>0?o.data:[],e.formData.goodsClassifyTwo=a||""):3===t&&(e.formData.classifyId="",e.formOption.classifySelectList=o.data&&o.data.length>0?o.data:[],e.formData.classifyId=a||"")}))},setDefaultDisplay:function(o){var t=this;this.formData.specificationsList.forEach((function(a,e){t.formData.specificationsList[e].defaultSpecification=o===e?1:0,console.log(t.formData.specificationsList)}))},beforeAvatarUpload:function(o){var t=this;console.log("上传文件之前:");var a="image/jpeg"===o.type||"image/png"===o.type,e=o.size/1024<60;a||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e||this.$message.error("上传图片大小不能超过 60KB!");var s=new Promise((function(t,a){var e=345,s=345,i=window.URL||window.webkitURL,n=new Image;n.onload=function(){var o=n.width===e&&n.height===s;console.log("valid:"),console.log(o),o?t():a()},n.src=i.createObjectURL(o),console.log("img.src:"),console.log(n.src)})).then((function(){return o}),(function(){return t.$message.error("上传的图片大小必须是345*345!"),Promise.reject()}));return a&&e&&s},handleAvatarSuccess:function(o,t,a){console.log("文件上传成功:"),console.log(o),console.log(t),console.log(a),"000"===o.code?(this.formOption.goodsImageUrlList=a,this.formOption.hasModifyGoodsImage=!0):this.$message.error(o.message)},handleRemove:function(o,t){console.log("文件列表移除文件:"),console.log(o,t),this.formOption.goodsImageUrlList=t,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(o,t){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 5 个文件，本次选择了 ".concat(o.length," 个文件，共选择了 ").concat(o.length+t.length," 个文件"))},editButton:function(){this.disabled=!1},submitButtonTip:function(){var o=this;this.$confirm("若保存，则商品变为已发布状态","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.onSubmit("formNode")})).catch((function(){}))},cancelButton:function(){this.disabled=!0}}},l=r,c=a("2877"),d=Object(c["a"])(l,e,s,!1,null,null,null);t["default"]=d.exports}}]);