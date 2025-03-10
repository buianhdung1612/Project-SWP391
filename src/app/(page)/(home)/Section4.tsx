import ButtonCategory from "@/app/components/Button/ButtonCategory";
import Title from "@/app/components/title/Title";
import Link from "next/link";

export default function Section4(props: any) {
    const { dataInit } = props;

    const bannerImage: any = [
        "/demo/banner-search-1.webp",
        "/demo/banner-search-2.webp",
        "/demo/banner-search-3.webp",
        "/demo/banner-search-4.webp",
        "/demo/banner-search-5.webp",
        "/demo/banner-search-6.webp",
    ]
    return (
        <>
            <Title title="Tìm kiếm nhiều nhất" link="/products"/>
            <div className="container mx-auto flex flex-wrap justify-center">
                {dataInit.slice(0,14).map((item: any, index: number) => (
                    <ButtonCategory key={index} text={item.title} slug={item.slug} />
                ))}
            </div>
            <Link href="/products" className="container mx-auto mt-[40px] grid grid-cols-6 gap-[20px]">
                {bannerImage.map((item: string, index: number) => (
                    <div className="w-[196px] h-[98px]" key={index}>
                        <img src={item} className="w-full h-full object-cover rounded-[5px]" />
                    </div>
                ))}
            </Link>
        </>
    )
}