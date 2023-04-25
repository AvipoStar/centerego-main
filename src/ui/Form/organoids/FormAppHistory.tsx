import { FAHTitle } from "../molecules/FAHTitle";
import { FAHTable } from "../molecules/FAHTable";
import "../styles/FormAppHist.css";

export interface IFormAppHist 
{
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setShowLK?: React.Dispatch<React.SetStateAction<boolean>>
    showLK?: boolean
}
export const FormAppHist = (params: IFormAppHist) => 
{
    return(
        <div className="Form_Hist_Main">
            <div className="Form__Absolute__Background_Hist" onClick={ () => params.setShowLK && params.setShowLK(false)}></div>
            <div className="Form__Absolute_Hist">
                <div className="Form_Hist">
                    <FAHTitle setShowLK={params.setShowLK} showLK={params.showLK} />
                    <FAHTable show = {params.show} setShow={params.setShow}/>
                </div>
            </div>
        </div>
    )

}

