"use client"

import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import CardItem from "@/app/components/Card/CardItem";
import Title from "@/app/components/title/Title";
import { useState } from "react";

export default function Section9() {
    const dataTrangDiem: any = [
            {
                image: "/demo/cham-soc-toan-than.webp",
                category: "Cosrx",
                title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/cham-soc-toan-than.webp",
                category: "Cosrx",
                title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/cham-soc-toan-than.webp",
                category: "Cosrx",
                title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/cham-soc-toan-than.webp",
                category: "Cosrx",
                title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/cham-soc-toan-than.webp",
                category: "Cosrx",
                title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            }
        ]
    
        const dataDuongDa: any = [
            {
                image: "/demo/duong-the.webp",
                title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/duong-the.webp",
                title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/duong-the.webp",
                title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/duong-the.webp",
                title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/duong-the.webp",
                title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            }
        ]
    
        const dataTrangDa: any = [
            {
                image: "/demo/sua-gel-tam.webp",
                category: "Centella",
                title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/sua-gel-tam.webp",
                category: "Centella",
                title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/sua-gel-tam.webp",
                category: "Centella",
                title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/sua-gel-tam.webp",
                category: "Centella",
                title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            },
            {
                image: "/demo/sua-gel-tam.webp",
                category: "Centella",
                title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
                priceNew: 118000,
                priceOld: 230000,
                discount: 49,
                link: "#"
            }
        ]
    
        const dataButton: any = [
            {
                data: dataTrangDiem,
                currentStatus: "trangdiem",
                content: "Trang điểm"
            },
            {
                data: dataDuongDa,
                currentStatus: "duongda",
                content: "Dưỡng da"
            },
            {
                data: dataTrangDa,
                currentStatus: "trangda",
                content: "Trắng da"
            },
        ]
    
        const [data, setData] = useState(dataTrangDiem);
        const [currentButton, setCurrentButton] = useState("trangdiem");
    
        const handleClick: any = (data: any, currentButton: string) => {
            setData(data);
            setCurrentButton(currentButton);
        }
    
        return (
            <>
                <Title title="Xu hướng làm đẹp" />
    
                <div className="text-center mb-[20px]">
                    {dataButton.map((item: any, index: number) => (
                        <button
                            key={index}
                            onClick={() => handleClick(item.data, item.currentStatus)}
                            className={"text-[16px] font-[500] px-[25px] py-[2px] " +
                                (currentButton == item.currentStatus ? "text-primary" : "text-[#333]")
                            }
                        >
                            {item.content}
                        </button>
                    ))}
                </div>
    
                <div className="container mx-auto grid grid-cols-5 gap-[20px]">
                    {data.map((item: any, index: number) => (
                        <CardItem
                            key={index}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            priceNew={item.priceNew}
                            priceOld={item.priceOld}
                            discount={item.discount}
                            link={item.link}
                        />
                    ))}
                </div>

                <ButtonSeeAll/>
            </>
        )
}