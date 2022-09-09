(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(26),o=t.n(r),a=t(15),s=t(49),l=t(7),d=t(6),j=t(17),h=t(8),b=t(27),p="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(p,"/coins")).then((function(n){return n.json()}))}var x,O,f,g,m,v,y,k=t(1),w=d.c.div(x||(x=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),C=d.c.header(O||(O=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),_=d.c.ul(f||(f=Object(l.a)([""]))),q=d.c.li(g||(g=Object(l.a)(["\n  background-color: grey;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),S=d.c.h1(m||(m=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),I=d.c.span(v||(v=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),L=d.c.img(y||(y=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var D=function(){var n=Object(a.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(k.jsxs)(w,{children:[Object(k.jsx)(b.a,{children:Object(k.jsx)("title",{children:"\ucf54\uc778"})}),Object(k.jsx)(C,{children:Object(k.jsx)(S,{children:"\ucf54\uc778"})}),e?Object(k.jsx)(I,{children:"Loading..."}):Object(k.jsx)(_,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(k.jsx)(q,{children:Object(k.jsxs)(j.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(k.jsx)(L,{src:"https://coinicons-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},U=t(47),z=t.n(U);var Q,P,F=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){return fetch("https://ohlcv-api.nomadcoders.workers.dev/?coinId=".concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data;return Object(k.jsx)("div",{children:c?"Loading chart...":Object(k.jsx)(z.a,{type:"candlestick",series:[{data:null===i||void 0===i?void 0:i.map((function(n){return[n.time_close,n.open,n.high,n.low,n.close]}))}],options:{chart:{type:"candlestick",height:350,width:500,toolbar:{show:!1},background:"transparent"},stroke:{curve:"smooth",width:2},yaxis:{show:!1},xaxis:{type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close})),labels:{style:{colors:"#9c88ff"}}},plotOptions:{candlestick:{colors:{upward:"#3C90EB",downward:"#DF7D46"}}}}})})},M=d.c.div(Q||(Q=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: grey;\n  border-radius: 15px;\n"]))),A=d.c.div(P||(P=Object(l.a)(["\n  background-color: lightgrey;\n  width: 90%;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  border-radius: 10px;\n"])));var T,B,E,H,J,R,$,G,K,N,V=function(n){var e=n.price;return console.log(e),Object(k.jsxs)(M,{children:[Object(k.jsx)(A,{children:Object(k.jsxs)("h1",{children:["1\uc2dc\uac04\uc804: ",e.quotes.USD.percent_change_1h," %"]})}),Object(k.jsx)(A,{children:Object(k.jsxs)("h1",{children:["6\uc2dc\uac04\uc804: ",e.quotes.USD.percent_change_6h," %"]})}),Object(k.jsx)(A,{children:Object(k.jsxs)("h1",{children:["12\uc2dc\uac04\uc804: ",e.quotes.USD.percent_change_12h," %"]})}),Object(k.jsx)(A,{children:Object(k.jsxs)("h1",{children:["1\uc77c\uc804: ",e.quotes.USD.percent_change_24h," %"]})}),Object(k.jsx)(A,{children:Object(k.jsxs)("h1",{children:["7\uc77c\uc804: ",e.quotes.USD.percent_change_7d," %"]})}),Object(k.jsx)(A,{children:Object(k.jsxs)("h1",{children:["30\uc77c\uc804: ",e.quotes.USD.percent_change_30d," %"]})}),Object(k.jsx)(A,{children:Object(k.jsxs)("h1",{children:["1\ub144\uc804: ",e.quotes.USD.percent_change_1y," %"]})})]})},W=d.c.h1(T||(T=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),X=d.c.span(B||(B=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),Y=d.c.div(E||(E=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),Z=d.c.header(H||(H=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),nn=d.c.div(J||(J=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),en=d.c.div(R||(R=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),tn=d.c.p($||($=Object(l.a)(["\n  margin: 20px 0px;\n"]))),cn=d.c.div(G||(G=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),rn=d.c.span(K||(K=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),on=d.c.div(N||(N=Object(l.a)(["\n  color: ",";\n  font-size: 30px;\n  position: absolute;\n  left: 150px;\n"])),(function(n){return n.theme.textColor}));var an,sn=function(){var n=Object(h.g)().coinId,e=Object(h.f)().state,t=Object(h.h)("/:coinId/price"),c=Object(h.h)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(p,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["price",n],(function(){return function(n){return fetch("".concat(p,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)})),l=s.isLoading,d=s.data,u=r||l;return Object(k.jsxs)(Y,{children:[Object(k.jsx)(b.a,{children:Object(k.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(k.jsxs)(Z,{children:[Object(k.jsx)(on,{children:Object(k.jsx)(j.b,{to:"/",children:Object(k.jsx)("span",{children:"\u2190 "})})}),Object(k.jsx)(W,{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})]}),u?Object(k.jsx)(X,{children:"Loading..."}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(nn,{children:[Object(k.jsxs)(en,{children:[Object(k.jsx)("span",{children:"Rank:"}),Object(k.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(k.jsxs)(en,{children:[Object(k.jsx)("span",{children:"Symbol:"}),Object(k.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(k.jsxs)(en,{children:[Object(k.jsx)("span",{children:"Price:"}),Object(k.jsxs)("span",{children:["$",null===d||void 0===d?void 0:d.quotes.USD.price.toFixed(3)]})]})]}),Object(k.jsx)(tn,{children:null===o||void 0===o?void 0:o.description}),Object(k.jsxs)(nn,{children:[Object(k.jsxs)(en,{children:[Object(k.jsx)("span",{children:"Total Suply:"}),Object(k.jsx)("span",{children:null===d||void 0===d?void 0:d.total_supply})]}),Object(k.jsxs)(en,{children:[Object(k.jsx)("span",{children:"Max Supply:"}),Object(k.jsx)("span",{children:null===d||void 0===d?void 0:d.max_supply})]})]}),Object(k.jsxs)(cn,{children:[Object(k.jsx)(rn,{isActive:null!==c,children:Object(k.jsx)(j.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(k.jsx)(rn,{isActive:null!==t,children:Object(k.jsx)(j.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{path:"/:coinId/price",children:Object(k.jsx)(V,{price:d})}),Object(k.jsx)(h.a,{path:"/:coinId/chart",children:Object(k.jsx)(F,{coinId:n})})]})]})]})},ln=Object(d.b)(an||(an=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var dn,jn,hn=function(){return Object(k.jsxs)(j.a,{children:[Object(k.jsx)(ln,{}),Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{path:"/:coinId",children:Object(k.jsx)(sn,{})}),Object(k.jsx)(h.a,{path:"/",children:Object(k.jsx)(D,{})})]})]})},bn=t(48),pn={bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#9c88ff"},un={bgColor:"#f5f6fa",textColor:"#2f3640",accentColor:"#9c88ff"},xn=d.c.div(dn||(dn=Object(l.a)(["\n  top: 40px;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  left: 150px;\n  justify-content: center;\n"]))),On=d.c.button(jn||(jn=Object(l.a)([""])));var fn=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1],r=t?pn:un;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(d.a,{theme:r,children:[Object(k.jsx)(xn,{children:Object(k.jsx)(On,{onClick:function(){return i(!t)},children:"toggle"})}),Object(k.jsx)(hn,{}),Object(k.jsx)(bn.ReactQueryDevtools,{initialIsOpen:!0})]})})},gn=new a.QueryClient;o.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(a.QueryClientProvider,{client:gn,children:Object(k.jsx)(fn,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.3dacba67.chunk.js.map