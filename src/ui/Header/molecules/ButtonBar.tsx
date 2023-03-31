import "../styles/ButtonBar.css"
export const ButtonBar = () => {


    return (
        <div className="HeaderButtonBar">
            <a href={"/Login"} className="HeaderButtonBar__Item">
                Вход
            </a>
            <a href={"/Registration"} className="HeaderButtonBar__Item">
                Регистрация
            </a>
        </div>
    );
};
