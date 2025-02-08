import CardItem from "@/app/components/Card/CardItem"

export default function Section8() {
    const data: any = [
        {
            image: "/demo/danhmuc_1.webp",
            category: "Maybelline",
            title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
            priceOld: 288000,
            priceNew: 179000,
            discount: 38,
            banner: "/demo/freeship.webp",
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
            banner: "/demo/freeship.webp",
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
            banner: "/demo/freeship.webp",
            deal: "/demo/deal.webp",
            link: "#"
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
                </div>
            </div>
        </>
    )
}