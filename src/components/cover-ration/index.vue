<script setup>
    import {onMounted, ref} from 'vue'
    import EchartsOption from '../../utils/optionconfig.js'
    import {getCityCoverage ,getProvinceCoverage} from '../../api'
    const  axisLine = {
        lineStyle: {
        width: 30,
        color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
        ]
        }
    }
    const defaultOption = {
         series: [
            {
            name: 'Pressure',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}',
                color:'#fff'
            },
            data: []
            }
        ]
    };

    onMounted(async()=>{
        await init()
    })
    const init = async()=>{
        try {
            const r1 = await getProvinceCoverage()
            const r2  = await getCityCoverage()
            let option1 = defaultOption
            let option2 = defaultOption
            option1.series[0].axisLine = axisLine
            option1.series[0].data = [{value:Number(r1),name:'覆盖率'}]
            const echart1 = new EchartsOption(option1)
            echart1.init('cover1')
            option2.series[0].data = [{value:Number(r2),name:'覆盖率'}]
            const echart2 = new EchartsOption(option2)
            echart2.init('cover2')
        } catch (error) {

            
        }
    }

</script>

<template>
    <div style="width:100%;height:100%" class="flex_arround">
        <!-- <div class="left_box box">
            <h2>全国省网格覆盖率(%)</h2>
            <div id="cover1"  style="width:100%;height:100%"></div>
        </div>
        <div class="left_box box">
            <h2>全国大城市覆盖率(%)</h2>
            <div id="cover2" style="width:100%;height:100%"></div>
        </div> -->
        <div id="cover1"  style="width:100%;height:100%"></div>
        <div id="cover2" style="width:100%;height:100%"></div>

    </div>
</template>

<style lang="less" scoped>
    @import url('../../style.css');
    h2{
        color:#ffffff;
    }
    .box{
        display: flex;
        flex-direction: column;
    }
    .flex_arround{
        align-items: flex-start;
    }
  
</style>