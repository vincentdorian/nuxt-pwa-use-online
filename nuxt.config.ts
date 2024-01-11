// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
  ],

  pwa: {
		registerType: 'autoUpdate',
		manifest: {
			name: 'Nuxt Vite PWA',
			short_name: 'NuxtVitePWA',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		},
		devOptions: {
			enabled: true,
			type: 'module',
			navigateFallback: '/',
		},
  }
})
