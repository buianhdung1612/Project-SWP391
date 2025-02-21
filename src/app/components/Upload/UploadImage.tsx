"use client"

import { useState } from "react";

export default function UploadImage(props: {
    label: string,
    id: string,
    name: string
}) {
    const { label = "", id = "", name = "" } = props;

    const [imagePreviews, setImagePreviews] = useState<File[]>([]);

    const handleChange = (event: any) => {
        const newFiles = Array.from(event.target.files) as File[];
        setImagePreviews(prevFiles => [...prevFiles, ...newFiles]);
    };

    const handleClickDelete = (index: number) => {
        setImagePreviews(prevFiles => prevFiles.filter((_, i) => i !== index)); 
    };

    return (
        <>
            <div className="mb-[10px]">
                {label && (
                    <label htmlFor={id} className="text-[16px] text-[#333] block mb-[5px]">{label}</label>
                )}
                <label htmlFor={id} className="flex items-center justify-center h-[60px] border border-dashed border-[#aaaaaa] rounded-[5px] text-[#aaaaaa] text-[40px] cursor-pointer hover:text-blue-400 hover:border-blue-400">+</label>
                <input type="file" name={name} id={id} accept="image/*" className="hidden" multiple onChange={handleChange} />

                {imagePreviews.length > 0 && (
                    <div className="mt-[10px] flex gap-[10px] flex-wrap">
                        {imagePreviews.map((image: any, index: number) => (
                            <div className="relative">
                                <img
                                    key={`${image.name}-${image.lastModified}`}
                                    src={URL.createObjectURL(image)}
                                    className="w-[200px] h-[200px] object-cover border border-solid border-[#aaaaaa] rounded-[5px] p-[10px]"
                                />
                                <button className="absolute right-2 top-1 text-[20px]" onClick={() => handleClickDelete(index)}>X</button>
                            </div>

                        ))}
                    </div>
                )}
            </div>
        </>
    )
}