"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[898],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return o}});var a=n(67294),r=n(45697),i=n.n(r);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:i=!0,children:o}=e;const[s,p]=(0,a.useState)(t),c=s||i;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>p(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},c&&o))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},s.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},l.propTypes={opened:i().bool}},75805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905)),i=n(38545);const o={description:"Restricts minting via a Gatekeeper Network e.g. Captcha integration."},s="Gatekeeper",l={unversionedId:"programs/candy-machine/available-guards/gatekeeper",id:"programs/candy-machine/available-guards/gatekeeper",title:"Gatekeeper",description:"Restricts minting via a Gatekeeper Network e.g. Captcha integration.",source:"@site/docs/01-programs/02-candy-machine/09-available-guards/07-gatekeeper.md",sourceDirName:"01-programs/02-candy-machine/09-available-guards",slug:"/programs/candy-machine/available-guards/gatekeeper",permalink:"/programs/candy-machine/available-guards/gatekeeper",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/09-available-guards/07-gatekeeper.md",tags:[],version:"current",lastUpdatedAt:1673414442,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:7,frontMatter:{description:"Restricts minting via a Gatekeeper Network e.g. Captcha integration."},sidebar:"sidebar",previous:{title:"Freeze Token Payment",permalink:"/programs/candy-machine/available-guards/freeze-token-payment"},next:{title:"Mint Limit",permalink:"/programs/candy-machine/available-guards/mint-limit"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gatekeeper"},"Gatekeeper"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Gatekeeper")," guard checks whether the minting wallet has a valid ",(0,r.kt)("strong",{parentName:"p"},"Gateway Token")," \u2014 also known as a ",(0,r.kt)("strong",{parentName:"p"},"Civic Pass")," \u2014 from a specified ",(0,r.kt)("strong",{parentName:"p"},"Gatekeeper Network"),"."),(0,r.kt)("p",null,"In most cases, this token will be obtained after completing a Captcha challenge but any Gatekeeper Network may be used."),(0,r.kt)("p",null,"There isn\u2019t much to set up on the Candy Machine side but, depending on the selected Gatekeeper Network, you may need to ask the minting wallet to perform so pre-validation checks to grant them the required Gateway Token."),(0,r.kt)("p",null,"Here are some additional recommended materials you may find helpful when setting up a Gatekeep Network."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.civic.com/civic-pass/overview"},"The CIVIC Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@identity.com/solana-gateway-ts"},"Gateway JS Library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@civic/solana-gateway-react"},"Gateway React Components"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsGatekeeper.png",src:n(8200).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Gatekeeper guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gatekeeper Network"),': The public key of the Gatekeeper Network that will be used to check the validity of the minting wallet. For instance, you may use the "',(0,r.kt)("strong",{parentName:"li"},"Civic Captcha Pass"),'" Network \u2014 which ensures the minting wallet has passed a captcha \u2014 by using the following address: ',(0,r.kt)("inlineCode",{parentName:"li"},"ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expire On Use"),": Whether we should mark the Gateway Token of the minting wallet as expired after the NFT has been minting.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", they will need to go through the Gatekeeper Network again to mint another NFT."),(0,r.kt)("li",{parentName:"ul"},"When set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", they will be able to mint another NFT until the Gateway Token expires naturally.")))),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Gatekeeper guard via the JS SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PublicKey } from '@solana/web3.js';\n\nconst CAPTCHA_NETWORK = new PublicKey(\"ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6\");\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    gatekeeper: {\n      network: CAPTCHA_NETWORK,\n      expireOnUse: true,\n    },\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.GatekeeperGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,"The Gatekeeper guard does not require Mint Settings. However, it does accept the following optional settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token Account")," (optional): As a little disclaimer, you should very rarely need to provide this setting but it\u2019s here if you need to. This refers to the Gateway Token PDA derived from the payer and the Gatekeeper Network which is used to verify the payer's eligibility to mint. This PDA address can be inferred by our SDKs which is why you do not need to provide it. However, some Gatekeeper Networks may issue multiple Gateway Tokens to the same wallet. To differentiate their PDA addresses, it uses a ",(0,r.kt)("strong",{parentName:"li"},"Seeds")," array which defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 0, 0, 0, 0, 0, 0, 0]"),".")),(0,r.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-guard#gatekeeper"},"Candy Guard\u2019s program documentation")," for more details."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the vast majority of cases, we should not need to provide any Mint Settings to the Gatekeeper guard as the JS SDK will default to provide the right addresses and PDAs to the mint instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { nft } = await metaplex.candyMachines().mint({\n  // ...\n  settings: {\n    // No mint settings required...\n  }\n});\n")),(0,r.kt)("p",null,"However, in some rare use cases, we may need to explicitly provide the PDA address of the Gateway Token. Thus, here\u2019s an example providing a Gateway Token that uses non-default seeds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Pda } from '@metaplex-foundation/js';\n\nconst gatewayProgram = metaplex.programs().getGateway(programs);\nconst gatewayToken = Pda.find(gatewayProgram.address, [\n  payer.publicKey.toBuffer(),\n  Buffer.from('gateway'),\n  Buffer.from([0, 0, 0, 0, 0, 0, 0, 1]), // <- Custom seeds array.\n  gatewayNetwork.toBuffer(),\n]);\n\nconst { nft } = await metaplex.candyMachines().mint({\n  // ...\n  settings: {\n    gatekeeper: {\n      tokenAccount: gatewayToken,\n    },\n  }\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.GatekeeperGuardMintSettings.html"},"Mint Settings"),".")))),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Gatekeeper guard does not support the route instruction.")))}d.isMDXComponent=!0},8200:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsGatekeeper-454ac759dc31ba6ffdcb0d52c7b0c313.png"}}]);