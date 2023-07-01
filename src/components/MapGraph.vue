<template>
    <div ref="chart" id="main" style="width: 100%;height: 100%;"></div>
  </template>
<script setup>
    import { ref, onMounted, nextTick } from 'vue';
    import * as echarts from 'echarts';
    import 'echarts/extension/bmap/bmap';
    import 'echarts/map/js/china.js'
    import 'echarts/lib/component/legend'
    import {MOCK_DATA,GEO_CORD_MAP,AQI_MAP} from '../constant'
    const data = ref()
    const title =  {
        left: 'center',
        textStyle:{
            color:'#ffffff',
            fontSize:'1rem'
        }
    }
    const tooltip = {
        trigger: 'item'
    }
    const bmap = {
        center: [164.114129, 10.550339],
        zoom: 4,
        roam: true,    
    }
    const convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = GEO_CORD_MAP[data[i].name];
            if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            }
        }
        return res;
    };
    const visualMapPiece = [
            {
                max: 1,
                label: "优",
                color: "#02E300",
            },
            {
                min: 1,
                max: 2,
                label: "良",
                color: "#FFFF00",
            },
            {
                min: 2,
                max: 3,
                label: "轻度污染",
                color: "#7E0123",
            },
            {
                min: 3,
                max: 4,
                label: "中度污染",
                color: "#FE0000",
            },
            {
                min: 4,
                max: 5,
                label: "重度污染",
                color: "#98004B",
            },
            {
                min: 6,
                max: 6,
                label: "危险",
                color: "#7E0123",
            }
    ]
    const noption ={
        series: [{
           type: 'map',
           map: 'china',
           layoutCenter: ['40%', '50%'], // 地图布局中心点
           layoutSize: 270, 
           label: {
            show: true,
            color: '#ffffff',
            fontSize: 10,
           },
           itemStyle: {
               areaColor: '#eee',
               borderColor: '#24dafe',
           },
           roam: true,
           zoom: 1.9,
           resize:false,
           emphasis: {
            label: {
                color: '#fff',
                fontSize: 12,
                fontWeight:'bold'
            },
            itemStyle: {
                areaColor: 'none',
                borderColor: '#77ebff',
                borderWidth: 2
            }
           },
           data:[]
        }],
        visualMap: [{
            show: true,
            type: "piecewise",
            pieces: visualMapPiece,
            textStyle: {
                color: '#828994'
            },
            itemWidth: 64, // 每个图元的宽度
            itemHeight:12,
            top: "top",                               
            right: "0",
            inRange: {
                borderRadius: 4,
            },
        }],
        tooltip: { 
            trigger: 'item',  //数据项图形触发
            backgroundColor: "#fff",  
            borderWidth: 0,    
            formatter: function (params) {
                const {name,value} = params;
                let temp =  
                    '<div style="    border-bottom: 1px solid #ccc;font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'+name+'</div>'+
                    `<div
                      style='display: inline-block;
                      width:  0.5rem;
                      height: 0.5rem;
                      margin-right:1rem;
                      color: #5567cc'
                      >`+'●'+'</div>'+
                    '空气质量:'+`<span style='color:${params.color};font-weight:bold'>`+AQI_MAP.get(value)+'</span>'
                return temp
            },
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          bottom: '0',
          feature: {
              restore: {},
              saveAsImage: {}
          }
        },
    }
    onMounted(() => {
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom);   
        noption.series[0].data = MOCK_DATA
        myChart.setOption(noption);
        if (typeof BMap !== 'undefined') {
            // let bMap = myChart.getModel().getComponent("bmap").getBMap();
            // bMap.setMapStyle({ styleJson: STYLE_JSON });
        } 
    });
</script>

<style scoped>
.tooltip{
    color:pink;
}
</style>
  