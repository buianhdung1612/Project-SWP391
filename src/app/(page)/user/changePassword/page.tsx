"use client"

import Link from "next/link";
// import { useContext } from "react";
import { MdNavigateNext } from "react-icons/md";
// import { SettingProfileContext } from "../../layout";
import ProfileLeft from "@/app/components/ProfileUser/ProfileLeft";

export default function ChangePasswordPage() {
    // const settingProfile = useContext(SettingProfileContext);
    
    // if (!settingProfile) {
    //     return null;
    // }

    // const { profile } = settingProfile;

    return(
        <>
            <ul className="flex items-center container mx-auto px-3">
                <li>
                    <Link href="/" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                        <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                    </Link>
                </li>
                <li className="text-secondary text-[15px] font-[400]">
                    Thay đổi mật khẩu
                </li>
            </ul>
            <div className="flex container mx-auto px-[15px] mt-[40px]">
                <ProfileLeft/>
                
            </div>
        </>
    )
}