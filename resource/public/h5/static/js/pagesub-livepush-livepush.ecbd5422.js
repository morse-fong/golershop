(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesub-livepush-livepush"],{6744:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-66177950]{background:#000;overflow:hidden}.butlist[data-v-66177950]{height:%?140?%;position:absolute;bottom:0;display:flex;width:100%;justify-content:space-around;padding-top:%?20?%;border-top:1px solid #fff;background-color:#000}.buticon[data-v-66177950]{height:%?120?%;width:%?120?%;color:#fff;position:relative;text-align:center;margin-bottom:%?20?%}.buticon uni-image[data-v-66177950]{height:%?64?%;width:%?64?%}.buticon .mar10[data-v-66177950]{margin-top:%?-20?%}.martp10[data-v-66177950]{margin-top:%?10?%}.give[data-v-66177950]{width:%?90?%;height:%?90?%;background:#f44336;border-radius:50%;box-shadow:0 0 %?22?% 0 #fc5e14;position:absolute;left:%?15?%;top:%?15?%;font-size:%?44?%;line-height:%?90?%}.givebegin[data-v-66177950]{width:%?60?%;height:%?60?%;background:#f44336;border-radius:20%;box-shadow:0 0 %?22?% 0 #fc5e14;position:absolute;left:%?30?%;top:%?30?%}.x_f[data-v-66177950]{\r\n  /* border: 6rpx solid #F44336; */width:%?120?%;height:%?120?%;background:#fff;border-radius:50%;position:absolute;text-align:center;top:0;left:0;box-shadow:0 0 %?28?% 0 #fb6318}\r\n/* 产生动画（向外扩散变大）的圆圈  */.pulse[data-v-66177950]{width:%?160?%;height:%?160?%;position:absolute;border:%?12?% solid #f44336;border-radius:100%;z-index:1;opacity:0;-webkit-animation:warn-data-v-66177950 2s ease-out;animation:warn-data-v-66177950 2s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;left:%?-28?%;top:%?-28?%}\r\n/**\r\n\t * 动画\r\n\t */@-webkit-keyframes warn-data-v-66177950{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}25%{-webkit-transform:scale(0);transform:scale(0);opacity:.1}50%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.3}75%{-webkit-transform:scale(.5);transform:scale(.5);opacity:.5}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes warn-data-v-66177950{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}25%{-webkit-transform:scale(0);transform:scale(0);opacity:.1}50%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.3}75%{-webkit-transform:scale(.5);transform:scale(.5);opacity:.5}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}',""]),t.exports=i},6978:function(t,i,e){var n=e("6744");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("967d").default;s("1aa5300a",n,!0,{sourceMap:!1,shadowMode:!1})},"88b7":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"butlist"},[e("v-uni-view",{staticClass:"buticon martp10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/livepush/back2.png"}}),e("v-uni-view",{staticClass:"mar10"},[t._v(t._s(t.__("返回")))])],1),e("v-uni-view",{staticClass:"buticon martp10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchCamera.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/livepush/reversal.png"}}),e("v-uni-view",{staticClass:"mar10"},[t._v(t._s(t.__("翻转")))])],1),e("v-uni-view",{staticClass:" buticon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.startPusher.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"x_f"}),e("v-uni-view",{class:1==t.begin?"givebegin":"give"},[t._v(t._s(t.contTime))]),t.begin?e("v-uni-view",{staticClass:"pulse"}):t._e()],1),e("v-uni-view",{staticClass:"buticon martp10"},[e("v-uni-image",{attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/livepush/beautiful.png"}}),e("v-uni-view",{staticClass:"mar10"},[t._v(t._s(t.__("美化")))])],1),0==t.begin?e("v-uni-view",{staticClass:"buticon martp10"},[e("v-uni-picker",{attrs:{value:t.index,range:t.array,"range-key":"cont"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/livepush/countdown.png"}}),e("v-uni-view",{staticClass:"mar10"},[t._v(t._s(t.__("倒计时")))])],1)],1):t._e(),t.begin?e("v-uni-view",{staticClass:"buticon martp10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upload.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"https://static.shopsuite.cn/xcxfile/appicon/livepush/yes.png"}}),e("v-uni-view",{staticClass:"mar10"},[t._v(t._s(t.__("完成")))])],1):t._e()],1)],1)},s=[]},b94ed:function(t,i,e){"use strict";e.r(i);var n=e("88b7"),s=e("f411");for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("e591");var o=e("828b"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"66177950",null,!1,n["a"],void 0);i["default"]=r.exports},e591:function(t,i,e){"use strict";var n=e("6978"),s=e.n(n);s.a},ef50:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("8f59"),s={data:function(){return{begin:!1,complete:!1,pause:!1,currentWebview:null,pusher:null,livepushurl:"rtmp://push.shopsuite.cn/shopsuite/10002?auth_key=1581573300-0-0-7b84182ecdc2728a1f8c366b12644c49",logininfokey:"",homeworkcont:"",jiexititle:"",index:0,indextu:0,contTime:"",array:[{id:1,cont:"10秒",time:10},{id:2,cont:"20秒",time:20},{id:3,cont:"30秒",time:30},{id:4,cont:"40秒",time:40},{id:5,cont:"50秒",time:50},{id:6,cont:"60秒",time:60}]}},computed:(0,n.mapState)(["Config","StateCode","notice","plantformInfo","shopInfo","userInfo","hasLogin"]),onShow:function(){uni.getNetworkType({success:function(t){"wifi"!=t.networkType&&uni.showModal({title:"温馨提示",content:"当前非Wifi网络，请注意您的流量是否够用",success:function(t){}})}}),uni.onNetworkStatusChange((function(t){"4g"!=t.networkType&&"wifi"!=t.networkType&&uni.showModal({title:"温馨提示",content:"当前网络质量差，请切换为4G网络或Wifi网络",success:function(t){}})}))},onBackPress:function(){return this.back(),!0},onLoad:function(t){var i=this;this.jiexititle=t.title,uni.getStorage({key:"logininfokey",success:function(t){i.logininfokey=t.data}}),uni.getStorage({key:"clickworkcont",success:function(t){i.homeworkcont=t.data}}),uni.getStorage({key:"livepushurl",success:function(t){i.livepushurl=t.data}}),this.getwebview()},methods:{bindPickerChange:function(t){this.index=t.target.value,this.contTime=this.array[t.target.value].time,uni.showToast({title:"请点击红色按钮，开始进入倒计时",icon:"none",duration:4e3})},back:function(){uni.showModal({title:"提示",content:"返回后未上传的视频需要重新录制哦",success:function(t){t.confirm?uni.redirectTo({url:"../user/issue"}):t.cancel}})},getwebview:function(){var t=getCurrentPages();t[t.length-1];this.plusReady()},plusReady:function(){this.pusher=new plus.video.LivePusher("pusher",{url:"rtmp://push.shopsuite.cn/shopsuite/10002?auth_key=1581573300-0-0-7b84182ecdc2728a1f8c366b12644c49",top:"0",left:"0px",width:"100%",height:uni.getSystemInfoSync().windowHeight-15+"px",position:"absolute",beauty:"1",whiteness:"0",aspect:"9:16"}),this.currentWebview.append(this.pusher),this.pusher.addEventListener("statechange",(function(t){}),!1)},beautiful:function(){this.pusher.options.beauty=1,this.plusReady()},startPusher:function(){""!=this.contTime?1!=this.indextu&&this.conttimejs():this.beginlivepush()},conttimejs:function(){var t=this;if(""!=this.contTime){if(this.indextu=1,1==this.contTime)return this.contTime="",this.beginlivepush(),!1;this.contTime--,setTimeout((function(){t.conttimejs()}),1e3)}},beginlivepush:function(){this.indextu=0,0==this.begin?(this.begin=!0,this.pusher.setOptions({url:this.livepushurl}),this.pusher.start(),uni.showToast({title:"开始录制",icon:"none",duration:2e3})):1==this.pause?(this.begin=!0,this.pause=!1,this.pusher.resume(),uni.showToast({title:"开始录制",icon:"none",duration:2e3})):(this.begin=!1,this.pause=!0,this.pusher.pause(),uni.showToast({title:"暂停录制",icon:"none",duration:2e3}),this.upload())},switchCamera:function(){this.pusher.switchCamera()},upload:function(){var t=this;uni.showModal({title:"提示",content:"确定保存吗",success:function(i){i.confirm?(t.pusher.pause(),t.endlivepush()):i.cancel}})},endlivepush:function(){return uni.showToast({icon:"loading",title:"结束...",duration:5e3}),!1}},components:{}};i.default=s},f411:function(t,i,e){"use strict";e.r(i);var n=e("ef50"),s=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a}}]);