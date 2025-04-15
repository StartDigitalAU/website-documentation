"use strict";(self.webpackChunkwebsite_documentation=self.webpackChunkwebsite_documentation||[]).push([[282],{8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}},9536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"introduction/boilerplate","title":"Cloning the Boilerplate Theme & Installing WordPress","description":"This guide will walk you through setting up our WordPress boilerplate theme for local development.","source":"@site/docs/introduction/boilerplate.md","sourceDirName":"introduction","slug":"/introduction/boilerplate","permalink":"/website-documentation/docs/introduction/boilerplate","draft":false,"unlisted":false,"editUrl":"https://github.com/StartDigitalAU/website-documentation/tree/main/docs/introduction/boilerplate.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Set Up Your Developer Environment","permalink":"/website-documentation/docs/introduction/environment"},"next":{"title":"Understanding Timber","permalink":"/website-documentation/docs/introduction/"}}');var i=t(4848),r=t(8453);const l={sidebar_position:2},o="Cloning the Boilerplate Theme & Installing WordPress",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Clone the Boilerplate Theme",id:"step-1-clone-the-boilerplate-theme",level:2},{value:"Step 2: Install PHP Dependencies",id:"step-2-install-php-dependencies",level:2},{value:"Step 3: Database Setup",id:"step-3-database-setup",level:2},{value:"Step 4: Configure Security Keys",id:"step-4-configure-security-keys",level:2},{value:"Step 5: WordPress Installation",id:"step-5-wordpress-installation",level:2},{value:"Step 6: Start Development Server",id:"step-6-start-development-server",level:2},{value:"Step 7: Set Up Version Control",id:"step-7-set-up-version-control",level:2},{value:"Boilerroom npx Command",id:"boilerroom-npx-command",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cloning-the-boilerplate-theme--installing-wordpress",children:"Cloning the Boilerplate Theme & Installing WordPress"})}),"\n",(0,i.jsx)(n.p,{children:"This guide will walk you through setting up our WordPress boilerplate theme for local development."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before starting, ensure you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Laravel Herd installed and running"}),"\n",(0,i.jsx)(n.li,{children:"Composer installed globally"}),"\n",(0,i.jsx)(n.li,{children:"Node.js (v18+) and npm installed"}),"\n",(0,i.jsx)(n.li,{children:"Git configured with your credentials"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-clone-the-boilerplate-theme",children:"Step 1: Clone the Boilerplate Theme"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your terminal"}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to your project directory:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/Developer\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Clone the repository:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/StartDigitalAU/boilerroom introductorytask\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate into the project:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd introductorytask\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-install-php-dependencies",children:"Step 2: Install PHP Dependencies"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install Composer dependencies:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"composer install\n"})}),"\n","This will install all required PHP packages, WordPress core files and the theme's node dependencies."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-database-setup",children:"Step 3: Database Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open TablePlus or your preferred database client"}),"\n",(0,i.jsxs)(n.li,{children:["Create a new MySQL database:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name: introductorytask (or your project name)"}),"\n",(0,i.jsx)(n.li,{children:"Charset: utf8mb4"}),"\n",(0,i.jsx)(n.li,{children:"Collation: utf8mb4_unicode_ci"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Update your .env file with database credentials:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"DB_NAME=introductorytask\nDB_USER=root\nDB_PASSWORD=password\nDB_HOST=localhost\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-4-configure-security-keys",children:"Step 4: Configure Security Keys"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://roots.io/salts.html",children:"Roots Salts Generator"})]}),"\n",(0,i.jsx)(n.li,{children:"Copy the generated security keys"}),"\n",(0,i.jsx)(n.li,{children:"Paste them into your .env file, replacing the placeholder values"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-5-wordpress-installation",children:"Step 5: WordPress Installation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Start your local server using Laravel Herd"}),"\n",(0,i.jsxs)(n.li,{children:["Open your browser and navigate to:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"http://introductorytask.test\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Complete the WordPress installation wizard:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Site Title: Your Project Name"}),"\n",(0,i.jsx)(n.li,{children:"Username: Choose a secure username"}),"\n",(0,i.jsx)(n.li,{children:"Password: Generate a strong password"}),"\n",(0,i.jsx)(n.li,{children:"Email: Your work email address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-6-start-development-server",children:"Step 6: Start Development Server"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to the theme directory:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd wp-content/themes/startdigital\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Install Node.js dependencies:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Start the development server:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n","This will compile assets and watch for changes."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-7-set-up-version-control",children:"Step 7: Set Up Version Control"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a new GitHub repository"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update the remote URL:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git remote set-url origin https://github.com/StartDigitalAU/introductory-task\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify the new remote:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git remote -v\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Push your initial commit:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git push -u origin main\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"boilerroom-npx-command",children:"Boilerroom npx Command"}),"\n",(0,i.jsx)(n.p,{children:"Now in the future you can create a new project & database by running the following command in your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx npx create-boilerroom-app <project-name>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);