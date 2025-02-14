"use client"

import Link from "next/link";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";

export default function CardItem(props: {
    image: string,
    category: string,
    title: string,
    priceOld: number,
    priceNew: number,
    discount: number,
    deal?: string,
    banner?: string,
    className?: string,
    link: string
}) {
    const { image = "", category = "", title = "", priceOld = "", priceNew = "", discount = "", banner = "", deal = "", className = "", link = "" } = props;

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div className="bg-white rounded-[10px]">
                <Link href={link}>
                    <div className="w-[226px] aspect-square relative group">
                        <img src={image} className="w-full h-full object-cover" />

                        <CiHeart className="text-[28px] absolute top-[2%] right-[2%] hover:text-primary cursor-pointer" />
                        {banner && (
                            <img src={banner} className="absolute bottom-0" />
                        )}
                        {deal && (
                            <img src={deal} className="absolute top-[2%] left-[2%]" />
                        )}
                        <div
                            onClick={() => {handleOpenPopup()}}
                            className="rounded-[30px] absolute bottom-[12%] left-[27%] bg-primary hover:bg-secondary py-[8px] px-[10px] hidden text-[14px] text-white w-[98px] h-[36px] font-[500] card-see-quick group-hover:block"
                        >
                            Xem nhanh
                        </div>
                    </div>

                </Link>
                <div className={`text-center mt-[5px] w-[226px] ` + className}>
                    {category && (
                        <div className="uppercase text-[14px] font-[600 text-[#4e7661] mb-[5px] hover:text-primary">{category}</div>
                    )}
                    <Link href={link}>
                        <div className="text-[14px] font-[400] mx-[5px] line-clamp-2 mb-[5px] hover:text-secondary">{title}</div>
                    </Link>
                    <div className="flex items-center mb-[10px] justify-center">
                        <span className="text-[#c90000] text-[15px] font-[500] mr-[5px]">{priceNew.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        <span className="text-[#98a4a9] text-[12px] font-[300] line-through mr-[5px]">{priceOld.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        <span className="text-white bg-primary py-[3px] rounded-[3px] text-[12px] min-w-11">-{discount}%</span>
                    </div>
                </div>
            </div>
            
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-[90%] max-w-2xl p-5 relative">
                        {/* Close button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                            onClick={handleClosePopup}
                        >
                            ✕
                        </button>

                        {/* Popup Content */}
                        <div className="flex flex-col md:flex-row items-center">
                            <img
                                src={image}
                                alt={title}
                                className="w-full md:w-1/3 object-cover rounded-md mb-4 md:mb-0"
                            />
                            <div className="flex-1 md:ml-6">
                                <h2 className="text-lg font-bold mb-2">{title}</h2>
                                <p className="text-[#c90000] text-xl font-semibold mb-2">
                                    {priceNew.toLocaleString("en-US")}<sup className="underline">đ</sup>
                                </p>
                                <p className="text-gray-500 text-sm line-through mb-4">
                                    {priceOld.toLocaleString("en-US")}<sup className="underline">đ</sup>
                                </p>
                                <p className="text-gray-700 text-sm mb-4">
                                    Khuyến mãi: Giảm giá {discount}% khi mua ngay hôm nay!
                                </p>
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
                                    onClick={() => alert("Thêm vào giỏ hàng!")}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}