(this["webpackJsonpdemo-react-router"]=this["webpackJsonpdemo-react-router"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),s=n(18),a=n.n(s),u=(n(26),n(27),n(12)),o=n(2),i=n(1),l=function(){return Object(i.jsx)("h2",{children:"About"})},j=n(8),b=n(9),h=n(11),d=n(10),O=n(16),p=n.n(O),x=n(19),f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(j.a)(this,n),(c=e.call(this,t)).handleChange=function(){var t=Object(x.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),n=null,t.t0=e,t.next="plus"===t.t0?5:"moins"===t.t0?7:"zero"===t.t0?9:11;break;case 5:return n=c.state.count+1,t.abrupt("break",12);case 7:return n=c.state.count-1,t.abrupt("break",12);case 9:return n=0,t.abrupt("break",12);case 11:n=0;case 12:return t.next=14,c.setState({count:n});case 14:c.props.handlePlusApp(c.state.count);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c.state={count:0},c}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:this.state.count}),Object(i.jsx)("button",{onClick:function(){return t.handleChange("plus")},children:"+"}),Object(i.jsx)("button",{onClick:function(){return t.handleChange("moins")},children:"-"}),Object(i.jsx)("button",{onClick:function(){return t.handleChange("zero")},children:"Reset"})]})}}]),n}(c.Component),m=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(j.a)(this,n),(c=e.call(this,t)).state={},c}return Object(b.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("header",{children:["Valeur du comteur : ",this.props.total]})}}]),n}(c.Component),v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(j.a)(this,n),(c=e.call(this,t)).handlePlusAppIner=function(t,e){console.log("modificado por contador no "+e,"valeur : "+t);var n=c.state.counters;n[e]=t;var r=n.reduce((function(t,e){return t+e}),0);c.setState({counters:n,total:r})},c.state={counters:[0,0,0,0],total:0},c}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{total:this.state.total}),this.state.counters.map((function(e,n){return Object(i.jsx)(f,{handlePlusApp:function(e){return t.handlePlusAppIner(e,n)}},n)}))]})}}]),n}(c.Component);var k=function(){return Object(i.jsx)("h2",{children:"Home"})},g=function(){return Object(i.jsx)("h2",{children:"Users"})};function C(){return Object(i.jsx)(u.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{className:"links",to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{className:"links",to:"/about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{className:"links",to:"/users",children:"Users"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{className:"links",to:"/compteurs",children:"Compteurs"})})]})}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/compteurs",children:Object(i.jsx)(v,{})}),Object(i.jsx)(o.a,{path:"/about",children:Object(i.jsx)(l,{})}),Object(i.jsx)(o.a,{path:"/users",children:Object(i.jsx)(g,{})}),Object(i.jsx)(o.a,{path:"/",children:Object(i.jsx)(k,{})})]})]})})}var A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),A()}},[[38,1,2]]]);
//# sourceMappingURL=main.e2f75cf1.chunk.js.map