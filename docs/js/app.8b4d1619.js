(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],p=0,v=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"115f":function(t,e,a){var n={"./ctx.png":"fab5","./la-math.png":"9db4","./sauer_lab.png":"a117","./wilkelab.png":"fa16"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="115f"},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{staticClass:"d-flex flex-column fill-height",staticStyle:{"min-width":"570px"}},[a("Header"),a("v-main",{attrs:{"fill-height":""}},[a("router-view")],1),a("Footer")],1)])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","pl-12":"","pt-5":""}},[a("v-row",{staticClass:"text-center",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pr-6 pb-2",attrs:{col:"7",sm:"8",md:"7"}},[a("div",{staticClass:"menu-bg"},[a("div",{staticClass:"py-1"},[a("v-btn",{staticClass:"main-menu",attrs:{"active-class":"main-menu-active",text:"",exact:"",to:"/"}},[t._v("Home")])],1),a("div",{staticClass:"py-1"},[a("v-btn",{staticClass:"main-menu",attrs:{text:"","active-class":"main-menu-active",exact:"",to:"/about"}},[t._v("About")])],1),a("div",{staticClass:"py-1"},[a("v-btn",{staticClass:"main-menu",attrs:{text:"","active-class":"main-menu-active",exact:"",to:"/projects"}},[t._v("Projects")])],1)])]),a("v-col",{attrs:{col:"5",sm:"4",md:"5"}},[a("div",{staticClass:"menu-arrow"},[a("div",{staticClass:"menu-arrow-text"},[t._v("menu")])])])],1)],1)},o=[],c={name:"Header",data(){return{}}},l=c,u=a("2877"),p=a("6544"),v=a.n(p),m=a("8336"),f=a("62ad"),d=a("a523"),h=a("0fd9"),b=Object(u["a"])(l,i,o,!1,null,"d86add0a",null),g=b.exports;v()(b,{VBtn:m["a"],VCol:f["a"],VContainer:d["a"],VRow:h["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"footer",attrs:{fluid:""}},[t._v("© Ivan Chernyshov, 2018-2020 - personal website")])},C=[],y={name:"Footer",data(){return{}}},_=y,w=Object(u["a"])(_,x,C,!1,null,"0e36e201",null),j=w.exports;v()(w,{VContainer:d["a"]});var V={name:"App",components:{Header:g,Footer:j},data:()=>({})},k=V,O=(a("034f"),a("7496")),S=a("f6c4"),P=Object(u["a"])(k,r,s,!1,null,null,null),E=P.exports;v()(P,{VApp:O["a"],VMain:S["a"]});var M=a("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"max-width":"1000px"},attrs:{"pt-0":"","px-8":""}},[n("v-row",[n("v-col",{staticClass:"text-left pb-6 pt-0",attrs:{cols:"12",sm:"12"}},[n("div",{staticClass:"text-center hello"},[t._v(" Hi! I'm Ivan "),n("br"),t._v("Welcome to my site! ")])]),n("v-col",{staticClass:"text-right pt-0",attrs:{cols:"12",sm:"11",md:"7","order-md":"3"}},[n("div",{staticClass:"skills-new"},[n("img",{staticClass:"home-img",attrs:{src:a("fbf5")}})])]),n("v-col",{staticClass:"pl-12 text-left",attrs:{cols:"12",sm:"11",md:"5"}},[n("div",{staticClass:"contacts-bg"},[t._v(" e-mail - "),n("br"),n("a",{attrs:{href:"mailto:"+t.e1+"@"+t.e2}},[t._v(t._s(t.e1+"@"+t.e2))])])])],1)],1)},H=[],$={name:"Home",data(){return{e1:"itsvanka",e2:"gmail.com"}}},A=$,I=Object(u["a"])(A,T,H,!1,null,"3c730264",null),L=I.exports;v()(I,{VCol:f["a"],VContainer:d["a"],VRow:h["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"max-width":"1500px"},attrs:{"pt-0":"","grid-list-xl":""}},[n("v-row",{attrs:{justify:"center"}},[t._l(t.items,(function(e,r){return[n("v-col",{key:r,staticClass:"pt-2",attrs:{cols:"12",sm:"10",md:"6",lg:"5",xl:"4"}},[n("v-row",[n("div",{staticClass:"site-wrap",style:"transform:rotate("+t.rotations[r%5]+"deg);"},[n("div",{staticClass:"site-outer"},[n("div",{staticClass:"site-inner",style:"background-image:url("+a("115f")("./"+e.pic)+");"})]),n("img",{staticClass:"image-frame",attrs:{src:a("e33d")}}),n("div",{staticClass:"site-link"},[n("div",[n("a",{attrs:{href:e.href,target:"blank"}},[n("v-icon",[t._v("mdi-open-in-new")]),t._v(" "+t._s(e.name)+" ")],1)])])])])],1)]}))],2)],1)},R=[],B={name:"Projects",data(){return{rotations:[1.5,-.5,-1.5,.5,-1,1],items:[{href:"https://wilkelab.org/",name:"The Wilke Lab at UT Austin",pic:"wilkelab.png"},{href:"http://structuralbiology.cns.utexas.edu",name:"Sauer Lab at UT Austin",pic:"sauer_lab.png"},{href:"http://ctxci.com",name:"CTX - distributor of composite reinforcement materials",pic:"ctx.png"},{href:"http://www.la-math.ru",name:"La-Math (a personal website)",pic:"la-math.png"}]}}},D=B,N=(a("a65f"),a("132d")),U=Object(u["a"])(D,F,R,!1,null,"32127037",null),J=U.exports;v()(U,{VCol:f["a"],VContainer:d["a"],VIcon:N["a"],VRow:h["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"max-width":"1500px"},attrs:{"pt-0":""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"pt-4",attrs:{cols:"12",sm:"11",md:"6",lg:"5",xl:"5"}},[n("div",{staticClass:"text-about pt-7"},[n("p",[t._v(" My name is Ivan Chernyshov. I am a full stack web developer based in Austin, TX. Experienced in building interactive components and responsive layouts. Creative abilities include graphic design. ")])]),n("br"),n("div",{staticClass:"text-skills"},[n("h1",[t._v("Technical skills:")]),n("p",[n("u",[t._v("Front-End:")]),t._v(" JavaScript (Vue.js+VueX, React+Redux, jQuery), HTML5, CSS3 (Vuetify, Bootstrap) ")]),n("p",[n("u",[t._v("Back-End:")]),t._v(" PHP, Node.js, GraphQL, Python ")]),n("p",[n("u",[t._v("Databases:")]),t._v(" MySQL, MongoDB, Firebase ")]),n("p",[n("u",[t._v("Version control:")]),t._v(" Git, SVN ")])])]),n("v-col",{attrs:{cols:"12",sm:"10",md:"5",lg:"4",xl:"3","pt-4":""}},[n("div",{staticClass:"myphoto-wrap"},[n("div",{staticClass:"myphoto-outer"},[n("div",{staticClass:"myphoto-inner"})]),n("img",{staticClass:"image-frame",attrs:{src:a("e33d")}}),n("div",{staticClass:"myphoto-link"},[n("div",[n("p",[t._v("Ivan Chernyshov")])])])])])],1)],1)},X=[],q={name:"About",data(){return{false1:!0,q:"qwerty",w:"mail.com",rotations:[1.5,-.5,-1.5,.5,-1,1],items:[1,2,3,4,5,6,7,8,9]}}},G=q,W=(a("c06c"),Object(u["a"])(G,Q,X,!1,null,"0d9aed8a",null)),z=W.exports;v()(W,{VCol:f["a"],VContainer:d["a"],VRow:h["a"]}),n["a"].use(M["a"]);const K=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:z},{path:"/projects",name:"projects",component:J}],Y=new M["a"]({mode:"history",base:"/",routes:K});var Z=Y,tt=a("f309");n["a"].use(tt["a"]);var et=new tt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Z,vuetify:et,render:function(t){return t(E)},created(){if(sessionStorage.redirect){const t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},"677e":function(t,e,a){},"85ec":function(t,e,a){},"9db4":function(t,e,a){t.exports=a.p+"img/la-math.31eab2d2.png"},a117:function(t,e,a){t.exports=a.p+"img/sauer_lab.9e8a2629.png"},a65f:function(t,e,a){"use strict";var n=a("c4d2"),r=a.n(n);r.a},c06c:function(t,e,a){"use strict";var n=a("677e"),r=a.n(n);r.a},c4d2:function(t,e,a){},e33d:function(t,e,a){t.exports=a.p+"img/frame.bcd001af.png"},fa16:function(t,e,a){t.exports=a.p+"img/wilkelab.f7005707.png"},fab5:function(t,e,a){t.exports=a.p+"img/ctx.6e7afce5.png"},fbf5:function(t,e,a){t.exports=a.p+"img/home.cebaaec4.png"}});
//# sourceMappingURL=app.8b4d1619.js.map