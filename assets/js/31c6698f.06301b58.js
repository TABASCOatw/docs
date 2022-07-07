"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4672],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),s=a,m=d["".concat(u,".").concat(s)]||d[s]||f[s]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const c={sidebar_label:"3. Update Fair Launch"},i="Update Fair Launch",o={unversionedId:"fair-launch/update-fair-launch",id:"fair-launch/update-fair-launch",title:"Update Fair Launch",description:"You can get info of created Fair Launch by running this command:",source:"@site/docs/fair-launch/04-update-fair-launch.md",sourceDirName:"fair-launch",slug:"/fair-launch/update-fair-launch",permalink:"/fair-launch/update-fair-launch",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/fair-launch/04-update-fair-launch.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"3. Update Fair Launch"},sidebar:"sidebar",previous:{title:"2. Display Fair Launch",permalink:"/fair-launch/display-fair-launch"},next:{title:"Gumdrop",permalink:"/airdrops/create-gumdrop"}},u={},l=[],p={toc:l};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-fair-launch"},"Update Fair Launch"),(0,a.kt)("p",null,"You can get info of created Fair Launch by running this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/fair-launch-cli.ts update_fair_launch --env devnet --keypair ~/.config/solana/devnet.json --uuid "devnet" --fee 0.1 --price-range-start 0.1 --price-range-end 0.5 --phase-one-start-date "16 Dec 2021 11:30:00 UTC" --phase-one-end-date "16 Dec 2021 12:00:00 UTC" --phase-two-end-date "16 Dec 2021 12:30:00 UTC" --number-of-tokens 11 --tick-size 0.1 --lottery-duration 80000\n')),(0,a.kt)("p",null,"expected output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Updated fair launch Done: FPnv9xr4r7vMNNBgvLVzLsvmQFYh1YmhuRWRGdRFecmb\n")))}f.isMDXComponent=!0}}]);