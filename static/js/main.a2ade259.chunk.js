(this.webpackJsonppractica2=this.webpackJsonppractica2||[]).push([[0],{11:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(3),n=a.n(c),i=a(18),o=a.n(i),s=(a(29),a(21)),l=a(12),d=a(4),j=a(19),u=a(20),b=a(23),m=a(22),h=(a(11),a(14)),O=a.n(h),p=(a(17),a.p+"static/media/logo.103b5fa1.svg"),f=function(){return Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(r.jsx)("p",{children:"Practica #2 Torres Sanchez Uziel Enrique"})]})},x=function(e){return Object(r.jsx)("div",{className:"Form",children:Object(r.jsxs)("form",{onSubmit:e.enviar,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"matricula",children:"Matricula"}),Object(r.jsx)("input",{type:"text",placeholder:"",onChange:e.guardarCambios,value:e.alumno.matricula,name:"matricula",disabled:e.desactivado})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(r.jsx)("input",{type:"text",placeholder:"",onChange:e.guardarCambios,value:e.alumno.nombre,name:"nombre"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Correo"}),Object(r.jsx)("input",{type:"email",placeholder:"correo@correo.com",onChange:e.guardarCambios,value:e.alumno.correo,name:"correo"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"carrera",children:"Carrera"}),Object(r.jsxs)("select",{name:"carrera",value:e.alumno.carrera,onChange:e.guardarCambios,children:[Object(r.jsx)("option",{value:"selecciona",children:"selecciona"}),Object(r.jsx)("option",{value:"Informatica",children:"Informatica"}),Object(r.jsx)("option",{value:"Sistemas",children:"Sistemas"}),Object(r.jsx)("option",{value:"TICS",children:"TICS"})]})]}),Object(r.jsx)("button",{children:"Enviar"})]})})},v=a(37),g=a(38),C=function(e){return Object(r.jsx)("div",{className:"List",children:0===e.lista.length?Object(r.jsx)("p",{children:"No hay alumnos"}):Object(r.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Matricula"}),Object(r.jsx)("th",{children:"Nombre"}),Object(r.jsx)("th",{children:"Correo"}),Object(r.jsx)("th",{children:"Carrera"}),Object(r.jsx)("th",{}),Object(r.jsx)("th",{})]})}),Object(r.jsx)("tbody",{children:e.lista.map((function(t,a){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.matricula}),Object(r.jsx)("td",{children:t.nombre}),Object(r.jsx)("td",{children:t.correo}),Object(r.jsx)("td",{children:t.carrera}),Object(r.jsx)("td",{children:Object(r.jsx)(g.a,{onClick:function(){return e.eliminar(t.matricula)},variant:"danger",children:"Eliminar"})}),Object(r.jsx)("td",{children:Object(r.jsx)(g.a,{onClick:function(){return e.modificar(t.matricula)},variant:"success",children:"Modificar"})})]},a)}))})]})})},S=a(15),I=(a(31),S.a.apps.lenght?S.a.app():S.a.initializeApp({apiKey:"AIzaSyDpvJCkYo3-W9uIpApHWrM2u_jUV_HJeDo",authDomain:"dbfirebase-52031.firebaseapp.com",databaseURL:"https://dbfirebase-52031.firebaseio.com",projectId:"dbfirebase-52031",storageBucket:"dbfirebase-52031.appspot.com",messagingSenderId:"806174446323",appId:"1:806174446323:web:7f829ec3d677ba96191d86",measurementId:"G-6ZBTR9E1K1"})),y=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).guardarCambios=function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{alumno:Object(d.a)(Object(d.a)({},e.state.alumno),{},Object(l.a)({},t.target.name,t.target.value))}))},e.eliminar=function(t){I.database().ref("Alumnos/"+t).set(null).then((function(){O.a.fire({position:"center",icon:"error",title:"Eliminado",showConfirmButton:!1,timer:1500})}));var a=e.state.lista.filter((function(e){return e.matricula!==t}));e.setState(Object(d.a)(Object(d.a)({},e.state),{},{lista:a}))},e.modificar=function(t){var a=e.state.lista.find((function(e){return e.matricula===t}));e.setState(Object(d.a)(Object(d.a)({},e.state),{},{alumno:{matricula:a.matricula,nombre:a.nombre,correo:a.correo,carrera:a.carrera},desactivado:!0}))},e.enviar=function(t){t.preventDefault();var a=e.state.alumno,r=a.matricula,c=a.nombre,n=a.correo,i=a.carrera;if(0===r.length&&0===c.length&&0===n.length&&0===i.length||"selecciona"===i)O.a.fire({position:"center",icon:"error",title:"Llena todos los campos",showConfirmButton:!1,timer:1500});else{I.database().ref("Alumnos/"+r).update(e.state.alumno).then((function(){O.a.fire({position:"center",icon:"success",title:"Alumno agregado",showConfirmButton:!1,timer:1500})}));var o=e.state.lista;!0===e.state.desactivado&&(o=o.filter((function(e){return e.matricula!==r}))),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{lista:[].concat(Object(s.a)(o),[e.state.alumno]),alumno:{matricula:"",nombre:"",correo:"",carrera:""},desactivado:!1}))}},e.state={alumno:{matricula:"",nombre:"",correo:"",carrera:""},lista:[],desactivado:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;I.database().ref("Alumnos").on("value",(function(t){var a=[];t.forEach((function(e){a.push({matricula:e.key,nombre:e.val().nombre,correo:e.val().correo,carrera:e.val().carrera})})),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{lista:a}))}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{}),Object(r.jsxs)("div",{className:"Containers",children:[Object(r.jsx)(x,{enviar:this.enviar,guardarCambios:this.guardarCambios,alumno:this.state.alumno,desactivado:this.state.desactivado}),Object(r.jsx)(C,{lista:this.state.lista,eliminar:this.eliminar,modificar:this.modificar})]})]})}}]),a}(c.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),A()}},[[35,1,2]]]);
//# sourceMappingURL=main.a2ade259.chunk.js.map