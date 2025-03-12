import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Cookies from 'js-cookie';

export default function HeaderAdmin() {
  const handleClickLogout = async () => {
    Cookies.remove('token');
    location.href = "/admin/auth/login"
  };

  return (
    <div className="flex items-center justify-between bg-white  p-4  w-full ml-100">
      {/* Search Bar */}
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <IoSearch className="absolute left-3 top-3 text-gray-500" size={18} />
      </div>
      
      {/* Notification, Language, User Profile, Logout */}
      <div className="flex items-center space-x-6">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <FaBell size={20} className="text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">6</span>
        </div>


        {/* Logout */}
        <span onClick={handleClickLogout} className="cursor-pointer">
          <FaArrowRightFromBracket className="text-[#6D7587] text-[20px]" />
        </span>
      </div>
    </div>
  );
}
