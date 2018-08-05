import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Game from '@/components/Game'
import Chart from '@/components/Chart'
import Story from '@/components/Story'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    }
  ]
})
