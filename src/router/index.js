import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login/login'
import G from '@/components/goods/goods'
import O from '@/components/order/order'
import M from '@/components/manager/manager'
import User from '@/components/user/user'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
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
  ]
})
