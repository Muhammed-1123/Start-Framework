import style from "./imgCard.module.css"
export default function ImgCard({index, image , onClick}) {

    return (
        <>
            <div className="col" onClick={onClick}>
                <div className="position-relative overflow-hidden rounded-3" >
                    <img key={index} src={image} className="w-100" alt="House Image" />
                    <div className={` ${style.layer} position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center`}>
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
