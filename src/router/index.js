import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a1 from '@/components/a1'
import a2 from '@/components/a2'
import a3 from '@/components/a3'
import a4 from '@/components/a4'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a1',
      name: 'a1',
      component: a1
    },
    {
      path: '/a2',
      name: 'a2',
      component: a2
    }, 
    {
      path: '/a3',
      name: 'a3',
      component: a3
    },
    {
      path: '/a4',
      name: 'a4',
      component: a4
    } 
  ]
})
