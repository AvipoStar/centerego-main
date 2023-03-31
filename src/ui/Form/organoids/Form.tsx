import { useState } from "react";
import { FormDescription } from "../molecules/FormDescription";
import { FormGratitude } from "../molecules/FormGratitude";
import { FormInputBar } from "../molecules/FormInputBar";
import { FormStarBar } from "../molecules/FormStarBar";
import { FormStarDescription } from "../molecules/FormStarDescription";
import { FormTitle } from "../molecules/FormTitle";
import "../styles/Form.css"
export interface IForm {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
}
export const Form = (params: IForm) => {
  const [value, setValue] = useState({
    comments: "",
    star1: "",
    star2: "",
    star3: "",
    star4: "",
    star5: "",
    star6: "",
  })
  const onSubmit = () => {
    console.log("value", value)
  }
  return (
    <>
      <div className="Form__Absolute__Background"></div>
      <div className="Form__Absolute">
        <div className="Form">
          <FormTitle />
          <FormDescription />
          <FormStarDescription />
          <FormStarBar value={value} setValue={setValue} />
          <FormInputBar onSubmit={onSubmit} value={value} setValue={setValue} setShow={params.setShow} show={params.show} />
          <FormGratitude />
        </div>
      </div>
    </>


  );
};
