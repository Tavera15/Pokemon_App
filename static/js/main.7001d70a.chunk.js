(this.webpackJsonppokemon_app=this.webpackJsonppokemon_app||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},105:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(79),a(32)),i=a.n(c),s=a(65),m=a(41),u=a(29),p=a(36),d=a.n(p),g=a(45),f=a(26),h=(a(99),a(145)),E=(a(100),a(101),function(){return r.a.createElement("div",{className:"loadingContainer"},r.a.createElement("img",{className:"loadingPikachu",src:"https://media2.giphy.com/media/kuWN0iF9BLQKk/source.gif",alt:"Pikachu"}),r.a.createElement("h1",{className:"loadingText"},"Loading..."))}),y=a(149),v=a(150),k=a(151),b=a(152),w=a(166);var x=function(e){var t=e.name,a=e.id,n=e.pokeTypes,l=e.sprite,o={root:{textAlign:"center",background:"linear-gradient(175deg, rgba(255,0,0,1) 24%, rgba(0,0,0,1) 25%, rgba(240,240,240,1) 26%)"},cardImage:{paddingTop:"100%",backgroundSize:"cover"}};return r.a.createElement(h.a,{item:!0,lg:2,md:4,sm:4,xs:12},r.a.createElement(y.a,{variant:"outlined",style:o.root},r.a.createElement(v.a,{title:t.toUpperCase(),subheader:n,avatar:r.a.createElement(w.a,{style:{backgroundColor:"black"}},a)}),r.a.createElement(k.a,{alt:t,image:l,style:o.cardImage}),r.a.createElement(b.a,{style:{width:"100%"},variant:"contained",color:"primary",href:"/Pokemon_App/"+t},"Open Page")))};var P=function(e){return r.a.createElement("div",null,e.isLoaded?r.a.createElement(h.a,{container:!0,spacing:window.innerWidth<=700?0:1,className:"listContainer"},e.pokemon.map((function(e,t){return r.a.createElement(x,{key:t+1,name:e.data.name,id:e.data.id,sprite:e.data.sprites.front_default,pokeType:1===e.data.types.length?e.data.types[0].type.name:e.data.types[1].type.name+"/"+e.data.types[0].type.name})}))):r.a.createElement(E,null))},A=(a(105),a(154)),j=a(66),O=a(156),W=a(160),N=a(159),_=a(155),C=a(157),S=a(164),I=a(158),T=a(153),L=[{id:"name",label:"Pokemon Moves",minWidth:"100%"}];var U=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(f.e)().pokemonName;r.a.useEffect((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://pokeapi.co/api/v2/pokemon/"+o);case 2:t=e.sent,console.log(t),l(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]);var c=Object(T.a)({root:{width:"100%"},container:{maxHeight:"100%"}})(),s=r.a.useState(0),p=Object(u.a)(s,2),g=p[0],v=p[1],b=r.a.useState(10),w=Object(u.a)(b,2),x=w[0],P=w[1];return r.a.createElement("div",null,200!==a.status?r.a.createElement(E,null):r.a.createElement("div",null,r.a.createElement(h.a,{item:!0,justify:"center",container:!0,lg:12,style:{backgroundColor:"white",textAlign:"center",padding:"5%"}},r.a.createElement(h.a,{container:!0,item:!0,alignItems:"center",lg:3,sm:6,xs:12,style:{display:"block",margin:"0 auto"}},r.a.createElement(y.a,{style:{margin:"0",height:"100%"}},r.a.createElement("h1",{style:{textAlign:"center"}},a.data.name.toUpperCase()),r.a.createElement(k.a,{image:a.data.sprites.front_default,alt:a.data.name,style:{paddingTop:"100%",backgroundSize:"cover"}}),r.a.createElement(A.a,null,1===a.data.types.length?a.data.types[0].type.name:a.data.types[1].type.name+"/"+a.data.types[0].type.name))),r.a.createElement(h.a,{container:!0,item:!0,lg:3,sm:6},r.a.createElement(j.a,{className:c.root},r.a.createElement(_.a,null,r.a.createElement(O.a,{style:{width:"100%"}},r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement(N.a,{style:{width:"100%"},align:"center"},"Pokemon Data"))),r.a.createElement(W.a,null,r.a.createElement(I.a,{style:{width:"100%"}},r.a.createElement(N.a,null,r.a.createElement("h4",{style:{textAlign:"left",margin:0}},"Pokemon ID:",r.a.createElement("span",{style:{float:"right"}},a.data.id)))),r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement("h4",{style:{textAlign:"left",margin:0}},"Weight:",r.a.createElement("span",{style:{float:"right"}},a.data.weight)))),r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement("h4",{style:{textAlign:"left",margin:0}},"Height:",r.a.createElement("span",{style:{float:"right"}},a.data.height)))),r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement("h4",{style:{textAlign:"left",margin:0}},"Base XP:",r.a.createElement("span",{style:{float:"right"}},a.data.base_experience)))),a.data.stats.map((function(e,t){return r.a.createElement(I.a,{key:t},r.a.createElement(N.a,null,r.a.createElement("h4",{style:{textAlign:"left",margin:0}},e.stat.name,":",r.a.createElement("span",{style:{float:"right"}},e.base_stat))))}))))))),r.a.createElement(h.a,{container:!0,item:!0,lg:6,sm:12},r.a.createElement(j.a,{className:c.root},r.a.createElement(_.a,{className:c.container},r.a.createElement(O.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(C.a,null,r.a.createElement(I.a,null,L.map((function(e){return r.a.createElement(N.a,{key:e.id,align:"center",style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(W.a,null,a.data.moves.slice(g*x,g*x+x).map((function(e,t){return r.a.createElement(I.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t},r.a.createElement(N.a,{align:"center"},e.move.name))}))))),r.a.createElement(S.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.data.moves.length,rowsPerPage:x,page:g,onChangePage:function(e,t){v(t)},onChangeRowsPerPage:function(e){P(+e.target.value),v(0)}}))))))},B=a(165),R=a(163),H=a(162),z=a(161);var D=function(){return r.a.createElement(H.a,{style:{position:"relative"}},r.a.createElement(z.a,null,r.a.createElement(B.a,{centered:!0,value:!1},r.a.createElement(R.a,{label:"Gen I",href:"/Pokemon_App"}))))};var J=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),a=t[0],n=t[1],l=r.a.useState(!1),o=Object(u.a)(l,2),c=o[0],p=o[1];return r.a.useEffect((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://pokeapi.co/api/v2/pokemon/?limit=151");case 2:return t=e.sent,a=t.data.results.map((function(e){return d.a.get(e.url)})),e.next=6,Promise.all(a).then((function(e){return n((function(t){return[].concat(Object(s.a)(t),[e])}))})).finally((function(e){return p(!0)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(g.a,null,r.a.createElement(g.a,null,a.map((function(e,t){return r.a.createElement(f.a,{key:t,path:"/Pokemon_App/:pokemonName",children:r.a.createElement(U,null)})}))),r.a.createElement(f.a,{exact:!0,path:"/Pokemon_App",component:function(){return r.a.createElement(P,{pokemon:a[0],isLoaded:c})}})))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Pokemon_App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Pokemon_App","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):G(t,e)}))}}()},74:function(e,t,a){e.exports=a(108)},79:function(e,t,a){},99:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.7001d70a.chunk.js.map