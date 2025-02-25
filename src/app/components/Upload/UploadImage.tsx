"use client";

import { useState } from "react";

export default function UploadImage(props: {
  label: string;
  id: string;
  name: string;
  onImageChange: (images: (string | File)[]) => void; // Mixed array of URLs and Files
  defaultImages?: string[]; // Initial images as URLs
}) {
  const { label = "", id = "", name = "", onImageChange, defaultImages = [] } = props;

  // State for new uploaded images (File objects)
  const [imagePreviews, setImagePreviews] = useState<File[]>([]);

  // Handle new image uploads
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files); // Convert FileList to Array
      setImagePreviews((prev) => [...prev, ...newFiles]); // Add new files to state
      onImageChange([...defaultImages, ...imagePreviews, ...newFiles]); // Update parent with both existing and new images
    }
  };

  // Handle image removal
  const handleClickDelete = (index: number, isDefault: boolean) => {
    if (isDefault) {
      // Remove default image (URL)
      const updatedDefaultImages = defaultImages.filter((_, i) => i !== index);
      onImageChange([...updatedDefaultImages, ...imagePreviews]); // Notify parent
    } else {
      // Remove newly uploaded image (File)
      const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
      setImagePreviews(updatedPreviews);
      onImageChange([...defaultImages, ...updatedPreviews]); // Notify parent
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

      {/* Display Images */}
      {(defaultImages.length > 0 || imagePreviews.length > 0) && (
        <div className="mt-[10px] flex gap-[10px] flex-wrap">
          {/* Display Default Images */}
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

          {/* Display New Uploaded Images */}
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