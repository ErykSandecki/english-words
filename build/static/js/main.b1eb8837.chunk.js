(this["webpackJsonpenglish-words"]=this["webpackJsonpenglish-words"]||[]).push([[0],{63:function(e,n,t){"use strict";t.r(n);var r,c=t(12),o=t(3),a=t.n(o),s=t(24),d=t.n(s),i=t(17),u=(t(58),t(21)),f=t(26);!function(e){e.fetchWordsSuccess="fetchWordsSuccess",e.fetchWordsError="fetchWordsErorr",e.addNewWord="addNewWord",e.addNewWordSuccess="addNewWordSuccess",e.addNewWordError="addNewWordSuccess",e.editWord="editWord",e.editWordSuccess="editWordSuccess",e.editWordError="editWordError",e.deleteWord="deleteWord",e.deleteWordSuccess="deleteWordSuccess",e.deleteWordError="deleteWordError"}(r||(r={}));var l,b={fetchWordsSuccess:function(e){return function(e){return{type:r.fetchWordsSuccess,payload:e}}(e)}},h=Object(f.a)(Object(i.b)(null,b)),p={apiKey:"AIzaSyA-VRLP3BsbsmqFPgwsqyV4dwmglIWSWKM",authDomain:"english-words-cb95b.firebaseapp.com",databaseURL:"https://english-words-cb95b-default-rtdb.firebaseio.com",projectId:"english-words-cb95b",storageBucket:"english-words-cb95b.appspot.com",messagingSenderId:"180289885757",appId:"1:180289885757:web:4e42c0ed923a6c4de93c54"};!function(e){e.words="words"}(l||(l={}));var j=function(e){console.error(e)},g=function(e){for(var n=Object.keys(e),t=[],r=0;r<n.length;r++)t.push(e[n[r]]);return t},v=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e.val();n(g(t))},W=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.words;e.database().ref(t).on("value",(function(e){return v(e,n)}),j)},w=h((function(e){var n=e.fetchWordsSuccess,t=function(e){n(e)};return Object(o.useEffect)((function(){u.a.initializeApp(p),W(u.a,t)}),[]),null})),O=function(){return null},m=t(37),y=Object(m.a)({}),S=Object(f.a)(Object(i.b)(y,null))((function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{}),Object(c.jsx)(O,{})]})})),x=t(14),N=t(38),k=t(45),I=t(39),E=t(22),R={data:[]},B=function(e,n){return Object(E.a)(Object(E.a)({},e),{},{data:n.payload})},U={groupedEndpoints:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.fetchWordsSuccess:return B(e,n);default:return e}}},z=function(){return Object(x.combineReducers)(Object(E.a)({},U))},K=t(46),A=t(19),L=t.n(A),M=t(32),T=function(e){for(var n=u.a.database().ref(e[0]),t=1;t<e.length;t++)n=n.child(e[t]);return n},q=L.a.mark(D);function D(e){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(path).set("");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),q,null,[[0,5]])}var F=L.a.mark(J);function J(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([Object(M.b)(r.addNewWord,D)]);case 2:case"end":return e.stop()}}),F)}var P,V=[J],C=function(e){var n,t=Object(K.a)(V);try{for(t.s();!(n=t.n()).done;){var r=n.value;e.run(r)}}catch(c){t.e(c)}finally{t.f()}},G=Object(k.a)(),H=function(){var e=Object(x.createStore)(z(),{},Object(N.composeWithDevTools)(x.applyMiddleware.apply(void 0,[I.a].concat([G]))));return C(G),e},Q=t(40),X=t(41);function Y(){var e=Object(Q.a)(["\n  * {\n   margin:0;\n   padding:0;\n  }\n\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%; \n  }\n\n  body {\n    font-family: ",", sans-serif;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html, body, #root {\n    min-height: 100vh;\n  }\n\n  input, \n  textarea, \n  a, \n  p, \n  span, \n  kbd {\n    font-family: ",", sans-serif;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    font-family: ",", sans-serif;\n  }\n"]);return Y=function(){return e},e}!function(e){e.NUNITO="Nunito",e.RUBIK="Rubik"}(P||(P={}));var Z=Object(X.a)(Y(),P.RUBIK,P.RUBIK,P.NUNITO);d.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsxs)(i.a,{store:H(),children:[Object(c.jsx)(Z,{}),Object(c.jsx)(S,{})]})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.b1eb8837.chunk.js.map