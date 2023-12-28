import { useAuthStore } from "@/store/auth-store";

const auth = {
  use(instance) {
    instance.interceptors.request.use(
      function (config) {
        const authStore = useAuthStore();
        /** 有值就寫入 */
        const accessToken = authStore.accessToken;
        if (accessToken) {
          /** 寫入 header Authorization */
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  },
};

export default auth;
