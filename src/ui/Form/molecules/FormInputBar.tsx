import { useState } from "react"
import "../styles/FormInputBar.css"
import { $axiosInstance } from "../../../common/axio/axiosInstance2"
import { toast } from "react-toastify"
import { $demand } from "./FAHTable";
import { useStore } from "effector-react";
import { DemandRating } from "../organoids/Form";

export interface IFormInputBar {
  value: DemandRating
  setValue: any
  onClick: any
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
}

export const FormInputBar = (params: IFormInputBar) => {

  const localDemand = useStore($demand);

  return (
    <div className="FormInputBar">
      <input onChange={(event: any) => 
        {
           params.setValue({ ...params.value, "comment": event.target.value }) 
        }} 
        type="text" 
        value={params.value.comment} 
        placeholder="Иные комментарии" />
        { 
          localDemand && localDemand.rating.demandId.length == 0 &&
            <div className="FormInputBar__Button"
              onClick={ () => 
                {
                  console.log("localDemand")
                  console.log(localDemand)
                  params.onClick({ ...params.value, "demandId": localDemand.demand.id}); 
                  params.setShow(!params.show); 
                  //params.setValue({ ...params.value, "demandId": localDemand.demand.id})
                  
                }}
            >
              Отправить анкету
            </div>
        } 
        
    </div>

  );
};
