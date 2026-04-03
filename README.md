# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Leaf Design System

This project uses the [Leaf Design System](https://www.npmjs.com/package/@herbalifedev/leaf) (`@herbalifedev/leaf`). Contributor-facing guidelines live in [`.cursor/rules/design-system-guidelines.md`](.cursor/rules/design-system-guidelines.md).

## GitHub Pages (site deploy)

Live site: **[https://gab-hl.github.io/leaf-sample-vite/](https://gab-hl.github.io/leaf-sample-vite/)**

Publishing is tied to the **[gab-hl/leaf-sample-vite](https://github.com/gab-hl/leaf-sample-vite)** repo on the **gab-hl** GitHub account:

1. In the repo, **Settings → Pages**: source **Deploy from a branch**, branch **`main`**, folder **`/docs`**.
2. After you change **`src/`** (or anything the app imports), ship an updated static bundle:
   - Set **`NPM_TOKEN`** in your shell if needed for `@herbalifedev/leaf` (see [`.npmrc`](.npmrc)).
   - Run **`npm run build:pages`** (runs `vite build` and copies **`dist/`** into **`docs/`**, leaving other existing **`docs/*.md`** files untouched).
   - Commit the changed files under **`docs/`** and **`git push origin main`**.
3. Only pushes you make with permission on **gab-hl** (or a collaborator with deploy rights) update what GitHub Pages serves; the site does **not** auto-rebuild from `src/` alone.

## App shell layout

`AppShellLayout` renders a Leaf **global header** (`src/layouts/GlobalHeader.jsx`) and a scrollable main column for routed content. Primary links are listed in `src/navigation/mainNav.js` as `APP_NAV_ITEMS`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
