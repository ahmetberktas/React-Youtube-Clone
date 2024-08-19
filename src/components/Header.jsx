import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target[0].value;
    navigate(`/results?search_query=${searchText}`)
  }
  return (
    <header className="bg-black p-4 flex items-center justify-between flex-wrap">
      {/* Sol Taraf */}
      <div className="flex items-center mb-2 md:mb-0">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/youtubeLogo.png"
              alt="Youtube"
              className="h-6 mr-2"
            ></img>
          </Link>
          <span className="text-white font-semibold">YouTube</span>
          <span className="text-white text-xs align-top mb-2">TR</span>
        </div>
      </div>
      {/* Orta Kısım */}
      <div className="flex-grow max-w-full md:max-w-lg mx-4 mb-2 md:mb-0">
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ara"
              className="w-full py-2 px-4 rounded-full bg-gray-800 text-white focus:outline-none"
            ></input>
            <button className="absolute right-3 top-3 text-white">
              <CiSearch />
            </button>
          </form>
        </div>
      </div>
      {/* Sağ Taraf */}
      <div className="flex items-center">
        <button className="text-white mx-1 md:mx-2">
          <BsFillCameraVideoFill />
        </button>
        <button className="text-white mx-1 md:mx-2">
          <IoIosNotifications />
        </button>
        <button className="text-white mx-1 md:mx-2">
          <CgProfile />
        </button>
      </div>
    </header>
  );
};

export default Header;
