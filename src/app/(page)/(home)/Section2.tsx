"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import CardItem from "@/app/components/Card/CardItem";
import Link from "next/link";

import 'swiper/css';
import 'swiper/css/navigation';
import '../../(page)/swiper.css';
import { Navigation } from 'swiper/modules';

export default function Section2(props: any) {
    const {dataInit = []} = props;

    return (
        <>
            <div className="container mx-auto bg-[#C0DFC8] px-[20px] pt-[20px] pb-[30px] rounded-[5px]">
                <div className="flex items-center justify-between mb-[30px]">
                    <Link href="#">
                        <div className="w-[180px] h-auto">
                            <img src="/demo/flash.webp" className="w-full h-full object-cover" />
                        </div>
                    </Link>
                    <div className="text-center">
                        <div className="text-primary text-[18px] font-[600] mb-[5px]">Sản phẩm khuyến mãi</div>
                        <div className="text-[16px] bg-white px-[8px] py-[8px] rounded-[15px]">Chương trình sắp hết hạn</div>
                    </div>
                    <Link href="#">
                        <button className="text-[#4e7661] px-[15px] py-[8px] rounded-[10px] text-[14px] font-[500] bg-white hover:bg-[#4E7661] hover:text-white">
                            Xem tất cả
                        </button>
                    </Link>
                </div>
                <Swiper
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"
                    spaceBetween={25}
                    slidesPerView={5}
                >
                    {dataInit.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <CardItem
                                key={index}
                                image={item.thumbnail}
                                brand={item.brand.title}
                                title={item.title}
                                banner={item.banner}
                                deal="/demo/deal.webp"
                                link={`/detail/${item.slug}`}
                                priceByVolume={item.variants}
                                discount={item.discountPercent}
                            />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </>
    )
}