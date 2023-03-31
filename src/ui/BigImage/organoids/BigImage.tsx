import "../styles/BigImage.css"
import Image from "../../../common/assets/Registration/Registration.png"

export const BigImage = () => {
    return (
        <div className="BigImage">
            <img src={Image} alt="Image" />
        </div>
    );
}