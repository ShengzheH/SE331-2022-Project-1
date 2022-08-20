import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PeopleDetailView from '../views/PeopleDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1
    })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/people/:id',
    name: 'PeopleDetail',
    component: PeopleDetailView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
