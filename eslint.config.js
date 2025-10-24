import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: ["migrations/**/*", "next-env.d.ts", "node_modules/*", "messages/**/*"],
}, {
  rules: {
    "antfu/no-top-level-await": "off", // Allow top-level await
    "style/brace-style": ["error", "1tbs"], // Use the default brace style
    "ts/consistent-type-definitions": ["error", "type"], // Use `type` instead of `interface`
    "react/prefer-destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    "node/prefer-global/process": "off", // Allow using `process.env`
    "test/padding-around-all": "error", // Add padding in test files
    "test/prefer-lowercase-title": "off", // Allow using uppercase titles in test titles
    "react-refresh/only-export-components": "off",
  },
});
