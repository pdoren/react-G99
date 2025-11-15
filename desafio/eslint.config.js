// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignorar carpetas generadas
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // Reglas para archivos JS/JSX (React)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // Reglas base de JS
    ...js.configs.recommended,

    // Reglas de React (flat config)
    ...reactPlugin.configs.flat.recommended,

    // ⚠️ Aquí va la parte que elimina el warning:
    settings: {
      react: {
        version: "detect", // <- detecta automáticamente la versión de React
      },
    },

    rules: {
      // Aquí puedes personalizar reglas adicionales:
      "react/react-in-jsx-scope": "off", // no hace falta React importado en cada archivo en Vite
      "no-unused-vars": "warn",
    },
  },

  // Si quieres reglas para CSS, puedes añadir algo aquí después
  // {
  //   files: ["**/*.css"],
  //   ...css.configs.recommended,
  // },
]);
