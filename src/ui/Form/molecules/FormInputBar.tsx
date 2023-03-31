import "../styles/FormInputBar.css"
export interface IFormInputBar {
  value: any
  setValue: any
  onSubmit: () => void
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
}
export const FormInputBar = (params: IFormInputBar) => {

  return (
    <div className="FormInputBar">
      <input onChange={(event: any) => { params.setValue({ ...params.value, "comments": event.target.value }) }} type="text" value={params.value.comments} placeholder="Иные комментарии" />
      <div onClick={()=>{params.onSubmit();params.setShow(!params.show)}} className="FormInputBar__Button">
        Отправить анкету
      </div>
    </div>

  );
};
