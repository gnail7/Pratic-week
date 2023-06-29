import axios from "axios";

const instance = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    timeout:15000,
})


instance.interceptors.request.use(config=>{
    const token =(localStorage.getItem('token'))
    config.me
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