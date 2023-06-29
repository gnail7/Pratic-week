<script setup>
    import {ref, toRefs,computed, onMounted} from 'vue'

    //获取总反馈数量，总安全员，总supervisor，
    //{label:'',value:'',id:''}
    const props = defineProps({
        label:String,
        value:Number,
        id:Number
    })
    const {label,value,id} = toRefs(props)
    const initUrl = [
        {id:1,path:'/src/assets/img/left_top_lan.png',color:'#00bac9'},
        {id:2,path:'/src/assets/img/left_top_huang.png',color:'#ffc600'},
        {id:3,path:'/src/assets/img/left_top_hong.png',color:'#ff009a'},
        {id:4,path:'/src/assets/img/left_top_lv.png',color:'#00ffa8'}
    ]
    const thisIcon = computed(()=>initUrl[id.value])   
</script>

<template>
    <div class="item">
        <img :src="thisIcon.path"/>
        <span :style="{color:thisIcon.color}">{{ label }}</span>
    </div>
</template>

<style lang="scss">
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 3rem;
            height: 3rem;
        }
    }
</style>