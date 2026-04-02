# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Leaf Design System

This project uses the [Leaf Design System](https://www.npmjs.com/package/@herbalifedev/leaf) (`@herbalifedev/leaf`). See [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) for guidelines on applying the design system.

## App shell layout

The sample uses a fixed left navigation rail with routed content in the main column. The rail width is defined once as a CSS custom property in `src/index.css`:

- **`--app-nav-width`** — default `16rem`; consumed by `src/layouts/AppShellLayout.jsx` for the sidebar width (`w-[var(--app-nav-width)]`) and main offset (`ml-[var(--app-nav-width)]`). Adjust only `:root { --app-nav-width: … }` if you want a wider or narrower nav without hunting for hard-coded `16rem` / `w-64` values.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
