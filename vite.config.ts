import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
     resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // 可选：简化 OL 导入路径
            'ol': path.resolve(__dirname, 'node_modules/ol')
        }
    },
    // 解决 OL 某些模块的打包警告（可选）
    optimizeDeps: {
        include: ['ol']
    },
    server: {
      port: 80,
      host: true,
      open: true,
    },
})
