import FormButton from "@/app/components/Form/FormButton";
import FormFaceGoogle from "@/app/components/Form/FormFaceGoogle";
import FormInput from "@/app/components/Form/FormInput";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <div className="bg-[#F6F6F6] py-[50px]">
                <form action="" className="container mx-auto w-[432px] bg-[#fff] p-[10px] mt-[35px] text-center rounded-[10px] relative">
                    <h1 className="text-primary text-[26px] font-[400] uppercase mb-[35px] mt-[10px] register">Đăng ký</h1>
                    <p className="text-[#00090f] text-[14px] mb-[15px]">Đã có tài khoản, đăng nhập <Link href="/user/login" className="text-primary hover:text-[#00090f]">tại đây</Link></p>
                    <FormInput
                        placeholder="Họ"
                        name="firstname"
                    />
                    <FormInput
                        placeholder="Tên"
                        name="lastname"
                    />
                    <FormInput
                        placeholder="Tên tài khoản"
                        name="account"
                    />
                    <FormInput
                        placeholder="Số điện thoại"
                        name="lasphonetname"
                    />
                    <FormInput
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                    />
                    <FormButton text="Đăng ký"/>
                    <FormFaceGoogle info="Hoặc đăng nhập bằng"/>
                </form>
            </div>
        </>
    )
}