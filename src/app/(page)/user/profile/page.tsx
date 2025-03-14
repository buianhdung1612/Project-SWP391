"use client"

import Link from "next/link";
import { useContext } from "react";
import { MdNavigateNext } from "react-icons/md";
import { SettingProfileContext } from "../../layout";

export default function ProfileUser() {
    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    return (
        <>
            <ul className="flex items-center container mx-auto px-3">
                <li>
                    <Link href="/" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                        <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                    </Link>
                </li>
                <li className="text-secondary text-[15px] font-[400]">
                    Trang khách hàng
                </li>
            </ul>
            <div className="flex items-center container mx-auto px-[15px] mt-[40px]">
                <div className="w-[304px]">
                    <div className="uppercase text-[19px] font-[400] text-[#212B25] mb-[7px]">Trang tài khoản</div>
                    <div className="text-[14px] font-[700] text-[#212B25] mb-[28px]">Xin chào, <span className="text-primary">Anh Dũng Bùi</span> !</div>
                </div>
            </div>
        </>
    )
}