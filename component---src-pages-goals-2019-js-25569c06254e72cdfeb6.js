(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(170),s=(a(58),a(1)),c=a.n(s);a(185);function i(e){var t=e.data,a=e.goal;return r.a.createElement("div",{className:"rows"},t.map(function(e){var t=e.split(" ");return r.a.createElement("div",{className:"rows__row",key:e},r.a.createElement("div",{className:"rows__label"},t[0]),r.a.createElement("div",{className:"rows__bar"},r.a.createElement("div",{className:"rows__progress",style:{width:t[1]/a*100+"%"}})),r.a.createElement("div",{className:"rows__total"},t[1]," ",r.a.createElement("span",{class:t[1]>=100?"rows__check rows__success":"rows__check"},"✓")))}))}i.propTypes={data:c.a.string.isRequired,goal:c.a.number},i.defaultProps={goal:100};var o=a(186),m=a.n(o);a(187);function u(e){var t=e.data;return r.a.createElement("div",{className:"calchart"},console.log(t),t.map(function(e){var t=e.month,a=e.days;return r.a.createElement("div",{className:"calchart__month"},t&&r.a.createElement("div",{className:"calchart__month-name"},t),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement("div",{className:"calchart__week"},e.map(function(e,a){return r.a.createElement("div",{key:""+t+a,className:m()("calchart__day",{"calchart__day--no":0===e},{"calchart__day--yes":1===e},{"calchart__day--null":2===e})})}))})))}))}u.propTypes={data:c.a.arrayOf(c.a.shape({month:c.a.string,days:c.a.arrayOf(c.a.number)})).isRequired},u.defaultProps={className:""};var d=a(173);a.d(t,"pageQuery",function(){return p});t.default=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Goals 2019"}),console.log(t),r.a.createElement("div",{style:{maxWidth:"624px",margin:"0 auto"}},r.a.createElement("h1",null,"2019"),r.a.createElement("h2",null,"Run 1200 miles this year"),r.a.createElement(i,{data:t.allJsonJson.edges[0].node.totalMilage.data,goal:1200}),r.a.createElement("br",null),r.a.createElement("h2",null,"Run 100 miles per month"),r.a.createElement(i,{data:t.allJsonJson.edges[0].node.runs.data}),r.a.createElement("br",null),r.a.createElement("h2",null,"X-Train 4 days a week"),r.a.createElement(u,{data:t.allJsonJson.edges[0].node.xtrain.data}),r.a.createElement("h2",null,"Meditation Practice"),r.a.createElement(u,{data:t.allJsonJson.edges[0].node.meditation.data}),r.a.createElement("br",null),r.a.createElement("h2",null,"Publish 1 new blog post a month"),r.a.createElement("div",{className:"calchart__month-name"},"JAN"),r.a.createElement("ul",{style:{marginLeft:0}},r.a.createElement(d.a,{path:"/190108/the-druid-and-the-squirrel/",title:"The Druid And The Squirrel"}),r.a.createElement(d.a,{path:"/190101/new-look-same-great-taste/",title:"New Look, Same Great Taste!"})),r.a.createElement("div",{className:"calchart__month-name"},"FEB"),r.a.createElement("div",{className:"calchart__month-name"},"MAR"),r.a.createElement("ul",{style:{marginLeft:0}},r.a.createElement(d.a,{path:"/190305/neistat/",title:"Neistat"})),r.a.createElement("h2",null,"Days Sober"),r.a.createElement(u,{data:t.allJsonJson.edges[0].node.sober.data})))};var p="4191031742"},170:function(e,t,a){"use strict";var n=a(171),r=a(0),l=a.n(r),s=a(1),c=a.n(s),i=a(172),o=a.n(i),m=a(9),u=function(e,t){return e===t?e:"%s · "+t};function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title;return l.a.createElement(m.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Inconsolata"}],title:c,titleTemplate:u(c,e.site.siteMetadata.title),meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},171:function(e){e.exports={data:{site:{siteMetadata:{title:"luetkemj",description:"Change Is Good",author:"mark luetke"}}}}},173:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),l=a(1),s=a.n(l),c=a(9),i=a(37);a(174);function o(e){var t=e.className,a=e.date,n=e.path,l=e.title,s=a?"list-item list-item--with-date "+t:"list-item "+t,o=e.external?r.a.createElement(i.OutboundLink,{className:"list-item__link",href:n},l):r.a.createElement(c.Link,{className:"list-item__link",to:n},l);return r.a.createElement("li",{key:a+"-"+l,className:s},a&&r.a.createElement("span",{className:"list-item__date extrnal"},a),o)}o.propTypes={className:s.a.string},o.defaultProps={className:""}},174:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===l)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},187:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-goals-2019-js-25569c06254e72cdfeb6.js.map