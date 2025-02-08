"use client"

import { useContext, useState } from "react";
import { Section1Context } from "./Section1";

export default function Price() {
    const { priceByVolume, uses } = useContext(Section1Context);

    const [currentVolume, setCurrentVolume] = useState(priceByVolume[0]);

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
        </>
    )
}