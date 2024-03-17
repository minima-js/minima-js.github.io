"use strict";(self.webpackChunk_minimajs_docs=self.webpackChunk_minimajs_docs||[]).push([[7180],{2715:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(86),a=r(6491),i=r(8328),l=r(4063);const s={title:"Getting started",sidebar_position:2,tags:["installation","app"]},o=void 0,c={id:"Guide/getting-started",title:"Getting started",description:"Installation",source:"@site/docs/Guide/getting-started.md",sourceDirName:"Guide",slug:"/Guide/getting-started",permalink:"/Guide/getting-started",draft:!1,unlisted:!1,tags:[{label:"installation",permalink:"/tags/installation"},{label:"app",permalink:"/tags/app"}],version:"current",sidebarPosition:2,frontMatter:{title:"Getting started",sidebar_position:2,tags:["installation","app"]},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Routing",permalink:"/Guide/routing"}},u={},d=[{value:"Installation",id:"installation",level:3},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Setting Up Your Project",id:"setting-up-your-project",level:3},{value:"Creating Your Application",id:"creating-your-application",level:4},{value:"Using tsc Compiler",id:"using-tsc-compiler",level:3},{value:"Using ebx Bundler",id:"using-ebx-bundler",level:3},{value:"Development Workflow",id:"development-workflow",level:3},{value:"Production Build",id:"production-build",level:3},{value:"Starting the Server",id:"starting-the-server",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(l.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i @minimajs/server\n"})})}),(0,t.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @minimajs/server\n"})})}),(0,t.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @minimajs/server\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,t.jsx)(n.p,{children:"Your project directory structure should look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.ts         // Entry point\n\u2502   \u2514\u2500\u2500 user             // User module\n\u2502       \u2514\u2500\u2500 index.ts     // User module entry point\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-your-project",children:"Setting Up Your Project"}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that your ",(0,t.jsx)(n.code,{children:"package.json"})," file has the ",(0,t.jsx)(n.code,{children:'"type": "module"'})," field to enable ECMAScript modules (ESM) support:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "hello-nodejs",\n  "type": "module"\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"creating-your-application",children:"Creating Your Application"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="src/index.ts"',children:'import { createApp, getParam } from "@minimajs/server";\n\nconst app = createApp();\n\napp.get("/:name", () => `Hello ${getParam("name")}!`);\n\nawait app.listen({ port: 1234 });\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This code creates a MinimaJS application with a single route handler for the root URL ",(0,t.jsx)(n.code,{children:'("/")'})," and a parameter ",(0,t.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"That's all!"}),"\n",(0,t.jsx)(n.p,{children:"Now, You have following options for compiling and running your TypeScript project:"}),"\n",(0,t.jsx)(n.h3,{id:"using-tsc-compiler",children:"Using tsc Compiler"}),"\n",(0,t.jsxs)(n.p,{children:["While you can compile your TypeScript code using the TypeScript Compiler (",(0,t.jsx)(n.code,{children:"tsc"}),") and then run the compiled JavaScript files, it might involve multiple steps. Here's how you can do it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tsc src/*.ts --module NodeNext --moduleResolution NodeNext --outDir dist\nnode dist/index.js\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u2514\u2500\u2500 /:name (GET, HEAD)\n\nINFO (84531): Server listening at http://0.0.0.0:1234\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl http://0.0.0.0:1234/John\n> Hello John!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-ebx-bundler",children:"Using ebx Bundler"}),"\n",(0,t.jsxs)(n.p,{children:["On the other hand, you can utilize the ",(0,t.jsx)(n.code,{children:"ebx"})," bundler, known for its lightning-fast performance and seamless bundling experience tailored specifically for Node.js projects.\nRead more ",(0,t.jsx)(n.a,{href:"https://npmjs.com/package/ebx",children:"https://npmjs.com/package/ebx"})]}),"\n",(0,t.jsx)(n.p,{children:"Here's how you can leverage it:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(l.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i --save-dev ebx\n"})})}),(0,t.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev ebx\n"})})}),(0,t.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev ebx\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Add following inside your ",(0,t.jsx)(n.code,{children:"package.json"})," file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    // highlight-start\n    "dev": "ebx src/index.ts -wsr",\n    "build": "ebx src/index.ts",\n    "start": "node dist/index.js"\n    // highlight-end\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"ebx"}),", you can directly bundle and execute your TypeScript code in a single step, significantly reducing build times and simplifying your workflow."]}),"\n",(0,t.jsx)(n.h3,{id:"development-workflow",children:"Development Workflow"}),"\n",(0,t.jsx)(n.p,{children:"To start your project in development mode."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn dev\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command compiles your TypeScript code and starts the server with automatic reloading enabled."}),"\n",(0,t.jsx)(n.h3,{id:"production-build",children:"Production Build"}),"\n",(0,t.jsx)(n.p,{children:"To build your project for production deployment, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command compiles your TypeScript code into JavaScript files in the ",(0,t.jsx)(n.code,{children:"dist"})," directory."]}),"\n",(0,t.jsx)(n.h3,{id:"starting-the-server",children:"Starting the Server"}),"\n",(0,t.jsx)(n.p,{children:"Once your project is built, you can start the server using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command runs the compiled JavaScript files in the ",(0,t.jsx)(n.code,{children:"dist"})," directory."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},4063:(e,n,r)=>{r.d(n,{A:()=>l});r(1654);var t=r(3237);const a={tabItem:"tabItem_NnuE"};var i=r(86);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},8328:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(1654),a=r(3237),i=r(2330),l=r(1353),s=r(6489),o=r(4335),c=r(1316),u=r(4112);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function p(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,l.W6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,o.aZ)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function g(e){var n,r,a,i,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,g=p(e),v=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:g})})),j=v[0],x=v[1],f=m({queryString:c,groupId:d}),b=f[0],y=f[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Dv)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],N=w[1],S=function(){var e=null!=b?b:k;return h({value:e,tabValues:g})?e:null}();return(0,s.A)((function(){S&&x(S)}),[S]),{selectedValue:j,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),N(e)}),[y,N,g]),tabValues:g}}var v=r(6651);const j={tabList:"tabList_aNfz",tabItem:"tabItem_F7Rk"};var x=r(86);function f(e){var n=e.className,r=e.block,t=e.selectedValue,l=e.selectValue,s=e.tabValues,o=[],c=(0,i.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=o.indexOf(n),a=s[r].value;a!==t&&(c(n),l(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;r=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var i,l=o.indexOf(e.currentTarget)-1;r=null!=(i=o[l])?i:o[o.length-1]}null==(n=r)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.A)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function b(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===a}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,x.jsx)(f,Object.assign({},e,n)),(0,x.jsx)(b,Object.assign({},e,n))]})}function w(e){var n=(0,v.A)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},6491:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var t=r(1654);const a={},i=t.createContext(a);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);