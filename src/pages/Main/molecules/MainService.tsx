import { IMainServiceItem, MainServiceItem } from "../atoms/MainServiceItem";
import "../styles/MainService.css"
import MainServiceItem_1 from "../../../common/assets/Main/MainServiceItem_1.png"
import MainServiceItem_2 from "../../../common/assets/Main/MainServiceItem_2.png"
import MainServiceItem_3 from "../../../common/assets/Main/MainServiceItem_3.png"
import MainServiceItem_4 from "../../../common/assets/Main/MainServiceItem_4.png"
import { useState } from "react";

export const MainService = (params:{servicesRef:any}) => {

  const [MainServiceList, setMainServiceList] = useState<IMainServiceItem[]>([
    { title: "Очная консультация", img: MainServiceItem_1 },
    { title: "Дистанционная консультация", img: MainServiceItem_2 },
    { title: "Обучающее мероприятие", img: MainServiceItem_3 },
    { title: "Вебинар", img: MainServiceItem_4 }
  ])


  return (
    <div className="MainService" ref={params.servicesRef}>
      <div className="MainService__Title">
        Формат оказания услуг
      </div>
      <div className="MainService__List">
        {MainServiceList && MainServiceList.map((e: any) =>
          <MainServiceItem title={e.title} img={e.img} />
        )}
      </div>
    </div>
  );
};
