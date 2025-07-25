import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="notFound min-vh-100 py-5 bg-dark">
                <div className="container p-5 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-center text-danger fs-1"> Page Not Found - 404</h2>
                    <p className="text-center text-danger fs-5 mt-3"> Oops! The page you are looking for is not found </p>
                    <Link className="btn btn-outline-danger mt-5" to="/">
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    )
}
