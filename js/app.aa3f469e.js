(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b6ebe":"8647cfbf"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"24c9":function(e,t,r){},"52f0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Nav"),r("el-container",[r("el-main",[r("router-view")],1)],1),r("el-footer",[r("el-backtop")],1)],1)},o=[],s=(r("4160"),r("b0c0"),r("159b"),r("96cf"),r("1da1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Nav"}},[r("el-header",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.drawer=!0}}},[r("i",{staticClass:"el-icon-menu"})])],1),r("el-drawer",{attrs:{title:"",visible:e.drawer,"with-header":!0,size:"350px"},on:{"update:visible":function(t){e.drawer=t}}},[r("ul",[r("router-link",{attrs:{to:"/"}},[r("li",[e._v("選股")])]),r("router-link",{attrs:{to:"/self"}},[r("li",[e._v("我追蹤的股票")])]),r("router-link",{attrs:{to:"/check"}},[r("li",[e._v("資料檢查")])])],1),r("p",{attrs:{id:"databaseTime"}},[e._v("資料庫最後時間："+e._s(e.lastDate)),r("UpdateButton")],1)])],1)},i=[],u=(r("52f0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"updateDataButton"}},[r("el-button",{attrs:{plain:"",loading:e.disabled},on:{click:e.handleClick}},[e._v(" 更新 ")])],1)}),l=[],p=(r("d81d"),r("b64b"),r("ac1f"),r("5319"),r("f13e"),r("d3b7"),r("bc3a")),f=r.n(p),d=r("5c96"),m=r.n(d),h=r("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("main",[r("Tab")],1)])},v=[],g=(r("c0e2"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"PER"}},[n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"本益比選股",name:"first"}},[n("PER")],1),n("el-tab-pane",{attrs:{label:"法人買賣超選股",name:"second"}},[n("Corporations")],1),n("el-tab-pane",{attrs:{label:"交易量+技術選股",name:"third"}},[n("Skill")],1),n("el-tab-pane",{staticStyle:{"text-align":"center"},attrs:{label:"綜合",name:"fourth"}},[n("img",{attrs:{src:r("88a4")}})])],1)],1)}),w=[],_=(r("e0ee"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"PER"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.requirement,placement:"bottom-start"}},[r("el-badge",{attrs:{value:e.stock.length,type:"primary"}},[r("span",{attrs:{id:"filterResult"}},[e._v("塞選結果")])])],1),r("article",{staticClass:"area1"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.stock}},[r("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),r("el-table-column",{attrs:{prop:"name",label:"姓名"}}),r("el-table-column",{attrs:{prop:"PER",label:"本益比"}}),r("el-table-column",{attrs:{prop:"yield",label:"殖利率"}})],1)],1),r("el-divider")],1)}),k=[],y=(r("24c9"),{name:"Per",mounted:function(){this.getFilterPerData()},data:function(){return{requirement:""}},computed:{stock:function(){return this.$store.state.per}},methods:{getFilterPerData:function(){var e=this;ce().then((function(t){e.$store.commit("setPer",t.data.data),e.requirement=t.data.requirement})).catch((function(e){return console.log(e.response)}))}}}),x=y,D=r("2877"),S=Object(D["a"])(x,_,k,!1,null,null,null),P=S.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"corporations"}},[r("el-tooltip",{attrs:{effect:"dark",content:e.requirement,placement:"bottom-start"}},[r("el-badge",{attrs:{value:e.trust.length+e.foreign.length,type:"primary"}},[r("span",{attrs:{id:"filterResult"}},[e._v("塞選結果")])])],1),r("article",{staticClass:"area1"},[r("h2",[e._v("投信買超股票")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.trust}},[r("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),r("el-table-column",{attrs:{prop:"Ttoday",label:"投信今日買超"}}),r("el-table-column",{attrs:{prop:"Tyesterday",label:"投信昨日買超"}}),r("el-table-column",{attrs:{prop:"Ftoday",label:"外資今日買超"}}),r("el-table-column",{attrs:{prop:"Fyesterday",label:"外資昨日買超"}})],1)],1),r("article",{staticClass:"area1"},[r("h2",[e._v("外資買超股票")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.foreign}},[r("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),r("el-table-column",{attrs:{prop:"Ftoday",label:"外資今日買超"}}),r("el-table-column",{attrs:{prop:"Fyesterday",label:"外資昨日買超"}}),r("el-table-column",{attrs:{prop:"FdayBeforeYesterday",label:"外資前日買超"}}),r("el-table-column",{attrs:{prop:"Ttoday",label:"投信今日買超"}}),r("el-table-column",{attrs:{prop:"Tyesterday",label:"投信昨日買超"}})],1)],1),r("el-divider")],1)},O=[],C=(r("ca94"),{name:"Corporations",mounted:function(){this.getFilterPerData()},data:function(){return{requirement:"法人連續買超2日"}},computed:{trust:function(){return this.$store.state.trust},foreign:function(){return this.$store.state.foreign}},methods:{getFilterPerData:function(){var e=this;ie().then((function(t){e.$store.commit("setForeign",t.data.foreign),e.$store.commit("setTrust",t.data.trust)})).catch((function(e){return console.log(e.response)}))}}}),I=C,M=Object(D["a"])(I,j,O,!1,null,null,null),R=M.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"corporations"}},[r("article",{staticClass:"area1"},[r("h2",[e._v("確切的股票 (邁向上漲趨勢)")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.definite}},[r("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),r("el-table-column",{attrs:{prop:"close_price",label:"收盤價",width:"100"}}),r("el-table-column",{attrs:{prop:"volume",label:"量",width:"100"}}),r("el-table-column",{attrs:{label:"三關價"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("上關: "+e._s(e.customsPrices(t.row,"UP")))]),r("p",[e._v("中關: "+e._s(e.customsPrices(t.row,"Mid")))]),r("p",[e._v("下關: "+e._s(e.customsPrices(t.row,"Down")))])]}}])}),r("el-table-column",{attrs:{prop:"BIAS5",label:"乖離率",width:"100"}})],1)],1),r("article",{staticClass:"area1"},[r("h2",[e._v("參考指標的股票 (上漲趨勢股)")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.reference}},[r("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),r("el-table-column",{attrs:{prop:"close_price",label:"收盤價",width:"100"}}),r("el-table-column",{attrs:{label:"上漲訊息"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(t.row.msg[0]))]),r("p",[e._v(e._s(t.row.msg[1]))]),r("p",[e._v(e._s(t.row.msg[2]))])]}}])}),r("el-table-column",{attrs:{label:"三關價"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("上關: "+e._s(e.customsPrices(t.row,"UP")))]),r("p",[e._v("中關: "+e._s(e.customsPrices(t.row,"Mid")))]),r("p",[e._v("下關: "+e._s(e.customsPrices(t.row,"Down")))])]}}])})],1)],1),r("article",{staticClass:"area1"},[r("h2",[e._v("谷底翻身 (上漲趨勢股)")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.bottom}},[r("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),r("el-table-column",{attrs:{prop:"close_price",label:"收盤價",width:"100"}}),r("el-table-column",{attrs:{label:"上漲訊息"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(t.row.msg[0]))]),r("p",[e._v(e._s(t.row.msg[1]))]),r("p",[e._v(e._s(t.row.msg[2]))])]}}])}),r("el-table-column",{attrs:{label:"三關價"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("上關: "+e._s(e.customsPrices(t.row,"UP")))]),r("p",[e._v("中關: "+e._s(e.customsPrices(t.row,"Mid")))]),r("p",[e._v("下關: "+e._s(e.customsPrices(t.row,"Down")))])]}}])})],1)],1)])},A=[],E=(r("5915"),{name:"Corporations",mounted:function(){this.getStockData()},data:function(){return{requirement:"法人連續買超2日"}},computed:{definite:function(){var e=this.$store.state.stock,t=[];return Object.keys(e).forEach((function(r){e[r][0]["DIF"]<e[r][0]["MACD"]&&e[r][2]["DIF"]>e[r][2]["MACD"]&&e[r][2]["DIF"]>0&&e[r][2]["MACD"]>0&&e[r][0]["K9"]<e[r][0]["D9"]&&e[r][2]["K9"]>e[r][2]["D9"]&&e[r][2]["K9"]>30&&e[r][2]["K9"]<70&&e[r][2]["D9"]>30&&e[r][2]["D9"]<70&&e[r][2]["J"]>5&&e[r][2]["J"]<95&&e[r][2]["volume"]>1e3&&e[r][2]["close_price"]>e[r][2]["MA5"]&&t.push(e[r][2])})),t},reference:function(){var e=this.$store.state.stock,t=[];return Object.keys(e).forEach((function(r){var n=[];e[r][0]["K9"]<e[r][0]["D9"]&&e[r][2]["K9"]>e[r][2]["D9"]&&n.push("KD黃叉"),e[r][2]["OSC"]>0&&e[r][0]["OSC"]<0&&n.push("MACD轉正"),e[r][2]["volume"]>1e3&&e[r][0]["close_price"]<e[r][0]["MA5"]&&e[r][2]["close_price"]>e[r][2]["MA5"]&&n.push("站上MA5"),n.length>2&&(e[r][2]["msg"]=n,t.push(e[r][2]))})),t},bottom:function(){var e=this.$store.state.stock,t=[];return Object.keys(e).forEach((function(r){var n=[];e[r][0]["K9"]<e[r][2]["K9"]&&Math.abs(parseInt(e[r][2]["D9"])-parseInt(e[r][1]["D9"]))<Math.abs(parseInt(e[r][1]["D9"])-parseInt(e[r][0]["D9"]))&&n.push("KD持續增加"),e[r][2]["volume"]>1e3&&(parseInt(e[r][2]["close_price"])-parseInt(e[r][2]["open_price"]))/parseInt(e[r][2]["open_price"])*2<(parseInt(e[r][2]["open_price"])-parseInt(e[r][2]["low_price"]))/parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["close_price"])>=parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["open_price"])>=parseInt(e[r][2]["low_price"])&&e[r][2]["close_price"]==e[r][2]["hight_price"]&&n.push("吊人線"),e[r][2]["volume"]>1e3&&(parseInt(e[r][2]["close_price"])-parseInt(e[r][2]["open_price"]))/parseInt(e[r][2]["open_price"])*2<(parseInt(e[r][2]["open_price"])-parseInt(e[r][2]["low_price"]))/parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["close_price"])>=parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["open_price"])>=parseInt(e[r][2]["low_price"])&&e[r][2]["close_price"]==e[r][2]["open_price"]&&n.push("下引十字線"),n.length>1&&(e[r][2]["msg"]=n,t.push(e[r][2]))})),t}},methods:{getStockData:function(){var e=this;we().then((function(t){e.$store.commit("setStock",t.data)})).catch((function(e){return console.log(e.response)}))},customsPrices:function(e,t){var r=null;switch(t){case"UP":r=parseInt(e["low_price"])+1.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"Mid":r=.5*(parseInt(e["hight_price"])+parseInt(e["low_price"]));break;case"Down":r=parseInt(e["hight_price"])-1.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;default:break}return Math.round(100*r)/100}}}),T=E,N=Object(D["a"])(T,$,A,!1,null,null,null),q=N.exports,F={name:"Tab",props:[],mounted:function(){},data:function(){return{activeName:"third"}},components:{PER:P,Corporations:R,Skill:q},computed:{},methods:{},watch:{}},K=F,B=Object(D["a"])(K,g,w,!1,null,null,null),L=B.exports,J=r("d4ec"),U=r("bee2"),W=r("ade3"),H=function(){function e(){Object(J["a"])(this,e),Object(W["a"])(this,"arr",[])}return Object(U["a"])(e,[{key:"getter",value:function(){}}]),e}(),Q={name:"Home",mounted:function(){var e=new H;e.getter()},data:function(){return{}},components:{Tab:L},computed:{},methods:{getData:function(e){var t="".concat("https://cors-anywhere.herokuapp.com/","https://tw.quote.finance.yahoo.net/quote/q?type=ta&perd=d&mkt=10&sym=2308&v=1&callback=jQuery111306382856220483186_1591513211276&_=1591513211278"),r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState==XMLHttpRequest.DONE)if(200==r.status){var t=r.responseText.replace("jQuery111306382856220483186_1591513211276(","");t=t.replace(");",""),t=JSON.parse(t),console.log(t)}else console.log(e)},r.open("get",t,!0),r.send(null)}},watch:{}},Y=Q,X=Object(D["a"])(Y,b,v,!1,null,null,null),z=X.exports;n["default"].use(h["a"]);var G=[{path:"/",name:"Home",component:z},{path:"/self",name:"Self",component:function(){return r.e("chunk-2d0b6ebe").then(r.bind(null,"1ee9"))}},{path:"/check",name:"Check",component:z}],V=new h["a"]({routes:G,mode:"history",base:"/ui"}),Z=V,ee=function(e){d["Message"].error(e)},te=function(){Z.replace({name:"Check",query:{redirect:Z.currentRoute.fullPath}})},re=function(){Z.replace({name:"403"})},ne=function(e,t){switch(e){case 400:ee(t);break;case 401:ee("登入過期,請重新登入"),setTimeout((function(){te()}),1500);break;case 403:re();break;case 404:ee(t);break;default:ee("res沒有攔截到的錯誤"+t);break}},ae=f.a.create({baseURL:"http://yangjuiyu.byethost12.com/StockAnalysis/index.php",headers:{"Content-Type":"application/x-www-form-urlencoded"}});f.a.create({baseURL:"https://cors-anywhere.herokuapp.com/"});ae.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),ae.interceptors.response.use((function(e){return e}),(function(e){var t=e.response;return t?(ne(t.status,t.data),Promise.reject(e)):window.navigator.online?Promise.reject(e):void ee("請檢察網路，連線後再重新刷新頁面")}));var oe=function(e){var t=e.method,r=e.url,n=e.data,a=void 0===n?null:n,o=e.options,s=void 0===o?null:o;return t=t.toLowerCase(),"post"==t?ae.post(r,a,s):"get"==t?ae.get(r,s):"delete"==t?ae.delete(r,s):"put"==t?ae.put(r,a,s):"patch"==t?ae.patch(r,a,s):(console.error("未知的method"+t),!1)},se=function(){return oe({method:"get",url:"/Date/getLastDate"})},ce=function(){return oe({method:"get",url:"/BWI/getCommon"})},ie=function(){return oe({method:"get",url:"/Corporations/getCorporationsBuyTreeDays"})},ue=function(){return oe({method:"get",url:"/BWI/getAllStockCode"})},le=function(e){return oe({method:"get",url:"/Single/curlSingleStockYahooPrice/"+e,options:{params:{type:"json"}}})},pe=function(e){return oe({method:"post",url:"/Single/saveYahooPrice",data:e})},fe=function(){return oe({method:"get",url:"/Date/save"})},de=function(){return oe({method:"get",url:"/BWI/getNewBWI"})},me=function(){return oe({method:"get",url:"/Corporations/getNewCorporations"})},he=function(){return oe({method:"get",url:"/MACD/forLoopMACD"})},be=function(){return oe({method:"get",url:"/KD/forLoopKD"})},ve=function(){return oe({method:"get",url:"/MA/forLoopMA"})},ge=function(e,t){return oe({method:"get",url:"/Single/checkSingleStockInDBOfDate",options:{params:{code:e,date:t}}})},we=function(){return oe({method:"get",url:"/Single/getWithinConditionsStock"})},_e={name:"UpdateButton",props:[],mounted:function(){},data:function(){return{disabled:!1,price:[]}},components:{},computed:{},methods:{isJSON:function(e){try{return JSON.parse(e)&&!!e}catch(t){return!1}},openInfo:function(e,t){this.$notify.info({title:e,message:t,position:"top-left"})},openSuccess:function(e,t){this.$notify({title:e,message:t,position:"top-left",type:"success"})},handleClick:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getTradingDate();case 3:return t.next=5,e.getPERData();case 5:return t.next=7,e.getCorporationsData();case 7:return t.next=9,e.getStockPrice();case 9:e.openInfo("成功","更新完成"),e.disabled=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](0),e.$notify.error({title:"更新失敗",message:t.t0,position:"top-left"}),e.disabled=!1;case 17:case"end":return t.stop()}}),t,null,[[0,13]])})))()},getTradingDate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fe();case 2:e.openSuccess("成功","更新最新交易日");case 3:case"end":return t.stop()}}),t)})))()},getPERData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,de();case 2:e.openSuccess("成功","更新最新本益比");case 3:case"end":return t.stop()}}),t)})))()},getCorporationsData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,me();case 2:e.openSuccess("成功","更新最新三大法人買賣超");case 3:case"end":return t.stop()}}),t)})))()},getStockPrice:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,s,c,i,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.disabled=!0,t.prev=1,r={},n={},a=e.$store.state.codes,a=Object.keys(a),o=e.$store.state.lastDate,t.next=9,ge(2330,o);case 9:return s=t.sent,t.next=12,ge(2308,o);case 12:if(c=t.sent,!0!==s.data||!0!==c.data){t.next=17;break}return t.abrupt("return",!1);case 17:i=0;case 18:if(!(i<a.length)){t.next=56;break}return u=a[i],t.next=22,le(u);case 22:if(l=t.sent,l=l.data.replace("jQuery111306382856220483186_1591513211276(","").replace(");",""),!e.isJSON(l)){t.next=53;break}if(l=JSON.parse(l).ta,l=l.map((function(e){var t={hight_price:e.h,low_price:e.l,open_price:e.o,close_price:e.c,volume:e.v,date:e.t};return t})),r[u]=l,n[u]=l,i!==Math.round(a.length/4)){t.next=34;break}e.savePrice(r),r={},t.next=53;break;case 34:if(i!==Math.round(a.length/4*2)){t.next=39;break}e.savePrice(r),r={},t.next=53;break;case 39:if(i!==Math.round(a.length/4*3)){t.next=44;break}e.savePrice(r),r={},t.next=53;break;case 44:if(i!==a.length-1){t.next=53;break}return t.next=47,e.savePrice(r);case 47:return t.next=49,e.saveMACD();case 49:return t.next=51,e.saveKD();case 51:return t.next=53,e.saveMA();case 53:i++,t.next=18;break;case 56:e.openSuccess("成功","取得全部股價"),t.next=62;break;case 59:t.prev=59,t.t0=t["catch"](1),console.log(t.t0);case 62:case"end":return t.stop()}}),t,null,[[1,59]])})))()},savePrice:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="data=".concat(JSON.stringify(e)),t.next=3,pe(r).then((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},saveMACD:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,he();case 2:e.openSuccess("成功","更新最新MACD");case 3:case"end":return t.stop()}}),t)})))()},saveKD:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be();case 2:e.openSuccess("成功","更新最新KD");case 3:case"end":return t.stop()}}),t)})))()},saveMA:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ve();case 2:e.openSuccess("成功","更新最新MA");case 3:case"end":return t.stop()}}),t)})))()}},watch:{}},ke=_e,ye=Object(D["a"])(ke,u,l,!1,null,null,null),xe=ye.exports,De={name:"Tab",props:[],mounted:function(){},data:function(){return{drawer:!1}},components:{UpdateButton:xe},computed:{lastDate:function(){return this.$store.state.lastDate}},methods:{},watch:{}},Se=De,Pe=Object(D["a"])(Se,c,i,!1,null,null,null),je=Pe.exports,Oe={name:"App",mounted:function(){this.getData()},components:{Nav:je},data:function(){return{}},computed:{},methods:{getData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,se();case 3:return r=t.sent,t.next=6,ue();case 6:n=t.sent,a={},n.data.forEach((function(e){a[e.code]=e.name})),e.$store.commit("setCodes",a),e.$store.commit("setLastDate",r.data.date),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},Ce=Oe,Ie=(r("5c0b"),Object(D["a"])(Ce,a,o,!1,null,null,null)),Me=Ie.exports,Re=r("2f62");n["default"].use(Re["a"]);var $e=new Re["a"].Store({state:{codes:{},per:[],trust:[],foreign:[],stock:[],lastDate:"????-??-??"},getters:{},mutations:{setCodes:function(e,t){e.codes=t},setLastDate:function(e,t){e.lastDate=t},setPer:function(e,t){e.per=t},setTrust:function(e,t){e.trust=t},setForeign:function(e,t){e.foreign=t},setStock:function(e,t){e.stock=t}},actions:{},modules:{}}),Ae=(r("0fae"),r("9483"));Object(Ae["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].config.productionTip=!1,n["default"].use(m.a),new n["default"]({router:Z,store:$e,render:function(e){return e(Me)}}).$mount("#app")},5915:function(e,t,r){},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"88a4":function(e,t,r){e.exports=r.p+"img/li.32909a01.jpg"},"9c0c":function(e,t,r){},c0e2:function(e,t,r){},ca94:function(e,t,r){},e0ee:function(e,t,r){},f13e:function(e,t,r){}});
//# sourceMappingURL=app.aa3f469e.js.map