import axios from 'axios'

// 創建axios實例
const apiKey = '03bb944672cd4c83b34398364e89ac43'
const baseUrl = 'https://api.themoviedb.org/3/movie/'

export function Request( method, url, data = null, token) {
    let baseURL = `${baseUrl}${url}?api_key=${apiKey}`;
  
    const requestConfig = {
      method,
      url: baseURL,
      data,
      headers: {
        Authorization: token,
      },
    };
  
    return axios(requestConfig);
  }
  
  export default Request;