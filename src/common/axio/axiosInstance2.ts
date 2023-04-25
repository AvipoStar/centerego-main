import axios from "axios";
import { createStore, createEvent} from 'effector';
import { toast } from "react-toastify";

export const $accessToken = createStore("");
export const setaccessToken= createEvent<string>();
$accessToken.on(setaccessToken, (_:any, accessToken:string) => accessToken);

export const $refreshToken = createStore("");
export const setrefreshToken= createEvent<string>();
$refreshToken.on(setrefreshToken, (_:any, refreshToken:string) => refreshToken);

export const $DataUser = createStore<null|User>(null);
export const setDataUser= createEvent<null|User>();
$DataUser.on(setDataUser, (_:any, DataUser:null|User) => DataUser);

export interface User
{
  emailOrPhone: string
}

// Общий Axios Instance для вызова Api
export const $axiosInstance = axios.create({
  baseURL: 'https://centeregocons.ru/api',
  headers: 
  {
    'Content-Type': 'text/plain',
  }
 });

  $axiosInstance.interceptors.request.use((config) => 
  {
    config.headers.Authorization = `Bearer ${ localStorage.getItem("accessToken") && localStorage.getItem("accessToken")?.length !== 0 && $accessToken.getState()}`
    return config;
  })

export interface AuthResponse
{
  accessToken: string;
  refreshToken: string;
}
export const refreshTokens = () =>
{
  $axiosInstance.post<AuthResponse>('members/refreshTokens',
        {
           refreshToken: localStorage.getItem("refreshToken") && localStorage.getItem("refreshToken")?.length !== 0 && $refreshToken.getState()
        })
        .then((res) => {
        setaccessToken(res.data.accessToken)
        setrefreshToken(res.data.refreshToken)})
        .catch(() => [])
}

$axiosInstance.interceptors.response.use(
  //обработка ошибки, в текущем варианте мы вызываем функцию для перелогина пользователя без авторизации
  (response) => response,
  async (error: any) => {
    if (error?.response?.status === 400) {
      await refreshTokens();
      // window.location.reload();
      throw error;
    }
    else if (error?.response?.status === 418)
    {
      toast.error(error.response.data.error);
    }
    else toast.error("Ошибка ввода данных. Заполните все поля!");
  }
);
