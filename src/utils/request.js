import axios from "axios";

const instance = axios.create({
    baseURL:'http://43.143.201.120:9999/statistics',
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