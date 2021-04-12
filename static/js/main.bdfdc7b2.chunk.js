(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{57:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(30),o=a.n(c),i=a(8),r=a(2),l=a(18),m=a.n(l),d=a(31),u=a(10),j=a(11),b=a(13),p=a(12),v=a(32),h=a.n(v),y=(a(57),a(1));var O=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.poster,o=e.genres;return Object(y.jsx)(i.b,{className:"movie-info",to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:c,genres:o}},children:Object(y.jsxs)("div",{className:"movie",children:[Object(y.jsx)("img",{src:c,alt:n,title:n}),Object(y.jsxs)("div",{className:"movie-data",children:[Object(y.jsx)("h3",{className:"movie-title",children:n}),Object(y.jsx)("h5",{className:"movie-year",children:a}),Object(y.jsx)("ul",{className:"genres",children:o.map((function(e,t){return Object(y.jsx)("li",{className:"genre",children:e},t)}))}),Object(y.jsxs)("p",{className:"movie-summary",children:[s.slice(0,180),"..."]})]})]})})},x=a(15),g=(a(64),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){document.querySelector(".nav").style.display="flex",document.body.style.backgroundImage="none",document.body.style.backgroundColor="#FAEBEF",this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(y.jsx)("section",{className:"container",children:t?Object(y.jsx)("div",{className:"loader",children:Object(y.jsx)(x.a,{className:"loader-icon"})}):Object(y.jsx)("div",{className:"Movies",children:a.map((function(e){return Object(y.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(s.a.Component)),f=(a(65),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){document.querySelector(".nav").style.display="none",document.body.style.backgroundImage="none",document.body.style.backgroundColor="rgb(250, 235, 239, 1)"}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"about-wrapper",children:Object(y.jsx)("p",{className:"about-text",children:"\ubb34\ube44 API\ub97c axios\ub85c \ud1b5\uc2e0\ud558\uc5ec \ubb34\ube44 \ub9ac\uc2a4\ud2b8\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ud65c\uc6a9\ud55c \ub9ac\uc561\ud2b8 \uc6f9\uc571\uc785\ub2c8\ub2e4."})})})}}]),a}(s.a.Component)),N=(a(66),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){console.log(this.componentDidMount);var e=this.props,t=e.location,a=e.history;void 0===t.state?a.push("/movie-app"):(document.querySelector(".nav").style.display="none",document.body.style.backgroundImage="url(".concat(t.state.poster,")"),document.body.style.backgroundColor="rgba(0, 0, 0, 0.3)",document.body.style.backgroundSize="cover")}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.history;if(t.state){var n="https://www.google.com/search?q=".concat(t.state.title);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"detail-wrapper",children:Object(y.jsxs)("ul",{className:"detail-list",children:[Object(y.jsx)("li",{className:"detail-item",children:Object(y.jsx)("img",{className:"detail-img",src:t.state.poster,alt:t.state.title,title:t.state.title})}),Object(y.jsxs)("li",{className:"detail-item",children:[Object(y.jsx)("h3",{className:"detail-title",children:t.state.title}),Object(y.jsx)("p",{className:"detail-summary",children:t.state.summary}),Object(y.jsxs)("button",{className:"detail-more",type:"button",onClick:function(){window.open(n,"_blank")},children:[Object(y.jsx)(x.c,{})," MORE"]}),Object(y.jsxs)("button",{className:"detail-more",type:"button",onClick:function(){a.push("/movie-app")},children:[Object(y.jsx)(x.b,{})," BACK"]})]})]})})})}return null}}]),a}(s.a.Component));var k=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"nav-wrapper",children:Object(y.jsxs)("nav",{className:"nav",children:[Object(y.jsx)(i.b,{className:"nav-item",to:"/movie-app",children:"Today's Movie"}),Object(y.jsx)(i.b,{className:"nav-item",to:"/about",children:"Introduce"})]})})})};a(67);var w=function(){return Object(y.jsxs)(i.a,{children:[Object(y.jsx)(k,{}),Object(y.jsx)(r.a,{path:"/movie-app",exact:!0,component:g}),Object(y.jsx)(r.a,{path:"/about",component:f}),Object(y.jsx)(r.a,{path:"/movie/:id",component:N})]})};o.a.render(Object(y.jsx)(w,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.bdfdc7b2.chunk.js.map