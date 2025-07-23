import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import WelcomePage from '@/pages/WelcomePage.vue'
import NotFound from '@/pages/NotFound.vue'
import { getUserLanguage } from '@/services/i18n'
import GamePage from '@/pages/GamePage.vue'

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
  {
    path: '/:language(en|pt|es)/game',
    component: GamePage,
    name: 'game',
  },
  {
    path: '/:language(en|pt|es)/contact',
    component: () => import('@/pages/ContactPage.vue'),
    name: 'contact',
  },
  {
    path: '/:language(en|pt|es)/terms-of-usage',
    component: () => import('@/pages/TermsPage.vue'),
    name: 'terms-of-usage',
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
