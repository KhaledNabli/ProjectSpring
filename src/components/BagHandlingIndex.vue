<template>
<div>

  <KPITile :kpiPanels="headKPIs" ></KPITile>

  <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <MultiLineChart ></MultiLineChart>
          <Sankey ></Sankey>
          <v-slider v-model="forecastSlider" step="1" min="-3" max="+12" ticks></v-slider>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 md6 xl6>
          <BarChart ></BarChart>
        </v-flex>
        <v-flex xs12 md6 xl6>
          <BarChart ></BarChart>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex>
        <v-data-table
          :headers="headers"
          :items="items"
          :loading="true"
          hide-actions >
          <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
          </template>
        </v-data-table>
        </v-flex>
      </v-layout>
  </v-container>
</div>
</template>

<script>
import KPITile from "@/components/charts/KPITile";
import Sankey from "@/components/charts/Sankey";
import BarChart from "@/components/charts/BarChart";
import MultiLineChart from "@/components/charts/MultiLineChart";

export default {
  data: () => ({
    forecastSlider: 0,
    drawer: false,
    headers: [
      {
        text: "FLIGHT",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "DEPARTURE", value: "calories" },
      { text: "Bags", value: "carbs" }
    ],
    items: [
      {
        value: false,
        name: "EK086",
        calories: 159,
        fat: 6.0,
        carbs: 24
      },
      {
        value: false,
        name: "EK086",
        calories: 237,
        fat: 9.0,
        carbs: 37
      },
      {
        value: false,
        name: "EK086",
        calories: 262,
        fat: 16.0,
        carbs: 23
      },
      {
        value: false,
        name: "EK086",
        calories: 305,
        fat: 3.7,
        carbs: 67
      },
      {
        value: false,
        name: "EK086",
        calories: 356,
        fat: 16.0,
        carbs: 49
      },
      {
        value: false,
        name: "EK086",
        calories: 375,
        fat: 0.0,
        carbs: 94
      },
      {
        value: false,
        name: "EK086",
        calories: 392,
        fat: 0.2,
        carbs: 98
      },
      {
        value: false,
        name: "EK086",
        calories: 408,
        fat: 3.2,
        carbs: 87
      },
      {
        value: false,
        name: "EK086",
        calories: 452,
        fat: 25.0,
        carbs: 51
      },
      {
        value: false,
        name: "EK086",
        calories: 518,
        fat: 26.0,
        carbs: 65
      }
    ],
    headKPIs: [
      {
        id: 0,
        icon: "fas fa-stopwatch",
        title: "Travel Time",
        value: "17:00",
        change: 0.2,
        changeText: "above limit",
        formattedValue: function(val) {
          return "00:" + val + ":00";
        }
      },
      {
        id: 1,
        icon: "fa fa-random",
        title: "SYSTEM THROUGH-PUT",
        value: "1780",
        change: 0.1,
        changeText: "below expectation"
      },
      {
        id: 2,
        icon: "fa fa-cogs",
        title: "BAGS IN SYSTEM",
        value: 2250,
        change: 0.7,
        changeText: "below threshold"
      },
      {
        id: 3,
        icon: "fa fa-database",
        title: "EARLY BAG STORE",
        value: 6250,
        change: -0.1,
        changeText: "below threshold"
      },
      {
        id: 4,
        icon: "fas fa-angle-double-up",
        title: "DEPARTURE BAGS",
        value: 250,
        change: 0.1,
        changeText: "last 3 day average"
      },
      {
        id: 5,
        icon: "fas fa-angle-double-down",
        title: "Late Injected BAGS",
        value: 11,
        change: 0.1,
        changeText: "last 3 day average"
      }
    ]
  }),
  props: {
    source: String
  },
  components: { KPITile, Sankey, BarChart, MultiLineChart },
  mounted: function() {
    this.timer = window.setInterval(() => {
      /*
      this.headKPIs[0].value += 1;
      this.headKPIs[1].value += 2;
      this.headKPIs[2].value += 3;
      this.headKPIs[3].value += 4;
      this.headKPIs[4].value += 5;
      this.headKPIs[5].value += -1;

      this.headKPIs[0].change = Math.round(Math.random() * 50 - 25) / 10;
      this.headKPIs[1].change = Math.round(Math.random() * 50 - 25) / 10;
      this.headKPIs[2].change = Math.round(Math.random() * 50 - 25) / 10;
      this.headKPIs[3].change = Math.round(Math.random() * 50 - 25) / 10;
      this.headKPIs[4].change = Math.round(Math.random() * 50 - 25) / 10;
      this.headKPIs[5].change = Math.round(Math.random() * 50 - 25) / 10;
      */
    }, 10000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>



<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
