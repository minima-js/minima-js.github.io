"use strict";(self.webpackChunk_minimajs_docs=self.webpackChunk_minimajs_docs||[]).push([[1706],{6637:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(86),t=n(6491);const s={title:"Error Handling",sidebar_position:9,tags:["error"]},i=void 0,a={id:"Guide/error",title:"Error Handling",description:"Customizing Error Responses",source:"@site/docs/Guide/error.md",sourceDirName:"Guide",slug:"/Guide/error",permalink:"/Guide/error",draft:!1,unlisted:!1,tags:[{label:"error",permalink:"/tags/error"}],version:"current",sidebarPosition:9,frontMatter:{title:"Error Handling",sidebar_position:9,tags:["error"]},sidebar:"defaultSidebar",previous:{title:"Context",permalink:"/Guide/context"},next:{title:"Schema",permalink:"/Packages/schema"}},c={},l=[{value:"Customizing Error Responses",id:"customizing-error-responses",level:2},{value:"HttpError.toJSON",id:"httperrortojson",level:3},{value:"decorateError",id:"decorateerror",level:3},{value:"setErrorHandler",id:"seterrorhandler",level:3}];function d(r){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...r.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"customizing-error-responses",children:"Customizing Error Responses"}),"\n",(0,o.jsx)(e.p,{children:"When it comes to handling errors in your application, customization is key. Here are three ways you can customize error responses in Minimajs"}),"\n",(0,o.jsx)(e.h3,{id:"httperrortojson",children:"HttpError.toJSON"}),"\n",(0,o.jsxs)(e.p,{children:["To customize error responses using the ",(0,o.jsx)(e.code,{children:"HttpError.toJSON"})," method, you can override the default behavior to return a custom JSON representation of the error. Here's an example:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:'import { HttpError } from "@minimajs/server/error";\n\nHttpError.toJSON = function (err: HttpError) {\n  return { statusCode: err.statusCode, error: err.message };\n};\n'})}),"\n",(0,o.jsx)(e.h3,{id:"decorateerror",children:"decorateError"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"decorateError"})," function allows you to customize error responses at the root level or module level of your application. Here's how you can use it:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:'import { createApp, abort, type App } from "@minimajs/server";\nimport { decorateError } from "@minimajs/server/error";\n\nconst app = createApp();\n\napp.get("/", () => {\n  abort("something is not right", 500);\n});\n// highlight-next-line\ndecorateError(app, (err) => {\n  return [err.statusCode, { error: err.message }];\n});\n\n// Module-level error handling\napp.register(function(app2: App) => {\n  // highlight-next-line\n  decorateError(app, (err) => {\n    return [err.statusCode, { error2: err.message }];\n  });\n  app.get(\'/something\', () => {\n    return \'some route\'\n  })\n})\n\nawait app.listen({ port: 1234 });\n'})}),"\n",(0,o.jsx)(e.h3,{id:"seterrorhandler",children:"setErrorHandler"}),"\n",(0,o.jsxs)(e.p,{children:["For more fine-grained control over error handling, you can use the ",(0,o.jsx)(e.code,{children:"setErrorHandler"})," method. This allows you to define a function that will be called whenever an error occurs. Here's an example:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"app.setErrorHandler(function (error, request, reply) {\n  // Log error\n  this.log.error(error);\n  // Send error response\n  reply.status(409).send({ ok: false });\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Keep in mind that ",(0,o.jsx)(e.code,{children:"setErrorHandler"})," will not catch not found (404) errors. For those scenarios, Use ",(0,o.jsx)(e.code,{children:"app.setNotFoundHandler"})," instead."]})]})}function p(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,o.jsx)(e,{...r,children:(0,o.jsx)(d,{...r})}):d(r)}},6491:(r,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var o=n(1654);const t={},s=o.createContext(t);function i(r){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function a(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:i(r.components),o.createElement(s.Provider,{value:e},r.children)}}}]);