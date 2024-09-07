

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from './components/footer'
import Home from "./pages/home"
import About from "./components/About"


function App() {
 

  return (
    <>
     <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
    </Routes>

  <Footer/>
    
    </>
  )
}

export default App
