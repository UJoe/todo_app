(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t(1),c=t.n(n),d=t(6),s=t.n(d),i=(t(13),t(2)),o=t(7),l=(t(14),t.p+"static/media/trash-alt-solid.6346df54.svg"),u=t.p+"static/media/plus-square-solid.bb533173.svg",p=function(e){return Object(r.jsxs)("div",{className:"dashboard-wrapper",children:[Object(r.jsxs)("div",{"data-dropid":e.id,className:"dashboard",style:{backgroundColor:e.color},onDragOver:function(e){e.preventDefault()},onDrop:e.dropCard,children:[Object(r.jsxs)("div",{className:"trash-create",children:[Object(r.jsx)("img",{id:"dd"+e.id,src:l,className:"trash-logo",alt:"Delete this dashboard",title:"Delete this dashboard",onClick:e.deleteDashboard}),Object(r.jsx)("button",{id:"cc"+e.id,className:"create-card",onClick:e.createCard,title:"Create a new card",children:"Create card"})]}),Object(r.jsx)("div",{className:"dashboard-header",children:Object(r.jsx)("input",{maxLength:"20",className:"dashboardName","data-key":e.id,defaultValue:e.title,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,id:["in-"+e.id]})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"cards",children:e.children})})]}),Object(r.jsx)("img",{className:"create-dashboard-icon",src:u,alt:"Create a new dashboard",title:"Create a new dashboard",onClick:e.createDashboard})]})},b=(t(15),t.p+"static/media/copy-regular.0ec8ada5.svg"),h=function(e){var a=Object(n.useRef)(null);return Object(r.jsxs)("div",{draggable:!0,onDragStart:function(a){e.dragCard(a,e.id)},className:"card",onClick:function(e){"DIV"===e.target.tagName&&a.current.classList.toggle("hide")},children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"copydeleteCard",children:[Object(r.jsx)("img",{id:"c"+e.id,src:b,className:"card-copy-logo",alt:"Duplicate this card",onClick:e.copyCard,title:"Duplicate this card"}),Object(r.jsx)("img",{id:"d"+e.id,src:l,className:"card-trash-logo",alt:"Delete this card",onClick:e.deleteCard,title:"Delete this card"})]}),Object(r.jsx)("input",{style:{backgroundColor:e.color},maxLength:"20",className:"cardName",defaultValue:e.name,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,id:"in-"+e.id})]}),Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{rows:"2",className:"description hide",defaultValue:e.description,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,ref:a,id:"id-"+e.id})})]})},j=(t(16),function(e,a,t){var r=Math.random()*(a-e)+e;return parseFloat(r.toFixed(t))});var g=function(){var e=["rgb(234, 66, 53)","rgb(66, 147, 159)","rgb(172, 146, 145)"],a=["rgb(250, 188, 5)","rgb(66, 134, 245)","rgb(52, 168, 83)"],t={dashboard:"Untitled Dashboard",color:e[j(0,2,0)],cards:[]},c=Object(n.useState)((function(){return[t]})),d=Object(o.a)(c,2),s=d[0],l=d[1],u=function(){s.push({dashboard:"Untitled Dashboard",color:e[j(0,2,0)],cards:[]}),l(Object(i.a)(s))},b=function(e){if(1!==s.length){var a=e.target.id.split("-"),t=parseInt(a[1]);s.splice(t,1),l(Object(i.a)(s))}},g=function(e){var t=e.target.id.split("-"),r=parseInt(t[1]);s[r].cards.push({name:"New Card "+(s[r].cards.length+1).toString(),description:"enter card description",color:a[j(0,2,0)]}),l(Object(i.a)(s))},m=function(e){var a=e.target.id.split("-"),t=parseInt(a[1]),r=parseInt(a[2]);s[t].cards.splice(r,1),l(Object(i.a)(s))},f=function(e){var a=e.target.id.split("-"),t=parseInt(a[1]),r=parseInt(a[2]),n=s[t].cards.length,c=s[t].cards[r];s[t].cards[n]={name:c.name,description:c.description,color:c.color},l(Object(i.a)(s))},C=function(e,a){e.dataTransfer.setData("id",a)},v=function(e){var a=function(e){do{if(void 0!==e.dataset.dropid)return e.dataset.dropid;e=e.parentElement}while(e.parentElement);return null}(e.target);if(null!==a){var t=a.split("-"),r=parseInt(t[1]),n=e.dataTransfer.getData("id").split("-"),c=parseInt(n[1]),d=parseInt(n[2]);s[r].cards.push(s[c].cards[d]),l(Object(i.a)(s)),s[c].cards.splice(d,1),l(Object(i.a)(s))}},O=function(e){e.preventDefault()},D=function(e){if("Enter"===e.key&&e.target.blur(),"Escape"===e.key){var a=e.target.id.split("-"),t=parseInt(a[2]),r=parseInt(a[3]),n=a[0][1],c="";c="d"===a[1]?s[t].dashboard:"n"===n?s[t].cards[r].name:s[t].cards[r].description,e.target.value=c}},x=function(e){!function(e){var a=e.id.split("-"),t=parseInt(a[2]),r=parseInt(a[3]),n=a[0][1],c=e.value;"d"===a[1]?s[t].dashboard=c:"n"===n?s[t].cards[r].name=c:s[t].cards[r].description=c}(e.target)};return Object(r.jsx)("div",{className:"App",children:s.map((function(e,a){return Object(r.jsx)(p,{color:e.color,id:"d-"+a,title:e.dashboard,onClick:O,onKeyDown:D,onBlur:x,createDashboard:u,deleteDashboard:b,createCard:g,dropCard:v,children:e.cards.map((function(e,t){return Object(r.jsx)(h,{color:e.color,id:"c-"+a+"-"+t,name:e.name,description:e.description,onClick:O,onKeyDown:D,onBlur:x,copyCard:f,deleteCard:m,dragCard:C},"c-"+a+"-"+t+e.name+Date.now())}))},"d-"+a+e.dashboard+s.length)}))})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,d=a.getTTFB;t(e),r(e),n(e),c(e),d(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.d5be1fed.chunk.js.map