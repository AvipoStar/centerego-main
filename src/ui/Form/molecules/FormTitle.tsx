import "../styles/FormTitle.css"
import CloseIcon from '@mui/icons-material/Close';

export interface IFormAppHist 
{
    setShow?: React.Dispatch<React.SetStateAction<boolean>>
    show?: boolean
}
export const FormTitle = (params: IFormAppHist) => {
    return (
      <div style={{width: "100%"}}>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
        <CloseIcon 
          onClick={ () => params.setShow && params.setShow(false)} 
          style={{cursor: "pointer", color: "#5c1b5e"}}
          sx={{ fontSize: 40 }}/>
          </div>
        <div className="FormTitle">
        Анкета субъективной оценки эффективности деятельности исполнителя услуги
        </div>
      </div>
    );
  };
  