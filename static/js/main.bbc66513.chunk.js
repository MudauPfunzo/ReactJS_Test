(this["webpackJsonpioco-react-js-test"]=this["webpackJsonpioco-react-js-test"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"Navigation":{"logo":"img/mtn_logo.svg"},"Services":[{"id":"1","image":"img/mtn_logo.svg","title":"Mobile internet","actiontext":"Start here"},{"id":"2","image":"img/mtn_logo.svg","title":"Home internet","actiontext":"Start here"},{"id":"3","image":"img/mtn_logo.svg","title":"Get a device","actiontext":"Start here"},{"id":"4","image":"img/mtn_logo.svg","title":"Add a phone-line","actiontext":"Start here"},{"id":"5","image":"img/mtn_logo.svg","title":"Upgrade","actiontext":"Start here"}]}')},17:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),l=a(10),i=a.n(l),r=(a(17),a(2)),n=a(0),o=function(e){return Object(n.jsx)("nav",{id:"menu",className:"navbar navbar-expand-sm navbar-toggleable-sm navbar-default navbar-fixed-top",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"navbar-header",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"#",children:Object(n.jsx)("img",{src:e.data?e.data.logo:"",alt:"MTN logo",className:"team-img"})})," ",Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})})]}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{href:"#Store",className:"nav-link",children:"Store"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{href:"#ProductService",className:"nav-link",children:"Products & Services"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{href:"#HelpSupport",className:"nav-link",children:"Help & Support"})})]}),Object(n.jsx)("ul",{className:"nav navbar-nav navbar-right",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{href:"#Personal",className:"nav-link",children:[Object(n.jsx)("span",{className:"marker",children:"\u2022"}),"Personal"]})})})]})]})})},d=a(12),m=(a(19),a(32),function(e){return e.data?e.data.map((function(e,t){return Object(n.jsx)("div",{className:"gallery-item",children:Object(n.jsx)("div",{className:"deal-card",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."}),Object(n.jsx)("p",{className:"card-text",children:"".concat(e.title)})]})})},"".concat(e.id,"-").concat(t))})):Object(n.jsx)("div",{})}),j=function(e){var t=Object(s.useState)({}),a=Object(r.a)(t,2),c=(a[0],a[1],Object(s.useState)(["Previous","Next"])),l=Object(r.a)(c,2),i=(l[0],l[1],Object(s.useState)({})),o=Object(r.a)(i,2),j=(o[0],o[1]),u=Object(s.useState)("next"),b=Object(r.a)(u,2),g=b[0],v=b[1],h=Object(s.useState)(0),O=Object(r.a)(h,2),x=O[0],f=O[1],p=Object(s.useState)(0),y=Object(r.a)(p,2),N=y[0],S=y[1],L=Object(s.useState)(0),k=Object(r.a)(L,2),w=k[0],E=k[1],q=Object(s.useState)([]),A=Object(r.a)(q,2),_=A[0],C=A[1];return Object(s.useEffect)((function(){var e=document.querySelectorAll(".gallery-item");e&&(0==w&&C((function(t){return Object(d.a)(e)})),e.length>0&&0==w&&E(e.length))}),[_]),Object(s.useEffect)((function(){_&&_.length>0&&C((function(e){e[0].classList.add("gallery-item-first"),e[1].classList.add("gallery-item-previous"),e[2].classList.add("gallery-item-selected"),e[3].classList.add("gallery-item-next"),e[4].classList.add("gallery-item-last")})),j(document.querySelector(".gallery-controls"))}),[w]),Object(s.useEffect)((function(){var e=document.querySelectorAll(".gallery-item-selected"),t=document.querySelectorAll(".gallery-item-previous"),a=document.querySelectorAll(".gallery-item-next"),s=document.querySelectorAll(".gallery-item-first"),c=document.querySelectorAll(".gallery-item-last");e.forEach((function(e){e.classList.remove("gallery-item-selected"),"previous"==g?e.classList.add("gallery-item-next"):e.classList.add("gallery-item-previous")})),t.forEach((function(e){e.classList.remove("gallery-item-previous"),"previous"==g?e.classList.add("gallery-item-selected"):e.classList.add("gallery-item-first")})),a.forEach((function(e){e.classList.remove("gallery-item-next"),"previous"==g?e.classList.add("gallery-item-last"):e.classList.add("gallery-item-selected")})),s.forEach((function(e){e.classList.remove("gallery-item-first"),"previous"==g?e.classList.add("gallery-item-previous"):e.classList.add("gallery-item-last")})),c.forEach((function(e){e.classList.remove("gallery-item-last"),"previous"==g?e.classList.add("gallery-item-first"):e.classList.add("gallery-item-next")}))}),[x,N,g]),Object(n.jsxs)("div",{id:"services",children:[Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"section-title",children:Object(n.jsxs)("p",{children:["What are you",Object(n.jsx)("span",{className:"bold-span",children:" here to do?"})]})}),Object(n.jsx)("div",{className:"row gallery-container",children:Object(n.jsx)(m,{data:e.data})})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{class:"gallery-controls",children:[Object(n.jsx)("button",{class:"gallery-controls-previous",onClick:function(){S((function(e){return e+1})),v("previous")},children:"previous"}),Object(n.jsx)("button",{class:"gallery-controls-next",onClick:function(){f((function(e){return e+1})),v("next")},children:"next"})]})})})]})},u=a(11),b=(a(33),function(){var e=Object(s.useState)({}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){c(u)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(o,{data:a.Navigation}),Object(n.jsx)(j,{data:a.Services})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.bbc66513.chunk.js.map