"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9358],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const a={},i="Working with Sugar",c={unversionedId:"developer-tools/sugar/working-with-sugar",id:"developer-tools/sugar/working-with-sugar",title:"Working with Sugar",description:"Sugar Tutorial",source:"@site/docs/03-developer-tools/00-sugar/03-working-with-sugar.md",sourceDirName:"03-developer-tools/00-sugar",slug:"/developer-tools/sugar/working-with-sugar",permalink:"/developer-tools/sugar/working-with-sugar",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/03-working-with-sugar.md",tags:[],version:"current",lastUpdatedAt:1660203548,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Quick Start",permalink:"/developer-tools/sugar/quick-start"},next:{title:"Configuration",permalink:"/developer-tools/sugar/configuration"}},l={},s=[],u={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-sugar"},"Working with Sugar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sugar Tutorial",src:n(49289).Z+"#radius#shadow",width:"1446",height:"864"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/26067212/165967904-0a551b6e-dc7e-4d8c-9348-3093e0d93883.mp4"},"Full Sugar Video Tutorial")),(0,o.kt)("p",null,"Sugar contains a collection of commands for creating and managing Metaplex Candy Machines. The complete list of commands can be viewed by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar\n")),(0,o.kt)("p",null,"This will display a list of commands and their short description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE:\n    sugar [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help                     Print help information\n    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off\n    -V, --version                  Print version information\n\nSUBCOMMANDS:\n    create-config    Interactive process to create the config file\n    deploy           Deploy cache items into candy machine config on-chain\n    help             Print this message or the help of the given subcommand(s)\n    launch           Create a candy machine deployment from assets\n    mint             Mint one NFT from candy machine\n    show             Show the on-chain config of an existing candy machine\n    update           Update the candy machine config on-chain\n    upload           Upload assets to storage and creates the cache config\n    validate         Validate JSON metadata files\n    verify           Verify uploaded data\n    withdraw         Withdraw funds from candy machine account closing it\n")),(0,o.kt)("p",null,"To get more information about a particular command (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy"),"), use the ",(0,o.kt)("inlineCode",{parentName:"p"},"help")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar help deploy\n")),(0,o.kt)("p",null,"The list of options together with a short description will be displayed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Deploy cache items into candy machine config on-chain\n\nUSAGE:\n    sugar deploy [OPTIONS]\n\nOPTIONS:\n    -c, --config <CONFIG>          Path to the config file, defaults to "config.json" [default:\n                                   config.json]\n        --cache <CACHE>            Path to the cache file, defaults to "cache.json" [default:\n                                   cache.json]\n    -h, --help                     Print help information\n    -k, --keypair <KEYPAIR>        Path to the keypair file, uses Sol config or defaults to\n                                   "~/.config/solana/id.json"\n    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off\n    -r, --rpc-url <RPC_URL>        RPC Url\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This guide assumes that you set up your RPC url and a keypair using Solana CLI config, as described in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Quick Start")," section above.")))}p.isMDXComponent=!0},49289:function(e,t,n){t.Z=n.p+"assets/images/Sugar-Tutorial-5ce27c9247f9b8992a7ad544124a9686.gif"}}]);