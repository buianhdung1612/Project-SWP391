import { useContext, useState } from "react";
import { Context } from "./MiddlewareGetData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../swiper.css'; 

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Image() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const { productDetail } = useContext(Context);

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            {/* Swiper cho hình ảnh thu nhỏ */}
            <div className="w-[115px] px-3">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4} 
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiperThumbs"
                >
                    {productDetail.thumbnail.map((thumbnail: string, index: number) => (
                        <SwiperSlide key={index} className="cursor-pointer border border-solid bg-white border-[#e4e4e4] w-[80px] aspect-square mb-[10px]">
                            <img src={thumbnail} className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-[420px] h-[420px] mr-[20px] relative">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={productDetail.thumbnail[0]} className="w-full h-full object-cover" />
                    </SwiperSlide>
                    {productDetail.thumbnail.slice(1).map((thumbnail: string, index: number) => (
                        <SwiperSlide key={index}>
                            <img src={thumbnail} className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {productDetail.deal && (
                    <div className="w-[40px] aspect-square absolute top-[5px] right-[5px]">
                        <img src={productDetail.deal} className="w-full h-full aspect-square" />
                    </div>
                )}
                {productDetail.banner && (
                    <div className="w-[280px] h-[80px] absolute top-[75%]">
                        <img src={productDetail.banner} className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </div>
    );
}