import axios from "axios";
import.meta.env.VITE_API_BASE_URL
const instance = axios.create({
    baseURL:'http://zzpbzx.com:2346/statistics',
    timeout:15000,
})


instance.interceptors.request.use(config=>{
    const token =(localStorage.getItem('token'))
    if (token) {
        config.headers['Authorization'] = (token)
    }
    return config
},
err=>{
    return Promise.reject(err)
}
)


instance.interceptors.response.use(res=>{ 
    if(res.status === 200){
        return res.data
    }
    return false
    },
    err=>{
        return Promise.reject(err)
    }
)

export default instance