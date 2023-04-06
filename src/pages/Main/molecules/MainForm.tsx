import { useEffect, useRef, useState } from "react";
import "../styles/MainForm.css";
export interface IMainForm {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  requestRef: any;
}
export const MainForm = (params: IMainForm) => {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    mail: "",
    type: "",
    old: 6,
  });
  const [percentage, setPercentage] = useState(0);
  const [requestSubject, setRequestSubject] = useState([
    { title: "Психолог", type: 0 },
    { title: "Психолог", type: 1 },
    { title: "Психолог", type: 2 },
    { title: "Психолог", type: 3 },
  ]);
  const rangeRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    setPercentage(((rangeRef.current.clientWidth - 20) / 18) * value.old);
  }, [value.old]);

  const onSubmit = () => {
    console.log("value", value);
  };
  return (
    <div className="MainForm" ref={params.requestRef}>
      <div className="MainForm__InputBar">
        <div className="MainForm__Title">Подать заявку на консультацию</div>
        <input
          type="text"
          value={value.name || ""}
          onChange={(event: any) => {
            setValue({ ...value, ["name"]: event.target.value });
          }}
          placeholder="ФИО родителя"
        />
        <input
          type="text"
          value={value.phone || ""}
          onChange={(event: any) => {
            setValue({ ...value, ["phone"]: event.target.value });
          }}
          placeholder="Номер телефона"
        />
        <input
          type="text"
          value={value.mail || ""}
          onChange={(event: any) => {
            setValue({ ...value, ["mail"]: event.target.value });
          }}
          placeholder="E-mail"
        />
        <select
          className={
            value.type == ""
              ? "MainForm__InputBar__Select__Place MainForm__InputBar__Select"
              : "MainForm__InputBar__Select"
          }
          value={value.type || ""}
          onChange={(event: any) => {
            setValue({ ...value, ["type"]: event.target.value });
          }}
        >
          <option value="" disabled selected>
            Проблематика, тема запроса
          </option>
          {requestSubject &&
            requestSubject.map((e: any) => (
              <option className="MainForm__InputBar__Option" value={e.type}>
                {e.title}
              </option>
            ))}
        </select>
        <div className="MainForm__Range">
          <div className="MainForm__Range__Title">Возраст ребенка</div>
          <div>
            <input
              ref={rangeRef}
              type="range"
              min={0}
              max={18}
              step={1}
              value={value.old}
              onChange={(event: any) => {
                setValue({ ...value, ["old"]: Number(event.target.value) });
              }}
            />
            <div
              style={{
                width: "100%",
                height: "2px",
                position: "relative",
              }}
            >
              <div
                className="MainForm__Range__Num"
                style={{
                  left: `${percentage}px`,
                }}
              >
                {value.old}
              </div>
            </div>
            <div className="MainForm__Range__Band">
              <div className="MainForm__Range__Band__Num">0</div>
              <div className="MainForm__Range__Band__Num">18</div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            onSubmit();
            params.setShow(!params.show);
          }}
          className="MainForm__Button"
        >
          Отправить заявку
        </div>
      </div>
    </div>
  );
};
