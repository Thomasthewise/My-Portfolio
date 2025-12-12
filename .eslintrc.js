module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // if using TS
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // your custom rules
    "no-var": "error",        // keep this for your own code
    "no-console": "warn",
    // any other rules you use
  },
  ignorePatterns: [
    "node_modules/",                  // always ignore node_modules
    "docs/scripts/third-party/**/*.js" // ignore all vendor scripts
  ],
};
