import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// For smooth scroll
// <Link spy={true} smooth={true} to="destination"

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeNav = () => {
    setClick(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-black rounded-md px-3 py-2"
      : "text-white rounded-md px-3 py-2";
  const content = (
    <>
      {/* Backdrop overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          click ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />
      
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-amber-500 to-amber-600 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          click ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6 border-b border-amber-400/30">
          <button
            onClick={handleClick}
            className="text-white hover:text-amber-100 transition-colors duration-200 p-2 hover:bg-amber-400/20 rounded-full"
            aria-label="Close menu"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        
        {/* Menu items */}
        <ul className="text-center text-xl py-8 px-6">
          <NavLink to="/" onClick={closeNav}>
            <li className="my-3 py-4 px-6 text-white font-medium rounded-lg border-b border-amber-400/20 hover:bg-amber-400/30 hover:border-amber-400/40 transition-all duration-200 cursor-pointer active:scale-95">
              Home
            </li>
          </NavLink>
          <NavLink to="/about" onClick={closeNav}>
            <li className="my-3 py-4 px-6 text-white font-medium rounded-lg border-b border-amber-400/20 hover:bg-amber-400/30 hover:border-amber-400/40 transition-all duration-200 cursor-pointer active:scale-95">
              About
            </li>
          </NavLink>
          <NavLink to="/pooja" onClick={closeNav}>
            <li className="my-3 py-4 px-6 text-white font-medium rounded-lg border-b border-amber-400/20 hover:bg-amber-400/30 hover:border-amber-400/40 transition-all duration-200 cursor-pointer active:scale-95">
              Pooja
            </li>
          </NavLink>
          <NavLink to="/gallery" onClick={closeNav}>
            <li className="my-3 py-4 px-6 text-white font-medium rounded-lg border-b border-amber-400/20 hover:bg-amber-400/30 hover:border-amber-400/40 transition-all duration-200 cursor-pointer active:scale-95">
              Gallery
            </li>
          </NavLink>
          <NavLink to="/contact" onClick={closeNav}>
            <li className="my-3 py-4 px-6 text-white font-medium rounded-lg border-b border-amber-400/20 hover:bg-amber-400/30 hover:border-amber-400/40 transition-all duration-200 cursor-pointer active:scale-95">
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="relative z-50">
      <div className="h-10vh flex justify-between text-white lg:py-5 px-20 py-4 relative">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold hover:text-gray-200 cursor-pointer">
            Aniyil Temple
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end front-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <NavLink to="/" className={linkClass}>
                <li className="hover:text-black transition border-b-2 hover:border-black cursor-pointer">
                  Home
                </li>
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                <li className="hover:text-black transition border-b-2 hover:border-black cursor-pointer">
                  About
                </li>
              </NavLink>
              <NavLink to="/pooja" className={linkClass}>
                <li className="hover:text-black transition border-b-2 hover:border-black cursor-pointer">
                  Pooja
                </li>
              </NavLink>
              <NavLink to="/gallery" className={linkClass}>
                <li className="hover:text-black transition border-b-2 hover:border-black cursor-pointer">
                  Gallery
                </li>
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                <li className="hover:text-black transition border-b-2 hover:border-black cursor-pointer">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div>{content}</div>
        <button
          className="lg:hidden block text-white hover:text-amber-200 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 active:scale-95 z-50"
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          {click ? (
            <FaTimes className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
