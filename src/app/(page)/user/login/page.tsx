export default function LoginPage() {
    return (
        <>
            <div className="bg-[#F6F6F6] py-[50px]">
                <form action="" className="container mx-auto w-[432px] bg-[#fff] p-[10px] mt-[35px] text-center rounded-[10px] relative">
                    <h1 className="text-primary text-[26px] font-[400] uppercase mb-[35px] mt-[10px] log">Đăng nhập</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
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
                        Đăng nhập
                    </button>
                    <div className="flex items-center justify-between mb-[15px]">
                        <span className="text-[#333] text-[14px] hover:text-primary">Quên mật khẩu?</span>
                        <span className="text-[#333] text-[14px] hover:text-primary">Đăng ký tại đây</span>
                    </div>
                    <div className="text-center text-[14px] text-[#00090f] mb-[15px]">hoặc đăng nhập qua</div>
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