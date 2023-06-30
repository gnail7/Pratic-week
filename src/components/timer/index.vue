<script setup>
    import {ref,onMounted} from 'vue'
    import {formatDate} from '../../utils/index'
    const date = ref()
    onMounted(() => {
        let timer = setInterval(()=>{
            const t = new Date().toLocaleString()
            date.value = t
        },1000)
      
    })
</script>

<template>
    <div class="timer" >
        {{ date }}
    </div>
</template>

<style scoped lang="less">
.timer{
    position: fixed;
    right:0;
    top:1rem;
    color:#f4f4f4;
}
</style>