import CardItem from "@/app/components/Card/CardItem";

export default function FavoritePage() {
    const data: any = [
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123"
        }
    ]

    return (
        <>
            <div className="container mx-auto">
                <div className="uppercase text-[16px] text-textColor mt-[20px] mb-[10px] font-[500]">Sản phẩm yêu thích</div>
                <div className="grid grid-cols-5">
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
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}