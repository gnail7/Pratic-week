<script setup>
    import {ref,onMounted,watch} from 'vue'
    import  EChartsOption  from '../../utils/optionconfig';
    import ItemWrap from '../item-wrap/index.vue'
    import {getSectorGraphAPI} from '../../api'
    import {AQI_MAP} from '../../constant'
    const sectorData = ref([])
    const title = {
   
    }
    const color =ref([])
    const option = {
        title,
        type: 'pie',
        tooltip: {
            trigger: 'item',
            formatter:(params)=>{
                const {name,value,} = params
                const {aqiId} = params.data
                return (
                        '<div style="border-bottom: 1px solid #ccc;font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                        params.seriesName+'<br/>'+'</div>'+
                        `<div
                      style='display: inline-block;
                      width:  0.5rem;
                      height: 0.5rem;
                      margin-right:1rem;
                      color: ${params.color}'
                      >`+'●'+'</div>'+
                    `<span style='color:${params.color}'>`+AQI_MAP.get(aqiId)+'</span>'
                );
            }
        },
        left:'20rem',
        grid: {
            left: '20%',
            right: '20%',
            top: '20%',
            bottom: '20%',
        },
        avoidLabelOverlap: false,
        series: [
            {
            name: '空气质量',
            type: 'pie',
            radius: '50%',
            data:[],
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            }
        ],
        label: {
            color: '#31abe3'
        },
        labelLine: {
        show: false
      },
        itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return Math.random() * 200;
        }
        
    };
    
    onMounted(async()=>{
        await init()
    })
    const init = async()=>{
        try {
            const r = await getSectorGraphAPI()
            sectorData.value = r
            color.value = r.map(item=>item.color)
            sectorData.value = sectorData.value.map(item=>({
                name:AQI_MAP.get(Number(item.aqiId))+'',
                value:item.total,
                ...item
            }))
            option.series[0].data = (sectorData.value)
            const echart = new EChartsOption(option)
            echart.init('sector')
        } catch (error) {
            
        }
    }
</script>

<template>
    <ItemWrap title="空气质量占比图" >
        <div id="sector" style="width:100%;height:100%;;"></div>
    </ItemWrap>
</template>

<style lang="scss" scoped>
    @import url('../../style.css');
</style>