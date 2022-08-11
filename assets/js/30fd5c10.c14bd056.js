"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7141],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={},l="Installation",i={unversionedId:"deprecated/storefront/installation",id:"deprecated/storefront/installation",title:"Installation",description:"To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline",source:"@site/docs/06-deprecated/03-storefront/00-installation.md",sourceDirName:"06-deprecated/03-storefront",slug:"/deprecated/storefront/installation",permalink:"/deprecated/storefront/installation",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/03-storefront/00-installation.md",tags:[],version:"current",lastUpdatedAt:1660203548,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/deprecated/storefront/introduction"},next:{title:"Init store",permalink:"/deprecated/storefront/init-store"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Apple M1 Chip",id:"apple-m1-chip",level:3},{value:"Local setup",id:"local-setup",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline\nsteps you need to take to create your store."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 14.17.0 or above (which can be checked by running ",(0,a.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn"),". Yarn is a performant package manager for JavaScript and replaces the ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," client.")),(0,a.kt)("h3",{id:"apple-m1-chip"},"Apple M1 Chip"),(0,a.kt)("p",null,"If you have macOS with the Apple M1 Chip, you'll need to install some additional dependencies."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://brew.sh/"},"brew"))),(0,a.kt)("p",null,"After installing brew, run the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pkg-config cairo pango libpng jpeg giflib librsvg\n")),(0,a.kt)("p",null,"See additional information: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X"},"https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X")),(0,a.kt)("h2",{id:"local-setup"},"Local setup"),(0,a.kt)("p",null,"Clone the repo and install its dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/metaplex-foundation/metaplex.git\ncd metaplex/js && yarn install && yarn bootstrap\n")),(0,a.kt)("p",null,"Now run your store web server locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,a.kt)("p",null,"After that you can open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," in your browser to see a storefront (it may take a minute to load the first time)."))}u.isMDXComponent=!0}}]);