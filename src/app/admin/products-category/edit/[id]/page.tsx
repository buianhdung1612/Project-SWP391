"use client";

import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { useParams } from "next/navigation";
import UploadImage from "@/app/components/Upload/UploadImage";
import { ProfileAdminContext } from "@/app/admin/layout";
import Alert from "@mui/material/Alert";
const TinyEditor = dynamic(() => import("../../../../../../TinyEditor"), {
    ssr: false,
});

export default function EditProductCategorytAdminPage() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<
        "success" | "error" | "info" | "warning"
    >("info");
    const { id } = useParams();
    const [description, setDescription] = useState("");
    const [listCategory, setListCategory] = useState([]);
    const [categoryCurrent, setCategoryCurrent] = useState(0);

    const [data, setData] = useState({
        title: "",
        description: "",
        featured: false,
        image: [],
        parent: {
            id: 0
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://freshskinweb.onrender.com/admin/products/category/${id}`
            );
            const data = await response.json();
            setData(data.data);
            setCategoryCurrent(data.data.parent.id);
            setDescription(data.data.description);
        };

        fetchData();

        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/products/category/shows');
            const data = await response.json();
            setListCategory(data.data);
        };

        fetchCategories();
    }, []);

    const handleChangeCategory = (event: any) => {
        setCategoryCurrent(event.target.value);
    };

    const handleChangeFeatured = (event: any) => {
        setData({ ...data, featured: event.target.value === "true" });
    };

    const [images, setImages] = useState<(File)[]>([]);

    const handleImageChange = (newImages: (File)[]) => {
        setImages(newImages);
    };

    const handleRemoveDefaultImage = (index: number) => {
        setData(prevData => ({
            ...prevData,
            image: prevData.image.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const request = {
            title: data.title,
            thumbnail: data.image,
            description: description,
            parentID: categoryCurrent,
            featured: data.featured
        };

        const formData = new FormData();

        formData.append("request", JSON.stringify(request));

        images.forEach((image) => {
            if (image instanceof File) {
                formData.append("newImg", image);
            }
        });

        const response = await fetch(
            `https://freshskinweb.onrender.com/admin/products/category/edit/${id}`,
            {
                method: "PATCH",
                body: formData,
            }
        );

        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            setAlertMessage(dataResponse.message);
            setAlertSeverity("success");
            setTimeout(() => location.reload(), 2000);
        } else {
            setAlertMessage(dataResponse.message);
            setAlertSeverity("error");
        }
    };

    return (
        <>
            {alertMessage && (
                <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                    {alertMessage}
                </Alert>
            )}
            {permissions?.includes("brands_edit") && (
                <Box sx={{ padding: 3, backgroundColor: "#e3f2fd" }}>
                    <Typography variant="h5" gutterBottom>
                        Trang chỉnh sửa thương hiệu
                    </Typography>

                    <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Tên danh mục"
                                name="title"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 3 }}
                                required
                                value={data.title}
                                onChange={(e) =>
                                    setData({ ...data, title: e.target.value })
                                }
                            />
                            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
                                <InputLabel shrink={true}>Danh mục cha</InputLabel>
                                <Select
                                    value={categoryCurrent}
                                    onChange={handleChangeCategory}
                                    label=" Chọn danh mục --"
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        -- Chọn danh mục --
                                    </MenuItem>
                                    {listCategory.map((item: any, index: number) => (
                                        <MenuItem key={index} value={item.id}>{item.title}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                                <RadioGroup
                                    value={data.featured.toString()}
                                    name="featured"
                                    onChange={handleChangeFeatured}
                                    row
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Nổi bật" />
                                    <FormControlLabel value="false" control={<Radio />} label="Không nổi bật" />
                                </RadioGroup>
                            </FormControl>
                            <UploadImage
                                label="Chỉnh sửa hình ảnh"
                                id="upload-images"
                                name="images"
                                defaultImages={data.image}
                                onImageChange={handleImageChange}
                                onRemoveDefaultImage={handleRemoveDefaultImage}
                            />
                            <h4>Mô tả</h4>
                            <TinyEditor
                                value={description}
                                onEditorChange={(content: string) => setDescription(content)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ width: "100%" }}
                            >
                                Cập nhật danh mục sản phẩm
                            </Button>
                        </form>
                    </Paper>
                </Box>
            )}
        </>
    );
}