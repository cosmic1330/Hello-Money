(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"24c9":function(e,t,r){},"52f0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Nav"),r("el-container",[r("el-main",[r("router-view")],1)],1),r("el-footer",[r("el-backtop")],1)],1)},o=[],s=(r("4160"),r("b0c0"),r("159b"),r("96cf"),r("1da1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Nav"}},[r("el-header",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.drawer=!0}}},[r("i",{staticClass:"el-icon-menu"})])],1),r("el-drawer",{attrs:{title:"",visible:e.drawer,"with-header":!0,size:"350px"},on:{"update:visible":function(t){e.drawer=t}}},[r("ul",[r("router-link",{attrs:{to:"/"}},[r("li",[e._v("選股")])]),r("router-link",{attrs:{to:"/self"}},[r("li",[e._v("我追蹤的股票")])]),r("router-link",{attrs:{to:"/check"}},[r("li",[e._v("資料檢查")])])],1),r("p",{attrs:{id:"databaseTime"}},[e._v("資料庫最後時間："+e._s(e.lastDate)),r("UpdateButton")],1)])],1)},i=[],u=(r("52f0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"updateDataButton"}},[r("el-button",{attrs:{plain:"",loading:e.disabled},on:{click:e.handleClick}},[e._v(" 更新 ")])],1)}),l=[],p=(r("d81d"),r("b64b"),r("ac1f"),r("5319"),r("f13e"),r("d3b7"),r("bc3a")),d=r.n(p),f=r("5c96"),h=r.n(f),m=r("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("main",[r("Tab")],1)])},_=[],v=(r("c0e2"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"PER"}},[n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"本益比選股",name:"first"}},[n("PER")],1),n("el-tab-pane",{attrs:{label:"法人買賣超選股",name:"second"}},[n("Corporations")],1),n("el-tab-pane",{attrs:{label:"交易量+技術選股",name:"third"}},[n("Skill")],1),n("el-tab-pane",{attrs:{label:"Chart",name:"fourth"}},[n("Chart3"),n("ChartGold")],1),n("el-tab-pane",{staticStyle:{"text-align":"center"},attrs:{label:"綜合",name:"fifth"}},[n("img",{attrs:{src:r("88a4")}})])],1)],1)}),g=[],w=(r("e0ee"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"PER"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.requirement,placement:"bottom-start"}},[r("el-badge",{attrs:{value:e.stock.length,type:"primary"}},[r("span",{attrs:{id:"filterResult"}},[e._v("塞選結果")])])],1),r("article",{staticClass:"area1"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.stock}},[r("el-table-column",{attrs:{prop:"code",label:"股票代號",width:"100"}}),r("el-table-column",{attrs:{prop:"name",label:"姓名"}}),r("el-table-column",{attrs:{prop:"PER",label:"本益比"}}),r("el-table-column",{attrs:{prop:"yield",label:"殖利率"}})],1)],1),r("el-divider")],1)}),k=[],y=(r("24c9"),{name:"Per",mounted:function(){this.getFilterPerData()},data:function(){return{requirement:""}},computed:{stock:function(){return this.$store.state.per}},methods:{getFilterPerData:function(){var e=this;ge().then((function(t){e.$store.commit("setPer",t.data.data),e.requirement=t.data.requirement})).catch((function(e){return console.log(e.response)}))}}}),S=y,x=r("2877"),I=Object(x["a"])(S,w,k,!1,null,null,null),P=I.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"corporations"}},[r("el-tooltip",{attrs:{effect:"dark",content:e.requirement,placement:"bottom-start"}},[r("el-badge",{attrs:{value:e.trust.length+e.foreign.length,type:"primary"}},[r("span",{attrs:{id:"filterResult"}},[e._v("塞選結果")])])],1),r("article",{staticClass:"area1"},[r("h2",[e._v("投信買超股票")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.trust}},[r("el-table-column",{attrs:{label:"股票代號",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterPchomeUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.code))])])]}}])}),r("el-table-column",{attrs:{label:"名稱",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterYahooUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.name))])])]}}])}),r("el-table-column",{attrs:{prop:"Ttoday",label:"投信今日買超"}}),r("el-table-column",{attrs:{prop:"Tyesterday",label:"投信昨日買超"}}),r("el-table-column",{attrs:{prop:"Ftoday",label:"外資今日買超"}}),r("el-table-column",{attrs:{prop:"Fyesterday",label:"外資昨日買超"}})],1)],1),r("article",{staticClass:"area1"},[r("h2",[e._v("外資買超股票")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.foreign}},[r("el-table-column",{attrs:{label:"股票代號",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterPchomeUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.code))])])]}}])}),r("el-table-column",{attrs:{label:"名稱",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterYahooUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.name))])])]}}])}),r("el-table-column",{attrs:{prop:"Ftoday",label:"外資今日買超"}}),r("el-table-column",{attrs:{prop:"Fyesterday",label:"外資昨日買超"}}),r("el-table-column",{attrs:{prop:"FdayBeforeYesterday",label:"外資前日買超"}}),r("el-table-column",{attrs:{prop:"Ttoday",label:"投信今日買超"}}),r("el-table-column",{attrs:{prop:"Tyesterday",label:"投信昨日買超"}})],1)],1),r("el-divider")],1)},D=[],R=(r("ca94"),{name:"Corporations",mounted:function(){this.getFilterPerData()},data:function(){return{requirement:"法人連續買超2日"}},computed:{trust:function(){return this.$store.state.trust},foreign:function(){return this.$store.state.foreign}},methods:{getFilterPerData:function(){var e=this;we().then((function(t){e.$store.commit("setForeign",t.data.foreign),e.$store.commit("setTrust",t.data.trust)})).catch((function(e){return console.log(e.response)}))},filterPchomeUrl:function(e){var t="https://pchome.megatime.com.tw/stock/sto0/ock1/sid"+e+".html";return t},filterYahooUrl:function(e){var t="https://tw.stock.yahoo.com/q/ta?s="+e;return t}}}),j=R,C=Object(x["a"])(j,O,D,!1,null,null,null),M=C.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"corporations"}},[r("article",{staticClass:"area1"},[r("h2",[e._v("確切的股票 (邁向上漲趨勢)")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.definite}},[r("el-table-column",{attrs:{type:"index",width:"50"}}),r("el-table-column",{attrs:{label:"股票代號",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterPchomeUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.code))])])]}}])}),r("el-table-column",{attrs:{label:"名稱",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterYahooUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.name))])])]}}])}),r("el-table-column",{attrs:{prop:"close_price",label:"收盤價",width:"100"}}),r("el-table-column",{attrs:{prop:"volume",label:"量",width:"100"}}),r("el-table-column",{attrs:{label:"三關價",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("上關: "+e._s(e.customsPrices(t.row,"UP")))]),r("p",[e._v("中關: "+e._s(e.customsPrices(t.row,"Mid")))]),r("p",[e._v("下關: "+e._s(e.customsPrices(t.row,"Down")))])]}}])}),r("el-table-column",{attrs:{label:"RSI",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("RSI6: "+e._s(t.row.rsi6))]),r("p",[e._v("RSI12: "+e._s(t.row.rsi12))])]}}])}),r("el-table-column",{attrs:{prop:"BIAS5",label:"乖離率",width:"100"}})],1)],1),r("article",{staticClass:"area1"},[r("h2",[e._v("谷底翻身 (上漲趨勢股)")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.bottom}},[r("el-table-column",{attrs:{label:"股票代號",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterPchomeUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.code))])])]}}])}),r("el-table-column",{attrs:{label:"名稱",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterYahooUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.name))])])]}}])}),r("el-table-column",{attrs:{prop:"volume",label:"量",width:"100"}}),r("el-table-column",{attrs:{label:"上漲訊息",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(t.row.msg[0]))]),r("p",[e._v(e._s(t.row.msg[1]))]),r("p",[e._v(e._s(t.row.msg[2]))])]}}])}),r("el-table-column",{attrs:{label:"三關價",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("上關: "+e._s(e.customsPrices(t.row,"UP")))]),r("p",[e._v("中關: "+e._s(e.customsPrices(t.row,"Mid")))]),r("p",[e._v("下關: "+e._s(e.customsPrices(t.row,"Down")))])]}}])}),r("el-table-column",{attrs:{label:"價",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("開盤價: "+e._s(t.row.open_price))]),r("p",[e._v("最高價: "+e._s(t.row.hight_price))]),r("p",[e._v("收盤價: "+e._s(t.row.close_price))]),r("p",[e._v("最低價: "+e._s(t.row.low_price))])]}}])}),r("el-table-column",{attrs:{prop:"BIAS5",label:"乖離率",width:"100"}})],1)],1),r("article",{staticClass:"area1"},[r("h2",[e._v("追蹤的股票")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.mylove}},[r("el-table-column",{attrs:{label:"股票代號",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterPchomeUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.code))])])]}}])}),r("el-table-column",{attrs:{label:"名稱",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[r("a",{attrs:{href:e.filterYahooUrl(t.row.code),target:"_blank"}},[e._v(e._s(t.row.name))])])]}}])}),r("el-table-column",{attrs:{prop:"volume",label:"量",width:"100"}}),r("el-table-column",{attrs:{label:"三關價",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("上關: "+e._s(e.customsPrices(t.row,"UP")))]),r("p",[e._v("中關: "+e._s(e.customsPrices(t.row,"Mid")))]),r("p",[e._v("下關: "+e._s(e.customsPrices(t.row,"Down")))])]}}])}),r("el-table-column",{attrs:{label:"價",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("開盤價: "+e._s(t.row.open_price))]),r("p",[e._v("最高價: "+e._s(t.row.hight_price))]),r("p",[e._v("收盤價: "+e._s(t.row.close_price))]),r("p",[e._v("最低價: "+e._s(t.row.low_price))])]}}])}),r("el-table-column",{attrs:{prop:"BIAS5",label:"乖離率",width:"100"}})],1)],1)])},A=[],U=(r("5915"),{name:"Corporations",mounted:function(){this.getStockData()},data:function(){return{requirement:"法人連續買超2日"}},computed:{definite:function(){var e=this.$store.state.stock,t=[];return Object.keys(e).forEach((function(r){e[r][0]["rsi6"]<e[r][0]["rsi12"]&&e[r][2]["rsi6"]>e[r][2]["rsi12"]&&e[r][1]["rsi12"]>50&&e[r][1]["rsi12"]<70&&e[r][2]["DIF"]>0&&e[r][2]["MACD"]>0&&e[r][2]["OSC"]>-.03&&e[r][0]["K9"]<e[r][0]["D9"]&&e[r][2]["K9"]>e[r][2]["D9"]&&e[r][2]["K9"]>30&&e[r][2]["K9"]<70&&e[r][2]["D9"]>30&&e[r][2]["D9"]<70&&e[r][2]["J"]>5&&e[r][2]["J"]<95&&e[r][2]["volume"]>1e3&&e[r][2]["close_price"]>e[r][2]["MA5"]&&t.push(e[r][2])})),t},mylove:function(){var e=this.$store.state.stock,t=[];return Object.keys(e).forEach((function(r){"2208"!==e[r][0]["stock_code"]&&"1710"!==e[r][0]["stock_code"]&&"2462"!==e[r][0]["stock_code"]||t.push(e[r][2])})),t},bottom:function(){var e=this.$store.state.stock,t=[];return Object.keys(e).forEach((function(r){var n=[];e[r][2]["volume"]>1e3&&e[r][0]["K9"]<e[r][0]["D9"]&&e[r][2]["K9"]>e[r][2]["D9"]&&e[r][0]["rsi6"]<e[r][0]["rsi12"]&&e[r][2]["rsi6"]>e[r][2]["rsi12"]&&n.push("RSI、KD黃金交叉"),e[r][2]["volume"]>1e3&&(parseInt(e[r][2]["close_price"])-parseInt(e[r][2]["open_price"]))/parseInt(e[r][2]["open_price"])*3<(parseInt(e[r][2]["open_price"])-parseInt(e[r][2]["low_price"]))/parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["close_price"])>=parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["open_price"])>parseInt(e[r][2]["low_price"])&&e[r][2]["close_price"]==e[r][2]["hight_price"]&&n.push("吊人線"),e[r][2]["volume"]>1e3&&(parseInt(e[r][2]["close_price"])-parseInt(e[r][2]["open_price"]))/parseInt(e[r][2]["open_price"])*2<(parseInt(e[r][2]["open_price"])-parseInt(e[r][2]["low_price"]))/parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["close_price"])>parseInt(e[r][2]["open_price"])&&parseInt(e[r][2]["open_price"])>parseInt(e[r][2]["low_price"])&&e[r][2]["close_price"]==e[r][2]["open_price"]&&n.push("下引十字線"),n.length>0&&(e[r][2]["msg"]=n,t.push(e[r][2]))})),t}},methods:{getStockData:function(){var e=this;Me().then((function(t){e.$store.commit("setStock",t.data)})).catch((function(e){return console.log(e.response)}))},customsPrices:function(e,t){var r=null;switch(t){case"UP":r=parseInt(e["low_price"])+1.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"Mid":r=.5*(parseInt(e["hight_price"])+parseInt(e["low_price"]));break;case"Down":r=parseInt(e["hight_price"])-1.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;default:break}return Math.round(100*r)/100},filterPchomeUrl:function(e){var t="https://pchome.megatime.com.tw/stock/sto0/ock1/sid"+e+".html";return t},filterYahooUrl:function(e){var t="https://tw.stock.yahoo.com/q/ta?s="+e;return t}}}),E=U,T=Object(x["a"])(E,$,A,!1,null,null,null),N=T.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"chart"}},[r("highcharts",{attrs:{options:e.chartOptions}})],1)},B=[],F=(r("fbe2"),{name:"Chart",mounted:function(){this.getData()},data:function(){return{stock:[],chartOptions:{chart:{type:"line"},title:{text:"三關價"},xAxis:{categories:[]},yAxis:{title:{text:"股價"}},series:[{name:"收盤價",data:[]},{name:"上關",data:[]},{name:"中關",data:[]},{name:"下關",data:[]}]}}},computed:{},methods:{getData:function(){var e=this;$e(3380).then((function(t){e.stock=t.data;var r=t.data.map((function(e){return parseInt(e.close_price)})),n=t.data.map((function(t){return e.customsPrices(t,"UP")})),a=t.data.map((function(t){return e.customsPrices(t,"Mid")})),o=t.data.map((function(t){return e.customsPrices(t,"Down")})),s=t.data.map((function(e){return e.date}));console.log(s),e.chartOptions.series[0].data=r,e.chartOptions.series[1].data=n,e.chartOptions.series[2].data=a,e.chartOptions.series[3].data=o,e.chartOptions.xAxis.categories=s})).catch((function(e){return console.log(e.response)}))},customsPrices:function(e,t){var r=null;switch(t){case"UP":r=parseInt(e["low_price"])+1.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"Mid":r=.5*(parseInt(e["hight_price"])+parseInt(e["low_price"]));break;case"Down":r=parseInt(e["hight_price"])-1.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;default:break}return Math.round(100*r)/100}}}),L=F,K=Object(x["a"])(L,q,B,!1,null,null,null),J=K.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"chart"}},[r("highcharts",{attrs:{options:e.chartOptions}})],1)},W=[],H=(r("8715"),{name:"Chart",mounted:function(){this.getData()},data:function(){return{chartOptions:{chart:{type:"line"},title:{text:"斐波納契樞軸點"},xAxis:{categories:[]},yAxis:{title:{text:"股價"}},series:[{name:"收盤價",data:[]},{name:"P",data:[]},{name:"R1",data:[]},{name:"R2",data:[]},{name:"R3",data:[]},{name:"S1",data:[]},{name:"S2",data:[]},{name:"S3",data:[]}]}}},computed:{},methods:{getData:function(){var e=this;$e(3380).then((function(t){var r=t.data.map((function(e){return parseInt(e.low_price)})),n=t.data.map((function(t){return e.customsPrices(t,"P")})),a=t.data.map((function(t){return e.customsPrices(t,"R1")})),o=t.data.map((function(t){return e.customsPrices(t,"R2")})),s=t.data.map((function(t){return e.customsPrices(t,"R3")})),c=t.data.map((function(t){return e.customsPrices(t,"S1")})),i=t.data.map((function(t){return e.customsPrices(t,"S2")})),u=t.data.map((function(t){return e.customsPrices(t,"S3")})),l=t.data.map((function(e){return e.date}));e.chartOptions.series[0].data=r,e.chartOptions.series[1].data=n,e.chartOptions.series[2].data=a,e.chartOptions.series[3].data=o,e.chartOptions.series[4].data=s,e.chartOptions.series[5].data=c,e.chartOptions.series[6].data=i,e.chartOptions.series[7].data=u,e.chartOptions.xAxis.categories=l})).catch((function(e){return console.log(e.response)}))},customsPrices:function(e,t){var r=null,n=(parseInt(e["low_price"])+parseInt(e["hight_price"])+parseInt(e["close_price"]))/3;switch(t){case"P":r=n;break;case"R1":r=n+.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"R2":r=n+.618*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"R3":r=n+1*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"S1":r=n-.382*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"S2":r=n-.618*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;case"S3":r=n-1*(parseInt(e["hight_price"])-parseInt(e["low_price"]));break;default:break}return Math.round(100*r)/100}}}),Q=H,G=Object(x["a"])(Q,Y,W,!1,null,null,null),X=G.exports,z={name:"Tab",props:[],mounted:function(){},data:function(){return{activeName:"fourth"}},components:{PER:P,Corporations:M,Skill:N,Chart3:J,ChartGold:X},computed:{},methods:{},watch:{}},V=z,Z=Object(x["a"])(V,v,g,!1,null,null,null),ee=Z.exports,te=r("d4ec"),re=r("bee2"),ne=r("ade3"),ae=function(){function e(){Object(te["a"])(this,e),Object(ne["a"])(this,"arr",[])}return Object(re["a"])(e,[{key:"getter",value:function(){}}]),e}(),oe={name:"Home",mounted:function(){var e=new ae;e.getter()},data:function(){return{}},components:{Tab:ee},computed:{},methods:{getData:function(e){var t="".concat("https://cors-anywhere.herokuapp.com/","https://tw.quote.finance.yahoo.net/quote/q?type=ta&perd=d&mkt=10&sym=2308&v=1&callback=jQuery111306382856220483186_1591513211276&_=1591513211278"),r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState==XMLHttpRequest.DONE)if(200==r.status){var t=r.responseText.replace("jQuery111306382856220483186_1591513211276(","");t=t.replace(");",""),t=JSON.parse(t),console.log(t)}else console.log(e)},r.open("get",t,!0),r.send(null)}},watch:{}},se=oe,ce=Object(x["a"])(se,b,_,!1,null,null,null),ie=ce.exports;n["default"].use(m["a"]);var ue=[{path:"/",name:"Home",component:ie},{path:"/:id",name:"Chart",component:ie}],le=new m["a"]({routes:ue,mode:"history",base:"/ui"}),pe=le,de=function(e){f["Message"].error(e)},fe=function(){pe.replace({name:"Check",query:{redirect:pe.currentRoute.fullPath}})},he=function(){pe.replace({name:"403"})},me=function(e,t){switch(e){case 400:de(t);break;case 401:de("登入過期,請重新登入"),setTimeout((function(){fe()}),1500);break;case 403:he();break;case 404:de(t);break;default:de("res沒有攔截到的錯誤"+t);break}},be=d.a.create({baseURL:"http://yangjuiyu.byethost12.com/StockAnalysis/index.php",headers:{"Content-Type":"application/x-www-form-urlencoded"}});d.a.create({baseURL:"https://cors-anywhere.herokuapp.com/"});be.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),be.interceptors.response.use((function(e){return e}),(function(e){var t=e.response;return t?(me(t.status,t.data),Promise.reject(e)):window.navigator.online?Promise.reject(e):void de("請檢察網路，連線後再重新刷新頁面")}));var _e=function(e){var t=e.method,r=e.url,n=e.data,a=void 0===n?null:n,o=e.options,s=void 0===o?null:o;return t=t.toLowerCase(),"post"==t?be.post(r,a,s):"get"==t?be.get(r,s):"delete"==t?be.delete(r,s):"put"==t?be.put(r,a,s):"patch"==t?be.patch(r,a,s):(console.error("未知的method"+t),!1)},ve=function(){return _e({method:"get",url:"/Date/getLastDate"})},ge=function(){return _e({method:"get",url:"/BWI/getCommon"})},we=function(){return _e({method:"get",url:"/Corporations/getCorporationsBuyTreeDays"})},ke=function(){return _e({method:"get",url:"/BWI/getAllStockCode"})},ye=function(e){return _e({method:"get",url:"/Single/curlSingleStockYahooPrice/"+e,options:{params:{type:"json"}}})},Se=function(e){return _e({method:"post",url:"/Single/saveYahooPrice",data:e})},xe=function(){return _e({method:"get",url:"/Date/save"})},Ie=function(){return _e({method:"get",url:"/BWI/getNewBWI"})},Pe=function(){return _e({method:"get",url:"/Corporations/getNewCorporations"})},Oe=function(){return _e({method:"get",url:"/MACD/forLoopMACD"})},De=function(){return _e({method:"get",url:"/KD/forLoopKD"})},Re=function(){return _e({method:"get",url:"/MA/forLoopMA"})},je=function(){return _e({method:"get",url:"/RSI/forLoopRSI"})},Ce=function(e,t){return _e({method:"get",url:"/Single/checkSingleStockInDBOfDate",options:{params:{code:e,date:t}}})},Me=function(){return _e({method:"get",url:"/Single/getWithinConditionsStock"})},$e=function(e){return _e({method:"get",url:"/Single/getOneMonthOfStock/"+e})},Ae={name:"UpdateButton",props:[],mounted:function(){},data:function(){return{disabled:!1,price:[]}},components:{},computed:{},methods:{isJSON:function(e){try{return JSON.parse(e)&&!!e}catch(t){return!1}},openInfo:function(e,t){this.$notify.info({title:e,message:t,position:"top-left"})},openSuccess:function(e,t){this.$notify({title:e,message:t,position:"top-left",type:"success"})},handleClick:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getTradingDate();case 3:return t.next=5,e.getPERData();case 5:return t.next=7,e.getCorporationsData();case 7:return t.next=9,e.getStockPrice();case 9:return t.next=11,e.openInfo("成功","更新完成");case 11:e.disabled=!1,t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),e.$notify.error({title:"更新失敗",message:t.t0,position:"top-left"}),e.disabled=!1;case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))()},getTradingDate:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,xe();case 2:r=t.sent,e.$store.commit("setLastDate",r.data.date),e.openSuccess("成功","更新最新交易日");case 5:case"end":return t.stop()}}),t)})))()},getPERData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ie();case 2:e.openSuccess("成功","更新最新本益比");case 3:case"end":return t.stop()}}),t)})))()},getCorporationsData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Pe();case 2:e.openSuccess("成功","更新最新三大法人買賣超");case 3:case"end":return t.stop()}}),t)})))()},getStockPrice:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,s,c,i,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.disabled=!0,t.prev=1,r={},n={},a=e.$store.state.codes,a=Object.keys(a),o=e.$store.state.lastDate,t.next=9,Ce(2330,o);case 9:return s=t.sent,t.next=12,Ce(8150,o);case 12:if(c=t.sent,!0!==s.data||!0!==c.data){t.next=17;break}return t.abrupt("return",!1);case 17:i=0;case 18:if(!(i<a.length)){t.next=58;break}return u=a[i],t.next=22,ye(u);case 22:if(l=t.sent,l=l.data.replace("jQuery111306382856220483186_1591513211276(","").replace(");",""),!e.isJSON(l)){t.next=55;break}if(l=JSON.parse(l).ta,l=l.map((function(e){var t={hight_price:e.h,low_price:e.l,open_price:e.o,close_price:e.c,volume:e.v,date:e.t};return t})),r[u]=l,n[u]=l,i!==Math.round(a.length/4)){t.next=34;break}e.savePrice(r),r={},t.next=55;break;case 34:if(i!==Math.round(a.length/4*2)){t.next=39;break}e.savePrice(r),r={},t.next=55;break;case 39:if(i!==Math.round(a.length/4*3)){t.next=44;break}e.savePrice(r),r={},t.next=55;break;case 44:if(i!==a.length-1){t.next=55;break}return t.next=47,e.savePrice(r);case 47:return t.next=49,e.saveMACD();case 49:return t.next=51,e.saveKD();case 51:return t.next=53,e.saveMA();case 53:return t.next=55,e.saveRSI();case 55:i++,t.next=18;break;case 58:e.openSuccess("成功","取得全部股價"),t.next=64;break;case 61:t.prev=61,t.t0=t["catch"](1),console.log(t.t0);case 64:case"end":return t.stop()}}),t,null,[[1,61]])})))()},savePrice:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="data=".concat(JSON.stringify(e)),t.next=3,Se(r).then((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},saveMACD:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Oe();case 2:e.openSuccess("成功","更新最新MACD");case 3:case"end":return t.stop()}}),t)})))()},saveKD:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,De();case 2:e.openSuccess("成功","更新最新KD");case 3:case"end":return t.stop()}}),t)})))()},saveMA:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Re();case 2:e.openSuccess("成功","更新最新MA");case 3:case"end":return t.stop()}}),t)})))()},saveRSI:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,je();case 2:e.openSuccess("成功","更新最新RSI");case 3:case"end":return t.stop()}}),t)})))()}},watch:{}},Ue=Ae,Ee=Object(x["a"])(Ue,u,l,!1,null,null,null),Te=Ee.exports,Ne={name:"Tab",props:[],mounted:function(){},data:function(){return{drawer:!1}},components:{UpdateButton:Te},computed:{lastDate:function(){return this.$store.state.lastDate}},methods:{},watch:{}},qe=Ne,Be=Object(x["a"])(qe,c,i,!1,null,null,null),Fe=Be.exports,Le={name:"App",mounted:function(){this.getData()},components:{Nav:Fe},data:function(){return{}},computed:{},methods:{getData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ve();case 3:return r=t.sent,t.next=6,ke();case 6:n=t.sent,a={},n.data.forEach((function(e){a[e.code]=e.name})),e.$store.commit("setCodes",a),e.$store.commit("setLastDate",r.data.date),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},Ke=Le,Je=(r("5c0b"),Object(x["a"])(Ke,a,o,!1,null,null,null)),Ye=Je.exports,We=r("2f62");n["default"].use(We["a"]);var He=new We["a"].Store({state:{codes:{},per:[],trust:[],foreign:[],stock:[],lastDate:"????-??-??"},getters:{},mutations:{setCodes:function(e,t){e.codes=t},setLastDate:function(e,t){e.lastDate=t},setPer:function(e,t){e.per=t},setTrust:function(e,t){e.trust=t},setForeign:function(e,t){e.foreign=t},setStock:function(e,t){e.stock=t}},actions:{},modules:{}}),Qe=r("4452"),Ge=r.n(Qe),Xe=(r("0fae"),r("9483"));Object(Xe["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].config.productionTip=!1,n["default"].use(h.a),n["default"].use(Ge.a),new n["default"]({router:pe,store:He,render:function(e){return e(Ye)}}).$mount("#app")},5915:function(e,t,r){},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},8715:function(e,t,r){},"88a4":function(e,t,r){e.exports=r.p+"img/li.32909a01.jpg"},"9c0c":function(e,t,r){},c0e2:function(e,t,r){},ca94:function(e,t,r){},e0ee:function(e,t,r){},f13e:function(e,t,r){},fbe2:function(e,t,r){}});
//# sourceMappingURL=app.55981cb3.js.map