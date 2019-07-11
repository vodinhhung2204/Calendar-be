module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  "rules": {
    "func-names": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-restricted-globals": [
      "error",
      {
        "name": "event",
        "message": "Use local parameter instead."
      },
      {
        "name": "fdescribe",
        "message": "Do not commit fdescribe. Use describe instead."
      }
    ],
    "no-use-before-define": ["error", { "functions": true, "classes": true }],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ],
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "functions", "allow": [] }],
    "no-underscore-dangle": ["error", { "allow": ["id_", "_id"] }],
    "no-param-reassign": ["error", { "props": false }]
  }
};
