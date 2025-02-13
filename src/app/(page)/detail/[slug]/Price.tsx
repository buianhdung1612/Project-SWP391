"use client"

import { useContext, useState } from "react";
import { Section1Context } from "./Section1";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { cartAddNewProduct } from "@/app/(actions)/cart";

interface CartItem {
    image: string,
    title: string,
    priceNew: number,
    link: string,
    volume: number,
    quantity: number
}

export default function Price() {
    const dispatchCart = useDispatch();

    const products = useSelector((state: any) => state.cartReducer.products);

    const { priceByVolume, uses, thumbnail, title } = useContext(Section1Context);

    const [currentVolume, setCurrentVolume] = useState(priceByVolume[0]);

    const [quantity, setQuantity] = useState(1);

    const handleChange = (event: any): void => {
        setQuantity(parseInt(event.target.value));
    }

    const handleClickDecrease = (): void => {
        if (quantity - 1 >= 0) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddNewProductToCart = () => {
        const data: CartItem = {
            image: thumbnail,
            title: title,
            priceNew: currentVolume.priceNew,
            link: "#",
            volume: currentVolume.volume,
            quantity: quantity
        };

        const existProductInCart = products.find((item: CartItem) => item.title == data.title && item.volume == data.volume);

        if (existProductInCart) {
            existProductInCart.quantity = existProductInCart.quantity + data.quantity;
        }
        else {
            products.push(data);
        }

        dispatchCart(cartAddNewProduct(products));
    }

    return (
        <>
            <div className="flex items-center">
                <div className="text-[32px] font-[500] text-[#cc2020] mr-[20px]">{currentVolume.priceNew.toLocaleString('en-US')}<sup className="underline">đ</sup></div>
                <div className="text-[20px] font-[400] text-[#9f9f9f] mr-[15px] pt-[6px] line-through">{currentVolume.price.toLocaleString('en-US')}<sup className="underline">đ</sup></div>
                <div className="rounded-[3px] bg-primary px-[5px] py-[1px] text-[12px] min-w-[20px] text-white mt-[7px]">-{currentVolume.discount}%</div>
            </div>

            <div className="my-[5px]">
                <div className="text-[14px] text-[#0090F] mb-[10px]">Dung Tích: <span className="text-secondary font-[600]">{currentVolume.volume}ml</span></div>
                <div className="flex items-center">
                    {priceByVolume.map((item: any, index: number) => (
                        <button
                            key={index}
                            className={"text-[14px] mr-[10px] rounded-[5px] min-w-[30px] h-[30px] cursor-pointer border boder-solid text-center p-[5px] " +
                                (item.volume === currentVolume.volume
                                    ? "bg-secondary border-[#ddd] text-white"
                                    : "border-[#e4e4e4] text-[#00090F]"
                                )
                            }
                            onClick={() => setCurrentVolume(item)}
                        >
                            {item.volume}ml
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-[14px] mt-[20px]">Công dụng: <span className="text-[14px] font-[600] text-secondary">{uses}</span></div>

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
                <button className="px-[40px] flex items-center bg-[#000] hover:bg-secondary rounded-[40px] mb-[10px] ml-[15px]" onClick={handleAddNewProductToCart}>
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