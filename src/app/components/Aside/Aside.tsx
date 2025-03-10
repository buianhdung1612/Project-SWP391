"use client";

import { useState, useEffect } from "react";

export default function Aside(props: any) {
    const { data } = props;

    // State để lưu các category đã chọn
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // Đồng bộ hóa các category đã chọn với URL khi trang được tải lần đầu
    useEffect(() => {
        const url = new URL(window.location.href);
        const categoriesFromUrl = url.searchParams.getAll("category");
        setSelectedCategories(categoriesFromUrl); // Lưu danh sách category từ URL vào state
    }, []);

    const handleCheckboxChange = (event: any, subItem: string, title: string) => {
        const url = new URL(location.href); // lấy URL hiện tại

        if (event.target.checked) {
            if (title === "Loại sản phẩm") {
                // Thêm category vào URL nếu chưa có
                url.searchParams.append("category", subItem);
                setSelectedCategories(prev => [...prev, subItem]); // Cập nhật state với category mới được chọn
            }
        } else {
            if (title === "Loại sản phẩm") {
                // Lọc ra các category đã chọn trước đó
                const newCategories = selectedCategories.filter(param => param !== subItem);
                setSelectedCategories(newCategories); // Cập nhật state với danh sách category mới
                url.searchParams.delete("category"); // Xóa tham số category cũ trong URL
                newCategories.forEach(param => url.searchParams.append("category", param)); // Thêm lại tất cả các category đã chọn
            }
        }

        // Cập nhật URL mà không reload trang
        window.history.pushState({}, '', url.toString());
    };

    return (
        <aside className="w-[196px]">
            {data.map((item: any, index: number) => (
                item.data.length > 0 && (
                    <div className="py-[15px] border-b border-solid" key={index}>
                        <div className="text-[18px] font-[600] mb-[8px]">{item.title}</div>
                        {item.data.map((subItem: string, subIndex: number) => (
                            <div key={subIndex} className="flex items-center ml-[5px] mb-[10px]">
                                <input
                                    id={`${item.title}-${subItem}`}
                                    type="checkbox"
                                    onChange={(event) => handleCheckboxChange(event, subItem, item.title)}
                                    checked={selectedCategories.includes(subItem)} 
                                    className="mr-2 cursor-pointer"
                                />
                                <label htmlFor={`${item.title}-${subItem}`} className="text-[14px] text-[#282828] hover:text-primary">{subItem}</label>
                            </div>
                        ))}
                    </div>
                )
            ))}
        </aside>
    );
}
