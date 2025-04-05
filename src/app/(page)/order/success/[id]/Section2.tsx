"use client"

import { useContext } from "react";
import { useParams } from "next/navigation";
import { SuccessOrderContext } from "./SuccessOrderContext";
import Products from "./Products";

export default function Section2() {
    const { id } = useParams();
    const { totalPrice, products } = useContext(SuccessOrderContext);
    let totalProductPrice = 0;
    for(const item of products){
        totalProductPrice += item.subtotal;
    }
    const feeShip = totalPrice - totalProductPrice;

    return (
        <>
            <div className="flex-1 ml-[100px] bg-[#E6E8EA]">
                <div className="text-[16px] font-[550] px-[20px] py-[7px] border-b-2 border-solid border-white">Đơn hàng #{id}</div>
                <Products/>
                <div className="px-[20px] py-[15px] border-t-2 border-b-2 border-solid border-white">
                    <div className="flex items-center justify-between text-[#46484a] text-[14px]">
                        <span>Tạm tính</span>
                        <span>{(totalProductPrice).toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                    </div>
                    <div className="flex items-center justify-between text-[#46484a] text-[14px] mt-[15px]">
                        <span>Phí vận chuyển</span>
                        {totalPrice ? (
                            <span>{feeShip.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        ) : (   
                            <span>-</span>
                        )}
                    </div>
                </div>
                <div className="flex justify-between px-[20px] py-[15px]">
                    <div className="text-[18px] text-[#46484a] ">Tổng cộng</div>
                    <span className="text-[19px] text-[#2a9dcc]">{totalPrice.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                </div>
            </div>
        </>
    )
}