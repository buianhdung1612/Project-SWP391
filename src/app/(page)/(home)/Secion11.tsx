"use client"

import BlogItem from "@/app/components/Blog/BlogItem";
import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import Title from "@/app/components/title/Title";
import { useState } from "react";

export default function Section11() {
    const dataTinTuc: any = [
            {
                image: "/demo/blog-preview.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123",
            },
            {
                image: "/demo/blog-preview.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123",
            },
            {
                image: "/demo/blog-preview.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123",
            }
        ]
    
        const dataCachChamSocDa: any = [
            {
                image: "/demo/blog-preview2.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview2.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview2.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview2.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            }
        ]
    
        const dataGocReview: any = [
            {
                image: "/demo/blog-preview3.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview3.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview3.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview3.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            }
        ]

        const dataDuongChatChoLanDa: any = [
            {
                image: "/demo/blog-preview4.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview4.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview4.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            },
            {
                image: "/demo/blog-preview4.webp",
                day: "16-11-2023",
                title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
                description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước",
                link: "/blog/123"
            }
        ]
    
        const dataButton: any = [
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
        ]
    
        const [data, setData] = useState(dataTinTuc);
        const [currentButton, setCurrentButton] = useState("tintuc");
    
        const handleClick: any = (data: any, currentButton: string) => {
            setData(data);
            setCurrentButton(currentButton);
        }
    
        return (
            <>
                <Title title="Blog làm đẹp" link="/blogs"/>
    
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
    
                <div className="container mx-auto grid grid-cols-4 gap-[20px]">
                    {data.map((item: any, index: number) => (
                        <BlogItem
                            key={index}
                            image={item.image}
                            day={item.day}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>

                <ButtonSeeAll/>
            </>
        )
}