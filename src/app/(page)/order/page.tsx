import FormInputCheckout from "@/app/components/Form/FormInputCheckout";

export default function OrderPage() {
    return (
        <>
            <form action="" className="flex">
                <div className="w-[60%] pl-[15%] pr-[2%] py-[25px] flex flex-wrap items-center justify-center">
                    <div className="w-[206px] h-[82px] mb-[21px]">
                        <img src="/logo.svg" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-[28px]">
                        <div className="">
                            <h2 className="text-[19px] font-[550] mb-[10px]">Thông tin nhận hàng</h2>
                            <FormInputCheckout label="Email" type="email" name="email" id="email" required/>
                            <FormInputCheckout label="Họ và tên" name="fullname" id="fullname" required/>
                            <FormInputCheckout label="Số điện thoại (tùy chọn)" name="phone" id="phone"/>
                            <FormInputCheckout label="Địa chỉ (tùy chọn)" name="address" id="address"/>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="flex-1 bg-[#FAFAFA] pr-[15%]">dsadas</div>
            </form>

        </>
    )
}