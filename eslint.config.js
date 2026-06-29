const pluginChaiFriendly = require("eslint-plugin-chai-friendly");
const pluginNoOnlyTests = require("eslint-plugin-no-only-tests");
const prettier = require("eslint-plugin-prettier");
const { defineConfig } = require("eslint/config");
const globals = require("globals");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ),

    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier,
      "chai-friendly": pluginChaiFriendly,
      "no-only-tests": pluginNoOnlyTests,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {
      "import/resolver": {
        typescript: {},
      },
    },

    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "chai-friendly/no-unused-expressions": "error",
      "no-only-tests/no-only-tests": "error",
    },
  },
]);
