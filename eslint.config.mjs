import { configs } from '@sota1235/eslint-config';

/** @type {import('eslint').Linter.Config} */
export default [
  ...configs.base(),
  ...configs.typescript({
    tsconfigPath: './tsconfig.json', // optional
  }),
  ...configs.react(),
  {
    ignores: ['node_modules/', 'dist/'],
  }
];