const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      name: 'foobar',
      file: 'dist/bundle.js',
      format: 'iife',
    },
  ],
  plugins: [commonjs(), resolve(), typescript()]
};
