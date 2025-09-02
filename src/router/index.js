import { createRouter, createWebHistory } from 'vue-router'
import CalculatorView from '../views/CalculatorView.vue'
import ConfigurationView from '../views/ConfigurationView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: CalculatorView
    },
    {
      path: '/config',
      name: 'configuration',
      component: ConfigurationView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router