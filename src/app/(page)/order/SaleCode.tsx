"use client"

import FormInputCheckout from "@/app/components/Form/FormInputCheckout";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function SaleCode() {
    //Popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div className="ml-[28px] pt-[24px] pb-[12px] border-t border-solid border-[#d9d9d9] flex items-center justify-between">
                <div className="flex-1">
                    <FormInputCheckout label="Nhập mã giảm giá" name="code-sale" id="codesale" />
                </div>
                <button className="rounded-[4px] ml-[12px] mb-[10px] bg-[#72a834] border border-solid border-[#72a834] text-white text-[14px] font-[450] h-[44px] px-[20px]">
                    Áp dụng
                </button>

            </div>
            <div className="ml-[28px] flex items-center justify-between">
                <div className="flex items-center">
                    <img className="w-[20px] mr-[4px]" src="https://bizweb.dktcdn.net/100/495/928/themes/921279/assets/coupon-icon.png?1742461447222" />
                    <span className="text-[14px] text-textColor">Mã khuyến mãi</span>
                </div>
                <div onClick={() => { handleOpenPopup() }} className="cursor-pointer text-[#009EF6] flex items-center text-[14px]">Xem chi tiết <FaAngleRight />
                </div>
            </div>

            
        </>
    )
}