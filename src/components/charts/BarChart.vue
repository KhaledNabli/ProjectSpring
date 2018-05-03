<template>
<div ref="echarts">
    <ECharts :options="option" auto-resize></ECharts>
</div>
</template>


<style scoped>
.echarts {
  min-height: 420px;
  width: 100%; 
}
</style>

<script>

import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

export default {
  components: { ECharts },
  mounted: function() {
    
  },
  data: function () {
    let time = undefined;
    
    return {
loading: false,

option: {
    title : {
        text: 'Travel Time',
        subtext: 'Analysis of Baggage Travel Time through the BHS System'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Arrival','Departure']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['33%','66%','90%','95%','98%','99%','100%']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Arrival',
            type:'bar',
            data:[2.0, 4.9, 135.6, 162.2, 32.6, 20.0, 6.4],
            markPoint : {
                data : [
                    {type : 'max', name: 'High'},
                    {type : 'min', name: 'Low'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: 'Average'}
                ]
            }
        },
        {
            name:'Departure',
            type:'bar',
            data:[9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7],
            markPoint : {
                data : [
                    {name : 'Peak 1', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : 'Peak 2', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : 'MarkLine'}
                ]
            }
        }
    ]
} 









    };
  }
};
</script>

