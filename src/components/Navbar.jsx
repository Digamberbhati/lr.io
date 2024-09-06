import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io'; // Close icon

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex items-center justify-between px-12 py-4'>
      {/* logo */}
      <div>
        <img src="/images/lokesh.png" alt="logo" className='h-14' />
      </div>

      {/* Hamburger icon for mobile */}
      <div className='sm:hidden cursor-pointer text-2xl' onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>

      {/* Menu items */}
      <div className={`fixed top-0 right-0 w-full h-full bg-transparent backdrop-blur-md flex flex-col items-center justify-center z-10 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
        {/* Close icon inside the menu */}
        <IoMdClose className='absolute top-4 right-8 text-3xl cursor-pointer' onClick={toggleMenu} />

        {/* Menu links */}
        <ul className='flex flex-col items-center gap-8 text-xl'>
          <Link to="/" onClick={toggleMenu}><li className='py-2 px-4 hover:bg-gray-200'>Home</li></Link>
          {["about", "service", "contact"].map((item, index) => (
            <Link key={index} to={`/${item}`} onClick={toggleMenu}>
              <li className='capitalize py-2 px-4 hover:bg-gray-200'>{item}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Regular menu for larger screens */}
      <ul className='sm:flex gap-8 hidden'>
        <Link to="/"><li>Home</li></Link>
        {["about", "service", "contact"].map((item, index) => (
          <Link key={index} className='capitalize' to={`/${item}`}><li>{item}</li></Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
