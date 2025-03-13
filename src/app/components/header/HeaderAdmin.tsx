//import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useContext } from "react";
import { ProfileAdminContext } from "@/app/admin/layout";
import Link from "next/link";

export default function HeaderAdmin() {
  const handleClickLogout = async () => {
    Cookies.remove('token');
    location.href = "/admin/auth/login"
  };

  const dataProfile = useContext(ProfileAdminContext);

  return (
    <div className="flex items-center justify-between bg-white  p-4  w-full ml-100">
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <IoSearch className="absolute left-3 top-3 text-gray-500" size={18} />
      </div>
      <div className="flex items-center space-x-6">
        {dataProfile?.avatar && (
          <Link href="/admin/profile" className="w-[40px] aspect-square ">
            <img src={dataProfile?.avatar} className="w-full h-full object-cover rounded-full" />
          </Link>
        )}

        <span onClick={handleClickLogout} className="cursor-pointer">
          <FaArrowRightFromBracket className="text-[#6D7587] text-[20px]" />
        </span>
      </div>
    </div>
  );
}  