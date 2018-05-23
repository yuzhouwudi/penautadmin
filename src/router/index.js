import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login/login'
import G from '@/components/goods/goods'
import O from '@/components/order/order'
import M from '@/components/manager/manager'
<<<<<<< HEAD
import U from '@/components/user/user'
=======
import User from '@/components/user/user'
>>>>>>> a603c9a11fe6d5609c49aff00021f28b4a7027c9

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
<<<<<<< HEAD
      redirect: '/user',
      children: [

        {
          path: "goods",
          component: G,
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
          component: U,
        },
      ]
    },
    {
      path: "/login",
      component: Login,
    },
=======
        children:[
            {
                path:"/goods",
                component:G,
            },
            {
                path:"/manager",
                component:M,
            },
            {
                path:"/order",
                component:O,
            },
            {
                path:"/user",
                component:User,
            },
        ]
    },


      {
          path:"/login",
          component:Login,
      },
>>>>>>> a603c9a11fe6d5609c49aff00021f28b4a7027c9
  ]
})
