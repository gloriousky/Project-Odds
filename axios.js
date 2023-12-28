/* https://www.kancloud.cn/yunye/axios/234845 */
import axios from "axios";
import logger from "@/interceptors/logger";
// import auth from "@/interceptors/auth";
// import transfer from "@/interceptors/transfer";
// import upgrade from "@/interceptors/upgrade";
// import validate from "@/interceptors/validate";

const instance = axios.create();

/* API_URL */
instance.defaults.baseURL = import.meta.env.VITE_REMOTE_API;

/* 狀態碼錯誤範圍 */
instance.defaults.validateStatus = (status) => {
  return status >= 200 && status < 300; // 默認設定
};

/** middleware */
if (import.meta.env.DEV) {
  /** console */
  logger.use(instance);
}

/** 寫入 Bearer token */
// auth.use(instance);

/** 更新 token */
// upgrade.use(instance);

/* 其他特殊碼處理: 改寫code */
// validate.use(instance);

/* 將資料轉換成需要的格式 */
// transfer.use(instance);

export default instance;
