"use strict";(self.webpackChunk_minimajs_docs=self.webpackChunk_minimajs_docs||[]).push([[3390],{9240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(86),a=t(6491),i=t(8328),o=t(4063);const s={title:"Auth",sidebar_position:2},u="Authentication",l={id:"Packages/auth",title:"Auth",description:"Interceptors and authorization play crucial roles in ensuring the security and integrity of your application. MinimaJS provides powerful tools for creating and utilizing interceptors, enabling you to implement authentication and authorization seamlessly. This documentation will guide you through the process of creating interceptors, applying them to routes, and implementing custom authorization guards.",source:"@site/docs/Packages/auth.md",sourceDirName:"Packages",slug:"/Packages/auth",permalink:"/Packages/auth",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Auth",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Schema",permalink:"/Packages/schema"},next:{title:"Multipart",permalink:"/Packages/multipart"}},c={},d=[{value:"Creating Interceptors",id:"creating-interceptors",level:2},{value:"Using Interceptors",id:"using-interceptors",level:2},{value:"Authorization Guards",id:"authorization-guards",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i @minimajs/auth\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @minimajs/auth\n"})})}),(0,r.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @minimajs/auth\n"})})})]}),"\n",(0,r.jsx)(n.h1,{id:"interceptor-and-authorization-in-minimajs",children:"Interceptor and Authorization in MinimaJS"}),"\n",(0,r.jsx)(n.p,{children:"Interceptors and authorization play crucial roles in ensuring the security and integrity of your application. MinimaJS provides powerful tools for creating and utilizing interceptors, enabling you to implement authentication and authorization seamlessly. This documentation will guide you through the process of creating interceptors, applying them to routes, and implementing custom authorization guards."}),"\n",(0,r.jsx)(n.h2,{id:"creating-interceptors",children:"Creating Interceptors"}),"\n",(0,r.jsx)(n.p,{children:"Interceptors are middleware functions that intercept incoming requests before they reach the route handler. They are useful for performing tasks such as authentication, logging, or data transformation. Here's how you can create an interceptor for authentication using MinimaJS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="src/auth/interceptor.ts"',children:'import { createAuth, UnauthorizedError } from "@minimajs/auth";\n\nexport const [authMiddleware, guard, getUser] = createAuth(async () => {\n  const token = getHeader("x-user-token");\n  const user = await User.findByToken(token);\n  if (!user) {\n    throw new UnauthorizedError("Invalid credentials");\n  }\n  return user;\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, ",(0,r.jsx)(n.code,{children:"createAuth"})," creates an interceptor for authentication. It expects a callback function that retrieves the user based on the provided token. If the user is not found or the credentials are invalid, it throws an ",(0,r.jsx)(n.code,{children:"UnauthorizedError"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"using-interceptors",children:"Using Interceptors"}),"\n",(0,r.jsx)(n.p,{children:"Once you've created the interceptor, you can apply it to routes within your application. Here's how you can use the interceptor in your application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="src/index.ts"',children:'//\nimport { interceptor } from "@minimajs/server";\nimport { authMiddleware, getUser } from "./auth/interceptor";\n\nfunction getHome() {\n  const user: User | undefined = getUser();\n  user && console.log(`Logged in as ${user.name}`);\n}\n\n// All routes inside this module will have access to authentication\nfunction authenticatedModule(app: App) {\n  app.get("/", getHome);\n}\n\napp.register(interceptor([authMiddleware], authenticatedModule));\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, ",(0,r.jsx)(n.code,{children:"interceptor"})," is used to apply the ",(0,r.jsx)(n.code,{children:"authMiddleware"})," to the ",(0,r.jsx)(n.code,{children:"authenticatedModule"}),". This ensures that all routes within ",(0,r.jsx)(n.code,{children:"authenticatedModule"})," require authentication. Even if the user is not authenticated, the route handler will still be called, with ",(0,r.jsx)(n.code,{children:"null"})," as the user."]}),"\n",(0,r.jsx)(n.h2,{id:"authorization-guards",children:"Authorization Guards"}),"\n",(0,r.jsxs)(n.p,{children:["Authorization guards allow you to protect routes based on specific conditions or permissions. MinimaJS provides a flexible mechanism for implementing guards. You can use the ",(0,r.jsx)(n.code,{children:"guard"})," function returned from ",(0,r.jsx)(n.code,{children:"createAuth"})," to define custom guards:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Applying a guard to protect the route\napp.register(interceptor([authMiddleware, guard()], authenticatedModule));\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can customize guards further by specifying conditions or providing custom error messages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// Applying a custom guard with conditions and error message\napp.register(\n  interceptor([authMiddleware, guard((user) => user?.type === "admin", "Not authorized")], authenticatedModule)\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can create reusable guards for common scenarios:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="src/auth/guards.ts"',children:'export function admin() {\n  return guard((user) => user.isAdmin, "Only admin users are allowed");\n}\n\n// Using a reusable guard\napp.register(interceptor([authMiddleware, admin()], authenticatedModule));\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can also customize error messages within the guard itself:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="src/auth/guards.ts"',children:'export function admin() {\n  return guard((user) => {\n    if (!user) {\n      throw new UnauthorizedError("User not logged in");\n    }\n    if (!user.isAdmin) {\n      throw new UnauthorizedError("User is not authorized");\n    }\n  });\n}\n\n// Using a guard with custom error handling\napp.register(interceptor([authMiddleware, admin()], authenticatedModule));\n'})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"Interceptors and authorization guards are powerful features provided by MinimaJS for ensuring the security and integrity of your application. By creating custom interceptors and guards, you can implement robust authentication and authorization mechanisms tailored to your application's requirements. With MinimaJS, protecting your routes and ensuring data security has never been easier."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4063:(e,n,t)=>{t.d(n,{A:()=>o});t(1654);var r=t(3237);const a={tabItem:"tabItem_NnuE"};var i=t(86);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},8328:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(1654),a=t(3237),i=t(2330),o=t(1353),s=t(6489),u=t(4335),l=t(1316),c=t(4112);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.W6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,u.aZ)(s),(0,r.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function g(e){var n,t,a,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,d=e.groupId,g=h(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:g})})),v=f[0],b=f[1],y=m({queryString:l,groupId:d}),x=y[0],j=y[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Dv)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),A=w[0],k=w[1],I=function(){var e=null!=x?x:A;return p({value:e,tabValues:g})?e:null}();return(0,s.A)((function(){I&&b(I)}),[I]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);b(e),j(e),k(e)}),[j,k,g]),tabValues:g}}var f=t(6651);const v={tabList:"tabList_aNfz",tabItem:"tabItem_F7Rk"};var b=t(86);function y(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,s=e.tabValues,u=[],l=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=u.indexOf(n),a=s[t].value;a!==r&&(l(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;t=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;t=null!=(i=u[o])?i:u[u.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function j(e){var n=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(y,Object.assign({},e,n)),(0,b.jsx)(x,Object.assign({},e,n))]})}function w(e){var n=(0,f.A)();return(0,b.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(n))}},6491:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(1654);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);