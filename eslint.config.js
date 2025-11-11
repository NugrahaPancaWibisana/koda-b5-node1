import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      semi: 'error',
      'no-var': 'error',
      '@stylistic/quotes': ['warn', 'single'],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'no-duplicate-imports': 'error',
    },
  },
  globalIgnores(['eslint.config.js']),
]);
