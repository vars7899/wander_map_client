(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},115:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(28),r=n.n(s),l=(n(69),n(62)),i=n(25),o=n(14),u=n.n(o),j=n(17),b=n(9),d=n(24),O=n(131),p=n(132),h=n(18),m=n.n(h),x=n(61),f=(n(107),n(33)),g=n.n(f),v=(n(108),n(3)),N=function(e){var t=e.setShowLogin,n=e.myStorage,a=e.setCurrentUser,s=Object(c.useState)(!1),r=Object(b.a)(s,2),l=r[0],i=r[1],o=Object(c.useRef)(),d=Object(c.useRef)(),O=function(){var e=Object(j.a)(u.a.mark((function e(c){var s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s={username:o.current.value,password:d.current.value},e.prev=2,e.next=5,m.a.post("/users/login",s);case 5:r=e.sent,n.setItem("user",r.data.username),a(r.data.username),t(!1),i(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),i(!0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"login-form-container",children:Object(v.jsxs)("div",{className:"login-form-content",children:[Object(v.jsxs)("div",{className:"login-intro-content",children:[Object(v.jsx)("div",{className:"text3 heading",children:"Wander Map"}),Object(v.jsx)("div",{className:"text4 fade",children:"Hello there!"}),Object(v.jsx)("div",{className:"text4 fade",children:"Welcome Back"})]}),Object(v.jsxs)("form",{className:"login-form",onSubmit:O,children:[Object(v.jsx)("input",{ref:o,className:"login-input",type:"text",placeholder:"username"}),Object(v.jsx)("input",{ref:d,type:"password",className:"login-input",placeholder:"Password"}),Object(v.jsx)("button",{className:"btn",type:"submit",children:"Login"}),l&&Object(v.jsx)("span",{className:"failure",children:"Something! went wrong"}),Object(v.jsx)(g.a,{className:"logincancel",onClick:function(){t(!1)}})]})]})})},w=(n(115),function(e){var t=e.setShowRegister,n=Object(c.useState)(!1),a=Object(b.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(!1),i=Object(b.a)(l,2),o=i[0],d=i[1],O=Object(c.useRef)(),p=Object(c.useRef)(),h=Object(c.useRef)(),x=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:O.current.value,email:p.current.value,password:h.current.value},e.prev=2,e.next=5,m.a.post("/users/register",n);case 5:d(!1),r(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),d(!0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"register-form-container",children:Object(v.jsxs)("div",{className:"register-form-content",children:[Object(v.jsxs)("div",{className:"register-intro-content",children:[Object(v.jsx)("div",{className:"text3 heading",children:"Wander map"}),Object(v.jsx)("div",{className:"text4 fade",children:"Become a member"})]}),Object(v.jsxs)("form",{className:"register-form",onSubmit:x,children:[Object(v.jsx)("input",{ref:O,type:"text",className:"register-input",placeholder:"Username"}),Object(v.jsx)("input",{ref:p,type:"email",className:"register-input",placeholder:"Email"}),Object(v.jsx)("input",{ref:h,type:"password",className:"register-input",placeholder:"Password"}),Object(v.jsx)("button",{className:"btn",type:"submit",children:"Register"}),s&&Object(v.jsx)("span",{className:"success",children:"Successfull! You can register now"}),o&&Object(v.jsx)("span",{className:"failure",children:"Something! went wrong"})]}),Object(v.jsx)(g.a,{className:"registercancel",onClick:function(){t(!1)}})]})})});var S=function(){var e=window.localStorage,t=Object(c.useState)({width:"100%",height:"100%",latitude:29.625996,longitude:74.287491,zoom:5}),n=Object(b.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(e.getItem("user")),o=Object(b.a)(r,2),h=o[0],f=o[1],g=Object(c.useState)(null),S=Object(b.a)(g,2),k=S[0],y=S[1],C=Object(c.useState)(null),R=Object(b.a)(C,2),L=R[0],z=R[1],E=Object(c.useState)([]),J=Object(b.a)(E,2),_=J[0],A=J[1],D=Object(c.useState)(null),I=Object(b.a)(D,2),T=I[0],B=I[1],M=Object(c.useState)(null),Y=Object(b.a)(M,2),H=Y[0],P=Y[1],U=Object(c.useState)(0),W=Object(b.a)(U,2),X=W[0],q=W[1],F=Object(c.useState)(!1),Q=Object(b.a)(F,2),Z=Q[0],G=Q[1],V=Object(c.useState)(!1),K=Object(b.a)(V,2),$=K[0],ee=K[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/pins");case 3:t=e.sent,A(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var te=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:h,title:T,desc:H,rating:X,lat:L.lat,long:L.long},e.prev=2,e.next=5,m.a.post("/pins",n);case 5:c=e.sent,A([].concat(Object(l.a)(_),[c.data])),z(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)(d.c,Object(i.a)(Object(i.a)({},a),{},{mapboxApiAccessToken:"pk.eyJ1IjoidmFpYmhhdjc4OTkiLCJhIjoiY2tvMmQ1NnZ0MHQ3MTJ4cXdneHp6ZTJ5cCJ9.PYUntX44YAj4H4wGX7WjRg",onViewportChange:function(e){return s(e)},mapStyle:"mapbox://styles/vaibhav7899/cko2emzhu0beu18liq9tqnz04",onDblClick:function(e){var t=Object(b.a)(e.lngLat,2),n=t[0],c=t[1];null===h?ee(!0):z({lat:c,long:n})},transitionDuration:"300",children:[_.map((function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(d.a,{latitude:e.lat,longitude:e.long,offsetLeft:3.5*-a.zoom,offsetTop:7*-a.zoom,children:Object(v.jsx)(O.a,{onClick:function(){var t,n,c;t=e._id,n=e.lat,c=e.long,y(t),s(Object(i.a)(Object(i.a)({},a),{},{latitude:n,longitude:c,zoom:8}))},style:{fontSize:7*a.zoom,cursor:"pointer",color:e.username===h?"#61E8E1":"#EF8A17"}})}),null!==h&&e._id===k&&Object(v.jsx)(d.b,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return y(null)},anchor:"right",className:"popup",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("p",{className:"place",children:e.title}),Object(v.jsxs)("div",{className:"review__wrapper",children:[Object(v.jsx)("label",{className:"xtra",children:"Review"}),Object(v.jsx)("p",{className:"desc",children:e.desc})]}),Object(v.jsx)("label",{children:"Rating"}),Object(v.jsx)("div",{className:"star__wrapper",children:Array(e.rating).fill(Object(v.jsx)(p.a,{className:"star"}))}),Object(v.jsxs)("div",{className:"info",children:[Object(v.jsxs)("span",{children:["Creatd by ",Object(v.jsx)("b",{children:e.username})]}),Object(v.jsx)("span",{className:"date",children:Object(x.a)(e.createdAt)})]})]})}),L&&Object(v.jsx)(d.b,{latitude:L.lat,longitude:L.long,closeButton:!0,closeOnClick:!1,onClose:function(){return z(null)},anchor:"right",children:Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:te,children:[Object(v.jsx)("label",{children:"Title"}),Object(v.jsx)("input",{type:"text",placeholder:"Enter a tittle",onChange:function(e){B(e.target.value)}}),Object(v.jsx)("label",{children:"Review"}),Object(v.jsx)("textarea",{placeholder:"Share your thoughts and experience about this place",onChange:function(e){P(e.target.value)}}),Object(v.jsx)("label",{children:"Rating"}),Object(v.jsxs)("select",{onChange:function(e){q(e.target.value)},children:[Object(v.jsx)("option",{value:"1",children:"1"}),Object(v.jsx)("option",{value:"2",children:"2"}),Object(v.jsx)("option",{value:"3",children:"3"}),Object(v.jsx)("option",{value:"4",children:"4"}),Object(v.jsx)("option",{value:"5",children:"5"})]}),Object(v.jsx)("button",{className:"submit-button",type:"submit",children:"Create Pin"})]})})})]},e._id)})),h?Object(v.jsx)("button",{className:"btn logout",onClick:function(){e.removeItem("user"),f(null),console.log("Logged out successfully")},children:"Log out"}):Object(v.jsxs)("div",{className:"group",children:[Object(v.jsx)("button",{className:"btn login",onClick:function(){return ee(!$)},children:"Login"}),Object(v.jsx)("button",{className:"btn register",onClick:function(){return G(!Z)},children:"Register"})]}),Z&&Object(v.jsx)(w,{setShowRegister:G}),$&&Object(v.jsx)(N,{setShowLogin:ee,myStorage:e,setCurrentUser:f}),Object(v.jsx)("p",{className:"tut",children:"Double Click to add pin"})]}))})};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root"))},69:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.16e47a45.chunk.js.map