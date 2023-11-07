[![Deploy](https://github.com/juelvaldivia/juelvaldivia.com/actions/workflows/ci.yml/badge.svg)](https://github.com/juelvaldivia/juelvaldivia.com/actions/workflows/ci.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/064e3771-582f-43bb-86e5-18ba9afd656f/deploy-status)](https://app.netlify.com/sites/juelvaldivia/deploys)

# Description

This project is my own web site you can visit here [juelvaldivia.com](https://juelvaldivia.com).
is building with ReactJS using TypeScript

## Features

A complete Blog feature:

- 🎈 Syntax Highlighting
- 🤖 SEO friendly with sitemap.xml and robots.txt
- ⚙️ RSS feed
- 📖 Pagination
- 🌈 Include a dark blog theme
- ⬇️ Markdown
- 📦 Image lazy loading
- 💎 Responsive design

Developer experience first:

- 🔥 Astro
- 🎨 Tailwind CSS with aspect ratio and typography plugin
- 🎉 TypeScript
- ✏️ ESLint compatible with .astro files
- 🛠 Prettier compatible with .astro files
- 🦊 Husky
- 🚫 lint-staged
- 🚨 Commitlint
- 🔧 One-click deploy on Netlify (or, manual if you prefer)

ESLint with:

- Airbnb styled guide
- TypeScript compatible
- Astro compatible
- Automatically remove unused imports
- Import sorting
- Tailwind CSS plugin

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

``` bash
git clone --depth=1 https://github.com/ixartz/Astro-boilerplate
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

``` bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your favorite browser
to see your project.

### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run clean`   | Remove `./dist` folder                       |
| `npm run lint`    | Run ESLint and report styling error          |


# Conventional commits

## Write better commit messages to be happy

## 1. Title (required)
- Must be start with a capital letter, i.e.
  #### `Add password validation test`
  instead of
  #### `add password validation test`

## 2. Prefix (required)
Indicates type of commit
  - ## feat
    #### `New feature to user.`
  - ## fix
    #### `Fix a bug that affects the user.`
  - ## perf
    #### `Changes that improve site performance.`
  - ## build
    #### `Changes in the build system, deployment or installation tasks.`
  - ## ci
    #### `Changes in continuos delivery.`
  - ## docs
    #### `Changes in documentation.`
  - ## refactor
    #### ` Refactoring of code such as variable or functions name changes..`
  - ## style
    #### `Formatting changes, tabs, spaces, or semicolons, etc. do not affects the user.`
  - ## test
    #### `Add test or refactor an existing code.`


## 3. Section (optional)
Location changed

## Bad commit example:

#### `add new code field to the user in login`
## Good commit example:
#### `feat(login): add new code field to the user`
