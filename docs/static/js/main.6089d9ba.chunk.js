(this["webpackJsonptrello-react"]=this["webpackJsonptrello-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=a(9),i=a(11),o=a(1),d=a(6),m=function(e){var t=function(){e.handleAction({action:"move-card-up",cardId:e.card.id})},a=function(){e.handleAction({action:"move-card-down",cardId:e.card.id})},n=function(){return e.card.tags.map((function(e){return r.a.createElement("span",{key:e,className:"badge badge-secondary bg-success mr-1"},e)}))};return r.a.createElement(d.b,{to:"/card/".concat(e.card.id)},r.a.createElement("article",{className:"app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm",title:"Abrir la tarjeta"},r.a.createElement("div",null,n()),r.a.createElement("div",null,r.a.createElement("h3",{className:"h6"},e.card.title)),r.a.createElement("div",{className:"text-black-50"},r.a.createElement("small",{className:"pr-2 fas fa-align-left"}),r.a.createElement("small",{className:"far fa-check-square"}),r.a.createElement("small",{title:"Subtareas completadas: 3 de 5"}," 3/5")),r.a.createElement("div",{className:"app-card-btns btn-group-vertical btn-group-sm"},r.a.createElement("button",{type:"button",className:"btn btn-light text-muted border shadow-sm app-card-up-button",title:"Mover esta tarjeta hacia arriba",onClick:t},r.a.createElement("span",{className:"fas fa-arrow-up"})),r.a.createElement("button",{type:"button",className:"btn btn-light text-muted border shadow-sm app-card-down-button",title:"Mover esta tarjeta hacia abajo",onClick:a},r.a.createElement("span",{className:"fas fa-arrow-down"})))))},u=function(e){var t=function(t){e.handleAction({action:"set-list-title",value:t.currentTarget.value,listId:e.list.id})},a=function(){e.handleAction({action:"delete-list",listId:e.list.id})},n=function(){e.handleAction({action:"move-list-to-left",listId:e.list.id})},l=function(){e.handleAction({action:"move-list-to-right",listId:e.list.id})},c=function(){e.handleAction({action:"add-card",listId:e.list.id})};return r.a.createElement("div",{className:"app-list"},r.a.createElement("div",{className:"p-1 rounded-sm bg-primary shadow"},r.a.createElement("form",{className:"app-list-form align-middle p-1 position-relative"},r.a.createElement("input",{className:"app-list-input form-control form-control-sm",placeholder:"Tareas importantes",type:"text",value:e.list.title,title:"Editar el t\xedtulo de la lista",onChange:t}),r.a.createElement("div",{className:"app-list-options"},r.a.createElement("span",{className:"pl-2 pr-2 text-white-50 fas fa-ellipsis-v"}),r.a.createElement("div",{className:"app-list-btns btn-group btn-group-sm"},r.a.createElement("button",{type:"button",className:"btn btn-light text-muted border shadow-sm",title:"Borrar esta tarjeta",onClick:a},r.a.createElement("span",{className:"fas fa-trash-alt"})),r.a.createElement("button",{type:"button",className:"btn btn-light text-muted border shadow-sm app-list-left-button",title:"Mover esta lista hacia la izquierda",onClick:n},r.a.createElement("span",{className:"fas fa-arrow-left"})),r.a.createElement("button",{type:"button",className:"btn btn-light text-muted border shadow-sm app-list-right-button",title:"Mover esta lista hacia la derecha",onClick:l},r.a.createElement("span",{className:"fas fa-arrow-right"}))))),e.list.cards.map((function(t){return r.a.createElement(m,{key:t.id,card:t,handleAction:e.handleAction})})),r.a.createElement("button",{type:"button",className:"ml-1 btn btn-primary btn-sm text-white-50",title:"A\xf1adir una nueva tarjeta",onClick:c},r.a.createElement("span",{className:"fas fa-plus"})," A\xf1adir otra tarjeta")))},p=function(e){var t=function(){e.handleAction({action:"add-list"})};return r.a.createElement("main",{className:"app-board d-flex flex-nowrap"},e.list.map((function(t){return r.a.createElement(u,{key:t.id,list:t,handleAction:e.handleAction})})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm",title:"A\xf1adir una nueva lista",onClick:t},r.a.createElement("span",{className:"fas fa-plus"}))))},f=function(e){var t=function(t){e.handleAction({action:"set-card-"+t.currentTarget.id,value:t.currentTarget.value,cardId:e.card.id})},a=function(){e.handleAction({action:"delete-card",cardId:e.card.id})},n=function(e,a){return r.a.createElement("div",{className:"custom-control custom-checkbox mb-2"},r.a.createElement("input",{className:"custom-control-input",type:"checkbox",checked:a,id:"subtask-1",onChange:t}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"subtask-1"},e))},l=function(){return e.card.tags.map((function(e){return r.a.createElement("span",{key:e,className:"badge badge-secondary bg-success mr-1"},e)}))};return r.a.createElement("div",{className:"app-edit modal show",tabIndex:"-1"},r.a.createElement("section",{className:"modal-dialog modal-dialog-centered modal-lg"},r.a.createElement("div",{className:"modal-content bg-light shadow border-0"},r.a.createElement("form",null,r.a.createElement("div",{className:"modal-header border-bottom-0"},r.a.createElement("h5",{className:"modal-title d-flex w-100"},r.a.createElement("span",{className:"fas fa-columns mt-3 mr-2 text-muted"}),r.a.createElement("div",{className:"w-100"},r.a.createElement("input",{className:"app-edit-title form-control mb-0 border-0",id:"title",placeholder:"Filtrar tarjetas",type:"text",value:e.card.title,onChange:t}),r.a.createElement("small",{className:"app-edit-subtitle d-block mt-0 text-muted"},"en la lista ",r.a.createElement("strong",null,"Por hacer")))),r.a.createElement(d.b,{to:"/"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},r.a.createElement("span",null,"\xd7")))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-9 col-8"},r.a.createElement("div",{className:"container-fluid mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1 pl-0 pr-0"},r.a.createElement("span",{className:"fas fa-align-left text-muted"})),r.a.createElement("div",{className:"col-11 pl-0 pr-0"},r.a.createElement("h6",{className:"h6"},"Descripci\xf3n"),r.a.createElement("textarea",{className:"app-edit-textarea",id:"description",value:e.card.description,onChange:t})))),r.a.createElement("div",{className:"container-fluid mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1 pl-0 pr-0"},r.a.createElement("span",{className:"far fa-check-square text-muted"})),r.a.createElement("div",{className:"col-11 pl-0 pr-0"},r.a.createElement("h6",{className:"h6 mb-3"},"Subtareas: completadas 3 de 5"),r.a.createElement("div",{className:"app-edit-progress progress mb-3"},r.a.createElement("div",{className:"progress-bar",style:{width:"60%"}})),n("Unificar eventos",!0),n("Unificar las clases de la cabecera",!1),n("Unificar las clases de las tarjetas",!1),n("Unificar las funciones de datos",!1),n("Unificar las estilos",!0))))),r.a.createElement("div",{className:"col-xl-3 col-4"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("h6",{className:"h6 text-uppercase"},"Etiquetas"),l()),r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{className:"h6 text-uppercase"},"Acciones"),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm mb-2 w-100 text-left"},r.a.createElement("span",{className:"fas fa-copy mr-2"})," Duplicar"),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm mb-2 w-100 text-left"},r.a.createElement("span",{className:"fas fa-share-alt mr-2"})," Mover"),r.a.createElement(d.b,{to:"/",type:"button",className:"btn btn-primary btn-sm mb-2 w-100 text-left",onClick:a},r.a.createElement("span",{className:"fas fa-trash-alt mr-2"})," Borrar")))))))))},b=function(e){var t=function(){e.toggleMenu()},a=function(t){e.handleFilter(t.target.value)};return r.a.createElement("header",{className:"app-header bg-primary mb-3 d-flex justify-content-between align-items-center shadow"},r.a.createElement("h1",{className:"app-header-title h3 text-white pl-3 pt-1 mr-4 font-weight-light"},"Gestor de proyectos"),r.a.createElement("form",{className:"app-header-form p-2 d-flex justify-content-end"},r.a.createElement("div",{className:"app-header-input input-group input-group-sm mr-2"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text bg-white border-right-0 text-primary"},r.a.createElement("span",{className:"fas fa-search"}))),r.a.createElement("input",{type:"text",className:"app-header-search form-control border-left-0",title:"Filtrar las tareas",value:e.filterText,onChange:a}))),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm text-white-50",title:"Abrir el men\xfa",onClick:t},r.a.createElement("span",{className:"fas fa-columns"}))))},h=function(e){var t=function(){e.toggleMenu()},a=function(e){return r.a.createElement("h6",{className:"h5",key:"title"+e},r.a.createElement("span",{className:"badge badge-secondary bg-success"},e))},n=function(e,t){return r.a.createElement("ul",{key:"ul"+t},e.map((function(e){return l(e)})))},l=function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("small",null,e.title))};return r.a.createElement("section",{className:e.isMenuOpen?"app-menu show":"app-menu"},r.a.createElement("div",{className:"app-menu-inner bg-light p-2 shadow"},r.a.createElement("header",{className:"d-flex justify-content-between align-items-start mb-4"},r.a.createElement("h2",{className:"h4 font-weight-light"},"Men\xfa"),r.a.createElement("button",{type:"button",className:"close pl-2 pr-2 pb-1",onClick:t},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("main",null,r.a.createElement("h5",{className:"h5"},"Tareas por etiquetas"),function(){var t=[];for(var r in e.data)t.push(a(r)),t.push(n(e.data[r],r));return t}())))},E=function(){return fetch("./api/board.json").then((function(e){return e.json()}))},v=function(){var e=localStorage.getItem("data");return JSON.parse(e)},g=function(e){localStorage.setItem("data",JSON.stringify(e))},N=function(){return null!==localStorage.getItem("data")},y=a(15),w=function(e,t){if(e&&e.board){var a,n=Object(y.a)(e.board.list);try{for(n.s();!(a=n.n()).done;){var r,l=a.value,c=Object(y.a)(l.cards);try{for(c.s();!(r=c.n()).done;){var s=r.value;if(s.id===t)return s}}catch(i){c.e(i)}finally{c.f()}}}catch(i){n.e(i)}finally{n.f()}}},x=function(e,t){return e.board.list.findIndex((function(e){return e.id===t}))},C=function(e,t){for(var a=0;a<e.board.list.length;a+=1){if(e.board.list[a].cards.find((function(e){return e.id===t})))return a}},k=function(e,t){for(var a=0;a<e.board.list.length;a+=1){var n=e.board.list[a].cards.findIndex((function(e){return e.id===t}));if(n>=0)return n}},j=function(){return Date.now()},I={getCard:w,getListOfCard:function(e,t){return e.board.list[C(e,t)]},filter:function(e,t){return t=t.toLowerCase(),e.map((function(e){var a=Object(s.a)({},e);return a.cards=a.cards.filter((function(e){return!0===e.title.toLowerCase().includes(t)})),a}))},groupCardByTags:function(e){return e.board.list.reduce((function(e,t){return t.cards.forEach((function(t){t.tags.forEach((function(a){e[a]=e[a]||[],e[a].push(t)}))})),e}),{})},addList:function(e){e.board.list.push({id:"list-"+j(),title:"",cards:[]})},deleteList:function(e,t){var a=x(e,t);e.board.list.splice(a,1)},moveListToLeft:function(e,t){var a=x(e,t),n=e.board.list.splice(a,1);e.board.list.splice(a-1,0,n[0])},moveListToRight:function(e,t){var a=x(e,t),n=e.board.list.splice(a,1);e.board.list.splice(a+1,0,n[0])},setListTitle:function(e,t,a){var n=x(e,t);e.board.list[n].title=a},addCard:function(e,t){var a=x(e,t);e.board.list[a].cards.push({id:"card-"+j(),title:"Nueva tarjeta",description:"",tags:[]})},deleteCard:function(e,t){var a=C(e,t),n=k(e,t);e.board.list[a].cards.splice(n,1)},existsCard:function(e,t){return!!w(e,t)},moveCardUp:function(e,t){var a=C(e,t),n=k(e,t),r=e.board.list[a].cards.splice(n,1);e.board.list[a].cards.splice(n-1,0,r[0])},moveCardDown:function(e,t){var a=C(e,t),n=k(e,t),r=e.board.list[a].cards.splice(n,1);e.board.list[a].cards.splice(n+1,0,r[0])},setCardTitle:function(e,t,a){w(e,t).title=a},setCardDescription:function(e,t,a){w(e,t).description=a}};a(30);var A=function(){var e=Object(n.useState)({board:{list:[]}}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),d=Object(i.a)(c,2),m=d[0],u=d[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),x=w[0],C=w[1];Object(n.useEffect)((function(){if(N()){var e=v();l(e)}else E().then(l)}),[]),Object(n.useEffect)((function(){g(a)}));var k=function(){u(!m)},j=function(e){"add-list"===e.action?I.addList(a):"delete-list"===e.action?I.deleteList(a,e.listId):"move-list-to-left"===e.action?I.moveListToLeft(a,e.listId):"move-list-to-right"===e.action?I.moveListToRight(a,e.listId):"set-list-title"===e.action?I.setListTitle(a,e.listId,e.value):"add-card"===e.action?I.addCard(a,e.listId):"delete-card"===e.action?I.deleteCard(a,e.cardId):"set-card-title"===e.action?I.setCardTitle(a,e.cardId,e.value):"set-card-description"===e.action?I.setCardDescription(a,e.cardId,e.value):"move-card-up"===e.action?I.moveCardUp(a,e.cardId):"move-card-down"===e.action&&I.moveCardDown(a,e.cardId),l(Object(s.a)({},a))};return r.a.createElement("div",{className:"app"},r.a.createElement(b,{filterText:x,toggleMenu:k,handleFilter:function(e){C(e)}}),r.a.createElement(p,{list:a.board?I.filter(a.board.list,x):[],handleAction:j}),r.a.createElement(h,{isMenuOpen:m,toggleMenu:k,data:I.groupCardByTags(a)}),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/card/:id",render:function(e){var t=e.match.params.id;if(I.existsCard(a,t)){var n=I.getCard(a,t),l=I.getListOfCard(a,t);return r.a.createElement(f,{card:n,list:l,handleAction:j})}}})))};c.a.render(r.a.createElement(d.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6089d9ba.chunk.js.map