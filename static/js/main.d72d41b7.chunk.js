(this["webpackJsonpenglish-words"]=this["webpackJsonpenglish-words"]||[]).push([[0],{275:function(n,t,e){"use strict";e.r(t);var r,o=e(6),a=e(2),i=e.n(a),s=e(28),d=e.n(s),c=e(14),f=(e(149),e(136)),l=e.p+"static/media/empty-section.80501725.svg",p=e(50),m=e.n(p),b=e(19);!function(n){n.fetchWordsSuccess="fetchWordsSuccess",n.fetchWordsError="fetchWordsErorr",n.addNewWord="addNewWord",n.addNewWordSuccess="addNewWordSuccess",n.addNewWordError="addNewWordSuccess",n.editWord="editWord",n.editWordSuccess="editWordSuccess",n.editWordError="editWordError",n.deleteWord="deleteWord",n.deleteWordSuccess="deleteWordSuccess",n.deleteWordError="deleteWordError"}(r||(r={}));var g=m()("words"),u=Object(b.a)(g,m()("isPending")),h=Object(b.a)(g,m()("data")),x=Object(b.a)(h,(function(n){return n.map((function(n){return n.name}))})),j=Object(b.a)(h,(function(n){return n?n.reduce((function(n,t){var e=t.words;return n+(e?e.length:0)}),0):0})),w=e(21),O=e(22);function v(){var n=Object(w.a)(["\n  margin-top: 60px;\n\n  nav {\n    display: inline-flex;\n    margin-left: 10%;\n    max-width: 100%;\n    padding: 10px 0;\n    overflow-x: auto;\n\n    & > p {\n      margin: 0 10px;\n      padding: 0 10px;\n      position: relative;\n      white-space: nowrap;\n\n      &.selected {\n        color: #009add;\n\n        &::after {\n          content: '';\n          position: absolute;\n          bottom: -10px;\n          left: 0;\n          width: 100%;\n          background-color: #009add;\n          height: 2px;\n        }\n      }\n    }\n  }\n\n  .word-wrapper {\n    background-color: #fff;\n    border-radius: 5px;\n    margin: 20px 10%;\n    padding: 10px 25px;\n    position: relative;\n\n    &::before {\n      background-color: #009add;\n      border-bottom-left-radius: 5px;\n      border-top-left-radius: 5px;\n      content: '';\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 3px;\n    }\n\n    &:nth-child(odd)::before {\n      background-color: #82b632;\n    }\n\n    & > p {\n      text-transform: capitalize;\n    }\n\n    & > p:first-of-type {\n      color: #676c72;\n      font-weight: 600;\n      font-size: 16px;\n    }\n\n    & > p:last-of-type {\n      color: #a2a8b1;\n      font-size: 12px;\n    }\n\n    & > span {\n      bottom: 10px;\n      color: #009add;\n      font-size: 10px;\n      position: absolute;\n      right: 25px;\n    }\n  }\n\n  .empty-section {\n    margin-top: 50px;\n    text-align: center;\n  }\n"]);return v=function(){return n},n}var k=O.b.div(v()),y=function(n){var t,e=n.selectedCategory,r=n.setSelectedCategory,a=Object(c.c)(x),i=Object(c.c)((t=e,Object(b.a)(h,(function(n){return n.length>0&&n[t].words?n[t].words:[]}))));return Object(o.jsxs)(k,{children:[Object(o.jsx)("nav",{children:a.map((function(n,t){return Object(o.jsx)("p",{className:e===t?"selected":"",onClick:function(){return r(t)},children:n},t)}))}),i.length>0?i.map((function(n,t){var r=n.english,i=n.polish;return Object(o.jsxs)("div",{className:"word-wrapper",children:[Object(o.jsx)("p",{children:r}),Object(o.jsx)("p",{children:i}),Object(o.jsx)("span",{children:a[e]})]},t)})):Object(o.jsx)("div",{className:"empty-section",children:Object(o.jsx)("img",{alt:"empty-section",src:l})})]})},W=e.p+"static/media/plus.045632c6.svg",z=e.p+"static/media/logo-neutral.44afc0dd.svg",S=e.p+"static/media/header-background.f1590ff3.svg";function N(){var n=Object(w.a)(["\n  background-image: url(",");\n  height: 90px;\n  padding: 10px 15px 0 15px;\n  position: relative;\n\n  .wrapper-items {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n\n    & > img:first-of-type {\n      height: 36px;\n      width: 32px;\n    }\n\n    & > h3 {\n      color: #fff;\n      font-weight: 600;\n      margin: 0;\n      text-align: center;\n    }\n\n    & > img:last-of-type {\n      height: 15px;\n      width: 15px;\n    }\n  }\n\n  .statistic-container {\n    align-items: center;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 5px 9px -3px #00000047;\n    display: flex;\n    height: 70px;\n    justify-content: space-between;\n    left: 10%;\n    padding: 10px;\n    position: absolute;\n    top: 65px;\n    width: 80%;\n  }\n\n  .statistic-wrapper {\n    text-align: center;\n    & > p {\n      color: #46494e;\n      font-weight: bold;\n    }\n\n    & > span {\n      color: #747575;\n      font-size: 12px;\n    }\n  }\n"]);return N=function(){return n},n}var I=O.b.header(N(),S),E=function(n){var t,e=n.selectedCategory,r=Object(c.c)(j),a=Object(c.c)((t=e,Object(b.a)(h,(function(n){return n.length>0&&n[t].words?n[t].words.length:0}))));return Object(o.jsxs)(I,{children:[Object(o.jsxs)("div",{className:"wrapper-items",children:[Object(o.jsx)("img",{alt:"logo-neutral",src:z}),Object(o.jsx)("h3",{children:"English Words"}),Object(o.jsx)("img",{alt:"plus-icon",src:W})]}),Object(o.jsxs)("div",{className:"statistic-container",children:[Object(o.jsxs)("div",{className:"statistic-wrapper",children:[Object(o.jsx)("p",{children:r}),Object(o.jsx)("span",{children:"Total Words"})]}),Object(o.jsxs)("div",{className:"statistic-wrapper",children:[Object(o.jsx)("p",{children:a}),Object(o.jsx)("span",{children:"Words In This Section"})]})]})]})},P=e.p+"static/media/logo.9f57ff92.svg";function B(){var n=Object(w.a)(["\n  background-color: #fff;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  transition: 2s linear;\n  width: 100%;\n  z-index: 10;\n\n  ","\n\n  .loader {\n    animation: spinr 1.5s linear infinite;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    border-top-color: #009add;\n    display: block;\n    height: 150px;\n    left: 50%;\n    margin: -75px 0 0 -75px;\n    position: relative;\n    top: 40%;\n    width: 150px;\n    -moz-animation: spinr 1.5s linear infinite;\n    -moz-border-radius: 50%;\n    -o-animation: spinr 1.5s linear infinite;\n    -webkit-animation: spinr 1.5s linear infinite;\n    -webkit-border-radius: 50%;\n\n    &::after {\n      animation: spinr 1s linear infinite;\n      border: 1px solid transparent;\n      border-radius: 50%;\n      border-top-color: #82b632;\n      bottom: 30px;\n      content: '';\n      left: 30px;\n      position: absolute;\n      right: 30px;\n      top: 30px;\n      -moz-animation: spinr 1s linear infinite;\n      -moz-border-radius: 50%;\n      -o-animation: spinr 1s linear infinite;\n      -webkit-animation: spinr 1s linear infinite;\n      -webkit-border-radius: 50%;\n    }\n\n    &::before {\n      animation: spinl 0.5s linear infinite;\n      border: 1px solid transparent;\n      border-radius: 50%;\n      border-top-color: #009add;\n      bottom: 15px;\n      content: '';\n      left: 15px;\n      position: absolute;\n      right: 15px;\n      top: 15px;\n      -moz-animation: spinl 0.5s linear infinite;\n      -moz-border-radius: 50%;\n      -o-animation: spinl 0.5s linear infinite;\n      -webkit-animation: spinl 0.5s linear infinite;\n      -webkit-border-radius: 50%;\n    }\n  }\n\n  .logo {\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -50%);\n  }\n\n  @-webkit-keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-moz-keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-o-keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n\n  @-moz-keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n\n  @-o-keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n\n  @keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n"]);return B=function(){return n},n}var C,R=O.b.div(B(),(function(n){return!n.isPending&&"opacity: 0; visibility: hidden;"})),F=function(n){var t=n.isPending;return d.a.createPortal(Object(o.jsxs)(R,{isPending:t,children:[Object(o.jsx)("div",{className:"loader"}),Object(o.jsx)("img",{alt:"logo",className:"logo",src:P})]}),document.getElementById("pageLoader"))},U=e(48),K=Object(b.b)({}),T=Object(U.a)(Object(c.b)(K,null))((function(){var n=Object(a.useState)(0),t=Object(f.a)(n,2),e=t[0],r=t[1],i=Object(c.c)(u);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F,{isPending:i}),!i&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(E,{selectedCategory:e}),Object(o.jsx)(y,{selectedCategory:e,setSelectedCategory:r})]})]})})),L=e(36),A={fetchWordsSuccess:function(n){return function(n){return{type:r.fetchWordsSuccess,payload:n}}(n)}},M=Object(U.a)(Object(c.b)(null,A)),q={apiKey:"AIzaSyA-VRLP3BsbsmqFPgwsqyV4dwmglIWSWKM",authDomain:"english-words-cb95b.firebaseapp.com",databaseURL:"https://english-words-cb95b-default-rtdb.firebaseio.com",projectId:"english-words-cb95b",storageBucket:"english-words-cb95b.appspot.com",messagingSenderId:"180289885757",appId:"1:180289885757:web:4e42c0ed923a6c4de93c54"};!function(n){n.data="data"}(C||(C={}));var D=function(n){console.error(n)},J=function(n){for(var t=Object.keys(n),e=[],r=0;r<t.length;r++)e.push(n[t[r]]);return e},V=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=n.val();t(J(e))},G=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C.data;n.database().ref(e).on("value",(function(n){return V(n,t)}),D)},H=M((function(n){var t=n.fetchWordsSuccess,e=function(n){t(n)};return Object(a.useEffect)((function(){L.a.initializeApp(q),G(L.a,e)}),[]),null})),Q=e(18),X=e(133),Y=e(137),Z=e(134),$=e(37),_={data:[],isPending:!0},nn=function(n,t){return Object($.a)(Object($.a)({},n),{},{data:t.payload,isPending:!1})},tn={words:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.fetchWordsSuccess:return nn(n,t);default:return n}}},en=function(){return Object(Q.combineReducers)(Object($.a)({},tn))},rn=e(135),on=e(30),an=e.n(on),sn=e(82),dn=function(n){for(var t=L.a.database().ref(n[0]),e=1;e<n.length;e++)t=t.child(n[e]);return t},cn=an.a.mark(fn);function fn(n){return an.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,dn(["words"]).set(n.payload);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),cn,null,[[0,5]])}var ln=an.a.mark(pn);function pn(){return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(sn.a)([Object(sn.b)(r.addNewWord,fn)]);case 2:case"end":return n.stop()}}),ln)}var mn,bn=[pn],gn=function(n){var t,e=Object(rn.a)(bn);try{for(e.s();!(t=e.n()).done;){var r=t.value;n.run(r)}}catch(o){e.e(o)}finally{e.f()}},un=Object(Y.a)(),hn=function(){var n=Object(Q.createStore)(en(),{},Object(X.composeWithDevTools)(Q.applyMiddleware.apply(void 0,[Z.a].concat([un]))));return gn(un),n};function xn(){var n=Object(w.a)(["\n  * {\n   margin: 0;\n   padding: 0;\n  }\n\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%; \n  }\n\n  body {\n  background-color: #F9F9F9;\n    font-family: ",", sans-serif;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html, body {\n    min-height: 100vh;\n  }\n\n  #root {\n    max-height: calc(100vh - 50px);\n    min-height: calc(100vh - 50px);\n    overflow-y: auto;\n  }\n\n  input, \n  header,\n  textarea, \n  a, \n  p, \n  span, \n  kbd {\n    font-family: ",", sans-serif;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    font-family: ",", sans-serif;\n  }\n"]);return xn=function(){return n},n}!function(n){n.NUNITO="Nunito",n.RUBIK="Rubik"}(mn||(mn={}));var jn=Object(O.a)(xn(),mn.RUBIK,mn.RUBIK,mn.NUNITO);d.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsxs)(c.a,{store:hn(),children:[Object(o.jsx)(jn,{}),Object(o.jsx)(H,{}),Object(o.jsx)(T,{})]})}),document.getElementById("root"))}},[[275,1,2]]]);
//# sourceMappingURL=main.d72d41b7.chunk.js.map