"use strict";(self.webpackChunkwebsite_documentation=self.webpackChunkwebsite_documentation||[]).push([[46],{5496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"introduction/timber","title":"Understanding Timber","description":"Timber is a templating engine that separates HTML and display logic from PHP logic and data. This allows PHP files to prepare data for the Timber context, which can then be accessed and rendered in TWIG templates, such as {{ post.title }}.","source":"@site/docs/introduction/timber.md","sourceDirName":"introduction","slug":"/introduction/timber","permalink":"/website-documentation/docs/introduction/timber","draft":false,"unlisted":false,"editUrl":"https://github.com/StartDigitalAU/website-documentation/tree/main/docs/introduction/timber.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Cloning the Boilerplate Theme & Installing WordPress","permalink":"/website-documentation/docs/introduction/boilerplate"},"next":{"title":"Pushing to a Development Server","permalink":"/website-documentation/docs/introduction/development-server"}}');var s=n(4848),a=n(8453);const r={sidebar_position:3},o="Understanding Timber",l={},d=[{value:"Getting Started with Timber Tasks",id:"getting-started-with-timber-tasks",level:2},{value:"Task 1: Create a template to protect pages from non-admin users",id:"task-1-create-a-template-to-protect-pages-from-non-admin-users",level:3},{value:"Task 2: Understanding the page builder blocks",id:"task-2-understanding-the-page-builder-blocks",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"understanding-timber",children:"Understanding Timber"})}),"\n",(0,s.jsxs)(t.p,{children:["Timber is a templating engine that separates HTML and display logic from PHP logic and data. This allows PHP files to prepare data for the Timber context, which can then be accessed and rendered in TWIG templates, such as ",(0,s.jsx)(t.code,{children:"<h1>{{ post.title }}</h1>"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started-with-timber-tasks",children:"Getting Started with Timber Tasks"}),"\n",(0,s.jsx)(t.p,{children:"The following tasks will help you understand how to work with Timber templates and the page builder functionality. These exercises cover protecting admin-only pages and creating custom page builder blocks."}),"\n",(0,s.jsxs)(t.p,{children:["For more examples and advanced usage, check out the ",(0,s.jsx)(t.a,{href:"https://timber.github.io/docs/v2/integrations/advanced-custom-fields/",children:"Timber Cookbook"}),", which provides detailed recipes and best practices for working with Timber."]}),"\n",(0,s.jsx)(t.h3,{id:"task-1-create-a-template-to-protect-pages-from-non-admin-users",children:"Task 1: Create a template to protect pages from non-admin users"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create the files ",(0,s.jsx)(t.code,{children:"template-admin-only.php"})," in the theme root, and ",(0,s.jsx)(t.code,{children:"template-admin-only.twig"})," in ",(0,s.jsx)(t.code,{children:"/templates"})]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.code,{children:"template-admin-only.php"})," ensure you have the following to render out the template:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"use Timber\\Timber;\n\nglobal $post;\n\n$context = Timber::context();\n$timberPost = Timber::get_post($post->ID);\n$context['post'] = $timberPost;\n\n// Check if admin & redirect if not logic\n\n$templates = array(\"template-admin-only.twig\");\nTimber::render($templates, $context);\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.code,{children:"template-admin-only.twig"})," ensure you have the following to be able to build out the pages using the page builder:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-twig",children:"{% extends 'base.twig' %}\n\n{% block content %}\n\t{% for block in post.meta('page_builder') %}\n\t\t<div data-block=\"{{ block.acf_fc_layout }}\">\n\t\t\t{{ include('blocks/' ~ block.acf_fc_layout ~ '.twig', ignore_missing = true) }}\n\t\t</div>\n\t{% endfor %}\n{% endblock %}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Test & ensure it works when logged in & not logged in"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"task-2-understanding-the-page-builder-blocks",children:"Task 2: Understanding the page builder blocks"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install ACF Pro & sync the page builder fields JSON"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a layout within the page builder field group & name it ",(0,s.jsx)(t.code,{children:"Image text"}),", be sure to add a ",(0,s.jsx)(t.code,{children:"WYSIWYG field"})," & ",(0,s.jsx)(t.code,{children:"image field"})," to that layout block"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"/templates/blocks"})," create a file called ",(0,s.jsx)(t.code,{children:"image_text.twig"}),", ensuring it matches the name of the layout within the page builder ACF field group"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Within ",(0,s.jsx)(t.code,{children:"image_text.twig"})," create a simple text image 2-column layout & demonstrate retrieving the text & image within twig by using:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-twig",children:'<div>\n    <div>{{ block.name_of_wysiwyg_field }}</div>\n    <img src="{{ get_image(block.name_of_image_field).src }}" alt="{{ block.name_of_image_field.alt }}" />\n</div>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);