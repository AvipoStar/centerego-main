import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "effector-react"
import "../styles/Registration.css"
import RegistrationImage from "../../../common/assets/Registration/Registration.png"
import { BigImage } from "../../../ui/BigImage/organoids/BigImage";
import { $axiosInstance, AuthResponse } from '../../../common/axio/axiosInstance2';
import { $accessToken,setaccessToken } from "../../../common/axio/axiosInstance2"
import { $refreshToken,setrefreshToken } from "../../../common/axio/axiosInstance2"

export const Registration = () => {
    const [value, setValue] = useState({ password: "", phone: "", mail: "" })

    const Token = useStore($accessToken);
    const RToken = useStore($refreshToken);
    
    
const navigate = useNavigate();
    const Reg = () =>
    {
        $axiosInstance.post<AuthResponse>('members/registration',
        {
            email: 'test3@mail.com',
            password: '12345678',
            phone: '89029639257',
        })
        .then((res) => {console.log(res);
            navigate("/");
        setaccessToken(Token)
        setrefreshToken(RToken)})
        .catch(() => [])
    }

    return (
        <div className="Registration">
            <div className="Registration__Data">
                <div className="Registration__Data__Title">
                    Регистрация
                </div>
                <div className="Registration__Data__InputBar">
                    <input type="text" value={value.phone || ""} onChange={(event: any) => { setValue({ ...value, ["phone"]: event.target.value }) }} placeholder="Номер телефон" />
                    <input type="text" value={value.mail || ""} onChange={(event: any) => { setValue({ ...value, ["mail"]: event.target.value }) }} placeholder="E-mail" />
                    <input type="text" value={value.password || ""} onChange={(event: any) => { setValue({ ...value, ["password"]: event.target.value }) }} placeholder="Пароль" />
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

