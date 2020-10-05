[![Build Status](https://travis-ci.org/khu-md/learn-gatsby.svg?branch=main)](https://travis-ci.org/khu-md/learn-gatsby)

This app implements a progressive web application frontend using Gatsby and [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/) and [gatsby-plugin-offline](https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/).

## Bugs

```
       > gatsby build
       
       success open and validate gatsby-configs - 0.086s
lscpu: failed to determine number of CPUs: /sys/devices/system/cpu/possible: No such file or directory
       success load plugins - 0.773s
       success onPreInit - 0.046s
       success delete html and css files from previous builds - 0.004s
       success initialize cache - 0.008s
       success copy gatsby files - 0.043s
       success onPreBootstrap - 0.017s
lscpu: failed to determine number of CPUs: /sys/devices/system/cpu/possible: No such file or directory
       success createSchemaCustomization - 0.008s
       success Checking for changed pages - 0.000s
       success source and transform nodes - 0.178s
       success building schema - 0.488s
       info Total nodes: 53, SitePage nodes: 3 (use --verbose for breakdown)
       success createPages - 0.038s
       success Checking for changed pages - 0.000s
       success createPagesStatefully - 0.076s
       success update schema - 0.063s
       success onPreExtractQueries - 0.001s
       success extract queries from components - 0.201s
       success write out redirect data - 0.001s
       success Build manifest and related icons - 0.113s
       success onPostBootstrap - 0.115s
       info bootstrap finished - 5.199s
       success run static queries - 0.012s - 1/1 80.81/s
error There was an error in your GraphQL query:
Cannot return null for non-nullable field SitePage.internalComponentName.
The field "SitePage.internalComponentName." was explicitly defined as non-nullable via the schema customization API (by yourself or a plugin/theme). This means that this field is not optional and you have to define a value. If this is not your desired behavior and you defined the schema yourself, go to "createTypes" in gatsby-node.js. If you're using a plugin/theme, you can learn more here on how to fix field types:
https://www.gatsbyjs.org/docs/schema-customization/#fixing-field-types
   1 | query tmpbuildF8B90555SrcpagesindexJs3427033138 {
   2 |   allSitePage {
   3 |     edges {
   4 |       node {
   5 |         path
>  6 |         internalComponentName
     |         ^
   7 |         id
   8 |       }
   9 |     }
  10 |   }
  11 | }
  12 | 
File path: /tmp/build_f8b90555/src/pages/index.js
Url path: /
Plugin: none
       not finished run page queries - 0.026s
```

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
