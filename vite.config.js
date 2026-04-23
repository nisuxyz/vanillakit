import { defineConfig } from "vite";
import { compression, defineAlgorithm } from "vite-plugin-compression2";
import * as zlib from "zlib";

export default defineConfig({
  root: "demo",
  base: "./",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        passes: 3,
        pure_getters: true,
        unsafe_arrows: true,
        unsafe_methods: true,
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        properties: {
          regex: /^_/, // mangle private _-prefixed properties
        },
      },
      format: {
        comments: false,
      },
    },
    cssMinify: "lightningcss",
    rollupOptions: {
      treeshake: {
        moduleSideEffects: true,
        propertyReadSideEffects: false,
      },
    },
    reportCompressedSize: true,
  },
  plugins: [
    // compression({
    //   algorithms: [
    //     defineAlgorithm('gzip', { level: 9 }),
    //     defineAlgorithm('brotliCompress', {
    //       params: {
    //         [zlib.constants.BROTLI_PARAM_QUALITY]: 11
    //       }
    //     })
    //   ]
    // })
  ],
});
