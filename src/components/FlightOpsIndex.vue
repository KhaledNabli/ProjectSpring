<template>
<div>
    <KPITile :kpiPanels="headKPIs" ></KPITile>
    <Gauge :kpiPanels="headKPIs" ></Gauge>

</div>
</template>

<script>
  import KPITile from '@/components/charts/KPITile'
  import Gauge from '@/components/charts/Gauge'

function getHeadKPIs() {
return     [
        {
          id: 0,
          icon: "fa fa-user",
          title: "Bags",
          value: 250,
          change: 0.1,
          changeText: "From last Week"
        },
        {
          id: 1,
          icon: "fa fa-user",
          title: "Bags",
          value: 250,
          change: 0.1,
          changeText: "From last Week"
        },
        {
          id: 2,
          icon: "fa fa-plane",
          title: "Bags",
          value: 250,
          change: 0.1,
          changeText: "From last Week"
        },
        {
          id: 3,
          icon: "fa fa-plane",
          title: "Bags",
          value: 250,
          change: 0.1,
          changeText: "From last Week"
        },
        {
          id: 4,
          icon: "fa fa-plane",
          title: "Bags",
          value: 250,
          change: 0.1,
          changeText: "From last Week"
        },
        {
          id: 5,
          icon: "fa fa-paper-plane",
          title: "Bags",
          value: 250,
          change: 0.1,
          changeText: "From last Week"
        },
    ];
}


  export default {
    data: function (){
      let data = {}
      data.headKPIs = getHeadKPIs();
      return data;
    },
    props: {
      source: String
    },
    components: {KPITile, Gauge},
    mounted: function() {
      this.timer = window.setInterval(() => {
        this.headKPIs[0].value += Math.round(Math.random()*10)
        this.headKPIs[1].value += Math.round(Math.random()*10)
        this.headKPIs[2].value += Math.round(Math.random()*50)
        this.headKPIs[3].value += Math.round(Math.random()*20)
        this.headKPIs[4].value += Math.round(Math.random()*20) 
        this.headKPIs[5].value += Math.round(Math.random()*20) 

        this.headKPIs[0].change = Math.round(Math.random()*50 - 25) / 10
        this.headKPIs[1].change = Math.round(Math.random()*50 - 25) / 10
        this.headKPIs[2].change = Math.round(Math.random()*50 - 25) / 10
        this.headKPIs[3].change = Math.round(Math.random()*50 - 25) / 10
        this.headKPIs[4].change = Math.round(Math.random()*50 - 25) / 10
        this.headKPIs[5].change = Math.round(Math.random()*50 - 25) / 10

      }, 100);
  },
    
}
</script>


<style scoped>


h1, h2 {
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
  color: #35495E;
}


</style>
