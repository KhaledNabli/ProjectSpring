<template>
<v-app>
    <NavigationDrawer :displayDrawerInitial=drawer :navigationItems=items :navigationTitle=navigationTitle />
    <NavigationToolbar :toolbarTitle=appTitle :displaySearch=search :notifications=notifications />

    <v-content>
        <v-container fluid>
        <router-view></router-view>
        </v-container>
    </v-content>
</v-app>
</template>



<script>
import NavigationDrawer from "@/components/NavigationDrawer";
import NavigationToolbar from "@/components/NavigationToolbar";

export default {
  data: () => ({
    drawer: true,
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
      { id: "baggage-handling", icon: "work", text: "Baggage Handling", link: {"name": "baggage-handling"} },
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
  components: { NavigationDrawer, NavigationToolbar }
};
</script>

<style>

</style>
