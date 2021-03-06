module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    "plugin:vue/recommended",
    "@vue/airbnb",
    "@vue/typescript",
    "plugin:prettier/recommended"
  ],

  rules: {
    "no-console": "off",
    "no-debugger": "off"
  },

  parserOptions: {
    parser: "@typescript-eslint/parser"
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
