"use strict";(self.webpackChunk_minimajs_docs=self.webpackChunk_minimajs_docs||[]).push([[8629],{9795:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=i(86),r=i(6491);const o={title:"Logging",sidebar_position:4,tags:["context","logger"]},s="MinimaJS: Integrated Logging with Pino",l={id:"Guide/logger",title:"Logging",description:"MinimaJS streamlines development by offering a built-in logger powered by Pino. This logger simplifies debugging and monitoring by providing informative messages about your application's execution.",source:"@site/docs/Guide/logger.md",sourceDirName:"Guide",slug:"/Guide/logger",permalink:"/Guide/logger",draft:!1,unlisted:!1,tags:[{label:"context",permalink:"/tags/context"},{label:"logger",permalink:"/tags/logger"}],version:"current",sidebarPosition:4,frontMatter:{title:"Logging",sidebar_position:4,tags:["context","logger"]},sidebar:"defaultSidebar",previous:{title:"Http Helpers",permalink:"/Guide/http"},next:{title:"Module",permalink:"/Guide/module"}},c={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"minimajs-integrated-logging-with-pino",children:"MinimaJS: Integrated Logging with Pino"}),"\n",(0,t.jsx)(n.p,{children:"MinimaJS streamlines development by offering a built-in logger powered by Pino. This logger simplifies debugging and monitoring by providing informative messages about your application's execution."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Leveraging the Built-in Logger:"})}),"\n",(0,t.jsx)(n.p,{children:"Here's how to integrate it into your code:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="src/services/index.ts"',children:'import { logger, type App, getSearchParams } from "@minimajs/server";\n\nasync function serviceHandler() {\n  // Log request details with search parameters\n  logger.info("received service request with %o", getSearchParams());\n  return "service request";\n}\n\nexport async function serviceModule(app: App) {\n  app.get("/", serviceHandler);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this example:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["We import ",(0,t.jsx)(n.code,{children:"logger"})," and other necessary functions."]}),"\n",(0,t.jsxs)(n.li,{children:["Inside ",(0,t.jsx)(n.code,{children:"serviceHandler"}),", we leverage ",(0,t.jsx)(n.code,{children:"logger.info"})," to log a message with the received search parameters using a placeholder (",(0,t.jsx)(n.code,{children:"%o"}),") for the object."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console Output:"})}),"\n",(0,t.jsxs)(n.p,{children:["When you run your application and make a request like ",(0,t.jsx)(n.code,{children:"curl http://localhost:1234/services?name=John"}),", the console might display an output similar to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'INFO (serviceModule:serviceHandler): received service request with {"name":"John"}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Breakdown of the Output:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"INFO"}),": The log level (in this case, informational)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"(serviceModule:serviceHandler)"}),": Indicates the source of the log message (<Module Name>:<Handler function>)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'received service request with {"name":"John"}'}),": The actual log message with the interpolated search parameters object."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Embrace Streamlined Development with MinimaJS's Built-in Logging"})}),"\n",(0,t.jsx)(n.p,{children:"By incorporating the built-in Pino logger, MinimaJS empowers you to construct well-instrumented Node.js applications, fostering efficient development and a clear understanding of your application's execution flow."})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6491:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(1654);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);