import ImgCard from "../ImgCard/ImgCard"
import style from "./portfolio.module.css"
import Stars from "../Stars/Stars"
import house1 from "../../assets/house.png"
import house2 from "../../assets/house2.png"
import cake1 from "../../assets/cake.png"
import cake2 from "../../assets/cake2.png"
import tent1 from "../../assets/tent.png"
import tent2 from "../../assets/tent2.png"
import { useOutletContext } from "react-router"
export default function Portfolio() {

    const images = [
        {
            image: house1
        },
        {
            image: cake1
        },
        {
            image: tent1
        },
        {
            image: house2
        },
        {
            image: cake2
        },
        {
            image: tent2
        }
    ]

    const { setSelectImg } = useOutletContext()

    return (
        <>
            <div className="portfolio py-5 mt-5" >
                <div className="container text-center p-4">
                    <h2 className={`${style.heading} text-uppercase fs-1 mb-2 mt-4 fw-bold `}>
                        Portfolio Component
                    </h2>
                    <Stars />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        {
                            images.map((image, index) => (
                                <ImgCard key={index} image={image.image} index={index} onClick={() => setSelectImg(image.image)} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
