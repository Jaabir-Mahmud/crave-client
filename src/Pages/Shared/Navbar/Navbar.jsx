import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/" className="text-black">
          Home
        </Link>
      </li>

      <li>
        <Link to="/menu" className="text-black">
          Our Menu
        </Link>
      </li>
    </>
  );
  return (
    <div>
      {/* Navbar */}
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
        {/* Navbar Start (Logo + Mobile Menu Button) */}
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[2] mt-3 w-52 p-2 shadow-lg"
            >
              {navOptions}
            </ul>
          </div>
          {/* Logo */}
          <a href="/" className="btn btn-ghost text-xl">
            Crave
          </a>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Navbar End (Button) */}
        <div className="navbar-end">
          <a href="#button" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
