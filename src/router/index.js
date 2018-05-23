import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login/login'
import O from '@/components/order/order'
import M from '@/components/manager/manager'

import User from '@/components/user/user'

import Nut from '@/components/classify/nut'
import Relax from '@/components/classify/relax'
import Fruit from '@/components/classify/fruit'
import Travel from '@/components/classify/travel'

import Discount from '@/components/group/discount'
import Hot from '@/components/group/hot'
import News from '@/components/group/new'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,

      redirect: '/user',

      children: [
        {
          path: "nut",
          component: Nut,
        },
        {
          path: "relax",
          component: Relax,
        },
        {
          path: "fruit",
          component: Fruit,
        },
        {
          path: "travel",
          component: Travel,
        },

        {
          path: "discount",
          component: Discount,
        },
        {
          path: "hot",
          component: Hot,
        },
        {
          path: "new",
          component: News,
        },


        {
          path: "manager",
          component: M,
        },
        {
          path: "order",
          component: O,
        },
        {
          path: "user",
          component: User,
        },
      ]
    },


    {
      path: "/login",
      component: Login,
    },

  ]
})
