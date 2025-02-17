"use client"

import CardItem from "@/app/components/Card/CardItem";
import Title from "@/app/components/title/Title";
import { useState } from "react";
import Link from "next/link";

export default function Section5() {
    const dataTayTrang: any = [
        // {
        //     image: "/demo/tay-trang.webp",
        //     category: "AHA",
        //     title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
        //     link: "/detail/123",
        //     priceByVolume: [
        //         {
        //             volume: 30,
        //             priceNew: 312000,
        //             price: 395000,
        //             discount: 22
        //         },
        //         {
        //             volume: 95,
        //             priceNew: 400000,
        //             price: 500000,
        //             discount: 20
        //         },
        //         {
        //             volume: 400,
        //             priceNew: 585000,
        //             price: 750000,
        //             discount: 22
        //         }
        //     ],
        //     uses: "Dành cho da nhạy cảm"
        // },
        // {
        //     image: "/demo/tay-trang.webp",
        //     category: "AHA",
        //     title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
        //     link: "/detail/123",
        //     priceByVolume: [
        //         {
        //             volume: 30,
        //             priceNew: 312000,
        //             price: 395000,
        //             discount: 22
        //         },
        //         {
        //             volume: 95,
        //             priceNew: 400000,
        //             price: 500000,
        //             discount: 20
        //         },
        //         {
        //             volume: 400,
        //             priceNew: 585000,
        //             price: 750000,
        //             discount: 22
        //         }
        //     ],
        //     uses: "Dành cho da nhạy cảm"
        // },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/tay-trang.webp",
            category: "AHA",
            title: "Nước Tẩy Trang Nature Republic Chiết Xuất AHA 500ml Good Skin AHA Ampoule Cleansing Water",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        }
    ]
    const dataSuaRuaMat: any = [
        // {
        //     image: "/demo/sua-rua-mat.webp",
        //     category: "SVR",
        //     title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
        //     link: "/detail/123",
        //     priceByVolume: [
        //         {
        //             volume: 30,
        //             priceNew: 312000,
        //             price: 395000,
        //             discount: 22
        //         },
        //         {
        //             volume: 95,
        //             priceNew: 400000,
        //             price: 500000,
        //             discount: 20
        //         },
        //         {
        //             volume: 400,
        //             priceNew: 585000,
        //             price: 750000,
        //             discount: 22
        //         }
        //     ],
        //     uses: "Dành cho da nhạy cảm"
        // },
        // {
        //     image: "/demo/sua-rua-mat.webp",
        //     category: "SVR",
        //     title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
        //     link: "/detail/123",
        //     priceByVolume: [
        //         {
        //             volume: 30,
        //             priceNew: 312000,
        //             price: 395000,
        //             discount: 22
        //         },
        //         {
        //             volume: 95,
        //             priceNew: 400000,
        //             price: 500000,
        //             discount: 20
        //         },
        //         {
        //             volume: 400,
        //             priceNew: 585000,
        //             price: 750000,
        //             discount: 22
        //         }
        //     ],
        //     uses: "Dành cho da nhạy cảm"
        // },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/sua-rua-mat.webp",
            category: "SVR",
            title: "Gel Rửa Mặt SVR Không Chứa Xà Phòng Cho Da Dầu 400ml Sebiaclear Gel Moussant",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        }
    ]
    const dataToner: any = [
        // {
        //     image: "/demo/toner.webp",
        //     category: "Laneige",
        //     title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
        //     link: "/detail/123",
        //     priceByVolume: [
        //         {
        //             volume: 30,
        //             priceNew: 312000,
        //             price: 395000,
        //             discount: 22
        //         },
        //         {
        //             volume: 95,
        //             priceNew: 400000,
        //             price: 500000,
        //             discount: 20
        //         },
        //         {
        //             volume: 400,
        //             priceNew: 585000,
        //             price: 750000,
        //             discount: 22
        //         }
        //     ],
        //     uses: "Dành cho da nhạy cảm"
        // },
        // {
        //     image: "/demo/toner.webp",
        //     category: "Laneige",
        //     title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
        //     link: "/detail/123",
        //     priceByVolume: [
        //         {
        //             volume: 30,
        //             priceNew: 312000,
        //             price: 395000,
        //             discount: 22
        //         },
        //         {
        //             volume: 95,
        //             priceNew: 400000,
        //             price: 500000,
        //             discount: 20
        //         },
        //         {
        //             volume: 400,
        //             priceNew: 585000,
        //             price: 750000,
        //             discount: 22
        //         }
        //     ],
        //     uses: "Dành cho da nhạy cảm"
        // },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/toner.webp",
            category: "Laneige",
            title: "Toner Laneige Dưỡng Ẩm Dành Cho Da Khô 200ml Essential Power Skin Refiner Moisture",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
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
            <Title title="Da đẹp - Thêm tự tin cùng Fresh Skin" link="/products" />
            <div className="text-center mb-[20px]">
                {dataButton.map((item: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => handleClick(item.data, item.currentStatus)}
                        className={"text-[16px] hover:text-primary font-[500] px-[25px] py-[2px] " +
                            (currentButton == item.currentStatus ? "text-primary" : "text-[#333]")
                        }
                    >
                        {item.content}
                    </button>
                ))}
            </div>
            <div className="container mx-auto flex">
                <Link href="/products" className="w-[412px] h-[685px] mr-[30px]">
                    <img src="/demo/buy5-gift1.webp" className="w-full h-full object-cover rounded-[5px]" />
                </Link>
                <div className="flex-1 grid grid-cols-3 gap-[30px]">
                    {data.map((item: any, index: number) => (
                        <CardItem
                            key={index}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            link={item.link}
                            priceByVolume={item.priceByVolume}
                            uses={item.uses}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}