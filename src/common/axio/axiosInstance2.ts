import axios, { AxiosError } from "axios";

export const accessTokenName = "accessTokenV3";
//export const refreshTokenName = "refreshTokenV3";
export const deffURL = " http://62.109.0.113";

// Общий Axios Instance для вызова Api
export const axiosInstance = axios.create({
  baseURL: "http://62.109.0.113:8039/members/login",
  headers: {
    authorization: `Bearer ${localStorage.getItem(accessTokenName)}`,
  },
});

// axiosInstance.interceptors.response.use(
//   //обработка ошибки, в текущем варианте мы вызываем функцию для перелогина пользователя без авторизации
//   (response) => response,
//   async (error: AxiosError) => {
//     if (error?.response?.status === 400) {
//       await refreshTokens();
//       window.location.reload();
//       throw error;
//     }
//   }
// );
