import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { NoirPreset } from '@/services/primevue.ts'
import { usePostHog } from '@/composables/usePostHog.ts'
import { router } from '@/services/router.ts'
import { i18n } from '@/services/i18n'

const app = createApp(App)

app
  .use(createPinia())
  .use(PrimeVue, {
    theme: {
      preset: NoirPreset,
      options: {
        darkModeSelector: '.c-dark-mode',
        cssLayer: {
          name: 'primevue',
          order: 'theme, base, primevue',
        },
      },
    },
  })
  .use(router)
  .use(i18n)

if (import.meta.env.VITE_POSTHOG_ENABLED === 'true') {
  usePostHog()
}

app.mount('#app')
