"use client";

import BlogItem from "@/app/components/Blog/BlogItem";
import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import Title from "@/app/components/title/Title";
import { useState, useEffect } from "react";

export default function Section11(props: any) {
    const { dataInit = [] } = props;
    const [data, setData] = useState(dataInit[0].blogs.slice(0, 4));

    const [currentButton, setCurrentButton] = useState("tintuc");

    const dataDuongChatChoLanDa = dataInit[0]?.blogs.slice(0, 4);
    const dataGocReview = dataInit[1]?.blogs.slice(0, 4);
    const dataCachChamSocDa = dataInit[2]?.blogs.slice(0, 4);
    const dataTinTuc = dataInit[3]?.blogs.slice(0, 4);

    const dataButton = [
        {
            data: dataTinTuc,
            currentStatus: "tintuc",
            content: "Tin tức"
        },
        {
            data: dataCachChamSocDa,
            currentStatus: "cach-cham-soc-da",
            content: "Cách chăm sóc da"
        },
        {
            data: dataGocReview,
            currentStatus: "gocreview",
            content: "Góc review"
        },
        {
            data: dataDuongChatChoLanDa,
            currentStatus: "duongchatcholanda",
            content: "Dưỡng chất cho làn da"
        }
    ];

    const handleClick = (data: any, currentButton: string) => {
        setData(data);
        setCurrentButton(currentButton);
    };

    return (
        <>
            <Title title="Blog làm đẹp" link="/blogs" />

            <div className="text-center mb-[20px]">
                {dataButton.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(item.data, item.currentStatus)}
                        className={`text-[16px] hover:text-primary font-[500] px-[25px] py-[2px] ${
                            currentButton === item.currentStatus ? "text-primary" : "text-[#333]"
                        }`}
                    >
                        {item.content}
                    </button>
                ))}
            </div>

            <div className="container mx-auto grid grid-cols-4 gap-[20px]">
                {data.length > 0 && data.map((item: any, index: number) => (
                    <BlogItem
                        key={index}
                        image={item.thumbnail[0]}
                        day={item.createdAt} 
                        title={item.title}
                        description={item.content} 
                        link={`/blogs/detail/${item.slug}`}
                    />
                ))}
            </div>

            <ButtonSeeAll link="/blogs" />
        </>
    );
}
