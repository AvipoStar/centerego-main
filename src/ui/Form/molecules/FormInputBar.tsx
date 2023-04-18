import { useState } from "react"
import "../styles/FormInputBar.css"
import { $axiosInstance } from "../../../common/axio/axiosInstance2"
import { toast } from "react-toastify"
export interface IFormInputBar {
  value: any
  setValue: any
  onClick: () => void
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
}

export const FormInputBar = (params: IFormInputBar) => {

  return (
    <div className="FormInputBar">
      <input onChange={(event: any) => 
        {
           params.setValue({ ...params.value, "comments": event.target.value }) 
        }} 
        type="text" 
        value={params.value.comment} 
        placeholder="Иные комментарии" />
      <div className="FormInputBar__Button"
        onClick={()=> { params.onClick(); params.setShow(!params.show)}}
      >
        Отправить анкету
      </div>
    </div>

  );
};
