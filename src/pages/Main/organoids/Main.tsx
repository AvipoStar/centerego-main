import { Form } from "../../../ui/Form/organoids/Form";
import { MainAbout } from "../molecules/MainAbout";
import { MainConsultations } from "../molecules/MainConsultations";
import { MainForm } from "../molecules/MainForm";
import { MainHeader } from "../molecules/MainHeader";
import { MainService } from "../molecules/MainService";
import "../styles/Main.css";
export interface IMain {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  aboutRef: any;
  servicesRef: any;
  topicsRef: any;
  contactsRef: any;
  requestRef: any;
}
export const Main = (params: IMain) => {
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
      />
      {params.show && <Form setShow={params.setShow} show={params.show} />}
    </div>
  );
};
