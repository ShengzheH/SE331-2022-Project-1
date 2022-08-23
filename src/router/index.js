import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PeopleDetailView from '../views/PeopleDetailView.vue'
import PeopleVaccineDetailView from '../views/PeopleVaccineDetailView'
import VaccineDetailView from '../views/VaccineDetailView.vue'
import LayoutView from '../views/LayoutView.vue'
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
    name: 'Layout',
    component: LayoutView,
    props: true,
    children: [
      {
        path: '',
        name: 'PeopleDetail',
        component: PeopleDetailView,
        props: true
      },
      {
        path: '',
        name: 'PeopleVaccineDetail',
        component: PeopleVaccineDetailView,
        props: true
      }
    ]
  },
  {
    path: '',
    name: 'VaccineDetail',
    component: VaccineDetailView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
