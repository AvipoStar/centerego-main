import axios, { AxiosError } from "axios";
import { createStore, createEvent, createEffect, sample } from 'effector';


export const $accessToken = createStore("");
export const $refreshToken = createStore("");

export const setaccessToken= createEvent<string>();
export const setrefreshToken= createEvent<string>();

$accessToken.on(setaccessToken, (_:any, accessToken:any) => accessToken);
$refreshToken.on(setrefreshToken, (_:any, refreshToken:any) => refreshToken);

export const deffURL = " http://62.109.0.113";

// Общий Axios Instance для вызова Api
export const axiosInstance = axios.create({
  baseURL: "http://62.109.0.113:8039/",
  headers: 
  {
    'Content-Length': 0,
    'Content-Type': 'text/plain',
  } });

export interface AuthResponse
{
  accessToken:string;
  refreshToken: string;
  user:{
    email:string;
    isActivated:boolean;
    id:string;
  }
}

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
