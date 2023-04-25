import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "effector-react"
import "../styles/Registration.css"
import RegistrationImage from "../../../common/assets/Registration/Registration.png"
import { BigImage } from "../../../ui/BigImage/organoids/BigImage";
import { $axiosInstance, AuthResponse, setDataUser } from '../../../common/axio/axiosInstance2';
import { $accessToken,setaccessToken } from "../../../common/axio/axiosInstance2"
import { $refreshToken,setrefreshToken } from "../../../common/axio/axiosInstance2"

export const Registration = () => {
    const [userData, setData] = useState({ password: "", phone: "", email: "" })

    const Token = useStore($accessToken);
    const RToken = useStore($refreshToken);
    
    
const navigate = useNavigate();
    const Reg = () =>
    {
        $axiosInstance.post<AuthResponse>('members/registration', userData)
        .then((res) => {console.log(res);
        setaccessToken(Token)
        setrefreshToken(RToken)
        setDataUser( {emailOrPhone:userData.email ? userData.email : userData.phone})

        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('emailOrPhone', userData.email ? userData.email : userData.phone);

        navigate("/");
    })
        .catch(() => [])
    }

    return (
        <div className="Registration">
            <div className="Registration__Data">
                <div className="Registration__Data__Title">
                    Регистрация
                </div>
                <div className="Registration__Data__InputBar">
                    <input type="text" value={userData.phone || ""} onChange={(event: any) => { setData({ ...userData, ["phone"]: event.target.value }) }} placeholder="Номер телефон" />
                    <input type="text" value={userData.email || ""} onChange={(event: any) => { setData({ ...userData, ["email"]: event.target.value }) }} placeholder="E-mail" />
                    <input type="password" value={userData.password || ""} onChange={(event: any) => { setData({ ...userData, ["password"]: event.target.value }) }} placeholder="Пароль" />
                    <div onClick={Reg} className="Registration__Data__InputBar__Button">
                        Зарегистрироваться
                    </div>
                </div>
                <a href={"/Login"} className="Registration__Data__Button__One">
                    Авторизоваться
                </a>
                <NavLink to={"/"} className="Registration__Data__Button__Two">
                    Назад
                </NavLink>
            </div>
           <BigImage/>

        </div>
    );
};

