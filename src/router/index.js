import Vue from 'vue'
import Router from 'vue-router'
import FlightOpsIndex from '@/components/FlightOpsIndex'
import BagHandlingIndex from '@/components/BagHandlingIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FlightOpsIndex',
      component: FlightOpsIndex
    },
    {
      path: '/flight-ops',
      name: 'FlightOpsIndex',
      component: FlightOpsIndex
    },
    {
      path: '/baggage-handling',
      name: 'BagHandlingIndex',
      component: BagHandlingIndex
    },
    {
      path: '/passenger-flow',
      name: 'FlightOpsIndex',
      component: FlightOpsIndex
    }
  ]
})
