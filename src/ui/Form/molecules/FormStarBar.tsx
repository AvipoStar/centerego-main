import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Star } from "../atoms/Star";
import { StarBlack } from "../atoms/StarBlack";
import "../styles/FormStarBar.css"
import { DemandRating } from "../organoids/Form";
export interface IFormStarBar {
  value: DemandRating
  setValue: any
}
export const FormStarBar = (params:IFormStarBar) => {
  const [rating, ] = useState(0)
  const handleRating = (rate: number,id:string) => {
    params.setValue({ ...params.value, [`${id}`]: rate }) 
  }
  useEffect(() => {
    console.log("rating", rating)
  }, [rating])
  return (
    <div className="FormStarBar">
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Я легко записался (-лась) для получения консультации
        </div>
        <Rating
          onClick={(rate: number)=>handleRating(rate,"technicalDifficulties")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Время ожидания консультации от момента записи составило меньше 10 дней
        </div>
        <Rating
          onClick={(rate: number)=>handleRating(rate,"waitingTime")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Специалист подробно и понятно ответил на все мои вопросы
        </div>
        <Rating
          onClick={(rate: number)=>handleRating(rate,"answeredClearly")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          У меня не возникало технических сложностей во время консультации. А если возникало, все оперативно решалось
        </div>
        <Rating
          onClick={(rate: number)=>handleRating(rate,"signedUpEasily")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Рекомендации специалиста были для меня полезны/информативны
        </div>
        <Rating
          onClick={(rate: number)=>handleRating(rate,"recomendationsUseful")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
        />
      </div>
      <div className="FormStarBar__Item">
        <div className="FormStarBar__Item__Title">
          Я буду рекомендовать своим знакомым и друзьям получение подобных консультаций
        </div>
        <Rating
          onClick={(rate: number)=>handleRating(rate,"willRecomend")}
          fillIcon={<Star />}
          emptyIcon={<StarBlack />}
          className="FormStarBar__Item__Rating"
        />
      </div>
    </div>
  );
};
