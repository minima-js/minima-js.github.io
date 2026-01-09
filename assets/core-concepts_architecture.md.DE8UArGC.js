import{_ as e,c as s,o as n,ag as t}from"./chunks/framework.dvv-DFtf.js";const u=JSON.parse('{"title":"Architecture","description":"","frontmatter":{},"headers":[],"relativePath":"core-concepts/architecture.md","filePath":"core-concepts/architecture.md"}'),o={name:"core-concepts/architecture.md"};function i(p,a,r,l,c,d){return n(),s("div",null,[...a[0]||(a[0]=[t(`<h1 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h1><p>Minima.js is designed with a modular and scalable architecture that allows developers to build modern web applications with ease. At its core, Minima.js is built on top of <a href="https://www.fastify.io/" target="_blank" rel="noreferrer">Fastify</a>, a high-performance Node.js web framework. This foundation provides Minima.js with a powerful and efficient request lifecycle management system.</p><h2 id="core-components" tabindex="-1">Core Components <a class="header-anchor" href="#core-components" aria-label="Permalink to &quot;Core Components&quot;">​</a></h2><p>A Minima.js application is composed of several key components that work together to handle incoming requests and send responses.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Incoming Request</span></span>
<span class="line"><span>      │</span></span>
<span class="line"><span>      ▼</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│   Fastify   │</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>      │</span></span>
<span class="line"><span>      ▼</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│ Middleware  │</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>      │</span></span>
<span class="line"><span>      ▼</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│   Hooks     │</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>      │</span></span>
<span class="line"><span>      ▼</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│   Context   │</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>      │</span></span>
<span class="line"><span>      ▼</span></span>
<span class="line"><span>┌─────────────┐</span></span>
<span class="line"><span>│ Route Handler│</span></span>
<span class="line"><span>└─────────────┘</span></span>
<span class="line"><span>      │</span></span>
<span class="line"><span>      ▼</span></span>
<span class="line"><span>Outgoing Response</span></span></code></pre></div><h3 id="_1-fastify-core" tabindex="-1">1. Fastify Core <a class="header-anchor" href="#_1-fastify-core" aria-label="Permalink to &quot;1. Fastify Core&quot;">​</a></h3><p>The foundation of Minima.js is Fastify. Fastify is responsible for handling the low-level HTTP server, routing, and request/response objects. Minima.js builds upon this foundation by adding a layer of abstraction and a set of powerful features.</p><h3 id="_2-middleware" tabindex="-1">2. Middleware <a class="header-anchor" href="#_2-middleware" aria-label="Permalink to &quot;2. Middleware&quot;">​</a></h3><p>Middleware functions are executed before the route handler and can be used to perform tasks such as authentication, logging, and request parsing. Minima.js supports Fastify&#39;s middleware and also provides its own middleware system.</p><h3 id="_3-hooks" tabindex="-1">3. Hooks <a class="header-anchor" href="#_3-hooks" aria-label="Permalink to &quot;3. Hooks&quot;">​</a></h3><p>Hooks are functions that can be executed at specific points in the request lifecycle. Minima.js provides a set of hooks that allow you to tap into the request/response lifecycle and add custom logic.</p><h3 id="_4-context" tabindex="-1">4. Context <a class="header-anchor" href="#_4-context" aria-label="Permalink to &quot;4. Context&quot;">​</a></h3><p>The context is a key feature of Minima.js. It&#39;s an object that is created for each request and contains all the information about the request, such as the request headers, body, and parameters. The context can also be used to share data between middleware, hooks, and the route handler.</p><h3 id="_5-route-handler" tabindex="-1">5. Route Handler <a class="header-anchor" href="#_5-route-handler" aria-label="Permalink to &quot;5. Route Handler&quot;">​</a></h3><p>The route handler is the function that is responsible for processing the request and generating a response. The route handler has access to the context and can use it to get information about the request and send a response.</p><h2 id="modular-structure" tabindex="-1">Modular Structure <a class="header-anchor" href="#modular-structure" aria-label="Permalink to &quot;Modular Structure&quot;">​</a></h2><p>Minima.js encourages a modular approach to building applications. You can structure your application as a collection of modules, where each module is responsible for a specific feature or set of related features. This makes your application easier to maintain and scale.</p><p>A typical Minima.js application has the following directory structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│   ├── index.ts         // Entry point</span></span>
<span class="line"><span>│   └── user             // User module</span></span>
<span class="line"><span>│       └── index.ts     // User module entry point</span></span>
<span class="line"><span>└── package.json</span></span></code></pre></div><p>In this structure, the <code>user</code> directory is a module that contains all the code related to the user feature. The <code>index.ts</code> file in the <code>user</code> directory is the entry point for the module and is responsible for defining the routes and other components of the module.</p>`,20)])])}const f=e(o,[["render",i]]);export{u as __pageData,f as default};
