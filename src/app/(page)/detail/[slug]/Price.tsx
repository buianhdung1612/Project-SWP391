"use client"

import { useContext, useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { cartAddNewProduct } from "@/app/(actions)/cart";
import { Context } from "./MiddlewareGetData";
import { IoIosGitCompare } from "react-icons/io";
import { SettingProfileContext } from "../../layout";
import { Alert } from "@mui/material";

interface CartItem {
    image: string,
    title: string,
    price: number,
    link: string,
    variantId: number,
    volume: number,
    unit: string,
    quantity: number
}

export default function Price() {
    const [alert, setAlert] = useState<any>();
    const dispatchCart = useDispatch();

    const products = useSelector((state: any) => state.cartReducer.products);

    const { productDetail } = useContext(Context);

    const [currentVolume, setCurrentVolume] = useState(productDetail.variants[0]);

    const [quantity, setQuantity] = useState(1);

    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    const isCompared = profile.productComparisonId?.products.find(item => productDetail.id === item.id);

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
            image: productDetail.thumbnail[0],
            title: productDetail.title,
            price: currentVolume.price * (1 - productDetail.discountPercent / 100),
            link: `/detail/${productDetail.slug}`,
            variantId: currentVolume.id,
            volume: currentVolume.volume,
            unit: currentVolume.unit,
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

    const handleAddCompare = async (productId: number) => {
        if (profile.productComparisonId?.products.length <= 2) {
            const response = await fetch(`https://freshskinweb.onrender.com/home/products/comparison/save`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: productId,
                    userID: profile.userID
                })
            });
            const dataResponse = await response.json();
            if (dataResponse.code == 200) {
                setAlert({
                    severity: "success",
                    content: dataResponse.message
                });

                setTimeout(() => {
                    setAlert({
                        severity: "",
                        content: ""
                    });
                    location.reload();
                }, 3000);
            }
        }
        else{
            setAlert({
                severity: "error",
                content: "Bạn chỉ có thể thêm tối đa 3 sản phẩm vào danh sách so sánh."
            });

            setTimeout(() => {
                setAlert({
                    severity: "",
                    content: ""
                });
            }, 3000);
        }
    }

    const handleDelete = async (productId: number) => {
        const response = await fetch(`https://freshskinweb.onrender.com/home/products/comparison/delete`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: profile.productComparisonId.id,
                productId: productId
            })
        });

        const dataResponse = await response.json();

        if (dataResponse.code == 200) {
            setAlert({
                severity: "success",
                content: dataResponse.message
            });

            setTimeout(() => {
                setAlert({
                    severity: "",
                    content: ""
                });
                location.reload();
            }, 3000);
        }
    }

    return (
        <>
            {/* Alert */}
            {alert && (
                <Alert style={{ position: "absolute", zIndex: "99999999", top: "0%", right: "0%", width: "100%" }} severity={alert.severity}>{alert.content}</Alert>
            )}
            <div className="flex items-center">
                <div className="text-[32px] font-[500] text-[#cc2020] mr-[20px]">{(currentVolume.price * (1 - productDetail.discountPercent / 100)).toLocaleString('en-US')}<sup className="underline">đ</sup></div>
                {productDetail.discountPercent > 0 && (
                    <div className="text-[20px] font-[400] text-[#9f9f9f] mr-[15px] pt-[6px] line-through">{currentVolume.price.toLocaleString('en-US')}<sup className="underline">đ</sup></div>
                )}
                {productDetail.discountPercent > 0 && (
                    <div className="rounded-[3px] bg-primary px-[5px] py-[1px] text-[12px] min-w-[20px] text-white mt-[7px]">-{productDetail.discountPercent}%</div>
                )}
            </div>

            <div className="my-[5px]">
                <div className="text-[14px] text-[#0090F] mb-[10px]">Dung Tích: <span className="text-secondary font-[600]">{currentVolume.volume}{currentVolume.unit.toLowerCase()}</span></div>
                <div className="flex items-center">
                    {productDetail.variants.map((item: any, index: number) => (
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
                            {item.volume}{item.unit.toLowerCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-[14px] font-[500] text-[#00090f] my-[10px]">Số lượng:</div>
            <div className="flex items-center">
                <div className="mb-[10px] flex">
                    <button
                        className="hover:bg-primary hover:text-white text-[18px] w-[40px] h-[40px] text-[#333] flex justify-center items-center rounded-tl-[40px] rounded-bl-[40px] border border-solid border-[#ddd]"
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
                        className="hover:bg-primary hover:text-white text-[18px] w-[40px] h-[40px] text-[#333] flex justify-center items-center rounded-tr-[40px] rounded-br-[40px] border border-solid border-[#ddd]"
                        onClick={() => setQuantity(quantity + 1)}>
                        +
                    </button>
                </div>
                <button
                    className="px-[40px] flex items-center bg-[#000] hover:bg-secondary rounded-[40px] mb-[10px] ml-[15px]"
                    onClick={handleAddNewProductToCart}
                >
                    <CiShoppingCart className="text-white text-[24px]" />
                    <span className="ml-[5px] text-[12px] uppercase text-white font-[400] h-[40px] w-auto flex items-center">Thêm vào giỏ hàng</span>
                </button>
                <button className="buy-now uppercase text-[12px] text-white font-[400] h-[40px] w-auto rounded-[40px] mb-[10px] ml-[15px] px-[30px]">Mua ngay</button>

                {isCompared == undefined ? (
                    <div onClick={() => handleAddCompare(productDetail.id)} className="cursor-pointer rounded-full border border-solid hover:border-primary hover:text-primary border-black p-[5px] mb-[10px] ml-[15px]">
                        <IoIosGitCompare className="w-[28px] h-[28px]" />
                    </div>
                ) : (
                    <div onClick={() => handleDelete(productDetail.id)} className="cursor-pointer text-white rounded-full bg-primary border border-solid hover:border-primary hover:bg-white hover:text-primary border-primary p-[5px] mb-[10px] ml-[15px]">
                        <IoIosGitCompare className="w-[28px] h-[28px]" />
                    </div>
                )}
            </div>
        </>
    )
}