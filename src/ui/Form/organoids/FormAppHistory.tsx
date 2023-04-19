import { useState, useEffect } from 'react';
import { FAHTitle } from "../molecules/FAHTitle";
import { FAHTable } from "../molecules/FAHTable";
import "../styles/FormAppHist.css";
import { Demand } from "../../../pages/Main/molecules/MainForm";

export interface IForm 
{
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setShowLK: React.Dispatch<React.SetStateAction<boolean>>
    showLK: boolean
}

export const FormAppHist = (params: IForm) => 
{
    return(
        <div className="Form_Hist_Main">
            <div className="Form__Absolute__Background_Hist" onClick={ () => params.setShowLK(false)}></div>
            <div className="Form__Absolute_Hist">
                <div className="Form_Hist">
                    <FAHTitle/>
                    <FAHTable show = {params.show} setShow={params.setShow}/>
                </div>
            </div>
        </div>
    )

}

