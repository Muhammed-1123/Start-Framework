import Stars from "../Stars/Stars"
import style from "./About.module.css"
export default function About() {
    return (
        <>
            <div className={`${style.about}  d-flex align-items-center p-5 mt-5`}>
                <div className="container p-5 ">
                    <div className="py-5 my-5 d-flex flex-column justify-content-center align-items-center ">
                        <h2 className='text-uppercase fs-1 mb-3 text-white fw-bold'>
                            About Component
                        </h2>
                        <Stars />
                        <div className="row row-cols-1 row-cols-md-2 text-white px-5">
                            <div className="col">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="col">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
