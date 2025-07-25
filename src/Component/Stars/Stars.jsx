import style from "./Stars.module.css"
export default function Stars() {
    return (
        <div className="d-flex align-items-center justify-content-center mb-3">
            <div className={`${style.line} me-3`}></div>
            <i className={`${style.star} fa-solid fa-star`}></i>
            <i className={`${style.star} fa-solid fa-star`}></i>
            <i className={`${style.star} fa-solid fa-star`}></i>
            <div className={`${style.line} ms-3`}></div>
        </div>
    )
}
