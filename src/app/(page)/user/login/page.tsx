"use client"

import FormButton from "@/app/components/Form/FormButton";
import FormFaceGoogle from "@/app/components/Form/FormFaceGoogle";
import FormInput from "@/app/components/Form/FormInput";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [resetPassword, setResetPassword] = useState(false);

    return (
        <>
            <div className="bg-[#F6F6F6] py-[50px]">
                <div className="container mx-auto w-[432px] bg-[#fff] p-[10px]">
                    <form action="" className=" mt-[15px] text-center rounded-[10px] relative">
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