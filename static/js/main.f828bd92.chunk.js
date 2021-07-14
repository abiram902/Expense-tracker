(this.webpackJsonpf8=this.webpackJsonpf8||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),l=n(9),c=n.n(l),s=(n(15),n(10)),i=n(2),r=(n(16),n(17),n(18),n(0));var u=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"numeric"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expenseDate",children:[Object(r.jsx)("div",{className:"month",children:t}),Object(r.jsx)("div",{className:"year",children:a}),Object(r.jsx)("div",{className:"day",children:n})]})},o=function(e){return Object(r.jsxs)("div",{className:"expenseitems",onClick:function(t){return e.removeExpenseHandler(e.exp.id)},children:[Object(r.jsx)("div",{children:Object(r.jsx)(u,{date:e.exp.date})}),Object(r.jsx)("div",{className:"title",children:e.exp.title}),Object(r.jsxs)("div",{className:"price",children:["$ ",e.exp.amount]})]})},d=(n(20),function(e){var t=Object(a.useState)("ALL"),n=Object(i.a)(t,2),l=n[0],c=n[1];return Object(r.jsx)("div",{className:"expense-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year "}),Object(r.jsxs)("select",{value:l,onChange:function(t){c(t.target.value),e.selectedYear(t.target.value)},children:[Object(r.jsx)("option",{value:"ALL",children:"All exp"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),j=n(5);n(21);var b=function(e){var t=Math.floor(e.value/e.maxValue*100)+"%";return console.log("barFill=".concat(t)),Object(r.jsxs)("div",{id:"bar-container",children:[Object(r.jsx)("div",{className:"bar-bar",children:Object(r.jsx)("div",{className:"bar-fill",style:{height:e.maxValue>0?t:"0%"}})}),Object(r.jsx)("div",{className:"bar-label",children:e.label})]})};n(22);var x=function(e){var t,n=0,a=Object(j.a)(e.dataPoints);try{for(a.s();!(t=a.n()).done;){var l=t.value;console.log(l,"i"),n+=l.value}}catch(c){a.e(c)}finally{a.f()}return console.log("maxVal=".concat(n)),Object(r.jsx)("div",{className:"chart-container",children:e.dataPoints.map((function(e){return Object(r.jsx)(b,{id:e.label,value:e.value,label:e.label,maxValue:n})}))})};var m=function(e){var t,n=[{label:"jan",value:0},{label:"feb",value:0},{label:"mar",value:0},{label:"apl",value:0},{label:"may",value:0},{label:"jun",value:0},{label:"jul",value:0},{label:"aug",value:0},{label:"sep",value:0},{label:"oct",value:0},{label:"nov",value:0},{label:"dec",value:0}],a=Object(j.a)(e.expense);try{for(a.s();!(t=a.n()).done;){var l=t.value;n[l.date.getMonth()].value+=l.amount}}catch(c){a.e(c)}finally{a.f()}return Object(r.jsx)("div",{className:"expense-chart",children:Object(r.jsx)(x,{dataPoints:n})})};var v=function(e){var t=Object(a.useState)("ALL"),n=Object(i.a)(t,2),l=n[0],c=n[1],s="ALL"===l?e.expense:e.expense.filter((function(e){return e.date.getFullYear().toString()===l}));return console.log(s,"filter return"),Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{selectedYear:function(e){c(e)}}),Object(r.jsx)(m,{expense:s}),Object(r.jsx)("div",{className:"expenses",children:s.map((function(t){return Object(r.jsx)(o,{exp:t,removeExpenseHandler:e.removeExpenseHandler},t.id)}))})]})},O=n(6),p=n(8);n(23);var f=function(e){var t=Object(a.useState)({title:"",amount:"",date:""}),n=Object(i.a)(t,2),l=n[0],c=n[1],s=Object(a.useState)(!0),u=Object(i.a)(s,2),o=u[0],d=u[1],j=function(e){c((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))},b=function(e){d((function(e){return!e}))};return o?Object(r.jsx)("button",{className:"btn",onClick:b,children:"Add Expene"}):Object(r.jsxs)("form",{id:"expense-form",onSubmit:function(t){t.preventDefault(),e.handleAddExpense({id:Math.random().toString(),title:l.title,amount:parseInt(l.amount),date:new Date(l.date)}),b()},children:[Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"title",children:"Title"}),Object(r.jsx)("input",{type:"text",name:"title",id:"form-title",className:"inputs",value:l.title,onChange:j})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(r.jsx)("input",{type:"number",name:"amount",id:"form-amount",className:"inputs",onChange:j,value:l.amount})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"date",children:"Date"}),Object(r.jsx)("input",{type:"date",name:"date",id:"form-date",className:"inputs",onChange:j,value:l.date})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("button",{className:"btn",onClick:b,children:"cancel"}),Object(r.jsx)("button",{type:"submit",className:"btn",children:"Add Expense"})]})]})};n(24);var h=function(e){return Object(r.jsx)("div",{className:"new-expenses",children:Object(r.jsx)(f,{handleAddExpense:e.handleAddExpense})})};var N=function(){var e=Object(a.useState)([{id:"e1",title:"medicine",amount:200,date:new Date(2019,6,5)},{id:"e2",title:"oats",amount:175,date:new Date(2020,5,3)},{id:"e3",title:"suplemnet",amount:575,date:new Date(2021,6,15)},{id:"e4",title:"petrol",amount:500,date:new Date(2021,6,25)}]),t=Object(i.a)(e,2),n=t[0],l=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{handleAddExpense:function(e){l((function(t){return[].concat(Object(s.a)(t),[e])}))}}),Object(r.jsx)(v,{expense:n,removeExpenseHandler:function(e){l((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};c.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.f828bd92.chunk.js.map