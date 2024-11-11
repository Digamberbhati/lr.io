
import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from "./pages/home"
import About from "./components/About"
import Clients from "./components/Clients"
import Diet from "./components/Diet"
import Contact from "./components/Contact"
import Training from "./components/Training"





function App() {
 

  return (
    <>
     <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/clients" element={<Clients/>}  />
      <Route path="/diet" element={<Diet/>}  />
      <Route path="/training" element={<Training/>}  />
      <Route path="/contact" element={<Contact/>}  />
    </Routes>

  <Footer/>
    
    </>
  )
}

export default App
