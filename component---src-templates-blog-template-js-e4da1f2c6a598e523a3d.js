(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return o}),a.d(e,"pageQuery",function(){return c});a(59),a(173);var n=a(0),r=a.n(n),i=(a(174),a(9)),l=a(18),s=a(169);function o(t){var e=t.data,a=e.markdownRemark,n=e.allFile,o=e.nextPost,c=e.nextPostMarkdown,m=e.previousPost,u=e.previousPostMarkdown,d=a.frontmatter,p=a.html,g=a.excerpt;var f,h,v=function(){if(d.illustration){if(d.illustration.startsWith("http"))return d.illustration;var t=n.edges.filter(function(t){return t.node.relativePath===Object(l.last)(d.illustration.split("/"))});return Object(l.get)(t,"[0].node.publicURL")}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:d.title,description:g}),r.a.createElement("div",{className:"blog-template"},r.a.createElement("div",{className:"blog-template__post"},v&&r.a.createElement("img",{className:"blog-template__banner-image",src:v,alt:""}),r.a.createElement("h2",{className:"blog-template__date"},d.date),r.a.createElement("h1",{className:"blog-template__title"},d.title),r.a.createElement("div",{className:"blog-template__content",dangerouslySetInnerHTML:{__html:p}}))),"post"===d.layout&&r.a.createElement("div",{className:"blog-template__nav"},(f=Object(l.get)(m,"edges[0].node.path"),h=Object(l.get)(u,"frontmatter.title"),r.a.createElement("div",{className:"blog-template__nav__previous"},f&&h&&r.a.createElement("div",null,"☜ ",r.a.createElement("br",null),r.a.createElement(i.Link,{to:f},h)))),function(){var t=Object(l.get)(o,"edges[0].node.path"),e=Object(l.get)(c,"frontmatter.title");return r.a.createElement("div",{className:"blog-template__nav__next"},t&&e&&r.a.createElement("div",null,"☞ ",r.a.createElement("br",null),r.a.createElement(i.Link,{to:t},e)))}()))}var c="1291437614"},169:function(t,e,a){"use strict";var n=a(170),r=a(0),i=a.n(r),l=a(1),s=a.n(l),o=a(171),c=a.n(o),m=a(9),u=function(t,e){return t===e?t:"%s · "+e};function d(t){var e=t.description,a=t.lang,r=t.meta,l=t.keywords,s=t.title;return i.a.createElement(m.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Inconsolata"}],title:s,titleTemplate:u(s,t.site.siteMetadata.title),meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="1025518380"},170:function(t){t.exports={data:{site:{siteMetadata:{title:"luetkemj",description:"Change Is Good",author:"mark luetke"}}}}},173:function(t,e,a){"use strict";var n=a(12),r=a(16),i=a(84),l="".startsWith;n(n.P+n.F*a(85)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return l?l.call(e,n,a):e.slice(a,a+n.length)===n}})},174:function(t,e,a){}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-e4da1f2c6a598e523a3d.js.map