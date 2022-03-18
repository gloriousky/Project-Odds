import axios from 'axios'

// 創建axios實例
const apiKey = '03bb944672cd4c83b34398364e89ac43'
const service = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`, // api的base_url
    // withCredentials: true, // 跨域請求時是否發送cookies
    timeout: 5000 // 請求超時設置
})

// 請求攔截器
service.interceptors.request.use(config => {
    // 請求前做點什麼？
    if (!config.data) {
        config.data = {};
    }

    // console.log(config)
    // 設置公共參數
    console.log(qs.stringify(config.data));

    return config;
}, error => {
    // 處理請求錯誤
    console.log(error); // 用於調試
    return Promise.reject(error);
})

// 響應攔截器
service.interceptors.response.use(response => {
    // let res = respone.data; // 如果返回的結果是data.data的，嫌麻煩可以用這個，return res
    return response;
}, error => {
    console.log('error：' + error); // 用於調試
    return Promise.reject(error);
})

export default service;