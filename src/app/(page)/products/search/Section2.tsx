import { useEffect, useState } from "react";
import Aside from "@/app/components/Aside/Aside";
import CardItem from "@/app/components/Card/CardItem";
import Pagination from "@/app/components/Pagination/Pagination";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

interface Section2Props {
    data: any;  // Nhận dữ liệu từ props
}

export default function Section2({ data }: Section2Props) {
    const [dataSkinTypes, setDataSkinTypes] = useState([]);
    const [dataProductTypes, setDataProductTypes] = useState([]);
    const [dataBrand, setDataBrand] = useState([]);
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setDataSkinTypes(data.skinTypes || []);
        setDataProductTypes(data.categories || []);
        setDataBrand(data.brands || []);
        setTitle(data.title || "");
        setProducts(data.products || []);
        setTotalPages(data.page?.totalPages || 0);
        setCurrentPage(data.page?.page || 1);
        setIsLoading(false);
    }, [data]);  // Khi data thay đổi, cập nhật lại các trạng thái tương ứng

    const finalSkinTypes: string[] = [];
    const finalCategories: string[] = [];
    const finalBrands: string[] = [];
    const finalPrice: string[] = [
        "Dưới 100.000đ",
        "Từ 100.000đ - 300.000đ",
        "Từ 300.000đ - 500.000đ",
        "Từ 500.000đ - 700.000đ",
        "Trên 700.000đ"
    ];

    dataProductTypes.forEach((item: any) => finalCategories.push(item.title));
    dataSkinTypes.forEach((item: any) => finalSkinTypes.push(item.type));
    dataBrand.forEach((item: any) => finalBrands.push(item.title));

    const dataToShow: any = [
        { title: "Thương hiệu", data: finalBrands },
        { title: "Loại sản phẩm", data: finalCategories },
        { title: "Chọn mức giá", data: finalPrice },
        { title: "Loại da", data: finalSkinTypes }
    ];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <ul className="flex items-center mt-[17px]">
                <li>
                    <Link href="/" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                        <MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" />
                    </Link>
                </li>
                <li className="text-secondary text-[15px] font-[400]">
                    {title}
                </li>
            </ul>
            <div className="uppercase text-[26px] font-[600] mt-[30px]">{title}</div>
            <div className="flex items-start">
                <Aside data={dataToShow} />
                <div className="flex-1 ml-[40px] mt-[15px]">
                    <div className="font-[400] text-[14px] text-right">Sắp xếp: <span className="text-[14px] font-[600]">Mặc định</span></div>
                    <div className="grid grid-cols-4 gap-[20px] mt-[20px]">
                        {products.map((item: any, index: number) => (
                            <CardItem
                                key={index}
                                image={item.thumbnail}
                                brand={item.brand.title}
                                title={item.title}
                                banner={item.banner}
                                deal={item.deal}
                                link={`/detail/${item.slug}`}
                                priceByVolume={item.variants}
                                discount={item.discountPercent}
                            />
                        ))}
                    </div>
                    <Pagination totalPages={totalPages} currentPage={currentPage} />
                </div>
            </div>
        </div>
    );
}
