"use client";

import { useContext } from "react";
import { SettingContext } from "../../layout";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

export default function Policy6() {
    const setting = useContext(SettingContext);

    return (
        <>
            <div className="container mx-auto mt-[10px]">
                <ul className="flex items-center container mx-auto mb-[30px]">
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                            <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                        </Link>
                    </li>
                    <li className="text-secondary text-[15px] font-[400]">
                        Điều khoản sử dụng
                    </li>
                </ul>
                <div className="uppercase mb-[15px] text-[16px] text-[#00090f] hover:text-secondary cursor-pointer font-[650]">Điều khoản sử dụng</div>
                <div className="text-[14px]" dangerouslySetInnerHTML={{ __html: setting?.policy6 || '' }} />
            </div>
        </>
    );
}