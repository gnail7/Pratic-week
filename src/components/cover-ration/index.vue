<script setup>
    import {onMounted, ref} from 'vue'
    import EchartsOption from '../../utils/optionconfig.js'
    import {getCityCoverage ,getProvinceCoverage} from '../../api'
    const  axisLine = {
        lineStyle: {
        }
    }
    const defaultOption = {
         series: [
            {
                name: 'Pressure',
                type: 'gauge',
                detail: {
                    valueAnimation: true,
                    formatter: '{value}',
                    color:'#fff',    
                    offsetCenter: ['0%', '70%']
                },
                progress:{
                    show: true,
                    itemStyle:{color:''}
                },
                title: {
                    color:'#ffffff',
                    offsetCenter: ['0%', '-120%']
                },
                show: true,
                showAbove: true,
                size: 25,
                axisLabel:{
                    // color:'#ffffff',
                },
                data: [],
                splitLine: {
                    length: 0,
                    lineStyle: {
                        width: 0,
                        color: '#999'
                    } 
                },
                pointer:{
                    itemStyle: {
                        color:'#ff4b48',
                    },
                },
            },
          
        ]
    };

    onMounted(async()=>{
        await init()
    })
    const init = async()=>{
        try {
            const r1 = await getProvinceCoverage()
            const r2  = await getCityCoverage()
            setOption(r1,'cover1','全国省网格覆盖率(%)')
            setOption(r2,'cover2','全国大城市覆盖率(%)')
        } catch (error) {
            
        }
    }
    const setOption = (r,id,label)=>{
        const copyOption = JSON.parse(JSON.stringify(defaultOption))
        let color = '#ff4b48'
        let option = copyOption
        console.log(option)
        option.series[0].data = [{value:Number(r),name:label}]
        if(r>40){
           color = '#2effae'
        }
        // option.series[0].progress.itemStyle.color = color
        option.series[0].pointer.itemStyle.color = color
        option.series[0].detail.color = color
        const echart = new EchartsOption(option)
        echart.init(id)
    }

</script>

<template>
    <div style="width:100%;height:100%" class="flex_arround">
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