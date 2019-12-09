(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-238adb5f"],{3132:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"EditMain"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"任务时间"}},[n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{disabled:"",type:"date",placeholder:"选择日期"},model:{value:t.form.valid_from,callback:function(e){t.$set(t.form,"valid_from",e)},expression:"form.valid_from"}})],1),t._v(" "),n("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{disabled:"",type:"date",placeholder:"选择日期"},model:{value:t.form.valid_to,callback:function(e){t.$set(t.form,"valid_to",e)},expression:"form.valid_to"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"剩余金币"}},[n("el-input",{staticStyle:{width:"600px"},attrs:{disabled:""},model:{value:t.form.residue_coin,callback:function(e){t.$set(t.form,"residue_coin",e)},expression:"form.residue_coin"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"问卷标题"}},[n("el-input",{staticStyle:{width:"600px"},attrs:{disabled:""},model:{value:t.form.questionnaire.name,callback:function(e){t.$set(t.form.questionnaire,"name",e)},expression:"form.questionnaire.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{staticStyle:{width:"600px",resize:"none"},attrs:{disabled:"",type:"textarea",rows:4},model:{value:t.form.questionnaire.desc,callback:function(e){t.$set(t.form.questionnaire,"desc",e)},expression:"form.questionnaire.desc"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"问卷内容"}},t._l(t.form.questionnaire.questions,(function(e,a){return n("div",{key:a,staticClass:"questionList"},[n("el-row",[n("el-col",{attrs:{span:5}},[n("el-form-item",{attrs:{label:"Q1","label-width":"30px"}},[n("el-input",{attrs:{disabled:""},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"item.name"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:5}},[n("el-select",{attrs:{disabled:"",placeholder:"请选择问题格式"},model:{value:e.type,callback:function(n){t.$set(e,"type",n)},expression:"item.type"}},[n("el-option",{attrs:{label:"单选",value:"Question::Single"}}),t._v(" "),n("el-option",{attrs:{label:"多选",value:"Question::Multiple"}}),t._v(" "),n("el-option",{attrs:{label:"文本",value:"Question::Completion"}}),t._v(" "),n("el-option",{attrs:{label:"下拉选择",value:"Question::Select"}})],1)],1)],1),t._v(" "),n("el-row",t._l(e.options,(function(e,a){return n("el-col",{key:a,attrs:{span:6}},[n("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"选项"+(a+1),"label-width":"60px"}},[n("el-input",{attrs:{disabled:""},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"item2.name"}})],1)],1)})),1)],1)})),0),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.back}},[t._v("返回")]),t._v(" "),1==t.type?n("el-button",{on:{click:function(e){return t.SingleOperation(2)}}},[t._v("拒绝")]):t._e(),t._v(" "),1==t.type||4==t.type?n("el-button",{on:{click:function(e){return t.SingleOperation(1)}}},[t._v("通过")]):t._e(),t._v(" "),2==t.type?n("el-button",{on:{click:function(e){return t.SingleOperation(3)}}},[t._v("结束")]):t._e()],1)],1)],1)],1)},r=[],i=n("7b94"),o=n("f8a4"),s={components:{TopTitle:i["a"]},data:function(){return{title:"查看调查任务",form:{residue_coin:"",valid_from:"",valid_to:"",questionnaire:{name:"",desc:"",questions:[]}},type:""}},created:function(){this.getDetail(),this.type=this.$route.query.type},methods:{getDetail:function(){var t=this;if(void 0!==this.$route.query.id){this.title="编辑调查问卷";var e=this.$route.query.id;Object(o["o"])(e).then((function(e){console.log(e),t.form=e.data}))}else this.title="发布调查问卷"},back:function(){this.$router.go(-1)},SingleOperation:function(t){var e=this;if(void 0!==this.$route.query.id){var n=[];if(n.push(this.$route.query.id),1===t){var a="该任务将审核通过, 是否继续?";this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="success",a=new FormData;a.append("ids",JSON.stringify(n)),a.append("status",t),a.append("reason",""),Object(o["A"])(a).then((function(t){e.$message({message:"操作成功",type:"success"}),e.$router.go(-1)}))}))}else if(2===t||3===t){var r=2===t?"请输入拒绝原因":"请输入结束原因";this.$prompt(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){var r=a.value,i=2===t?"failed":"overtime",s=new FormData;s.append("ids",JSON.stringify(n)),s.append("status",i),s.append("reason",r),Object(o["A"])(s).then((function(t){e.$message({message:"操作成功",type:"success"}),e.$router.go(-1)}))})).catch((function(){}))}}}}},u=s,c=(n("53ee"),n("2877")),l=Object(c["a"])(u,a,r,!1,null,"49ee2076",null);e["default"]=l.exports},4205:function(t,e,n){},"53ee":function(t,e,n){"use strict";var a=n("9fa6"),r=n.n(a);r.a},"7b94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTitle"},[n("span"),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},o=i,s=(n("d98e"),n("2877")),u=Object(s["a"])(o,a,r,!1,null,"24a0e96e",null);e["a"]=u.exports},"9fa6":function(t,e,n){},d98e:function(t,e,n){"use strict";var a=n("4205"),r=n.n(a);r.a},f8a4:function(t,e,n){"use strict";n.d(e,"u",(function(){return r})),n.d(e,"t",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"s",(function(){return s})),n.d(e,"z",(function(){return u})),n.d(e,"j",(function(){return c})),n.d(e,"l",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"v",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"p",(function(){return _})),n.d(e,"c",(function(){return v})),n.d(e,"o",(function(){return k})),n.d(e,"x",(function(){return b})),n.d(e,"h",(function(){return h})),n.d(e,"n",(function(){return g})),n.d(e,"b",(function(){return y})),n.d(e,"m",(function(){return q})),n.d(e,"w",(function(){return x})),n.d(e,"A",(function(){return $})),n.d(e,"g",(function(){return w})),n.d(e,"r",(function(){return S})),n.d(e,"d",(function(){return O})),n.d(e,"q",(function(){return T})),n.d(e,"y",(function(){return C})),n.d(e,"i",(function(){return j}));var a=n("b775");function r(t){return a["a"].get("task_products",{params:t})}function i(t){return a["a"].get("products",{params:t})}function o(t){return a["a"].post("task_products",t)}function s(t){return a["a"].get("task_products/".concat(t))}function u(t,e){return a["a"].patch("task_products/".concat(t),e)}function c(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function f(t){return a["a"].post("task_articles",t)}function d(t){return a["a"].get("task_articles/".concat(t))}function p(t,e){return a["a"].patch("task_articles/".concat(t),e)}function m(t){return a["a"].delete("task_articles/".concat(t))}function _(t){return a["a"].get("task_questionnaires",{params:t})}function v(t){return a["a"].post("task_questionnaires",t)}function k(t){return a["a"].get("task_questionnaires/".concat(t))}function b(t,e){return a["a"].patch("task_questionnaires/".concat(t),e)}function h(t){return a["a"].delete("task_questionnaires/".concat(t))}function g(t){return a["a"].get("task_game",{params:t})}function y(t){return a["a"].post("task_game",t)}function q(t){return a["a"].get("task_game/".concat(t))}function x(t,e){return a["a"].patch("task_game/".concat(t),e)}function $(t){return a["a"].post("tasks/audit",t)}function w(t){return a["a"].delete("task_game/".concat(t))}function S(t){return a["a"].get("task_links",{params:t})}function O(t){return a["a"].post("task_links",t)}function T(t){return a["a"].get("task_links/".concat(t))}function C(t,e){return a["a"].patch("task_links/".concat(t),e)}function j(t){return a["a"].delete("task_links/".concat(t))}}}]);