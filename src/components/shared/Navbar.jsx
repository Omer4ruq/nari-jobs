import { Link } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggler() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/jobs", title: "Jobs" },
    { path: "/companies", title: "Companies" },
    { path: "/community", title: "Community" },
    { path: "/about", title: "About" },
    { path: "/hellp", title: "Help" },
  ];
  return (
    <header className="">
      <div className="flex items-center justify-between p-6 bg-white w-full h-14 drop-shadow-md">
        <div>
          <div className="flex items-center gap-2  ">
            <img className="w-10 h-8" src="../../../public/logo.svg" alt="" />
            <h1 className="text-2xl font-bold text-blue-600 -ml-3">
              Nari<span className=" text-gray-900">jobs</span>
            </h1>
          </div>
        </div>
        <div className="text-gray-700 ">
          <ul className="hidden md:flex  gap-4">
            {navItems.map(({ path, title }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-base text- font-medium space-x-5 hidden lg:block">
          <NavLink to="/login" className="py-2 px-5 border rounded">
            Log in
          </NavLink>

          <NavLink
            to="/sign-in"
            className="py-2 px-5 bg-blue-600 text-white border rounded"
          >
            Sign in
          </NavLink>
        </div>
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>
      </div>
      <div className="px-2">
        <div
          className={`px-4 py-5   bg-black rounded-sm justify-center ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul>
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-white py-1">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            {/* <div className="text-base text- font-medium space-x-5 hidden lg:block">
              <NavLink to="/login" className="py-2 px-5 border rounded">
                Log in
              </NavLink>

              <NavLink
                to="/sign-in"
                className="py-2 px-5 bg-blue-600 text-white border rounded"
              >
                Sign in
              </NavLink>
            </div> */}
            <NavLink to="/login" className="text-base text-white py-1">
              Log in
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
