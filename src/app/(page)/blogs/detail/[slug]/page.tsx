"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

export default function BlogDetail() {
    const { slug } = useParams();

    const [data, setData] = useState({
        title: "",
        content: "",
        author: "",
        createdAt: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/home/blogs/${slug}`);
            const data = await response.json();
            setData(data.data);
            setIsLoading(false);
        };

        fetchBlogDetail();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container mx-auto px-[10%]">
                <div className="text-[24px] font-[650] my-[15px] text-[#333] text-center">
                    {data.title}
                </div>
                <div className="mt-[80px]" dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
        </>
    )
}