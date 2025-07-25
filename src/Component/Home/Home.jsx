import avatar from "../../assets/avataaars.svg"
import Stars from "../Stars/Stars"
import "./Home.css"
export default function Home() {
    return (
        <>
            <div className="home  d-flex  align-items-center py-5 mt-5">
                <div className="container d-flex flex-column justify-content-center align-items-center pt-5 mt-5 ">
                    <div className="avatar mb-5 d-flex justify-content-center align-items-center">
                        <img src={avatar} alt="avatar image" className="w-75" />
                    </div>
                    <h2 className="text-uppercase fs-1 mb-3 text-white fw-bold">
                        Start FrameWork
                    </h2>
                    <Stars />
                    <p className="text-white ">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
