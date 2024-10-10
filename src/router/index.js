import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import LinksPage from '../pages/links/LinksPage.vue'
import FeedPage from '../pages/feed/FeedPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/links', component: LinksPage },
  { path: '/feed/:id', component: FeedPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router