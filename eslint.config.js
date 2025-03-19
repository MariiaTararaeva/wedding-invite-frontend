import { defineConfig } from "eslint-define-config";

export default defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },

  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off", // optional, allow single-word components
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-explicit-any": "off", // you can enable this later if you want
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  settings: {
    prettier: {
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: "es5",
    },
  },
});
