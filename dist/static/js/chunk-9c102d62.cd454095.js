(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c102d62","chunk-600fd891"],{"11c8":function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"h",(function(){return n})),a.d(t,"j",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"l",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"i",(function(){return u})),a.d(t,"k",(function(){return f})),a.d(t,"n",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"g",(function(){return h})),a.d(t,"m",(function(){return g})),a.d(t,"a",(function(){return v}));var s=a("b775");function i(e){return s["a"].get("categories",{params:e})}function n(e){return s["a"].post("categories",e)}function o(e){return s["a"].delete("categories/".concat(e))}function r(e,t){return s["a"].patch("categories/".concat(e),t)}function c(e){return s["a"].get("products",{params:e})}function l(e){return s["a"].post("products/destroy",e)}function u(e){return s["a"].post("products",e)}function f(e){return s["a"].delete("products/".concat(e))}function d(e){return s["a"].get("products/".concat(e))}function m(e,t){return s["a"].patch("products/".concat(e),t)}function p(e){return s["a"].post("products/audit",e)}function h(e){return s["a"].post("products/change_status",e)}function g(){return s["a"].get("qiniu/token")}function v(e){return s["a"].post("products/".concat(e.id,"/apply"))}},"1b29":function(e,t,a){"use strict";var s=a("3812"),i=a.n(s);i.a},2341:function(e,t,a){"use strict";var s=a("2de7"),i=a.n(s);i.a},"2de7":function(e,t,a){},3812:function(e,t,a){},"403a":function(e,t,a){},"5b7e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("TopTitle",{attrs:{title:e.title}}),e._v(" "),a("div",{staticClass:"displayContent"},[a("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:e.formData,rules:e.formRules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"商品类目",prop:"goodsClassifyTwo"}},[a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择"},on:{change:e.changeOneSelect},model:{value:e.formData.goodsClassifyOne,callback:function(t){e.$set(e.formData,"goodsClassifyOne",t)},expression:"formData.goodsClassifyOne"}},e._l(e.formOption.goodsClassifyOneSelectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择"},on:{change:e.changeTwoSelect},model:{value:e.formData.goodsClassifyTwo,callback:function(t){e.$set(e.formData,"goodsClassifyTwo",t)},expression:"formData.goodsClassifyTwo"}},e._l(e.formOption.goodsClassifyTwoSelectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{attrs:{maxlength:"50",disabled:e.disabled},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品头图",prop:"images"}},[a("MyUpload",{ref:"uploads",attrs:{"file-size":1e3,"fixed-size":!1,size:{width:300,height:300},proportion:{width:2,height:1},"file-limit":5,"images-list":e.imagesFiles}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品价格",prop:"price"}},[a("el-input",{attrs:{type:"number",disabled:e.disabled},model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"购买返金币",prop:"coin"}},[a("el-input",{attrs:{type:"number",disabled:e.disabled},model:{value:e.formData.coin,callback:function(t){e.$set(e.formData,"coin",t)},expression:"formData.coin"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"规格",prop:"specs"}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addSpecsRow}},[e._v("添加规格")]),e._v(" "),e._l(e.formData.specs,(function(t,s){return a("div",{key:s,staticClass:"demo-input-suffix"},[a("span",[e._v("规格名：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}}),e._v(" "),a("el-button",{attrs:{type:"text",disabled:e.disabled,icon:"el-icon-delete"},on:{click:function(t){return e.deleteLine(1,s)}}}),e._v(" "),a("div",{staticClass:"demo-input-suffix guige"},[a("span",[e._v("规    格：")]),e._v(" "),e._l(t.values,(function(t,s){return a("el-input",{key:s,attrs:{value:t.name,placeholder:"请输入内容"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item2.name"}})})),e._v(" "),a("el-button",{attrs:{type:"text",disabled:e.disabled,icon:"el-icon-delete"},on:{click:function(t){return e.deleteLine(2,s)}}})],2),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.addSpecsLine(s)}}},[e._v("添加项")])],1)}))],2),e._v(" "),a("el-form-item",{attrs:{label:"规格详细",prop:"norms"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.addNormsRow()}}},[e._v("+添加规格详细")]),e._v(" "),e.formData.norms.length>0?a("el-table",{staticStyle:{width:"100%","line-height":"36px"},attrs:{border:"",data:e.formData.norms}},[e._l(e.formData.specs,(function(t,s){return a("el-table-column",{key:s,attrs:{label:t.name,"min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(i){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectValue["name"+i.$index+"-"+s],callback:function(t){e.$set(e.selectValue,"name"+i.$index+"-"+s,t)},expression:"selectValue[`name${scope.$index}-${index}`]"}},e._l(t.values,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)]}}],null,!0)})})),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"number",value:t.row.price},model:{value:t.row.price,callback:function(a){e.$set(t.row,"price",a)},expression:"scope.row.price"}})]}}],null,!1,3597067077)}),e._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"库存","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"number",value:t.row.stock},model:{value:t.row.stock,callback:function(a){e.$set(t.row,"stock",a)},expression:"scope.row.stock"}})]}}],null,!1,3146910757)}),e._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"操作","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",disabled:e.disabled,icon:"el-icon-delete"},on:{click:function(a){return e.deleteLine(3,t.$index)}}})]}}],null,!1,971070459)})],2):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"商品详情",prop:"desc"}},[a("Tinymce",{attrs:{disabled:e.disabled},model:{value:e.formData.desc,callback:function(t){e.$set(e.formData,"desc",t)},expression:"formData.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.operationButton(1)}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.operationButton(2)}}},[e._v("取消")]),e._v(" "),e.h5_link?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.preview(e.h5_link)}}},[e._v("预览")]):e._e()],1)],1)],1)],1)},i=[],n=(a("28a5"),a("ac6a"),a("7f7f"),a("8256")),o=a("7b94"),r=a("a796"),c=a("11c8"),l={components:{Tinymce:n["a"],TopTitle:o["a"],MyUpload:r["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,formData:{goodsClassifyOne:null,goodsClassifyTwo:null,images:[],category_id:"",name:"",coin:"",desc:"",price:"",specs:[],norms:[]},selectValue:{},formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[]},selectData:"",formRules:{goodsClassifyTwo:[{required:!0,message:"请选择商品类目",trigger:"change"}],name:[{required:!0,message:"请填写商品名称",trigger:"change"}],images:[{required:!0,message:"请选择商品头图",trigger:"change"}],price:[{required:!0,message:"请填写商品价格",trigger:"change"}],coin:[{required:!0,message:"请填写购买返金币",trigger:"change"}],specs:[{required:!0,message:"请填写规格",trigger:"change"}],norms:[{required:!0,message:"请填写规格详细",trigger:"change"}],desc:[{required:!0,message:"请填写商品详情",trigger:"change"}]},title:"发布/编辑商品",disabled:!1,imagesFiles:[],h5_link:""}},created:function(){var e=this;Object(c["c"])().then((function(t){200===t.status&&(e.selectData=t.data,e.formOption.goodsClassifyOneSelectList=t.data)})),this.$route.query.id&&this.getInfo()},methods:{getInfo:function(){var e=this;Object(c["n"])(this.$route.query.id).then((function(t){if(200===t.status){e.formData.name=t.data.name,e.formData.coin=t.data.coin,e.formData.desc=t.data.desc,e.formData.price=t.data.price,e.formData.goodsClassifyOne=t.data.category.parent.id,e.changeOneSelect(t.data.category.parent.id),e.formData.goodsClassifyTwo=t.data.category.id,e.h5_link=t.data.h5_link,t.data&&t.data.images&&t.data.images.length>0&&(e.imagesFiles=[],e.imagesFiles=t.data.images);for(var a=t.data.specs,s=function(t){e.formData.specs.push({name:a[t].name,values:[]}),a[t].spec_values.length>0&&a[t].spec_values.forEach((function(a){e.formData.specs[t].values.push({name:a.name})}))},i=0;i<a.length;i++)s(i);var n=t.data.norms;n.forEach((function(t,a){var s=t.spec_attr_names.split("/");s.forEach((function(t,s){e.selectValue["name".concat(a,"-").concat(s)]=t}))}));var o=t.data.norms,r=[];o.forEach((function(e){r.push({name:[],stock:e.stock,price:e.price})})),e.formData.norms=r}}))},addNormsRow:function(){if(!(this.formData.specs.length>0))return this.$message.error("请完善规格信息");var e=!0;if(this.formData.specs.forEach((function(t,a){(t.values.filter((function(e){return""===e.name})).length>0||""===t.name)&&(e=!1)})),!e)return this.$message.error("请完善规格信息");this.formData.norms.push({name:[],price:"",stock:""})},addSpecsRow:function(){this.formData.specs.push({name:"",values:[{name:""}]})},addSpecsLine:function(e){this.formData.specs[e].values.push({name:""})},onSubmit:function(e){var t=this;this.formData.images=this.$refs.uploads.images,this.$refs[e].validate((function(e){if(e){for(var a=t.formData.specs,s=0;s<a.length;s++){for(var i=[],n=0;n<a[s].values.length;n++)i.push(a[s].values[n].name);a[s].values=i}for(var o=a,r=t.formData.norms,l=0;l<r.length;l++)for(var u in t.selectValue)u.split("-")[0]==="name".concat(l)&&r[l].name.push(t.selectValue[u]);var f=r,d={category_id:t.formData.goodsClassifyTwo,images:JSON.stringify(t.formData.images),name:t.formData.name,coin:t.formData.coin,desc:t.formData.desc,price:t.formData.price,type:"MoneyProduct",specs:JSON.stringify(o),norms:JSON.stringify(f)},m=t.$qs.stringify(d);t.$route.query.id?Object(c["e"])(t.$route.query.id,m).then((function(e){200===e.status&&(t.$message({type:"success",message:"编辑商品成功!"}),t.getInfo(),t.$router.go(-1))})):Object(c["i"])(m).then((function(e){200===e.status&&t.$message({type:"success",message:"创建商品成功!"}),t.$router.go(-1)})).catch((function(){}))}}))},changeOneSelect:function(e){for(var t=0;t<this.selectData.length;t++)this.selectData[t].id===e&&(this.formOption.goodsClassifyTwoSelectList=this.selectData[t].children,this.formData.goodsClassifyTwo=this.formOption.goodsClassifyTwoSelectList[0].id)},changeTwoSelect:function(e){for(var t=0;t<this.selectData.length;t++)this.selectData[t].id===e&&(this.formOption.goodsClassifyTwoSelectList=this.selectData[t].children)},resetForm:function(e,t){this[t]=!1,this.$refs[e].resetFields()},operationButton:function(e){1===e&&this.onSubmit("formNode"),2===e&&this.$router.go(-1)},deleteLine:function(e,t){var a=this.formData.specs,s=this.formData.norms;1===e&&(a.length>1?(a.splice(t,1),this.formData.specs=a):this.$message.error("最少保留一项")),2===e&&(a[t].values.length>1?(a[t].values.pop(),this.formData.specs=a):this.$message.error("最少保留一项")),3===e&&(s.length>1?(s.splice(t,1),this.formData.norms=s):this.$message.error("最少保留一项"))},preview:function(e){e?(this.$store.state.previewStore.previewLink=e,this.$store.state.previewStore.previewStatus=!0):this.$message.error("抱歉没有预览链接")}}},u=l,f=(a("f525"),a("2877")),d=Object(f["a"])(u,s,i,!1,null,null,null);t["default"]=d.exports},"7b94":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topTitle"},[a("span"),a("span",{staticClass:"title"},[e._v(e._s(e.title))])])},i=[],n={props:{title:{type:String,required:!0}},data:function(){return{}}},o=n,r=(a("1b29"),a("2877")),c=Object(r["a"])(o,s,i,!1,null,"b4ebadd8",null);t["a"]=c.exports},a796:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.disabled?a("div",[a("img",{staticClass:"goodsPhone",attrs:{src:e.$commonImg}})]):a("el-upload",{attrs:{data:e.QiniuData,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,"on-success":e.handleAvatarSuccess,"file-list":e.formOption.goodsImageList,limit:e.fileLimit,"on-exceed":e.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n      "+e._s(e.fixedSize?"建议图片尺寸"+e.size.width+"*"+e.size.height+"px ，大小不超过"+e.fileSize+"k":"建议图片比例是"+e.proportion.width+"（宽）："+e.proportion.height+"（高），大小不超过"+e.fileSize+"k,限制上传 "+e.fileLimit+" 张")+"\n    ")])])],1)},i=[],n=(a("28a5"),a("7f7f"),a("ac6a"),a("c5f6"),a("11c8")),o=a("5f87"),r={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var e=this;this.imagesList&&this.imagesList.length>0&&(this.images=[],this.formOption.goodsImageList=[],this.imagesList.forEach((function(t){var a={name:"aaa",url:t.image_path};e.formOption.goodsImageList.push(a),e.images.push(t.file_path)})))},deep:!0}},created:function(){var e=this;this.$nextTick((function(){console.log(e.imagesList),e.imagesList&&e.imagesList.length>0&&e.imagesList.forEach((function(t){var a={name:"aaa",url:t.image_path};e.formOption.goodsImageList.push(a),e.images.push(t.file_path)}))}))},mounted:function(){var e=this;Object(n["m"])().then((function(t){200===t.status&&(e.QiniuData.token=t.data.qiniu_token)}))},methods:{handleAvatarSuccessSpecifications:function(e,t,a,s){"000"===e.code?this.$set(this.formData.specificationsList[s],"thumbnailUrl",e.data):this.$message.error(e.message)},beforeAvatarUploadSpecifications:function(e){console.log("上传文件之前:");var t="image/jpeg"===e.type||"image/png"===e.type;return t||this.$message.error("上传图片只能是 JPG/PNG 格式!"),t},beforeAvatarUpload:function(e){console.log("上传文件之前:");var t="image/jpeg"===e.type||"image/png"===e.type;return t||this.$message.error("上传图片只能是 JPG/PNG 格式!"),this.QiniuData.key="".concat(Object(o["c"])()).concat(e.name),t},handleAvatarSuccess:function(e,t,a){this.uploadPicUrl="".concat(e.key);var s=[];a.forEach((function(e){"aaa"===e.name?s.push(e.url.split("//")[1].split("/")[1]):s.push("".concat(e.response.key))})),this.images=s,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(e,t){var a=[];t.forEach((function(e){"aaa"===e.name?a.push(e.url.split("//")[1].split("/")[1]):a.push("".concat(e.response.key))})),this.images=a,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(e,t){this.$message.warning("当前限制上传 ".concat(this.fileLimit," 张图片"))}}},c=r,l=(a("2341"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,null,null);t["a"]=u.exports},f525:function(e,t,a){"use strict";var s=a("403a"),i=a.n(s);i.a}}]);