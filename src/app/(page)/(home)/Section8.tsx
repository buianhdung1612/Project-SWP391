import CardItem from "@/app/components/Card/CardItem"

export default function Section8() {
    const data: any = [
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            banner: "/demo/freeship.webp",
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
            banner: "/demo/freeship.webp",
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
            banner: "/demo/freeship.webp",
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
            <div className="h-[660px] bg-[url('../../public/demo/bg-section8.webp')] bg-cover mt-[50px]">
                <div className="container mx-auto flex justify-end ">
                    <div className="w-[730px] mt-[30px]">
                        <div className="text-center mb-[30px]">
                            <div className="text-secondary font-[600] text-[46px]">FRESH SKIN</div>
                            <div className="font-[400] text-[16px] max-w-[430px] inline-block">Không phải những người đẹp là những người hạnh phúc, mà những người hạnh phúc mới là những người đẹp.</div>
                            <div className="w-[64px] h-[34px] ml-[46%] mt-[7px]">
                                <img src="demo/leaf.webp" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-[20px]">
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
                                    discount={10}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}