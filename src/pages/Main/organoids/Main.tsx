import { Form } from "../../../ui/Form/organoids/Form";
import { MainAbout } from "../molecules/MainAbout";
import { MainConsultations } from "../molecules/MainConsultations";
import { MainForm } from "../molecules/MainForm";
import { MainHeader } from "../molecules/MainHeader";
import { MainService } from "../molecules/MainService";
import { FormAppHist } from "../../../ui/Form/organoids/FormAppHistory";
import "../styles/Main.css";
import { useEffect } from "react";
export interface IMain {
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

  useEffect( ()=>
  {
    console.log(params.show)
  },[params.show])
  return (
    <div className="Main">
      <MainHeader />
      <MainAbout aboutRef={params.aboutRef} />
      <MainService servicesRef={params.servicesRef} />
      <MainConsultations topicsRef={params.topicsRef} />
      <MainForm
        setShow={params.setShow}
        show={params.show}
        requestRef={params.requestRef}
        showLK = {params.showLK}
        setShowLK = {params.setShowLK}
      />

      {params.show && <Form setShow={params.setShow} show={params.show} />}
      {params.showLK && <FormAppHist setShow={params.setShowLK} show={params.showLK} />}
    </div>
  );
};
