import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Home from './Component/Home/Home.jsx'
import Portfolio from './Component/Portfolio/Portfolio.jsx'
import './index.css'
import NotFound from './Component/NotFound/NotFound.jsx'
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "Portfolio", element: <Portfolio/> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
    ] 
  },
  {
    path: "*", element: <NotFound />
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
