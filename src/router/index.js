import Vue from 'vue'
import Router from 'vue-router'

import UnderConstruction from '@/components/UnderConstruction'
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
          name: 'flight-ops',
          component: FlightOpsIndex
        },
        {
          path: 'passenger-flow',
          name: "passenger-flow",
          component: UnderConstruction
        },
        {
          path: 'baggage-handling',
          name: "baggage-handling",
          component: BagHandlingIndex
        },
        {
          path: 'traffic-management',
          name: "traffic-management",
          component: UnderConstruction
        },
        {
          path: 'shops-food',
          name: "shops-food",
          component: UnderConstruction
        },
        {
          path: 'predictive-maintenance',
          name: "predictive-maintenance",
          component: UnderConstruction
        },
        {
          path: 'energy-management',
          name: "energy-management",
          component: UnderConstruction
        },
      ]
      
    },
  ]
})
