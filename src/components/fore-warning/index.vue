<script setup>
    import { onMounted,ref } from 'vue';
    import * as echarts from 'echarts';
    import ItemWrap from '../item-wrap/index.vue'
    import EChartsOption from '../../utils/optionconfig';
    const echartData = ref([])

    onMounted(()=>{
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
            },
            series: [
                {
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
                }
            ]
        };
        const echart = new EChartsOption(option)
        echart.init('main1')
    })
    const init = ()=>{
        try {
            
        } catch (error) {
            
        }
    }
</script>

<template>
    <ItemWrap title="中度以上污染城市" class="iii">
        <div id="main1" style="width:100%;height:100%;"></div>
    </ItemWrap>
</template>
<style scoped >
.iii{
    height: 100%;
}
</style>