import { Outlet } from "react-router-dom"
import Features from "../../components/jsx/Features"
import Footer from "../../components/jsx/Footer"
import Navbar from "../../components/jsx/Navbar"

const Layout = () => {
  return (
      <>
          <Navbar />
          <Outlet/>
          <Features />
          <Footer/>
    </>
  )
}

export default Layout