/* eslint-disable import/no-anonymous-default-export */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/LibExport.ts",
    output: [
    //   {
    //     file: packageJson.main,
    //     format: "cjs",
    //     sourcemap: true,
    //   },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
//   {
//     input: "lib/esm/types/LibExport.d.ts",
//     output: [{ file: "lib/LibExport.d.ts", format: "esm" }],
//     plugins: [dts()],
//   },
];