import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest", // 支持最新的 ECMAScript
      sourceType: "module",  // 使用 ECMAScript 模块
    },
    rules: {
      "semi": 1,            // 警告：缺少分号
      "no-console": "off",  // 允许 console.log
    },
  },
];
