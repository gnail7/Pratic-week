<template>
    <div ref="chart" id="main" style="width: 100%;height: 100%;"></div>
  </template>
<script setup>
    import { ref, onMounted, nextTick } from 'vue';
    import * as echarts from 'echarts';
    import 'echarts/extension/bmap/bmap';
    import 'echarts/map/js/china.js'
    import {STYLE_JSON,GEO_CORD_MAP} from '../constant'
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
           data: [
           { name: '北京', value: 3 },
           { name: '天津', value: 3 },
           { name: '上海', value: 3 },
           { name: '重庆', value: 3 },
           { name: '河北', value: 3 },
           { name: '河南', value: 3 },
           { name: '云南', value: 3},
           { name: '辽宁', value: 3 },
           { name: '黑龙江', value: 4 },
           { name: '湖南', value: 2 },
           { name: '安徽', value: 3 },
           { name: '山东', value: 5 },
           { name: '新疆', value: 3 },
           { name: '江苏', value: 3 },
           { name: '浙江', value: 9 },
           { name: '江西', value: 15 },
           { name: '湖北', value: 4 },
           { name: '广西', value: 4 },
           { name: '甘肃', value: 1 },
           { name: '山西', value: 5 },
           { name: '内蒙古', value: 5 },
           { name: '陕西', value: 6 },
           { name: '吉林', value: 6 },
           { name: '福建', value: 7 },
           { name: '贵州', value: 4 },
           { name: '广东', value: 2 },
           { name: '青海', value: 2 },
           { name: '西藏', value: 9 },
           { name: '四川', value: 0 },
           { name: '宁夏', value: 15 },
           { name: '海南', value: 7 },
           { name: '台湾', value: 4 },
           { name: '香港', value: 4 },
           { name: '澳门', value: 3 }
           ]
        }],
        visualMap: [{
          type: 'piecewise',
          show: true,
          categories: ['严重污染', '重度污染', '中度污染', '轻度污染', '良', '优'],
          textStyle: {
             color: '#828994'
          },
          itemWidth: 64, // 每个图元的宽度
          itemHeight:12,
          top: "top",                               
          right: "0",
          inRange: {
              borderRadius: 4,
              color: [ 
                  '#7E0123',
                  '#98004B',
                  '#FE0000',
                  '#FF7E00',
                  '#FFFF00',
                  '#02E300'
              ]
          },
        }],
        tooltip: { 
          trigger: 'item',  //数据项图形触发
          backgroundColor: "#fff",  
          borderWidth: 0,    
          formatter: '地区：{b}<br/>数据：{c}'
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
        if (typeof BMap !== 'undefined') {
            const chartDom = document.getElementById('main');
            const myChart = echarts.init(chartDom);   

            myChart.setOption(noption);
            // let bMap = myChart.getModel().getComponent("bmap").getBMap();
            // bMap.setMapStyle({ styleJson: STYLE_JSON });
        } 
    });
</script>
  