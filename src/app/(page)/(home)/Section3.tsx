"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import CardItem from "@/app/components/Card/CardItem";
import Title from "@/app/components/title/Title";

import 'swiper/css';
import 'swiper/css/navigation';
import '../../(page)/swiper.css';
import { Navigation } from 'swiper/modules';

export default function Section3() {
    const data: any = [
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
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
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
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
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
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
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
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
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
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
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
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

    return (
        <>
            <div className="container mx-auto">
                <Title title="Top sản phẩm bán chạy" link="/products" />
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    spaceBetween={25}
                    slidesPerView={5}
                >
                    {data.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <CardItem
                                image={item.image}
                                category={item.category}
                                title={item.title}
                                banner={item.banner}
                                deal={item.deal}
                                className=""
                                link={item.link}
                                priceByVolume={item.priceByVolume}
                                uses={item.uses}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ButtonSeeAll />
            </div>
        </>
    )
}