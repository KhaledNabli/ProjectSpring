<template>
  <v-container fluid>
      <v-layout row wrap class="tile_count">
        <v-flex xs6 sm6 md4 lg2 :key="panel.id" v-for="panel in kpiPanels" class="tile_stats_count">
            <span class="count_top">
                <i v-if="panel.icon != ''" v-bind:class="panel.icon"></i> 
                {{panel.title}} 
            </span>
            <div class=""><span class="count text-center">{{panel.value}}</span></div>
            <span class="count_bottom">
                <template v-if=" panel.change > 0">
                    <i class="green-text fas fa-arrow-circle-up"></i>
                    <i class="green-text">{{ panel.change }}%</i>
                </template>
                <template v-else>
                    <i class="red-text fas fa-arrow-alt-circle-down"></i>
                    <i class="red-text">{{ panel.change }}%</i> 
                </template>
                {{panel.changeText}}
            </span>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<style scoped>

.tile_count {
    margin-top: 0px;
}
.tile_stats_count {
    margin-bottom: 10px;
    border-bottom: 0;
    padding-bottom: 10px;
    padding-left: 10px;
    border-left: 3px dotted lightgray;

}

.tile_stats_count :first {
    margin-bottom: 10px;
    border-bottom: 0;
    padding-bottom: 10px;
    padding-left: 10px;
    border-left: 0px dotted lightgray;
}

.tile_stats_count > span {
    font-size: 13px;
}

.count {
    font-size: 40px;
    line-height: 47px;
    font-weight: 600;
    text-shadow: 3px 2px 3px #fff
}

.green-text {
    color: #1ABB9C;
}

.red-text {
    color: #E74EC3;
}
</style>


<script>
    export default {
        computed: {
            kpiPanelsFormatted: () => {
                if (this.kpiPanels != undefined)
                return this.kpiPanels.map((b) => {
                b.changeFormatted = (b.change * 100) 
                return b;
            })
            }
        },
        data: () => ({
            timer: ""
        }),
        props: ["kpiPanels"]
    };
</script>
