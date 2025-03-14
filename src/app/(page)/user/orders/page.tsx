"use client"

import Link from "next/link";
import { useContext } from "react";
import { MdNavigateNext } from "react-icons/md";
import { SettingProfileContext } from "../../layout";
import ProfileLeft from "@/app/components/ProfileUser/ProfileLeft";

export default function OrdersHistoryPage() {
    const settingProfile = useContext(SettingProfileContext);
    
    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    return(
        <>
            <ul className="flex items-center container mx-auto px-3">
                <li>
                    <Link href="/" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                        <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                    </Link>
                </li>
                <li>
                    <Link href="/user/profile" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Tài khoản</span>
                        <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                    </Link>
                </li>
                <li className="text-secondary text-[15px] font-[400]">
                    Đơn hàng
                </li>
            </ul>
            <div className="flex container mx-auto px-[15px] mt-[40px]">
                <ProfileLeft/>
                <div className="px-[15px] flex-1">
                    <div className="uppercase text-[19px] font-[400] text-[#212B25] mb-[27px]">Đơn hàng của bạn</div>
                    {profile.orders && (
                        <div>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="h-[35px]">
                                        <th className="w-[21%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary text-[14px]">Đơn hàng</th>
                                        <th className="w-[13%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary text-[14px]">Ngày</th>
                                        <th className="w-[15%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary text-[14px]">Địa chỉ</th>
                                        <th className="w-[30%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary text-[14px]">Giá trị đơn hàng</th>
                                        <th className="w-[21%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary text-[14px]">TT thanh toán</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profile.orders.length == 0 ? (
                                        <tr className="">
                                            <td colSpan={5} className="border border-solid border-[#ebebeb] text-[#1c1c1c] text-[14px] pt-[20px] pb-[30px] text-center">
                                                Không có đơn hàng nào
                                            </td>
                                        </tr>
                                    ) : (
                                        <>
                                        <tr>
                                            <td>
                                                Không có đơn hàng nào
                                            </td>
                                        </tr>
                                        </>
                                    )}
                                    <tr>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}