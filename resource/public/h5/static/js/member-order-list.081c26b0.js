(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member-order-list"],{"0e61":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-3cee61c7]:export{theme_bg:#1db0fc}.m-navbar-item[data-v-3cee61c7]{padding:%?20?% 0;font-size:%?28?%}.m-navbar-item[data-v-3cee61c7]:after{border:none}.m-navbar-item.m-navbar-item-on[data-v-3cee61c7]{background-color:#fff;color:#1db0fc}.m-navbar-item.m-navbar-item-on[data-v-3cee61c7]::before{content:" ";position:absolute;left:0;bottom:0;right:0;height:%?6?%;border-bottom:%?6?% solid #1db0fc;color:#ccc;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);z-index:3}.m-panel-hd uni-label[data-v-3cee61c7]{float:right;color:#1db0fc;font-size:%?26?%}.m-total-info[data-v-3cee61c7]{text-align:right;padding:%?10?% %?38?%;font-size:%?24?%}.m-total-info uni-label[data-v-3cee61c7]{font-size:%?32?%;color:#1db0fc}.m-total-info uni-text[data-v-3cee61c7]{font-size:%?24?%;color:#1db0fc}.m-total-btn[data-v-3cee61c7]{text-align:right;padding:%?20?% %?20?% %?20?% %?20?%;position:relative}.m-total-btn[data-v-3cee61c7]::before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #ebebe7;color:#ebebe7;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.m-total-btn .u-link-btn[data-v-3cee61c7]{margin:0 %?10?%;vertical-align:middle;display:inline-block;line-height:%?40?%;background-color:#fff;font-size:%?24?%}.m-sort[data-v-3cee61c7]{position:relative}.m-sort uni-image[data-v-3cee61c7]{width:%?24?%;height:%?24?%;position:absolute;\r\n  /*top: 50%;*/margin-top:%?10?%;margin-left:%?2?%}.m-product-price uni-text[data-v-3cee61c7]{font-size:%?24?%;color:#999;margin-left:%?6?%}.m-tab[data-v-3cee61c7]{position:fixed;width:100%;top:var(--window-top);z-index:2}.m-orderlist[data-v-3cee61c7]{padding-top:%?84?%;position:absolute;box-sizing:border-box;width:100%;height:100%}.u-tuan-label[data-v-3cee61c7]{padding:%?5?%;background-color:#1db0fc;border-radius:%?4?%;font-size:%?24?%;color:#fff;margin-right:%?5?%}.alert[data-v-3cee61c7]{font-size:%?32?%;width:70%;height:%?200?%;padding:0 %?40?%;position:absolute;left:10%;top:40%;background:#fff;border-radius:%?10?%;justify-content:center;display:flex;align-items:center;z-index:999}.cover[data-v-3cee61c7]{position:fixed;width:100%;height:100%;top:0;background:rgba(0,0,0,.4);overflow:hidden;z-index:998}.m-product-name[data-v-3cee61c7]{font-size:%?24?%}.m-product-img uni-image[data-v-3cee61c7]{padding:%?10?%}.m-product-item[data-v-3cee61c7]{margin-top:%?0?%}.scroll-view_H[data-v-3cee61c7]{width:100%;white-space:nowrap;height:%?84?%}.scroll-view_H .m-navbar-item[data-v-3cee61c7]{display:inline-block;padding-left:%?20?%;padding-right:%?20?%;\r\n  /*min-width:110rpx;*/min-width:%?150?%;min-width:%?108?%}',""]),t.exports=e},24252:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa");var a={name:"MsActivityTag",data:function(){return{tagList:{1101:"tag-info",1102:"tag-info",1103:"tag-info",1104:"tag-info",1105:"tag-info",1106:"tag-info",1107:"tag-info",1140:"tag-info",1131:"tag-info",1132:"tag-info",1121:"tag-info",1122:"tag-info",1123:"tag-info",1124:"tag-info",1125:"tag-info",1135:"tag-info",1133:"tag-info"},tagNameMap:{}}},props:{typeId:{type:[String,Number],default:0}},mounted:function(){this.tagNameMap={1101:this.__("加价购"),1102:this.__("满赠"),1103:this.__("限时折扣"),1104:this.__("优惠套装"),1105:this.__("优惠券"),1106:this.__("砸金蛋"),1107:this.__("满减"),1140:this.__("折上折"),1131:this.__("市场活动"),1132:this.__("组合套餐"),1121:this.__("幸运大抽奖"),1122:this.__("秒杀"),1123:this.__("拼团"),1124:this.__("砍价"),1125:this.__("一元购"),1135:this.__("阶梯价"),1133:this.__("多件折")}},methods:{onSearch:function(){this.$emi__("click",{})}}};e.default=a},5816:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-0e39c16a]:export{theme_bg:#1db0fc}.type-name-box[data-v-0e39c16a]{display:inline;line-height:1}.tag[data-v-0e39c16a]{padding:0 %?10?%}',""]),t.exports=e},"73a6":function(t,e,i){var a=i("5816");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("1793f912",a,!0,{sourceMap:!1,shadowMode:!1})},7583:function(t,e,i){"use strict";i.r(e);var a=i("24252"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"75e2":function(t,e,i){var a=i("0e61");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("296dd5ba",a,!0,{sourceMap:!1,shadowMode:!1})},"7ae9c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={msActivityTag:i("d32a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{class:t.show?"cover":""}),i("v-uni-view",{staticClass:"m-product-all"},[i("v-uni-view",{staticClass:"m-tab"},[i("v-uni-scroll-view",{staticClass:"m-navbar scroll-view_H",staticStyle:{width:"100%"},attrs:{"scroll-x":!0}},[i("v-uni-view",{class:["m-navbar-item ellipsis",1==t.tapindex?"m-navbar-item-on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allOrders.apply(void 0,arguments)}}},[t._v(t._s(t.__("全部订单")))]),i("v-uni-view",{class:["m-navbar-item ellipsis",2==t.tapindex?"m-navbar-item-on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBePaid.apply(void 0,arguments)}}},[t._v(t._s(t.__("待支付")))]),i("v-uni-view",{class:["m-navbar-item ellipsis",5==t.tapindex?"m-navbar-item-on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBeShipping.apply(void 0,arguments)}}},[1201==t.kindId?i("v-uni-label",[t._v(t._s(t.__("待发货")))]):i("v-uni-label",[t._v(t._s(t.__("待服务")))])],1),i("v-uni-view",{class:["m-navbar-item ellipsis",3==t.tapindex?"m-navbar-item-on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.receiptOfGoods.apply(void 0,arguments)}}},[1201==t.kindId?i("v-uni-label",[t._v(t._s(t.__("待收货")))]):i("v-uni-label",[t._v(t._s(t.__("待确认")))])],1),i("v-uni-view",{class:["m-navbar-item ellipsis",4==t.tapindex?"m-navbar-item-on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBeEvaluated.apply(void 0,arguments)}}},[1201==t.kindId?i("v-uni-label",[t._v(t._s(t.__("已完成")))]):i("v-uni-label",[t._v(t._s(t.__("已服务")))])],1)],1)],1),t.loadComplete?i("v-uni-view",[t.orderlist.length>0?i("v-uni-scroll-view",{staticClass:"m-orderlist page-container",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollbottom.apply(void 0,arguments)}}},[t._l(t.orderlist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"m-panel m-panel-access"},[i("v-uni-view",{staticClass:"m-panel-hd"},[i("v-uni-text",[t._v(t._s(t.__("订单编号："))+t._s(e.order_id))]),e.activity_type_id?i("ms-activity-tag",{staticStyle:{"margin-left":"5px"},attrs:{typeId:e.activity_type_id}}):t._e(),t._e(),i("v-uni-label",[t._v(t._s(t.getLabelByValue(e.order_state_id)))]),e.activity_groupbooking_history?i("v-uni-label",{staticStyle:{"margin-right":"10rpx"}},[t._v(t._s(t.getEnableByValue(e.activity_groupbooking_history.gb_enable)))]):t._e()],1),i("v-uni-view",{staticClass:"m-product-list"},t._l(e.items,(function(a,n){return i("v-uni-navigator",{key:n,staticClass:"m-product-item",attrs:{url:"/member/order/detail?on="+e.order_id}},[i("v-uni-view",{staticClass:"m-product-img"},[i("v-uni-image",{attrs:{src:a.order_item_image,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"m-product-info"},[i("v-uni-view",{staticClass:"m-product-name"},[i("v-uni-label",[a.activity_type_id==t.StateCode.ACTIVITY_TYPE_GROUPBOOKING?i("v-uni-text",{staticClass:"u-tuan-label"},[t._v(t._s(t.__("拼团")))]):t._e(),t._v(t._s(a.product_name))],1),i("v-uni-label",{staticClass:"m-min-name",staticStyle:{overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"1"}},[t._v(t._s(a.item_name?a.item_name:""))])],1),i("v-uni-view",{staticClass:"m-product-price"},[a.item_unit_price?[i("v-uni-label",[t._v(t._s(t.__("￥")))]),t._v(t._s(a.item_unit_price))]:t._e(),a.item_unit_points?[i("v-uni-label",{staticStyle:{margin:"auto 10rpx"}},[t._v("+")]),t._v(t._s(a.item_unit_points)+t._s(t.__("积分")))]:t._e(),a.item_unit_sp?[i("v-uni-label",{staticStyle:{margin:"auto 10rpx"}},[t._v("+")]),t._v(t._s(a.item_unit_sp)+t._s(t.__("众宝")))]:t._e(),i("v-uni-text",{staticStyle:{float:"right","margin-right":"60rpx"}},[t._v("x"+t._s(a.order_item_quantity))])],2)],1)],1)})),1),2==e.Type?i("v-uni-view",{staticClass:"m-product-item",staticStyle:{height:"154rpx"}},[i("v-uni-view",{staticClass:"m-product-img"},[i("v-uni-image",{staticStyle:{width:"172rpx",height:"172rpx"},attrs:{src:e.store_logo,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"m-product-info2",staticStyle:{padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"m-product-name"},[i("v-uni-label",[t._v(t._s(e.store_name))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"m-total-info"},[i("v-uni-view",[t._v(t._s(t.__("总金额"))+"："),e.order_payment_amount?[i("v-uni-text",{},[t._v(t._s(t.__("￥")))]),i("v-uni-label",{staticClass:"m-total-price"},[t._v(t._s(e.order_payment_amount))])]:t._e()],2),e.order_payment_amount!==e.trade_payment_amount&&e.trade_payment_amount>0?i("v-uni-view",[t._v(t._s(t.__("待付款"))+"："),e.order_payment_amount?[i("v-uni-text",{},[t._v(t._s(t.__("￥")))]),i("v-uni-label",{staticClass:"m-total-price"},[t._v(t._s(e.trade_payment_amount))])]:t._e()],2):t._e(),e.order_resource_ext1?void 0:t._e(),e.order_resource_ext1?i("v-uni-label",{staticClass:"m-total-price",staticStyle:{margin:"auto 10rpx"}},[t._v("+\n                "+t._s(e.order_resource_ext1)+t._s(t.__("积分")))]):t._e(),e.order_resource_ext2?i("v-uni-label",{staticClass:"m-total-price",staticStyle:{margin:"auto 10rpx"}},[t._v("+\n                "+t._s(e.order_resource_ext2)+t._s(t.__("众宝")))]):t._e()],2),i("v-uni-view",{staticClass:"m-total-btn"},[i("v-uni-form",{attrs:{"report-submit":"true"}},[e.order_is_paid!=t.StateCode.ORDER_PAID_STATE_YES&&e.order_state_id!=t.StateCode.ORDER_STATE_CANCEL?i("v-uni-button",{staticClass:"u-link-btn",attrs:{"data-on":e.order_id,"data-order_payment_amount":e.trade_payment_amount,formType:"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotopay.apply(void 0,arguments)}}},[t._v(t._s(t.__("去支付")))]):t._e()],1),e.order_lock_status?i("v-uni-view",{staticClass:"u-link-btn",attrs:{"data-on":e.order_id}},[t._v(t._s(t.__("退款/退货中...")))]):t._e(),e.order_buyer_evaluation_status||e.order_state_id!=t.StateCode.ORDER_STATE_FINISH?t._e():i("v-uni-navigator",{staticClass:"u-link-btn",attrs:{url:"/member/product/comment?od="+e.order_id}},[t._v(t._s(t.__("去评价")))]),1==e.order_buyer_evaluation_status?i("v-uni-navigator",{staticClass:"u-link-btn",attrs:{url:"/member/product/comment?od="+e.order_id}},[t._v(t._s(t.__("查看评价")))]):t._e(),1202==e.kind_id&&e.order_state_id==t.StateCode.ORDER_STATE_SHIPPED?i("v-uni-view",{staticClass:"u-link-btn",attrs:{"data-on":e.order_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.writeOrder.apply(void 0,arguments)}}},[t._v(t._s(t.__("确认服务")))]):t._e(),e.if_buyer_cancel?[e.activity_groupbooking_history&&(!e.activity_groupbooking_history||e.activity_groupbooking_history.gbh_flag&&1!=e.activity_groupbooking_history.gb_enable)?t._e():i("v-uni-view",{staticClass:"u-link-btn",attrs:{"data-on":e.order_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelOrder.apply(void 0,arguments)}}},[t._v(t._s(t.__("取消订单")))])]:t._e(),e.activity_groupbooking_history&&2==e.activity_groupbooking_history.gb_enable?i("v-uni-navigator",{staticClass:"u-link-btn",attrs:{url:"/activity/fightgroup/detail?gb_id="+e.activity_groupbooking_history.gb_id+"&on="+e.order_id}},[t._v(t._s(t.__("邀请好友参团")))]):t._e(),!e.activity_groupbooking_history||0!=e.activity_groupbooking_history.gb_enable&&1!=e.activity_groupbooking_history.gb_enable&&2!=e.activity_groupbooking_history.gb_enable?t._e():i("v-uni-navigator",{staticClass:"u-link-btn",attrs:{url:"/activity/fightgroup/detail?gb_id="+e.activity_groupbooking_history.gb_id+"&on="+e.order_id}},[t._v(t._s(t.__("拼团详情")))]),1201==e.kind_id&&e.order_state_id==t.StateCode.ORDER_STATE_SHIPPED?i("v-uni-view",{staticClass:"u-link-btn",attrs:{"data-on":e.order_id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmReceipt.apply(void 0,arguments)}}},[t._v(t._s(t.__("确认收货")))]):t._e(),i("v-uni-navigator",{staticClass:"u-link-btn",attrs:{url:"/member/order/detail?on="+e.order_id}},[t._v(t._s(t.__("查看详情")))]),2==e.Type?i("v-uni-navigator",{staticClass:"u-link-btn",attrs:{url:"../favorableorderdetail/favorableorderdetail?on="+e.order_id}},[t._v(t._s(t.__("查看详情")))]):t._e()],2)],1)})),i("v-uni-view",{staticClass:"m-loading-box"},[t.ispage?[i("v-uni-view",{staticClass:"u-loadmore"},[i("v-uni-label",{staticClass:"u-loading"}),i("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("正在加载")))])],1),i("v-uni-view",[i("v-uni-text")],1)]:[i("v-uni-view",{staticClass:"u-loadmore u-loadmore-line"},[i("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("没有更多数据啦！")))])],1)]],2)],2):i("v-uni-navigator",{staticClass:"m-nullpage",attrs:{url:"/pagesub/product/list",redirect:"true"}},[t.flag?t._e():i("v-uni-view",{staticClass:"m-nullpage-middle"},[i("v-uni-view",{staticClass:"m-null-tip"},[i("v-uni-label",{staticStyle:{"font-size":"32rpx"}},[t._v(t._s(t.__("亲~您还没有订单哦，")))]),i("v-uni-label",{staticClass:"highlight-link"},[t._v(t._s(t.__("快去看看吧")))])],1)],1)],1)],1):t._e(),t.show?i("v-uni-view",{staticClass:"alert"},[i("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:"/static/images/true.png"}}),i("v-uni-text",{staticStyle:{"margin-left":"20rpx"}},[t._v(t._s(t.receiveMsg))])],1):t._e()],1),i("payment-box",{ref:"paymentBox",attrs:{paymentDataDefault:t.paymentData,order_id:t.order_id},on:{onCancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancel.apply(void 0,arguments)},onPaid:function(e){arguments[0]=e=t.$handleEvent(e),t.onPaid.apply(void 0,arguments)},onFail:function(e){arguments[0]=e=t.$handleEvent(e),t.onFail.apply(void 0,arguments)}}})],1)},r=[]},b63d:function(t,e,i){"use strict";i.r(e);var a=i("7ae9c"),n=i("ce28");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("dea8");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"3cee61c7",null,!1,a["a"],void 0);e["default"]=s.exports},ce28:function(t,e,i){"use strict";i.r(e);var a=i("ede2"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},d32a:function(t,e,i){"use strict";i.r(e);var a=i("eba4"),n=i("7583");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("f39d");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"0e39c16a",null,!1,a["a"],void 0);e["default"]=s.exports},dea8:function(t,e,i){"use strict";var a=i("75e2"),n=i.n(a);n.a},eba4:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"type-name-box"},["undefined"!=t.tagNameMap[t.typeId]?i("v-uni-text",{staticClass:"tag tag-orange",attrs:{type:t.tagList[t.typeId]}},[t._v(t._s(t.tagNameMap[t.typeId]))]):t._e()],1)},n=[]},ede2:function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e966"),i("aa77"),i("bf0f"),i("c223");var n=a(i("9b1b")),r=a(i("2634")),o=a(i("2fdc")),s=a(i("2621")),l=i("8f59"),d={data:function(){return{isdata:!1,tapindex:1,page:1,rows:10,ispage:!0,flag:!0,type:0,kindId:1201,formId:"",orderlist:[],show:!1,receiveMsg:"",order_id:"",paymentData:{},enableOpinion:[{value:0,label:"拼团失败"},{value:1,label:"拼团成功"},{value:2,label:"拼团中"},{value:3,label:"拼团未生效"}],loadComplete:!1}},components:{paymentBox:s.default},computed:(0,l.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){var e=this;return(0,o.default)((0,r.default)().mark((function i(){var a;return(0,r.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$onLaunched;case 2:e.setData({tapindex:t.sl?t.sl:1,page:1,rows:10,orderlist:[],type:t.type?t.type:0,kindId:t.kind_id?t.kind_id:1201}),1201==e.kindId?uni.setNavigationBarTitle({title:e.__("我的订单")}):uni.setNavigationBarTitle({title:e.__("我的预约")}),a=e,e.notice.addNotification("RefreshMessage",a.RefreshMessage,a),e.getOrderlist();case 7:case"end":return i.stop()}}),i)})))()},onShow:function(){var t=this;uni.$on("refreshComment",(function(e){for(var i=t.orderlist,a=0;a<i.length;a++)i[a].order_id==e&&(i[a].order_buyer_evaluation_status=1)}))},onUnload:function(){this.notice.removeNotification("RefreshMessage",this),this.$refs.paymentBox.showBoxView&&this.$refs.paymentBox.cancel()},onBackPress:function(){if(this.$refs.paymentBox.showBoxView)return this.$refs.paymentBox.cancel(),!0},onPullDownRefresh:function(){this.getOrderlist()},methods:(0,n.default)((0,n.default)({},(0,l.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{RefreshMessage:function(t){this.setData({tapindex:1,page:1,rows:10,orderlist:[],ispage:!0,flag:!0,type:0,kindId:this.kindId,loadComplete:!1}),this.getOrderlist()},allOrders:function(){this.setData({tapindex:1,page:1,rows:10,orderlist:[],ispage:!0,flag:!0,type:0,kindId:this.kindId,loadComplete:!1}),this.getOrderlist()},toBePaid:function(){this.setData({tapindex:2,page:1,rows:10,orderlist:[],ispage:!0,flag:!0,type:this.StateCode.ORDER_STATE_WAIT_PAY,kindId:this.kindId,loadComplete:!1}),this.getOrderlist()},toBeShipping:function(){this.setData({tapindex:5,page:1,rows:10,orderlist:[],ispage:!0,flag:!0,type:this.StateCode.ORDER_STATE_WAIT_SHIPPING,kindId:this.kindId,loadComplete:!1}),this.getOrderlist()},receiptOfGoods:function(){this.setData({tapindex:3,page:1,rows:10,ispage:!0,flag:!0,orderlist:[],type:this.StateCode.ORDER_STATE_SHIPPED,kindId:this.kindId,loadComplete:!1}),this.getOrderlist()},toBeEvaluated:function(){this.setData({tapindex:4,page:1,rows:10,ispage:!0,flag:!0,orderlist:[],type:this.StateCode.ORDER_STATE_FINISH,kindId:this.kindId,loadComplete:!1}),this.getOrderlist()},scrollbottom:function(){if(this.flag){var t=this;t.setData({flag:!1}),clearTimeout(e);var e=setTimeout((function(){t.setData({order_state_id:t.type,flag:!1,page:parseInt(t.page)+1,rows:10}),t.getOrderlist()}),100)}},getLabelByValue:function(t){var e=this.plantformInfo.order_state_list.find((function(e){return e.value===t}));return e?e.label:""},getEnableByValue:function(t){var e=this.enableOpinion.find((function(e){return e.value===t}));return e?e.label:""},getOrderlist:function(){var t=this,e={page:t.page,size:t.rows,order_state_id:t.type,kind_id:t.kindId};t.$.request({url:this.Config.URL.user.order_lists,data:e,success:function(e,i,a,n){200==i&&e.items.length>0?(e.page>=e.total?t.setData({flag:!1,ispage:!1,orderlist:t.orderlist.concat(e.items)}):t.setData({flag:!0,ispage:!0,orderlist:t.orderlist.concat(e.items)}),t.setData({isdata:!0,loadComplete:!0})):t.setData({flag:!1,ispage:!1,isdata:!1,loadComplete:!0})},fail:function(e){t.setData({loadComplete:!0}),t.$.alert("网络异常请重试！")}})},cancelOrder:function(t){var e=this,i={order_id:t.currentTarget.dataset.on};e.$.confirm(e.__("是否取消订单"),(function(t){t.confirm&&e.$.request({url:e.Config.URL.user.order_cancel,method:"POST",data:i,success:function(t,i,a,n){200==i&&e.$.alert("取消成功！",(function(){e.setData({orderlist:[],page:1}),e.getOrderlist()}))}})}),!0)},writeOrder:function(t){var e=this,i={order_id:t.currentTarget.dataset.on};e.$.confirm("是否核销订单？",(function(t){t.confirm&&e.$.request({url:e.Config.URL.user.order_receive,data:i,success:function(t,i,a,n){200==i?e.$.alert("核销成功！",(function(){e.setData({orderlist:[],page:1,receiveMsg:a}),e.getOrderlist()})):(e.setData({show:!0}),setTimeout((function(){e.setData({show:!1})}),2e3),e.getOrderlist())}})}),!0)},confirmReceipt:function(t){var e={order_id:t.currentTarget.dataset.on},i=this;i.$.confirm(i.__("是否确认收货？"),(function(t){t.confirm&&i.$.request({url:i.Config.URL.user.order_receive,method:"POST",data:e,success:function(t,e,a,n){200==e?i.$.alert(i.__("收货成功！"),(function(){i.setData({orderlist:[],page:1}),i.getOrderlist()})):i.$.showModal({title:"提示",showCancel:!1,content:a})}})}),!0)},gotopay:function(){var t=(0,o.default)((0,r.default)().mark((function t(e){var i;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=this,t.next=3,i.$store.dispatch("getUserInfo",(function(t){}));case 3:return i.setData({order_id:e.currentTarget.dataset.on,paymentData:{order_id:e.currentTarget.dataset.on,order_money_amount:e.currentTarget.dataset.order_payment_amount,user_money:this.userInfo.user_money,user_points:this.userInfo.user_points,user_recharge_card:this.userInfo.user_recharge_card,user_sp:this.userInfo.user_sp}}),this.$refs.paymentBox.show(),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),onCancel:function(t){},onPaid:function(t){var e=this;e.$.alert(e.__("支付成功"),(function(){e.$.gotopage("/member/order/detail?on="+t.order_id)}),2e3),this.$refs.paymentBox.showBoxView&&this.$refs.paymentBox.cancel()},onFail:function(t){},sendMessage:function(t){var e={api:orderapi.OrderPaySuccessWXMessage,pages:"/member/order/detail?on="+t,formId:this.formId,WeiXinOpenId:this.userInfo.openId,value:{order_id:t}};this.$.sendTpl(e)}})};e.default=d},f39d:function(t,e,i){"use strict";var a=i("73a6"),n=i.n(a);n.a}}]);