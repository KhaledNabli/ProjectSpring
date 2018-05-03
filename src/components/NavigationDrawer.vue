<template>
    <v-navigation-drawer app fixed v-model=displayDrawer clipped>
    <v-subheader class="mt-3 grey--text text--darken-1">{{ navigationTitle }}</v-subheader>
        <v-list >
            <v-list-tile v-for="item in navigationItems" :key="item.text" :to="item.link">
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
</template>


<script>
import { EventBus } from '@/event-bus.js';

export default {
    props: ["navigationTitle", "navigationItems"],
    data: function() {
        return {
            displayDrawer: true
        }
    },
    mounted: function() {
        let self = this;
        EventBus.$on('navigation-drawer-toggle', () => {
            self.toggleDrawer();
        });
        EventBus.$on('navigation-drawer-show', () => {
            self.showDrawer();
        });
        EventBus.$on('navigation-drawer-hide', () => {
            self.hideDrawer();
        });
    },
    methods: { 
        toggleDrawer: function () {
            this.displayDrawer = !this.displayDrawer;
        },
        showDrawer: function() {
            this.displayDrawer = true;
        },
        hideDrawer: function() {
            this.displayDrawer = false;
        }

    }
}
</script>


<style>

</style>