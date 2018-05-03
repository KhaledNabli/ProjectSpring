<template>


    <v-toolbar 
    dark
    dense
    clipped-left 
    app 
    color="primary">
        <v-toolbar-side-icon @click="toggleSideBarClicked()" ></v-toolbar-side-icon>



        <v-toolbar-title class="mr-5 align-center white--text">{{ toolbarTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
        <v-layout v-if=displaySearch row align-center style="max-width: 450px">
            <v-text-field
                placeholder="Search..."
                single-line
                append-icon="search"
                :append-icon-cb="() => {}"
                hide-details ></v-text-field>
        </v-layout>
        <v-btn icon :to="{ 'name' : 'home-screen' }" >
            <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon @click="clickRefresh()">
            <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon @click="clickNotifications()">
            <v-badge overlap color="red">
                <span slot="badge">{{ notifications }}</span>
                <v-icon >notifications</v-icon>
            </v-badge>
        </v-btn>
        <v-btn icon @click="toggleMoreMenu()">
            <v-icon >more_vert</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  props: ["toolbarTitle", "displaySearch", "notifications"],
  components: {},
  data: () => ({}),
  methods: {
    toggleSideBarClicked: () => {
      console.log("Emit: navigation-drawer-toggle");
      EventBus.$emit("navigation-drawer-toggle", true);
    },
    clickMoreMenu: () => {
        console.log("Emit: navigation-more-clicked")
    },
    clickRefresh: () => {
        console.log("Emit: navigation-refresh-clicked")
    },
    clickNotifications: () => {
        console.log("Emit: navigation-notifications-clicked")
    },

  }
};
</script>
