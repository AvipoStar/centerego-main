import { useEffect, useState } from "react";
import { IForm } from "../organoids/Form";
import "../styles/Table.css";
import { $axiosInstance } from "../../../common/axio/axiosInstance2";

export interface UserApplication {
  date: string;
  fio: string;
  phoneNumber: string;
  eMail: string;
  theme: string;
  age: number;
  action: string;
  idAction: string;
}

export const FAHTable = (params: IForm) => 
{
  const [userApplications, setApplications] = useState<UserApplication[] | any>([]);
  useEffect(() => 
  {
    $axiosInstance.get<UserApplication>('demands/getDemandSubjects').then((res) => setApplications(res.data))
  },[]);

  const handleClick = (action:string) =>
  {
    action === "Go" ? params.setShow(!params.show) : params.setShow(!params.show);
  }

  return (
    <>
      <table className="TableData">
        <thead className="TableHead">
          <tr>
            <th className="LeftHeader">Дата</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>E-Mail</th>
            <th>Тема запроса</th>
            <th>Возраст</th>
            <th className="RightHeader">Действие</th>
          </tr>
        </thead>

        <tbody>
          {userApplications.map((element: UserApplication) => (
            <tr>
              <td >
                <div className="TableData__Content">{element.date}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.fio}</div>
              </td>
              <td >
                <div className="TableData__Content TableData__Content__Phone">{element.phoneNumber}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.eMail}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.theme}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.age} Лет</div>
              </td>
              <td className="Action_Column">
                <div className="TableData__Content" onClick = { () => handleClick(element.idAction)}>
                  {element.action} 
                </div> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
