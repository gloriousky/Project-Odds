export const getImageUrl = (path) => {
  return new URL(`./assets/images/${path}`, import.meta.url).href;
  //new url(a,b) 是在a路徑的基礎上加上b路徑 例如("https://www.com", "/home") 會回傳https://www.com/home;
  //而href則是返回標準規格的url
  // import.meta.url 則是返回文件路徑 例如目前所在為game.vue就返回game.vue的url路徑
  //以上功能加起來就是返回圖片路徑 用於解決圖片引入的動態路徑（相對路徑）
};
