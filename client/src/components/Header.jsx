import React from "react";
import { MdSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between shadow-md items-center bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Link to={"/"}>
            <img
              src="src/assets/logo.jpg"
              alt="Logo"
              className="logo w-30 h-20"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            name="Search"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-blue flex items-center justify-center rounded-r-full text-white">
            <MdSearch />
          </div>
        </div>
        <div className="flex justify-between gap-3 ">
          <div className="text-3xl">
            <CgProfile />
          </div>
          <div className="text-3xl">
            <span>
              <IoCart />
            </span>
            <div className="bg-blue text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute top-3 ">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link to={'/login'}
              className=" bg-blue text-white px-3 py-1 rounded-full hover:bg-orange"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
