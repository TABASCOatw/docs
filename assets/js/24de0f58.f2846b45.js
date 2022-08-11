"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2871],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return C},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return N}});var a=n(83117),r=n(67294),l=n(3905),o=n(34334),i=n(72389),s=n(67392),u=n(7094),p=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:i,defaultValue:m,values:h,groupId:f,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,u.U)(),[C,T]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=f){const e=N[f];null!=e&&e!==C&&g.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==C&&(O(t),T(a),null!=f&&w(f,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}var f="tabItem_Ymn6";function b(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,a),hidden:n},t)}const k={},g="Installation",y={unversionedId:"developer-tools/sugar/installation",id:"developer-tools/sugar/installation",title:"Installation",description:"To install, either download a binary, install from Crates.io, or install from source. Non-technical users will typically find using a pre-built binary to be simpler.",source:"@site/docs/03-developer-tools/00-sugar/00-installation.md",sourceDirName:"03-developer-tools/00-sugar",slug:"/developer-tools/sugar/installation",permalink:"/developer-tools/sugar/installation",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/00-installation.md",tags:[],version:"current",lastUpdatedAt:1660203548,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Sugar: Candy Machine CLI",permalink:"/developer-tools/sugar/"},next:{title:"Preparing your Assets",permalink:"/developer-tools/sugar/preparing-assets"}},v={},N=[{value:"Binaries",id:"binaries",level:2},{value:"Recommended Installation Method",id:"recommended-installation-method",level:2},{value:"Advanced Installation Methods",id:"advanced-installation-methods",level:2},{value:"Crates.io",id:"cratesio",level:3},{value:"Build From Source",id:"build-from-source",level:3}],w={toc:N};function C(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To install, either download a binary, install from Crates.io, or install from source. Non-technical users will typically find using a pre-built binary to be simpler."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"When installing from crates.io or from source on Ubuntu or WSL (Windows Subsystem for Linux) you may need to install some additional dependencies:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libudev-dev pkg-config unzip\n"))),(0,l.kt)("h2",{id:"binaries"},"Binaries"),(0,l.kt)("p",null,"Binaries for the supported OS can be found at:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/sugar/releases"},"Sugar Releases"))),(0,l.kt)("h2",{id:"recommended-installation-method"},"Recommended Installation Method"),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(b,{value:"unix",label:"MacOS, Linux, WSL",mdxType:"TabItem"},(0,l.kt)("p",null,"Run this install script in your terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://sugar.metaplex.com/install.sh)\n")),(0,l.kt)("p",null,"This will install the binary to your machine and add it to your PATH.")),(0,l.kt)(b,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the Winstaller executable from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/winstaller/releases/latest/download/winstaller.exe"},"here"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Try to run the binary by double-clicking on it. If you get a pop-up message warning about an untrusted binary try clicking ",(0,l.kt)("inlineCode",{parentName:"p"},"More Info")," and then ",(0,l.kt)("inlineCode",{parentName:"p"},"Run Anyway"),". If you do not have this option, follow steps 3 - 6. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Right-click on the executable file and go to ",(0,l.kt)("inlineCode",{parentName:"p"},"Properties"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Properties.PNG",src:n(21337).Z+"#radius#shadow",width:"1295",height:"799"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you trust the Metaplex developer team, check the ",(0,l.kt)("inlineCode",{parentName:"p"},"Unblock")," button as show in the image below. This will allow you to run this binary on your computer since Microsoft does not trust it automatically."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Unblock.PNG",src:n(93450).Z+"#radius#shadow",width:"497",height:"653"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Apply")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Double-click the executable file, and it will open a terminal and begin to install Sugar.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If everything completed successfully you will get a message saying so."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"installed.PNG",src:n(7532).Z+"#radius#shadow",width:"1097",height:"630"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Try running ",(0,l.kt)("inlineCode",{parentName:"p"},"sugar")," in your terminal and see if it prints a list of commands you can use. If so you're good to go!")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Report any errors to the ",(0,l.kt)("inlineCode",{parentName:"p"},"#sugar")," channel on the ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/metaplex"},"Metaplex Discord"),"."))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This installer binary downloads the latest Sugar binary version, unzips it and copies it to a folder in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment. If you have Rust, the binary will be copied to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),", otherwise it creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"SugarCLI")," folder in your ",(0,l.kt)("inlineCode",{parentName:"p"},"%LOCALAPPDATA%")," directory. Once the binary is at that location, your OS will find it automatically, and you will be able to run the sugar binary from any directory in your file system as a normal command-line application.")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The modifications to your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," variable may not take effect until the terminal is restarted. Follow the instructions of the installation script to see whether the terminal needs to be restarted or not.")),(0,l.kt)("h2",{id:"advanced-installation-methods"},"Advanced Installation Methods"),(0,l.kt)("h3",{id:"cratesio"},"Crates.io"),(0,l.kt)("p",null,"In order to install sugar from Crates.io, you will need to have ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed in your system. It is recommended to install Rust using ",(0,l.kt)("inlineCode",{parentName:"p"},"rustup"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,l.kt)("p",null,"After the installation completes, running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rustc --version\n")),(0,l.kt)("p",null,"should print the version of the Rust compiler. If the command fails, check if the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin")," directory is in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."),(0,l.kt)("p",null,"The next step is to install Sugar from Crates.io:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install sugar-cli\n")),(0,l.kt)("p",null,"This will download the Sugar code from Crates.io and automatically install it for you."),(0,l.kt)("h3",{id:"build-from-source"},"Build From Source"),(0,l.kt)("p",null,"In order to build Sugar from the source code, you will need to have ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed in your system. It is recommended to install Rust using ",(0,l.kt)("inlineCode",{parentName:"p"},"rustup"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,l.kt)("p",null,"After the installation completes, running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rustc --version\n")),(0,l.kt)("p",null,"should print the version of the Rust compiler. If the command fails, check if the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin")," directory is in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."),(0,l.kt)("p",null,"The next step is to clone Sugar repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/metaplex-foundation/sugar.git\n")),(0,l.kt)("p",null,"This will create a directory ",(0,l.kt)("inlineCode",{parentName:"p"},"sugar")," with the latest code from the repository. Switch to the newly created directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd sugar\n")),(0,l.kt)("p",null,"Then, you can build and install the binary to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install --path ./\n")),(0,l.kt)("p",null,"As long as ",(0,l.kt)("inlineCode",{parentName:"p"},"./cargo/bin")," is in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable, you will be able to execute ",(0,l.kt)("inlineCode",{parentName:"p"},"sugar")," from any directory in your file system."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," You need to execute ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo install")," from Sugar source code root directory ","\u2014"," the directory where the ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," is located.")))}C.isMDXComponent=!0},21337:function(e,t,n){t.Z=n.p+"assets/images/Properties-a728fa4422df37b3700247294874ce06.png"},93450:function(e,t,n){t.Z=n.p+"assets/images/Unblock-bc100bf8d7193682c0a75fa01418d07e.png"},7532:function(e,t,n){t.Z=n.p+"assets/images/installed-2cc250e376836b86f47ed98ab4aca7d2.png"}}]);