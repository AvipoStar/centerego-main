import "../styles/Table.css";

export interface UserApplication {
  date: string;
  fio: string;
  phoneNumber: string;
  eMail: string;
  theme: string;
  age: number;
  action: string;
}

let UsApp: UserApplication[] = [
  {
    date: "12.03.2023",
    fio: "Кинолов Александр Николаевич",
    phoneNumber: "+7 (999) 111-22-33",
    eMail: "pochta@mail.ru",
    theme: "Вопросы профессионального самоопределения школьников",
    age: 14,
    action: "Пройти анкету",
  },
  {
    date: "12.03.2023",
    fio: "Кинолов Александр Николаевич",
    phoneNumber: "+7 (999) 111-22-33",
    eMail: "pochta@mail.ru",
    theme: "Вопросы определения и развития способностей и мышления ребенка",
    age: 6,
    action: "Посмотреть анкету",
  },
];

export const FAHTable = () => {
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
          {UsApp.map((element: UserApplication) => (
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
                <div className="TableData__Content">{element.action}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
