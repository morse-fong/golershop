(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member-invoice-list"],{"38c9":function(i,t,e){"use strict";e.r(t);var n=e("4417"),o=e("c0b0");for(var a in o)["default"].indexOf(a)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(a);e("f0f6");var s=e("828b"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"1c233837",null,!1,n["a"],void 0);t["default"]=c.exports},4417:function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"page"},[i.isdata?e("v-uni-view",{staticClass:"m-ad-list"},[i._l(i.invoice_list,(function(t,n){return e("v-uni-view",{key:n,staticClass:"m-ad-item",attrs:{"data-id":t.user_invoice_id,"data-invoice_category":t.invoice_category,"data-invoice_type":t.invoice_type,"data-user_invoice_id":t.user_invoice_id,"data-invoice_title":t.invoice_title},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.selectInvoice.apply(void 0,arguments)},longpress:function(t){arguments[0]=t=i.$handleEvent(t),i.modify.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"m-ad-l",attrs:{"data-sel":i.user_invoice_id,"data-user_invoice_id":t.user_invoice_id}},[t.invoice_is_company?i._e():e("v-uni-text",{staticClass:"c-label"},[i._v("("+i._s(i.__("个人"))+")")]),t.invoice_is_company?e("v-uni-text",{staticClass:"p-label"},[i._v("("+i._s(i.__("单位"))+")")]):i._e(),e("v-uni-view",{staticClass:"m-ad-i-top"},[e("v-uni-text",[i._v(i._s(t.invoice_title))]),e("v-uni-label",[i._v(i._s(t.invoice_company_code))])],1),e("v-uni-view",{staticClass:"m-ad-i-bot"},[t.invoice_is_default?e("v-uni-label",{staticClass:"m-ad-icon"},[i._v(i._s(i.__("默认")))]):i._e()],1)],1),e("v-uni-view",{staticClass:"m-ad-edit tbl"},[e("v-uni-label",{staticClass:"iconfont icon-edit",attrs:{"data-user_invoice_id":t.user_invoice_id,"data-invoice_type":t.invoice_type},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.editInvoice.apply(void 0,arguments)}}}),e("v-uni-label",{staticClass:"iconfont icon-delete",attrs:{"data-user_invoice_id":t.user_invoice_id,user_invoice_id:t.user_invoice_id},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.removeInvoice.apply(void 0,arguments)}}})],1)],1)})),e("v-uni-button",{staticClass:"u-btn u-btn-default",staticStyle:{"margin-top":"50rpx"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.addInvoice.apply(void 0,arguments)}}},[i._v(i._s(i.__("添加发票")))]),i.options.issub?e("v-uni-button",{staticClass:"u-btn u-btn-secondary",staticStyle:{"margin-top":"50rpx"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.selectInvoice.apply(void 0,arguments)}}},[i._v(i._s(i.__("不开发票")))]):i._e()],2):e("v-uni-view",{staticClass:"m-nullpage",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.addInvoice.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"m-nullpage-middle"},[e("v-uni-label",{staticClass:"iconfont icon-dizhi"}),e("v-uni-view",{staticClass:"m-null-tip"},[e("v-uni-text",[i._v(i._s(i.__("您尚未添加发票信息?")))]),e("v-uni-text",{staticClass:"m-null-tipck"},[i._v(i._s(i.__("马上去添加发票信息")))])],1)],1)],1)],1)},o=[]},"782c":function(i,t,e){var n=e("de6f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("967d").default;o("9f4312c4",n,!0,{sourceMap:!1,shadowMode:!1})},"9dcc":function(i,t,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e("9b1b")),a=n(e("39d8")),s=n(e("c603")),c=e("8f59"),r={data:function(){return(0,a.default)({options:{},invoice_list:[],isdata:!1,spid:"",user_invoice_id:0,invoice_type:0,invoice_header:"",is_show:0,cart_id:0},"user_invoice_id",0)},computed:(0,c.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(i){uni.setNavigationBarTitle({title:this.__("发票地址")}),this.setData({user_invoice_id:i.user_invoice_id||0,invoice_type:i.invoice_type||0,spid:i.spid||"",options:i,isdata:!1,cart_id:i.cart_id});this.listInvoice(),this.notice.addNotification("RefreshInvoiceList",this.RefreshMethod,this),this.cart_id&&this.setData({is_show:1})},onShow:function(){},onUnload:function(){this.notice.removeNotification("RefreshInvoiceList",this)},onPullDownRefresh:function(){this.listInvoice()},methods:(0,o.default)((0,o.default)({},(0,c.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{RefreshMethod:function(){this.listInvoice()},listInvoice:function(){var i=this;i.setData({isdata:!1,invoice_list:[]}),i.$.request({url:i.Config.URL.user.invoice_lists,data:{},success:function(t,e,n,o){200==e&&(t.items.length>0?i.setData({isdata:!0,invoice_list:t.items}):i.setData({isdata:!1})),uni.stopPullDownRefresh()}})},modify:function(i){var t=this;i.currentTarget.dataset.user_invoice_id;uni.showActionSheet({itemList:["删除"],success:function(e){0==e.tapIndex?t.editInvoice(i):t.removeInvoice(i)}})},editInvoice:function(i){var t=this.options;t.user_invoice_id=i.currentTarget.dataset.user_invoice_id,t.invoice_type=i.currentTarget.dataset.invoice_type,this.options.issub?this.$.redirectTo({url:this.$.createUrl("/member/invoice/manage",t)}):this.$.navigateTo({url:this.$.createUrl("/member/invoice/manage",t)})},addInvoice:function(){if(this.options.issub)var i={issub:1};else i={};this.options.issub?this.$.redirectTo({url:this.$.createUrl("/member/invoice/manage",i)}):this.$.navigateTo({url:this.$.createUrl("/member/invoice/manage",i)})},selectInvoice:function(i){this.options.cart_id&&(this.setData({user_invoice_id:i.currentTarget.dataset.id,invoice_type:i.currentTarget.dataset.invoice_type,invoice_header:this.sprintf("%s - %s",1==i.currentTarget.dataset.invoice_type?this.__("普通发票"):this.__("增值税专用发票"),i.currentTarget.dataset.invoice_title,i.currentTarget.dataset.invoice_title)}),this.goback())},removeInvoice:function(i){var t=this;t.$.showModal({title:"提示",content:"确认删除这个发票地址吗？",showCancel:!0,success:function(e){if(e.confirm){var n={user_invoice_id:i.currentTarget.dataset.user_invoice_id};t.$.request({url:t.Config.URL.user.invoice_remove,data:n,method:"POST",success:function(i,e,n,o){200==e&&(t.$.showToast({title:"删除成功！"}),t.notice.postNotificationName("RefreshOrder",0),t.listInvoice())}})}}})},goback:function(){var i=this;s.default.navigateBack(1,(function(){var t=i.options;t.user_invoice_id=i.user_invoice_id,t.invoice_type=i.invoice_type,t.invoice_header=i.invoice_header,i.notice.postNotificationName("Refreshinvoice",t)}))}})};t.default=r},c0b0:function(i,t,e){"use strict";e.r(t);var n=e("9dcc"),o=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(a);t["default"]=o.a},de6f:function(i,t,e){var n=e("c86c");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-1c233837]:export{theme_bg:#1db0fc}.m-ad-item[data-v-1c233837]:after{content:" ";position:absolute;border-bottom:1px solid #c8c8cd;left:0;right:0;bottom:0;height:1px;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);color:#c8c8cd}.m-ad-item[data-v-1c233837]{background-color:#fff;padding:%?24?% %?20?% %?24?% %?30?%;position:relative\r\n  /*border-bottom: 1px solid #d5d5d5;*/}.m-ad-l[data-v-1c233837]{width:70%;display:inline-block}.m-ad-i-top[data-v-1c233837]{font-size:16px;line-height:%?50?%}.m-ad-i-top uni-text[data-v-1c233837]{margin-right:%?20?%}.m-ad-i-bot[data-v-1c233837]{font-size:14px;color:#888;line-height:20px;margin-top:%?10?%}.m-ad-icon[data-v-1c233837]{font-size:12px;padding:%?4?% %?8?%;background-color:#1db0fc;color:#fff;border-radius:%?8?%;margin-right:%?8?%;text-align:center}.m-ad-edit[data-v-1c233837]{position:absolute;right:%?20?%;top:50%;width:%?80?%;height:%?100?%;margin-top:%?-50?%;padding-left:%?40?%}.m-ad-edit uni-label[data-v-1c233837]{width:%?40?%;height:%?50?%;line-height:%?50?%;font-size:%?35?%;display:block;vertical-align:middle;text-align:center;color:#888}.c-label[data-v-1c233837]{font-size:12px;color:red}.p-label[data-v-1c233837]{font-size:12px;color:green}',""]),i.exports=t},f0f6:function(i,t,e){"use strict";var n=e("782c"),o=e.n(n);o.a}}]);