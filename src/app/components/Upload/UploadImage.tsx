"use client";

import { useState } from "react";

export default function UploadImage(props: {
    label: string;
    id: string;
    name: string;
    onImageChange: (images: File[]) => void;
    defaultImages?: string[]; // Các ảnh mặc định có thể là URL
}) {
    const { label = "", id = "", name = "", onImageChange, defaultImages = [] } = props;

    // Lưu trữ các file ảnh người dùng chọn
    const [imagePreviews, setImagePreviews] = useState<File[]>([]);

    // Xử lý khi người dùng chọn ảnh mới
    const handleChange = (event: any) => {
        const newFiles = Array.from(event.target.files) as File[];
        setImagePreviews((prev) => [...prev, ...newFiles]); // Lưu ảnh mới
        onImageChange([...imagePreviews, ...newFiles]); // Gửi lại cho parent các ảnh mới
    };

    // Xóa ảnh khỏi danh sách
    const handleClickDelete = (index: number, isDefault: boolean) => {
        if (isDefault) {
            // Nếu là ảnh mặc định, chỉ loại bỏ URL khỏi danh sách
            const updatedDefaultImages = defaultImages.filter((_, i) => i !== index);
            console.log(updatedDefaultImages);
            onImageChange(imagePreviews); // Chỉ gửi ảnh mới (không bao gồm ảnh mặc định) cho parent
        } else {
            // Nếu là ảnh do người dùng tải lên, xóa khỏi `imagePreviews`
            const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
            setImagePreviews(updatedPreviews);
            onImageChange(updatedPreviews);
        }
    };

    

    return (
        <div className="mb-[10px]">
            {label && (
                <label htmlFor={id} className="text-[16px] text-[#333] block mb-[5px]">
                    {label}
                </label>
            )}
            <label
                htmlFor={id}
                className="flex items-center justify-center h-[60px] border border-dashed border-[#aaaaaa] rounded-[5px] text-[#aaaaaa] text-[40px] cursor-pointer hover:text-blue-400 hover:border-blue-400"
            >
                +
            </label>
            <input
                type="file"
                name={name}
                id={id}
                accept="image/*"
                className="hidden"
                multiple
                onChange={handleChange}
            />

            {/* Hiển thị ảnh */}
            {(defaultImages.length > 0 || imagePreviews.length > 0) && (
                <div className="mt-[10px] flex gap-[10px] flex-wrap">
                    {/* Hiển thị ảnh mặc định */}
                    {defaultImages.map((image, index) => (
                        <div key={`default-${image}-${index}`} className="relative">
                            <img
                                src={image}
                                className="w-[200px] h-[200px] object-cover border border-solid border-[#aaaaaa] rounded-[5px] p-[10px]"
                            />
                            <button
                                className="absolute right-2 top-1 text-[20px]"
                                onClick={() => handleClickDelete(index, true)}
                            >
                                X
                            </button>
                        </div>
                    ))}

                    {/* Hiển thị ảnh mới tải lên */}
                    {imagePreviews.map((image, index) => (
                        <div key={`preview-${index}`} className="relative">
                            <img
                                src={URL.createObjectURL(image)}
                                className="w-[200px] h-[200px] object-cover border border-solid border-[#aaaaaa] rounded-[5px] p-[10px]"
                            />
                            <button
                                className="absolute right-2 top-1 text-[20px]"
                                onClick={() => handleClickDelete(index, false)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}