(this.webpackJsonpcreate=this.webpackJsonpcreate||[]).push([[0],{16:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(17),r=c.n(s),i=c(7),n=c(14),l=c(2),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,status:e.status,species:e.species,origin:e.origin.name,episode:e.episode.length}}))}))},o={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},m=c.p+"static/media/RickAndMorty.1f3156d3.png",h=c(0),d=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("article",{className:"character__li--article",children:[Object(h.jsx)("img",{className:"character__li--article-img",src:e.image,alt:e.name}),Object(h.jsxs)("div",{className:"character__li--article-info",children:[Object(h.jsx)("h2",{className:"character__li--article-info-name",children:e.name}),Object(h.jsx)("p",{children:e.species})]})]})})},u=c.p+"static/media/portal.aeba5f34.gif",b=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"noResults",children:[Object(h.jsxs)("p",{className:"noResults__text",children:["Ops, ",Object(h.jsx)("span",{className:"noResults__text-input",children:e.filterName})," ","is not in this dimension."]}),Object(h.jsx)("img",{className:"noResults__img",src:u,alt:"Not found"})]})})},f=function(e){if(0===e.characters.length)return Object(h.jsx)(b,{filterName:e.filterName});var t=e.characters.map((function(e){return Object(h.jsx)("li",{className:"character__li",children:Object(h.jsx)(i.b,{to:"/character/".concat(e.id),children:Object(h.jsx)(d,{image:e.image,name:e.name,species:e.species})})},e.id)}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"character",children:t})})},x=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"detail",children:[Object(h.jsx)(i.b,{to:"/",className:"detail__back",children:Object(h.jsx)("p",{className:"detail__back",children:"\u21a9 Volver"})}),Object(h.jsxs)("article",{className:"detail__article",children:[Object(h.jsx)("img",{className:"detail__article--img",src:e.character.image,alt:e.character.name}),Object(h.jsxs)("div",{className:"detail__article--info",children:[Object(h.jsx)("h2",{className:"detail__article--info-name",children:e.character.name}),Object(h.jsx)("p",{className:"detail__article--info-all",children:e.character.species}),Object(h.jsxs)("p",{className:"detail__article--info-all",children:["Comes from ",e.character.origin]}),Object(h.jsxs)("p",{className:"detail__article--info-all",children:["It's ",e.character.status]}),Object(h.jsxs)("p",{className:"detail__article--info-all",children:["Has been in ",e.character.episode," episodes"]})]})]})]})})},O=c.p+"static/media/existNot.2b0fa255.gif",p=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)("p",{className:"noCharacterBack",children:"\u21a9 Volver"})}),Object(h.jsxs)("div",{className:"noCharacter",children:[Object(h.jsx)("p",{className:"noCharacter__text",children:"This page does not exist...but do we?"}),Object(h.jsx)("img",{className:"noCharacter__img",src:O,alt:"error 404"})]})]})},_=function(e){return Object(h.jsxs)("form",{className:"filter__form",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsx)("label",{htmlFor:"searchBox"}),Object(h.jsx)("input",{className:"filter__form--textBox",placeholder:"Rick",id:"SearchBox",type:"text",value:e.lsFilter,onChange:function(t){e.handleFilter({searchValue:t.target.value,key:"name"})}})]})},g=function(e){return Object(h.jsx)("button",{className:"filter__resetBut",onClick:e.reset,type:"button",children:"Reset"})},N=(c(16),function(){var e=o.get("character",[]),t=o.get("filter",""),c=Object(a.useState)(e),s=Object(n.a)(c,2),r=s[0],i=s[1],d=Object(a.useState)(t),u=Object(n.a)(d,2),b=u[0],O=u[1];console.log(r),Object(a.useEffect)((function(){0===e.length&&j().then((function(e){i(e)}))}),[e]),Object(a.useEffect)((function(){o.set("character",r),o.set("filter",b)}));var N=r.filter((function(e){return e.name.toUpperCase().includes(b.toUpperCase())}));console.log(b);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("img",{className:"logo__img",src:m,alt:"Rick and Morty"})}),Object(h.jsxs)(l.c,{children:[Object(h.jsxs)(l.a,{exact:!0,path:"/",children:[Object(h.jsxs)("div",{className:"filter",children:[Object(h.jsx)(g,{reset:function(){O("")}}),Object(h.jsx)(_,{handleFilter:function(e){"name"===e.key&&O(e.searchValue)},lsFilter:b})]}),Object(h.jsx)(f,{filterName:b,characters:N})]}),Object(h.jsx)(l.a,{path:"/character/:id",render:function(e){var t=e.match.params.id,c=r.find((function(e){return e.id===parseInt(t)}));return c?(console.log(c),Object(h.jsx)(x,{character:c})):Object(h.jsx)(p,{})}})]})]})});r.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.44baa384.chunk.js.map