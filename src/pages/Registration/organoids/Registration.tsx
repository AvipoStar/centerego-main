import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Registration.css"
import RegistrationImage from "../../../common/assets/Registration/Registration.png"
import { BigImage } from "../../../ui/BigImage/organoids/BigImage";

export const Registration = () => {
    const [value, setValue] = useState({ password: "", phone: "", mail: "" })


    const onSubmit = () => {
        console.log("value", value)
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
                    <div onClick={onSubmit} className="Registration__Data__InputBar__Button">
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
