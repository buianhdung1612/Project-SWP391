"use client"

import FormInput from "@/app/components/Form/FormInput";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchOrderPage() {
    const [status, setStatus] = useState("phone");

    return (
        <>
            <div className="bg-[#F5F5F5] py-[35px] px-[230px]">
                <div className="container bg-white p-[25px] rounded-[5px] w-full">
                    <div className="bg-[rgba(228,228,228,1)] rounded-[5px] w-[460px] px-[10px] search-order">
                        <div className="flex items-center justify-center text-[17px] font-[700] py-[18px] mb-[15px] border-b boder-solid border-white">
                            <FaSearch className="mr-[5px]" />
                            Kiểm tra đơn hàng của bạn
                        </div>
                        <div className="">
                            <div className="text-[13px] mb-[5px]">Kiểm tra bằng</div>
                            <div className="flex items-center mb-[15px]">
                                <input
                                    type="radio"
                                    id="phone"
                                    name="option"
                                    value="phoneOption"
                                    defaultChecked
                                    onClick={() => setStatus("phone")}
                                />
                                <label htmlFor="phone" className="text-[13px] font-[400] ml-[10px] mr-[15px]">Số điện thoại</label>
                                <input
                                    type="radio"
                                    id="email"
                                    name="option"
                                    value="emailOption"
                                    onClick={() => setStatus("email")}
                                />
                                <label htmlFor="email" className="text-[13px] font-[400] ml-[10px] mr-[15px]">Email</label>
                                <input
                                    type="radio"
                                    id="both"
                                    name="option"
                                    value="bothOption"
                                    onClick={() => setStatus("both")}
                                />
                                <label htmlFor="both" className="text-[13px] font-[400] ml-[10px] mr-[15px]">Số điện thoại và Email</label>
                            </div>
                            {status == "phone" && (
                                <form action="" className="">
                                    <label className="block text-[13px] mb-[5px]" htmlFor="phoneInput">Số điện thoại</label>
                                    <FormInput
                                        placeholder="0909 xxx xxx"
                                        name="phone"
                                        className="text-[13px] px-[12px] rounded-[3px] w-full h-[30px] border border-solid border-[#ccc] focus:border-[#66afe9]"
                                        id="phoneInput"
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="text-white text-[13px] border border-solid border-transparent rounded-[4px] font-[400] bg-[rgba(53,126,189,1)] px-[12px] py-[7px] text-center mb-[10px]"
                                        >
                                            Kiểm tra
                                        </button>
                                    </div>
                                </form>
                            )}
                            {status == "email" && (
                                <form action="" className="">
                                    <label className="block text-[13px] mb-[5px]" htmlFor="emailInput">Địa chỉ Email</label>
                                    <FormInput
                                        type="email"
                                        placeholder="email@gmail.com"
                                        name="email"
                                        className="text-[13px] px-[12px] rounded-[3px] w-full h-[30px] border border-solid border-[#ccc] focus:border-[#66afe9]"
                                        id="emailInput"
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="text-white text-[13px] border border-solid border-transparent rounded-[4px] font-[400] bg-[rgba(53,126,189,1)] px-[12px] py-[7px] text-center mb-[10px]"
                                        >
                                            Kiểm tra
                                        </button>
                                    </div>
                                </form>
                            )}
                            {status == "both" && (
                                <form action="" className="">
                                    <label className="block text-[13px] mb-[5px]" htmlFor="phoneInput">Số điện thoại</label>
                                    <FormInput
                                        placeholder="0909 xxx xxx"
                                        name="phone"
                                        className="text-[13px] px-[12px] rounded-[3px] w-full h-[30px] border border-solid border-[#ccc] focus:border-[#66afe9]"
                                        id="phoneInput"
                                    />
                                    <label className="block text-[13px] mb-[5px]" htmlFor="emailInput">Địa chỉ Email</label>
                                    <FormInput
                                        type="email"
                                        placeholder="email@gmail.com"
                                        name="email"
                                        className="text-[13px] px-[12px] rounded-[3px] w-full h-[30px] border border-solid border-[#ccc] focus:border-[#66afe9]"
                                        id="emailInput"
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="text-white text-[13px] border border-solid border-transparent rounded-[4px] font-[400] bg-[rgba(53,126,189,1)] px-[12px] py-[7px] text-center mb-[10px]"
                                        >
                                            Kiểm tra
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}