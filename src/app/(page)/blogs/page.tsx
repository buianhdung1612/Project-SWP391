"use client"

import Banner2 from "@/app/components/Banner/Banner2";
import Pagination from "@/app/components/Pagination/Pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";

export default function BlogPage() {
    const searchParams = useSearchParams();

    const [data, setData] = useState([
        {
            title: "",
            slug: "",
            blogs: [
                {
                    title: "",
                    content: "",
                    thumbnail: [],
                    slug: "",
                    author: "",
                    createdAt: ""
                }
            ]
        }
    ]);

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState(1);

    const [dataCurrent, setDataCurrent] = useState({
        title: "",
        slug: "",
        blogs: [
            {
                title: "",
                content: "",
                thumbnail: [],
                slug: "",
                author: "",
                createdAt: ""
            }
        ]
    });

    const [isLoading, setIsLoading] = useState(true);

    const linkApi = `https://freshskinweb.onrender.com/home/blogs`;

    useEffect(() => {
        const fetchBlogs = async () => {
            const cachedData = sessionStorage.getItem('blogData');
            if (cachedData) {
                const data = JSON.parse(cachedData);
                setData(data.data.blog_category);
                setDataCurrent(data.data.blog_category[0]);
                setTotalPages(data.data.page.totalPages);
                setCurrentPage(data.data.page.page);
                setIsLoading(false);
                return;
            }

            const urlCurrent = new URL(window.location.href);
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

            const response = await fetch(api.href);
            const data = await response.json();

            sessionStorage.setItem('blogData', JSON.stringify(data));

            setData(data.data.blog_category);
            setDataCurrent(data.data.blog_category[0]);
            setTotalPages(data.data.page.totalPages);
            setCurrentPage(data.data.page.currentPage);
            setIsLoading(false);
        };

        fetchBlogs();
    }, [page, searchParams]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <ul className="flex items-center mt-[17px] container mx-auto px-3">
                <li>
                    <Link href="/" className="flex items-center">
                        <span className="text-[#333] text-[15px] font-[400] hover:text-secondary">Trang chủ</span>
                        <span><MdNavigateNext className="ml-[10px] text-[18px] mr-[10px]" /></span>
                    </Link>
                </li>
                <li className="text-secondary text-[15px] font-[400]">
                    Tin tức
                </li>
            </ul>
            <Banner2 />
            <div className="container mx-auto mb-[35px]">
                <div className="uppercase text-center p-[20px] text-[18px] font-[550] text-textColor">{dataCurrent.title}</div>
                <div className="w-full flex">
                    <div className="w-[50%] h-[400px] px-[10px] relative">
                        <Link href={`/blogs/detail/${dataCurrent.blogs[0].slug}`}>
                            <img src={dataCurrent.blogs[0].thumbnail[0]} className="w-full h-full object-cover rounded-[10px]" />
                            <span className="absolute bottom-0 p-[5px] pb-[30px] w-[96.8%] blog-image-first rounded-bl-[10px] rounded-br-[10px] text-[18px] text-white hover:text-secondary">
                                {dataCurrent.blogs[0].title}
                            </span>
                        </Link>
                    </div>
                    <div className="w-[50%] px-[10px]">
                        {dataCurrent.blogs.slice(1, 4).map((item: any, index: number) => (
                            <div className="flex" key={index}>
                                <div className="w-[186px] h-[121px] mr-[10px] mb-[12px]">
                                    <Link href={`/blogs/detail/${item.slug}`}>
                                        <img src={item.thumbnail[0]} className="w-full h-full object-cover rounded-[10px]" />
                                    </Link>
                                </div>
                                <div className="flex-1">
                                    <Link href={`/blogs/detail/${item.slug}`} className="text-textColor text-[14px] hover:text-secondary">{item.title}</Link>
                                    <div className="text-textColor text-[13px] italic py-1">{item.createdAt}</div>
                                    <div className="text-textColor text-[13px] line-clamp-2" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex">
                <div className="w-[75%] px-[10px]">
                    <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
                        {dataCurrent.blogs.slice(4, 8).map((item: any, index: number) => (
                            <div className="w-full" key={index}>
                                <div className="w-full h-[290px] overflow-hidden rounded-[10px] cursor-pointer">
                                    <img src={item.thumbnail[0]} className="w-full h-full object-cover image-blog-page" />
                                </div>
                                <div className="mt-[10px]">
                                    <Link href={`/blogs/detail/${item.slug}`} className="text-[18px] text-[#222] font-[600] hover:text-primary">{item.title}</Link>
                                    <div className="text-[14px] text-[#2f2f2f] font-[450] line-clamp-2 my-[7px]" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                    <Link href={`/blogs/detail/${item.slug}`} className="underline text-[16px] text-[#000000] font-[400] hover:text-primary">Đọc tiếp</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 px-[10px]">
                    {data.map((item: any, index: number) => (
                        <div key={index}>
                            <div onClick={() => setDataCurrent(data[index])} className={`cursor-pointer text-[18px] font-[600] pb-[8px] border-b border-solid border-secondary ` + (dataCurrent.title == item.title ? "text-primary" : "text-textColor")}>
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
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </>
    )
}
