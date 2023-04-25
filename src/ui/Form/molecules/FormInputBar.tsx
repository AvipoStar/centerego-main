import { useState } from "react"
import "../styles/FormInputBar.css"
import { $axiosInstance } from "../../../common/axio/axiosInstance2"
import { toast } from "react-toastify"
import { $demand } from "./FAHTable";
import { useStore } from "effector-react";
import { DemandRating } from "../organoids/Form";
import { Demand } from '../../../pages/Main/molecules/MainForm';

export interface IFormInputBar {
  value: DemandRating
  setValue: any
  onClick: any
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
}

export const FormInputBar = (params: IFormInputBar) => {

  const localDemand = useStore($demand);

  const SetOnClick = () => 
  {
    if(params.value.answeredClearly == 0 || 
      params.value.recomendationsUseful == 0 ||
      params.value.signedUpEasily == 0 ||
      params.value.technicalDifficulties == 0 ||
      params.value.waitingTime == 0 ||
      params.value.willRecomend == 0)
    {
      toast.error("Заполните все поля!")
    }
    else 
    {
      params.onClick({ ...params.value, "demandId": localDemand.demand.id}); 
      params.setShow(!params.show); 
    }
  }

  return (
    <div className="FormInputBar">
      <input onChange={(event: any) => 
        {
           params.setValue({ ...params.value, "comment": event.target.value }) 
        }} 
        type="text" 
        value={params.value.comment} 
        placeholder="Иные комментарии" 
        readOnly={$demand.getState().rating.demandId.length == 0 ? false : true}/>
        { 
          localDemand && localDemand.rating.demandId.length == 0 &&
            <div className="FormInputBar__Button"
              onClick={SetOnClick}
            >
              Отправить анкету
            </div>
        } 
        
    </div>

  );
};
