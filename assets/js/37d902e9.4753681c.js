"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[300],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return d}});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),u=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=u(n.components);return o.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),f=u(t),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?o.createElement(m,i(i({ref:e},l),{},{components:t})):o.createElement(m,i({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75891:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var o=t(83117),r=(t(67294),t(3905));const a={sidebar_position:12},i="Burn Token",s={unversionedId:"burn-token",id:"burn-token",title:"Burn Token",description:"You can also get rid of NFTs (or any token) by using the spl-token burn command available in your terminal after installing Solana.",source:"@site/docs/burn-token.md",sourceDirName:".",slug:"/burn-token",permalink:"/burn-token",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/burn-token.md",tags:[],version:"current",lastUpdatedAt:1661533517,formattedLastUpdatedAt:"Aug 26, 2022",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"sidebar",previous:{title:"Contact Us",permalink:"/contact"}},c={},u=[],l={toc:u};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"burn-token"},"Burn Token"),(0,r.kt)("p",null,"You can also get rid of NFTs (or any token) by using the ",(0,r.kt)("a",{parentName:"p",href:"https://spl.solana.com/token#burning"},(0,r.kt)("inlineCode",{parentName:"a"},"spl-token burn"))," command available in your terminal after installing Solana. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This does not remove the token mint acount or delete the metadata or master edition/edition accounts. It only deletes the token stored at your token account so it will not show up in your wallet anymore. ")),(0,r.kt)("p",null,"First, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"spl-token accounts")," command, list the account data in your wallet. You'll see your NFT (in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK"),") as well as it's token ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spl-token accounts\nToken                                         Account                                       Balance\n----------------------------------------------------------------------------------------------------------\n9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK  wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN   1\n")),(0,r.kt)("p",null,"We need the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," column to burn the given token using the ",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> spl-token burn --help\n\nspl-token-burn\nBurn tokens from an account\n\nUSAGE:\n    spl-token burn [FLAGS] [OPTIONS] <SOURCE_TOKEN_ACCOUNT_ADDRESS> <TOKEN_AMOUNT>\n\nFLAGS:\n        --dump-transaction-message    Display the base64 encoded binary transaction message in sign-only mode\n    -h, --help                        Prints help information\n        --sign-only                   Sign the transaction offline\n    -V, --version                     Prints version information\n    -v, --verbose                     Show additional information\n\nOPTIONS:\n        --blockhash <BLOCKHASH>                   Use the supplied blockhash\n    -C, --config <PATH>\n            Configuration file to use [default: /Users/aaron/.config/solana/cli/config.yml]\n\n        --fee-payer <KEYPAIR>\n            Specify the fee-payer account. This may be a keypair file, the ASK keyword\n            or the pubkey of an offline signer, provided an appropriate --signer argument\n            is also passed. Defaults to the client keypair.\n    -u, --url <URL_OR_MONIKER>\n            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]\n            Default from the configuration file.\n        --with-memo <MEMO>                        Specify a memo string to include in the transaction.\n        --mint-address <MINT_ADDRESS>\n            Address of mint that token account is associated with. Required by --sign-only\n\n        --mint-decimals <MINT_DECIMALS>\n            Decimals of mint that token account is associated with. Required by --sign-only\n\n        --multisig-signer <MULTISIG_SIGNER>...    Member signer of a multisig account\n        --nonce <PUBKEY>\n            Provide the nonce account to use when creating a nonced\n            transaction. Nonced transactions are useful when a transaction\n            requires a lengthy signing process. Learn more about nonced\n            transactions at https://docs.solana.com/offline-signing/durable-nonce\n        --nonce-authority <KEYPAIR>\n            Provide the nonce authority keypair to use when signing a nonced transaction\n\n        --output <FORMAT>\n            Return information in specified output format [possible values: json, json-compact]\n\n        --owner <SOURCE_TOKEN_OWNER_KEYPAIR>\n            Specify the source token owner account. This may be a keypair file, the ASK keyword. Defaults to the client\n            keypair.\n        --signer <PUBKEY=SIGNATURE>...            Provide a public-key/signature pair for the transaction\n\nARGS:\n    <SOURCE_TOKEN_ACCOUNT_ADDRESS>    The token account address to burn from\n    <TOKEN_AMOUNT>                    Amount to burn, in tokens\n")),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> spl-token burn -v wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN 1\n\nBurn 1 tokens\n  Source: wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN\n\nSignature: 4hAbU8NcXNF9XGtfqkLKY2hqpuF2EDqWSNFrrydKeQNH74ufBcG8JLnNCuKZJ8w66wWRhxsRLKjCC6JrYkPQuqfP\n")),(0,r.kt)("p",null,"That's it. To confirm, rerun the ",(0,r.kt)("inlineCode",{parentName:"p"},"spl-token accounts")," command to show the Balance is now zero."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spl-token accounts -v\nToken                                         Account                                       Balance\n----------------------------------------------------------------------------------------------------------\n9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK  wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN   0\n")))}p.isMDXComponent=!0}}]);