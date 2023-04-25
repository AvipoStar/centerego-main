import { useState } from "react";
import { FormDescription } from "../molecules/FormDescription";
import { FormGratitude } from "../molecules/FormGratitude";
import { FormInputBar } from "../molecules/FormInputBar";
import { FormStarBar } from "../molecules/FormStarBar";
import { FormStarDescription } from "../molecules/FormStarDescription";
import { FormTitle } from "../molecules/FormTitle";
import "../styles/Form.css"
import { $axiosInstance } from "../../../common/axio/axiosInstance2";
import { toast } from "react-toastify";

export interface IForm {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
}
export interface DemandRating
{
  answeredClearly: number,
  comment: string,
  demandId: string,
  recomendationsUseful: number,
  signedUpEasily: number,
  technicalDifficulties: number,
  waitingTime: number,
  willRecomend: number
}

export const Form = (params: IForm) => {

  const [value, setValue] = useState<DemandRating>({
    comment: "",
    technicalDifficulties: 0,
    waitingTime: 0,
    answeredClearly: 0,
    signedUpEasily: 0,
    recomendationsUseful: 0,
    willRecomend: 0,
    demandId: ""
  })
  
  const onClick = (foremtedValue:DemandRating) => {
    
      $axiosInstance.post<DemandRating>('demands/setDemandRating', foremtedValue)
          .then((res) =>
          {
            toast.done("Заявка отправлена")
          })
          .catch((err) => toast.error("Заявка не отправлена"))
  }

  return (
    <div className="Form__Rating">
      <div className="Form__Absolute__Background" onClick={ () => params.setShow(false)}></div>
      <div className="Form__Absolute" >
        <div className="Form">
          <FormTitle setShow={params.setShow} show={params.show}/>
          <FormDescription />
          <FormStarDescription />
          <FormStarBar value={value} setValue={setValue} />
          <FormInputBar onClick={onClick} value={value} setValue={setValue} setShow={params.setShow} show={params.show}/>
          <FormGratitude />
        </div>
      </div>
    </div>


  );
};
