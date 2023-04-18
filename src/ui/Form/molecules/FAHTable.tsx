import { useEffect, useState } from "react";
import { IForm } from "../organoids/Form";
import "../styles/Table.css";
import { $axiosInstance } from "../../../common/axio/axiosInstance2";

export interface UserApplication {
  date: string;
  actionId: string;

  childAge: string,
  email: string,
  fio: string,
  id: string,
  phone: string,
  querySubjectId: string
}

export const FAHTable = (params: IForm) => 
{
  const [userApplications, setApplications] = useState<UserApplication[] >();

  useEffect(() =>
  {
    $axiosInstance.get<{demandsHistory:any}>('demands/getDemandsHistory')
    .then((res) => {setApplications(res.data.demandsHistory)})
  },[]);
  
  useEffect(() =>
  {userApplications &&
    userApplications.map( (element: UserApplication) => 
    {
      element.actionId = "Go"
    });
  },[userApplications]);

  const handleClick = (_actionId:string) =>
  {
    _actionId === "Go" ? params.setShow(!params.show) : params.setShow(!params.show);
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
          {userApplications && // проверка на undefined
          userApplications.map((element: UserApplication) => (
            <tr>
              <td >
                <div className="TableData__Content">{element.date}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.fio}</div>
              </td>
              <td >
                <div className="TableData__Content TableData__Content__Phone">{element.phone}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.email}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.querySubjectId}</div>
              </td>
              <td >
                <div className="TableData__Content"> 
                {
                  element.childAge === "1" ?
                  <div>{element.childAge} Год</div> :
                    element.childAge === "2" || element.childAge === "3" || element.childAge === "4" ?
                    <div>{element.childAge} Года</div> :
                    <div>{element.childAge} Лет</div>
                }
                </div>
              </td>
              <td className="Action_Column">
                <div className="TableData__Content" onClick = { () => handleClick(element.actionId)}>
                  {element.actionId == "Go"?
                   <div>Пройти анкету</div> : 
                   <div>Посмотреть анкету</div>} 
                </div> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
