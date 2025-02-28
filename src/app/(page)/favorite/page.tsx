import CardItem from "@/app/components/Card/CardItem";

export default function FavoritePage() {
    const data: any = [
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
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
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
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
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
        },
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/banner-sale.webp",
            deal: "/demo/deal.webp",
            link: "/detail/123",
            priceByVolume: [
                {
                    volume: 30,
                    priceNew: 312000,
                    price: 395000,
                    discount: 22
                },
                {
                    volume: 95,
                    priceNew: 400000,
                    price: 500000,
                    discount: 20
                },
                {
                    volume: 400,
                    priceNew: 585000,
                    price: 750000,
                    discount: 22
                }
            ],
            uses: "Dành cho da nhạy cảm"
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
                            brand={item.category}
                            title={item.title}
                            banner={item.banner}
                            deal={item.deal}
                            link={item.link}
                            priceByVolume={item.priceByVolume}
                            discount={20}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}