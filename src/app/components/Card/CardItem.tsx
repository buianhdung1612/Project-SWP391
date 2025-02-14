"use client"

import { cartAddNewProduct } from "@/app/(actions)/cart";
import Link from "next/link";
import { useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

interface PriceByVolume {
    volume: number,
    priceNew: number,
    price: number,
    discount: number
}

interface CartItem {
    image: string,
    title: string,
    priceNew: number,
    link: string,
    volume: number,
    quantity: number
}

export default function CardItem(props: {
    image: string,
    category: string,
    title: string,
    deal?: string,
    banner?: string,
    className?: string,
    link: string,
    priceByVolume: PriceByVolume[],
    uses: string
}) {
    const { image = "", category = "", title = "", banner = "", deal = "", className = "", link = "", priceByVolume = [], uses = "" } = props;

    const dispatchCart = useDispatch();

    const products = useSelector((state: any) => state.cartReducer.products);

    const [currentVolume, setCurrentVolume] = useState(priceByVolume.length > 0 ? priceByVolume[0] : { priceNew: 0, price: 0, discount: 0, volume: 0 });

    const [quantity, setQuantity] = useState(1);

    const handleChange = (event: any): void => {
        setQuantity(parseInt(event.target.value));
    }

    const handleClickDecrease = (): void => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddNewProductToCart = () => {
        const data: CartItem = {
            image: image,
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

    //Popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div className="bg-white rounded-[10px]">
                <div className="w-[226px] aspect-square relative group">
                    <Link href={link}>
                        <img src={image} className="w-full h-full object-cover" />
                    </Link>

                    <CiHeart className="text-[28px] absolute top-[2%] right-[2%] hover:text-primary cursor-pointer" />
                    {banner && (
                        <img src={banner} className="absolute bottom-0" />
                    )}
                    {deal && (
                        <img src={deal} className="absolute top-[2%] left-[2%]" />
                    )}
                    <div
                        onClick={() => { handleOpenPopup() }}
                        className="cursor-pointer rounded-[30px] absolute bottom-[12%] left-[27%] bg-primary hover:bg-secondary py-[8px] px-[10px] hidden text-[14px] text-white w-[98px] h-[36px] font-[500] card-see-quick group-hover:block"
                    >
                        Xem nhanh
                    </div>
                </div>

                <div className={`text-center mt-[5px] w-[226px] ` + className}>
                    {category && (
                        <div className="uppercase text-[14px] font-[600 text-[#4e7661] mb-[5px] hover:text-primary">{category}</div>
                    )}
                    <Link href={link}>
                        <div className="text-[14px] font-[400] mx-[5px] line-clamp-2 mb-[5px] hover:text-secondary">{title}</div>
                    </Link>
                    <div className="flex items-center mb-[10px] justify-center">
                        <span className="text-[#c90000] text-[15px] font-[500] mr-[5px]">{currentVolume.priceNew.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        <span className="text-[#98a4a9] text-[12px] font-[300] line-through mr-[5px]">{currentVolume.price.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        <span className="text-white bg-primary py-[3px] rounded-[3px] text-[12px] min-w-11">-{currentVolume.discount}%</span>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[99999] flex justify-center items-start pt-[8%]" onClick={handleClosePopup}>
                    <div className="bg-white rounded-[5px] w-[840px] p-5 relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                            onClick={handleClosePopup}
                        >
                            ✕
                        </button>

                        <div className="flex px-[5px]">
                            <div className="w-[256px] mr-[10px]">
                                <div className="w-full aspect-square">
                                    <img
                                        src={image}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-[10px]">
                                    <img
                                        src={image}
                                        className="w-full h-full object-cover border border-solid border-[#e9edf5]"
                                    />
                                    <img
                                        src={image}
                                        className="w-full h-full object-cover border border-solid border-[#e9edf5]"
                                    />
                                    <img
                                        src={image}
                                        className="w-full h-full object-cover border border-solid border-[#e9edf5]"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="text-[23px] font-[600] text-[#333]">{title}</div>
                                <div className="flex mt-[10px] items-center mb-[10px]">
                                    <div className="text-[20px] font-[600] text-primary">{currentVolume.priceNew.toLocaleString("en-US")}<sup className="underline">đ</sup></div>
                                    <div className="text-[16px] font-[600] text-[#a5a5a5] ml-[10px] line-through">{currentVolume.price.toLocaleString("en-US")}<sup className="underline">đ</sup></div>
                                </div>
                                <div>
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
                                <div className="text-[14px] my-[10px]">Công dụng: <span className="text-[14px] font-[600] text-secondary">{uses}</span></div>
                                <div className="flex items-center">
                                    <div className="mb-[10px] flex">
                                        <button
                                            className="hover:bg-primary hover:text-white text-[18px] w-[40px] h-[40px] text-[#333] flex justify-center items-center rounded-tl-[5px] rounded-bl-[5px] border border-solid border-[#ddd]"
                                            onClick={handleClickDecrease}
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
                                            className="hover:bg-primary hover:text-white text-[18px] w-[40px] h-[40px] text-[#333] flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] border border-solid border-[#ddd]"
                                            onClick={() => setQuantity(quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                    <button className="mb-[10px] px-[25px] h-[40px] flex items-center bg-secondary hover:bg-white text-[12px] uppercase text-white hover:text-secondary rounded-[5px] ml-[15px] border borde-solid border-secondary" onClick={handleAddNewProductToCart}>
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}