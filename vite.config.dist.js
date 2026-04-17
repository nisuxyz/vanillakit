import { defineConfig } from "vite";
import { compression, defineAlgorithm } from "vite-plugin-compression2";
import * as zlib from "zlib";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["es"],
      fileName: "vanillakit",
    },
    outDir: "dist",
    emptyOutDir: true,
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        passes: 3,
        pure_getters: true,
        unsafe_arrows: true,
        unsafe_methods: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
  plugins: [
    compression({
      algorithms: [
        defineAlgorithm('gzip', { level: 9 }),
        defineAlgorithm('brotliCompress', {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11
          }
        })
      ]
    })
  ],
});
