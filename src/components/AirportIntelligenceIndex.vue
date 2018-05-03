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
    search: false,
    notifications: 5,
    appTitle: "Siemens Digital Airport",
    navigationTitle: "Airport Intelligence",
    items: [
      {
        id: "flight-ops",
        icon: "flight_takeoff",
        text: "Flight Operations",
        link: { name: "flight-ops" }
      },
      {
        id: "passenger-flow",
        icon: "transfer_within_a_station",
        text: "Passenger Flow",
        link: { name: "passenger-flow" }
      },
      {
        id: "baggage-handling",
        icon: "work",
        text: "Baggage Handling",
        link: { name: "baggage-handling" }
      },
      {
        id: "traffic-management",
        icon: "traffic",
        text: "Traffic Management",
        link: { name: "traffic-management" }
      },
      {
        id: "shops-food",
        icon: "store",
        text: "Facilities and Services",
        link: { name: "shops-food" }
      },
      {
        id: "predictive-maintenance",
        icon: "build",
        text: "Predictive Maintenance",
        link: { name: "predictive-maintenance" }
      },
      {
        id: "energy-management",
        icon: "lightbulb_outline",
        text: "Energy Management",
        link: { name: "energy-management" }
      }
    ]
  }),
  components: { NavigationDrawer, NavigationToolbar }
};
</script>

<style>

</style>
