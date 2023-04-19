import { Form } from "../../../ui/Form/organoids/Form";
import { MainAbout } from "../molecules/MainAbout";
import { MainConsultations } from "../molecules/MainConsultations";
import { MainForm } from "../molecules/MainForm";
import { MainHeader } from "../molecules/MainHeader";
import { MainService } from "../molecules/MainService";
import { FormAppHist } from "../../../ui/Form/organoids/FormAppHistory";
import "../styles/Main.css";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { $DataUser } from "../../../common/axio/axiosInstance2";
export interface IMain 
{
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLK: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  showLK:boolean;
  aboutRef: any;
  servicesRef: any;
  topicsRef: any;
  contactsRef: any;
  requestRef: any;
}

export const Main = (params: IMain) => {

  const onSubmit = () =>
  {
    
  }
  const dataUser = useStore($DataUser)

  useEffect( ()=>
  {
    if(params.showLK) document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    else document.getElementsByTagName("body")[0].style.overflow = 'scroll';
  },)

  return (
    <div className="Main">
      <MainHeader />
      <MainAbout aboutRef={params.aboutRef} />
      <MainService servicesRef={params.servicesRef} />
      <MainConsultations topicsRef={params.topicsRef} />
      { 
        dataUser?.emailOrPhone != null ? 
          <MainForm
            setShow={params.setShow}
            show={params.show}
            requestRef={params.requestRef}
          /> :
          <div className="Bottom_Button" ref={params.requestRef}>
            <div className="MainForm__Button">
              <a href={"/Registration"} className="HeaderButtonBar__Item">Отправить заявку</a>
            </div>
          </div>
      }

      {params.show && <Form setShow={params.setShow} show={params.show} />}
      {params.showLK && <FormAppHist setShowLK={params.setShowLK} showLK={params.showLK} setShow={params.setShow} show={params.show}/>}
    </div>
  );
};
//