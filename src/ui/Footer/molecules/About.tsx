import "../styles/FooterAbout.css"
import Vk from "../../../common/assets/Icons/Vk.svg"
import Tg from "../../../common/assets/Icons/Tg.svg"

export const FooterAbout = () => {


    return (
        <div className="FooterAbout">
            <div className="FooterAbout__Full">
                Муниципальное автономное учреждение “Центр психолого-педагогической, медицинской и социальной помощи “Эго”
                Телефон оператора
                +7(950)-981-54-81
            </div>
            <a target=" _blank" href={"https://centerego.ru/"} className="FooterAbout__Website">
                https://centerego.ru/
            </a>
            <div className="FooterAbout__LinkTitle">
                Мы в социальных сетях
            </div>
            <div className="FooterAbout__LinkList">
                <a target=" _blank" href="https://t.me/+jxfmLEsV7Yw4MTdi">
                    <img src={Tg} alt="Tg" />
                </a>
                <a target=" _blank" href="https://vk.com/maucppmicp">
                    <img src={Vk} alt="In" />
                </a>
            </div>
        </div>
    );
};
