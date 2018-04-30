import Vue from 'vue'
import Router from 'vue-router'


import HomeScreen from '@/components/HomeScreen'
import AirportIntelligenceIndex from '@/components/AirportIntelligenceIndex'
import FlightOpsIndex from '@/components/FlightOpsIndex'
import BagHandlingIndex from '@/components/BagHandlingIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-screen',
      component: HomeScreen
    },
    {
      path: '/AirportIntelligence',
      name: 'AirportIntelligence',
      component: AirportIntelligenceIndex,
      children: [
        {
          path: 'flight-ops',
          component: FlightOpsIndex
        },
        {
          path: 'baggage-handling',
          name: "baggage-handling",
          component: BagHandlingIndex
        },
      ]
    },
  ]
})
