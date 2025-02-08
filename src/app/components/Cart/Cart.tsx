import Link from "next/link";
import { useState } from "react";
import { GrCart } from "react-icons/gr";

export default function Cart() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
        <>
            <Link href="#">
                <div className="flex items-center ml-[15px] relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <GrCart className="text-[28px]" />
                    <span
                        className="h-[16px] w-[16px] rounded-full flex items-center justify-center absolute bg-primary text-white text-[10px] top-[-2px] left-[18px]"
                    >
                        0
                    </span>
                </div>
            </Link>
            {isHover && (
                <div className="cart-hover-show w-[340px] py-[15px] flex flex-wrap justify-center items-center rounded-[5px] bg-[#fff] overflow-hidden z-[999] absolute top-[46px] right-[0px]">
                    <div className="w-[32px] aspect-square flex items-center justify-center">
                        <img src="/demo/no-cart.webp" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-[15px] text-[14px] text-textColor">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                </div>
            )}
        </>
    )
}