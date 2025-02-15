"use client"

import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import CardItem from "@/app/components/Card/CardItem";
import Title from "@/app/components/title/Title";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../(page)/swiper.css';
import { Navigation } from 'swiper/modules';

export default function Section9() {
    const dataTrangDiem: any = [
        {
            image: "/demo/cham-soc-toan-than.webp",
            category: "Cosrx",
            title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
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
            image: "/demo/cham-soc-toan-than.webp",
            category: "Cosrx",
            title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
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
            image: "/demo/cham-soc-toan-than.webp",
            category: "Cosrx",
            title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
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
            image: "/demo/cham-soc-toan-than.webp",
            category: "Cosrx",
            title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
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
            image: "/demo/cham-soc-toan-than.webp",
            category: "Cosrx",
            title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
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
            image: "/demo/cham-soc-toan-than.webp",
            category: "Cosrx",
            title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
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
            image: "/demo/cham-soc-toan-than.webp",
            category: "Cosrx",
            title: "Gel Rửa Mặt Cosrx Tràm Trà, 0.5% BHA Có Độ pH Thấp 150ml Low pH Good Morning Gel Cleanser",
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

    const dataDuongDa: any = [
        {
            image: "/demo/duong-the.webp",
            title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
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
            image: "/demo/duong-the.webp",
            title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
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
            image: "/demo/duong-the.webp",
            title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
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
            image: "/demo/duong-the.webp",
            title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
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
            image: "/demo/duong-the.webp",
            title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
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
            image: "/demo/duong-the.webp",
            title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
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
            image: "/demo/duong-the.webp",
            title: "Mặt Nạ Ngủ Klairs Dưỡng Sáng Da, Ngừa Lão Hóa 90ml Freshly Juiced Vitamin E Mask",
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

    const dataTrangDa: any = [
        {
            image: "/demo/sua-gel-tam.webp",
            category: "Centella",
            title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
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
            image: "/demo/sua-gel-tam.webp",
            category: "Centella",
            title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
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
            image: "/demo/sua-gel-tam.webp",
            category: "Centella",
            title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
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
            image: "/demo/sua-gel-tam.webp",
            category: "Centella",
            title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
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
            image: "/demo/sua-gel-tam.webp",
            category: "Centella",
            title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
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
            image: "/demo/sua-gel-tam.webp",
            category: "Centella",
            title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
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
            image: "/demo/sua-gel-tam.webp",
            category: "Centella",
            title: "Nước Hoa Hồng Skin1004 Phục Hồi Và Tái Tạo Da 210ml",
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
            <Title title="Xu hướng làm đẹp" link="/products" />

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

            <Swiper
                navigation={true} modules={[Navigation]}
                className="mySwiper container mx-auto"
                spaceBetween={20}
                slidesPerView={5}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <CardItem
                            key={index}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            link={item.link}
                            priceByVolume={item.priceByVolume}
                            uses={item.uses}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <ButtonSeeAll />
        </>
    )
}