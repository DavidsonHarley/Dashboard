module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/button-has-type': 0,
    'no-console': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'default-param-last': 0,
    'no-unsafe-optional-chaining': 0,
    'import/order': 0,
  },
};
