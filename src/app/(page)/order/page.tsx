"use client"

import { useSelector } from "react-redux";
import FormOrder from "./FormOrder";
import FormInputCheckout from "@/app/components/Form/FormInputCheckout";
import { useState } from "react";
import { FcPrevious } from "react-icons/fc";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function OrderPage() {
    const quantity = useSelector((state: any) => state.totalQuantityInit);
    const products = useSelector((state: any) => state.products);
    const totalPrice = useSelector((state: any) => state.totalPriceInit);

    const handleSubmitForm = (event: any) => {
        event.preventDefault();

        // console.log(event.target.email.value);
        // console.log(event.target.fullname.value);
        // console.log(event.target.phone.value);
        // console.log(event.target.district.value);
        // console.log(event.target.province.value);
        // console.log(event.target.ward.value);
        // console.log(event.target.method.value);
    }

    return (
        <>
            <form action="" className="flex" onSubmit={handleSubmitForm}>
                <div className="w-[60%] pl-[15%] pr-[2%] py-[25px] flex flex-wrap items-center justify-center">
                    <div className="w-[206px] h-[82px] mb-[21px]">
                        <img src="/logo.svg" className="w-full h-full object-cover" />
                    </div>
                    <FormOrder />
                </div>
                <div className="flex-1 bg-[#FAFAFA] pr-[15%] border-l border-solid border-[#e1e1e1]">
                    <div className="text-[18px] font-[600] text-[#333] py-[20px] px-[28px] border-b border-solid border-[#e1e1e1]">Đơn hàng ({quantity} sản phẩm)</div>
                    <div className="pl-[28px] py-[14px]">
                        {products.map((item: any, index: number) => (
                            <div key={index} className="flex items-center relative mb-[15px]">
                                <div className="w-[50px] aspect-square bg-white rounded-[8px] border boder-solid border-[rgba(0, 0, 0, .1)] relative mr-[20px]">
                                    <img src={item.image} className="w-full h-full object-contain" />
                                    <span className="absolute right-[-8px] top-[-7px] text-[11px] bg-[#2a9dcc] text-white w-[18px] h-[18px] flex justify-center items-center rounded-[32px]">{item.quantity}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-[14px] text-[#333] font-[400]">{item.title}</div>
                                    <div className="text-[12px] text-[#969696] font-[350]">{item.volume}ml</div>
                                </div>
                                <div className="text-[14px] w-[73px] text-[#969696] ml-[35px]">{(item.priceNew * item.quantity).toLocaleString("en-US")}<sup className="underline">đ</sup></div>
                            </div>
                        ))}
                    </div>
                    <div className="ml-[28px] pt-[24px] pb-[12px] border-t border-b border-solid border-[#d9d9d9] flex items-center justify-between">
                        <div className="flex-1">
                            <FormInputCheckout label="Nhập mã giảm giá" name="code-sale" id="codesale" />
                        </div>
                        <button className="rounded-[4px] ml-[12px] mb-[10px] bg-[#72a834] border border-solid border-[#72a834] text-white text-[14px] font-[450] h-[44px] px-[20px]">Áp dụng</button>
                    </div>
                    <div className="ml-[28px] border-b border-solid border-[#d9d9d9] pt-[30px] pb-[20px]">
                        <div className="flex items-center justify-between text-[#737373] text-[14px]">
                            <span>Tạm tính</span>
                            <span>{totalPrice.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        </div>
                        <div className="flex items-center justify-between text-[#737373] text-[14px] mt-[15px]">
                            <span>Phí vận chuyển</span>
                            <span>40,000<sup className="underline">đ</sup></span>
                        </div>
                    </div>
                    <div className="ml-[28px]">
                        <div className="flex items-center justify-between mt-[15px]">
                            <span className="text-[16px] text-[#737373]">Tổng cộng</span>
                            <span className="text-[20px] text-[#2a9dcc]">{(totalPrice + 40000).toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        </div>
                        <div className="mt-[15px] flex justify-between items-center">
                            <Link href="/cart" className="text-[14px] text-[#2a9dcc] hover:text-[#2a6395] flex items-center group">
                                <div className="relative">
                                    <IoIosArrowBack className="text-[16px] transition-transform group-hover:-translate-x-1" />
                                </div>
                                <span className="ml-[2px]">Quay về giỏ hàng</span>
                            </Link>
                            <button type="submit" className="uppercase rounded-[4px] ml-[12px] mb-[10px] bg-[#72a834] border border-solid border-[#72a834] text-white text-[14px] font-[450] h-[44px] px-[22px]">
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}