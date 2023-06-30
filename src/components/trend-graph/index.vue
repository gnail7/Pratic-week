<script setup>
    import {getTrendGraphAPI} from '../../api/index'
    import  EChartsOption  from '../../utils/optionconfig';
    import {ref,onMounted,watch} from 'vue'
    import ItemWrap from 'components/item-wrap/index.vue'
    import { MAIN_COLOR } from '../../constant';
    import {formatDate} from '../../utils/index'

    const monthData = ref([])
    const totalData = ref([])
    const option = {
        xAxis: {
            type: 'category',
            data: [],
            axisLabel: {
                color:MAIN_COLOR
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 级',
                color:MAIN_COLOR
            }
        },
        tooltip: {
            trigger: 'item',
            formatter:''
        },
        series: [
            {
                data: [],
                type: 'line',
                smooth: true,
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            },
               
        ],     
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {},
            },
            iconStyle:{
                color:'#fff'
            }
        },
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