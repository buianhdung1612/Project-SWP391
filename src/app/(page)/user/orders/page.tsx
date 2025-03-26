"use client"

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { SettingProfileContext } from "../../layout";
import ProfileLeft from "@/app/components/ProfileUser/ProfileLeft";

export default function OrdersHistoryPage() {
    const [data, setData] = useState([]);
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
            const response = await fetch(`https://freshskinweb.onrender.com/home/orders/user/${profile.userID}`);
            const dataResponse = await response.json();
            setData(dataResponse.data.orders)
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
                    Đơn hàng
                </li>
            </ul>
            <div className="flex container mx-auto px-[15px] mt-[40px]">
                <ProfileLeft />
                <div className="px-[15px] flex-1">
                    <div className="uppercase text-[19px] font-[400] text-[#212B25] mb-[27px]">Đơn hàng của bạn</div>
                    {data && (
                        <div>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="h-[35px]">
                                        <th className="w-[18%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary">Đơn hàng</th>
                                        <th className="w-[18%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary">Ngày</th>
                                        <th className="w-[28%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary">Địa chỉ</th>
                                        <th className="w-[18%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary">Giá trị đơn hàng</th>
                                        <th className="w-[18%] text-white p-[5px] text-[14px] border border-solid border-[#ebebeb] bg-secondary">TT thanh toán</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length == 0 && (
                                        <tr className="">
                                            <td colSpan={5} className="border border-solid border-[#ebebeb] text-[#1c1c1c] text-[14px] pt-[20px] pb-[30px] text-center">
                                                Không có đơn hàng nào
                                            </td>
                                        </tr>
                                    )}
                                    {data.length > 0 && (
                                        data.map((item: any, index: number) => (
                                            <tr key={index}>
                                                <td className="w-[18%] cursor-pointer text-[#2F80ED] hover:text-textColor py-[20px] px-[5px] text-[14px] border border-solid border-[#ebebeb] text-center">
                                                    <Link href={`/user/orders/${item.orderId}`}>#{item.orderId}</Link>
                                                </td>
                                                <td className="w-[18%] text-[#1C1C1C] py-[20px] px-[5px] text-[14px] border border-solid border-[#ebebeb] text-center">{item.orderDate.slice(0, 10)}</td>
                                                <td className="w-[28%] text-[#1C1C1C] py-[20px] px-[5px] text-[14px] border border-solid border-[#ebebeb] text-center">{item.address}</td>
                                                <td className="w-[18%] text-[#1C1C1C] py-[20px] px-[5px] text-[14px] border border-solid border-[#ebebeb] text-center">{(item.totalPrice).toLocaleString("en-US")}<sup className="underline">đ</sup></td>
                                                {item.orderStatus == "PENDING" && (
                                                    <td className="w-[18%] text-[#1C1C1C] py-[20px] px-[5px] text-[14px] border border-solid border-[#ebebeb] text-center">Đang xử lý</td>
                                                )}
                                                {item.orderStatus == "CANCELED" && (
                                                    <td className="w-[18%] text-[#1C1C1C] py-[20px] px-[5px] text-[14px] border border-solid border-[#ebebeb] text-center">Đã hủy</td>
                                                )}
                                                {item.orderStatus == "COMPLETED" && (
                                                    <td className="w-[18%] text-[#1C1C1C] py-[20px] px-[5px] text-[14px] border border-solid border-[#ebebeb] text-center">Đã xác nhận</td>
                                                )}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}