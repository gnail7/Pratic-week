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