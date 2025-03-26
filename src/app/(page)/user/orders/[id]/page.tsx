"use client"

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import ProfileLeft from "@/app/components/ProfileUser/ProfileLeft";
import { SettingProfileContext } from "@/app/(page)/layout";
import { useParams } from "next/navigation";

export default function DetailOrderUserPage() {
    const { id } = useParams();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        totalPrice: 0,
        paymentMethod: "",
        orderDate: "",
        orderItems: [],
        orderStatus: ""
    });
    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    if (profile.firstName === "") {
        location.href = "/user/login"
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/orders/${id}`);
            const dataResponse = await response.json();
            setData(dataResponse.data)
        };

        fetchData();
    }, [])

    return (
        <>
            <ul className="flex items-center container mx-auto px-3">
                <li>
                    <Link href="/" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                        <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                    </Link>
                </li>
                <li>
                    <Link href="/user/profile" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Tài khoản</span>
                        <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                    </Link>
                </li>
                <li className="text-secondary text-[15px] font-[400]">
                    Đơn hàng #{id}
                </li>
            </ul>
            <div className="flex container mx-auto px-[15px] mt-[40px]">
                <ProfileLeft />
                <div className="px-[15px] flex-1">
                    <div className="text-[19px] font-[400] text-[#212B25] mb-[27px]">Chi tiết đơn hàng #{id}</div>
                    {data.orderStatus == "PENDING" && (
                        <div className="text-[14px] text-textColor">Trạng thái thanh toán: <span className="font-[600] text-[#E49C06]">Đang xử lý</span></div>
                    )}
                    {data.orderStatus == "CANCELED" && (
                        <div className="text-[14px] text-textColor">Trạng thái thanh toán: <span className="font-[600] text-[#DD153C]">Đã hủy</span></div>
                    )}
                    {data.orderStatus == "COMPLETED" && (
                        <div className="text-[14px] text-textColor">Trạng thái thanh toán: <span className="font-[600] text-[#33A140]">Đã xác nhận</span></div>
                    )}
                    <div className="pl-[15px] mt-[30px] flex">
                        <div className="w-[60%] pr-[10px]">
                            <div className="uppercase text-[16px] font-[350] mb-[6px]">Địa chỉ giao hàng</div>
                            <div className="h-[110px] pt-[13px] pr-[25px] pb-[30px] pl-[20px] rounded-[5px] border border-solid border-[#e0e0e0]">
                                <div className="uppercase font-[650] text-[14px] text-[#212B25] mb-[8px]">{data.firstName} {data.lastName}</div>
                                <div className="text-[14px] mb-[8px] text-[#212B25]">Địa chỉ: {data.address}</div>
                                <div className="text-[14px] mb-[8px] text-[#212B25]">Số điện thoại: {data.phoneNumber}</div>
                            </div>
                        </div>
                        <div className="flex-1 pl-[5px]">
                            <div className="uppercase text-[16px] font-[350] mb-[6px]">Thanh toán</div>
                            <div className="h-[110px] pt-[13px] pr-[25px] pb-[30px] pl-[20px] rounded-[5px] border border-solid border-[#e0e0e0]">
                                {data.paymentMethod == "CASH" ? "Thanh toán khi nhận hàng" : "Chuyển khoản"}
                            </div>
                        </div>
                    </div>
                    <div className="ml-[15px] pl-[20px] border border-solid border-[#e0e0e0] mt-[24px] rounded-[5px]">
                        <table className="w-full">
                            <thead className="w-full">
                                <tr className="w-full">
                                    <td className="w-[55%] text-textColor text-left py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">Sản phẩm</td>
                                    <td className="w-[15%] text-textColor text-center py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">Đơn giá</td>
                                    <td className="w-[15%] text-textColor text-center py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">Số lượng</td>
                                    <td className="w-[15%] text-textColor text-center py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">Tổng</td>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                {data.orderItems.map((item: any, index: number) => (
                                    <tr key={index} className="w-full">
                                        <td className="w-[55%] text-left py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">
                                            <div className="w-full flex items-center justify-center">
                                                <div className="w-[90px] aspect-square">
                                                    <img src={item.productVariant.product.thumbnail[0]} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="text-[14px] flex-1 mx-[15px] text-textColor">{item.productVariant.product.title}</div>
                                            </div>

                                        </td>
                                        <td className="w-[15%] text-textColor text-center py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">{(item.productVariant.price * (1 - item.productVariant.product.discountPercent/100)).toLocaleString("en-US")}<sup className="underline">đ</sup></td>
                                        <td className="w-[15%] text-textColor text-center py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">{item.quantity}</td>
                                        <td className="w-[15%] text-textColor text-center py-[25px] text-[16px] font-[350] border-b border-solid border-[#e0e0e0]">{(item.productVariant.price * (1 - item.productVariant.product.discountPercent/100) * item.quantity).toLocaleString("en-US")}<sup className="underline">đ</sup></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}