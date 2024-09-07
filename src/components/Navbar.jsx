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
    <header className="bg-bgnav border-b sticky top-0 left-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src="/images/lokesh.png" alt="logo" className="h-14" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="md:flex md:items-center md:gap-20">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-12 text-sm font-bold">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75 capitalize" to="/"> Home </Link>
                </li>
                {["about", "careers", "history", "service", "projects", "blog"].map((item, index) => (
                  <li key={index}>
                    <Link className="text-gray-500 transition hover:text-gray-500/75 capitalize" to={`/${item}`}> {item} </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-2xl">
                {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        aria-label="Mobile Menu"
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-10 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[200%]'} md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 text-3xl font-bold">
          <li>
            <Link className="capitalize" to="/" onClick={toggleMenu}> Home </Link>
          </li>
          {["about", "careers", "history", "service", "projects", "blog"].map((item, index) => (
            <li key={index}>
              <Link className="capitalize" to={`/${item}`} onClick={toggleMenu}> {item} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
