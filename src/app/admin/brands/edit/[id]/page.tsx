"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    FormControl,
    Button,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import { useParams } from "next/navigation";
import UploadImage from "@/app/components/Upload/UploadImage";

const TinyEditor = dynamic(() => import("../../../../../../TinyEditor"), {
    ssr: false,
});

interface DataSubmit {
    title: string;
    description: string;
    position: number;
    featured: boolean;
    status: string;
}

export default function EditBrandtAdminPage() {
    const { id } = useParams();
    const [description, setDescription] = useState("");
    const [images, setImages] = useState<(string | File)[]>([]);

    const [brandInfo, setBrandInfo] = useState({
        title: "",
        description: "",
        position: 0,
        featured: false,
        status: "ACTIVE",
    });

    // Fetch brand data on mount
    useEffect(() => {
        const fetchBrand = async () => {
            const response = await fetch(
                `https://freshskinweb.onrender.com/admin/products/brand/${id}`
            );
            const data = await response.json();
            setBrandInfo(data.data);
            setDescription(data.data.description);
            setImages(data.data.image); // Assuming images are URLs
        };

        fetchBrand();
    }, []);

    const handleImageChange = (updatedImages: (string | File)[]) => {
        setImages((prevImages) => [...prevImages, ...updatedImages]);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const request: DataSubmit = {
            title: brandInfo.title,
            description: description,
            featured: brandInfo.featured,
            status: brandInfo.status,
            position: brandInfo.position,
        };

        const formData = new FormData();

        formData.append("request", JSON.stringify(request));

        images.forEach((image) => {
            formData.append("thumbnail", image);
        });

        // Hàm để in ra dữ liệu trong FormData
        const logFormData = (formData: FormData) => {
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        };

        // Gọi hàm logFormData để in ra dữ liệu
        logFormData(formData);

        const response = await fetch(
            `https://freshskinweb.onrender.com/admin/products/brand/edit/${id}`,
            {
                method: "PATCH",
                body: formData,
            }
        );

        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            location.reload();
        }
    };

    return (
        <Box sx={{ padding: 3, backgroundColor: "#e3f2fd" }}>
            <Typography variant="h4" gutterBottom>
                Trang chỉnh sửa sản phẩm
            </Typography>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Tên thương hiệu"
                        name="title"
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 3 }}
                        required
                        value={brandInfo.title}
                        onChange={(e) =>
                            setBrandInfo({ ...brandInfo, title: e.target.value })
                        }
                    />
                    <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <RadioGroup
                            value={brandInfo.featured.toString()}
                            name="featured"
                            onChange={(e) =>
                                setBrandInfo({ ...brandInfo, featured: e.target.value === "true" })
                            }
                            row
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="Nổi bật"
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="Không nổi bật"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Typography variant="h6" gutterBottom>
                        Hình ảnh
                    </Typography>
                    <UploadImage
                        label="Thêm hình ảnh"
                        id="upload-images"
                        name="images"
                        defaultImages={images.filter((img) => typeof img === "string") as string[]}
                        onImageChange={handleImageChange}
                    />
                    <h4>Mô tả</h4>
                    <TinyEditor
                        value={description}
                        onEditorChange={(content: string) => setDescription(content)}
                    />
                    <TextField
                        label="Vị trí (tự động tăng)"
                        name="position"
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        value={brandInfo.position}
                        onChange={(e) =>
                            setBrandInfo({ ...brandInfo, position: parseInt(e.target.value) })
                        }
                    />
                    <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <RadioGroup
                            value={brandInfo.status}
                            name="status"
                            onChange={(e) =>
                                setBrandInfo({ ...brandInfo, status: e.target.value })
                            }
                            row
                        >
                            <FormControlLabel
                                value="ACTIVE"
                                control={<Radio />}
                                label="Hoạt động"
                            />
                            <FormControlLabel
                                value="INACTIVE"
                                control={<Radio />}
                                label="Dừng hoạt động"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ width: "100%" }}
                    >
                        Cập nhật thương hiệu
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}