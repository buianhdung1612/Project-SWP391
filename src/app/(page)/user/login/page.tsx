"use client"

import FormButton from "@/app/components/Form/FormButton";
import FormFaceGoogle from "@/app/components/Form/FormFaceGoogle";
import FormInput from "@/app/components/Form/FormInput";
import Link from "next/link";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

export default function LoginPage() {
    const [resetPassword, setResetPassword] = useState(false);

    const handleSubmitLogin = (event: any) => {
        event.preventDefault();
       
    }

    return (
        <>
            <div className="bg-[#F6F6F6] pb-[50px] pt-[15px]">
                <ul className="flex items-center container mx-auto px-8 mb-[40px]">
                    <li>
                        <Link href="/" className="flex items-center">
                            <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                            <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                        </Link>
                    </li>
                    <li className="text-secondary text-[15px] font-[400]">
                        Đăng nhập tài khoản
                    </li>
                </ul>
                <div className="container mx-auto w-[432px] bg-[#fff] p-[10px]">
                    <form onSubmit={handleSubmitLogin} className=" mt-[15px] text-center rounded-[10px] relative">
                        <h1 className="text-primary text-[26px] font-[400] uppercase mb-[35px] mt-[10px] login">Đăng nhập</h1>
                        <FormInput
                            placeholder="Tên tài khoản"
                            name="account"
                        />
                        <FormInput
                            type="password"
                            placeholder="Mật khẩu"
                            name="password"
                        />
                        <FormButton text="Đăng nhập" />
                    </form>
                    <div className="flex items-center justify-between mb-[15px]">
                        <span
                            className="text-[#333] text-[14px] hover:text-primary cursor-pointer"
                            onClick={() => setResetPassword(!resetPassword)}
                        >
                            Quên mật khẩu?
                        </span>
                        <Link href="/user/register" className="text-[#333] text-[14px] hover:text-primary">Đăng ký tại đây</Link>
                    </div>
                    <form action="" className={(resetPassword ? "block" : "hidden")}>
                        <FormInput
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <FormButton text="Lấy lại mật khẩu" />
                    </form>
                    <FormFaceGoogle info="hoặc đăng nhập qua" />
                </div>
            </div>

        </>
    )
}