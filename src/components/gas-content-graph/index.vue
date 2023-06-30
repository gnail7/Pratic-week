<script setup>
    import { inject, onMounted,toRefs,watch } from 'vue';
    import ItemWrap from '../../components/item-wrap/index.vue';
    import EchartsOption from '../../utils/optionconfig.js'
    const props = defineProps({
        att:String,
        label:String,
        color:String
    })
    const totalData = inject('totalGasData')
    const {label,att,color} = toRefs(props)
    const option = {
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [],
            type: 'bar'
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            }
        },
        markPoint: {
            data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
            ]
        },
        markLine: {
            data: [{ type: 'average', name: 'Avg' }]
        },
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
    onMounted(()=>{       
    })
    watch(totalData,()=>{
        option.xAxis.data = totalData.value.map(item=>item.provinceAbbr)
        option.series[0].data = totalData.value.map(item=>item[att.value])
        option.series[0].color = color.value
        const echart = new EchartsOption(option)
        echart.init(`contentGraph${att.value}`)
    })
   
</script>

<template>
    <ItemWrap :title="label+'浓度超标累计'" style="width: 100%;height: 100%;">
        <div 
        :id="`contentGraph${att}`" 
        style="width: 100%;height: 100%;"></div>
    </ItemWrap>
</template>