(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{b4ge:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c})),a.d(t,"pageQuery",(function(){return m}));a("KKXr"),a("9VmF");var l=a("q1tI"),n=a.n(l),r=(a("98am"),a("Wbzz")),i=a("LvDl"),o=a("vrFN");function c(e){var t=e.data,a=t.markdownRemark,l=t.allFile,c=t.nextPost,m=t.nextPostMarkdown,s=t.previousPost,u=t.previousPostMarkdown,d=a.frontmatter,p=a.html,b=a.excerpt;var g,v,_=function(){if(d.illustration){if(d.illustration.startsWith("http"))return d.illustration;var e=l.edges.filter((function(e){return e.node.relativePath===Object(i.last)(d.illustration.split("/"))}));return Object(i.get)(e,"[0].node.publicURL")}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{title:d.title,description:b}),n.a.createElement("div",{className:"blog-template"},n.a.createElement("div",{className:"blog-template__post"},_&&n.a.createElement("img",{className:"blog-template__banner-image",src:_,alt:""}),n.a.createElement("h2",{className:"blog-template__date"},d.date),n.a.createElement("h1",{className:"blog-template__title"},d.title),n.a.createElement("div",{className:"blog-template__content",dangerouslySetInnerHTML:{__html:p}}))),"post"===d.layout&&n.a.createElement("div",{className:"blog-template__nav"},(g=Object(i.get)(s,"edges[0].node.path"),v=Object(i.get)(u,"frontmatter.title"),n.a.createElement("div",{className:"blog-template__nav__previous"},g&&v&&n.a.createElement("div",null,"☜ ",n.a.createElement("br",null),n.a.createElement(r.Link,{to:g},v)))),function(){var e=Object(i.get)(c,"edges[0].node.path"),t=Object(i.get)(m,"frontmatter.title");return n.a.createElement("div",{className:"blog-template__nav__next"},e&&t&&n.a.createElement("div",null,"☞ ",n.a.createElement("br",null),n.a.createElement(r.Link,{to:e},t)))}()))}var m="357717392"}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-824bc1d315d6f7bfeb9d.js.map