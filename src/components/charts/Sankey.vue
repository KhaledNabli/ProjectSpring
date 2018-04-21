<template>
<div style="height: 400px; width:100%">
    <ECharts ref="echart" :options="option" auto-resize></ECharts>
</div>
</template>


<style>
.echarts {
  height: 300px;
}
</style>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/sankey'
import 'echarts/lib/component/tooltip'

export default {
  components: { ECharts },
  mounted: function() {

    this.loading = false;
    this.timer = window.setInterval(() => {
      


    }, 5000);
  },

  data: function() {
    let data = {
      nodes: [],
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
    };

    // prepare nodes names
    let nodes = [];
    for (var link of data.links) {
      if (!nodes.includes(link.source)) {
        nodes.push(link.source);
      }
      if (!nodes.includes(link.target)) {
        nodes.push(link.target);
      }

      //link.value = Math.round(Math.random() * 1000)
    }

    data.nodes = nodes.map(function(i, e) {
      return { name: i };
    });

    return {
      loading: true,
      option: {
            title : {
        text: 'Baggage Flow',
        subtext: 'Analysis of Baggage Flow through the BHS System',
        x:'center'
    },
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "sankey",
            layout: function() {
              console.log("some one called me");
            },
            data: data.nodes,
            links: data.links,
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: "#aaa"
              }
            },
            lineStyle: {
              normal: {
                curveness: 0.8
              }
            }
          }
        ]
      }
    };
  }
};
</script>
