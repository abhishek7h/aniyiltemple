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
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-amber-500 transition">
        <ul className="text-center text-xl p-20">
          <NavLink to="/" onClick={closeNav}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </NavLink>
          <NavLink to="/about" onClick={closeNav}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </NavLink>
          <NavLink to="/pooja" onClick={closeNav}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Pooja Timings
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Aniyil Temple</span>
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
                  Pooja Timings
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? (
            <FaTimes className="text-2xl mt-1" />
          ) : (
            <GiHamburgerMenu className="text-2xl mt-1" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
