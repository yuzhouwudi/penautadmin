import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login/login'

import O from '@/components/order/order'
import Ordeatil from '@/components/order/detail'

import M from '@/components/manager/manager'

import User from '@/components/user/user'

import Nutadd from '@/components/classify/nutadd'

import Nut from '@/components/classify/nut'
import Nutmod from '@/components/classify/nutmod'

import Relax from '@/components/classify/relax'
import Relaxmod from '@/components/classify/relaxmod'
import Fruit from '@/components/classify/fruit'
import Fruitmod from '@/components/classify/fruitmod'
import Travel from '@/components/classify/travel'
import Travelmod from '@/components/classify/travelmod'

import Discount from '@/components/group/discount'
import Discountmod from '@/components/group/discountmod'
import Hot from '@/components/group/hot'
import Hotmod from '@/components/group/hotmod'
import News from '@/components/group/new'
import Newsmod from '@/components/group/newmod'

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
          path: "nutadd",
          component: Nutadd,
        },
        {
          path: "nut",
          component: Nut,
        },
        {
          path: "nutmod",
          component: Nutmod,
        },
        {
          path: "relax",
          component: Relax,
        },
        {
          path: "relaxmod",
          component: Relaxmod,
        },
        {
          path: "fruit",
          component: Fruit,
        },
        {
          path: "fruitmod",
          component: Fruitmod,
        },
        {
          path: "travel",
          component: Travel,
        },
        {
          path: "travelmod",
          component: Travelmod,
        },

        {
          path: "discount",
          component: Discount,
        },
        {
          path: "discountmod",
          component: Discountmod,
        },
        {
          path: "hot",
          component: Hot,
        },
        {
          path: "hotmod",
          component: Hotmod,
        },
        {
          path: "new",
          component: News,
        },
        {
          path: "newmod",
          component: Newsmod,
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
          path: "ordeatil",
          component: Ordeatil,
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
