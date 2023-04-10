import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { createStore, createEvent} from 'effector';

export const $accessToken = createStore("");
export const $refreshToken = createStore("");

export const setaccessToken= createEvent<string>();
export const setrefreshToken= createEvent<string>();

$accessToken.on(setaccessToken, (_:any, accessToken:string) => accessToken);
$refreshToken.on(setrefreshToken, (_:any, refreshToken:string) => refreshToken);

export const deffURL = 'https://test.gkh-info.org/api/ego/';

// Общий Axios Instance для вызова Api
export const $axiosInstance = axios.create({
  baseURL: 'https://test.gkh-info.org/api/ego/',
  withCredentials: true,
  headers: 
  {
    'Content-Type': 'text/plain',
  } });

  $axiosInstance.interceptors.request.use((config) => 
  {
    config.headers.Authorization = `Bearer ${$accessToken}`
    return config;
  })

export interface AuthResponse
{
  accessToken:string;
  refreshToken: string;
}
export const refreshTokens = () =>
{
  $axiosInstance.post<AuthResponse>('members/refreshTokens',
        {
           refreshToken: $refreshToken
        })
        .then((res) => {console.log(res);
        setaccessToken(res.data.accessToken)
        setrefreshToken(res.data.refreshToken)})
        .catch(() => [])
}

$axiosInstance.interceptors.response.use(
  //обработка ошибки, в текущем варианте мы вызываем функцию для перелогина пользователя без авторизации
  (response) => response,
  async (error: AxiosError) => {
    if (error?.response?.status === 400) {
      await refreshTokens();
      window.location.reload();
      throw error;
    }
  }
);
