import { useEffect, useRef, useState } from "react";
import "../styles/MainForm.css";
import {  $accessToken, $axiosInstance} from "../../../common/axio/axiosInstance2";
import { toast } from "react-toastify";
import axios from "axios";
export interface IMainForm {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  requestRef: any;
}
export interface Subject {
  id: string;
  name: string;
  position: string;
}
export interface Demand
{
  childAge: number | string,
  email: string,
  fio: string,
  phone: string,
  querySubjectId: string
}

export const MainForm = (params: IMainForm) => {
  const [value, setValue] = useState<Demand>({
    fio: "",
    phone: "",
    email: "",
    querySubjectId: "",
    childAge: "6",
  });
  const [percentage, setPercentage] = useState(0);
  const [requestSubject, setRequestSubject] = useState<Subject[] | any>([]);

  const rangeRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    setPercentage(((rangeRef.current.clientWidth - 20) / 18) * Number(value.childAge));
    //@ts-ignore
    console.log(`((${rangeRef.current.clientWidth} - 20) / 18) * ${Number(value.childAge)} = ${((rangeRef.current.clientWidth - 20) / 18) * Number(value.childAge)}`);
  }, [value?.childAge]);

  // Вывод списка запросов
  useEffect(() =>
  {
    $axiosInstance.get<{demandSubjects:any}>('demands/getDemandSubjects')
    .then((res) => setRequestSubject(res.data.demandSubjects))
  },[]);

  const onSubmit = () => {
    console.log(value)
    $axiosInstance.post<Demand>('demands/setDemand', value)
        .then((res) =>
        {
          toast.done("Заявка отправлена")
        })
        .catch((err) => toast.error("Заявка не отправлена"))
    console.log("value", value);

  };

  return (
    <div className="MainForm" ref={params.requestRef}>
      <div className="MainForm__InputBar">
        <div className="MainForm__Title">Подать заявку на консультацию</div>
        <input
          type="text"
          value={value.fio || ""}
          onChange={(event: any) => {
            setValue({ ...value, ["fio"]: event.target.value });
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
          value={value.email || ""}
          onChange={(event: any) => {
            setValue({ ...value, ["email"]: event.target.value });
          }}
          placeholder="E-mail"
        />
        <select
          className={
            value.querySubjectId == ""
              ? "MainForm__InputBar__Select__Place MainForm__InputBar__Select"
              : "MainForm__InputBar__Select"
          }
          value={value.querySubjectId || ""}
          onChange={(event: any) => {
            setValue({ ...value, ["querySubjectId"]: event.target.value });
          }}
        >
          <option value="" disabled selected>
            Проблематика, тема запроса
          </option>
          {requestSubject &&
            requestSubject.map((e: Subject) => (
              <option
                className="MainForm__InputBar__Option"
                value={e.id}
              >
                {e.name}
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
              value={value.childAge}
              onChange={(event: any) => {
                setValue({ ...value, ["childAge"]: event.target.value + "" });
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
                {value.childAge}
              </div>
            </div>
            <div className="MainForm__Range__Band">
              <div className="MainForm__Range__Band__Num">0</div>
              <div className="MainForm__Range__Band__Num">18</div>
            </div>
          </div>
        </div>
        <div
          className="MainForm__Button" 
          onClick={() => {
            onSubmit();
          }}
        >
          Отправить заявку
        </div>
      </div>
    </div>
  );
};
