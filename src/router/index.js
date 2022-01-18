import { createRouter, createWebHistory } from 'vue-router'
import Main from '../Pages/Main/Main.vue'
import Form from '../Pages/Form/Form.vue'
import NotFound from '../Pages/NotFound/NotFound.vue'


const routes = [
  {
      path: '/',
      component: Main,
  },
  {
      path: '/validation',
      component: Form,
  },
  {
      path: '/:pathMatch(.*)',
      component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router