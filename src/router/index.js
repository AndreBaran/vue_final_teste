import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sobre from '@/components/Sobre'
import Agenda from '@/components/Agenda'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/sobre',
        name: 'Sobre',
        component: Sobre
      },
      {
        path: '/agenda',
        name: 'Agenda',
        component: Agenda
      }     
    ]
  })