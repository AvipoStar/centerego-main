import "../styles/FormStarDescription.css"
import Star from "../../../common/assets/Icons/Star.svg"

export const FormStarDescription = () => {
  return (
    <div className="FormStarDescription">
      <div className="FormStarDescription__Title">
        Просим Вас оценить каждое из приведенных ниже утверждений, отметив одну из следующих цифр, означающих:
      </div>
      <div className="FormStarDescription__List">
        <div className="FormStarDescription__List__Item">
          <div className="FormStarDescription__List__Item__ImageList">
            <img src={Star} alt="" />
          </div>
          <div className="FormStarDescription__List__Item__Title">
          Совершенно не согласен
          </div>
        </div>
        <div className="FormStarDescription__List__Item">
          <div className="FormStarDescription__List__Item__ImageList">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <div className="FormStarDescription__List__Item__Title">
          Не совсем согласен
          </div>
        </div>
        <div className="FormStarDescription__List__Item">
          <div className="FormStarDescription__List__Item__ImageList">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <div className="FormStarDescription__List__Item__Title">
          Затрудняюсь ответить
          </div>
        </div>
        <div className="FormStarDescription__List__Item">
          <div className="FormStarDescription__List__Item__ImageList">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <div className="FormStarDescription__List__Item__Title">
          Согласен, но есть замечания
          </div>
        </div>
        <div className="FormStarDescription__List__Item">
          <div className="FormStarDescription__List__Item__ImageList">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <div className="FormStarDescription__List__Item__Title">
          Да, полностью согласен
          </div>
        </div>
      </div>
      <div className="FormStarDescription__Description">
        Опрос является анонимным, указывать свое имя, Ваши личные данные не требуется. Ваше мнение очень важно для нас и будет учтено в дальнейшей работе.
      </div>
    </div>
  );
};
