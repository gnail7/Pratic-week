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
    <section class="top flex">
        <div class="col left flex_column">
          <CoverRation class="col"/>
          <SectorGraph class="col"/>
        </div>
        <div class="mid">
          <div class="graph">
            <MapGraph/>
          </div>
        </div>
        <div class="col left flex_column">
            <GasContentGraph
            class="col"
            :att="'coTotal'"
            :color="'#fb5e59'"
            :label="'一氧化碳(CO)'"/>
              <GasContentGraph
              class="col"
            :att="'so2Total'"
            :color="'#38c62f'"
            :label="'二氧化硫(SO2)'"/>   
        </div>
    </section>
    <section class="bottom flex">
      <TrendGraph class="col left over"/>
      <StaticGraph  class="col over"/>
      <GasContentGraph
      
        class="col left over"
        :att="'spmTotal'"
        :color="'#2c95fc'"
        :label="'spm'"/>  
    </section>  
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
  background:url('./assets/img/pageBg.png') center;
  background-size: cover;
  background: #04050f;

}


.top{
    display: flex;
    flex:2;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .bottom{
    flex:1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .col{
      flex:1;
      width: 100%;
    height: 100%;
    }
  }

.left{
  flex:1;
  width:33vw;

}
.mid{
  flex:2;
  display: flex;
  justify-content: center;
  align-items: center;
  .graph{
    width:100%;
    height:100%;
  }
}
.right{
  background-color: aqua;
  flex:1;
}


</style>
