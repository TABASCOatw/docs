"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[966],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return h}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return i?n.createElement(f,o(o({ref:t},d),{},{components:i})):n.createElement(f,o({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},92222:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var n=i(83117),a=(i(67294),i(3905));const r={},o="Auction Sale",s={unversionedId:"deprecated/storefront/auction",id:"deprecated/storefront/auction",title:"Auction Sale",description:"Metaplex currently supports four types of auctions that are all derived from English auctions. English auction, sometimes referred to an open auction, is the same type of auction that eBay uses. Participants of the auction can see the Price Floor (ie, the minimum bid that you are willing to sell your NFT).",source:"@site/docs/06-deprecated/04-storefront/04-auction.md",sourceDirName:"06-deprecated/04-storefront",slug:"/deprecated/storefront/auction",permalink:"/deprecated/storefront/auction",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/04-storefront/04-auction.md",tags:[],version:"current",lastUpdatedAt:1673414442,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Sell NFTs",permalink:"/deprecated/storefront/sell"},next:{title:"Deploy",permalink:"/deprecated/storefront/deploy"}},l={},c=[{value:"Open Edition",id:"open-edition",level:2},{value:"Select which item to sell",id:"select-which-item-to-sell",level:4},{value:"Set the price",id:"set-the-price",level:4},{value:"Initial phase",id:"initial-phase",level:4},{value:"Ending phase",id:"ending-phase",level:4},{value:"Gap Time",id:"gap-time",level:5},{value:"Tick Size",id:"tick-size",level:5},{value:"Publish",id:"publish",level:4},{value:"Limited Edition",id:"limited-edition",level:2},{value:"Single Item",id:"single-item",level:2},{value:"Tiered Auction",id:"tiered-auction",level:2},{value:"Select the number of winners",id:"select-the-number-of-winners",level:4},{value:"Select tiers",id:"select-tiers",level:4}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auction-sale"},"Auction Sale"),(0,a.kt)("p",null,"Metaplex currently supports four types of auctions that are all derived from English auctions. English auction, sometimes referred to an open auction, is the same type of auction that eBay uses. Participants of the auction can see the Price Floor (ie, the minimum bid that you are willing to sell your NFT). "),(0,a.kt)("p",null,"Basic parameters include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Auction start time"),(0,a.kt)("li",{parentName:"ul"},"Auction end time"),(0,a.kt)("li",{parentName:"ul"},"Reservation price")),(0,a.kt)("p",null,"Additionally, Metaplex includes a novel concept of the participation NFT, which you can use for your own auction. Each bidding participant can be rewarded a unique NFT for participating in the auction. Keep in mind that there are costs (ie, minting of participation NFTs) associated with using this feature."),(0,a.kt)("p",null,'The creator of an auction also has the ability to configure a minimal price that should be charged for redemption, with the option to set it as "free". As mentioned before, participants of your auction are able to see this price.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select type",src:i(26764).Z+"#radius#shadow",width:"2286",height:"1468"})),(0,a.kt)("h2",{id:"open-edition"},"Open Edition"),(0,a.kt)("p",null,"Print as many as you want!"),(0,a.kt)("p",null,'An open edition auction requires the offering of a Master Edition NFT that specifically has no set supply. The auction will only create Prints of this item for bidders: each bidder is guaranteed to get a print, as there are no true "winners" of this auction type.'),(0,a.kt)("p",null,"An open edition auction can either have a set fixed price (equivalent to a Buy Now sale), can be set to the bid price (Pay what you want), or can be free (Make any bid to get it for free)."),(0,a.kt)("h4",{id:"select-which-item-to-sell"},"Select which item to sell"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select item",src:i(76534).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("h4",{id:"set-the-price"},"Set the price"),(0,a.kt)("p",null,"Set the price floor and bid tick. Bid tick is the amount of price increment for each bid."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Set the price",src:i(9042).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("h4",{id:"initial-phase"},"Initial phase"),(0,a.kt)("p",null,"The initial phase setting allows you to delay the start of the auction. If you are launching multiple NFTs or an NFT collection, setting a specific date is recommended. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Initial phase",src:i(82332).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("h4",{id:"ending-phase"},"Ending phase"),(0,a.kt)("p",null,"When would you like your auction to end? We\u2019ve seen projects that set their auction duration from anywhere from a few hours (ie, 3 hours) to a few days (no more than 3 days) have the most success. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ending phase",src:i(63802).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("h5",{id:"gap-time"},"Gap Time"),(0,a.kt)("p",null,"Gap Time is a more advanced feature and most auctions don\u2019t use it. If you anticipate that your community will have lots of competitive bids at the very end, you can use the Gap Time feature. Each new higher bid resets the countdown clock for when the auction ends. Based on feedback from recent projects, we recommend setting Gap Time to a few minutes and no more than 5 or 10 minutes. "),(0,a.kt)("h5",{id:"tick-size"},"Tick Size"),(0,a.kt)("p",null,"Tick Size for Ending Phase is another more advanced feature and most auctions don\u2019t use it. Tick Size dictates how much higher the next bid must be to beat out the previous bid. Outside of Ending Phase, Tick Size is an amount of Sol. In Ending Phase, it\u2019s defined as a percentage higher. "),(0,a.kt)("h4",{id:"publish"},"Publish"),(0,a.kt)("p",null,"Publish the auction and observe it under ",(0,a.kt)("strong",{parentName:"p"},"Explore")," section."),(0,a.kt)("p",null,"You will be asked to approve a transaction, so it will reduce a transaction fee in SOL from your wallet."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Publish",src:i(68488).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Auction page",src:i(16812).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("h2",{id:"limited-edition"},"Limited Edition"),(0,a.kt)("p",null,"Keep your NFTs rare! For a limited edition auction, a Master Edition NFT (of limited or unlimited supply) may be provided to the auction with a number of copies as the set amount of winning places."),(0,a.kt)("p",null,"For each prize place, a Print will be minted in order of prize place, and awarded to the winning bidder of that place."),(0,a.kt)("p",null,"For example, the first place winner will win Print #1; the second place winner Print #2; and so on."),(0,a.kt)("p",null,"It is required for limited supply NFTs that there is at least as much supply remaining as there are desired winners in the auction."),(0,a.kt)("p",null,"Flow is identical to the Open Edition auction, with only a difference in the item selection screen.\nThere you can provide the number of copies to sell."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Limited edition page",src:i(28940).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("h2",{id:"single-item"},"Single Item"),(0,a.kt)("p",null,"This type of auction can be used to sell normal NFTs and re-sell Prints, as well as the sale of Master Edition themselves (and the associated printing rights) if the artist so wishes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sell item",src:i(29117).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("p",null,"On the ",(0,a.kt)("strong",{parentName:"p"},"Participation NFT")," each bidding participant can be rewarded a unique Open Edition NFT for participating in the auction."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Participation",src:i(24262).Z+"#radius#shadow",width:"2894",height:"1772"})),(0,a.kt)("h2",{id:"tiered-auction"},"Tiered Auction"),(0,a.kt)("p",null,"Tiered Auctions is a useful tool for awarding multiple winners (ie, first, second, third place) with NFTs. This can be editions of the same NFTs or different NFTs as runner-up prizes."),(0,a.kt)("p",null,"A tiered auction can contain a mix of the other three auction types as winning placements. For instance, the first place winner could win a Print of Limited Edition NFT A, while the second-place winner could win Normal NFT, and so on. Additionally, all participants who did not win any place could get a Participation NFT Print from a Master Edition (if the Master Edition had no supply limit)."),(0,a.kt)("h4",{id:"select-the-number-of-winners"},"Select the number of winners"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Participation",src:i(53517).Z+"#radius#shadow",width:"2846",height:"1632"})),(0,a.kt)("h4",{id:"select-tiers"},"Select tiers"),(0,a.kt)("p",null,"On this screen, you can create several tiers to put winners in them. In our example, the first winner will get ",(0,a.kt)("strong",{parentName:"p"},"Full Rights")," transfer for an NFT. The second and third winners will get a ",(0,a.kt)("strong",{parentName:"p"},"Print")," of other NFT."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select tier 1",src:i(66019).Z+"#radius#shadow",width:"3104",height:"1796"}),"\n",(0,a.kt)("img",{alt:"Select tier 2",src:i(85218).Z+"#radius#shadow",width:"3104",height:"1796"})))}u.isMDXComponent=!0},16812:function(e,t,i){t.Z=i.p+"assets/images/auction-page-394fa3a1625acf0d464f50e12a41d7a2.png"},9042:function(e,t,i){t.Z=i.p+"assets/images/choose-price-ab44e5fe45821cbf859fb5cbefa6cdf4.png"},63802:function(e,t,i){t.Z=i.p+"assets/images/ending-phase-292783eb479781ee16395422cf934f15.png"},82332:function(e,t,i){t.Z=i.p+"assets/images/initial-phase-34bc93464f066f9a8135d5794aaf1919.png"},28940:function(e,t,i){t.Z=i.p+"assets/images/limited-edition-39418997c59b007e55a6910730e86a13.png"},24262:function(e,t,i){t.Z=i.p+"assets/images/participation-ef071b36def553d1743fe4fd3d5e6e3b.png"},68488:function(e,t,i){t.Z=i.p+"assets/images/publish-e42deb1f4ce69dee0e0ffb7359ff87ee.png"},76534:function(e,t,i){t.Z=i.p+"assets/images/select-item-1a73007675ee3aeef6b6879b49efb2db.png"},29117:function(e,t,i){t.Z=i.p+"assets/images/sell-item-22a7dbfac222f829bae36d7574fdbdf8.png"},53517:function(e,t,i){t.Z=i.p+"assets/images/tiered-select-count-9a495e8ac7d950df5900dd30bfa4665c.png"},66019:function(e,t,i){t.Z=i.p+"assets/images/tiered-select-tiers-1-6d4f0182017f3b48193c1dc7ef0d6e98.png"},85218:function(e,t,i){t.Z=i.p+"assets/images/tiered-select-tiers-2-a4d4e257db2ad2cc059143a2ef59e948.png"},26764:function(e,t,i){t.Z=i.p+"assets/images/select-type-eed0362a681bc3b398586d72a849c40c.png"}}]);