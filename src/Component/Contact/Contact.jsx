import Stars from "../Stars/Stars"
import style from "./Contact.module.css"
export default function Contact() {
    return (
        <>
            <div className="contact min-vh-100 py-5 mt-5">
                <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                    <h2 className={`${style.heading} text-uppercase fs-1 mb-3 fw-bold`}>
                        Contact Section
                    </h2>
                    <Stars />

                    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="form-floating mb-3 w-75">
                            <input type="text" className={`${style.formControl} form-control w-100 border-0 border-bottom`} id="inputName" placeholder="name@example.com" />
                            <label htmlFor="inputName">User Name</label>
                        </div>
                        <div className="form-floating mb-3 w-75">
                            <input type="email" className={`${style.formControl} form-control w-100 border-0 border-bottom`} id="inputEmail" placeholder="name@example.com" />
                            <label htmlFor="inputEmail">User Email</label>
                        </div>
                        <div className="form-floating mb-3 w-75">
                            <input type="number" className={`${style.formControl} form-control w-100 border-0 border-bottom`} id="inputPassword" placeholder="Password" />
                            <label htmlFor="inputPassword">User Age</label>
                        </div>

                        <div className="form-floating mb-3 w-75">
                            <input type="password" className={`${style.formControl} form-control w-100 border-0 border-bottom`} id="inputPassword" placeholder="Password" />
                            <label htmlFor="inputPassword"> Password</label>
                        </div>

                    </div>
                        <button type="submit" className={`${style.btn} btn w-25`}>
                            Send Message
                        </button>

                </div>
            </div>
        </>
    )
}
