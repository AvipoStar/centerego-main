import { useEffect, useRef, useState } from "react";
import "../styles/MainForm.css";
import { $accessToken, $axiosInstance } from "../../../common/axio/axiosInstance2";
import { toast } from "react-toastify";
import axios from "axios";
export interface IMainForm {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  requestRef: any;
}
export interface Subject
{
  id:string;
  name:string;
  position:string;
}
export interface Demand
{
  _: string,
  childAge: 0,
  email: string,
  fio: string,
  phone: string,
  subjectId: string
}
export const MainForm = (params: IMainForm) => {
  const [demand, setdemand] = useState<Demand | any>();
  const [percentage, setPercentage] = useState(0);
  const [requestSubject, setRequestSubject] = useState<Subject[] | any>([]);
  
  const rangeRef = useRef(null);

  useEffect(() => 
  {
    //@ts-ignore
    setPercentage(((rangeRef.current.clientWidth - 20) / 18) * demand.childAge);
  }, [demand?.childAge]);

  // // Вывод списка запросов
  // useEffect(() => 
  // {
  //   $axiosInstance.get<{requestSubject:any}>('demands/getDemandSubjects')
  //   .then((res) => setRequestSubject(res.data))

  // },[]);

  useEffect(() => {
    axios.get('https://test.gkh-info.org/api/ego/demands/getDemandSubjects',{
      headers:{"Authorization":  `Bearer ${$accessToken.getState()}`}})
      .then((res) => setRequestSubject(res.data));
  }, []);

  const onSubmit = () => {
    $axiosInstance.post<Demand>('demands/setDemand',
        {
          childAge: demand?.childAge,
          email: demand?.email,
          fio: demand?.fio,
          phone: demand?.phone,
          subjectId: demand?.subjectId 
        })
        .then((res) => 
        {
          toast.done("Заявка отправлена")
        })
        .catch((err) => toast.error("Заявка не отправлена"))
    console.log("value", demand);
  };

  return (
    <div className="MainForm" ref={params.requestRef}>
      <div className="MainForm__InputBar">
        <div className="MainForm__Title">Подать заявку на консультацию</div>
        <input
          type="text"
          value={demand?.fio || ""}
          onChange={(event: any) => { setdemand({ ...demand, ["fio"]: event.target.value })}}
          placeholder="ФИО родителя"
        />
        <input
          type="text"
          value={demand.phone || ""}
          onChange={(event: any) => {
            setdemand({ ...demand, ["phone"]: event.target.value });
          }}
          placeholder="Номер телефона"
        />
        <input
          type="text"
          value={demand?.email || ""}
          onChange={(event: any) => {
            setdemand({ ...demand, ["email"]: event.target.value });
          }}
          placeholder="E-mail"
        />
        <select
          className={
            demand?.subjectId == ""
              ? "MainForm__InputBar__Select__Place MainForm__InputBar__Select"
              : "MainForm__InputBar__Select"
          }
          value={demand?.subjectId || ""}
          onChange={(event: any) => {
            setdemand({ ...demand, ["type"]: event.target.value });
          }}
        >
          <option value="" disabled selected>
            Проблематика, тема запроса
          </option>
          {requestSubject && requestSubject.map((e: Subject) => (
              <option className="MainForm__InputBar__Option" value={e.id} 
              // onChange=(setValue())
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
              value={demand?.childAge}
              onChange={(event: any) => {
                setdemand({ ...demand, ["childAge"]: Number(event.target.value) });
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
                {demand?.childAge}
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
          }}>
          Отправить заявку
        </div>
        
      </div>
    </div>
  );
};
