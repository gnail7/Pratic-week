<script setup>
    import {onMounted, ref} from 'vue'
    import EchartsOption from '../../utils/optionconfig.js'
    import {getCityCoverage ,getProvinceCoverage} from '../../api'
    const  axisLine = {
        lineStyle: {
        }
    }
    let colorArr = [
        [40, '#FF6E76'],
        [50, '#FDDD60'],
        [75, '#58D9F9'],
        [100, '#7CFFB2']
    ]
    const defaultOption = {
         series: [
            {
                name: 'Pressure',
                type: 'gauge',
                splitNumber:1,
                detail: {
                    valueAnimation: true,
                    formatter: '{value}',
                    color:'#fff',    
                    offsetCenter: ['0%', '70%']
                },
                progress:{
                    show: false,
                    itemStyle:{color:''}
                },
                title: {
                    color:'#ffffff',
                    offsetCenter: ['0%', '-120%']
                },
                show: true,
                showAbove: true,
                axisLabel:{
                    // color:'#ffffff',
                },
                axisLine: {
                    lineStyle: {
                    width: 10,
                    color: [
                        [0.25, '#FF6E76'],
                        [0.5, '#FDDD60'],
                        [0.75, '#58D9F9'],
                        [1, '#7CFFB2']
                    ]
                }
                },
                data: [],
                pointer:{
                    itemStyle: {
                        width:6,
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
        option.series[0].data = [{value:Number(r),name:label}]
        const item = colorArr.find(item=>item[0]>Number(r))
        color = item[1]
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