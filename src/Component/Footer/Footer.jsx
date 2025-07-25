import "./Footer.css"
export default function Footer() {
    return (
        <>
        <div className="footer text-white text-center pt-5">
            <div className="container py-5">
                <div className="row  row-cols-sm-3 row-cols-1 g-5">
                    <div className="col">
                        <div className="location">
                            <h3 className=" text-uppercase">Location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col flex-wrap">
                        <h3 className=" text-uppercase">AROUND THE WEB</h3>
                        <div className="icons d-flex justify-content-center gap-3">
                            <span className=" fs-5 rounded-circle p-1">
                                <i className="fa-brands fa-facebook-f"></i>
                            </span>
                            <span className=" fs-5 rounded-circle p-1">
                                <i className="fa-brands fa-twitter"></i>
                            </span>
                            <span className=" fs-5 rounded-circle p-1">
                                <i className="fa-brands fa-linkedin-in"></i>
                                </span>
                            <span className=" fs-5 rounded-circle p-1">
                                <i className="fa-brands fa-instagram"></i>
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about">
                            <h3 className=" text-uppercase ">
                                About FreeLancer
                            </h3>
                            <p>
                                Freelance is a free to use, licensed Bootstrap theme created by Route
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copyright m-0 py-4">Copyright © Your Website 2025</p>
        </div>
        </>


    )
}

