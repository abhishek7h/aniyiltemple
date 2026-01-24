import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

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
      ? "text-white font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:transition-all"
      : "text-white/90 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold bg-white/10 border-l-4 border-white"
      : "text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200";

  return (
    <nav className="relative z-50 bg-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl lg:text-3xl font-bold text-white hover:text-white/90 transition-colors duration-200">
              Aniyil Temple
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" className={linkClass}>
              <span className="px-4 py-2 block">Home</span>
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              <span className="px-4 py-2 block">About</span>
            </NavLink>
            <NavLink to="/pooja" className={linkClass}>
              <span className="px-4 py-2 block">Pooja</span>
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              <span className="px-4 py-2 block">Gallery</span>
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              <span className="px-4 py-2 block">Contact</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden text-white hover:text-white/80 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 active:scale-95 ${
              click ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <>
        {/* Backdrop overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            click ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeNav}
        />

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-amber-500 to-amber-600 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            click ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4 border-b border-white/20">
            <button
              onClick={handleClick}
              className="text-white hover:text-white/80 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="py-4">
            <NavLink to="/" onClick={closeNav} className={mobileLinkClass}>
              <span className="block px-6 py-4">Home</span>
            </NavLink>
            <NavLink to="/about" onClick={closeNav} className={mobileLinkClass}>
              <span className="block px-6 py-4">About</span>
            </NavLink>
            <NavLink to="/pooja" onClick={closeNav} className={mobileLinkClass}>
              <span className="block px-6 py-4">Pooja</span>
            </NavLink>
            <NavLink to="/gallery" onClick={closeNav} className={mobileLinkClass}>
              <span className="block px-6 py-4">Gallery</span>
            </NavLink>
            <NavLink to="/contact" onClick={closeNav} className={mobileLinkClass}>
              <span className="block px-6 py-4">Contact</span>
            </NavLink>
          </nav>
        </div>
      </>
    </nav>
  );
};

export default Nav;
