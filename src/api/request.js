import axios from 'axios'

// 創建axios實例
const apiKey = '4046a782506d8978af87561bd2d15c64'
//地區 uk | us | eu | au. Multiple can be specified if comma delimited
const regions = 'us' 
 // 玩法 h2h | spreads | totals. Multiple can be specified if comma delimited
const markets = 'spreads'
// 歐式&美式賠率 decimal | american
const oddsFormat = 'decimal' 
// 時間格式 iso | unix timestamp
const dateFormat = 'iso' 
const baseUrl = 'https://api.the-odds-api.com/v4/sports'



  const Request = (url, config) => {
    return axios.get(`${baseUrl}${url}?apiKey=${apiKey}&regions=${regions}&dateFormat=${dateFormat}`, config);
  };
  
  export default Request