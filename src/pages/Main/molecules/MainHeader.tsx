import "../styles/MainHeader.css"
import MainHead from '../../../common/assets/Main/MainHead.png'
import { useWindowWidth } from '@react-hook/window-size'

export const MainHeader = () => {
  const onlyWidth = useWindowWidth()

  return (
    <div className="MainHeader">
      <div style={{ width: `${onlyWidth}px` }} className="MainHeader__Background"></div>
      <div className="MainHeader__Info">
        <div className="MainHeader__Info__Title">
          Бесплатные консультации для родителей
        </div>
        <div className="MainHeader__Info__Description">
          Федеральный проект «Современная школа» национального проекта «Образование» государственной программы Российской Федерации «Развитие образования».
        </div>
      </div>
      <img src={MainHead} className="MainHeader__Image">
      </img>
    </div>
  );
};
