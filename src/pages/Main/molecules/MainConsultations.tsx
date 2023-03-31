import { useState } from "react";
import {
  IMainConsultationsItem,
  MainConsultationsItem,
} from "../atoms/MainConsultationsItem";
import "../styles/MainConsultations.css";
export const MainConsultations = (params: { topicsRef: any }) => {
  const [MainConsultationsList, setMainConsultationsList] = useState<
    IMainConsultationsItem[]
  >([
    { title: "Возрастные и индивидуальные особенности развития ребенка" },
    { title: "Организация образовательного процесса" },
    {
      title:
        "Вопросы межличностной коммуникации и социализации у детей и подростков",
    },
    { title: "Развитие, обучение и воспитание детей с ОВЗ, с инвалидностью" },
    {
      title:
        "Вопросы принятия на воспитание в свои семьи детей, оставшихся без попечения родителей",
    },
    {
      title:
        "Вопросы правового характера, связанные с воспитанием и обучением детей",
    },
    { title: "Вопросы определения и развития способностей и мышления ребенка" },
    {
      title:
        "Вопросы компьютерной зависимости, оптимального времени взаимодействия ребенка с uаджетом и социальными сетями",
    },
    { title: "Развитие, обучение и воспитание детей и подростков" },
    {
      title:
        "Вопросы о трудностях во взаимоотношениях между родителями и детьми",
    },
    { title: "Вопросы профессионального самоопределения школьников" },
    { title: "Вопросы защиты прав участников образовательного процесса" },
  ]);

  return (
    <div className="MainConsultations" ref={params.topicsRef}>
      <div className="MainConsultations__Title">Тематика консультаций</div>
      <div className="MainConsultations__List">
        {MainConsultationsList &&
          MainConsultationsList.map((e: any) => (
            <MainConsultationsItem title={e.title} />
          ))}
      </div>
      <div className="MainConsultations__Footer">
        <div className="MainConsultations__Footer__Button">Иные вопросы</div>
      </div>
    </div>
  );
};
