import Vue from 'vue'
import Router from 'vue-router'

import UnderConstruction from '@/components/UnderConstruction'
import HomeScreen from '@/components/HomeScreen'

import DataHubIndex from '@/components/DataHubIndex'


import AirportIntelligenceIndex from '@/components/AirportIntelligenceIndex'
import FlightOpsIndex from '@/components/FlightOpsIndex'
import BagHandlingIndex from '@/components/BagHandlingIndex'
import PassengerFlowIndex from '@/components/PassengerFlowIndex'
import TrafficManagementIndex from '@/components/TrafficManagementIndex'
import FacilitiesIndex from '@/components/FacilitiesIndex'
import EnergyManagementIndex from '@/components/EnergyManagementIndex'
import PredictiveMaintenanceIndex from '@/components/PredictiveMaintenanceIndex'
import CybersecurityIndex from '@/components/CybersecurityIndex'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-screen',
      component: HomeScreen
    },
    {
      path: '/datahub',
      name: 'DataHub',
      component: DataHubIndex
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
          component: PassengerFlowIndex
        },
        {
          path: 'baggage-handling',
          name: "baggage-handling",
          component: BagHandlingIndex
        },
        {
          path: 'traffic-management',
          name: "traffic-management",
          component: TrafficManagementIndex
        },
        {
          path: 'shops-food',
          name: "shops-food",
          component: FacilitiesIndex
        },
        {
          path: 'predictive-maintenance',
          name: "predictive-maintenance",
          component: PredictiveMaintenanceIndex
        },
        {
          path: 'energy-management',
          name: "energy-management",
          component: EnergyManagementIndex
        },
        {
          path: 'cybersecurity',
          name: "cybersecurity",
          component: CybersecurityIndex
        },
      ]
      
    },
  ]
})
