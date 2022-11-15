(function(){"use strict";var e={1036:function(e,t,n){var o=n(9242),r=n(3396);const i={id:""},s={class:"flex flex-col sm:flex-row sm:justify-between text-right bg-gray-200 p-2 mx-2 my-2"};function a(e,t,n,o,a,l){const c=(0,r.up)("router-link"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",s,[(0,r.Wm)(c,{class:"p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(c,{class:"p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500",to:"/upcoming"},{default:(0,r.w5)((()=>[(0,r.Uk)("Upcoming")])),_:1}),(0,r.Wm)(c,{class:"p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500",to:"/toprated"},{default:(0,r.w5)((()=>[(0,r.Uk)("Top rated")])),_:1}),(0,r.Wm)(c,{class:"p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500",to:"/nowplaying"},{default:(0,r.w5)((()=>[(0,r.Uk)("Now playing")])),_:1})]),(0,r.Wm)(u)])}var l={name:"App"},c=n(89);const u=(0,c.Z)(l,[["render",a]]);var m=u,p=n(678);const g={class:"home"},f=(0,r._)("h1",{class:"text-4xl text-red-900 text-center mx-auto"},"Films à venir",-1);function v(e,t,n,o,i,s){const a=(0,r.up)("DisplayFilm");return(0,r.wg)(),(0,r.iD)("div",g,[f,(0,r.Wm)(a)])}var x=n(7139);const d={class:"mx-auto"},h={class:"w-50 sm:w-72 p-1 mx-auto sm:mx-3"},w=["src"],y={class:"flex flex-col p-1 sm:p-5 mx-auto flex-wrap w-full sm:w-3/4 md:1/2"},b={class:"font-bold text-lg text-red-400 mx-auto px-1 sm: px-5"},j={class:"flex justify-between flex-wrap"},k={class:"px-1 mx-auto"},D={class:"flex flex-row flex-wrap justify-evenly"};function _(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.movies,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.filmId,class:"flex flex-col justify-evenly sm:flex-row border rounded-lg my-5 p-1 mx-2 p-2 sm:p-5"},[(0,r._)("div",h,[(0,r._)("img",{src:`https://image.tmdb.org/t/p/w500${e.poster}`,class:"mx-auto object-contain"},null,8,w)]),(0,r._)("div",y,[(0,r._)("h2",b,(0,x.zw)(e.title),1),(0,r._)("div",j,(0,x.zw)(e.release_date),1),(0,r._)("p",k,(0,x.zw)(e.overview),1)])])))),128)),(0,r._)("div",D,[s.movies.length>0&&this.obj.page>1?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[0]||(t[0]=e=>s.prevPage()),class:"font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 w-32"},"Previous page")):(0,r.kq)("",!0),s.movies.length>0?((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:t[1]||(t[1]=e=>s.nextPage()),class:"font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 w-32"},"Next page")):((0,r.wg)(),(0,r.iD)("button",{key:2,onClick:t[2]||(t[2]=e=>s.prevPage()),class:"font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 w-32"},"Previous Page"))]),(0,r._)("div",null,"Page: "+(0,x.zw)(this.obj.page),1)])}var P={name:"DisplayFilm",data(){return{obj:{page:1,url:""}}},created(){var e=window.location.pathname;this.obj.url="/"==e?"/upcoming":e,this.$store.dispatch("getMovies",this.obj)},computed:{movies(){return this.$store.state.movies}},methods:{nextPage(){this.obj.page+=1,this.$store.dispatch("getMovies",this.obj)},prevPage(){this.obj.page>1?this.obj.page-=1:this.obj.page=1,this.$store.dispatch("getMovies",this.obj)}}};const F=(0,c.Z)(P,[["render",_]]);var O=F,W={name:"HomeView",components:{DisplayFilm:O}};const M=(0,c.Z)(W,[["render",v]]);var C=M;const T=(0,r._)("h1",{class:"text-4xl text-red-900 text-center mx-auto"},"Films du moment",-1);function U(e,t,n,o,i,s){const a=(0,r.up)("DisplayFilm");return(0,r.wg)(),(0,r.iD)("div",null,[T,(0,r.Wm)(a)])}var Z={name:"NowPlaying",components:{DisplayFilm:O}};const $=(0,c.Z)(Z,[["render",U]]);var H=$;const R=(0,r._)("h1",{class:"text-4xl text-red-900 text-center mx-auto"},"Films - Les mieux notés",-1);function z(e,t,n,o,i,s){const a=(0,r.up)("DisplayFilm");return(0,r.wg)(),(0,r.iD)("div",null,[R,(0,r.Wm)(a)])}var N={name:"TopRated",components:{DisplayFilm:O}};const q=(0,c.Z)(N,[["render",z]]);var L=q;const A=(0,r._)("h1",{class:"text-4xl text-red-900 text-center mx-auto"},"Film à venir",-1);function V(e,t,n,o,i,s){const a=(0,r.up)("DisplayFilm");return(0,r.wg)(),(0,r.iD)("div",null,[A,(0,r.Wm)(a)])}var X={name:"ComingSoon",components:{DisplayFilm:O}};const E=(0,c.Z)(X,[["render",V]]);var I=E;const K=[{path:"/",name:"HomeView",component:C},{path:"/toprated",name:"TopRated",component:L},{path:"/nowplaying",name:"NowPlaying",component:H},{path:"/upcoming",name:"Upcoming",component:I}],S=(0,p.p7)({history:(0,p.PO)(),routes:K});var Y=S,B=(n(7658),n(65)),G=n(70);const J=G.ZP.create({baseURL:"https://scrapingfilm-production.up.railway.app/api",headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});var Q=J,ee=(0,B.MT)({state:{movies:[]},mutations:{getMovies(e,t){e.movies=t}},actions:{getMovies(e,t){Q.get(`/films${t.url}/page=${t.page}`).then((t=>{let n=[],o=t.data;for(let e=0;e<o.length;e++)""!==o[e].title&&n.push(o[e]);e.commit("getMovies",n)})).catch((e=>{console.log(e)}))}}});(0,o.ri)(m).use(Y).use(ee).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunknewfrontend"]=self["webpackChunknewfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1036)}));o=n.O(o)})();
//# sourceMappingURL=app.fdb167f4.js.map