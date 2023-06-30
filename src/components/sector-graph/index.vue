<script setup>
    import {ref,onMounted,watch} from 'vue'
    import  EChartsOption  from '../../utils/optionconfig';
    import ItemWrap from '../item-wrap/index.vue'
    import {getSectorGraphAPI} from '../../api'
    const sectorData = ref([])
    const title = {
   
    }
    const color =ref([])
    const option = {
        title,
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     orient: 'vertical',
        //     left: '10rem',
        //     top:'top',
        //     textStyle:{
        //         color:'#ffffff'
        //     },
        // },
        left:'20rem',
        // color:[],
        grid: {
            left: '20%',
            right: '20%',
            top: '20%',
            bottom: '20%',
        },
        series: [
            {
            name: '空气质量',
            type: 'pie',
            radius: '50%',
            data:[],
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ],
        label: {
            color: '#31abe3'
        },
        labelLine: {
            lineStyle: {
                color: '#31abe3'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
        },
        itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
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
                name:item.aqiExplain,
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