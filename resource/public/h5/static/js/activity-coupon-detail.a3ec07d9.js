(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activity-coupon-detail"],{"186c":function(t,e,i){"use strict";var a=i("2c18"),o=i.n(a);o.a},"2c18":function(t,e,i){var a=i("9581");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("967d").default;o("348fb106",a,!0,{sourceMap:!1,shadowMode:!1})},"3b5a7":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tails_box",style:"640rpx"},[i("v-uni-view",{staticClass:"tails_couname"},[i("v-uni-text",[t._v(t._s(t.CenterCoupon.activity_name))])],1),i("v-uni-view",{staticClass:"tails_mon"},[i("v-uni-label",{staticStyle:{"font-size":"30rpx","margin-right":"8rpx","margin-left":"25%"}},[t._v(t._s(t.__("￥")))]),i("v-uni-label",{staticStyle:{"font-size":"60rpx","margin-right":"24rpx","ont-weight":"bold"}},[t._v(t._s(t.CenterCoupon.voucher_price))]),i("v-uni-label",{staticStyle:{"font-size":"24rpx",color:"#9B9B9B"}},[t._v(t._s(t.sprintf(t.__("满￥%s可用"),t.CenterCoupon.voucher_subtotal||t.CenterCoupon.activity_rule_json.requirement.buy.subtotal)))])],1),i("v-uni-view",{staticClass:"tails_time",staticStyle:{width:"100%"}},[t._v(t._s(t.sprintf(t.__("有效日期至：%s"),t.CenterCoupon.voucher_end_date||t.CenterCoupon.activity_endtime)))]),t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"tails_time"},[i("v-uni-image",{staticStyle:{width:"64%",height:"289rpx"},attrs:{src:t.CenterCoupon.WriteOffCodeUrl}})],1):t._e(),t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"tails_time",staticStyle:{"font-size":"24rpx",color:"#9B9B9B"}},[t._v(t._s(t.CenterCoupon.WriteOffCode))]):t._e(),t.CenterCoupon.AllowOfflineWriteOff?t._e():i("v-uni-view",{staticClass:"btn_box",staticStyle:{height:"100rpx"}},[t.CenterCoupon.activity_state==t.StateCode.ACTIVITY_STATE_NORMAL&&2==t.CenterCoupon.CouponType?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receivenowWeixin.apply(void 0,arguments)}}},[t._v(t._s(t.__("立即领取")))]):t._e(),t.CenterCoupon.activity_state==t.StateCode.ACTIVITY_STATE_NORMAL?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receivenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("立即领取")))]):t._e(),t.CenterCoupon.activity_state!=t.StateCode.ACTIVITY_STATE_FINISHED&&t.CenterCoupon.activity_state!=t.StateCode.ACTIVITY_STATE_CLOSED||t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_USED?t._e():i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id}},[t._v(t._s(t.__("已领完")))]),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_USED?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id}},[t._v(t._s(t.__("已使用")))]):t._e(),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_TIMEOUT?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id}},[t._v(t._s(t.__("已过期")))]):t._e(),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_UNUSED&&0==t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id,"data-store_id":t.CenterCoupon.store_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.usenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("立即使用")))]):t._e(),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_UNUSED&&t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id,"data-store_id":t.CenterCoupon.store_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.usenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("在线使用")))]):t._e(),t._e()],1)],1),i("v-uni-view",{staticClass:"img_box"},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%","vertical-align":"top"},attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/coupon/partingLine.png"}})],1),i("v-uni-view",{staticClass:"tailfoli",staticStyle:{overflow:"hidden"}},[t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"btn_box",staticStyle:{margin:"9px auto 0 auto",overflow:"hidden"}},[t.CenterCoupon.activity_state==t.StateCode.ACTIVITY_STATE_NORMAL&&2==t.CenterCoupon.CouponType?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receivenowWeixin.apply(void 0,arguments)}}},[t._v(t._s(t.__("立即领取")))]):t._e(),t.CenterCoupon.activity_state==t.StateCode.ACTIVITY_STATE_NORMAL?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receivenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("立即领取")))]):t._e(),t.CenterCoupon.activity_state!=t.StateCode.ACTIVITY_STATE_FINISHED&&t.CenterCoupon.activity_state!=t.StateCode.ACTIVITY_STATE_CLOSED||t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_USED?t._e():i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id}},[t._v(t._s(t.__("已领完")))]),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_USED?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id}},[t._v(t._s(t.__("已使用")))]):t._e(),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_TIMEOUT?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id}},[t._v(t._s(t.__("已过期")))]):t._e(),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_UNUSED&&0==t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id,"data-store_id":t.CenterCoupon.store_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.usenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("立即使用")))]):t._e(),t.CenterCoupon.voucher_state_id==t.StateCode.VOUCHER_STATE_UNUSED&&t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"but-stl",staticStyle:{"margin-right":"86rpx"},attrs:{"data-id":t.CenterCoupon.activity_id,"data-store_id":t.CenterCoupon.store_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.usenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("在线使用")))]):t._e(),t._e(),t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"btn_mx"},[t._v(t._s(t.__("支持线下使用（在门店购物时，向店员出示此码抵扣）")))]):t._e()],1):t._e(),t.CenterCoupon.AllowOfflineWriteOff?t._e():i("v-uni-view",{staticClass:"tails_tox"},[i("v-uni-view",{staticClass:"tail_fo1"},[t._v(t._s(t.__("使用条件")))]),i("v-uni-view",{staticClass:"tail_fo2"},[i("v-uni-view",{staticStyle:{"margin-bottom":"10rpx"}},[t._v("1、"+t._s(t.sprintf(t.__("满￥%s可用"),t.CenterCoupon.voucher_subtotal||t.CenterCoupon.activity_rule_json.requirement.buy.subtotal)))]),i("v-uni-view",[i("v-uni-label",{staticStyle:{"margin-right":"57rpx"}},[t._v("2、"+t._s(t.CenterCoupon.store_name)+t._s(t.__("可用")))]),i("v-uni-label",{staticStyle:{color:"#FFCA81"},attrs:{"data-id":t.CenterCoupon.activity_id,"data-store_id":t.CenterCoupon.store_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.usenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("查看")))])],1)],1)],1)],1),t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"tails_tox"},[i("v-uni-view",{staticClass:"tail_fo5"},[t._v(t._s(t.__("使用条件")))]),i("v-uni-view",{staticClass:"tail_fo6"},[i("v-uni-view",{staticStyle:{"margin-bottom":"10rpx"}},[t._v("1、"+t._s(t.sprintf(t.__("满￥%s可用"),t.CenterCoupon.voucher_subtotal||t.CenterCoupon.activity_rule_json.requirement.buy.subtotal)))]),i("v-uni-view",[i("v-uni-label",{staticStyle:{"margin-right":"57rpx"}},[t._v("2、"+t._s(t.CenterCoupon.store_name)+t._s(t.__("可用")))]),i("v-uni-label",{staticStyle:{color:"#FFCA81"},attrs:{"data-id":t.CenterCoupon.activity_id,"data-store_id":t.CenterCoupon.store_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.usenow.apply(void 0,arguments)}}},[t._v(t._s(t.__("查看")))])],1)],1)],1):t._e(),""!=t.CenterCoupon.Description&&null!=t.CenterCoupon.Description||t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticStyle:{width:"100%"}},[i("v-uni-view",{staticClass:"tails_tox",staticStyle:{width:"85%","padding-bottom":"60rpx"}},[i("v-uni-view",{staticClass:"tail_fo1",staticStyle:{color:"#fff"}},[t._v(t._s(t.__("使用说明")))]),t.CenterCoupon.AllowOfflineWriteOff?i("v-uni-view",{staticClass:"tail_fo3",staticStyle:{color:"#fff",height:"43rpx"}},[t._v(t._s(t.__("支持线下使用，领取后向店员展示优惠券详情")))]):t._e(),t.CenterCoupon.Description?i("v-uni-rich-text",{staticStyle:{color:"#fff","white-space":"pre-line","font-size":"22rpx","word-break":"break-all"},attrs:{nodes:"CenterCoupon.Description"}}):t._e()],1)],1):t._e(),void 0],2)},o=[]},"582c":function(t,e,i){"use strict";i.r(e);var a=i("70de"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"70de":function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d4b5");var o=a(i("9b1b")),n=a(i("c603")),r=i("8f59"),s={data:function(){return{options:{},CenterCoupon:{activity_rule_json:{requirement:{buy:{}}}},cid:"",couponItemId:""}},computed:(0,r.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){uni.setNavigationBarTitle({title:this.__("优惠券详情")}),this.setData({cid:t.cid,couponItemId:t.couponItemId});this.GetCouponInfo()},methods:(0,o.default)((0,o.default)({},(0,r.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{GetCouponInfo:function(t){var e={activity_id:this.cid,user_voucher_id:this.couponItemId},i=this;i.$.request({url:this.Config.URL.user.voucher_get,data:e,success:function(t,e,a,o){200==e&&(t.voucher_end_date=i.$.formatDateFormatter(t.voucher_end_date,"yyyy-MM-dd"),t.AllowOfflineWriteOff=!1,i.setData({CenterCoupon:t}))}})},onGotUserInfo:function(t){if(null!=t.detail.userInfo){var e={Photo:t.detail.userInfo.avatarUrl,NickName:t.detail.userInfo.nickName,UserName:app.globalData.UserInfo.UserName};n.default.xsr(n.default.makeUrl(userapi.UpdateUserPhotoAndNickName,e),(function(t){})),app.imageUrl=t.detail.userInfo.avatarUrl,app.nickName=t.detail.userInfo.nickName,app.authorize=!0,this.shareQRCode()}},shareQRCode:function(t){var e={vendorId:app.globalData.VendorInfo.Id,userId:app.globalData.UserInfo.Id,couponId:this.cid};n.default.xsr(n.default.makeUrl(userapi.QRCouponCodePoster,e),(function(t){}))},showCodeImg:function(){wx.previewImage({current:this.PageQRCodeInfo.Path,urls:[this.PageQRCodeInfo.Path]})},saveImg:function(){var t=this;n.default.loading(),wx.downloadFile({url:this.PageQRCodeInfo.Path,success:function(e){n.default.hideloading(),wx.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){t.setData({PageQRCodeInfo:{Path:"",IsShare:!1,IsShareBox:!1,IsJT:!1}}),n.default.alert("保存图片成功！")},fail:function(t){n.default.hideloading()}})},fail:function(t){n.default.hideloading()}})},cancelShare:function(){this.setData({PageQRCodeInfo:{Path:"",IsShare:!1,IsShareBox:!1,IsJT:!1}})},usenow:function(t){var e=t.currentTarget.dataset.store_id;if(this.CenterCoupon.item_ids.length>0){var i=JSON.stringify(this.CenterCoupon.item_ids);this.$.gotopage({url:"/member/product/coupon?store_id="+e+"&item_ids="+i})}else this.$.redirectTo({url:"/member/product/coupon?store_id="+e})},receivenow:function(t){this.getCoupon(t.currentTarget.dataset.id)},getCoupon:function(t){var e=this,i=this,a={activity_id:t,user_is_new:0};this.forceUserInfo((function(t){t&&n.default.request({url:e.Config.URL.user.voucher_add,data:a,success:function(t,e,a,o){200==e?(i.getCouponlist(),i.$.confirm(i.__("领取成功!,去消费"),(function(t){t.confirm&&i.$.navigateTo({url:"/pagesub/index/store?store_id="+i.CenterCoupon.store_id})}))):n.default.alert(a)}})}))},shareBox:function(){this.setData({PageQRCodeInfo:{Path:"",IsShare:!0,IsShareBox:!0,IsJT:!1}})}})};e.default=s},9581:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-48ae955e]:export{theme_bg:#1db0fc}\r\n/* pages/Receivetails/Receivetails.wxss */uni-page-body[data-v-48ae955e]{background:#db384c}body.?%PAGE?%[data-v-48ae955e]{background:#db384c}.tails_box[data-v-48ae955e]{width:94%;\r\n  /*height: 345rpx;*/background:#fff;margin:%?70?% auto 0 auto;position:relative;padding-top:%?18?%;border-top-left-radius:11px;border-top-right-radius:11px}.tails_logo[data-v-48ae955e]{width:%?112?%;position:absolute;top:-14%;left:42%;border-radius:50%;overflow:hidden}.tails_shopname[data-v-48ae955e]{width:100%;color:#fff;font-size:%?24?%;text-align:center}.tails_couname[data-v-48ae955e]{width:100%;color:#db384c;font-size:%?36?%;text-align:center;margin-top:%?10?%;font-weight:700}.tails_mon[data-v-48ae955e]{width:100%;color:#db384c;text-align:center;margin-top:%?40?%;margin-bottom:%?40?%}.tails_but[data-v-48ae955e]{width:54%;margin:%?43?% auto 0 auto;height:%?50?%;background:#fff;border-radius:%?54?%;text-align:center;font-size:%?24?%;line-height:%?50?%;color:#db384c}.tails_time[data-v-48ae955e]{width:64%;\r\n  /*margin: 25rpx auto 0 auto;*/text-align:center;font-size:%?22?%;color:#db384c}.tails_tox[data-v-48ae955e]{width:89%;margin:0 auto}.tail_fo1[data-v-48ae955e]{font-size:%?24?%;color:#000;line-height:%?62?%}.tail_fo5[data-v-48ae955e]{font-size:%?24?%;color:#fff;padding-left:%?20?%;line-height:%?62?%}.tail_fo2[data-v-48ae955e]{width:100%;font-size:%?24?%;color:#9b9b9b;border-radius:%?10?%}.tail_fo6[data-v-48ae955e]{width:100%;font-size:%?24?%;color:#fff;padding-left:%?20?%;border-radius:%?10?%}.tail_fo3[data-v-48ae955e]{width:100%;height:%?137?%;font-size:%?22?%;border-radius:%?10?%}.but-stl[data-v-48ae955e]{width:42%;float:left;text-align:center;height:%?61?%;border-radius:%?50?%;border:1px solid #fff;background:#db384c;font-size:%?26?%;color:#fff;line-height:%?61?%}.but-stl02[data-v-48ae955e]{width:42%;float:left;text-align:center;height:%?61?%;border-radius:%?50?%;border:1px solid #db384c;background:#fff;font-size:%?26?%;color:#db384c;line-height:%?61?%}.tailfoli[data-v-48ae955e]{width:94%;height:88px;background:#fff;border-bottom-left-radius:11px;border-bottom-right-radius:11px;margin:0 auto}.btn_box[data-v-48ae955e]{width:88%;margin:22px auto 0 auto;wxcs_style_margin:22px auto 0 auto;\r\n  /*height: 100rpx;*/display:flex}.img_box[data-v-48ae955e]{width:94%;height:%?72?%;margin:0 auto}.btn_mx[data-v-48ae955e]{text-align:center;font-size:%?22?%;color:#9b9b9b;margin:%?88?% 0 0}',""]),t.exports=e},b6bb:function(t,e,i){"use strict";i.r(e);var a=i("3b5a7"),o=i("582c");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("186c");var r=i("828b"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"48ae955e",null,!1,a["a"],void 0);e["default"]=s.exports}}]);