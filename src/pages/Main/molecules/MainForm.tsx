import { useEffect, useRef, useState } from "react";
import "../styles/MainForm.css";
import { $axiosInstance } from "../../../common/axio/axiosInstance2";
import { toast } from "react-toastify";
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
export const MainForm = (params: IMainForm) => {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    mail: "",
    type: "",
    old: 6,
  });
  const [percentage, setPercentage] = useState(0);
  const [requestSubject, setRequestSubject] = useState<Subject[] | any>([]);
  
  const rangeRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    setPercentage(((rangeRef.current.clientWidth - 20) / 18) * value.old);
  }, [value.old]);

  // Вывод списка запросов
  useEffect(() => 
  {
    $axiosInstance.get<{}>('demands/getDemandSubjects')
    .then((res) => setRequestSubject(res.data))
  },[]);

  const onSubmit = () => 
  {
    $axiosInstance.post<any>('',
        {
            parentFIO: "",
            phoneNumber: "",
            eMail: "",
            subjectId:""
        })
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
            requestSubject.map((e: Subject) => (
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
