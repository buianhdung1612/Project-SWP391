"use client"

import { useSelector } from "react-redux";

export default function InforOrder() {
    const email = useSelector((state: any) => state.orderReducer.email);
    const fullname = useSelector((state: any) => state.orderReducer.fullname);
    const phone = useSelector((state: any) => state.orderReducer.phone);
    const address = useSelector((state: any) => state.orderReducer.address);
    const method = useSelector((state: any) => state.orderReducer.method);

    const province = useSelector((state: any) => state.orderReducer.province);
    const provinceData = province.split('+')[1];
    const district = useSelector((state: any) => state.orderReducer.district);
    const districtData = district.split('+')[1];
    const ward = useSelector((state: any) => state.orderReducer.ward);
    const wardData = ward.split('+')[1];
    const dataAddress = `${provinceData}, ${districtData}, ${wardData}`;

    return (
        <>
            <div className="w-full p-[16px] mx-[32px] mt-[16px] border border-solid border-[#dadada]">
                <div className="w-full flex justify-between">
                    <div className="w-[50%] pr-[16px]">
                        <div className="text-[20px] text-[#333]">Thông tin mua hàng</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{fullname}</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{email}</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{phone}</div>
                    </div>
                    <div className="w-[50%] pl-[16px]">
                        <div className="text-[20px] text-[#333]">Địa chỉ nhận hàng</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{fullname}</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{address}</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{dataAddress}</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{phone}</div>
                    </div>
                </div>
                <div className="w-full flex justify-between mt-[10px]">
                    <div className="w-[50%] pr-[16px]">
                        <div className="text-[20px] text-[#333]">Phương thức thanh toán</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">{(method == "bank") ? "Chuyển khoản" : "Thanh toán khi nhận hàng"}</div>
                    </div>
                    <div className="w-[50%] pl-[16px]">
                        <div className="text-[20px] text-[#333]">Phương thức vận chuyển</div>
                        <div className="text-[14px] text-[#46484a] py-[4px]">Giao hàng tận nơi</div>
                    </div>
                </div>
            </div>
        </>
    )
}