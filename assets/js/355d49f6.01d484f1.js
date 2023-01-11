"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3633],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return o}});var a=n(67294),i=n(45697),r=n.n(i);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:i,keepAlive:r=!0,children:o}=e;const[s,p]=(0,a.useState)(t),m=s||r;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>p(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),i),a.createElement("div",{className:"accordion-item-content"},m&&o))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:r().any},s.propTypes={open:r().bool,title:r().string,children:r().any,actions:r().any,keepAlive:r().bool},l.propTypes={opened:r().bool}},37401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var a=n(83117),i=(n(67294),n(3905)),r=n(38545);const o={description:"Explains how to load items into Candy Machines."},s="Inserting Items",l={unversionedId:"programs/candy-machine/inserting-items",id:"programs/candy-machine/inserting-items",title:"Inserting Items",description:"Explains how to load items into Candy Machines.",source:"@site/docs/01-programs/02-candy-machine/04-inserting-items.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/inserting-items",permalink:"/programs/candy-machine/inserting-items",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/04-inserting-items.md",tags:[],version:"current",lastUpdatedAt:1673414442,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:4,frontMatter:{description:"Explains how to load items into Candy Machines."},sidebar:"sidebar",previous:{title:"Managing Candy Machines",permalink:"/programs/candy-machine/managing-candy-machines"},next:{title:"Candy Guards",permalink:"/programs/candy-machine/candy-guards"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Uploading JSON Metadata",id:"uploading-json-metadata",level:2},{value:"Inserting Items",id:"inserting-items-1",level:2},{value:"Inserting Items Using Prefixes",id:"inserting-items-using-prefixes",level:2},{value:"Overriding Existing Items",id:"overriding-existing-items",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inserting-items"},"Inserting Items"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"So far we\u2019ve learnt to create and configure Candy Machines but we\u2019ve not seen how to insert items inside them that can then be minted into NFTs. Thus, let\u2019s tackle that on this page."),(0,i.kt)("p",null,"It is important to remember that ",(0,i.kt)("strong",{parentName:"p"},"inserting items only applies to Candy Machines using ",(0,i.kt)("a",{parentName:"strong",href:"/programs/candy-machine/candy-machine-settings#config-line-settings"},"Config Line Settings")),". This is because NFTs minted from Candy Machine using ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-machine-settings#hidden-settings"},"Hidden Settings")," will all share the same \u201chidden\u201d name and URI."),(0,i.kt)("h2",{id:"uploading-json-metadata"},"Uploading JSON Metadata"),(0,i.kt)("p",null,"To insert items in a Candy Machine, you will need the following two parameters for each item:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Its ",(0,i.kt)("strong",{parentName:"li"},"Name"),": The name of the NFT that will be minted from this item. If a Name Prefix was provided in the Config Line Settings, you must only provide the part of the name that comes after that prefix."),(0,i.kt)("li",{parentName:"ul"},"Its ",(0,i.kt)("strong",{parentName:"li"},"URI"),": The URI pointing to the JSON metadata of the NFT that will be minted from this item. Here also, it excludes the URI Prefix that might have been provided in the Config Line Settings.")),(0,i.kt)("p",null,"If you do not have URIs for your items, you\u2019ll first need to upload their JSON metadata one by one. This can either be using an off-chain solution \u2014 such as AWS or your own server \u2014 or an on-chain solution \u2014 such as Arweave or IPFS."),(0,i.kt)("p",null,"Fortunately, our SDKs can help you with that. They allow you to upload a JSON object and retrieve its URI."),(0,i.kt)("p",null,"Additionally, tools like ",(0,i.kt)("a",{parentName:"p",href:"/developer-tools/sugar/guides/sugar-for-cmv3"},"Sugar")," make uploading JSON metadata a breeze by uploading in parallel, caching the process and retrying failed uploads."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"To upload some JSON metadata using the JS SDK, you should first select your prefered storage provider. By default, Bundlr will be used to upload to Arweave. Here\u2019s how you can choose another one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// NFT.Storage is an external plugin so you must first install it:\n// npm install @metaplex-foundation/js-plugin-nft-storage\n\nimport { nftStorage } from "@metaplex-foundation/js-plugin-nft-storage";\nmetaplex.use(nftStorage());\n')),(0,i.kt)("p",null,"Once you have selected a storage provider, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"uploadMetadata")," operation of the NFT module to upload some JSON metadata."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// Uploading some JSON metadata contains assets already uploaded.\nconst { uri } = await metaplex.nfts().uploadMetadata({\n  name: "My NFT #1",\n  description: "My description",\n  image: "https://arweave.net/123",\n});\n')),(0,i.kt)("p",null,"If the assets inside your JSON metadata also need to be uploaded to the same storage provider, you may give a ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MetaplexFile.html"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaplexFile"))," instead of a URI and it will upload it for you. For instance, here\u2019s how you would upload some JSON metadata using a file uploaded in the browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// Uploading some JSON metadata and its assets (here, in the browser).\nconst { uri } = await metaplex.nfts().uploadMetadata({\n  name: "My NFT #1",\n  description: "My description",\n  image: await toMetaplexFileFromBrowser(event.target.files[0]),\n});\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.NftClient.html#uploadMetadata"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UploadMetadataInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UploadMetadataOutput.html"},"Output"),".")))),(0,i.kt)("h2",{id:"inserting-items-1"},"Inserting Items"),(0,i.kt)("p",null,"Now that we have a name and URI for all of our items, all we need to do is insert them into our Candy Machine account."),(0,i.kt)("p",null,"This is an important part of the process and, when using Config Line Settings, ",(0,i.kt)("strong",{parentName:"p"},"minting will not be permitted until all items have been inserted"),"."),(0,i.kt)("p",null,"Note that the name and URI of each inserted item are respectively constraint by the ",(0,i.kt)("strong",{parentName:"p"},"Name Length")," and ",(0,i.kt)("strong",{parentName:"p"},"URI Length")," attributes of the Config Line Settings."),(0,i.kt)("p",null,"Additionally, because transactions are limited to a certain size, we cannot insert thousands of items within the same transaction. The number of items we can insert per transaction will depend on the ",(0,i.kt)("strong",{parentName:"p"},"Name Length")," and ",(0,i.kt)("strong",{parentName:"p"},"URI Length")," attributes defined in the Config Line Settings. The shorter our names and URIs are, the more we'll be able to fit into a transaction."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s how you can insert items into a Candy Machine using the JS SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'await metaplex.candyMachines().insertItems({\n  candyMachine,\n  items: [\n    { name: "My NFT #1", uri: "https://example.com/nft1.json" },\n    { name: "My NFT #2", uri: "https://example.com/nft2.json" },\n    { name: "My NFT #3", uri: "https://example.com/nft3.json" },\n  ],\n});\n')),(0,i.kt)("p",null,"You may also specify the index in which you want to insert the provided items. By default, it will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"candyMachine.itemsLoaded")," property to append items (make sure to refresh the ",(0,i.kt)("inlineCode",{parentName:"p"},"candyMachine")," model to get the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"itemsLoaded")," value)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'await metaplex.candyMachines().insertItems({\n  candyMachine,\n  index: 3,\n  items: [\n    { name: "My NFT #4", uri: "https://example.com/nft4.json" },\n    { name: "My NFT #5", uri: "https://example.com/nft5.json" },\n    { name: "My NFT #6", uri: "https://example.com/nft6.json" },\n  ],\n});\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#insertItems"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.InsertCandyMachineItemsInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.InsertCandyMachineItemsOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#insertItems"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"inserting-items-using-prefixes"},"Inserting Items Using Prefixes"),(0,i.kt)("p",null,"When using name and/or URI prefixes, you only need to insert the part that comes after them."),(0,i.kt)("p",null,"Note that, since using prefixes can significantly reduce the Name Length and URI Length, it should help you fit a lot more items per transaction."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s how to insert items whilst using prefixes via the JS SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { toBigNumber } from '@metaplex-foundation/js';\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  candyMachine,\n  itemsAvailable: toBigNumber(1000),\n  itemSettings: {\n    type: 'configLines',\n    prefixName: 'My NFT #',\n    nameLength: 4,\n    prefixUri: 'https://example.com/nft',\n    uriLength: 9,\n    isSequential: true,\n  },\n};\n\nawait metaplex.candyMachines().insertItems({\n  candyMachine,\n    items: [\n    { name: '1', uri: '1.json' },\n    { name: '2', uri: '2.json' },\n    { name: '3', uri: '3.json' },\n  ],\n});\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#insertItems"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.InsertCandyMachineItemsInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.InsertCandyMachineItemsOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#insertItems"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"overriding-existing-items"},"Overriding Existing Items"),(0,i.kt)("p",null,"When inserting items, you may provide the position in which these items should be inserted. This enables you to insert items in any order you want but also allows you to update items that have already been inserted."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"The following examples show how you can insert 3 items and, later on, update the second item inserted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'await metaplex.candyMachines().insertItems({\n  candyMachine,\n  items: [\n    { name: "My NFT #1", uri: "https://example.com/nft1.json" },\n    { name: "My NFT #2", uri: "https://example.com/nft2.json" },\n    { name: "My NFT #3", uri: "https://example.com/nft3.json" },\n  ],\n});\n\nawait metaplex.candyMachines().insertItems({\n  candyMachine,\n  index: 1,\n  items: [{ name: "My NFT #X", uri: "https://example.com/nftX.json" }],\n});\n\ncandyMachine = await metaplex.candyMachines().refresh(candyMachine);\ncandyMachine.items[0].name; // "My NFT #1"\ncandyMachine.items[1].name; // "My NFT #X"\ncandyMachine.items[2].name; // "My NFT #3"\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#insertItems"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.InsertCandyMachineItemsInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.InsertCandyMachineItemsOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#insertItems"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"And just like that, we have a loaded Candy Machine ready to mint NFTs! However, we've not created any requirements for our minting process. How can we configure the price of the mint? How can we ensure that buyers are holders of a specific token or an NFT from a specific collection? How can we set the start date of our mint? What about the end conditions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards"},"On the next page"),", we\u2019ll talk about Candy Guards which make all of this possible."))}d.isMDXComponent=!0}}]);