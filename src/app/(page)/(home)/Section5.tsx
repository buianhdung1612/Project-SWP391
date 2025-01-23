"use client"

import CardItem from "@/app/components/Card/CartItem";
import Title from "@/app/components/title/Title";
import { useEffect, useState } from "react";

export default function Section5() {
    const dataTayTrang: any = [
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            priceNew: 174000,
            priceOld: 230000,
            discount: 24,
            link: "#"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            priceNew: 174000,
            priceOld: 230000,
            discount: 24,
            link: "#"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            priceNew: 174000,
            priceOld: 230000,
            discount: 24,
            link: "#"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            priceNew: 174000,
            priceOld: 230000,
            discount: 24,
            link: "#"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            priceNew: 174000,
            priceOld: 230000,
            discount: 24,
            link: "#"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            priceNew: 174000,
            priceOld: 230000,
            discount: 24,
            link: "#"
        }
    ]
    const dataSuaRuaMat: any = [
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            priceNew: 429000,
            priceOld: 540000,
            discount: 21,
            link: "#"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            priceNew: 429000,
            priceOld: 540000,
            discount: 21,
            link: "#"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            priceNew: 429000,
            priceOld: 540000,
            discount: 21,
            link: "#"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            priceNew: 429000,
            priceOld: 540000,
            discount: 21,
            link: "#"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            priceNew: 429000,
            priceOld: 540000,
            discount: 21,
            link: "#"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            priceNew: 429000,
            priceOld: 540000,
            discount: 21,
            link: "#"
        }
    ]
    const dataToner: any = [
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            priceNew: 158000,
            priceOld: 190000,
            discount: 17,
            link: "#"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            priceNew: 158000,
            priceOld: 190000,
            discount: 17,
            link: "#"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            priceNew: 158000,
            priceOld: 190000,
            discount: 17,
            link: "#"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            priceNew: 158000,
            priceOld: 190000,
            discount: 17,
            link: "#"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            priceNew: 158000,
            priceOld: 190000,
            discount: 17,
            link: "#"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            priceNew: 158000,
            priceOld: 190000,
            discount: 17,
            link: "#"
        }
    ]

    const dataButton: any = [
        {
            data: dataTayTrang,
            currentStatus: "taytrang",
            content: "Tẩy trang"
        },
        {
            data: dataSuaRuaMat,
            currentStatus: "suaruamat",
            content: "Sữa rửa mặt"
        },
        {
            data: dataToner,
            currentStatus: "toner",
            content: "Toner"
        },
    ]

    const [data, setData] = useState(dataTayTrang);
    const [currentButton, setCurrentButton] = useState("taytrang");

    const handleClick: any = (data: any, currentButton: string) => {
        setData(data);
        setCurrentButton(currentButton);
    }

    return (
        <>
            <Title title="Da đẹp - Thêm tự tin cùng Fresh Skin" />
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

            <div className="container mx-auto flex">
                <div className="w-[412px] h-[685px] mr-[30px]">
                    <img src="/demo/buy5-gift1.webp" className="w-full h-full object-cover rounded-[5px]" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-[30px]">
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
            </div>
        </>
    )
}