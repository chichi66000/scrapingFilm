(function(e){function t(t){for(var a,r,c=t[0],i=t[1],l=t[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,c=1;c<s.length;c++){var i=s[c];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},o=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app w-3/4"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),s("router-view")],1)},o=[],r={name:"App"},c=r,i=s("2877"),l=Object(i["a"])(c,n,o,!1,null,null,null),f=l.exports,d=s("8c4f"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("h1",{staticClass:"font-bold text-3xl mx-auto my-5 text-center"},[e._v("New Movies "),s("span",[e._v("Coming Soon in ")]),s("span",{staticClass:"text-red-400"},[e._v(e._s(e.month))])]),s("ComingSoon")],1)},j=[],b=s("5530"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"movies container mx-auto"},[s("div",{staticClass:"flex flex-col mx-auto sm:items-end py-5 px-1 sm:px-5 bg-gray-400 mx-auto"},[s("label",{staticClass:"px-1 sm:px-3 font-bold",attrs:{for:"select_date"}},[e._v("Select date")]),s("div",{staticClass:"flex flex-row px-1 sm:px-3 flex-wrap "},[s("button",{staticClass:"font-bold",attrs:{role:"button"},on:{click:function(t){return e.prev()}}},[e._v("Prev")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectDate,expression:"selectDate"}],staticClass:"select_date",attrs:{name:"selectDate"},on:{click:function(t){return e.showdate()},change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectDate=t.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:"default"}},[e._v(e._s(e.year)+" - "+e._s(e.month))]),e._l(e.dateArray,(function(t,a){return s("option",{key:t,domProps:{value:""+t,selected:"index==0"},on:{click:function(t){return e.chooseDate(a)}}},[e._v(e._s(t))])}))],2),s("button",{staticClass:"font-bold",on:{click:function(t){return e.next()}}},[e._v("Next")])])]),e._l(e.movies,(function(t,a){return s("div",{key:a},[s("div",{staticClass:"flex flex-col justify-evenly sm:flex-row border rounded-lg my-5 p-1 mx-1 sm:p-5  "},[s("div",{staticClass:"w-40 sm:w-72 p-1 mx-auto sm:mx-3"},[s("img",{staticClass:" mx-auto object-contain",attrs:{src:""+t.img,alt:"poster film"}})]),s("div",{staticClass:"flex flex-col p-1 sm:p-5 mx-auto flex-wrap w-full sm:w-3/4 md:1/2"},[s("h2",{staticClass:"font-bold text-lg text-red-400 mx-auto px-1 sm: px-5"},[e._v(e._s(t.title))]),s("div",{staticClass:"flex justify-between flex-wrap"},[t.time?s("time",{staticClass:"px-1 sm:px-3",attrs:{datetime:""+t.time}},[e._v(e._s(t.time))]):e._e(),e._l(t.genres,(function(t,a){return s("p",{key:"genre_"+a,staticClass:"font-bold px-1 sm:px-3"},[s("span",{staticClass:"px-1 sm:px-3"},[e._v(e._s(t))])])}))],2),s("p",{staticClass:"px-1 mx-auto"},[e._v(e._s(t.description))]),s("p",[s("span",{staticClass:"font-bold"},[e._v("Directeur:")]),e._v(" "+e._s(t.directeur))]),s("p",[s("span",{staticClass:"font-bold"},[e._v("Stars:")]),e._l(t.stars,(function(t,a){return s("span",{key:"star_"+a,staticClass:"px-1 sm:px-3 "},[e._v(e._s(t))])}))],2)])])])}))],2)},h=[],p=s("1da1"),v=(s("96cf"),s("bc3a")),x=s.n(v),y=x.a.create({baseURL:"/api",headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest"}}),g=y,_=s("c1df"),w=s.n(_),k={name:"ComingSoon",data:function(){return{month:"",year:"",nextyear:"",dateArray:[],movies:[],dateChoosen:"",selectDate:"default"}},created:function(){this.showdate(),this.chooseDate(0)},methods:{showdate:function(){var e=new Date;function t(e,t){var s=[],a=w()(e),n=w()(t);while(a<=n)s.push(w()(a).format("YYYY-MM")),a=w()(a).add(1,"months");return s}this.year=e.getFullYear(),this.month=e.getMonth()+1,console.log(this.month),this.nextyear=w()().add(12,"months").calendar(),this.dateArray=t(e,this.nextyear)},chooseDate:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.dateChoosen=t.dateArray[e],s.next=3,g.get("/films/".concat(t.dateChoosen)).then((function(e){t.movies=e.data.movies,t.$store.dispatch("chooseMonth",t.dateChoosen)}));case 3:case"end":return s.stop()}}),s)})))()},prev:function(){var e=w()(this.dateChoosen).subtract(1,"months").format("YYYY-MM");console.log("prev "+e);var t=this.dateArray.indexOf(e);t<0?alert("Please choose a valid month for Film Coming Soon"):(this.chooseDate(t),this.selectDate=this.dateArray[t],this.$store.dispatch("chooseMonth",this.selectDate))},next:function(){var e=w()(this.dateChoosen).add(1,"months").format("YYYY-MM"),t=this.dateArray.indexOf(e);t<0?alert("Please choose another month; there's no film yet"):(this.chooseDate(t),this.selectDate=this.dateArray[t],this.$store.dispatch("chooseMonth",this.selectDate))}}},C=k,z=Object(i["a"])(C,m,h,!1,null,"cc1351e2",null),O=z.exports,M=s("2f62"),D={name:"Home",components:{ComingSoon:O},computed:Object(b["a"])({},Object(M["b"])({month:function(e){return e.month}}))},S=D,Y=Object(i["a"])(S,u,j,!1,null,null,null),A=Y.exports;a["a"].use(d["a"]);var P=[{path:"/",name:"Home",component:A}],$=new d["a"]({mode:"history",base:"/",routes:P}),T=$;s("ac1f"),s("5319");a["a"].use(M["a"]);var E=new M["a"].Store({state:{month:(new Date).toISOString().substr(0,19).replace("T"," ")},mutations:{chooseMonth:function(e,t){e.month=t}},actions:{chooseMonth:function(e,t){e.commit("chooseMonth",t)}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:T,store:E,axios:x.a,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.b15f474a.js.map