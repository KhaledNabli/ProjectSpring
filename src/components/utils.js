function getChatData() {
 let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }


      return {
        polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
  }
}


function getChatData() {
 let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }


    return {
    polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
  }
}

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

