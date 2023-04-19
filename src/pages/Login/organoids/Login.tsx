import { useState } from "react";
import { useStore } from "effector-react"
import { NavLink, useNavigate } from "react-router-dom"; 
import "../styles/Login.css"
import { BigImage } from "../../../ui/BigImage/organoids/BigImage";
import { $axiosInstance, AuthResponse, setDataUser } from '../../../common/axio/axiosInstance2';
import { $accessToken,setaccessToken } from "../../../common/axio/axiosInstance2"
import { $refreshToken,setrefreshToken } from "../../../common/axio/axiosInstance2"
import { error } from "console";

    
export const Login = () => {
    const [userData, setValue] = useState({ password: "", phone: "", mail: "" })
    const navigate = useNavigate();
    
    const Autorisation = () =>{
        $axiosInstance.post<AuthResponse>('members/login',
        {
            emailOrPhone: userData.mail || userData.phone,
            password: userData.password
        })
        .then((res) => {console.log(res);
            if (res&&res.data)
            {
                setaccessToken(res.data.accessToken)
            setrefreshToken(res.data.refreshToken)
            setDataUser( {emailOrPhone:userData.mail||userData.phone})
            navigate("/")
            }
            else console.log(res)
            }
        )
        .catch((err) => console.log(err))
    }

    return (
        <div className="Login">
            <div className="Login__Data">
                <div className="Login__Data__Title">
                    Авторизация
                </div>
                <div className="Login__Data__InputBar">
                    <input 
                        type="text"
                        value={userData.mail || userData.phone} 
                        onChange={(event: any) => { setValue({ ...userData, ["mail"]: event.target.value, ["phone"]:event.target.value }) }}
                        placeholder="E-mail или телефон" 
                    />
                    <input
                        type="password" 
                        value={userData.password} 
                        onChange={(event: any) => { setValue({ ...userData, ["password"]: event.target.value })}}
                        placeholder="Пароль" 
                       />
                    <div onClick={Autorisation} className="Login__Data__InputBar__Button">
                        Авторизоваться
                    </div>
                </div>
                <a href={"/Registration"} className="Login__Data__Button__One">
                    Зарегистрироваться
                </a>
                <NavLink to={"/"} className="Login__Data__Button__Two">
                    Назад
                </NavLink>
            </div>
            <BigImage/>
        </div>
    );
};




