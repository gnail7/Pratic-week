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
        {id:1,path:new URL('/src/assets/img/left_top_lan.png', import.meta.url).href,color:'#00bac9'},
        {id:2,path:new URL('/src/assets/img/left_top_huang.png', import.meta.url).href,color:'#ffc600'},
        {id:3,path:new URL('/src/assets/img/left_top_hong.png', import.meta.url).href,color:'#ff009a'},
        {id:4,path:new URL('/src/assets/img/left_top_lv.png', import.meta.url).href,color:'#00ffa8'}
    ]
    const thisIcon = computed(()=>initUrl[id.value])   
</script>

<template>
    <div class="item">
        <img :src="thisIcon.path"/>
        <div class="flex_column" :style="{color:thisIcon.color}">
            <span class="divide">{{ label }}</span>
            <span class="divide">{{ value }}</span>
        </div>

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
    .flex_column{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .divide{
        margin-top: 10px;
    }
</style>