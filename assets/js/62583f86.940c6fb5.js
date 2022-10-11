"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3662],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=a.createContext({}),l=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(g.Provider,{value:t},e.children)},C={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(g,".").concat(d)]||p[d]||C[d]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var A={};for(var g in t)hasOwnProperty.call(t,g)&&(A[g]=t[g]);A.originalType=e,A.mdxType="string"==typeof e?e:i,o[1]=A;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28972:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return o},default:function(){return C},frontMatter:function(){return r},metadata:function(){return A},toc:function(){return l}});var a=n(83117),i=(n(67294),n(3905));const r={},o="Preparing your Assets",A={unversionedId:"developer-tools/sugar/guides/preparing-assets",id:"developer-tools/sugar/guides/preparing-assets",title:"Preparing your Assets",description:"The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your",source:"@site/docs/03-developer-tools/00-sugar/03-guides/01-preparing-assets.md",sourceDirName:"03-developer-tools/00-sugar/03-guides",slug:"/developer-tools/sugar/guides/preparing-assets",permalink:"/developer-tools/sugar/guides/preparing-assets",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/03-guides/01-preparing-assets.md",tags:[],version:"current",lastUpdatedAt:1665491147,formattedLastUpdatedAt:"Oct 11, 2022",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/tools/sugar/guides/"},next:{title:"Working with Sugar",permalink:"/developer-tools/sugar/guides/working-with-sugar"}},g={},l=[{value:"Example NFT Collection",id:"example-nft-collection",level:2},{value:"Sample Items of the Collection",id:"sample-items-of-the-collection",level:2},{value:"\u2022 Image: <code>0.png</code>",id:"-image-0png",level:4},{value:"\u2022 Metadata: <code>0.json</code>",id:"-metadata-0json",level:4},{value:"\u2022 Image: <code>9.png</code>",id:"-image-9png",level:4},{value:"\u2022 Metadata: <code>9.json</code>",id:"-metadata-9json",level:4},{value:"\u2022 Image: <code>collection.png</code>",id:"-image-collectionpng",level:4},{value:"\u2022 Metadata: <code>collection.json</code>",id:"-metadata-collectionjson",level:4}],s={toc:l};function C(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preparing-your-assets"},"Preparing your Assets"),(0,i.kt)("p",null,"The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your\nproject's artwork and metadata."),(0,i.kt)("p",null,"Your assets consist of a collection of images (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),") and metadata (",(0,i.kt)("inlineCode",{parentName:"p"},".json"),") files organized in a 1:1 mapping -\ni.e., each image has a corresponding metadata file."),(0,i.kt)("p",null,"There are a multitude of unique ways to generate images and metadata, and in most scenarios, you will automate this\nprocess. A good example of an image generation tool is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/HashLips/hashlips_art_engine"},"HashLips"),". In\nthis guide we will cover the creation of a simple collection to illustrate the metadata requirements and\nCandy Machine distribution. You should familiarize yourself with\nthe ",(0,i.kt)("a",{parentName:"p",href:"/programs/token-metadata/token-standard"},"Token Metadata Standard"),"."),(0,i.kt)("p",null,"You can validate that your assets are created properly through the ",(0,i.kt)("inlineCode",{parentName:"p"},"sugar validate")," command that is further described in the ",(0,i.kt)("a",{parentName:"p",href:"../reference/commands#validate"},"Sugar Commands")," section."),(0,i.kt)("h2",{id:"example-nft-collection"},"Example NFT Collection"),(0,i.kt)("p",null,"A 10-item collection will have 20 regular files in total plus 2 additional collection files:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Images"),(0,i.kt)("th",{parentName:"tr",align:null},"Metadata"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"6.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"6.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"collection.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"collection.json"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you don't want Sugar to automatically set an on-chain collection for your Candy Machine, don't include\na ",(0,i.kt)("inlineCode",{parentName:"p"},"collection.png")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"collection.json")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"assets")," folder")),(0,i.kt)("p",null,"Each pair of image and metadata are combined to represent an NFT. E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.json")," represent the\nfirst NFT in this example collection, ",(0,i.kt)("inlineCode",{parentName:"p"},"1.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.json")," describe the second NFT and so forth. These files are typically grouped into a single folder, usually named ",(0,i.kt)("inlineCode",{parentName:"p"},"assets"),"."),(0,i.kt)("p",null,"The content of the image files reflect the artwork you would like to display for each NFT and the content of the\nmetadata files describe each of these pieces of artwork using the schema defined in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/programs/token-metadata/token-standard"},"Token Metadata Standard"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The first item in your collection must have the index ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", the second ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and so forth. In a ",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," NFT drop, will\nstart with the pair ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.json"),", and end with the pair ",(0,i.kt)("inlineCode",{parentName:"p"},"9999.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"9999.json"),". The numbering must also be\nconsecutive - i.e., should not have gaps in the numbering.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"It is important to double-check that you do not skip any indices, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2.png"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"3.png")," (missing ",(0,i.kt)("inlineCode",{parentName:"p"},"1.png"),").\nOtherwise you will experience problems when minting your collection.")),(0,i.kt)("h2",{id:"sample-items-of-the-collection"},"Sample Items of the Collection"),(0,i.kt)("p",null,"Below are two simple examples of items in this collection:"),(0,i.kt)("h4",{id:"-image-0png"},"\u2022 Image: ",(0,i.kt)("inlineCode",{parentName:"h4"},"0.png")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"0.png",src:n(21560).Z+"#radius#shadow",width:"300",height:"300"})),(0,i.kt)("h4",{id:"-metadata-0json"},"\u2022 Metadata: ",(0,i.kt)("inlineCode",{parentName:"h4"},"0.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Number #0001",\n  "symbol": "NB",\n  "description": "Collection of 10 numbers on the blockchain. This is the number 1/10.",\n  "image": "0.png",\n  "attributes": [\n    {\n      "trait_type": "Number",\n      "value": "0"\n    }\n  ],\n  "properties": {\n    "files": [\n      {\n        "uri": "0.png",\n        "type": "image/png"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h4",{id:"-image-9png"},"\u2022 Image: ",(0,i.kt)("inlineCode",{parentName:"h4"},"9.png")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"9.png",src:n(19846).Z+"#radius#shadow",width:"300",height:"300"})),(0,i.kt)("h4",{id:"-metadata-9json"},"\u2022 Metadata: ",(0,i.kt)("inlineCode",{parentName:"h4"},"9.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Number #0010",\n  "symbol": "NB",\n  "description": "Collection of 10 numbers on the blockchain. This is the number 10/10.",\n  "image": "9.png",\n  "attributes": [\n    {\n      "trait_type": "Number",\n      "value": "10"\n    }\n  ],\n  "properties": {\n    "files": [\n      {\n        "uri": "9.png",\n        "type": "image/png"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h4",{id:"-image-collectionpng"},"\u2022 Image: ",(0,i.kt)("inlineCode",{parentName:"h4"},"collection.png")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"collection.png",src:n(61898).Z+"#radius#shadow",width:"300",height:"300"})),(0,i.kt)("h4",{id:"-metadata-collectionjson"},"\u2022 Metadata: ",(0,i.kt)("inlineCode",{parentName:"h4"},"collection.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Numbers Collection",\n  "symbol": "NB",\n  "description": "Collection of 10 numbers on the blockchain.",\n  "image": "collection.png",\n  "attributes": [],\n  "properties": {\n    "files": [\n      {\n        "uri": "collection.png",\n        "type": "image/png"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Notice that the difference in the metadata between each image is on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"name"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Number #0001"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Number #0010"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"description"')," property: it shows ",(0,i.kt)("inlineCode",{parentName:"li"},'"number 1/10"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"number 10/10"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"image"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.png"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"9.png"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"properties.files.uri"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.png"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"9.png"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"attributes"')," property: the values are different, since they describe attributes of the images")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"collection.json")," file is also a bit different and doesn't have to include any attributes if you don't want."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can download the complete ",(0,i.kt)("a",{target:"_blank",href:n(714).Z},"sample collection")," for testing and experimentation.\nSubsequent steps in this\nwalk through will assume it's the collection in use.")))}C.isMDXComponent=!0},714:function(e,t,n){t.Z=n.p+"assets/files/assets-ff6bd873ecd07b49c86faf3c7aab82d2.zip"},21560:function(e,t){t.Z="data:image/png;base64,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"},19846:function(e,t){t.Z="data:image/png;base64,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"},61898:function(e,t){t.Z="data:image/png;base64,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"}}]);