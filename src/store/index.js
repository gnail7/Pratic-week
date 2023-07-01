import { defineStore } from "pinia";
import {ref,computed} from 'vue'

export const useGlobalStore = defineStore('globalStore',()=>{   
    const globalData = ref([]) 
    return {
         globalData
    }
})