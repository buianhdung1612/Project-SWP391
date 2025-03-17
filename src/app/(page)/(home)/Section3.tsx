"use client"

import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import CardItem from "@/app/components/Card/CardItem";
import Title from "@/app/components/title/Title";

export default function Section3(props: any) {
    const { dataInit = [] } = props;

    return (
        <>
            <div className="container mx-auto">
                <Title title="Top sản phẩm bán chạy" link="/products" />
                <div className="flex-1 grid grid-cols-5 gap-[25px]">
                    {dataInit.slice(0, 5).map((item: any, index: number) => (
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
                    ))}
                </div>
                <ButtonSeeAll />
            </div>
        </>
    )
}