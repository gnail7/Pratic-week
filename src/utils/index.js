export function formatDate() {
    const date = (new Date()).getTime();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 :'0'+(date.getMonth() + 1);
    const day = date.getDate();
    const hour = date.getHours()>10? date.getHours():'0'+ date.getHours();;
    const minute = date.getMinutes()>10? date.getMinutes():'0'+ date.getMinutes();
    const second = date.getSeconds()>10? date.getSeconds():'0'+ date.getSeconds()
    return `${year}-${month}-${day} ${hour}:${minute}`;
}