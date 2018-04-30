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
export default {
    props: ["navigationTitle", "navigationItems", "displayDrawerInitial"],
    data: () => {
        return {
            displayDrawer: true
        }
    }
}
</script>


<style>

</style>