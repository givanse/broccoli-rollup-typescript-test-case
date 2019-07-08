import rollup from "broccoli-rollup";
import typescript from "rollup-plugin-typescript";

export default function(options) {

  return rollup("src", {
    rollup: {
      input: "index.ts",
      plugins: [typescript()],
      output: {
        file: "bundle.js",
        format: "iife",
      }
    }
  });
}
