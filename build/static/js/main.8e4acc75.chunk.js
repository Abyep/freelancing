(this.webpackJsonpfreelancing=this.webpackJsonpfreelancing||[]).push([[0],{118:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(95),a(71)),s=a(72),i=a(82),u=a(80),d=a(48),p=a(40),m=a.n(p),h=a(41),f=a(53),v=a.n(f),g={getData:function(){return new Promise((function(e,t){v.a.defaults.headers={"Content-Type":"application/json"},v.a.get("https://reqres.in/api/users?page=1").then((function(a){200==a.status?e(a.data):t(new Error("error"))})).catch((function(e){console.log(e)}))}))}},E=m.a.mark(y),b=m.a.mark(w);function y(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)("GET_DATA",w);case 2:case"end":return e.stop()}}),E)}function w(e){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.a)(g.getData,e.payload);case 3:return t=a.sent,a.next=6,Object(h.b)({type:"SAVE_DATA",data:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(h.b)({type:"SAVE_DATA",error:a.t0});case 12:case"end":return a.stop()}}),b,null,[[0,8]])}var k=a(163),j=a(158),D=a(77),O=a.n(D),A=a(160),C=a(162),I=a(157),S=a(161),x=a(159),_=(a(118),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCategory=function(e){n.setState({category:e.target.value.toLowerCase()})},n.handleSearch=function(e){n.setState({searchInput:e.target.value})},n.search=function(){return r.a.createElement("div",{className:"searchDiv"},r.a.createElement(k.a,null,r.a.createElement(A.a,{variant:"outlined",select:!0,className:"categories",native:!0,onChange:n.handleCategory,label:"Category"},r.a.createElement("option",{"aria-label":"None",value:""}),n.state.categories.map((function(e,t){return r.a.createElement("option",{key:t,value:e},n.Capitalize(e.replace("_"," ")))})))),r.a.createElement(C.a,{className:"search",variant:"outlined",value:n.state.searchInput,placeholder:"Search",id:"standard-start-adornment",onChange:n.handleSearch,InputProps:{startAdornment:r.a.createElement(j.a,{position:"start"},r.a.createElement(O.a,null))}}))},n.handleId=function(e){n.setState({id:e})},n.state={data:[],filteredData:[],category:"",searchInput:"",categories:["first_name","last_name","email"],id:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;this.props.dispatch({type:"GET_DATA",payload:e})}},{key:"shouldComponentUpdate",value:function(e,t){return e.data.length,!0}},{key:"Capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state.filteredData.slice();return""!==this.state.searchInput&&(t=this.state.filteredData.filter((function(t){return-1!==t[e.state.category].toLowerCase().indexOf(e.state.searchInput.toLowerCase())}))),r.a.createElement("div",null,r.a.createElement(I.a,{className:"paper"},this.search(),r.a.createElement("div",{className:"parentDiv"},this.props.data&&t.map((function(t,a){return r.a.createElement("div",{key:t.id,className:"userDiv"},r.a.createElement("img",{src:t.avatar,className:"userIcon"}),r.a.createElement("div",{className:"userInfo"},r.a.createElement("div",null,t.first_name+" "+t.last_name),r.a.createElement("div",null,t.email)),r.a.createElement(x.a,{control:r.a.createElement(S.a,{value:e.state.id,checked:e.state.id==t.id,onClick:function(){return e.handleId(t.id)}})}))})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null!==e.data?{data:e.data,filteredData:e.data.data}:null}}]),a}(n.Component)),N=Object(d.b)((function(e){return{data:e.reducer.data}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(56),L={data:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_DATA":return Object(T.a)(Object(T.a)({},e),{},{data:t.data});default:return e}},V=a(78),z=a(81),B=a(28),G=a(79),J=a(14),U=Object(z.a)(),W=Object(B.c)({reducer:P}),q=Object(B.e)(W,Object(B.a)(U,V.logger));U.run(y),o.a.render(r.a.createElement(d.a,{store:q},r.a.createElement(G.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/home",exact:!0,component:N}),r.a.createElement(J.a,{path:"*",component:N}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(122)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.8e4acc75.chunk.js.map