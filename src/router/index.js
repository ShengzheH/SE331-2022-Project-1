import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PeopleDetailView from '../views/PeopleDetailView.vue'
import PeopleVaccineDetailView from '../views/PeopleVaccineDetailView'
import VaccineDetailView from '../views/VaccineDetailView.vue'
import LayoutView from '../views/LayoutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetWorkErrorView from '../views/NetworkErrorView.vue'
import PeopleService from '../services/PeopleService.js'
import NProgress from 'nprogress'
import GStore from '@/store'
import DoctorCommentView from '../views/DoctorCommentView.vue'
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
    beforeEnter: (to) => {
      return PeopleService.getPeople(to.params.id)
        .then((response) => {
          GStore.people = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            this.$router.push({
              name: '404Resource',
              params: { resoutce: 'people' }
            })
          } else {
            this.$router.push({ name: 'NetworkError' })
          }
        })
    },
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
      },
      {
        path: '',
        name: 'DoctorComment',
        component: DoctorCommentView
      }
    ]
  },
  {
    path: '/',
    name: 'VaccineDetail',
    component: VaccineDetailView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFoundView,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkEorror',
    component: NetWorkErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start
  NProgress.set(0.4)
})
router.afterEach(() => {
  NProgress.done()
})

export default router
