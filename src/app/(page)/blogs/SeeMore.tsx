"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SeeMore(props: any) {
    const { title = "" } = props;

    const [categories, setCategories] = useState([{
        title: "",
        slug: "",
        blogs: []
    }]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch("https://freshskinweb.onrender.com/home");
            const data = await response.json();

            console.log(data);
            setCategories(data.featuredBlogCategory);
            setIsLoading(false);
        };


        fetchCategories();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex-1 px-[10px]">
                {categories.map((item: any, index: number) => (
                    <div key={index}>
                        <div className={`cursor-pointer text-[18px] font-[600] pb-[8px] border-b border-solid border-secondary ` + (title == item.title ? "text-primary" : "text-textColor")}>
                            {item.title}
                        </div>
                        <div className="mt-[8px]">
                            {item.blogs.slice(0, 3).map((item: any, index: number) => (
                                <Link href={`/blogs/detail/${item.slug}`} key={index} className=" block text-textColor hover:text-secondary text-[14px] mb-[10px] font-[500]">{item.title}</Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}