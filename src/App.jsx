import { Outlet } from 'react-router'
import './App.css'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import { useState } from 'react'

function App() {
  const [selectImg, setSelectImg] = useState(null)



  return (
    <>
      <div className=' d-flex flex-column justify-content-between min-vh-100 '>
        <Navbar />
        <Outlet context={{ setSelectImg }} />
        <Footer />

        {selectImg &&
          (<div className=" fixed-top bg-primary bg-opacity-25 bottom-0 end-0 start-0 top-0 d-flex align-items-center justify-content-center" onClick={() => setSelectImg(null)}>
            <div className="rounded-3 layerImg " onClick={(e) => e.stopPropagation()}>
              <img src={selectImg} className="w-100" alt="House Image" />
            </div>
          </div>
          )
        }
      </div>
    </>
  )
}

export default App
