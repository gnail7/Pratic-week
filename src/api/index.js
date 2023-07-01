import instance from "../utils/request";

export const getSectorGraphAPI = ()=>{
    return instance({
        url:'/listAqiDistributeTotalStatis',
        method:'post'
    })
}
export const getTrendGraphAPI = ()=>{
    return instance({
        url:'/listAqiTrendTotalStatis',
        method:'post'
    })
}
export const getGoodCountAPI = ()=>{
    return instance({
        url:'/getAqiGoodCount',
        method:'post'
    })
}
export const getAqiCount  = ()=>{
    return instance({
        url:'/getAqiCount',
        method:'post'
    })
}
export const getCityCoverage = ()=>{
    return instance({
        url:'/getCityCoverage',
        method:'post'
    })
}
export const getProvinceCoverage = ()=>{
    return instance({
        url:'/getProvinceCoverage',
        method:'post'
    })
}
export const listProvinceItemTotalStatis = ()=>{
    return instance({
        url:'/listProvinceItemTotalStatis',
        method:'POST'
    })
}