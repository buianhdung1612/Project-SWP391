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
            const keyword = searchParams.get("keyword") || "";  
            const category = searchParams.getAll("category");   
            const page = searchParams.get("page");              
            
            const linkApi = `https://freshskinweb.onrender.com/home/search?keyword=${keyword}`;

            const api = new URL(linkApi);

            category.forEach((cat) => api.searchParams.append("category", cat));
            if (page) {
                api.searchParams.set("page", page);
            }

            const response = await fetch(api.href);
            const data = await response.json();
            setData(data.data); 
        };

        fetchData();
    }, []); 

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
