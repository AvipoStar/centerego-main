import { useLocation } from "react-router-dom";
import { ButtonBar } from "../molecules/ButtonBar";
import { Logo } from "../molecules/Logo";
import { NavBar } from "../molecules/NavBar";
import { DropDown } from "../molecules/LKDropDown";
import { Title } from "../molecules/Title";
import "../styles/Header.css";
import { useStore } from "effector-react";
import { $DataUser } from "../../../common/axio/axiosInstance2";
import { IMain } from "../../../pages/Main/organoids/Main";
interface IHeader {
  changePosition:any
  aboutRef: any;
  servicesRef: any;
  topicsRef: any;
  contactsRef: any;
  requestRef: any;
  showLK: boolean;
  setShowLK: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (params: IHeader) => {
  let location = useLocation();
  
  const dataUser = useStore($DataUser)

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
            <NavBar changePosition={params.changePosition} 
              aboutRef={params.aboutRef} 
              servicesRef={params.servicesRef} 
              topicsRef={params.topicsRef} 
              contactsRef={params.contactsRef} 
              requestRef={params.requestRef}  
            />
            {
              dataUser?.emailOrPhone == null ? 
                <ButtonBar /> :
                <DropDown showLK = {params.showLK} setShowLK = {params.setShowLK}/>
            }
          </> 
        )
        }
      </div>
    </div>
  );
};
