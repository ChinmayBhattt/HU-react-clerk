# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
# 🚀 Clerk React App Documentation

This documentation provides an in-depth structure of the `clerk-react` project. It includes directory breakdown, component roles, configuration files, and a **Mermaid visual tree** to help developers navigate the project effectively.

---

## 🧾 Project Summary

The `clerk-react` app integrates **Clerk authentication** with **React + Vite + TailwindCSS**, aiming to provide secure and modern user authentication with reusable components.

---

## 📁 Project Structure

```mermaid
graph TD
  A[clerk-react/] --> B[.env]
  A --> C[.gitignore]
  A --> D[eslint.config.js]
  A --> E[index.html]
  A --> F[package.json]
  A --> G[package-lock.json]
  A --> H[postcss.config.cjs]
  A --> I[tailwind.config.cjs]
  A --> J[vite.config.js]
  A --> K[README.md]
  A --> L[src/]
  L --> L1[components/]
  L --> L2[pages/]
  L --> L3[hooks/]
  L --> L4[lib/]
  L --> L5[App.tsx]
  L --> L6[main.tsx]
  L1 --> L1a[UserButton.tsx]
  L1 --> L1b[SignIn.tsx]
  L1 --> L1c[SignUp.tsx]
  L2 --> L2a[Home.tsx]
  L2 --> L2b[Dashboard.tsx]
  L3 --> L3a[useUser.ts]
  L3 --> L3b[useSession.ts]
  L4 --> L4a[clerkClient.ts]
  L4 --> L4b[utils.ts]
```
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
