import FormButton from "@/app/components/Form/FormButton";
import FormFaceGoogle from "@/app/components/Form/FormFaceGoogle";
import FormInput from "@/app/components/Form/FormInput";
import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <div className="bg-[#F6F6F6] py-[50px]">
                <form action="" className="container mx-auto w-[432px] bg-[#fff] p-[10px] mt-[35px] text-center rounded-[10px] relative">
                    <h1 className="text-primary text-[26px] font-[400] uppercase mb-[35px] mt-[10px] login">Đăng nhập</h1>
                    <FormInput
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <FormInput
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                    />
                    <FormButton text="Đăng nhập"/>
                    <div className="flex items-center justify-between mb-[15px]">
                        <Link href="/user/password/forgot" className="text-[#333] text-[14px] hover:text-primary">Quên mật khẩu?</Link>
                        <Link href="/user/register" className="text-[#333] text-[14px] hover:text-primary">Đăng ký tại đây</Link>
                    </div>
                    <FormFaceGoogle info="hoặc đăng nhập qua"/>
                </form>
            </div>

        </>
    )
}