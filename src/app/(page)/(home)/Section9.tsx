"use client"

import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import CardItem from "@/app/components/Card/CardItem";
import Title from "@/app/components/title/Title";
import { useState } from "react";

export default function Section9(props: any) {
    const { dataInit = [] } = props;

    const dataButton: any = dataInit.map((item: any) => (
        {
            data: item.products,
            currentStatus: item.slug,
            content: item.title
        }
    ));

    const [data, setData] = useState(dataInit[0].products);
    const [currentButton, setCurrentButton] = useState(dataInit[0].slug);

    const handleClick: any = (data: any, currentButton: string) => {
        setData(data);
        setCurrentButton(currentButton);
    }

    return (
        <>
            <Title title="Tóc khỏe tóc đẹp" link="/products" />

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
            <div className="flex-1 grid grid-cols-5 gap-[20px] container mx-auto">
                {data.slice(0, 5).map((item: any, index: number) => (
                    <CardItem
                        key={index}
                        image={item.thumbnail}
                        brand={item.brand.title}
                        title={item.title}
                        link={`/detail/${item.slug}`}
                        priceByVolume={item.variants}
                        discount={item.discountPercent}
                    />
                ))}
            </div>
            <ButtonSeeAll />
        </>
    )
}