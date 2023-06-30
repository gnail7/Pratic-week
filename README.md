# 大屏可视化
## 图一：各城市污染程度图
根据`statics`表和`aqi`表，返回各个城市的污染程度

数据格式
```
//return Array<Object>
[
    {
        aqiId:1,
        aqiName:'优',
        healthImpact:'空气质量令人满意，基本无空气污染',
        aqiColor:'#02E300',
        province:'北京市'
    }
]

```

## 图2: 说污染程度最严重的top5地区
获取污染程度,返回在`statics`表中aqiId>5部分的行
```
//return Array<Object>
[
    {

    }
]
```
## 图3: 总数据概况

```
//return Array<Object>
[
   

]
```

## 图4: 群众反馈滚动图
## 图5: co 含量浓度超标统计图
## 图6: so2含量浓度超标统计图
## 图7 ： sqm含量浓度超标计量图
## 图8: sqm含量浓度超标统计图
## 图9: 空气质量扇形图

描述:返回各个空气质量各有多少条数据,像在`statics`表中aqi为1的有10个城市
```

//return Array<Object>
[
    {
        aqiId:1,
        value:10,
        name:'优'
    }
    ...
]
```

```
export default {

  methods: {
     initCharts() {
      let mapcharts = this.$echarts.init(this.$refs.chinaMap);
       //窗口尺寸改变
      window.addEventListener("resize",function(){
        mapcharts.resize();
      })
 
      // 绘制图表
      mapcharts.setOption({
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
           zoom: 1.2,
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
           { name: '北京', value: 17 },
           { name: '天津', value: 12 },
           { name: '上海', value: 15 },
           { name: '重庆', value: 15 },
           { name: '河北', value: 15 },
           { name: '河南', value: 15 },
           { name: '云南', value: 5 },
           { name: '辽宁', value: 15 },
           { name: '黑龙江', value: 15 },
           { name: '湖南', value: 2 },
           { name: '安徽', value: 15 },
           { name: '山东', value: 15 },
           { name: '新疆', value: 3 },
           { name: '江苏', value: 3 },
           { name: '浙江', value: 9 },
           { name: '江西', value: 15 },
           { name: '湖北', value: 4 },
           { name: '广西', value: 4 },
           { name: '甘肃', value: 10 },
           { name: '山西', value: 15 },
           { name: '内蒙古', value: 15 },
           { name: '陕西', value: 9 },
           { name: '吉林', value: 8 },
           { name: '福建', value: 9 },
           { name: '贵州', value: 9 },
           { name: '广东', value: 8 },
           { name: '青海', value: 3 },
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
          pieces: [
              { min: 0, max:4 },
              { min: 5, max: 9 },
              { min: 10, max: 14},
              { min: 14},
          ],
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
                  '#84bbff',
                  '#70b4ff',
                  '#61a7ff',
                  '#4d90f2',
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
      });
     }
   }
}


```