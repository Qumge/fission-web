(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be1b561c","chunk-600fd891"],{"1b29":function(t,e,a){"use strict";var o=a("3812"),r=a.n(o);r.a},"278f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("TopTitle",{attrs:{title:t.title}}),t._v(" "),a("div",{staticClass:"displayContent"},[a("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:t.formData,rules:t.formRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"登录账号",prop:"login"}},[a("el-input",{model:{value:t.formData.login,callback:function(e){t.$set(t.formData,"login",e)},expression:"formData.login"}})],1),t._v(" "),a("el-form-item",{staticClass:"radio_block",attrs:{label:"角色",prop:"role_id"}},t._l(t.roleList,(function(e,o){return a("el-radio-group",{key:o,model:{value:t.formData.role_id,callback:function(e){t.$set(t.formData,"role_id",e)},expression:"formData.role_id"}},[a("el-radio",{attrs:{label:e.id}},[t._v(t._s(e.name))])],1)})),1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("el-radio",{attrs:{label:"active"}},[t._v("正常")]),t._v(" "),a("el-radio",{attrs:{label:"locked"}},[t._v("冻结")])],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("formNode")}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.onSubmit("formNode")}}},[t._v("保存")])],1)],1)],1)],1)},r=[],i=(a("7f7f"),a("072e")),n=a("7b94"),s={components:{TopTitle:n["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,title:"添加 / 编辑账号",formData:{name:"",login:"",role_id:"",status:""},roleList:"",formRules:{name:[{required:!0,message:"登录账号不能为空",trigger:"change"}],login:[{required:!0,message:"姓名不能为空",trigger:"change"}],role_id:[{required:!0,message:"角色不能为空",trigger:"change"}],status:[{required:!0,message:"状态不能为空",trigger:"change"}]}}},created:function(){console.log("当前组件渲染完成:"),console.log(this.$route.query.id),this.getRoleList()},methods:{init:function(){console.log("加载默认数据");var t={};this.$webApi.parent("API",t).then((function(t){console.log(t)}))},onSubmit:function(t){var e=this;this.$refs[t].validate((function(a){if(a){console.log("提交表单:"),console.log(e.formData);var o={name:e.formData.name,login:e.formData.login,role_id:e.formData.role_id,status:e.formData.status},r=e.$qs.stringify(o);Object(i["e"])(r).then((function(a){console.log(a),e.$refs[t].resetFields(),e.$message({type:"success",message:"编辑成功!"}),e.reload()})).catch((function(){}))}}))},resetForm:function(t,e){console.log("重置表单:"),this[e]=!1,this.$refs[t].resetFields()},getRoleList:function(){var t=this,e={page:1};Object(i["k"])(e).then((function(e){console.log(e.data),t.roleList=e.data}))}}},l=s,c=(a("b15d"),a("d2bb"),a("2877")),u=Object(c["a"])(l,o,r,!1,null,"43ba788e",null);e["default"]=u.exports},3812:function(t,e,a){},"7b94":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topTitle"},[a("span"),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},n=i,s=(a("1b29"),a("2877")),l=Object(s["a"])(n,o,r,!1,null,"b4ebadd8",null);e["a"]=l.exports},9227:function(t,e,a){},a60d:function(t,e,a){},b15d:function(t,e,a){"use strict";var o=a("9227"),r=a.n(o);r.a},d2bb:function(t,e,a){"use strict";var o=a("a60d"),r=a.n(o);r.a}}]);