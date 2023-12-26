import { createRouter, createWebHistory } from 'vue-router'
import listMember from '../components/member/ListMember.vue'
import RegisterMember from '../components/member/RegisterMember.vue'
import LoginPage from '../components/member/LoginPage.vue'
import ExMember from '../components/member/ExMember.vue'
import notFound from '../components/member/NotFound.vue'

import User from '../helpers/User'



const routes = [


  {
    path: '/list',
    name: 'listMember',
    component: listMember
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
    path: '/exmember',
    name: 'ExMember',
    component: ExMember
  },

  {
    path: '/404',
    name: 'notFound',
    component: notFound
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if(!User.loggedIn()){
      if(to.name !== 'login'){
        next({name: 'login'})
      } else {
        next();
      }
    } else {
      if(to.name !== 'listMember' && to.name !== 'register'  && to.name !== 'ExMember' && to.name !== 'notFound' && to.name !== 'login'){
        next({name: 'notFound'})
      } else {
        next();
      }
    }
  
})

export default router
