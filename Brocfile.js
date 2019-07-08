const rollup = require("broccoli-rollup");
const typescript = require("rollup-plugin-typescript");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");

const extensions = [
  ".js", ".jsx", ".ts", ".tsx",
];

export default function(options) {

  return rollup(".", {
    rollup: {
      input: "src/index.ts",
      output: {
        name: "foobar",
        file: "bundle.js",
        format: "iife",
      },
      plugins: [
        commonjs(),
        resolve({extensions}),
        typescript({include: extensions}),
      ],
    }
  });
}
