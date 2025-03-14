module.exports = {
    root: true,
    env: {
      browser: true,
      es2020: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: ['react-refresh'],
    rules: {
        'no-console': 'error',
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  };
  