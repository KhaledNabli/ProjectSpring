<template>
<v-app>
<v-navigation-drawer app fixed v-model="drawer" clipped>

<v-subheader class="mt-3 grey--text text--darken-1">AIRPORT INTELLIGENCE</v-subheader>
<v-list >
<v-list-tile v-for="item in items" :key="item.text" :to="item.id">
<v-list-tile-action>
<v-icon>{{ item.icon }}</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>

{{ item.text }}

</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
<v-divider> </v-divider>
<v-list-tile>
<v-list-tile-action>
<v-icon>add</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>
Create new ...
</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>

</v-list>
<v-divider> </v-divider>

</v-navigation-drawer>

<v-toolbar 
dark
dense
clipped-left 
app 
color="primary">
<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>



<v-toolbar-title class="mr-5 align-center white--text">
Siemens Digital Airport
</v-toolbar-title>
<v-spacer></v-spacer>
<!--v-layout row align-center style="max-width: 450px">
<v-text-field
placeholder="Search..."
single-line
append-icon="search"
:append-icon-cb="() => {}"
hide-details>
</v-text-field>
</v-layout-->
<v-btn icon>
<v-icon>apps</v-icon>
</v-btn>
<v-btn icon>
<v-icon>refresh</v-icon>
</v-btn>
<v-btn icon>
<v-badge overlap color="red">
<span slot="badge">6</span>
<v-icon >notifications</v-icon>
</v-badge>
</v-btn>
<v-btn icon>
<v-icon >more_vert</v-icon>
</v-btn>
</v-toolbar>
<v-content>
<v-container fluid>
<router-view></router-view>
</v-container>
</v-content>

</v-app>
</template> 

<script>
export default {
  data: () => ({
    drawer: true,
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
    ],
    props: {
      source: String
    }
  })
};
</script>


<style>
.toolbar-logo {
  height: 30px;
}
</style>
