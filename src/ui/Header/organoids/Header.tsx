import { useLocation } from "react-router-dom";
import { ButtonBar } from "../molecules/ButtonBar";
import { Logo } from "../molecules/Logo";
import { NavBar } from "../molecules/NavBar";
import { Title } from "../molecules/Title";
import "../styles/Header.css";
interface IHeader {
  changePosition:any
  aboutRef: any;
  servicesRef: any;
  topicsRef: any;
  contactsRef: any;
  requestRef: any;
}
const isAuth:boolean = false;

export const Header = (params: IHeader) => {
  let location = useLocation();

  return (
    <div className="Header">
      <div className="Header__Actual">
        <Logo />
        {location.pathname == "/Registration" || location.pathname == "/Login" ? 
        (
          <>
            <Title />
          </>
        ) : 
        ( 
          <>
            <NavBar changePosition={params.changePosition} aboutRef={params.aboutRef} servicesRef={params.servicesRef} topicsRef={params.topicsRef} contactsRef={params.contactsRef} requestRef={params.requestRef}  />
            <ButtonBar />
            
          </> 
        )
        }
      </div>
    </div>
  );
};
