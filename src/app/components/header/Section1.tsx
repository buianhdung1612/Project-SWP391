"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import MenuMoreItem from "./MenuMoreItem";
import Cart from "../Cart/Cart";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

export default function Section1() {
    const [openMore, setOpenMore] = useState(false);
    const [contentSearch, setContentSearch] = useState("Vui Lòng Nhập Từ Khóa Vào Ô Tìm Kiếm");
    const [subContentSearch, setSubContentSearch] = useState("Đừng bỏ lỡ");
    const [showSuggest, setShowSuggest] = useState(false);
    const [data, setData] = useState([]);

    const router = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleKeyUpSearch = async (event: any) => {
        const response = await fetch(`https://freshskinweb.onrender.com/home/suggest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: event.target.value
        });
        const dataResponse = await response.json();
        setData(dataResponse.data);
        setSubContentSearch("Đề xuất tìm kiếm");
        setContentSearch(`Tìm Kiếm: ${event.target.value}`)
    }

    const handleSubmitSearch = async (event: any) => {
        event.preventDefault();

        const response = await fetch(`https://freshskinweb.onrender.com/home/search?keyword=${event.target.keyword.value}`);
        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            router.push(`/products/search?keyword=${dataResponse.data.title}`)
        }
    }

    const handleSearchInSuggest = async (keyword: string) => {
        const response = await fetch(`https://freshskinweb.onrender.com/home/search?keyword=${keyword}`);
        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            router.push(`/products/search?keyword=${dataResponse.data.title}`)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Kiểm tra nếu người dùng click ngoài form
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setShowSuggest(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="container mx-auto flex items-center py-[10px] ">
                {/* Logo */}
                <Link href="/">
                    <div className="mr-[23px]">
                        <Image src="logo.svg" alt="" width={190} height={60} />
                    </div>
                </Link>
                {/* Search */}
                <form ref={formRef} onSubmit={handleSubmitSearch} autoComplete="off" className={`bg-[#F6F6F6] flex items-center px-[20px] w-[412px] mr-[120px] relative ` + (showSuggest ? "rounded-tl-[25px] rounded-tr-[25px]" : "rounded-[40px]")}>
                    <input
                        type="text"
                        name="keyword"
                        placeholder="Bạn muốn tìm gì?"
                        onKeyUp={handleKeyUpSearch}
                        onClick={() => setShowSuggest(true)}
                        className="h-[50px] outline-none order-2 bg-transparent" />
                    <button
                        type="submit"
                        className="order-1 text-[25px] text-[#4E4E4E] mr-[20px] font-[100]"
                    >
                        <IoSearchOutline />
                    </button>
                    {showSuggest && (
                        <div className="bg-[#F6F6F6] rounded-bl-[25px] rounded-br-[25px] pt-[20px] w-[412px] px-[20px] absolute top-[80%] left-[0%] z-[100]">
                            <div className="flex items-center">
                                <div className="icon-search-suggest relative">
                                    <IoSearchOutline className="text-white text-[16px] absolute left-[6px] top-[7px]" />
                                </div>
                                <span className="text-[14px] font-[550] ml-[10px]">{contentSearch}</span>
                            </div>
                            <div className="uppercase text-[16px] font-[500] text-[#000] my-[15px]">{subContentSearch}</div>
                            {data && data.map((item: any, index: number) => (
                                <div key={index}>
                                    <div className="flex items-center mb-[15px]">
                                        <div className="flex-1">
                                            <Link href={`/detail/${item.slug}`} className="text-[14px] font-[400] text-[#000] hover:text-secondary cursor-pointer mb-[5px] line-clamp-2">{item.title}</Link>
                                            <div className="flex items-center">
                                                <span className="text-[14px] font-[500] pr-[10px] text-primary">{((item.variants[0].price) * (1 - item.discountPercent / 100)).toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                                                <span className="text-[12px] font-[300] text-[#9e9e9e] line-through">{(item.variants[0].price).toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                                            </div>
                                        </div>
                                        <div className="w-[50px] aspect-square ml-[5px]">
                                            <img src={item.thumbnail[0]} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {data && data.length > 0 && (
                                <div
                                    className="text-[#000] py-[5px] text-[14px] font-[550] text-center cursor-pointer hover:text-secondary"
                                    onClick={() => handleSearchInSuggest(contentSearch.split("Tìm Kiếm: ")[1])}
                                >
                                    Xem tất cả
                                </div>
                            )}
                        </div>
                    )}
                </form>
                {/* Menu */}
                <div className="flex-1 flex items-center">
                    <Link href="/quiz">
                        <div className="flex items-center">
                            <img src="testing.png" width={28} height={28} />
                            <span className="text-[12px] font-[600] ml-[4px] hover:text-primary">Loại Da Của Bạn</span>
                        </div>
                    </Link>
                    <Link href="/blogs">
                        <div className="flex items-center ml-[15px]">
                            <img src="note-book 1.png" width={28} height={28} />
                            <span className="text-[12px] font-[600] ml-[4px] hover:text-primary">Tạp Chí Làm Đẹp</span>
                        </div>
                    </Link>
                    <button className="ml-[15px] flex items-center">
                        {openMore == false && (
                            <img
                                src="dots 1.png"
                                width={28}
                                height={28}
                                onClick={() => setOpenMore(!openMore)}
                            />
                        )}
                        {openMore == true && (
                            <div className="relative">
                                <span
                                    className="text-[14px] font-[600] flex justify-center items-center w-[28px] h-[28px] mb-[2px]"
                                    onClick={() => setOpenMore(!openMore)}
                                >
                                    X
                                </span>
                                <ul className="menu-more p-0 m-0 bg-[#fff] rounded-[10px] w-[200px] absolute top-[35px] right-[5px] z-[999]">
                                    <MenuMoreItem
                                        text="Trung tâm hỗ trợ"
                                        icon="/demo/phone-icon.webp"
                                        link="/contact"
                                    />
                                    <MenuMoreItem
                                        text="Tra cứu đơn hàng"
                                        icon="/demo/tra-cuu-don-hang.webp"
                                        link="search-order"
                                    />
                                </ul>
                            </div>
                        )}
                        <span className="ml-[15px]">|</span>
                    </button>
                    <Link href="/user/login">
                        <div className="flex items-center ml-[15px]">
                            <FaRegCircleUser className="text-[28px]" />
                            <span className="text-[12px] font-[600] ml-[4px] hover:text-primary">Đăng Nhập</span>
                        </div>
                    </Link>
                    <Link href="/favorite">
                        <div className="flex items-center ml-[15px] relative">
                            <CiHeart className="text-[32px]" />
                            <span className="h-[16px] w-[16px] rounded-full flex items-center justify-center absolute bg-primary text-white text-[10px] top-[1px] left-[18px]">0</span>
                        </div>
                    </Link>
                    <div className="relative">
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    )
}