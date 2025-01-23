import ButtonCategory from "@/app/components/Button/ButtonCategory";
import Title from "@/app/components/title/Title";

export default function Section4() {
    const data: any = [
        "Kem chống nắng",
        "Kem dưỡng ẩm",
        "Sữa rửa bặt",
        "Bông tẩy trang",
        "Sữa rửa mặt SVR",
        "Mặt nạ",
        "Hỗ trợ tiêu hóa",
        "Dầu gội",
        "Cosrx",
        "Vaseline",
        "Cushion",
        "Dưỡng thể",
        "Mặt nạ dưỡng",
        "Chống lão hóa",
        "Phụ kiện làm sạch",
        "Kem dưỡng mắt",
        "Xịt khoáng",
        "Vetaphil",
        "Loreal"
    ];

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
            <Title title="Tìm kiếm nhiều nhất" />
            <div className="container mx-auto flex flex-wrap justify-center">
                {data.map((item: string, index: number) => (
                    <ButtonCategory key={index} text={item} />
                ))}
            </div>
            <div className="container mx-auto mt-[40px] grid grid-cols-6 gap-[20px]">
                {bannerImage.map((item: string, index: number) => (
                    <div className="w-[196px] h-[98px]" key={index}>
                        <img src={item} className="w-full h-full object-cover rounded-[5px]" />
                    </div>
                ))}
            </div>
        </>
    )
}