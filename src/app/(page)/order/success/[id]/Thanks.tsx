"use client"

import { useSelector } from "react-redux";

export default function Thanks() {
    const email = useSelector((state: any) => state.orderReducer.email);

    return (
        <>
            <div className="w-full px-[14px] flex items-center">
                <div className="w-[90px] aspect-square mr-[20px] mb-[10px]">
                    <img src="/demo/success.png" className="w-full h-full object-cover" />
                </div>
                <div className="w-[63%]">
                    <div className="text-[18px] font-[600] text-[#333]">Cảm ơn bạn đã đặt hàng</div>
                    <div className="my-[14px] text-[14px] text-[#46484A]">
                        Một email xác nhận đã được gửi tới {email}.
                        Xin vui lòng kiểm tra email của bạn
                    </div>
                </div>
            </div>
        </>
    )
}