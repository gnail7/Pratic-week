<script setup>
    import {ref,onMounted} from 'vue'
    import  EChartsOption  from '../../utils/optionconfig';
    import ItemWrap from '../item-wrap/index.vue'
    const title = {
   
    }
    let option  = {
        title,
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
                emphasis: {
                    itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
    };
 

    onMounted(()=>{
        const echart = new EChartsOption(option)
        echart.init('sector')
    })
</script>

<template>
    <ItemWrap title="空气质量占比图" >
        <div id="sector" style="width:100%;height:100%;" class="flex_center"></div>
    </ItemWrap>


</template>

<style lang="scss" scoped>
@import url('../../style.css');
</style>