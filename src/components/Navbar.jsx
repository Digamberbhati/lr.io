import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <nav className='flex items-center justify-between px-12 py-4'>

      {/* logo */}
      <div>
        <img src="/images/lokesh.png" alt="logo" className='h-14  ' />
      </div>

      {/* menu */}
      <div className='menu pr-4 text-2xl'> 

      <div className='hamburger sm:hidden'>
      <GiHamburgerMenu />
      </div>


        <ul className='sm:flex gap-8 hidden  '>
          

          <Link to="/"><li>Home</li></Link>

          {["about", "service", "contact"].map((item,index)=>(
             <Link className='capitalize' to={`/${item}`}><li>{item}</li></Link>
          ))}
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
