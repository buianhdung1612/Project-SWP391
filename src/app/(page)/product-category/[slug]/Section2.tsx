"use client"

import Aside from "@/app/components/Aside/Aside"
import CardItem from "@/app/components/Card/CardItem"
import Pagination from "@/app/components/Pagination/Pagination"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Section2() {
    const { slug } = useParams();

    const [dataSkinTypes, setDataSkinTypes] = useState([]);
    const [dataProductTypes, setDataProductTypes] = useState([]);
    const [brand, setBrand] = useState("");
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState(1);

    // Lấy giá trị page từ URL query
    const linkApi = `https://freshskinweb.onrender.com/home/${slug}`;

    useEffect(() => {
        const fetchData = async () => {
            const urlCurrent = new URL(location.href);
            const api = new URL(linkApi);

            // Phân trang
            const pageCurrent = urlCurrent.searchParams.get('page');
            setPage(pageCurrent ? parseInt(pageCurrent) : 1);

            if (pageCurrent) {
                api.searchParams.set('page', pageCurrent);
            }
            else {
                api.searchParams.delete('page');
            }
            // Hết Phân trang
            const response = await fetch(api.href);
            const data = await response.json();
            setDataSkinTypes(data.data.skinTypes);
            setDataProductTypes(data.data.categories);
            setBrand(data.data.brands[0].title);
            setProducts(data.data.products);
            setTotalPages(data.data.page.totalPages);
            setCurrentPage(data.data.page.page);
            setIsLoading(false);
        };

        fetchData();
    }, [slug, page]);

    const finalSkinTypes: string[] = [];
    const finalCategories: string[] = [];

    dataProductTypes.forEach((item: any) => (
        finalCategories.push(item.title)
    ))

    dataSkinTypes.forEach((item: any) => (
        finalSkinTypes.push(item.type)
    ))

    const data: any = [
        {
            title: "Loại sản phẩm",
            data: finalCategories
        },
        {
            title: "Loại da",
            data: finalSkinTypes
        }
    ]

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="uppercase text-[26px] font-[600] mt-[40px]">{brand}</div>
                <div className="flex items-start">
                    <Aside data={data} />
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
        </>
    )
}