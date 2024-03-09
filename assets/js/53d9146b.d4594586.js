"use strict";(self.webpackChunk_minimajs_docs=self.webpackChunk_minimajs_docs||[]).push([[49],{320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(86),r=n(6491);const i={title:"Context",sidebar_position:8,tags:["context"]},o=void 0,a={id:"Guide/context",title:"Context",description:"Introduction",source:"@site/docs/Guide/context.md",sourceDirName:"Guide",slug:"/Guide/context",permalink:"/Guide/context",draft:!1,unlisted:!1,tags:[{label:"context",permalink:"/tags/context"}],version:"current",sidebarPosition:8,frontMatter:{title:"Context",sidebar_position:8,tags:["context"]},sidebar:"defaultSidebar",previous:{title:"Middleware",permalink:"/Guide/middleware"},next:{title:"Error Handling",permalink:"/Guide/error"}},c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Using Context",id:"using-context",level:3},{value:"References",id:"references",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"The concept of Context is fundamental to backend development, and it's a core feature of the minimajs framework. Context enables sharing data within the request scope without the need to explicitly pass it around."}),"\n",(0,s.jsx)(t.h3,{id:"using-context",children:"Using Context"}),"\n",(0,s.jsx)(t.p,{children:"Let's delve into this concept with examples:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { getQuery, createContext } from "@minimajs/server";\n\n// Create a context for storing and retrieving a message\nconst [getMessage, setMessage] = createContext<string>("");\n\n// Function that utilizes the message from the context\nfunction somethingForHello() {\n  const message = getMessage();\n  console.log(`The message: ${message}`);\n}\n\n// Request handler for the \'/hello\' endpoint\nfunction helloHandler() {\n  const message = getQuery("message");\n  setMessage(`Hello ${message}`); // Set the message for the request scope\n  somethingForHello(); // Use the message\n}\n\napp.get("/hello", helloHandler);\n'})}),"\n",(0,s.jsx)(t.p,{children:"Context is particularly useful for passing data from a middleware to a request callback:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Creating a Context"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="src/hello/context.ts"',children:'import { createContext } from "@minimajs/server";\n\n// Define the User interface\nexport interface User {\n  name: string;\n}\n\n// Create a context for storing and retrieving user data\nexport const [getUser, setUser] = createContext<User>({ name: "" });\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Creating a Middleware"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/hello/middleware.ts"',children:'import { getHeaders } from "@minimajs/server";\nimport { setUser } from "./context";\n\n// Middleware to intercept and set user data from headers\nfunction userInterceptor() {\n  const headers = getHeaders();\n  if (headers["x-user"]) {\n    setUser(JSON.parse(headers["x-user"]));\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Defining a Module"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/hello/index.ts"',children:'import { type App } from "@minimajs/server";\n\n// Request handler for the \'/\' endpoint\nfunction helloHandler() {\n  const message = getQuery("message");\n  setMessage(`Hello ${message}`); // Set the message for the request scope\n  somethingForHello(); // Use the message\n}\n\n// Export the helloModule function\nexport function helloModule(app: App) {\n  app.get("/", helloHandler);\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Putting it All Together"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/index.ts"',children:'import { interceptor } from "@minimajs/server";\nimport { userInterceptor } from "./hello/middleware";\nimport { helloModule } from "./hello";\n\n// Register the userInterceptor middleware and helloModule request handler\napp.register(interceptor([userInterceptor], helloModule), { prefix: "/hello" });\n'})}),"\n",(0,s.jsx)(t.p,{children:"Contexts are a powerful tool for managing and sharing data within the scope of a request or a specific part of an application. They allow developers to avoid passing data explicitly between functions or components, making code cleaner and more maintainable. Here are some common use cases for contexts:"}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.p,{children:["Certainly! Below is the signature for the ",(0,s.jsx)(t.code,{children:"createContext"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"createContext<T>(defaultValue: T): [() => T, (value: T) => void]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This signature indicates that ",(0,s.jsx)(t.code,{children:"createContext"})," is a generic function that takes a default value of type ",(0,s.jsx)(t.code,{children:"T"}),". It returns an array containing two functions:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The first function (",(0,s.jsx)(t.code,{children:"() => T"}),") retrieves the current value stored in the context."]}),"\n",(0,s.jsxs)(t.li,{children:["The second function (",(0,s.jsx)(t.code,{children:"(value: T) => void"}),") sets a new value in the context."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here's a breakdown of each part of the signature:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"createContext<T>"}),": This indicates that ",(0,s.jsx)(t.code,{children:"createContext"})," is a generic function that takes a type parameter ",(0,s.jsx)(t.code,{children:"T"}),", representing the type of data to be stored in the context."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"(defaultValue: T)"}),": This parameter specifies the default value of type ",(0,s.jsx)(t.code,{children:"T"})," that will be set in the context initially."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"[() => T, (value: T) => void]"}),": This is the return type of the ",(0,s.jsx)(t.code,{children:"createContext"})," function, indicating that it returns an array containing two functions:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"() => T"}),": This function retrieves the current value stored in the context."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"(value: T) => void"}),": This function sets a new value in the context."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"With this signature, users can create and manipulate contexts to store and retrieve data within the request scope efficiently."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6491:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(1654);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);