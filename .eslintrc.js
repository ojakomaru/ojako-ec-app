export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
    // 'prettire',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', 'next.config.mjs'],
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     trailingComma: 'all',
    //     endOfLine: 'lf',
    //     semi: true,
    //     singleQuote: true,
    //     printWidth: 80,
    //     tabWidth: 2,
    //     parser: 'flow',
    //   },
    // ],
  },
};
