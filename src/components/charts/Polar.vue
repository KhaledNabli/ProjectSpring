<template>
  <div>
    <ECharts :options="option"></ECharts>
  </div>
</template>



<script>
import ECharts from "vue-echarts/components/ECharts";

import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";

export default {
  components: { ECharts },
  mounted: function() {
    let self = this;
    this.timer = setInterval(function() {
      console.log(self.option);
      self.option.series[0].data = self.option.series[0].data.slice(-360);
      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI + Math.random()/10;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        self.option.series[0].data.push([r, i]);
      }
    }, 500);
  },
  data: function () {
    let time = undefined;
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    return {
      option: {
        title: {
          text: "Hello Tomorrow"
        },
        legend: {
          data: ["line1", "line2"]
        },
        polar: {
          center: ["50%", "50%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 5000
      }
    };
  }
};
</script>