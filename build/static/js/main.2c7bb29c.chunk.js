(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(7),a=n.n(o),s=(n(14),n(9)),l=n(5),i=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={text:"Add",color:"steelblue"};var j=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(u,{color:c?"red":"green",onClick:n,text:c?"Close":"Add"})]})};j.defaultProps={title:"Task Tracker"};var b=j,h=n(8),O=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(O,{task:e,onDelete:n,onToggle:c},e.id)}))})},m=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),u=l[0],j=l[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),O=h[0],x=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:u,reminder:O}),a(""),j(""),x(!1)):alert("please add text for task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add text",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Date & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn"})]})};var f=function(){var e=Object(c.useState)([{id:1,text:"Doctors appointment",day:"Feb 5th  at 2:30pm",reminder:!0},{id:2,text:"Dance Class",day:"Feb 6th  at 2:30pm",reminder:!0},{id:3,text:"Do something good",day:"Feb 5th  at 2:30pm",reminder:!1}]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),a=Object(i.a)(o,2),u=a[0],j=a[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{onAdd:function(){return j(!u)},showAdd:u}),u&&Object(d.jsx)(m,{onAdd:function(e){var t=Math.floor(1e3*Math.random()+1),c=Object(l.a)({id:t},e);r([].concat(Object(s.a)(n),[c])),console.log(e)}}),n.length>0?Object(d.jsx)(x,{tasks:n,onDelete:function(e){console.log("delete",e),r(n.filter((function(t){return t.id!==e})))},onToggle:function(e){console.log(e),r(n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Task to Show"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.2c7bb29c.chunk.js.map