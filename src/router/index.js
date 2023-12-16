import { createRouter, createWebHistory } from 'vue-router'
import listMember from '../components/member/ListMember.vue'
import HeaderCommon from '../components/layout/HeaderCom.vue'
import RegisterMember from '../components/member/RegisterMember.vue'
import LoginPage from '../components/member/LoginPage.vue'
import paginatePage from '../components/member/paginatePage.vue'


const routes = [

  {
    path: '/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/list',
    name: 'listMember',
    component: listMember
  },

  {
    path: '/header',
    name: 'headerCommon',
    component: HeaderCommon
  },
  {
    path: '/registerMem',
    name: 'register',
    component: RegisterMember
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/paginate',
    name: 'paginate',
    component: paginatePage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
