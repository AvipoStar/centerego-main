import "../styles/NavBar.css";
interface INavBar {
  changePosition:any
  aboutRef: any;
  servicesRef: any;
  topicsRef: any;
  contactsRef: any;
  requestRef: any;
}
export const NavBar = (params: INavBar) => {
  return (
    <div className="HeaderNavBar">
      <div
        className="HeaderNavBar__Item"
        onClick={() => params.changePosition(params.aboutRef)}
      >
        О проекте
      </div>
      <div
        className="HeaderNavBar__Item"
        onClick={() => params.changePosition(params.servicesRef)}
      >
        Формат оказания услуг
      </div>
      <div
        className="HeaderNavBar__Item"
        onClick={() => params.changePosition(params.topicsRef)}
      >
        Тематика консультаций
      </div>
      <div
        className="HeaderNavBar__Item"
        onClick={() => params.changePosition(params.contactsRef)}
      >
        Контакты
      </div>
      <div
        className="HeaderNavBar__Item"
        onClick={() => params.changePosition(params.requestRef)}
      >
        Подать заявку
      </div>
    </div>
  );
};
