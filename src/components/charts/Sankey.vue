<template>
<div>
    <ECharts ref="echart" :options="option" auto-resize></ECharts>
</div>
</template>


<style scoped>
.echarts {
  min-height: 900px;
  width: 100%;
}
</style>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/sankey'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export default {
  components: { ECharts },
  props: ["dataObj"],
  mounted: function() {
    this.loading = false;
    this.timer = window.setInterval(() => {
      

    }, 5000);
  },

  data: function() {
    let data = {
      nodes: [],
      links: this.dataObj // passed via props
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
    }

    data.nodes = nodes.map(function(i, e) {
      return { name: i };
    });


    let optionObj = {
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

    return {
      loading: true,
      option: optionObj
    };
  }
};
</script>
