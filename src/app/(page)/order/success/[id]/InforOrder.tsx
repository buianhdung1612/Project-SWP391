"use client"

import { useSelector } from "react-redux";
import InforOderText from "./InforOrderText";
import InforOrderTitle from "./InforTitleText";

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
                        <InforOrderTitle title="Thông tin mua hàng" />
                        <InforOderText info={fullname} />
                        <InforOderText info={email} />
                        <InforOderText info={phone} />
                    </div>
                    <div className="w-[50%] pl-[16px]">
                        <InforOrderTitle title="Địa chỉ nhận hàng" />
                        <InforOderText info={fullname} />
                        <InforOderText info={address} />
                        <InforOderText info={dataAddress} />
                        <InforOderText info={phone} />
                    </div>
                </div>
                <div className="w-full flex justify-between mt-[10px]">
                    <div className="w-[50%] pr-[16px]">
                        <InforOrderTitle title="Phương thức thanh toán" />
                        <InforOderText info={(method == "bank") ? "Chuyển khoản" : "Thanh toán khi nhận hàng"} />
                    </div>
                    <div className="w-[50%] pl-[16px]">
                        <InforOrderTitle title="Phương thức vận chuyển" />
                        <InforOderText info="Giao hàng tận nơi" />
                    </div>
                </div>
            </div>
        </>
    )
}