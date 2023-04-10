import { useState } from "react";
import { FAHTitle } from "../molecules/FAHTitle";
import { FAHTable } from "../molecules/FAHTable";
import "../styles/FormAppHist.css";

export interface IForm {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean
  }

export const FormAppHist = (params: IForm) => 
{
    return(
        <>
            <div className="Form__Absolute__Background_Hist"></div>
            <div className="Form__Absolute_Hist">
                <div className="Form_Hist">
                    <FAHTitle/>
                    <FAHTable/>
                </div>
            </div>
        </>
    )

}

