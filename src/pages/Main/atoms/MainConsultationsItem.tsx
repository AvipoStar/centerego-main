import "../styles/MainConsultationsItem.css"
export interface IMainConsultationsItem {
    title: string
}
export const MainConsultationsItem = (params: IMainConsultationsItem) => {
    return (
        <div className="MainConsultationsItem">
            <div className="MainConsultationsItem__Title">
                {params.title}
            </div>
        </div>
    );
};
