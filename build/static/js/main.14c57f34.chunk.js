(this["webpackJsonpfb-clone"]=this["webpackJsonpfb-clone"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),i=c(23),n=c.n(i),o=(c(55),c(12)),r=(c(56),c(57),c(98)),j=(c(58),c(14)),l=c(3),d=Object(s.createContext)(),b=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(l.jsx)(d.Provider,{value:Object(s.useReducer)(t,c),children:a})},p=function(){return Object(s.useContext)(d)},m=c(26),h=m.a.initializeApp({apiKey:"AIzaSyCHl7bTxqFmsgY8WhC24dFrdUKVhW5PuA8",authDomain:"facebook-clone-34731.firebaseapp.com",projectId:"facebook-clone-34731",storageBucket:"facebook-clone-34731.appspot.com",messagingSenderId:"166697772624",appId:"1:166697772624:web:36ed6f1016377009d79355",measurementId:"G-YGFCDF41C9"}).firestore(),u=m.a.auth(),O=new m.a.auth.GoogleAuthProvider,x=h;var f=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].user,a=(t[1],Object(s.useState)("")),i=Object(o.a)(a,2),n=i[0],d=i[1],b=Object(s.useState)(""),h=Object(o.a)(b,2),u=h[0],O=h[1];return Object(l.jsxs)("div",{className:"messageSender",children:[Object(l.jsxs)("div",{className:"messageSender__top",children:[Object(l.jsx)(r.a,{src:c.photoURL}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{value:n,onChange:function(e){return d(e.target.value)},className:"messagesender__input",placeholder:"What's on your mind, ".concat(c.displayName," ?")}),Object(l.jsx)("input",{value:u,onChange:function(e){return O(e.target.value)},placeholder:"Image URL (optional) "}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),x.collection("posts").add({message:n,timestamp:m.a.firestore.FieldValue.serverTimestamp(),profilePic:c.photoURL,username:c.displayName,image:u}),d(""),O("")},type:"submit",children:"Hidden submit"})]})]}),Object(l.jsxs)("div",{className:"messageSender__bottom",children:[Object(l.jsxs)("div",{className:"messageSender__option",children:[Object(l.jsx)(j.j,{style:{color:"red"}}),Object(l.jsx)("h3",{children:"Live video"})]}),Object(l.jsxs)("div",{className:"messageSender__option",children:[Object(l.jsx)(j.g,{style:{color:"green"}}),Object(l.jsx)("h3",{children:"Photo/Video"})]}),Object(l.jsxs)("div",{className:"messageSender__option",children:[Object(l.jsx)(j.d,{style:{color:"orange"}}),Object(l.jsx)("h3",{children:"Feeling/Activity"})]})]})]})};c(68),c(69);var g=function(e){var t=e.image,c=e.profileSrc,s=e.title;return Object(l.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"story",children:[Object(l.jsx)(r.a,{className:"story__avatar",src:c}),Object(l.jsx)("h4",{children:s})]})};var v=function(){return Object(l.jsxs)("div",{className:"storyReel",children:[Object(l.jsx)(g,{image:"https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",profileSrc:"https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",title:"Ben Schafer"}),Object(l.jsx)(g,{image:"https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/06/05155905/Lewis-Hamilton-PA6.jpg",profileSrc:"https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/06/05155905/Lewis-Hamilton-PA6.jpg",title:"Lewis Hamilton"}),Object(l.jsx)(g,{image:"https://www.supercars.net/blog/wp-content/uploads/2016/04/866236.jpg",profileSrc:"https://www.supercars.net/blog/wp-content/uploads/2016/04/866236.jpg",title:"Frank Veni"}),Object(l.jsx)(g,{image:"https://i.pinimg.com/originals/48/85/79/488579bb8dec2bca1d3012f0af4d298c.png",profileSrc:"https://i.pinimg.com/originals/48/85/79/488579bb8dec2bca1d3012f0af4d298c.png",title:"Rob Holland"}),Object(l.jsx)(g,{image:"https://shop.scheyden.com/images/companies/1/team-members/RobHolland/Team-MemberPage-RHollandM.jpg?1567702420403",profileSrc:"https://shop.scheyden.com/images/companies/1/team-members/RobHolland/Team-MemberPage-RHollandM.jpg?1567702420403",title:"Goon Deve3"})]})},_=c(43),w=c(35),N=c(44);c(70);var S=function(e){var t=e.profilePic,c=e.image,s=e.username,a=e.timestamp,i=e.message;return Object(l.jsxs)("div",{className:"post",children:[Object(l.jsxs)("div",{className:"post__top",children:[Object(l.jsx)(r.a,{src:t,className:"post__avatar"}),Object(l.jsxs)("div",{className:"post__topInfo",children:[Object(l.jsx)("h3",{children:s}),Object(l.jsx)("p",{children:new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString()})]})]}),Object(l.jsx)("div",{className:"post__bottom",children:Object(l.jsx)("p",{children:i})}),Object(l.jsx)("div",{className:"post__image",children:Object(l.jsx)("img",{src:c,alt:""})}),Object(l.jsxs)("div",{className:"post__options",children:[Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(_.a,{}),Object(l.jsx)("p",{children:"Like"})]}),Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(w.a,{}),Object(l.jsx)("p",{children:"Comment"})]}),Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(w.b,{}),Object(l.jsx)("p",{children:"Share"})]}),Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(N.a,{}),Object(l.jsx)(j.b,{})]})]})]})};var y=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){x.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(l.jsxs)("div",{className:"feed",children:[Object(l.jsx)(v,{}),Object(l.jsx)(f,{}),c.map((function(e){return Object(l.jsx)(S,{profilePic:e.data.profilePic,image:e.data.image,message:e.data.message,username:e.data.username,timestamp:e.data.timestamp},e.data.id)}))]})},k=(c(71),c(45)),F=c(36),I=c(22),C=c(97);var P=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(l.jsxs)("div",{className:"header__input",children:[Object(l.jsx)(F.b,{}),Object(l.jsx)("input",{type:"text",placeholder:"Search facebook"})]})]}),Object(l.jsxs)("div",{className:"header__center",children:[Object(l.jsx)("div",{className:"header__option header__option--active",children:Object(l.jsx)(k.a,{fontSize:"25px"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(F.a,{fontSize:"25px"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(j.h,{fontSize:"25px"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(I.e,{fontSize:"25px"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(I.b,{fontSize:"25px"})})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsxs)("div",{className:"header__info",children:[Object(l.jsx)(I.c,{src:c.photoURL,fontSize:"50px"}),Object(l.jsx)("h4",{children:"utterly_attah"})]}),Object(l.jsx)(C.a,{onClick:"",children:Object(l.jsx)(I.a,{})}),Object(l.jsx)(C.a,{children:Object(l.jsx)(j.c,{})}),Object(l.jsx)(C.a,{children:Object(l.jsx)(j.f,{})}),Object(l.jsx)(C.a,{children:Object(l.jsx)(j.b,{})})]})]})},R=(c(72),c(37)),L="SET_USER",H=function(e,t){switch(console.log(t),t.type){case L:return Object(R.a)(Object(R.a)({},e),{},{user:t.user});default:return e}};var T=function(){var e=p(),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsxs)("div",{className:"login__logo",children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(l.jsx)("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""})]}),Object(l.jsx)(C.a,{type:"submit",onClick:function(){u.signInWithPopup(O).then((function(e){c({type:L,user:e.user}),console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};c(73);var z=function(e){var t=e.src,c=e.Icon,s=e.title;return Object(l.jsxs)("div",{className:"sidebarRow",children:[t&&Object(l.jsx)(r.a,{src:t}),c&&Object(l.jsx)(c,{}),Object(l.jsx)("h4",{children:s})]})},A=(c(74),c(46)),D=c(47);var M=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)(z,{src:c.photoURL,title:c.displayName}),Object(l.jsx)(z,{Icon:j.e,title:"COVID-19 Information Center"}),Object(l.jsx)(z,{Icon:A.a,title:"Pages"}),Object(l.jsx)(z,{Icon:D.a,title:"Friends"}),Object(l.jsx)(z,{Icon:j.a,title:"Messanger"}),Object(l.jsx)(z,{Icon:I.d,title:"Marketplace"}),Object(l.jsx)(z,{Icon:j.i,title:"Videos"}),Object(l.jsx)(z,{Icon:j.b,title:"More"})]})};c(75);var U=function(){return Object(l.jsx)("div",{className:"widgets",children:Object(l.jsx)("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCodingTreeFoundation&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"})})};var V=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(l.jsx)("div",{className:"app",children:c?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{}),Object(l.jsxs)("div",{className:"app__body",children:[Object(l.jsx)(M,{}),Object(l.jsx)(y,{}),Object(l.jsx)(U,{})]})]}):Object(l.jsx)(T,{})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{initialState:{user:null},reducer:H,children:Object(l.jsx)(V,{})})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.14c57f34.chunk.js.map