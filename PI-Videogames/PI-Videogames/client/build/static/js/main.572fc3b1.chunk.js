(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(15),a=n.n(r),o=(n(37),n(38),n(9)),s=n(1);function j(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:" WELCOME TO THE LANDING PAGE "}),Object(s.jsx)(o.b,{to:"/home",children:Object(s.jsx)("button",{children:" GO \ud83c\udfae "})})]})}var l=n(14),d=n(10),u=n.n(d),b=n(16),O=n(17),h=n.n(O);function p(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:3001/videogames?name=");case 2:n=e.sent,t({type:"GET_GAMES",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function v(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.videogames}));return console.log(t),Object(c.useEffect)((function(){e(p())}),[e]),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/videogames",children:" Create Game "}),Object(s.jsx)("h1",{children:" VIDEOGAMES !!! "}),Object(s.jsx)("button",{onClick:function(t){!function(t){t.preventDefault(),e(p())}(t)},children:"CARGAR JUEGOS"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("select",{children:[Object(s.jsx)("option",{value:"asc",children:"Ascending"}),Object(s.jsx)("option",{value:"desc",children:"Descending"})]}),Object(s.jsxs)("select",{children:[Object(s.jsx)("option",{value:"All",children:"Genres"}),Object(s.jsx)("option",{value:"Action",children:" Action "}),Object(s.jsx)("option",{value:"Indie",children:" Indie"}),Object(s.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(s.jsx)("option",{value:"RPG",children:" RPG "}),Object(s.jsx)("option",{value:"Strategy",children:" Strategy "})]}),Object(s.jsxs)("select",{children:[Object(s.jsx)("option",{value:"All",children:"All"}),Object(s.jsx)("option",{value:"created",children:"Created"}),Object(s.jsx)("option",{value:"api",children:" Existente"})]}),t&&t.map((function(e){e.name,e.image,e.genre}))]})]})}var x=n(3);var f=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(x.c,{children:[Object(s.jsx)(x.a,{exact:!0,path:"/",component:j}),Object(s.jsx)(x.a,{path:"/home",component:v})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},m=n(22),E=n(11),A={videogames:[],genres:[]};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GAMES":return Object(E.a)(Object(E.a)({},e),{},{videogames:t.payload});case"GET_GENRES":return Object(E.a)(Object(E.a)({},e),{},{genres:t.payload});case"GET_NAMES":return Object(E.a)(Object(E.a)({},e),{},{videogames:t.payload});default:return e}},y=n(32),S=Object(m.b)(G,Object(m.a)(y.a));a.a.render(Object(s.jsx)(l.a,{store:S,children:Object(s.jsx)(o.a,{children:Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})})})}),document.getElementById("root")),g()}},[[68,1,2]]]);
//# sourceMappingURL=main.572fc3b1.chunk.js.map