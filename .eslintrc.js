module.exports = {
  extends: ["@ztolley/eslint-config-typescript"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    camelcase: 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "no-use-before-define": "off",
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-wrap-multilines": 0,
  },
};
