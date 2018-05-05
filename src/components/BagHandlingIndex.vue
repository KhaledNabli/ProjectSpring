<template>
<div>

  <KPITile :kpiPanels="headKPIs" ></KPITile>

  <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <MultiLineChart ></MultiLineChart>
          <Sankey :dataObj="sankeyDiagram.links"></Sankey>
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
          :headers="dataTable.headers"
          :items="dataTable.items"
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
    sankeyDiagram: {
      links: [
        { source: "T1", target: "CB", value: 100, color: "#0f0" },
        { source: "T2", target: "CB", value: 100 },
        { source: "T3", target: "CB", value: 100 },
        { source: "T4", target: "CB", value: 100 },
        { source: "T5", target: "CB", value: 100 },
        { source: "T6", target: "CB", value: 100 },
        { source: "T7", target: "CB", value: 100 },
        { source: "T8", target: "CB", value: 100 },
        { source: "T9", target: "CB", value: 100 },
        { source: "T10", target: "CB", value: 100 },
        { source: "T11", target: "CB", value: 100 },
        { source: "T12", target: "CB", value: 100 },
        { source: "T21", target: "CA", value: 100 },
        { source: "T22", target: "CA", value: 100 },
        { source: "T23", target: "CA", value: 100 },
        { source: "T24", target: "CA", value: 100 },
        { source: "T25", target: "CA", value: 100 },
        { source: "T26", target: "CA", value: 100 },
        { source: "T27", target: "CA", value: 100 },
        { source: "T28", target: "CA", value: 100 },
        { source: "T29", target: "CA", value: 100 },
        { source: "T30", target: "CA", value: 100 },
        { source: "T31", target: "CA", value: 100 },
        { source: "T32", target: "CA", value: 100 },
        { source: "E1", target: "CC", value: 200 },
        { source: "E2", target: "CC", value: 200 },
        { source: "E3", target: "CC", value: 200 },
        { source: "W1", target: "CC", value: 200 },
        { source: "W2", target: "CC", value: 200 },
        { source: "W3", target: "CC", value: 200 },
        { source: "CA", target: "EBS", value: 800 },
        { source: "CB", target: "EBS", value: 900 },
        { source: "CC", target: "EBS", value: 1000 },
        { source: "CA", target: "En-Route", value: 400 },
        { source: "CB", target: "En-Route", value: 300 },
        { source: "CC", target: "En-Route", value: 200 },
        { source: "EBS", target: " CA", value: 1000 },
        { source: "EBS", target: " CB", value: 900 },
        { source: "EBS", target: " CC", value: 800 },
        { source: "En-Route", target: " CA", value: 300 },
        { source: "En-Route", target: " CB", value: 300 },
        { source: "En-Route", target: " CC", value: 300 },
        { target: "P01", source: " CB", value: 100 },
        { target: "P02", source: " CB", value: 100 },
        { target: "Q01", source: " CB", value: 100 },
        { target: "Q02", source: " CB", value: 100 },
        { target: "C01 - 05", source: " CB", value: 100 },
        { target: "C06 - 10", source: " CB", value: 100 },
        { target: "C11 - 15", source: " CB", value: 150 },
        { target: "C16 - 21", source: " CB", value: 150 },
        { target: "W2 SR", source: " CB", value: 100 },
        { target: "E2 SR", source: " CB", value: 200 },
        { target: "C31 - 43", source: " CA", value: 250 },
        { target: "C44 - 58", source: " CA", value: 250 },
        { target: "P03", source: " CA", value: 100 },
        { target: "P04", source: " CA", value: 100 },
        { target: "Q03 - 05", source: " CA", value: 100 },
        { target: "Q06 - 07", source: " CA", value: 100 },
        { target: "W3 SR", source: " CA", value: 200 },
        { target: "E3 SR", source: " CA", value: 200 },
        { target: "C71 - 73", source: " CC", value: 800 },
        { target: "BL01", source: " CC", value: 25 },
        { target: "BL02", source: " CC", value: 25 },
        { target: "BL03", source: " CC", value: 25 },
        { target: "BL04", source: " CC", value: 25 },
        { target: "C74 - 76", source: " CC", value: 100 },
        { target: "BL05 - 06", source: " CC", value: 100 }
      ]
    },
    dataTable: {
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
    ]
    }
    ,
    headKPIs: [
      {
        id: 0,
        icon: "fas fa-stopwatch",
        title: "Processing Time",
        value: "17:00",
        change: 40,
        changeText: "below limit",
        formattedValue: function(val) {
          return "00:" + val + ":00";
        }
      },
      {
        id: 1,
        icon: "fa fa-random",
        title: "THROUGHPUT",
        value: "1780",
        change: 18,
        changeText: "of system capacity"
      },
      {
        id: 2,
        icon: "fa fa-cogs",
        title: "BAGS IN SYSTEM",
        value: 2250,
        change: 54,
        changeText: "of system capacity"
      },
      {
        id: 3,
        icon: "fa fa-database",
        title: "EARLY BAG STORE",
        value: 6250,
        change: 72,
        changeText: "of system capacity"
      },
      {
        id: 4,
        icon: "fas fa-angle-double-up",
        title: "DEPARTURE BAGS",
        value: 251,
        change: 0.9,
        changeText: "last 3 day average"
      },
      {
        id: 5,
        icon: "fas fa-angle-double-down",
        title: "Late Injected BAGS",
        value: 11,
        change: -2,
        changeText: "last 3 day average"
      }
    ]
  }),
  props: {
  },
  components: { KPITile, BarChart, Sankey, MultiLineChart },
  mounted: function() {
    this.timer = window.setInterval(() => {
      
      let travelTimeTotal = 1020 + Math.round(Math.random() * 90) - 60;
      let travelTimeSecounds =  travelTimeTotal % 60;
      let travelTimeMinutes = (travelTimeTotal - travelTimeSecounds) / 60;
      let travelTime = travelTimeMinutes +  (travelTimeSecounds < 10 ?  (":0" + travelTimeSecounds) :  (":" + travelTimeSecounds)) ;

      this.headKPIs[0].value = travelTime;
      this.headKPIs[1].value = 1700 + Math.round(Math.random() * 100) - 40 ;
      this.headKPIs[2].value += 3;
      this.headKPIs[3].value += 4;
      this.headKPIs[4].value += 5;

    }, 800);
  }
};
</script>



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
