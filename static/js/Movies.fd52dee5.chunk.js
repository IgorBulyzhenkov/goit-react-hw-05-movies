"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[249],{9331:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var n=s(885),i="MoviesList_form__79P36",a="MoviesList_input__mVdgT",r="MoviesList_btn__nzSDi",u="MoviesList_item__152lm",l="MoviesList_link__vFggZ",c="MoviesList_title__wr80a",o=s(2791),_=s(501),m=s(6871),v=s(7788),f=s(6090),h=s(184),d=f.o.movies;function g(){var e=(0,o.useState)(""),t=(0,n.Z)(e,2),s=t[0],f=t[1],g=(0,o.useState)({}),j=(0,n.Z)(g,2),p=j[0],x=j[1],N=(0,o.useState)(""),b=(0,n.Z)(N,2),k=b[0],L=b[1],M=(0,_.lr)(),S=(0,n.Z)(M,2),w=S[0],y=S[1],Z=w.get("query");(0,o.useEffect)((function(){null!==Z&&(0,v.kT)(Z).then((function(e){return x(e),L("")})).catch((function(e){return L(e.message)}))}),[Z]);var q=p.results,C=p.total_results;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({query:s}),f("")},className:i,children:[(0,h.jsx)("input",{type:"text",name:"name",value:s,onChange:function(e){var t=e.target.value;f(t.trim())},className:a}),(0,h.jsx)("button",{type:"submit",className:r,children:"Search"})]}),q?(0,h.jsx)("ul",{children:q.map((function(e){var t=e.id,s=e.original_title;return(0,h.jsx)("li",{className:u,children:(0,h.jsx)(_.rU,{to:"".concat(d,"/").concat(t),state:{movies:d,from:"/movies?query=".concat(Z)},className:l,children:s})},t)}))}):null,0===C?(0,h.jsx)("p",{className:c,children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443 \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0430"}):null,k?(0,h.jsxs)("p",{className:c,children:["\u0422\u0430\u043a\u0438\u0439 \u0444\u0456\u043b\u044c\u043c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e ",k]}):null,(0,h.jsx)(m.j3,{})]})}}}]);
//# sourceMappingURL=Movies.fd52dee5.chunk.js.map