import Logo from "../assets/logo.png";
import Small from "../assets/small.png";
import Medium from "../assets/medium.png";
import Large from "../assets/large.png";
import "../index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-1 pt-8 z-40 hidden lg:inline md:inline">
      <div className="w-[65%] lg:w-[100%] md:w-[90%] mx-auto flex items-center justify-center gap-20 lg:gap-10 md:gap-7">
        <ul className="flex items-center gap-14 lg:gap-8 md:gap-4 poppins-medium lg:text-[18px] md:text-[15px] leading-[20px] tracking-[0.6px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer py-1 ${
                isActive
                  ? "menu menu1"
                  : "menu menu:hover"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer py-1 ${
                isActive
                  ? "menu menu1"
                  : "menu menu:hover"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/wholesale"
            className={({ isActive }) =>
              `cursor-pointer py-1 ${
                isActive
                  ? "menu menu1"
                  : "menu menu:hover"
              }`
            }
          >
            Wholesale
          </NavLink>
        </ul>
        
        <div className="relative">
          <NavLink to="/">
            <img
              src={Large}
              alt="Logo"
              className="absolute top-[-20px] right-[-23px] image-animation large"
            />
            <img
              src={Medium}
              alt="Logo"
              className="absolute top-[-13px] right-[-15px] image-animation medium"
            />
            <img
              src={Small}
              alt="Logo"
              className="absolute -top-1 -right-2 image-animation small"
            />
            <img src={Logo} alt="Logo" className="relative" />
          </NavLink>
        </div>
        
        <ul className="z-10 flex items-center gap-14 lg:gap-8 md:gap-4 poppins-medium lg:text-[18px] md:text-[15px] leading-[20px] tracking-[0.6px]">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `cursor-pointer py-1 ${
                isActive
                  ? "menu menu1"
                  : "menu menu:hover"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `cursor-pointer py-1 ${
                isActive
                  ? "menu menu1"
                  : "menu menu:hover"
              }`
            }
          >
            News
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `cursor-pointer py-1 ${
                isActive
                  ? "menu menu1"
                  : "menu menu:hover"
              }`
            }
          >
            How it Works
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
