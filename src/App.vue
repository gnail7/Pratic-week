<script setup>
  import MapGraph from './components/MapGraph.vue';
  import ItemWrap from './components/item-wrap/index.vue'
  import Header from './components/header/index.vue'
  import StaticGraph from './components/staticGraph/index.vue';
  import ForeWarning from './components/fore-warning/index.vue'
  import SectorGraph from './components/sector-graph/index.vue'
</script>

<template>
  <div class="main_banner">
    <Header class="over"></Header>
    <section class="head part flex_between">
      <div class="left col over">
        <StaticGraph/>
      </div>
      <div class="right col over">
        <!-- <SectorGraph/> -->
      </div>
    </section>
    <section class="flex part flex_between">
      <div class="left  over">
        <SectorGraph/>
      </div>
      <div class="right  over">
        <ForeWarning/>
      </div>
    </section>
    <section class="bottom part flex">
      <ItemWrap class="col over" title="数据总览">数据总览</ItemWrap>
      <ItemWrap class="col over" title="数据总览">数据总览</ItemWrap>
      <ItemWrap class="col over" title="数据总览">数据总览</ItemWrap>
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
  width: 25vw;
}
.flex{
  display: flex;
  .col{
    flex:1;
  }
}

.box{
  position: relative;
}

</style>
