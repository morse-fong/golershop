(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member-member-certification"],{"076e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"m-cells m-cells-form"},[i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("真实姓名")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"text",placeholder:t.__("请输入真实姓名"),maxlength:"10"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputReName.apply(void 0,arguments)}},model:{value:t.user_data.user_realname,callback:function(e){t.$set(t.user_data,"user_realname",e)},expression:"user_data.user_realname"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("身份证")))])],1),i("v-uni-view",{staticClass:"m-cell-bd"},[i("v-uni-input",{staticClass:"u-input",attrs:{type:"idcard",placeholder:t.__("请输入身份证号码"),maxlength:"18"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputICard.apply(void 0,arguments)}},model:{value:t.user_data.user_idcard,callback:function(e){t.$set(t.user_data,"user_idcard",e)},expression:"user_data.user_idcard"}})],1),t.isCardNo?t._e():i("div",{staticClass:"m-cell-ft"},[i("v-uni-icon",{staticClass:"m-icon-warn",attrs:{type:"warn"}})],1)],1),i("v-uni-view",{staticClass:"m-cell"},[i("v-uni-view",{staticStyle:{"font-size":"20rpx"}},[t._v(t._s(t.__("用于保障账号安全，如用于账号找回、冻结等"))),i("br"),t._v(t._s(t.__("温馨提示：请上传原始比例的身份证正反面，请勿裁剪涂改，保证身份信息清晰显示，否则无法通过审核")))])],1),i("v-uni-view",{staticClass:"m-cell",staticStyle:{padding:"3rpx 30rpx"}},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("身份证正面")))])],1),i("v-uni-view",{staticClass:"m-cell-bd",staticStyle:{padding:"0",margin:"0","line-height":"1"}},[i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[t.user_data.user_idcard_image_list[0]?[i("v-uni-view",{staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{"data-imgindex":"0",src:t.user_data.user_idcard_image_list[0],"data-src":t.user_data.user_idcard_image_list[0]},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.upImgs.apply(void 0,arguments)}}})],1)]:i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",attrs:{"data-imgindex":"0"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.upImgs.apply(void 0,arguments)}}})],1)],2)],1)],1)],1),i("v-uni-view",{staticClass:"m-cell",staticStyle:{padding:"3rpx 30rpx"}},[i("v-uni-view",{staticClass:"m-cell-hd"},[i("v-uni-label",{staticClass:"u-label"},[t._v(t._s(t.__("身份证反面")))])],1),i("v-uni-view",{staticClass:"m-cell-bd",staticStyle:{padding:"0",margin:"0","line-height":"1"}},[i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[t.user_data.user_idcard_image_list[1]?[i("v-uni-view",{staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{"data-imgindex":"1",src:t.user_data.user_idcard_image_list[1],"data-src":t.user_data.user_idcard_image_list[1]},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.upImgs.apply(void 0,arguments)}}})],1)]:i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",attrs:{"data-imgindex":"1"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.upImgs.apply(void 0,arguments)}}})],1)],2)],1)],1)],1),0==t.user_data.user_is_authentication||3==t.user_data.user_is_authentication?i("v-uni-view",{staticClass:"btn_box"},[i("v-uni-button",{staticClass:"u-btn u-btn-default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitdata.apply(void 0,arguments)}}},[t._v(t._s(t.__("保存")))])],1):1==t.user_data.user_is_authentication?i("v-uni-view",{staticClass:"btn_box"},[i("v-uni-button",{staticClass:"u-btn u-btn-default"},[t._v(t._s(t.__("已提交待审核")))])],1):i("v-uni-view",{staticClass:"btn_box"},[i("v-uni-button",{staticClass:"u-btn u-btn-default"},[t._v(t._s(t.__("实名认证已经审核通过")))])],1)],1)],1)},n=[]},2118:function(t,e,i){var a=i("7f56");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("54a86f4c",a,!0,{sourceMap:!1,shadowMode:!1})},2629:function(t,e,i){"use strict";i.r(e);var a=i("076e"),n=i("81db");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("5a39");var l=i("828b"),d=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"47e9f202",null,!1,a["a"],void 0);e["default"]=d.exports},"2da2":function(t,e,i){"use strict";i.r(e);var a=i("6137"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"46c2":function(t,e,i){"use strict";i.r(e);var a=i("dd73"),n=i("2da2");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("af74");var l=i("828b"),d=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"553cbbd1",null,!1,a["a"],void 0);e["default"]=d.exports},"5a39":function(t,e,i){"use strict";var a=i("8d00"),n=i.n(a);n.a},6137:function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("aa9c"),i("bf0f"),i("2797");a(i("c603"));var n=i("8f59"),s={computed:(0,n.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),props:{show:{type:Boolean,default:!1},autoCountdown:{type:Boolean,default:!0},phone:{type:String,default:""},user_intl:{type:String,default:"+86"},len:{type:Number,default:6},bindType:{type:Number,default:1}},data:function(){return{codeAry:[{val:""},{val:""},{val:""},{val:""}],currItem:0,countdown:60,cTimer:null,callResult:{type:0,code:null},suspend:!1,pre_phone:""}},watch:{show:function(){this.show?this.suspend&&this.pre_phone==this.phone||this.init():(this.suspend||this.clearTimer(),this.clearCode())}},methods:{init:function(){var t=this,e=this.Config.URL.sendMobileVerifyCode;(t.pre_phone!=t.phone||null==t.cTimer&&t.show)&&(e=2==t.bindType?t.cf.URL.verify.email:this.Config.URL.sendMobileVerifyCode,t.$.request({url:e,data:{mobile:t.phone,email:t.phone},success:function(e,i,a,n){t.pre_phone=t.phone,200==i?uni.showToast({icon:"none",title:t.__("已发送重置验证码到注册手机，请注意查收。"),duration:3e3}):(uni.showToast({icon:"none",title:t.__("短信发送失败，请尝试。"),duration:3e3}),t.clearTimer())}}));for(var i=[],a=0;a<this.len;a++)i.push({val:""});this.codeAry=i,this.currItem=0,this.autoCountdown&&this.startTimer()},bindKeyEvent:function(t){var e=t.currentTarget.dataset.val;switch(e){case"clear":this.clearCode();break;case"delete":this.deleteCode();break;default:this.inputVal(e);break}},inputVal:function(t){this.currItem<this.len&&(this.codeAry[this.currItem].val=t,this.currItem++),this.currItem==this.len&&this.execuCall(1)},clearCode:function(){this.init()},deleteCode:function(){this.currItem>0&&(this.codeAry[this.currItem-1].val="",this.currItem--)},closeDialog:function(){this.execuCall(-1)},startTimer:function(){var t=this;null==t.cTimer&&(t.cTimer=setInterval((function(){t.countdown--,0==t.countdown&&t.clearTimer()}),1e3))},clearTimer:function(){clearInterval(this.cTimer),this.cTimer=null,this.countdown=60},getCodeValue:function(){var t="";return this.codeAry.forEach((function(e){t+=e.val})),t},execuCall:function(t){this.callResult.type=t,1==t?(this.callResult.code=this.getCodeValue(),this.clearTimer()):(this.suspend=!0,this.callResult.code=null),this.$emit("change",this.callResult)},resend:function(){var t=this;t.callResult.code=null,t.callResult.type=0,t.callResult.resendCall=function(){t.init()},t.$emit("change",t.callResult)}}};e.default=s},7893:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-47e9f202]:export{theme_bg:#1db0fc}.m-cell-vcode[data-v-47e9f202]{padding-top:0;padding-right:0;padding-bottom:0}.m-vcode-img[data-v-47e9f202]{width:%?216?%;height:%?88?%}.btn_box[data-v-47e9f202]{padding:%?20?%}.m-code[data-v-47e9f202]{right:%?210?%}.m-vcode-btn[data-v-47e9f202]{width:%?150?%;text-align:center}.uni-uploader__img[data-v-47e9f202]{width:%?320?%;height:%?200?%}',""]),t.exports=e},"7f56":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'.button-item[data-v-553cbbd1]:active{background:#d4d4d4}.button-item+.button-item[data-v-553cbbd1]{border-left:.1px solid #d4d4d4}.button-item[data-v-553cbbd1]{flex:1;padding:14px 0;text-align:center}.keyboard-line+.keyboard-line[data-v-553cbbd1]{border-top:.1px solid #d4d4d4}.keyboard-line[data-v-553cbbd1]{display:flex}.keyboard[data-v-553cbbd1]{background:#fff;position:absolute;z-index:999;width:100%;left:0;bottom:0;font-size:17px}.dialog-close[data-v-553cbbd1]{color:#999;height:20px;width:20px;font-size:15px;top:5px;left:5px;position:absolute}.dialog-close[data-v-553cbbd1]:before{content:"\\2716"}.countdown[data-v-553cbbd1]{color:#666;font-size:16px}.resend[data-v-553cbbd1]{color:#007aff;font-size:16px}.dialog-ft[data-v-553cbbd1]{margin-top:10px}.code-view[data-v-553cbbd1]{display:table;text-align:center;margin:0 auto;border-collapse:initial;border-spacing:10px 5px}.code-item+.code-item[data-v-553cbbd1]{margin-left:5px}.code-item[data-v-553cbbd1]{display:table-cell;border-bottom:1px solid #999;max-width:35px;min-width:35px;padding-bottom:2px;height:30px}.dialog-bd[data-v-553cbbd1]{margin-top:5px}.codedialog-subtitle[data-v-553cbbd1]{margin-top:5px;padding:5px 0;font-size:15px;line-height:1.4;word-wrap:break-word;word-break:break-all;color:#999}.dialog-view[data-v-553cbbd1]{position:fixed;z-index:999;width:70%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-120%);transform:translate(-50%,-120%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden;padding:20px 10px}.mask[data-v-553cbbd1]{position:fixed;z-index:999;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.6)}\n\n\t/*\n\t.codedialog * {\n\t\tbox-sizing: border-box;\n\t}\n*/.codedialog[data-v-553cbbd1]{z-index:999;position:fixed;width:100%;height:100%;top:0;left:0;box-sizing:border-box}',""]),t.exports=e},"81db":function(t,e,i){"use strict";i.r(e);var a=i("81e5"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"81e5":function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("0c26"),i("5c47"),i("a1c1"),i("c9b5"),i("bf0f"),i("ab80");var n=a(i("9b1b")),s=a(i("2634")),l=a(i("2fdc")),d=i("8f59"),o=a(i("46c2")),u={name:"asset",data:function(){return{user_data:{user_realname:"",user_idcard:"",user_is_authentication:0,user_idcard_image_list:[]},isCardNo:!0}},components:{verifycodeDialog:o.default},computed:(0,d.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(){var t=(0,l.default)((0,s.default)().mark((function t(e){return(0,s.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.setNavigationBarTitle({title:this.__("实名认证")}),t.next=3,this.$onLaunched;case 3:this,this.Phone=this.userInfo.user_mobile,this.user_data=Object.assign({},this.userInfo);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),methods:(0,n.default)((0,n.default)({},(0,d.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{inputReName:function(t){this.setData({})},inputICard:function(t){this.$.isNull(t.detail.value)?this.setData({isCardNo:!0,user_idcard:t.detail.value}):(this.IdentityCodeValid(t.detail.value)?this.setData({isCardNo:!0}):this.setData({isCardNo:!1}),this.setData({user_idcard:t.detail.value}))},upImgs:function(t){var e=this,i=t.currentTarget.dataset.imgindex;e.$.chooseImage({count:1,sizeType:["compressed"],success:function(t){e.$.showLoading();var a=t.tempFilePaths;e.$.uploadFile({url:e.Config.URL.upload,method:"POST",filePath:a[0],name:"upfile",success:function(t){e.$.hideLoading();var a=e.$.parseJSON(t.data);if(200==a.status){var n=a.data.file_url,s=Object.assign({},e.user_data);s["user_idcard_image_list"][i]=n,e.setData({user_data:s})}else e.$.confirm(a.msg||e.__("发生错误"))},fail:function(t){e.$.hideLoading()},complete:function(t){e.$.hideLoading()}})},fail:function(t){e.$.hideLoading()},complete:function(t){e.$.hideLoading()}})},submitdata:function(){var t=this;if(t.$.trim(t.user_data.user_realname))if(t.user_data.user_idcard)if(t.$.idcard(t.user_data.user_idcard))if(t.user_data.user_idcard_image_list[0])if(t.user_data.user_idcard_image_list[1]){var e={user_realname:t.user_data.user_realname,user_idcard:t.user_data.user_idcard,user_idcard_images:t.user_data.user_idcard_image_list.toString().replace('"')};t.$.request({url:t.Config.URL.account.saveCertificate.replace(/typ=e/,"typ=json"),data:e,method:"POST",success:function(e,i,a,n){200==i?t.$.showToast({title:t.__("成功,待平台审核"),success:function(){t.login(t.user_data),setTimeout((function(){t.$.navigateBack(1)}),1500)}}):t.$.confirm(a)}})}else t.$.confirm("请上传身份证照片反面");else t.$.confirm("请上传身份证照片正面");else t.$.confirm("请输入正确的身份证号码");else t.$.confirm("请输入身份证号码");else t.$.confirm("请输入用户名")}})};e.default=u},"8d00":function(t,e,i){var a=i("7893");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("6c97ee7a",a,!0,{sourceMap:!1,shadowMode:!1})},af74:function(t,e,i){"use strict";var a=i("2118"),n=i.n(a);n.a},dd73:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"codedialog"},[i("v-uni-view",{staticClass:"mask"}),i("v-uni-view",{staticClass:"dialog-view"},[i("v-uni-text",{staticClass:"dialog-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog()}}}),i("v-uni-view",{staticClass:"dialog-hd"},[i("v-uni-view",{staticClass:"codedialog-maintitle"},[i("v-uni-text",[t._v(t._s(t.__("发送验证码")))])],1),""!=t.phone&&null!=t.phone&&1==t.bindType?i("v-uni-view",{staticClass:"codedialog-subtitle"},[i("v-uni-text",[t._v(t._s(t.sprintf(t.__("已发送到手机号：%s"),t.phone)))])],1):t._e(),""!=t.phone&&null!=t.phone&&2==t.bindType?i("v-uni-view",{staticClass:"codedialog-subtitle"},[i("v-uni-text",[t._v(t._s(t.sprintf(t.__("已发送到email：%s"),t.phone)))])],1):t._e()],1),i("v-uni-view",{staticClass:"dialog-bd"},[i("v-uni-view",{staticClass:"code-view"},t._l(t.codeAry,(function(e,a){return i("v-uni-view",{key:a,staticClass:"code-item"},[t._v(t._s(e.val))])})),1)],1),i("v-uni-view",{staticClass:"dialog-ft"},[60==t.countdown?i("v-uni-view",{staticClass:"resend",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.resend.apply(void 0,arguments)}}},[t._v(t._s(t.__("重新发送")))]):t._e(),t.countdown<60?i("v-uni-view",{staticClass:"countdown"},[t._v(t._s(t.countdown)+"s")]):t._e()],1)],1),i("v-uni-view",{staticClass:"keyboard"},[i("v-uni-view",{staticClass:"keyboard-line"},[i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("1")]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("2")]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("3")])],1),i("v-uni-view",{staticClass:"keyboard-line"},[i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("4")]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("5")]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("6")])],1),i("v-uni-view",{staticClass:"keyboard-line"},[i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"7"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("7")]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"8"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("8")]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"9"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("9")])],1),i("v-uni-view",{staticClass:"keyboard-line"},[i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"clear"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v(t._s(t.__("清空")))]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("0")]),i("v-uni-view",{staticClass:"button-item",attrs:{"data-val":"delete"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyEvent.apply(void 0,arguments)}}},[t._v("x")])],1)],1)],1):t._e()},n=[]}}]);