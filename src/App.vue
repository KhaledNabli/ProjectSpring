<template>
<router-view></router-view>
</template> 

<script>

export default {
  data: () => ({
    drawer: false,
    search: true,
    notifications: 5,
    appTitle: "Siemens Digital Airport",
    navigationTitle: "Airport Intelligence",
    items: [
      { id: "flight-ops", icon: "flight_takeoff", text: "Flight Ops" },
      {
        id: "passenger-flow",
        icon: "transfer_within_a_station",
        text: "Passenger Flow"
      },
      { id: "baggage-handling", icon: "work", text: "Baggage Handling" },
      { id: "traffic-management", icon: "traffic", text: "Traffic Management" },
      { id: "shops-food", icon: "store", text: "Facilities and Services" },
      {
        id: "predictive-maintenance",
        icon: "build",
        text: "Predictive Maintenance"
      },
      {
        id: "energy-management",
        icon: "lightbulb_outline",
        text: "Energy Management"
      }
    ]
  }),

};
</script>


<style>
.toolbar-logo {
  height: 30px;
}
</style>
