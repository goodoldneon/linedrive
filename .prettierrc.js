module.exports = {
  printWidth: 100,
  parser: "flow",
  overrides: [
    {
      files: "*.{js,jsx}",
      options: {
        semi: false,
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "es5"
      }
    }
  ]
};
