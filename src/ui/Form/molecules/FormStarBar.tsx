import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Star } from "../atoms/Star";
import { StarBlack } from "../atoms/StarBlack";
import "../styles/FormStarBar.css"
import { DemandRating } from "../organoids/Form";
import { $demand } from "./FAHTable";
export interface IFormStarBar {
  value: DemandRating
  setValue: any
}
export const FormStarBar = (params:IFormStarBar) => {
  const [rating, ] = useState(0)

  const handleRating = (rate: number,id:string) => {
    params.setValue({ ...params.value, [`${id}`]: rate }) 
  }

  return (
    <div className="FormStarBar">
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Я легко записался (-лась) для получения консультации
        </div>
        <Rating
          initialValue = {$demand.getState().rating.technicalDifficulties}
          onClick={(rate: number)=>handleRating(rate,"technicalDifficulties")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
          readonly= {$demand.getState().rating.technicalDifficulties === 0 ? false: true}
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Время ожидания консультации от момента записи составило меньше 10 дней
        </div>
        <Rating
          initialValue = {$demand.getState().rating.waitingTime}
          onClick={(rate: number)=>handleRating(rate,"waitingTime")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
          readonly= {$demand.getState().rating.waitingTime === 0 ? false: true}
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Специалист подробно и понятно ответил на все мои вопросы
        </div>
        <Rating
          initialValue = {$demand.getState().rating.answeredClearly}
          onClick={(rate: number)=>handleRating(rate,"answeredClearly")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
          readonly= {$demand.getState().rating.answeredClearly === 0 ? false: true}
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          У меня не возникало технических сложностей во время консультации. А если возникало, все оперативно решалось
        </div>
        <Rating
          initialValue = {$demand.getState().rating.signedUpEasily}
          onClick={(rate: number)=>handleRating(rate,"signedUpEasily")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
          readonly= {$demand.getState().rating.signedUpEasily === 0 ? false: true}
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Рекомендации специалиста были для меня полезны/информативны
        </div>
        <Rating
          initialValue = {$demand.getState().rating.recomendationsUseful}
          onClick={(rate: number)=>handleRating(rate,"recomendationsUseful")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
          readonly= {$demand.getState().rating.recomendationsUseful === 0 ? false: true}
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Я буду рекомендовать своим знакомым и друзьям получение подобных консультаций
        </div>
        <Rating          
          initialValue = {$demand.getState().rating.willRecomend}
          onClick={(rate: number)=>handleRating(rate,"willRecomend")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
          readonly= {$demand.getState().rating.willRecomend === 0 ? false: true}
        />
      </div>
    </div>
  );
};
