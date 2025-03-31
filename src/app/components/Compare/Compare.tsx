"use client"

import { SettingProfileContext } from "@/app/(page)/layout";
import Link from "next/link";
import { useContext, useState } from "react";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineCompare } from "react-icons/md";

export default function Compare() {
    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;
    console.log(profile);

    // Hover Item Cart
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);
    // End Hover Item Cart

    return (
        <>
            <Link href="/compare">
                <div className="flex items-center ml-[13px] mb-[-30px] pb-[30px] relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <IoIosGitCompare className="text-[32px]" />
                    {profile.productComparisonId?.products && profile.productComparisonId.products?.length > 0 ? (
                        <span className="h-[16px] w-[16px] rounded-full flex items-center justify-center absolute bg-primary text-white text-[10px] top-[1px] left-[18px]">{profile?.productComparisonId?.products?.length}</span>
                    ) : (
                        <span className="h-[16px] w-[16px] rounded-full flex items-center justify-center absolute bg-primary text-white text-[10px] top-[1px] left-[18px]">0</span>
                    )}
                </div>
            </Link>
            {isHover && profile.productComparisonId?.products?.length == 0 && (
                <div
                    className="cart-hover-show w-[340px] py-[15px] px-[10px] flex flex-wrap justify-center items-center rounded-[5px] bg-[#fff] overflow-hidden z-[999] absolute top-[46px] right-[0px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <MdOutlineCompare className="text-[32px]" />
                    <p className="mt-[15px] text-[14px] text-textColor text-center">Không có sản phẩm nào trong danh sách so sánh của bạn</p>
                </div>
            )}
            {isHover && profile.productComparisonId?.products?.length != 0 && (
                <div
                    className="cart-hover-show w-[340px] rounded-[5px] bg-[#fff] overflow-hidden z-[999] absolute top-[46px] right-[0px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="px-[10px]">
                        {profile.productComparisonId?.products?.map((item: any, index: number) => (
                            <div key={index} className="p-[10px] max-h-[360px] overflow-y-auto flex border-b border-solid boder-[#ddd]">
                                <div className="w-[18%]">
                                    <div className="w-[60px] aspect-square">
                                        <Link href={`/detail/${item.slug}`}>
                                            <img src={item.thumbnail[0]} className="w-full h-full object-cover" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex-1 ml-[35px]">
                                    <Link href={`/detail/${item.slug}`} className="text-[13px] font-[400] text-textColor pr-[5px] line-clamp-2 hover:text-secondary cursor-pointer">{item.title}</Link>
                                    <span className="text-[12px] text-primary">{item.brand?.title}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            )}
        </>
    )
}