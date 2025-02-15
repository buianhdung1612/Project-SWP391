"use client"

import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../(page)/swiper.css';
import { Navigation } from 'swiper/modules';

export default function CategoryList(props: any) {
    const { data } = props;

    return (
        <>
            <Swiper
                navigation={true} modules={[Navigation]}
                className="mySwiper"
                spaceBetween={20}
                slidesPerView={4}
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <CategoryItem
                            title={item.title}
                            quantity={item.quantity}
                            image1={item.image1}
                            image2={item.image2}
                            image3={item.image3}
                            image4={item.image4}
                            image5={item.image5}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}