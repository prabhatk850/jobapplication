module.exports = {
  settings: {
    react: {
     version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // suppress errors for missing 'import React' in files
   "react/react-in-jsx-scope": "off",
   "react/prop-types": "off",
   // allow jsx syntax in js files (for next.js project)
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}