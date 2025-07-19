import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import WelcomePage from '@/pages/WelcomePage.vue'
import NotFound from '@/pages/NotFound.vue'
import { getUserLanguage } from '@/services/i18n'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: () => {
      const language = getUserLanguage()

      return { name: 'welcome', params: { language } }
    },
  },
  {
    path: '/:language(en|pt|es)',
    component: WelcomePage,
    name: 'welcome',
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
