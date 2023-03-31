import "../styles/MainServiceItem.css"
export interface IMainServiceItem {
    title: string
    img: string
}
export const MainServiceItem = (params: IMainServiceItem) => {
    return (
        <div className="MainServiceItem">
            <img src={params.img} className="MainServiceItem__Image" alt="" />
            <div className="MainServiceItem__Title">
                {params.title}
            </div>
        </div>
    );
};
