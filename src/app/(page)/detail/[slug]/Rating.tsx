"use client"

import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { SettingProfileContext } from "../../layout";

export default function Rating() {
    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    return (
        <>
            <div className="container mx-auto">
                <div className="">
                    <div className="text-[18px] font-[700] mb-[10px]">Đánh giá</div>
                    <div className="text-[13px] font-[400]">Đánh giá trung bình</div>
                    <div className="flex items-center">
                        <div className="w-[30%] text-center">
                            <span className="font-[700] text-[80px] text-[#f60]">4.9</span>
                            <span className="flex items-center justify-center mb-[10px]">
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                            </span>
                            <span>122 nhận xét</span>
                        </div>
                        <div className="w-[40%] pt-[35px]">
                            <div className="flex items-center mb-[5px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[5px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[10px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[10px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[10px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-[13px]">Chia sẻ nhận xét của bạn về sản phẩm này</div>
                            <button className="text-[15px] mt-[15px] font-bold text-white bg-[#F26800] h-[34px] px-[10px] rounded-[3px]">Viết Bình luận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}