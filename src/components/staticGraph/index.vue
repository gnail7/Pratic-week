<script setup>
    import { ref } from 'vue';
    import StaticItem from './staticItem.vue';
    import ItemWrap from '../item-wrap/index.vue'

    const staticData = ref([])
    const mockData = [{
        label:'总人数',
        value:133
    },
    {
        label:'总安全员',
        value:10
    }]

    const init = async()=>{
        try {
            
        } catch (error) {
            
        }
    }
</script>

<template>
    <ItemWrap title="数据总览" >
        <div class="flex1">
            <StaticItem v-for="(item,index) in mockData" 
            :label="item.label"
            :value="item.value"
            :key="index" 
            :id="index" />
        </div>
    </ItemWrap>
</template>

<style scoped>
.flex1{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    margin: 1rem;
}
</style>