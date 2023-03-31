import "../styles/FooterContact.css"

export const FooterContact = () => {


    return (
        <div className="FooterContact">
            <div className="FooterContact__Block">
                <div className="FooterContact__Block__Title">
                Телефон оператора
                </div>
                <div className="FooterContact__Block__Value">
                +7(950)-981-54-81
                </div>
            </div>
            <div className="FooterContact__Block">
                <div className="FooterContact__Block__Title">
                E-mail
                </div>
                <div className="FooterContact__Block__Value">
                konsyltaciyapsihologa24@mail.ru
                </div>
            </div>
            <div className="FooterContact__Block">
                <div className="FooterContact__Block__Title">
                Адрес центра
                </div>
                <div className="FooterContact__Block__Value">
                г. Красноярск, Свердловский район, ул. 60 лет Октября, 13 «А»
                </div>
            </div>
        </div>
    );
};
