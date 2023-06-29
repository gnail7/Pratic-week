<script setup>
  import MapGraph from './components/MapGraph.vue';
  import ItemWrap from './components/item-wrap/index.vue'
  import Header from './components/header/index.vue';
  import StaticGraph from './components/staticGraph/index.vue';
  import ForeWarning from './components/fore-warning/index.vue';
  import SectorGraph from './components/sector-graph/index.vue';
  import TrendGraph from './components/trend-graph/index.vue';
  import CoverRation from './components/cover-ration/index.vue'
  import GasContentGraph from './components/gas-content-graph/index.vue'
  import {ref,onMounted,provide} from 'vue';
  import {listProvinceItemTotalStatis} from './api'
  const totalGasData = ref([])
  onMounted(async()=>{
    await init()
  })
  provide('totalGasData',totalGasData)
  const init = async()=>{
    try {
      const r = await listProvinceItemTotalStatis()
      totalGasData.value = r
    } catch (error) {
      
    }
  }
</script>

<template>
  <div class="main_banner">
    <Header class="over header"></Header>
    <section class="head part flex_between">
      <div class="left col over">
        <CoverRation/>
      </div>
      <div class="right col over">
        <GasContentGraph
        :att="'coTotal'"
        :color="'#fb5e59'"
        :label="'一氧化碳(CO)'"/>
      </div>
    </section>
    <section class="flex part flex_between">
      <div class="left  over">
        <SectorGraph/>
      </div>
      <div class="right  over">
        <GasContentGraph
        :att="'so2Total'"
        :color="'#38c62f'"
        :label="'二氧化硫(SO2)'"/>   
      </div>
    </section>
    <section class="bottom part flex_between">
      <TrendGraph class="col over"/>
      <StaticGraph  class="col over"/>
      <GasContentGraph
        class="col over"
        :att="'spmTotal'"
        :color="'#2c95fc'"
        :label="'spm'"/>  
    </section>
    <div class="map">
      <MapGraph/>
    </div>
  </div>

</template>

<style scoped lang="less">
@import './style.css';
.main_banner{
  width:100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top:1rem;
  
  overflow: hidden;

  .map{
    position: absolute;
    left:0;
    top:0;
    width: 100vw;
    height: 100vh;
  }
  .part{
    flex:1;
    width: 100vw;
    height: 100%;
  }
}
.over{
  z-index:2;
}
.left ,.right{
  width: 33vw;
  height: 30vh;
}
.flex{
  display: flex;
  .col{
    // flex:1;
    width: 100%;
    height: 100%;
    width: 33vw;
  }
}

.box{
  position: relative;
}
.bottom{
  background-color: pink;
}
.header{
  height:3rem;
}
</style>
