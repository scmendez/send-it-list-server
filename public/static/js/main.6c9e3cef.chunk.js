(this["webpackJsonpsend-it-list-client"]=this["webpackJsonpsend-it-list-client"]||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},72:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),s=n(19),a=n.n(s),i=(n(52),n(6)),l=n(45),j=n(10),u=n(7),b=(n(53),n(54),n(9)),d=n.n(b),h="https://send-it-list.herokuapp.com/api",p=n(96),m=n(8),O=(n(72),function(e){return Object(c.jsx)(p.a,{expand:"true",className:"nav-bar",children:e.loggedInClimber?Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)(m.b,{to:"/home",className:"btn home",children:"Home"}),Object(c.jsx)(m.b,{to:"/edit-profile",className:"btn edit-profile",children:"Edit Profile"}),Object(c.jsx)("button",{onClick:e.onLogout,className:"btn logout",children:"Logout"})]}):Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)(m.b,{to:"/sign-in",className:"btn sign-in",children:"Sign In"}),Object(c.jsx)(m.b,{to:"/sign-up",className:"btn sign-up",children:"Sign Up"})]})})}),x=n(97),f=n(99),g=(n(78),function(e){return e.loggedInClimber?Object(c.jsx)(u.a,{to:"/home"}):Object(c.jsxs)(x.a,{onSubmit:e.onSignUp,className:"form-styling sign-up-form",children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{type:"text",className:"form-control",id:"usernameInput",name:"username",placeholder:"Username"})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{type:"email",className:"form-control",id:"emailInput",name:"email","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)(x.a.Control,{type:"password",className:"form-control",id:"passwordInput",name:"password",placeholder:"Password"}),Object(c.jsx)("br",{}),Object(c.jsx)(x.a.Text,{id:"passwordRequirements",className:"form-text password-req",children:"Password requirements: Minimum 8 characters, a number, a special character, an uppercase letter, and a lowercase letter."})]}),Object(c.jsx)(f.a,{type:"submit",className:"btn btn-primary",children:"Submit"})]})}),v=(n(80),function(e){return e.loggedInClimber?Object(c.jsx)(u.a,{to:"/home"}):Object(c.jsxs)(x.a,{onSubmit:e.onSignIn,className:"form-styling sign-in-form",children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{onChange:e.onUnmount,type:"email",className:"form-control",id:"emailInput",name:"email","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{name:"password",type:"password",className:"form-control",id:"passwordInput",placeholder:"Password"})}),Object(c.jsx)(f.a,{type:"submit",className:"btn btn-primary",children:"Submit"}),e.errorMessage?Object(c.jsx)("p",{style:{color:"red"},children:e.errorMessage}):null]})}),N=n(91),C=n(92),y=(n(81),function(e){var t=Object(r.useState)(e.loggedInClimber?e.loggedInClimber:null),n=Object(j.a)(t,2),o=n[0],s=n[1];return console.log("propsloggedinclimber",o),Object(r.useEffect)((function(){var t=e.loggedInClimber?e.loggedInClimber._id:null;t&&d.a.get("".concat(h,"/climberInfo/").concat(t),{withCredentials:!0}).then((function(e){console.log("axios climber esponse",e.data),s(e.data)}))}),[]),Object(r.useEffect)((function(){var t=o;console.log("CDU",t),e.loggedInClimber&&!t&&s(e.loggedInClimber)})),o?Object(c.jsx)("div",{children:Object(c.jsxs)(N.a,{fluid:!0,children:[Object(c.jsx)(C.a,{className:"profile-photo",src:"/images/defaultProfilePhoto.png",alt:"profile pic",roundedCircle:!0}),o?Object(c.jsxs)("h2",{children:["Hello, ",o.username,"!"]}):null,Object(c.jsx)(f.a,{size:"lg",className:"proj-btn",children:Object(c.jsx)(m.b,{to:"/current-projects",className:"proj-links",children:"Current Projects"})}),Object(c.jsx)("br",{}),Object(c.jsx)(f.a,{size:"lg",className:"proj-btn",children:Object(c.jsx)(m.b,{to:"/future-projects",className:"proj-links",children:"Potential Projects"})}),Object(c.jsx)("br",{}),Object(c.jsx)(f.a,{size:"lg",className:"proj-btn",children:Object(c.jsx)(m.b,{to:"/sent-projects",className:"proj-links",children:"Sent Projects"})}),Object(c.jsx)("br",{}),Object(c.jsx)(f.a,{size:"lg",className:"search-btn",children:Object(c.jsx)(m.b,{to:"/search-routes",className:"search-link",children:"Search routes"})})]})}):Object(c.jsx)(u.a,{to:"/sign-up"})}),S=(n(82),function(e){var t=Object(r.useState)(e.loggedInClimber),n=Object(j.a)(t,2),s=n[0],a=n[1];console.log("props",e.loggedInClimber),Object(r.useEffect)((function(){var t=e.loggedInClimber?e.loggedInClimber._id:null;console.log("climber",t),t&&d.a.get("".concat(h,"/climberInfo/").concat(t),{withCredentials:!0}).then((function(e){console.log("axios climber esponse",e.data),a(e.data)}))}),[]),Object(r.useEffect)((function(){var t=s;console.log("CDU",t),e.loggedInClimber&&!t&&a(e.loggedInClimber)}));if(!s)return null;console.log("SANDRA HERE",s);var i=s.username;return Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsxs)(x.a,{onSubmit:function(t){e.onUsernameEdit(t,s)},className:"edit-username-form",children:[Object(c.jsx)("label",{children:"Username: "}),Object(c.jsx)("input",{onChange:function(e){var t=JSON.parse(JSON.stringify(s));t.username=e.target.value,a(t)},type:"text",value:i,name:"username"}),Object(c.jsx)("button",{type:"submit",className:"save-username-btn",children:"Save username edit"})]}),Object(c.jsx)("hr",{})]})}),I=n(98),w=(n(83),function(e){var t=e.myProjects;return Object(c.jsx)(o.a.Fragment,{children:t.map((function(e){return Object(c.jsx)(N.a,{className:"route-card",children:Object(c.jsxs)(I.a,{fluid:"true",children:[Object(c.jsx)(I.a.Title,{children:e.routeName}),Object(c.jsx)(I.a.Subtitle,{className:"mb-2 text-muted",children:e.routeType}),Object(c.jsxs)(I.a.Text,{children:["Personal Notes: ",e.personalNotes?Object(c.jsx)("p",{children:e.personalNotes}):Object(c.jsx)("p",{children:"No notes yet!"})]}),Object(c.jsx)(m.b,{to:"/details/".concat(e._id),children:"More info"})]})},e._id)}))})}),R=n(93),E=n(100),P=n(94),D=n(95),T=(n(84),n(16)),U=n.n(T),k=function(e){var t=e.searchedCity?Object.values(e.searchedCity):[34.0522,-118.2437];Object(r.useEffect)((function(){delete U.a.Icon.Default.prototype._getIconUrl,U.a.Icon.Default.mergeOptions({iconRetinaUrl:n(85),iconUrl:n(86),shadowUrl:n(87)})}),[]),Object(r.useEffect)((function(){return e.onUnmount}),[]);var s=e.searchedRoutesResults||[];return console.log("within searchroutes js",s),Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)("h1",{children:"Search Routes"}),Object(c.jsxs)("form",{onSubmit:e.onRouteSearch,children:[Object(c.jsx)("input",{type:"text",name:"location",placeholder:"Location"}),Object(c.jsxs)("select",{name:"routeType",children:[Object(c.jsx)("option",{value:"Boulder",children:"Boulder"}),Object(c.jsx)("option",{value:"Sport",children:"Sport"}),Object(c.jsx)("option",{value:"Trad",children:"Trad"})]}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]}),s.length?Object(c.jsxs)(R.a,{style:{width:"900px",height:"400px"},center:t,zoom:13,scrollWheelZoom:!1,children:[Object(c.jsx)(E.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.map((function(t,n){var r=[t.latitude,t.longitude],o=U.a.icon({iconUrl:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-32.png"});return Object(c.jsx)(P.a,{icon:o,position:r,children:Object(c.jsxs)(D.a,{children:[Object(c.jsx)("b",{children:"Name: "}),t.name,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Type: "}),t.type,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Rating: "}),t.rating,Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:t.url,target:"_blank",children:"More details on MountainProject"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){e.onAddRoute(t.id)},children:"Add route"})]})},t.id)}))]}):null]})},A=function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),o=n[0],s=n[1];Object(r.useEffect)((function(){var t=e.match.params.routeDbId;d.a.get("".concat(h,"/details/").concat(t),{withCredentials:!0}).then((function(e){console.log("routedbid response",e),s(e.data)}))}),[]);var a=o._id,i=o.routeName,l=o.routeType,u=o.routeRating,b=o.routePitches,p=o.routeLocation,O=o.personalNotes,x=o.dateAccomplished;return Object(c.jsxs)("div",{children:["Route Name: ",i,Object(c.jsx)("br",{}),"Route Type: ",l,Object(c.jsx)("br",{}),"Route Rating: ",u,Object(c.jsx)("br",{}),"Boulder"==l?null:Object(c.jsxs)("p",{children:["Route Pitches: ",b]}),Object(c.jsx)("br",{}),p,Object(c.jsx)("br",{}),"Personal Notes: ",O,Object(c.jsx)("br",{}),"Date Accomplished: ",x,Object(c.jsx)("br",{}),Object(c.jsx)(m.b,{to:"/edit/".concat(a),children:Object(c.jsx)("button",{children:"Edit"})}),Object(c.jsx)("button",{onClick:function(){e.onDelete(a)},children:"Delete"})]})},_=function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),o=n[0],s=n[1];Object(r.useEffect)((function(){var t=e.match.params.routeDbId;d.a.get("".concat(h,"/details/").concat(t),{withCredentials:!0}).then((function(e){console.log("routedbid response",e),s(e.data)}))}),[]);var a=o.routeName,i=o.routeType,l=o.routeRating,u=o.routePitches,b=o.routeLocation,p=o.personalNotes,m=o.dateAccomplished,O=o.listType;return Object(c.jsxs)("form",{onSubmit:function(t){e.onRouteEdit(t,o)},children:["Route Name: ",a,Object(c.jsx)("br",{}),"Route Type: ",i,Object(c.jsx)("br",{}),"Route Rating: ",l,Object(c.jsx)("br",{}),"Boulder"==i?null:Object(c.jsxs)("p",{children:["Route Pitches: ",u]}),Object(c.jsx)("br",{}),b,Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Personal Notes: "}),Object(c.jsx)("input",{name:"personalNotes",onChange:function(e){var t=JSON.parse(JSON.stringify(o));t.personalNotes=e.target.value,s(t)},type:"text",value:p}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Date Accomplished "}),Object(c.jsx)("input",{name:"dateAccomplished",type:"text",value:m}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"List "}),Object(c.jsxs)("select",{name:"listType",children:[Object(c.jsx)("option",{value:O,children:O}),Object(c.jsx)("option",{value:"current",children:"Current"}),Object(c.jsx)("option",{value:"future",children:"Future"}),Object(c.jsx)("option",{value:"sent",children:"Sent"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Edit"})]})},L=Object(u.h)((function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],o=t[1],s=Object(r.useState)(null),a=Object(j.a)(s,2),b=a[0],p=a[1],m=Object(r.useState)([]),x=Object(j.a)(m,2),f=x[0],N=x[1],C=Object(r.useState)([]),I=Object(j.a)(C,2),R=I[0],E=I[1],P=Object(r.useState)(null),D=Object(j.a)(P,2),T=D[0],U=D[1],L=Object(u.g)();Object(r.useEffect)((function(){n||d.a.get("".concat(h,"/climber"),{withCredentials:!0}).then((function(e){console.log("Check here",e.data),o(e.data)})),d.a.get("".concat(h,"/myProjects"),{withCredentials:!0}).then((function(e){N(e.data)}))}),[]);var F=function(e){e.preventDefault();var t=e.target,n=t.username,c=t.email,r=t.password;d.a.post("".concat(h,"/signup"),{username:n.value,email:c.value,password:r.value},{withCredentials:!0}).then((function(e){o(e.data),L.push("/home")}))},M=function(e){e.preventDefault();var t=e.target,n=t.email,c=t.password;d.a.post("".concat(h,"/signin"),{email:n.value,password:c.value},{withCredentials:!0}).then((function(e){o(e.data),L.push("/home")})).catch((function(e){p(e.response.data.error)}))},z=function(e,t){e.preventDefault();var n=e.target.username;d.a.patch("".concat(h,"/editUsername/").concat(t._id),{username:n.value},{withCredentials:!0}).then((function(e){console.log("HEREEEE",e),o(e.data),L.push("/home")}))},B=function(e,t){console.log("profile photo edit")},H=function(e){e.preventDefault();var t=e.target,n=t.location,c=t.routeType;console.log(c.value),d.a.get("".concat(h,"/mapSearch/").concat(n.value),{withCredentials:!0}).then((function(e){var t=e.data.routesResponse.routes;E(t.filter((function(e){return e.type===c.value}))),U(e.data.cityLatLon),console.log("within function",R)}))},J=function(e){d.a.get("".concat(h,"/add-climbing-route/").concat(e),{withCredentials:!0}).then((function(e){N.apply(void 0,Object(l.a)(f).concat([e])),L.push("/home")}))},q=function(){E(null)},W=function(e){d.a.delete("".concat(h,"/delete/").concat(e),{withCredentials:!0}).then((function(){var t=f.filter((function(t){return t._id!==e}));N(t),L.push("/home")}))},Z=function(e,t){e.preventDefault(),console.log("routeDbId",t._id);var n=e.target,c=n.personalNotes,r=n.dateAccomplished,o=n.listType;d.a.patch("".concat(h,"/edit/").concat(t._id),{personalNotes:c.value,dateAccomplished:r.value,listType:o.value},{withCredentials:!0}).then((function(){var e=f.map((function(e){return e._id==t._id&&(e=t),e}));N(e),L.push("/home")}))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Send-It List"}),Object(c.jsx)(O,{onLogout:function(){d.a.post("".concat(h,"/logout"),{},{withCredentials:!0}).then((function(){o(null),L.push("/")}))},loggedInClimber:n}),Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{exact:!0,path:"/",render:function(e){return Object(c.jsx)(y,Object(i.a)(Object(i.a)({},e),{},{loggedInClimber:n}))}}),Object(c.jsx)(u.b,{path:"/sign-up",render:function(e){return Object(c.jsx)(g,Object(i.a)(Object(i.a)({onSignUp:F},e),{},{loggedInClimber:n}))}}),Object(c.jsx)(u.b,{path:"/sign-in",render:function(e){return Object(c.jsx)(v,Object(i.a)(Object(i.a)({onSignIn:M},e),{},{errorMessage:b}))}}),Object(c.jsx)(u.b,{path:"/home",render:function(){return Object(c.jsx)(y,{loggedInClimber:n})}}),Object(c.jsx)(u.b,{path:"/edit-profile",render:function(e){return Object(c.jsx)(S,Object(i.a)(Object(i.a)({},e),{},{loggedInClimber:n,onUsernameEdit:z,onProfilePhotoEdit:B}))}}),Object(c.jsx)(u.b,{path:"/current-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:f.filter((function(e){return"current"===e.listType}))}))}}),Object(c.jsx)(u.b,{path:"/future-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:f.filter((function(e){return"future"===e.listType}))}))}}),Object(c.jsx)(u.b,{path:"/sent-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:f.filter((function(e){return"sent"===e.listType}))}))}}),Object(c.jsx)(u.b,{path:"/search-routes",render:function(e){return Object(c.jsx)(k,Object(i.a)(Object(i.a)({},e),{},{onRouteSearch:H,onAddRoute:J,searchedRoutesResults:R,searchedCity:T,onUnmount:q}))}}),Object(c.jsx)(u.b,{path:"/details/:routeDbId",render:function(e){return Object(c.jsx)(A,Object(i.a)(Object(i.a)({},e),{},{onDelete:W}))}}),Object(c.jsx)(u.b,{path:"/edit/:routeDbId",render:function(e){return Object(c.jsx)(_,Object(i.a)(Object(i.a)({},e),{},{onRouteEdit:Z}))}})]})]})})),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};a.a.render(Object(c.jsx)(m.a,{children:Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(L,{})})}),document.getElementById("root")),F()}},[[88,1,2]]]);
//# sourceMappingURL=main.6c9e3cef.chunk.js.map