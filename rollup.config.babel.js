const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      name: 'foobar',
      file: 'dist/bundle.js',
      format: 'iife',
    },
  ],
  plugins: [
    commonjs(),
    resolve({extensions}),
    babel({extensions})
  ]
};

