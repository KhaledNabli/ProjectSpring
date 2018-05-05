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
    navigationTitle: "DataHub Sources",
    items: [
      {
        id: "flight-ops",
        icon: "flight_takeoff",
        text: "Flight Management",
        link: { name: "flight-ops" }
      },
      {
        id: "passenger-flow",
        icon: "transfer_within_a_station",
        text: "SITA BMS",
        link: { name: "passenger-flow" }
      },
      {
        id: "baggage-handling",
        icon: "work",
        text: "Siemens BHS",
        link: { name: "baggage-handling" }
      },
      {
        id: "traffic-management",
        icon: "traffic",
        text: "OTIS",
        link: { name: "traffic-management" }
      },
      {
        id: "shops-food",
        icon: "store",
        text: "BOSCH",
        link: { name: "shops-food" }
      },
      {
        id: "predictive-maintenance",
        icon: "build",
        text: "BLUEVISON Sensors",
        link: { name: "predictive-maintenance" }
      },
      {
        id: "energy-management",
        icon: "lightbulb_outline",
        text: "MindConnect",
        link: { name: "energy-management" }
      },
      {
        id: "cybersecurity",
        icon: "lightbulb_outline",
        text: "MindConnect Nano",
        link: { name: "cybersecurity" }
      },

    ]
  }),
  components: { NavigationDrawer, NavigationToolbar }
};
</script>

<style>

</style>
