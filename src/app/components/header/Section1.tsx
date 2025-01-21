import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaMagnifyingGlass, FaRegCircleUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

export default function Section1() {
    return (
        <>
            <div className="container mx-auto flex items-center py-[10px] ">
                {/* Logo */}
                <div className="mr-[23px]">
                    <Image src="logo.svg" alt="" width={190} height={60} />
                </div>
                {/* Search */}
                <form className="bg-[#F6F6F6] rounded-[40px] flex items-center px-[20px] w-[412px] mr-[120px]">
                    <input
                        type="text"
                        name="keyword"
                        placeholder="Bạn muốn tìm gì?"
                        className="h-[50px]  outline-none order-2 bg-transparent" />
                    <button
                        type="submit"
                        className="order-1 text-[25px] text-[#4E4E4E] mr-[20px] font-[100]"
                    >
                        <FaMagnifyingGlass />
                    </button>
                </form>
                {/* Menu */}
                <div className="flex-1 flex items-center">
                    <Link href="#">
                        <div className="flex items-center">
                            <img src="testing.png" width={28} height={28} />
                            <span className="text-[12px] font-[600] ml-[4px]">Loại Da Của Bạn</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center ml-[15px]">
                            <img src="note-book 1.png" width={28} height={28} />
                            <span className="text-[12px] font-[600] ml-[4px]">Tạp Chí Làm Đẹp</span>
                        </div>
                    </Link>
                    <button className="ml-[15px] flex items-center">
                        <img src="dots 1.png" width={28} height={28} />
                        <span className="ml-[15px]">|</span>
                    </button>
                    <Link href="#">
                        <div className="flex items-center ml-[15px]">
                            <FaRegCircleUser className="text-[28px]" />
                            <span className="text-[12px] font-[600] ml-[4px]">Đăng Nhập</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center ml-[15px] relative">
                            <CiHeart className="text-[32px]" />
                            <span className="h-[16px] w-[16px] rounded-full flex items-center justify-center absolute bg-primary text-white text-[10px] top-[1px] left-[18px]">0</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center ml-[15px] relative">
                            <GrCart className="text-[28px]" />
                            <span className="h-[16px] w-[16px] rounded-full flex items-center justify-center absolute bg-primary text-white text-[10px] top-[-2px] left-[18px]">0</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}