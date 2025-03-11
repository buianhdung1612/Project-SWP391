"use client"

import Banner2 from "@/app/components/Banner/Banner2";
import Section2 from "./Section2";
import { useEffect, useState } from "react";

// Sử dụng useEffect để lấy dữ liệu client-side
export default function ProductsSearchPage() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const searchParams = new URLSearchParams(window.location.search);
            const keyword = searchParams.get("keyword") || "";  // Lấy giá trị của "keyword"
            const category = searchParams.getAll("category");   // Lấy tất cả các giá trị của "category"
            const page = searchParams.get("page");              // Lấy giá trị của "page"
            
            const linkApi = `https://freshskinweb.onrender.com/home/search?keyword=${keyword}`;

            const api = new URL(linkApi);

            // Thêm các category và page vào API nếu có
            category.forEach((cat) => api.searchParams.append("category", cat));
            if (page) {
                api.searchParams.set("page", page);
            }

            const response = await fetch(api.href);
            const data = await response.json();
            setData(data.data); // Set the fetched data to state
        };

        fetchData();
    }, []); // The empty dependency array ensures this runs only once after the initial render.

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Banner2 />
            <Section2 data={data} />
        </>
    );
}
