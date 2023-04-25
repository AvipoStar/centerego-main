import { useState } from "react";
import { Demand } from "../../../pages/Main/molecules/MainForm";
import CloseIcon from '@mui/icons-material/Close';
import "../styles/FormTitle.css"
import { styled } from '@mui/material/styles';
export interface IFormAppHist 
{
    setShowLK?: React.Dispatch<React.SetStateAction<boolean>>
    showLK?: boolean
}
export const FAHTitle = (params: IFormAppHist) => {  
    return (
      <div style={{width: "100%"}}>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
        <CloseIcon 
          onClick={ () => params.setShowLK && params.setShowLK(false)} 
          style={{cursor: "pointer", color: "#5c1b5e"}}/>
      </div >
       <div className="FormTitle">
          История заявок 
        </div>
      </div>
    );
  };