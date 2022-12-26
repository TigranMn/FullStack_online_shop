module.exports = {
   env: {
      browser: true,
      es2021: true,
		amd: true,
		node: true
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
   ],
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
		'no-duplicate-imports': 2,
      'block-scoped-var': 2,
      'default-case': 2,
      'default-case-last': 2,
      'default-param-last': 2,
      'eqeqeq': 2,
      'no-eval': 2,
      'no-var': 2,
      'jsx-quotes': [2,'prefer-single'],
		'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-extra-non-null-assertion': 0,
      'react/no-unescaped-entities': 0,
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 2,
      'react/prop-types': 0,
      '@typescript-eslint/no-non-null-assertion': 'off',
      useTabs: 0,
      quotes: ['error', 'single'],
      semi: ['error', 'always']
   }
};
