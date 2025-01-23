import ButtonSeeAll from "@/app/components/Button/ButtonSeeAll";
import CardItem from "@/app/components/Card/CartItem";
import Title from "@/app/components/title/Title";

export default function Section3() {
    const data: any = [
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
            link: "#"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
            link: "#"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
            link: "#"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
            link: "#"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-22-25-monthly.webp",
            deal: "/demo/deal.webp",
            link: "#"
        }
    ]
    return (
        <>
            <div className="container mx-auto">
                <Title title="Top sản phẩm bán chạy" />
                <div className="grid grid-cols-5 gap-[25px]">
                    {data.map((item: any, index: number) => (
                        <CardItem
                            key={index}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            priceNew={item.priceNew}
                            priceOld={item.priceOld}
                            discount={item.discount}
                            banner={item.banner}
                            deal={item.deal}
                            className="bg-[#F7F7F7]"
                            link={item.link}
                        />
                    ))}
                </div>
                <ButtonSeeAll/>
            </div>
        </>
    )
}