import { useEffect, useState } from "react";
import { IFormAppHist } from "../organoids/FormAppHistory";
import "../styles/Table.css";
import { $axiosInstance } from "../../../common/axio/axiosInstance2";
import { DemandRating } from "../organoids/Form";
import { Rating } from 'react-simple-star-rating';
import { createEvent, createStore } from "effector";

export interface UserApplication {
  demand:
  {
    dtCreate: string;
    childAge: string,
    email: string,
    fio: string,
    id: string,
    phone: string,
    subjectName: string
  }
    rating:any
}

export const $demand = createStore<any>({})
export const setDemand = createEvent<any>()
$demand.on(setDemand, (_, val) => val)

export const FAHTable = (params: IFormAppHist) => 
{
  const [userApplications, setApplications] = useState<UserApplication[]>();

  useEffect(() =>
  {
    $axiosInstance.get<{demandsHistory:UserApplication[]}>('demands/getDemandsHistory')
    .then((res) => {setApplications(res.data.demandsHistory)})
    .catch(()=> console.log("Ошибка"))
  },[]);

  const handleClick = (Questions:UserApplication) =>
  {
    setDemand(Questions);
    params.setShow(!params.show);
    console.log(Questions);
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
                <div className="TableData__Content">{element.demand.dtCreate}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.demand.fio}</div>
              </td>
              <td >
                <div className="TableData__Content TableData__Content__Phone">{element.demand.phone}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.demand.email}</div>
              </td>
              <td >
                <div className="TableData__Content">{element.demand.subjectName}</div>
              </td>
              <td >
                <div className="TableData__Content"> 
                {
                  element.demand.childAge === "1" ?
                  <div>{element.demand.childAge} Год</div> :
                    element.demand.childAge === "2" || element.demand.childAge === "3" || element.demand.childAge === "4" ?
                    <div>{element.demand.childAge} Года</div> :
                    <div>{element.demand.childAge} Лет</div>
                }
                </div>
              </td>
              <td className="Action_Column">
                <div className="TableData__Content" onClick = { () => handleClick(element)}>
                  { 
                    element.rating.demandId.length == 0 ?
                      <div>Пройти анкету</div> : 
                      <div>Посмотреть анкету</div>
                  } 
                </div> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

