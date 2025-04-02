"use client"

import FormInputCheckout from "@/app/components/Form/FormInputCheckout";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function SaleCode() {
    const [copied, setCopied] = useState(false);
    const [data, setData] = useState([{
        voucherId: "",
        name: "",
        type: "",
        discountValue: 0,
        maxDiscount: 0,
        minOrderValue: 0
    }]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/vouchers`);
            const dataResponse = await response.json();
            setData(dataResponse.data);
        };

        fetchData();
    }, []);

    //Popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleCopy = async (code: string) => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
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
                <div onClick={handleOpenPopup} className="cursor-pointer text-[#009EF6] flex items-center text-[14px]">Xem chi tiết <FaAngleRight /></div>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[99999999] flex justify-center items-start pt-[8%]" onClick={handleClosePopup}>
                    <div className="container mx-auto w-[650px] max-h-[80%] bg-[#fff] py-[10px] px-[15px] rounded-[10px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="uppercase text-[16px] text-textColor font-[550] mb-[10px]">Mã khuyến mãi</div>
                        {data && data.length > 0 && data.map((item: any, index: number) => (
                            <div key={index} className="border border-dashed border-primary rounded-[5px] h-[85px] flex items-center mb-[15px]">
                                {item.type === "PERCENTAGE" ? (
                                    <div className="bg-primary w-[110px] text-[30px] py-[10px] text-[#fff] font-[500] h-full flex justify-center items-center">{item.discountValue}%</div>
                                ) : (
                                    <div className="bg-primary w-[110px] text-[30px] py-[10px] text-[#fff] font-[500] h-full flex justify-center items-center">{(item.discountValue / 1000)}k</div>
                                )}
                                <div className="px-[10px] h-full flex-1 flex items-center bg-[#E4EDD5]">
                                    <div className="w-[70%]">
                                        <div className="text-[14px] text-textColor font-[450] mb-[3px]">Mã khuyến mãi <span className="text-primary font-[600]">{item.name}</span></div>
                                        {item.type === "PERCENTAGE" ? (
                                            <div className="text-[14px] text-textColor font-[450]">Mã giảm {item.discountValue}% cho đơn hàng tối thiểu {item.minOrderValue / 1000}k.</div>
                                        ) : (
                                            <div className="text-[14px] text-textColor font-[450]">Mã giảm {item.discountValue / 1000}k cho đơn hàng tối thiểu {item.minOrderValue / 1000}k.</div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div onClick={() => handleCopy(item.name)} className="bg-primary hover:bg-[#F4AE05] flex justify-center items-center text-white px-[15px] cursor-pointer h-[32px] font-[500] text-[16px] rounded-[5px]">Sao chép mã</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}