import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Login.css"
import { BigImage } from "../../../ui/BigImage/organoids/BigImage";
import { axiosInstance } from "../../../common/axio/axiosInstance2";

export const Login = () => {
    const [value, setValue] = useState({ password: "", phone: "", mail: "" })


    const Autorisation = () =>{
        axiosInstance.get<{ menu: any[] }>('authorization/members/login')
        .then((res) => res.data.menu)
        .catch(() => [])
        console.log()
    }

    return (
        <div className="Login">
            <div className="Login__Data">
                <div className="Login__Data__Title">
                    Авторизация
                </div>
                <div className="Login__Data__InputBar">
                    <input type="text" value={value.phone || ""} onChange={(event: any) => { setValue({ ...value, ["phone"]: event.target.value }) }} placeholder="Номер телефон" />
                    <input type="text" value={value.mail || ""} onChange={(event: any) => { setValue({ ...value, ["mail"]: event.target.value }) }} placeholder="E-mail" />
                    <input type="text" value={value.password || ""} onChange={(event: any) => { setValue({ ...value, ["password"]: event.target.value }) }} placeholder="Пароль" />
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
