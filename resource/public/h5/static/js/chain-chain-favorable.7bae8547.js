(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chain-chain-favorable"],{"0da9":function(t,a,e){var i=e("e58d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("2d8e96d2",i,!0,{sourceMap:!1,shadowMode:!1})},"5a79":function(t,a,e){"use strict";e.r(a);var i=e("b908"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},b908:function(t,a,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("e838"),e("5c47"),e("0506"),e("d4b5");var n=i(e("9b1b")),s=e("8f59"),o=i(e("2621")),r={data:function(){return{store_name:"",money:"",nodiscount:"",discount:"",isshow:!1,deliveryNum:"",isshow1:!1,shop_discount:10,totalMoney:"",payment:0,info:[],order_id:"",formId:"",time:"",Description:"",MoneyLimit:"",CouponEnabeld:"",discountvalue:"",nodiscountvalue:"",DiscountMoney:"0.00",couponItemId:0,IsUseCoupon:1,MaxUsableCash:0,MaxUsableECardCash:0,MaxUsableExtraCash:0,balance:0,realMoney:0,isBalance:!0,eCardCash:0,extraCash:0,realPayMoney:0,isECashCard:!0,isCoupon:!0,isSubmit:!0,Currency:"￥",store_id:0,paymentData:{}}},components:{paymentBox:o.default},computed:(0,s.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){uni.setNavigationBarTitle({title:this.__("优惠买单")});var a=this;a.setData({Currency:a.__("￥"),store_id:t.store_id||1001}),this.forceUserInfo((function(t){a.load()}))},onUnload:function(){this.notice.removeNotification("RefreshCoupon1",this),this.$refs.paymentBox.showBoxView&&this.$refs.paymentBox.cancel()},methods:(0,n.default)((0,n.default)({},(0,s.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo","reloadUserResource"])),{},{load:function(){var t=this;t.$.request({type:"post",url:this.Config.URL.store.info,data:{store_id:t.store_id,action:"intro"},dataType:"json",success:function(a,e,i,n){t.setData({shop_discount:a.info.store_discount,store_name:a.base.store_name}),t.setData({isshow1:!0}),t.inputVal()}}),this.notice.addNotification("RefreshCoupon1",t.RefreshCoupon1,t);var a="VendorFeatureSet";-1<a.indexOf("ECashCard")?(this.setData({isECashCard:!0}),this.GetUserUsableECash()):this.setData({isECashCard:!1}),-1<a.indexOf("Coupon")?this.setData({isCoupon:!0}):this.setData({isCoupon:!1})},clearnum:function(t){this.setData({deliveryNum:""})},GetUserUsableECash:function(){var t={userName:this.userInfo.UserName,orderRealTotal:0},a=this;a.$.xsr(a.$.makeUrl(orderapi.GetUserUsableECash,t),(function(t){a.setData({MaxUsableCash:t.Info[0].MaxUsableCash,MaxUsableECardCash:t.Info[0].MaxUsableECardCash,MaxUsableExtraCash:t.Info[0].MaxUsableExtraCash})}))},RefreshCoupon1:function(t){this.setData({couponItemId:t.couponItemId,IsUseCoupon:t.IsUseCoupon,DiscountMoney:t.DiscountMoney,MoneyLimit:t.MoneyLimit}),this.inputVal()},inputnum:function(t){this.setData({money:t.detail.value}),parseFloat(t.detail.value)-(parseFloat(t.detail.value)-parseFloat(this.nodiscount||0))*(1-this.shop_discount/10)<parseFloat(this.MoneyLimit)&&this.setData({couponItemId:0,IsUseCoupon:0,DiscountMoney:0,MoneyLimit:0}),this.$.isNull(t.detail.value)&&this.setData({couponItemId:0,IsUseCoupon:0,DiscountMoney:0,MoneyLimit:0}),parseFloat(this.nodiscount)>parseFloat(t.detail.value)&&(this.$.showModal({title:"提示",content:"不参与优惠金额应小于总金额"}),this.setData({nodiscount:0,discount:0})),this.inputVal()},onNodiscount:function(t){this.setData({nodiscount:t.detail.value}),parseFloat(this.money)-(parseFloat(this.money)-parseFloat(t.detail.value||0))*(1-this.shop_discount/10)<parseFloat(this.MoneyLimit)&&this.setData({couponItemId:0,IsUseCoupon:0,DiscountMoney:0,MoneyLimit:0}),parseFloat(t.detail.value)>parseFloat(this.money)&&(this.$.showModal({title:"提示",content:"不参与优惠金额应小于总金额"}),this.setData({nodiscount:0,discount:0,nodiscountvalue:""})),this.inputVal()},blur:function(t){/^\d{1,10}(\.\d{1,2})?$/.test(t.detail.value)||this.$.showModal({title:"提示",content:"请输入正确金额"})},blur1:function(t){/^\d{1,10}(\.\d{1,2})?$/.test(t.detail.value)||this.$.showModal({title:"提示",content:"请输入正确金额"})},inputVal:function(){var t=this.money,a=this.nodiscount,e=this.shop_discount,i=this.DiscountMoney;this.setData({discount:((t-a)*(1-e/10)).toFixed(2),payment:(t-(t-a)*(1-e/10)-i).toFixed(2)}),this.payment<0&&this.setData({payment:0}),isNaN(this.discount)&&this.setData({discount:0}),isNaN(this.payment)&&this.setData({payment:0}),0==this.MaxUsableCash&&this.setData({realPayMoney:this.payment}),this.MaxUsableCash>=this.payment?this.setData({balance:this.payment,realMoney:0}):this.setData({balance:this.MaxUsableCash,realMoney:(this.payment-this.MaxUsableCash).toFixed(2)}),this.setData({realPayMoney:this.realMoney}),0==this.isBalance&&this.setData({realPayMoney:this.payment})},suitcouponlist:function(){var t=this.money,a=this.nodiscount,e=this.shop_discount;this.setData({discount:((t-a)*(1-e/10)).toFixed(2)});var i={userId:this.userInfo.Id,store_id:1001,realMoney:(t-(t-a)*(1-e/10)).toFixed(2)},n=this;n.$.xsr(n.$.makeUrl(cartapi.GetUsableCouponItemListForQuickPay,i),(function(t){n.setData({info:t.Info}),n.$.navigateTo({url:"../favorablesuitcouponlist/favorablesuitcouponlist?val="+JSON.stringify(t.Info)+"&id="+n.couponItemId})}))},checkboxChange:function(t){0<t.detail.value.length?this.setData({isshow:!0}):this.setData({isshow:!1,nodiscount:0}),this.inputVal()},paysubmit:function(t){var a=this;if(a.$.isNull(this.money)||0==this.money)return a.$.showModal({title:"提示",content:"请输入消费总金额"}),!1;if(!/^\d{1,10}(\.\d{1,2})?$/.test(a.money))return a.$.showModal({title:"提示",content:"请输入正确金额"}),!1;if(a.isshow&&!/^\d{1,10}(\.\d{1,2})?$/.test(a.nodiscount))return a.$.showModal({title:"提示",content:"请输入正确金额"}),!1;if(parseFloat(a.nodiscount)>parseFloat(a.money))return a.$.showModal({title:"提示",content:"不参与优惠金额应小于总金额"}),!1;this.isBalance?(0==this.MaxUsableCash&&this.setData({eCardCash:(1*this.MaxUsableECardCash).toFixed(2),extraCash:(1*this.MaxUsableExtraCash).toFixed(2)}),0!=this.MaxUsableCash&&0==this.balance&&this.setData({eCardCash:(1*this.MaxUsableECardCash).toFixed(2),extraCash:(1*this.MaxUsableExtraCash).toFixed(2)}),this.balance>=this.MaxUsableECardCash&&this.setData({eCardCash:(1*this.MaxUsableECardCash).toFixed(2),extraCash:(this.balance-1*this.MaxUsableECardCash).toFixed(2)}),this.balance<this.MaxUsableECardCash&&this.setData({eCardCash:(1*this.balance).toFixed(2),extraCash:0})):this.setData({eCardCash:0,extraCash:0});var e={userName:this.userInfo.UserName,payTypeId:9,couponItemId:this.couponItemId,totalMoney:this.money,preferential:this.shop_discount,preferentialMoney:this.discount,nonPreferentialMoney:this.nodiscount||0,realMoney:this.realPayMoney,firstType:2,eCardCash:this.eCardCash,extraCash:this.extraCash,store_id:this.store_id};a.$.request({url:this.Config.URL.pay.favorable,data:e,success:function(t,i,n,s){200==i?a.gotopay(t.pay_sn,e.realMoney):a.$.alert(n)},fail:function(t){}})},gotopay_old:function(){var t=this,a={order_id:this.order_id,openid:this.userInfo.openId,store_id:this.shopInfo.store_id,typ:"json",payment_channel_code:"wx_native",prepay_flag:1};t.$.request({url:this.Config.URL.pay.pay,data:a,success:function(e,i,n,s){200==i?t.$.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(e){t.returnUrl(a.order_id)},fail:function(e){t.$.redirectTo("/chain/chain/favorabledetail?on="+a.order_id)},complete:function(e){"requestPayment:cancel"==e.errMsg&&(t.$.redirectTo("/chain/chain/favorabledetail?on="+a.order_id),t.sendMessage(a.order_id,1))}}):t.$.alert(n)},fail:function(t){}})},gotopay:function(t,a){return this.setData({order_id:t,paymentData:{order_id:t,order_money_amount:a,user_money:this.userInfo.user_money,user_points:this.userInfo.user_points,user_recharge_card:this.userInfo.user_recharge_card,user_sp:this.userInfo.user_sp}}),this.$refs.paymentBox.show(),!0},onCancel:function(t){},onPaid:function(t){var a=this;this.$refs.paymentBox.showBoxView&&this.$refs.paymentBox.cancel(),a.reloadUserResource((function(t){a.$.alert(a.__("支付成功"),(function(){a.$.gotopage("/chain/chain/favorabledetail?order_id="+a.order_id)}),2e3)}))},onFail:function(t){},returnUrl:function(t){},switchChange:function(t){t.detail.value?this.setData({realPayMoney:this.realMoney,isBalance:!0}):this.setData({realPayMoney:this.payment,isBalance:!1})}})};a.default=r},c3af:function(t,a,e){"use strict";e.r(a);var i=e("f4b1"),n=e("5a79");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("e090");var o=e("828b"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"7447da3c",null,!1,i["a"],void 0);a["default"]=r.exports},e090:function(t,a,e){"use strict";var i=e("0da9"),n=e.n(i);n.a},e58d:function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-7447da3c]:export{theme_bg:#1db0fc}.store-box[data-v-7447da3c]{width:90%;display:flex;line-height:%?92?%;height:%?92?%;border-radius:%?8?%;padding-left:%?24?%;font-weight:700;font-size:16px}.totalMoney[data-v-7447da3c]{width:90%;display:flex;margin:%?24?% auto 0;justify-content:space-betwee;height:%?92?%;border-radius:%?8?%}.totalMoney uni-label[data-v-7447da3c]{width:54%;height:%?92?%;line-height:%?92?%;font-size:%?26?%;color:#000}.totalMoney uni-input[data-v-7447da3c]{height:%?92?%;line-height:%?92?%;font-size:%?26?%;text-align:right;margin-right:%?20?%}.nodiscount[data-v-7447da3c]{width:90%;margin:%?51?% auto %?20?% auto}.check[data-v-7447da3c]{height:%?58?%;line-height:%?58?%;font-size:%?26?%;color:grey}.discount[data-v-7447da3c]{height:%?85?%;line-height:%?90?%;padding:0 %?40?%;background:#fff;font-size:%?28?%;color:#000;margin:%?24?% 0}.pay[data-v-7447da3c]{padding:0 %?40?%;background:#fff}.coupon[data-v-7447da3c]{display:flex;justify-content:space-between;height:%?98?%;line-height:%?98?%;font-size:%?26?%;color:#000;border-bottom:%?1?% solid #f1f1f1}.payments[data-v-7447da3c]{display:flex;justify-content:space-between;height:%?98?%;line-height:%?98?%;font-size:%?28?%;color:#000}.payment[data-v-7447da3c]{width:90%;height:%?80?%;line-height:%?82?%;background:#db384c;color:#fff;margin-top:%?50?%}.explain[data-v-7447da3c]{width:90%;margin:%?50?% auto}.title[data-v-7447da3c]{font-size:%?28?%;color:#000}.content[data-v-7447da3c]{font-size:%?24?%;color:#717171;margin-top:%?10?%}.m-cell-ft[data-v-7447da3c]::after{content:" ";display:inline-block;height:%?12?%;width:%?12?%;border-width:%?4?% %?4?% 0 0;border-color:#999;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;margin-top:%?-8?%;top:%?-4?%;right:%?-4?%}.u-back2 uni-image[data-v-7447da3c]{border-radius:100%;width:%?77?%;height:%?77?%;border:1px solid #eee;font-size:%?20?%;text-align:center;background-color:#fff;box-shadow:0 %?4?% %?8?% rgba(0,0,0,.35);z-index:999;opacity:.8;line-height:%?77?%;margin-bottom:%?20?%}.bj_able[data-v-7447da3c]{background:#fff;width:92%;margin:0 auto;padding-bottom:%?40?%}.able_text[data-v-7447da3c]{letter-spacing:%?2?%;width:54%;height:%?92?%;line-height:%?92?%;font-size:%?26?%;color:#000}.able_input[data-v-7447da3c]{width:90%;margin:%?20?% auto 0 auto;border-bottom:%?1?% solid #f1f1f1;height:%?110?%;display:flex}.able_fuhao[data-v-7447da3c]{font-family:PingFangSC-Medium;font-size:%?60?%;color:#000;letter-spacing:%?0.84?%;text-align:center;line-height:%?94?%;margin-right:%?10?%;font-weight:700}\r\n/* .input_lab { float: left; width: 75%; height: 100%; } */.checkbox[data-v-7447da3c]{font-family:PingFangSC-Regular;font-size:%?26?%;color:#7b7b7b;letter-spacing:%?0.5?%;text-align:center}.no_lab[data-v-7447da3c]{width:90%;display:flex;margin:%?24?% auto 0;justify-content:space-betwee;height:%?98?%;border-radius:%?8?%;line-height:%?98?%;border-bottom:%?1?% solid #f1f1f1}.pict_fal[data-v-7447da3c]{width:%?38?%;height:%?38?%;position:absolute;top:%?161?%;right:9%}.fal_pic[data-v-7447da3c]{width:%?38?%;height:%?38?%}.input_lab[data-v-7447da3c]{width:87%;font-family:UICTFontTextStyleBody;font-size:%?74?%;height:%?74?%;\r\n  /* line-height:74rpx; */\r\n  /* padding:8rpx 0; */min-height:%?83?%;line-height:normal;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;vertical-align:middl;font-weight:700}',""]),t.exports=a},f4b1:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"bj_able"},[e("v-uni-view",{staticClass:"totalMoney"},[e("v-uni-view",{staticClass:"able_text"},[t._v(t._s(t.__("向"))+" "+t._s(t.store_name)+" "+t._s(t.__("支付金额")))])],1),e("v-uni-view",{staticClass:"able_input"},[e("v-uni-view",{staticClass:"able_fuhao"},[t._v(t._s(t.Currency))]),e("v-uni-input",{staticClass:"input_lab",attrs:{type:"digit",maxlength:"8"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputnum.apply(void 0,arguments)},blur:function(a){arguments[0]=a=t.$handleEvent(a),t.blur.apply(void 0,arguments)}},model:{value:t.deliveryNum,callback:function(a){t.deliveryNum=a},expression:"deliveryNum"}}),e("v-uni-view",{staticClass:"pict_fal",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clearnum.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"fal_pic",attrs:{src:"/static/images/false.png"}})],1)],1),t.isshow1?e("v-uni-view",{staticClass:"nodiscount"},[e("v-uni-checkbox-group",{staticClass:"check",on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.checkboxChange.apply(void 0,arguments)}}},[e("v-uni-label",{staticClass:"checkbox"},[e("v-uni-checkbox",{staticStyle:{transform:"scale(0.6)","-webkit-transform":"scale(0.6)","-o-transform":"scale(0.6)","-moz-transform":"scale(0.6)","-ms-transform":"scale(0.6)"}}),t._v(t._s(t.__("输入不参与优惠金额")))],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"title",staticStyle:{}}),t.isshow?e("v-uni-view",{staticClass:"totalMoney  no_lab",staticStyle:{background:"#fff"}},[e("v-uni-label",[t._v("不参与优惠金额：")]),e("v-uni-input",{attrs:{placeholder:"询问服务员后输入",type:"digit",maxlength:"8",value:t.nodiscountvalue},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.onNodiscount.apply(void 0,arguments)},blur:function(a){arguments[0]=a=t.$handleEvent(a),t.blur1.apply(void 0,arguments)}}})],1):t._e(),t.isshow1&&t.shop_discount<10?e("v-uni-view",{staticClass:"discount"},[e("v-uni-image",{staticStyle:{width:"50rpx",height:"54rpx",float:"left","margin-top":"16rpx"},attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/img/discount-icon.png"}}),e("v-uni-text",{staticStyle:{float:"left","margin-left":"20rpx"}},[t._v(t._s(t.shop_discount||10)+"折")]),e("v-uni-text",{staticStyle:{color:"#db384c",float:"right"}},[t._v("-"+t._s(t.Currency)+t._s(t.discount))])],1):t._e(),e("v-uni-view",{staticClass:"pay"},[1==t.CouponEnabeld&&t.isCoupon?e("v-uni-view",{staticClass:"coupon",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.suitcouponlist.apply(void 0,arguments)}}},[e("v-uni-view",[e("v-uni-text",{staticStyle:{"letter-spacing":"2.4rpx","font-size":"26rpx"}},[t._v(t._s(t.__("优惠券")))])],1),e("v-uni-view",{staticStyle:{color:"#db384c"}},[t._v("-"+t._s(t.Currency)+t._s(t.DiscountMoney)),e("v-uni-text",{staticClass:"m-cell-ft"})],1)],1):t._e(),t.MaxUsableCash>0&&t.isECashCard?e("v-uni-view",{staticClass:"coupon"},[e("v-uni-view",{},[e("v-uni-text",{staticStyle:{"font-size":"26rpx"}},[t._v(t._s(t.__("余额抵扣")))]),e("v-uni-text",{staticStyle:{"font-size":"24rpx",color:"#333333"}},[t._v("("+t._s(t.__("可使用"))+t._s(t.Currency)+t._s(t.MaxUsableCash)+")")])],1),e("v-uni-view",{},[t.isBalance?e("v-uni-text",{staticStyle:{position:"absolute",right:"19%",color:"#db384c"}},[t._v(t._s(t.Currency)+t._s(t.balance))]):t._e(),e("v-uni-switch",{staticStyle:{transform:"scale(0.6)",position:"absolute",right:"36rpx"},attrs:{checked:!0},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.switchChange.apply(void 0,arguments)}}})],1)],1):t._e(),e("v-uni-view",{staticClass:" payments"},[e("v-uni-label",{staticStyle:{"letter-spacing":"2.4rpx","font-size":"26rpx"}},[t._v(t._s(t.__("实付款")))]),e("v-uni-text",{staticStyle:{color:"#db384c"}},[t._v(t._s(t.Currency)+t._s(t.realPayMoney))])],1)],1),t.isSubmit?e("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.paysubmit.apply(void 0,arguments)}}},[e("v-uni-button",{staticClass:"payment",attrs:{formType:"submit"}},[t._v(t._s(t.__("确认支付")))])],1):e("v-uni-form",{attrs:{"report-submit":"true"}},[e("v-uni-button",{staticClass:"payment",attrs:{formType:"submit"}},[t._v(t._s(t.__("确认支付")))])],1),t.Description?e("v-uni-view",{staticClass:"explain"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.__("买单说明：")))]),e("v-uni-view",{staticClass:"content"},[t._v(t._s(t.Description))])],1):t._e()],1),e("v-uni-view",{staticClass:"u-top-default"},[e("v-uni-navigator",{staticClass:"u-back2",attrs:{url:"/pages/index/index","open-type":"switchTab"}},[e("v-uni-image",{attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/img/gohome.png"}})],1)],1),e("payment-box",{ref:"paymentBox",attrs:{paymentDataDefault:t.paymentData,order_id:t.order_id,kind:"favorable"},on:{onCancel:function(a){arguments[0]=a=t.$handleEvent(a),t.onCancel.apply(void 0,arguments)},onPaid:function(a){arguments[0]=a=t.$handleEvent(a),t.onPaid.apply(void 0,arguments)},onFail:function(a){arguments[0]=a=t.$handleEvent(a),t.onFail.apply(void 0,arguments)}}})],1)},n=[]}}]);