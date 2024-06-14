import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react()],
	resolve: {
		alias: {
			react: 'react', // Проверьте, что это указывает на правильный путь к модулю React
			src: '/src',
			assets: '/src/assets',
			components: '/src/components',
			pages: '/src/pages',
			store: '/src/store',
			utils: '/src/utils'
		}
	},
	server: {
		port: 5174
	}
})
