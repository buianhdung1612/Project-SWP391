import Aside from "@/app/components/Aside/Aside"
import CardItem from "@/app/components/Card/CardItem"
import { TbPlayerTrackNextFilled } from "react-icons/tb"

const data: any = [
    {
        title: "Thương hiệu",
        data: [
            "Cerave",
            "Cocoon",
            "Cosrx",
            "Eucerin",
            "Hatomugi"
        ]
    },
    {
        title: "Loại sản phẩm",
        data: [
            "Gel Rửa Mặt",
            "Sữa Rửa Mặt"
        ]
    },
    {
        title: "Chọn mức giá",
        data: [
            "Dưới 100.000đ",
            "Từ 100.000đ - 300.000đ",
            "Từ 300.000đ - 500.000đ",
            "Từ 500.000đ - 700.000đ",
            "Trên 700.000đ"
        ]
    },
    {
        title: "Loại da",
        data: [
            "Da dầu",
            "Da khô",
            "Da nhạy cảm",
            "Da thường",
            "Da hỗn hợp"
        ]
    }
]

const dataProducts: any = [
    {
        image: "/demo/danhmuc_1.webp",
        category: "Maybelline",
        title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
        priceOld: 288000,
        priceNew: 179000,
        discount: 38,
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
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
        banner: "/demo/banner-sale.webp",
        deal: "/demo/deal.webp",
        link: "#"
    }
]

export default function Section2() {
    return (
        <>
            <div className="container mx-auto">
                <div className="uppercase text-[26px] font-[600] mt-[40px]">Tất cả sản phẩm</div>
                <div className="flex items-start">
                    <Aside data={data} />
                    <div className="flex-1 ml-[40px] mt-[15px]">
                        <div className="font-[400] text-[14px] text-right">Sắp xếp: <span className="text-[14px] font-[600]">Mặc định</span></div>
                        <div className="grid grid-cols-4 gap-[20px] mt-[20px]">
                            {dataProducts.map((item: any, index: number) => (
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
                        <div className="text-center mt-[50px] mb-[-25px]">
                            <ul className="flex items-center justify-center">
                                <li className=" mx-[3px] rounded-[5px] text-[14px] font-[400] text-white bg-primary w-[30px] h-[30px] flex items-center justify-center">1</li>
                                <li className="mx-[3px] rounded-[5px] text-[14px] font-[400] text-primary bg-white w-[30px] border border-solid border-primary h-[30px] flex items-center justify-center hover:text-white hover:bg-primary">2</li>
                                <li className="mx-[3px] rounded-[5px] text-[10px] font-[400] text-primary bg-white w-[30px] border border-solid border-primary h-[30px] flex items-center justify-center hover:text-white hover:bg-primary">
                                    <TbPlayerTrackNextFilled />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}