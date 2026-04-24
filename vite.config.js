import { defineConfig } from "vite";
import { compression, defineAlgorithm } from "vite-plugin-compression2";
import * as zlib from "zlib";
import * as fs from "fs";
import * as path from "path";

export default defineConfig({
  root: "demo",
  base: "/vanillakit/",
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
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
    {
      name: "github-pages-404",
      closeBundle() {
        const outDir = path.resolve("docs");
        fs.copyFileSync(
          path.join(outDir, "index.html"),
          path.join(outDir, "404.html"),
        );
      },
    },
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
