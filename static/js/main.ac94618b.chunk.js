(this["webpackJsonpenglish-words"]=this["webpackJsonpenglish-words"]||[]).push([[0],{275:function(n,t,e){"use strict";e.r(t);var r,o=e(6),a=e(2),i=e.n(a),s=e(28),d=e.n(s),c=e(14),f=(e(149),e(136)),l=e(50),p=e.n(l),m=e(19);!function(n){n.fetchWordsSuccess="fetchWordsSuccess",n.fetchWordsError="fetchWordsErorr",n.addNewWord="addNewWord",n.addNewWordSuccess="addNewWordSuccess",n.addNewWordError="addNewWordSuccess",n.editWord="editWord",n.editWordSuccess="editWordSuccess",n.editWordError="editWordError",n.deleteWord="deleteWord",n.deleteWordSuccess="deleteWordSuccess",n.deleteWordError="deleteWordError"}(r||(r={}));var b=p()("words"),g=Object(m.a)(b,p()("isPending")),u=Object(m.a)(b,p()("data")),h=Object(m.a)(u,(function(n){return n.map((function(n){return n.name}))})),x=Object(m.a)(u,(function(n){return n?n.reduce((function(n,t){var e=t.words;return n+(e?e.length:0)}),0):0})),j=e(21),w=e(22);function O(){var n=Object(j.a)(["\n  margin-top: 60px;\n\n  nav {\n    display: inline-flex;\n    margin-left: 10%;\n    max-width: 100%;\n    padding: 10px 0;\n    overflow-x: auto;\n\n    & > p {\n      margin: 0 10px;\n      padding: 0 10px;\n      position: relative;\n      white-space: nowrap;\n\n      &.selected {\n        color: #009add;\n\n        &::after {\n          content: '';\n          position: absolute;\n          bottom: -10px;\n          left: 0;\n          width: 100%;\n          background-color: #009add;\n          height: 2px;\n        }\n      }\n    }\n  }\n\n  .word-wrapper {\n    background-color: #fff;\n    border-radius: 5px;\n    margin: 20px 10%;\n    padding: 10px 25px;\n    position: relative;\n\n    &::before {\n      background-color: #009add;\n      border-bottom-left-radius: 5px;\n      border-top-left-radius: 5px;\n      content: '';\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 3px;\n    }\n\n    &:nth-child(odd)::before {\n      background-color: #82b632;\n    }\n\n    & > p {\n      text-transform: capitalize;\n    }\n\n    & > p:first-of-type {\n      color: #676c72;\n      font-weight: 600;\n      font-size: 16px;\n    }\n\n    & > p:last-of-type {\n      color: #a2a8b1;\n      font-size: 12px;\n    }\n\n    & > span {\n      bottom: 10px;\n      color: #009add;\n      font-size: 10px;\n      position: absolute;\n      right: 25px;\n    }\n  }\n"]);return O=function(){return n},n}var v=w.b.div(O()),k=function(n){var t,e=n.selectedCategory,r=n.setSelectedCategory,a=Object(c.c)(h),i=Object(c.c)((t=e,Object(m.a)(u,(function(n){return n.length>0&&n[t].words?n[t].words:[]}))));return Object(o.jsxs)(v,{children:[Object(o.jsx)("nav",{children:a.map((function(n,t){return Object(o.jsx)("p",{className:e===t?"selected":"",onClick:function(){return r(t)},children:n},t)}))}),i.map((function(n,t){var r=n.english,i=n.polish;return Object(o.jsxs)("div",{className:"word-wrapper",children:[Object(o.jsx)("p",{children:r}),Object(o.jsx)("p",{children:i}),Object(o.jsx)("span",{children:a[e]})]},t)}))]})},y=e.p+"static/media/plus.045632c6.svg",W=e.p+"static/media/logo-neutral.44afc0dd.svg",z=e.p+"static/media/header-background.f1590ff3.svg";function S(){var n=Object(j.a)(["\n  background-image: url(",");\n  height: 90px;\n  padding: 10px 15px 0 15px;\n  position: relative;\n\n  .wrapper-items {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n\n    & > img:first-of-type {\n      height: 36px;\n      width: 32px;\n    }\n\n    & > h3 {\n      color: #fff;\n      font-weight: 600;\n      margin: 0;\n      text-align: center;\n    }\n\n    & > img:last-of-type {\n      height: 15px;\n      width: 15px;\n    }\n  }\n\n  .statistic-container {\n    align-items: center;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 5px 9px -3px #00000047;\n    display: flex;\n    height: 70px;\n    justify-content: space-between;\n    left: 10%;\n    padding: 10px;\n    position: absolute;\n    top: 65px;\n    width: 80%;\n  }\n\n  .statistic-wrapper {\n    text-align: center;\n    & > p {\n      color: #46494e;\n      font-weight: bold;\n    }\n\n    & > span {\n      color: #747575;\n      font-size: 12px;\n    }\n  }\n"]);return S=function(){return n},n}var N=w.b.header(S(),z),I=function(n){var t,e=n.selectedCategory,r=Object(c.c)(x),a=Object(c.c)((t=e,Object(m.a)(u,(function(n){return n.length>0&&n[t].words?n[t].words.length:0}))));return Object(o.jsxs)(N,{children:[Object(o.jsxs)("div",{className:"wrapper-items",children:[Object(o.jsx)("img",{alt:"logo-neutral",src:W}),Object(o.jsx)("h3",{children:"English Words"}),Object(o.jsx)("img",{alt:"plus-icon",src:y})]}),Object(o.jsxs)("div",{className:"statistic-container",children:[Object(o.jsxs)("div",{className:"statistic-wrapper",children:[Object(o.jsx)("p",{children:r}),Object(o.jsx)("span",{children:"Total Words"})]}),Object(o.jsxs)("div",{className:"statistic-wrapper",children:[Object(o.jsx)("p",{children:a}),Object(o.jsx)("span",{children:"Words In This Section"})]})]})]})},E=e.p+"static/media/logo.9f57ff92.svg";function P(){var n=Object(j.a)(["\n  background-color: #fff;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  transition: 2s linear;\n  width: 100%;\n  z-index: 10;\n\n  ","\n\n  .loader {\n    animation: spinr 1.5s linear infinite;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    border-top-color: #009add;\n    display: block;\n    height: 150px;\n    left: 50%;\n    margin: -75px 0 0 -75px;\n    position: relative;\n    top: 40%;\n    width: 150px;\n    -moz-animation: spinr 1.5s linear infinite;\n    -moz-border-radius: 50%;\n    -o-animation: spinr 1.5s linear infinite;\n    -webkit-animation: spinr 1.5s linear infinite;\n    -webkit-border-radius: 50%;\n\n    &::after {\n      animation: spinr 1s linear infinite;\n      border: 1px solid transparent;\n      border-radius: 50%;\n      border-top-color: #82b632;\n      bottom: 30px;\n      content: '';\n      left: 30px;\n      position: absolute;\n      right: 30px;\n      top: 30px;\n      -moz-animation: spinr 1s linear infinite;\n      -moz-border-radius: 50%;\n      -o-animation: spinr 1s linear infinite;\n      -webkit-animation: spinr 1s linear infinite;\n      -webkit-border-radius: 50%;\n    }\n\n    &::before {\n      animation: spinl 0.5s linear infinite;\n      border: 1px solid transparent;\n      border-radius: 50%;\n      border-top-color: #009add;\n      bottom: 15px;\n      content: '';\n      left: 15px;\n      position: absolute;\n      right: 15px;\n      top: 15px;\n      -moz-animation: spinl 0.5s linear infinite;\n      -moz-border-radius: 50%;\n      -o-animation: spinl 0.5s linear infinite;\n      -webkit-animation: spinl 0.5s linear infinite;\n      -webkit-border-radius: 50%;\n    }\n  }\n\n  .logo {\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -50%);\n  }\n\n  @-webkit-keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-moz-keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-o-keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spinr {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n\n  @-moz-keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n\n  @-o-keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n\n  @keyframes spinl {\n    0% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    100% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n  }\n"]);return P=function(){return n},n}var B,C=w.b.div(P(),(function(n){return!n.isPending&&"opacity: 0; visibility: hidden;"})),R=function(n){var t=n.isPending;return d.a.createPortal(Object(o.jsxs)(C,{isPending:t,children:[Object(o.jsx)("div",{className:"loader"}),Object(o.jsx)("img",{alt:"logo",className:"logo",src:E})]}),document.getElementById("pageLoader"))},F=e(48),U=Object(m.b)({}),K=Object(F.a)(Object(c.b)(U,null))((function(){var n=Object(a.useState)(0),t=Object(f.a)(n,2),e=t[0],r=t[1],i=Object(c.c)(g);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(R,{isPending:i}),!i&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(I,{selectedCategory:e}),Object(o.jsx)(k,{selectedCategory:e,setSelectedCategory:r})]})]})})),T=e(36),L={fetchWordsSuccess:function(n){return function(n){return{type:r.fetchWordsSuccess,payload:n}}(n)}},A=Object(F.a)(Object(c.b)(null,L)),M={apiKey:"AIzaSyA-VRLP3BsbsmqFPgwsqyV4dwmglIWSWKM",authDomain:"english-words-cb95b.firebaseapp.com",databaseURL:"https://english-words-cb95b-default-rtdb.firebaseio.com",projectId:"english-words-cb95b",storageBucket:"english-words-cb95b.appspot.com",messagingSenderId:"180289885757",appId:"1:180289885757:web:4e42c0ed923a6c4de93c54"};!function(n){n.data="data"}(B||(B={}));var q=function(n){console.error(n)},D=function(n){for(var t=Object.keys(n),e=[],r=0;r<t.length;r++)e.push(n[t[r]]);return e},J=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=n.val();t(D(e))},V=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:B.data;n.database().ref(e).on("value",(function(n){return J(n,t)}),q)},G=A((function(n){var t=n.fetchWordsSuccess,e=function(n){t(n)};return Object(a.useEffect)((function(){T.a.initializeApp(M),V(T.a,e)}),[]),null})),H=e(18),Q=e(133),X=e(137),Y=e(134),Z=e(37),$={data:[],isPending:!0},_=function(n,t){return Object(Z.a)(Object(Z.a)({},n),{},{data:t.payload,isPending:!1})},nn={words:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.fetchWordsSuccess:return _(n,t);default:return n}}},tn=function(){return Object(H.combineReducers)(Object(Z.a)({},nn))},en=e(135),rn=e(30),on=e.n(rn),an=e(82),sn=function(n){for(var t=T.a.database().ref(n[0]),e=1;e<n.length;e++)t=t.child(n[e]);return t},dn=on.a.mark(cn);function cn(n){return on.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,sn(["words"]).set(n.payload);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),dn,null,[[0,5]])}var fn=on.a.mark(ln);function ln(){return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(an.a)([Object(an.b)(r.addNewWord,cn)]);case 2:case"end":return n.stop()}}),fn)}var pn,mn=[ln],bn=function(n){var t,e=Object(en.a)(mn);try{for(e.s();!(t=e.n()).done;){var r=t.value;n.run(r)}}catch(o){e.e(o)}finally{e.f()}},gn=Object(X.a)(),un=function(){var n=Object(H.createStore)(tn(),{},Object(Q.composeWithDevTools)(H.applyMiddleware.apply(void 0,[Y.a].concat([gn]))));return bn(gn),n};function hn(){var n=Object(j.a)(["\n  * {\n   margin: 0;\n   padding: 0;\n  }\n\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%; \n  }\n\n  body {\n  background-color: #F9F9F9;\n    font-family: ",", sans-serif;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html, body {\n    min-height: 100vh;\n  }\n\n  #root {\n    max-height: calc(100vh - 50px);\n    min-height: calc(100vh - 50px);\n    overflow-y: auto;\n  }\n\n  input, \n  header,\n  textarea, \n  a, \n  p, \n  span, \n  kbd {\n    font-family: ",", sans-serif;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    font-family: ",", sans-serif;\n  }\n"]);return hn=function(){return n},n}!function(n){n.NUNITO="Nunito",n.RUBIK="Rubik"}(pn||(pn={}));var xn=Object(w.a)(hn(),pn.RUBIK,pn.RUBIK,pn.NUNITO);d.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsxs)(c.a,{store:un(),children:[Object(o.jsx)(xn,{}),Object(o.jsx)(G,{}),Object(o.jsx)(K,{})]})}),document.getElementById("root"))}},[[275,1,2]]]);
//# sourceMappingURL=main.ac94618b.chunk.js.map