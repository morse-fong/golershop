(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member-invoice-order"],{1530:function(t,i,e){"use strict";e.r(i);var n=e("694e"),a=e("9bfe");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("83ac");var s=e("828b"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"9d9b3cc4",null,!1,n["a"],void 0);i["default"]=c.exports},4503:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-9d9b3cc4]:export{theme_bg:#1db0fc}.box-sty[data-v-9d9b3cc4]{background-color:#fff;margin-top:%?20?%;border-radius:%?20?%;padding-bottom:%?20?%;margin-left:%?10?%;margin-right:%?10?%}.box-head[data-v-9d9b3cc4]{margin-top:%?20?%;padding-top:%?20?%;display:flex;justify-content:space-between;border-bottom:%?1?% solid #dbdbdb;padding-bottom:%?10?%}.box-state-sty[data-v-9d9b3cc4]{color:red;margin-right:%?40?%}.box-content-sty[data-v-9d9b3cc4]{padding-left:%?40?%;margin-top:%?20?%;padding-right:%?40?%;position:relative}.box-content-sty .u-link-btn[data-v-9d9b3cc4]{margin:0 %?10?%;vertical-align:middle;display:inline-block;line-height:%?30?%;background-color:#fff;font-size:%?22?%}.box-head-sty[data-v-9d9b3cc4]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.box-invo-con[data-v-9d9b3cc4]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.m-orderlist[data-v-9d9b3cc4]{position:absolute;box-sizing:border-box;width:100%;height:100%}.m-navbar-item[data-v-9d9b3cc4]{padding:%?20?% 0;font-size:%?24?%}.m-navbar-item[data-v-9d9b3cc4]:after{border:none}.m-navbar-item.m-navbar-item-on[data-v-9d9b3cc4]{background-color:#fff;color:#1db0fc}.m-navbar-item.m-navbar-item-on[data-v-9d9b3cc4]::before{content:" ";position:absolute;left:0;bottom:0;right:0;height:%?6?%;border-bottom:%?6?% solid #1db0fc;color:#ccc;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);z-index:3}',""]),t.exports=i},"694e":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"m-tab"},[e("v-uni-view",{staticClass:"m-navbar"},[e("v-uni-view",{class:"m-navbar-item "+(1==t.tapindex?"m-navbar-item-on":""),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.allStatus.apply(void 0,arguments)}}},[t._v(t._s(t.__("全部")))]),e("v-uni-view",{class:"m-navbar-item "+(2==t.tapindex?"m-navbar-item-on":""),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.notInvoice.apply(void 0,arguments)}}},[t._v(t._s(t.__("未开票")))]),e("v-uni-view",{class:"m-navbar-item "+(3==t.tapindex?"m-navbar-item-on":""),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.yesInvoice.apply(void 0,arguments)}}},[t._v(t._s(t.__("已开票")))])],1)],1),t.isdata?e("v-uni-scroll-view",{staticClass:"m-scrollBox",attrs:{"scroll-y":"true","scroll-top":"(scposition)"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.scrollbottom.apply(void 0,arguments)}}},[t._l(t.invoiceList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"box-sty"},[e("v-uni-view",{staticClass:"box-head"},[e("v-uni-navigator",{attrs:{url:"/member/order/detail?on="+i.order_id}},[e("v-uni-view",{staticStyle:{"margin-left":"40upx"}},[t._v(t._s(t.__("订单编号："))+"  "+t._s(i.order_id))])],1),e("v-uni-view",{staticClass:"box-state-sty"},[0==i.invoice_status?e("v-uni-text",[t._v(t._s(t.__("未开票")))]):e("v-uni-text",[t._v(t._s(t.__("已开票")))])],1)],1),e("v-uni-view",{staticClass:"box-content-sty"},[e("v-uni-view",{staticClass:"box-head-sty"},[t._v(t._s(t.__("发票抬头："))+" "+t._s(i.invoice_title))]),t._e(),e("v-uni-view",[t._v(t._s(t.__("纳税人识别号："))+" "+t._s(i.invoice_company_code))]),e("v-uni-view",[t._v(t._s(t.__("发票类型："))),1==i.invoice_type?e("v-uni-text",[t._v(t._s(t.__("普通发票")))]):e("v-uni-text",[t._v(t._s(t.__("增值税专用发票")))])],1),e("v-uni-view",[t._v(t._s(t.__("开票金额："))),e("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(t.__("￥"))+t._s(i.invoice_amount))])],1),i.invoice_status&&i.invoice_datetime?e("v-uni-view",{staticStyle:{"font-size":"24upx",color:"#959595"}},[t._v(t._s(t.__("开票时间："))+" "+t._s(i.invoice_datetime))]):t._e(),i.invoice_status&&i.invoice_img?e("v-uni-view",{staticStyle:{position:"absolute",right:"10rpx",bottom:"5rpx"}},[e("a",{staticClass:"u-link-btn",attrs:{href:i.invoice_img}},[t._v(t._s(t.__("查看详情")))])]):t._e()],1)],1)})),e("v-uni-view",{staticClass:"m-loading-box"},[t.ispage?[e("v-uni-view",{staticClass:"u-loadmore"},[e("v-uni-label",{staticClass:"u-loading"}),e("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("正在加载")))])],1)]:[e("v-uni-view",{staticClass:"u-loadmore u-loadmore-line"},[e("v-uni-text",{staticClass:"u-loadmore-tips"},[t._v(t._s(t.__("没有更多数据啦！")))])],1)]],2)],2):e("v-uni-view",{staticClass:"m-nullpage"},[e("v-uni-view",{staticClass:"m-nullpage-middle"},[e("v-uni-label",{staticClass:"iconfont icon-dizhi"}),e("v-uni-view",{staticClass:"m-null-tip"},[e("v-uni-text",[t._v(t._s(t.__("您尚无发票信息")))])],1)],1)],1)],1)},a=[]},"83ac":function(t,i,e){"use strict";var n=e("d61f"),a=e.n(n);a.a},"9bfe":function(t,i,e){"use strict";e.r(i);var n=e("f8e7"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},d61f:function(t,i,e){var n=e("4503");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("50df3ffa",n,!0,{sourceMap:!1,shadowMode:!1})},f8e7:function(t,i,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("e966"),e("c223");var a=n(e("9b1b")),o=n(e("c603")),s=e("8f59"),c={data:function(){return{options:{},invoiceList:[],isdata:!1,page:1,tapindex:1,size:10,ispage:!0,invoice_status:"",flag:!0}},computed:(0,s.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onLoad:function(t){uni.setNavigationBarTitle({title:this.__("我的发票")}),this.setData({options:t}),this.listInvoice()},onShow:function(){},onUnload:function(){},onPullDownRefresh:function(){this.listInvoice()},methods:(0,a.default)((0,a.default)({},(0,s.mapMutations)(["login","logout","getPlantformInfo","forceUserInfo","getUserInfo"])),{},{RefreshMethod:function(){this.listInvoice()},scrollbottom:function(){if(this.flag){var t=this;t.setData({flag:!1}),clearTimeout(i);var i=setTimeout((function(){t.setData({flag:!1,page:parseInt(t.page)+1,size:10}),t.listInvoice()}),100)}},listInvoice:function(){var t=this,i={invoice_status:this.invoice_status,page:t.page,size:t.size};t.$.request({url:t.Config.URL.user.listOrderInvoice,data:i,success:function(i,e,n,a){if(200==e&&i.items.length>0){for(var s=0;i.items.length>s;s++)i.items[s].invoice_datetime&&(i.items[s].invoice_datetime=o.default.formatDateFormatter(i.items[s].invoice_datetime,"yyyy-MM-dd hh:mm:ss"));i.page>=i.total?t.setData({flag:!1,ispage:!1,invoiceList:t.invoiceList.concat(i.items)}):t.setData({flag:!0,ispage:!0,invoiceList:t.invoiceList.concat(i.items)}),t.setData({isdata:!0})}else t.setData({flag:!1,ispage:!1,isdata:!1})},fail:function(i){t.setData({isdata:!1}),t.$.alert("网络异常请重试！")}})},allStatus:function(){this.setData({tapindex:1,page:1,ispage:!0,flag:!0,invoice_status:"",invoiceList:[]}),this.listInvoice()},notInvoice:function(){this.setData({tapindex:2,page:1,ispage:!0,flag:!0,invoice_status:0,invoiceList:[]}),this.listInvoice()},yesInvoice:function(){this.setData({tapindex:3,page:1,ispage:!0,invoice_status:1,flag:!0,invoiceList:[]}),this.listInvoice()}})};i.default=c}}]);