<script setup>
    import {getTrendGraphAPI} from '../../api/index'
    import  EChartsOption  from '../../utils/optionconfig';
    import {ref,onMounted,watch} from 'vue'
    import ItemWrap from 'components/item-wrap/index.vue'
    const monthData = ref([])
    const totalData = ref([])
    const option = {
        xAxis: {
            type: 'category',
            data: [],
            textStyle:{
                color:'#ffffff'
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [],
                type: 'line',
                smooth: true
            }
        ],     
    };
    onMounted(async()=>{
        await init()
    })

    const init = async()=>{
        try {
            const r = await getTrendGraphAPI()
            monthData.value = r.map(item=>item.month)
            totalData.value = r.map(item=>item.total)
            option.series[0].data = totalData.value
            option.xAxis.data = monthData.value
            const echart = new EChartsOption(option)
            echart.init('trend')
        } catch (error) {
            
        }
    }
</script>

<template>
    <ItemWrap title="空气质量折线图">
        <div id="trend" style="width:100%;height: 100%;">
        </div>
    </ItemWrap>
</template>

<style scoped lang="scss">
    @import url('../../style.css');
</style>