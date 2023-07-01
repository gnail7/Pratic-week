<script setup>
    import { inject, onMounted,toRefs,watch } from 'vue';
    import ItemWrap from '../../components/item-wrap/index.vue';
    import EchartsOption from '../../utils/optionconfig.js'; 
    const props = defineProps({
        att:String,
        label:String,
        color:String,
        type:{
            type:String,
            default:'line'
        }
    })
    const totalData = inject('totalGasData')
    const {label,att,color,type} = toRefs(props)
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
            type: type.value,
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
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            },
            formatter:(params)=>{
                const {name,value} = params[0];
                let temp =  
                    '<div style="    border-bottom: 1px solid #ccc;font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'+name+'</div>'+
                    `<div
                      style='display: inline-block;
                      width:  0.5rem;
                      height: 0.5rem;
                      margin-right:1rem;
                      color: #5567cc'
                      >`+'●'+'</div>'+
                    `${label.value}超标指数:`+`<span style='color:${params.color};font-weight:bold'>`+(value)+'</span>'
                return temp
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