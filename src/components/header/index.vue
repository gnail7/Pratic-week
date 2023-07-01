<script setup>
  import { reactive } from "vue";
  import Timer from '../timer/index.vue'

</script>

<template>
  <div class="d-flex jc-center title_wrap">
    <div class="zuojuxing"></div>
    <div class="youjuxing"></div>
    <div class="guang"></div>
    <div class="d-flex jc-center">
      <div class="title">
        <span class="title-text">环境监测系统</span>
      </div>
      <Timer/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title_wrap {
  height: 3rem;
  background-image: url("../../assets/img/top.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-bottom: 4px;

  .guang {
    position: absolute;
    bottom: 1rem;
    background-image: url("../../assets/img/guang.png");
    background-position: 4rem center;
    width: 100%;
    height: 3rem;
  }

  .zuojuxing,
  .youjuxing {
    position: absolute;
    top: -2px;
    width: 12rem;
    height: 0.5rem;
    background-image: url("../../assets/img/headers/juxing1.png");
  }

  .zuojuxing {
    left: 11%;
  }

  .youjuxing {
    right: 11%;
    transform: rotate(180deg);
  }

  .timers {
    position: absolute;
    right: 0;
    top: 2rem;
    font-size: 1rem;
    display: flex;
    align-items: center;

    .setting_icon {
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
      margin-left: 0.8rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.title {
  position: relative;
  // width: 500px;
  text-align: center;
  background-size: cover;
  color: transparent;
  height: 5rem;
  line-height: 3rem;

  .title-text {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 0.4rem;
    width: 100%;
    background: linear-gradient(
      92deg,
      #0072ff 0%,
      #00eaff 48.8525390625%,
      #01aaff 100%
    );
    -webkit-text-fill-color: transparent;
  }
}
</style>