import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-zinc-900 text-white">
      <div className="flex items-center justify-between px-4 py-2 h-11">
        {!showMobileSearch && (
          <div className="flex items-center gap-4">
            <GiHamburgerMenu
              className="text-xl cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            />
            <Link to="/" className="flex items-center gap-1">
              <BsYoutube className="text-2xl text-red-600" />
              <span className="font-bold text-xl">YouTube</span>
            </Link>
          </div>
        )}

        {/* Center - Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 justify-center">
          <div className="flex items-center w-[60%] md:w-[80%] bg-zinc-800 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="bg-zinc-800 text-white text-sm md:text-base w-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-zinc-700 p-2 px-4">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
          <TiMicrophone className="ml-5 text-2xl cursor-pointer mt-2  items-center hidden md:block" />
        </div>
        {!showMobileSearch ? (
          <div className="flex items-center gap-4">
        
            <div className="md:hidden">
              <AiOutlineSearch
                className="text-xl cursor-pointer"
                onClick={() => setShowMobileSearch(true)}
              />
            </div>
            <BsCameraVideo className="text-xl hidden sm:block" />
            <IoAppsSharp className="text-xl hidden sm:block" />
            <BsBell className="text-xl hidden sm:block" />
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=female"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
          </div>
        ) : (
          
          <div className="flex items-center w-full md:hidden gap-2">
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => setShowMobileSearch(false)}
            />
            <div className="flex items-center flex-1 bg-zinc-800 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="bg-zinc-800 text-white text-sm w-full px-4 py-2 focus:outline-none"
              />
              <button className="bg-zinc-700 p-2 px-4">
                <AiOutlineSearch className="text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
