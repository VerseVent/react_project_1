(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(12),s=c.n(i),a=c(2),j=c(9),r=c(1);function b(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(j.b,{to:"/activities",children:Object(r.jsx)("button",{children:"Login"})})]})}var l=c(15),o=c(7),u=c(8),O=c(4),h=c(10),d=c(13);function p(){return(p=Object(d.a)(Object(h.a)().mark((function t(){var e;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.boredapi.com/api/activity");case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){var e=t.typeListItem,c=e[0],i=e[1],s=Object(n.useState)(!1),a=Object(O.a)(s,2),j=a[0],b=a[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{onClick:function(){b(!j)},children:[c,"("+i.length+")"]}),Object(r.jsx)("ul",{className:j?"type-list":"type-list visually-hidden",children:i.map((function(t,e){return Object(r.jsx)("li",{children:t},e)}))})]})})}var f=c(14),v=c.n(f);function m(t){var e=t.typeLists;return console.log(e),console.log(Object.entries(e)),Object(r.jsx)(r.Fragment,{children:Object.entries(e).map((function(t){return Object(r.jsx)(x,{typeListItem:t})}))})}function y(){var t=Object(n.useState)(),e=Object(O.a)(t,2),c=e[0],i=e[1],s=Object(n.useState)(!1),a=Object(O.a)(s,2),j=a[0],b=a[1],h=Object(n.useState)(!0),d=Object(O.a)(h,2),x=d[0],f=d[1],y=Object(n.useState)({}),g=Object(O.a)(y,2),w=g[0],N=g[1],S=Object(n.useState)({}),k=Object(O.a)(S,2),L=k[0],C=k[1];Object(n.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(t){i(t)})).finally((function(){f(!1)}))}),[j]);function I(t,e,c){var n=t.activity,i=t.type;c[i]?e((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(o.a)({},i,[].concat(Object(l.a)(t[i]),[n])))})):e((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(o.a)({},i,[n]))}))}function R(t){t?(I(c,N,w),b(!j)):(I(c,C,L),b(!j))}return Object(r.jsxs)("div",{className:"content-container container",children:[Object(r.jsx)("h1",{children:"Choose what to do with it?"}),Object(r.jsx)("div",{className:"current-activity",children:x?Object(r.jsx)(v.a,{className:"disable-margins",type:"spin",color:"black",height:40,width:40}):Object(r.jsx)("p",{children:c.activity})}),Object(r.jsxs)("div",{className:"controls",children:[Object(r.jsx)("button",{disabled:x,className:"button-3",onClick:function(){return R(true)},children:"Select"}),Object(r.jsx)("button",{disabled:x,className:"button-3 button-3--negative",onClick:function(){return R(!1)},children:"Reject"})]}),Object(r.jsxs)("div",{className:"lists-container",children:[Object(r.jsxs)("ul",{className:"activity-list",children:[Object(r.jsx)("h2",{children:"Selected activities"}),Object(r.jsx)(m,{typeLists:w})]}),Object(r.jsxs)("ul",{className:"activity-list",children:[Object(r.jsx)("h2",{children:"Rejected activities"}),Object(r.jsx)(m,{typeLists:L})]})]})]})}c(25);function g(){return Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{path:"/react_project_1",element:Object(r.jsx)(b,{})}),Object(r.jsx)(a.a,{path:"/activities",element:Object(r.jsx)(y,{})})]})}s.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(j.a,{children:Object(r.jsx)(g,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ff2abc16.chunk.js.map