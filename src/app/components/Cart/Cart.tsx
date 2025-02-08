"use client"

import Link from "next/link";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

export default function Cart() {
    interface CartItem {
        image: string,
        title: string,
        priceNew: number,
        link: string,
        volume: number,
        quantity: number
    }

    const dataInit: CartItem[] = [
        {
            image: "/demo/danhmuc_1.webp",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceNew: 179000,
            link: "#",
            volume: 30,
            quantity: 2
        },
        {
            image: "/demo/danhmuc_1.webp",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceNew: 179000,
            link: "#",
            volume: 30,
            quantity: 1
        }
    ];

    // Price Total and Quantity Total
    const priceInit: number = dataInit.reduce((sum: number, item: CartItem) => {
        return sum + item.priceNew * item.quantity
    }, 0);

    const totalQuantityInit: number = dataInit.reduce((sum: number, item: CartItem) => {
        return sum + item.quantity
    }, 0);

    const [priceTotal, setPriceTotal] = useState(priceInit)
    const [quantityTotal, setQuantityTotal] = useState(totalQuantityInit)
    //End Price Total

    // Hover Item Cart
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);
    // End Hover Item Cart

    // Action Change Quantity Product
    const [data, setData] = useState(dataInit);

    const handleChange = (event: any, index: number): void => {
        const updatedData = [...data];
        const newQuantity = parseInt(event.target.value);
        if (newQuantity >= 0) {
            updatedData[index].quantity = newQuantity;
            setData(updatedData);

            const priceTotalUpdated: number = updatedData.reduce((sum: number, item: CartItem) => {
                return sum += item.priceNew * item.quantity
            }, 0);

            const quantityTotalUpdated: number = updatedData.reduce((sum: number, item: CartItem) => {
                return sum += item.quantity
            }, 0);

            setPriceTotal(priceTotalUpdated);
            setQuantityTotal(quantityTotalUpdated);
        }
    }

    const handleClickDecrease = (event: any, index: number): void => {
        event.preventDefault();

        const updatedData = [...data];
        if (updatedData[index].quantity - 1 >= 0) {
            updatedData[index].quantity -= 1;
            setData(updatedData);
            setPriceTotal(priceTotal - updatedData[index].priceNew);
            setQuantityTotal(quantityTotal - 1);
        }
    }

    const handleClickIncrease = (event: any, index: number): void => {
        event.preventDefault();

        const updatedData = [...data];
        updatedData[index].quantity += 1;
        setData(updatedData);
        setPriceTotal(priceTotal + updatedData[index].priceNew);
        setQuantityTotal(quantityTotal + 1);
    }
    // End Action Change Quantity Product

    // Delete Product
    const handleDeleteItem = (indexDelete: number): void => {
        const updatedData = data.filter((item: CartItem, index: number) => index !== indexDelete);
        setData(updatedData);

        const priceTotalUpdated: number = updatedData.reduce((sum: number, item: CartItem) => {
            return sum += item.priceNew * item.quantity
        }, 0);

        const quantityTotalUpdated: number = updatedData.reduce((sum: number, item: CartItem) => {
            return sum += item.quantity
        }, 0);

        setPriceTotal(priceTotalUpdated);
        setQuantityTotal(quantityTotalUpdated);
    }
    // End Delete Product

    return (
        <>
            <Link href="#">
                <div className="flex items-center ml-[15px] mb-[-30px] pb-[30px] relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <GrCart className="text-[28px]" />
                    <span
                        className="h-[16px] w-[16px] rounded-full flex items-center justify-center absolute bg-primary text-white text-[10px] top-[-2px] left-[18px]"
                    >
                        {quantityTotal}
                    </span>
                </div>
            </Link>
            {isHover && quantityTotal == 0 && (
                <div
                    className="cart-hover-show w-[340px] py-[15px] flex flex-wrap justify-center items-center rounded-[5px] bg-[#fff] overflow-hidden z-[999] absolute top-[46px] right-[0px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="w-[32px] aspect-square flex items-center justify-center">
                        <img src="/demo/no-cart.webp" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-[15px] text-[14px] text-textColor">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                </div>
            )}
            {isHover && quantityTotal != 0 && (
                <div
                    className="cart-hover-show w-[340px] rounded-[5px] bg-[#fff] overflow-hidden z-[999] absolute top-[46px] right-[0px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <form action="" className="px-[10px]">
                        {data.map((item: any, index: number) => (
                            <div key={index} className="p-[10px] max-h-[360px] overflow-y-auto flex border-b border-solid boder-[#ddd]">
                                <div className="w-[20%]">
                                    <div className="w-[80px] aspect-square">
                                        <Link href="#">
                                            <img src={item.image} className="w-full h-full object-cover" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-[80%] ml-[15px]">
                                    <div className="text-[13px] font-[400] text-textColor pr-[5px] line-clamp-2 hover:text-secondary cursor-pointer">{item.title}</div>
                                    <span className="text-[12px] text-[#9e9e9e]">{item.volume}ml</span>
                                    <div className="flex items-center justify-between mt-[4px]">
                                        <div className="flex">
                                            <button
                                                className="hover:text-white text-[14px] w-[28px] h-[28px] text-[#222] flex justify-center items-center rounded-tl-[15px] rounded-bl-[15px] border border-solid border-[#e5e5e5]"
                                                onClick={(event) => handleClickDecrease(event, index)}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                name="quantity"
                                                id="quantity"
                                                value={item.quantity}
                                                onChange={(event) => handleChange(event, index)}
                                                className="text-[#00090f] text-[16px] block w-[60px] h-[28] outline-none text-center border-y border-solid border-[#ddd]"
                                            />
                                            <button
                                                className="hover:text-white text-[14px] w-[28px] h-[28px] text-[#222] flex justify-center items-center rounded-tr-[15px] rounded-br-[15px] border border-solid border-[#e5e5e5]"
                                                onClick={(event) => handleClickIncrease(event, index)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="text-primary">{(item.priceNew * item.quantity).toLocaleString("en-US")}<sup className="underline">đ</sup></div>
                                    </div>
                                </div>
                                <div onClick={() => handleDeleteItem(index)} className="">
                                    <CiCircleRemove className="text-[22px] font-[400] text-textColor cursor-pointer hover:text-[#c90000]" />
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center justify-between mt-[10px]">
                            <div className="text-[15px] font-[350]">Tổng tiền:</div>
                            <div className="text-[#c90000] text-[15px] font-[600]">{priceTotal.toLocaleString("en-US")}<sup className="underline">đ</sup></div>
                        </div>
                        <button
                            className="mt-[10px] mb-[10px] text-[12px] rounded-[4px] uppercase w-full h-[40px] bg-primary hover:bg-white text-white hover:text-primary py-[10px] border border-solid border-primary"
                            type="submit"
                        >
                            Thanh toán
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}