(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{39:function(e,t,s){},40:function(e,t,s){},59:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s.n(a),i=s(31),r=s.n(i),o=(s(39),s(8)),l=s(2);s(40);var j=function(e){return console.log(e),Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("span",{children:'"Freedon is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(n.jsx)("span",{children:"- George Orwell, 1984"})]})},m=s(10),u=s.n(m),d=s(12),b=s(13),h=s(14),p=s(17),v=s(16),O=s(15),x=s.n(O);s(59);var f=function(e){var t=e.title,s=e.year,a=e.summary,c=e.poster,i=e.genres;return Object(n.jsx)("div",{className:"movie",children:Object(n.jsxs)(o.b,{to:{pathname:"/movie-detail",state:{year:s,title:t,summary:a,poster:c,genres:i}},children:[Object(n.jsx)("img",{src:c,alt:t,title:t}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:t}),Object(n.jsx)("h5",{className:"movie__year",children:s}),Object(n.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(n.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(n.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})};c.a.Component,s(65);var _=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})},g=(c.a.Component,s(33));s(66);var y=function(){var e=Object(a.useState)({isLoading:!0,movies:[]}),t=Object(g.a)(e,2),s=t[0],c=t[1];function i(){return(i=Object(d.a)(u.a.mark((function e(){var t,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,c({isLoading:!1,movies:s});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(n.jsx)("section",{className:"container",children:s.isLoading?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.movies.map((function(e){return Object(n.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})};var N=function(e){var t=e.location,s=e.history;return Object(a.useEffect)((function(){void 0===t.state&&s.push("/")})),t.state?Object(n.jsx)("span",{children:t.state.title}):null};var w=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(_,{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:y}),Object(n.jsx)(l.a,{path:"/about",component:j}),Object(n.jsx)(l.a,{path:"/movie-detail",component:N})]})};r.a.render(Object(n.jsx)(w,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8012eb89.chunk.js.map