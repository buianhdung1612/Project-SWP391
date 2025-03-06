"use client"

import { useState } from "react"
import { CiHeart, CiShoppingCart } from "react-icons/ci";

export default function Action() {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (event: any): void => {
        setQuantity(parseInt(event.target.value));
    }

    const handleClickDecrease = (): void => {
        if (quantity - 1 >= 0) {
            setQuantity(quantity - 1);
        }
    }
    
    return (
        <>
            <div className="text-[14px] font-[500] text-[#00090f] my-[10px]">Số lượng:</div>
            <div className="flex items-center">
                <div className="mb-[10px] flex">
                    <button
                        className="hover:bg-primary hover:text-white text-[18px] w-[40px] h-[40px] text-[#333] flex justify-center items-center rounded-tl-[40px] rounded-bl-[40px] border border-solid border-[#ddd]"
                        onClick={() => handleClickDecrease}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        value={quantity}
                        onChange={() => handleChange(event)}
                        className="text-[#00090f] text-[16px] block w-[60px] h-[40px] outline-none text-center border-y border-solid border-[#ddd]"
                    />
                    <button
                        className="hover:bg-primary hover:text-white text-[18px] w-[40px] h-[40px] text-[#333] flex justify-center items-center rounded-tr-[40px] rounded-br-[40px] border border-solid border-[#ddd]"
                        onClick={() => setQuantity(quantity + 1)}>
                        +
                    </button>
                </div>
                <button className="px-[40px] flex items-center bg-[#000] hover:bg-secondary rounded-[40px] mb-[10px] ml-[15px]">
                    <CiShoppingCart className="text-white text-[24px]" />
                    <span className="ml-[5px] text-[12px] uppercase text-white font-[400] h-[40px] w-auto flex items-center">Thêm vào giỏ hàng</span>
                </button>
                <button className="buy-now uppercase text-[12px] text-white font-[400] h-[40px] w-auto rounded-[40px] mb-[10px] ml-[15px] px-[30px]">Mua ngay</button>
                <div className="cursor-pointer rounded-full border border-solid hover:border-primary hover:text-primary border-black p-[5px] mb-[10px] ml-[15px]">
                    <CiHeart className="w-[28px] h-[28px] " />
                </div>
            </div>
        </>
    )
}