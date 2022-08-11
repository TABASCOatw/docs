"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5138],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(83117),o=(n(67294),n(3905));const r={},i="Upload Methods",l={unversionedId:"developer-tools/sugar/upload-methods",id:"developer-tools/sugar/upload-methods",title:"Upload Methods",description:'There are currently four upload (storage) methods available in Sugar: "aws", "bundlr", "nft_storage" and "shdw".',source:"@site/docs/03-developer-tools/00-sugar/05-upload-methods.md",sourceDirName:"03-developer-tools/00-sugar",slug:"/developer-tools/sugar/upload-methods",permalink:"/developer-tools/sugar/upload-methods",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/05-upload-methods.md",tags:[],version:"current",lastUpdatedAt:1660203548,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/developer-tools/sugar/configuration"},next:{title:"Sugar Commands",permalink:"/developer-tools/sugar/commands"}},s={},p=[{value:"Amazon (AWS) S3",id:"amazon-aws-s3",level:2},{value:"Bundlr",id:"bundlr",level:2},{value:"NFT.Storage",id:"nftstorage",level:2},{value:"Shadow Drive",id:"shadow-drive",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload-methods"},"Upload Methods"),(0,o.kt)("p",null,"There are currently four upload (storage) methods available in Sugar: ",(0,o.kt)("inlineCode",{parentName:"p"},'"aws"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"bundlr"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"nft_storage"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"shdw"'),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The upload methods in Sugar are designed using a Rust trait to make it easier for new methods to be added, therefore Sugar can support a wide-variety of upload methods","\u2014","check the ",(0,o.kt)("a",{parentName:"p",href:"developer/bring-your-own-uploader"},(0,o.kt)("strong",{parentName:"a"},"Bring your own uploader"))," section in the Developer Guide.")),(0,o.kt)("h2",{id:"amazon-aws-s3"},"Amazon (AWS) S3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Configuration settings:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'uploadMethod="aws"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'awsS3Bucket="<BUCKET NAME>"')))),(0,o.kt)("p",null,"Uploads files to Amazon S3 storage. When using the ",(0,o.kt)("inlineCode",{parentName:"p"},'"aws"'),", you need to specify the bucket name ",(0,o.kt)("inlineCode",{parentName:"p"},'"awsS3Bucket"')," in the configuration file and set up the credentials in your system. In most cases, this will involve creating a file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," with the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[default]\naws_access_key_id=<ACCESS KEY ID>\naws_secret_access_key=<SECRET ACCESS KEY>\nregion=<REGION>\n")),(0,o.kt)("p",null,"It is also important to set up the ACL permission of the bucket correctly to enable ",(0,o.kt)("inlineCode",{parentName:"p"},'"public-read"')," and apply Cross-Origin Resource Sharing (CORS) rules to enable content access requested from a different origin (necessary to enable wallets and blockchain explorers load the metadata/media files). More information about these configurations can be found at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html"},"Bucket policy examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/s3-configure-cors/"},"CORS configuration"))),(0,o.kt)("h2",{id:"bundlr"},"Bundlr"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Configuration settings:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'uploadMethod="bundlr"'))),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Files are only stored for 7 days when uploaded with Bundlr on ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),".")),(0,o.kt)("p",null,"Uploads to ",(0,o.kt)("a",{parentName:"p",href:"https://www.arweave.org/"},"Arweave")," using ",(0,o.kt)("a",{parentName:"p",href:"https://bundlr.network/"},"Bundlr Network")," and payments are made in ",(0,o.kt)("inlineCode",{parentName:"p"},"SOL"),"."),(0,o.kt)("h2",{id:"nftstorage"},"NFT.Storage"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Configuration settings:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'uploadMethod="nft_storage"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'nftStorageAuthToken="<AUTH TOKEN>"')))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nft.storage"},"NFT.Storage")," is a popular free service that uploads data on the public IPFS network. You will need to register an account to obtain an API key (token), which need to be specified by ",(0,o.kt)("inlineCode",{parentName:"p"},'"nftStorageAuthToken"')," in the configuration file."),(0,o.kt)("h2",{id:"shadow-drive"},"Shadow Drive"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Configuration settings:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'uploadMethod="shdw"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'shdwStorageAccount="<STORAGE PUBKEY>"')))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://shdw.genesysgo.com/shadow-infrastructure-overview/shadow-drive-overview"},"Shadow Drive")," is a decentralized storage network built specifically for the Solana blockchain. In order to upload data to the Shadow Drive you will need to first create a storage account. This can be done using the ",(0,o.kt)("a",{parentName:"p",href:"https://shdw.genesysgo.com/using-shadow-drive/the-shadow-drive-platform/shadow-drive-cli"},"Shadow Drive CLI"),". After creating a storage account, specify its pubkey address in the configuration file using the property ",(0,o.kt)("inlineCode",{parentName:"p"},'"shdwStorageAccount"'),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Shadow Drive upload method is only available on ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet"),".")))}d.isMDXComponent=!0}}]);