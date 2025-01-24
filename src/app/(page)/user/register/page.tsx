import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <div className="bg-[#F6F6F6] py-[50px]">
                <form action="" className="container mx-auto w-[432px] bg-[#fff] p-[10px] mt-[35px] text-center rounded-[10px] relative">
                    <h1 className="text-primary text-[26px] font-[400] uppercase mb-[35px] mt-[10px] register">Đăng ký</h1>
                    <p className="text-[#00090f] text-[14px] mb-[15px]">Đã có tài khoản, đăng nhập <Link href="/user/login" className="text-primary hover:text-[#00090f]">tại đây</Link></p>
                    <input
                        type="text"
                        placeholder="Họ"
                        name="firstname"
                        className="mb-[15px] w-[412px] h-[45px] placeholder-[#333] px-[20px] rounded-[4px] border border-solid border-[#e1e1e1]"
                    />
                    <input
                        type="text"
                        placeholder="Tên"
                        name="lastname"
                        className="mb-[15px] w-[412px] h-[45px] placeholder-[#333] px-[20px] rounded-[4px] border border-solid border-[#e1e1e1]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="mb-[15px] w-[412px] h-[45px] placeholder-[#333] px-[20px] rounded-[4px] border border-solid border-[#e1e1e1]"
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        name="phone"
                        className="mb-[15px] w-[412px] h-[45px] placeholder-[#333] px-[20px] rounded-[4px] border border-solid border-[#e1e1e1]"
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        className="mb-[15px] w-[412px] h-[45px] placeholder-[#333] px-[20px] rounded-[4px] border border-solid border-[#e1e1e1]"
                    />
                    <button
                        type="submit"
                        className="mb-[15px] w-full h-[45px] border boder-solid border-primary uppercase text-white bg-primary text-[12px] text-center py-[10px] rounded-[4px] transi hover:text-primary hover:bg-white"
                    >
                        Đăng ký
                    </button>
                    <div className="text-center text-[14px] text-[#00090f] mb-[15px]">Hoặc đăng nhập bằng</div>
                    <div className="flex items-center justify-center mr-[5px] mb-[30px]">
                        <div className="w-[129px] h-[36px]">
                            <img src="/demo/fb-btn.svg" className="w-full h-full object-cover cursor-pointer" />
                        </div>
                        <div className="w-[129px] h-[36px]">
                            <img src="/demo/gp-btn.svg" className="w-full h-full object-cover cursor-pointer ml-[5px]" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}