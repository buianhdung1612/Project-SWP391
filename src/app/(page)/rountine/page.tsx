"use client"

import { useContext, useEffect, useState } from "react"
import { SettingProfileContext } from "../layout";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../(page)/swiper.css';
import { Navigation } from 'swiper/modules';
import Title from "@/app/components/title/Title";
import CardItem from "@/app/components/Card/CardItem";

export default function RountinePage() {
    const [data, setData] = useState({
        products: {
            content: []
        },
        skinCareRoutine: {
            rountine: ""
        }
    });

    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/home/skincare/rountine`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    skinType: profile.skinType
                })
            });

            const dataResponse = await response.json();
            setData(dataResponse.data);
        };

        fetchData();
    });

    return (
        <>
            <div className="container mx-auto mt-[20px]">
                <div className="pl-[7%]" dangerouslySetInnerHTML={{ __html: data?.skinCareRoutine?.rountine || "" }}></div>
                <div className="container mx-auto mt-[100px]">
                    <Title title="Đề xuất sản phẩm phù hợp"/>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={25}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {data?.products?.content.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                <CardItem
                                    key={index}
                                    image={item.thumbnail}
                                    brand={item.brand.title}
                                    title={item.title}
                                    banner={item.banner}
                                    link={`/detail/${item.slug}`}
                                    priceByVolume={item.variants}
                                    discount={item.discountPercent}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}