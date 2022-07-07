(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53410:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return yt}});var a=n(67294),r=n(86010),l=n(10833),o=n(87524),c=n(35281),s=n(83117),i=n(95999),m=n(39960);function d(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return a.createElement(m.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function u(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d,(0,s.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d,(0,s.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var p=n(52263),f=n(80143),g=n(60373),h=n(74477);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=v[e.versionMetadata.banner];return a.createElement(t,e)}function E(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(m.Z,{to:n,onClick:r},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,p.Z)(),{pluginId:o}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,g.J)(o),{latestDocSuggestion:i,latestVersionSuggestion:m}=(0,f.Jo)(o),d=null!=i?i:(u=m).docs.find((e=>e.id===u.mainDocId));var u;return a.createElement("div",{className:(0,r.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(b,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:m.label,to:d.path,onClick:()=>s(m.name)})))}function k(e){let{className:t}=e;const n=(0,h.E)();return n.banner?a.createElement(y,{className:t,versionMetadata:n}):null}function N(e){let{className:t}=e;const n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function C(e){let{lastUpdatedBy:t}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:c.k.common.lastUpdated},a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(C,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var T="iconEdit_eYIM";function Z(e){let{className:t,...n}=e;return a.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(T,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},a.createElement(Z,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var B="tag_zVej",x="tagRegular_sFm0",O="tagWithCount_h2kH";function j(e){let{permalink:t,label:n,count:l}=e;return a.createElement(m.Z,{href:t,className:(0,r.Z)(B,l?O:x)},n,l&&a.createElement("span",null,l))}var A="tags_jXut",H="tag_QGVx";function S(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(A,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:H},a.createElement(j,{label:t,permalink:n}))}))))}var I="lastUpdated_vbeJ";function P(e){return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(S,e)))}function U(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",I)},(n||l)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function M(e){const{content:t}=e,{metadata:n}=t,{editUrl:l,lastUpdatedAt:o,formattedLastUpdatedAt:s,lastUpdatedBy:i,tags:m}=n,d=m.length>0,u=!!(l||o||i);return d||u?a.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(P,{tags:m}),u&&a.createElement(U,{editUrl:l,lastUpdatedAt:o,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var V=n(86668);function D(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function R(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=R({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function z(e){const t=e.getBoundingClientRect();return t.top===t.bottom?z(e.parentNode):t}function W(e,t){var n;let{anchorTopOffset:a}=t;const r=e.find((e=>z(e).top>=a));if(r){var l;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(z(r))?r:null!=(l=e[e.indexOf(r)-1])?l:null}return null!=(n=e[e.length-1])?n:null}function F(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,V.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function q(e){const t=(0,a.useRef)(void 0),n=F();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=W(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function G(e){let{toc:t,className:n,linkClassName:r,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(G,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}var J=a.memo(G);function Y(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:c,...i}=e;const m=(0,V.L)(),d=null!=o?o:m.tableOfContents.minHeadingLevel,u=null!=c?c:m.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>R({toc:D(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return q((0,a.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:d,maxHeadingLevel:u}}),[r,l,d,u])),a.createElement(J,(0,s.Z)({toc:p,className:n,linkClassName:r},i))}var $="tableOfContents_bqdL";function X(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)($,"thin-scrollbar",t)},a.createElement(Y,(0,s.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var K=n(86043),Q="tocCollapsibleButton_TO0P",ee="tocCollapsibleButtonExpanded_MG3E";function te(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,s.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",Q,!t&&ee,n.className)}),a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var ne="tocCollapsible_ETCw",ae="tocCollapsibleContent_vkbj",re="tocCollapsibleExpanded_sAul";function le(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:c,toggleCollapsed:s}=(0,K.u)({initialState:!0});return a.createElement("div",{className:(0,r.Z)(ne,!c&&re,n)},a.createElement(te,{collapsed:c,onClick:s}),a.createElement(K.z,{lazy:!0,className:ae,collapsed:c},a.createElement(Y,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}var oe="anchorWithStickyNavbar_LWe7",ce="anchorWithHideOnScrollNavbar_WYt5";function se(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:o}}=(0,V.L)();return"h1"!==t&&n?a.createElement(t,(0,s.Z)({},l,{className:(0,r.Z)("anchor",o?ce:oe),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,s.Z)({},l,{id:void 0}))}var ie=n(52802),me=n(48596),de=n(44996);function ue(e){return a.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var pe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function fe(e){let{children:t,href:n,isLast:r}=e;const l="breadcrumbs__link";return r?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(m.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function ge(e){let{children:t,active:n,index:l,addMicrodata:o}=e;return a.createElement("li",(0,s.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function he(){const e=(0,de.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(m.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",pe.breadcrumbsItemLink),href:e},a.createElement(ue,{className:pe.breadcrumbHomeIcon})))}function ve(){const e=(0,ie.s1)(),t=(0,me.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,pe.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(he,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(ge,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(fe,{href:t.href,isLast:r},t.label))})))):null}var be=n(3905),Ee=n(35742);var ye=n(72389),ke=n(92949);function Ne(){const{prism:e}=(0,V.L)(),{colorMode:t}=(0,ke.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var Le=n(87594),Ce=n.n(Le);const _e=/title=(?<quote>["'])(?<title>.*?)\1/,Te=/\{(?<range>[\d,-]+)\}/,Ze={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function we(e,t){const n=e.map((e=>{const{start:n,end:a}=Ze[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function Be(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:l}=t;if(l&&Te.test(l)){const e=l.match(Te).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=r[0].className,a=Ce()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return we(["js","jsBlock"],t);case"jsx":case"tsx":return we(["js","jsBlock","jsx"],t);case"html":return we(["js","jsBlock","html"],t);case"python":case"py":case"bash":return we(["bash"],t);case"markdown":case"md":return we(["html","jsx","bash"],t);default:return we(Object.keys(Ze),t)}}(a,r),c=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(o);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=p+",":m[t]?s[m[t]].start=p:d[t]&&(s[d[t]].range+=s[d[t]].start+"-"+(p-1)+","),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;Ce()(n).forEach((e=>{null!=u[e]||(u[e]=[]),u[e].push(t)}))})),{lineClassNames:u,code:n}}var xe="codeBlockContainer_Ckt0";function Oe(e){let{as:t,...n}=e;const l=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(Ne());return a.createElement(t,(0,s.Z)({},n,{style:l,className:(0,r.Z)(n.className,xe,c.k.common.codeBlock)}))}var je={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Ae(e){let{children:t,className:n}=e;return a.createElement(Oe,{as:"pre",tabIndex:0,className:(0,r.Z)(je.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:je.codeBlockLines},t))}var He={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Se={Prism:n(11205).Z,theme:He};function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Pe.apply(this,arguments)}var Ue=/\r\n|\r|\n/,Me=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Ve=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},De=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Pe({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=Pe({},n,{backgroundColor:null}),r};function Re(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ze=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Ie(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?De(e.theme,e.language):void 0;return t.themeDict=n})),Ie(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=Pe({},Re(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?Pe({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Ie(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),Ie(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=Pe({},Re(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?Pe({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Ie(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=a[o]++)<r[o];){var i=void 0,m=t[o],d=n[o][l];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=Ve(m,d.type),d.alias&&(m=Ve(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(Ue),p=u.length;c.push({types:m,content:u[0]});for(var f=1;f<p;f++)Me(c),s.push(c=[]),c.push({types:m,content:u[f]})}else o++,t.push(m),n.push(i),a.push(0),r.push(i.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return Me(c),s}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),We=ze,Fe="codeLine_lJS_",qe="codeLineNumber_Tfdd",Ge="codeLineContent_feaV";function Je(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=o({line:t,className:(0,r.Z)(n,l&&Fe)}),m=t.map(((e,t)=>a.createElement("span",(0,s.Z)({key:t},c({token:e,key:t})))));return a.createElement("span",i,l?a.createElement(a.Fragment,null,a.createElement("span",{className:qe}),a.createElement("span",{className:Ge},m)):a.createElement(a.Fragment,null,m,a.createElement("br",null)))}var Ye={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $e(e){let{code:t,className:n}=e;const[l,o]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),s=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),o&&(l.removeAllRanges(),l.addRange(o)),r&&r.focus()}(t),o(!0),c.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":l?(0,i.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,i.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,Ye.copyButton,l&&Ye.copyButtonCopied),onClick:s},a.createElement("span",{className:Ye.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Ye.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Ye.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var Xe="wordWrapButtonIcon_Bwma",Ke="wordWrapButtonEnabled_EoeP";function Qe(e){let{className:t,onClick:n,isEnabled:l}=e;const o=(0,i.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,l&&Ke),"aria-label":o,title:o},a.createElement("svg",{className:Xe,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function et(e){var t;let{children:n,className:l="",metastring:o,title:c,showLineNumbers:i,language:m}=e;const{prism:{defaultLanguage:d,magicComments:u}}=(0,V.L)(),p=null!=(t=null!=m?m:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(l))?t:d,f=Ne(),g=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[l,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");r(n)}),[l]);return(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:o}}(),h=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(_e))?void 0:n.groups.title)?t:""}(o)||c,{lineClassNames:v,code:b}=Be(n,{metastring:o,language:p,magicComments:u}),E=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(Oe,{as:"div",className:(0,r.Z)(l,p&&!l.includes("language-"+p)&&"language-"+p)},h&&a.createElement("div",{className:je.codeBlockTitle},h),a.createElement("div",{className:je.codeBlockContent},a.createElement(We,(0,s.Z)({},Se,{theme:f,code:b,language:null!=p?p:"text"}),(e=>{let{className:t,tokens:n,getLineProps:l,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,r.Z)(t,je.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,r.Z)(je.codeBlockLines,E&&je.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(Je,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:v[t],showLineNumbers:E})))))})),a.createElement("div",{className:je.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&a.createElement(Qe,{className:je.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),a.createElement($e,{className:je.codeButton,code:b}))))}function tt(e){let{children:t,...n}=e;const r=(0,ye.Z)(),l=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof l?et:Ae;return a.createElement(o,(0,s.Z)({key:String(r)},n),l)}var nt="details_lb9f",at="isBrowser_bmU9",rt="collapsibleContent_i85q";function lt(e){return!!e&&("SUMMARY"===e.tagName||lt(e.parentElement))}function ot(e,t){return!!e&&(e===t||ot(e.parentElement,t))}function ct(e){let{summary:t,children:n,...l}=e;const o=(0,ye.Z)(),c=(0,a.useRef)(null),{collapsed:i,setCollapsed:m}=(0,K.u)({initialState:!l.open}),[d,u]=(0,a.useState)(l.open);return a.createElement("details",(0,s.Z)({},l,{ref:c,open:d,"data-collapsed":i,className:(0,r.Z)(nt,o&&at,l.className),onMouseDown:e=>{lt(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;lt(t)&&ot(t,c.current)&&(e.preventDefault(),i?(m(!1),u(!0)):m(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(K.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),u(!e)}},a.createElement("div",{className:rt},n)))}var st="details_b_Ee";function it(e){let{...t}=e;return a.createElement(ct,(0,s.Z)({},t,{className:(0,r.Z)("alert alert--info",st,t.className)}))}function mt(e){return a.createElement(se,e)}var dt="containsTaskList_mC6p";var ut="img_ev3q";var pt={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(Ee.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(tt,e)},a:function(e){return a.createElement(m.Z,e)},pre:function(e){var t;return a.createElement(tt,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(it,(0,s.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,s.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&dt))}));var t},img:function(e){return a.createElement("img",(0,s.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,ut))}));var t},h1:e=>a.createElement(mt,(0,s.Z)({as:"h1"},e)),h2:e=>a.createElement(mt,(0,s.Z)({as:"h2"},e)),h3:e=>a.createElement(mt,(0,s.Z)({as:"h3"},e)),h4:e=>a.createElement(mt,(0,s.Z)({as:"h4"},e)),h5:e=>a.createElement(mt,(0,s.Z)({as:"h5"},e)),h6:e=>a.createElement(mt,(0,s.Z)({as:"h6"},e))};function ft(e){let{children:t}=e;return a.createElement(be.Zo,{components:pt},t)}var gt="docItemContainer_Adtb",ht="docItemCol_GujU",vt="tocMobile_aoJ5";function bt(e){var t;const{content:n}=e,{metadata:r,frontMatter:o,assets:c}=n,{keywords:s}=o,{description:i,title:m}=r,d=null!=(t=c.image)?t:o.image;return a.createElement(l.d,{title:m,description:i,keywords:s,image:d})}function Et(e){const{content:t}=e,{metadata:n,frontMatter:l}=t,{hide_title:s,hide_table_of_contents:i,toc_min_heading_level:m,toc_max_heading_level:d}=l,{title:p}=n,f=!s&&void 0===t.contentTitle,g=(0,o.i)(),h=!i&&t.toc&&t.toc.length>0,v=h&&("desktop"===g||"ssr"===g);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!i&&ht)},a.createElement(k,null),a.createElement("div",{className:gt},a.createElement("article",null,a.createElement(ve,null),a.createElement(N,null),h&&a.createElement(le,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:(0,r.Z)(c.k.docs.docTocMobile,vt)}),a.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},f&&a.createElement("header",null,a.createElement(se,{as:"h1"},p)),a.createElement(ft,null,a.createElement(t,null))),a.createElement(M,e)),a.createElement(u,{previous:n.previous,next:n.next}))),v&&a.createElement("div",{className:"col col--3"},a.createElement(X,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:c.k.docs.docTocDesktop})))}function yt(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(l.FG,{className:t},a.createElement(bt,e),a.createElement(Et,e))}},74477:function(e,t,n){"use strict";n.d(t,{E:function(){return c},q:function(){return o}});var a=n(67294),r=n(902);const l=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},87594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);