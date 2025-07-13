import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import { NoirPreset } from '@/services/primevue.ts'
import { usePostHog } from '@/composables/usePostHog.ts'

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
  .directive('tooltip', Tooltip)

if (import.meta.env.VITE_POSTHOG_ENABLED === 'true') {
  usePostHog()
}

app.mount('#app')
