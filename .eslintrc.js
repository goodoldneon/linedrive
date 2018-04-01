module.exports = {
  parser: "babel-eslint",
  ecmaFeatures: {
    modules: true
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    "no-undef": "error",
    "no-var": "error",
    "no-unused-vars": "error",
    "prefer-const": "error"
  }
};
