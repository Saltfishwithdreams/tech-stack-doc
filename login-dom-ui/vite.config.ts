import {defineConfig, loadEnv, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default ({mode}) => defineConfig({
  base:'/',
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      "@": path.join(__dirname, 'src'),
    }
  },
  build:{
    brotliSize: false,
    /** 消除打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 2000,
    /** vite 2.6.x 以上需要配置 minify: terser，terserOptions 才能生效 */
    minify: "terser",
    /** 在 build 代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      },
      output: {
        /** 删除注释 */
        comments: false
      }
    },
    /** 打包后静态资源目录 */
    assetsDir: "static"
  },
  server:{
    https: false,
    /** host 设置为 true 才可以使用 network 的形式，以 ip 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 3000,
    /** 是否自动打开浏览器 */
    open: true,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    /** 接口代理 */
    proxy: {
      "/api": {
        target: 'http://localhost:8080',
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  plugins: [vue()]
})
