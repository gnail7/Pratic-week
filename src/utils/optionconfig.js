import * as echarts from 'echarts'

export default class EchartOption{  
    constructor(option){
        this.option = option
    }
    init(domName){
        let chartDom = document.getElementById(domName);
        let myChart = echarts.init(chartDom);
        myChart.setOption(this.option)
    }
}