import CardItem from "@/app/components/Card/CardItem";
import Link from "next/link";

export default function Section2() {
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
        }
    ]
    return (
        <>
            <div className="container mx-auto bg-[#C0DFC8] px-[20px] pt-[20px] pb-[30px]">
                <div className="flex items-center justify-between mb-[30px]">
                    <Link href="#">
                        <div className="w-[180px] h-auto">
                            <img src="/demo/flash.webp" className="w-full h-full object-cover" />
                        </div>
                    </Link>
                    <div className="text-center">
                        <div className="text-primary text-[18px] font-[600] mb-[5px]">Sản phẩm khuyến mãi</div>
                        <div className="text-[16px] bg-white px-[8px] py-[8px] rounded-[15px]">Chương trình sắp hết hạn</div>
                    </div>
                    <Link href="#">
                        <button className="text-[#4e7661] px-[15px] py-[8px] rounded-[10px] text-[14px] font-[500] bg-white hover:bg-[#4E7661] hover:text-white">
                            Xem tất cả
                        </button>
                    </Link>
                </div>
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
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}