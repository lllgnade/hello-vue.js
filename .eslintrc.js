module.exports = {
  root: true,
  env: {
    node: true,
    // script setup 오류 해결
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //Prevent <script setup> variables used in <template> to be marked as unused
    "vue/script-setup-uses-vars": "error",
    "prettier/prettier": [
      // End Line Sequence가 CRLF인 문제 무시
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
