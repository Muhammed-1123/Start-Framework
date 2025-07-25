import { Link } from 'react-router'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useState } from 'react';
export default function Navbar() {
    const [IsScrollY, setIsScrollY] = useState(false);
    window.addEventListener("scroll", function () {
        if (scrollY > 0) {
            setIsScrollY(true)
        } else {
            setIsScrollY(false)
        }
    })
    return (
        <>
            <nav id='navbar' className={`navbar colors  navbar-expand-lg fixed-top ${IsScrollY ? "py-2" : "py-4"}`}>
                <div className="container py-2">
                    <Link className="navbar-brand text-uppercase text-white fw-bold fs-2 p-0" to="/">Start FrameWork</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link fs-6 text-white text-uppercase fw-bold ${isActive ? "active" : ""}`} to="About" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link fs-6 text-white text-uppercase fw-bold ${isActive ? "active" : ""}`} to="Portfolio"  >Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link fs-6 text-white text-uppercase fw-bold ${isActive ? "active" : ""}`} to="Contact"  >Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
