"use client";

import dynamic from "next/dynamic";
import React, { useContext, useState } from "react";
import Alert from '@mui/material/Alert';
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
import UploadImage from "@/app/components/Upload/UploadImage";
import { ProfileAdminContext } from "../../layout";

const TinyEditor = dynamic(() => import("../../../../../TinyEditor"), {
    ssr: false,
});

export default function CreateBrandAdminPage() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;
    const [description, setDescription] = useState("");
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");
    const [images, setImages] = useState<(File)[]>([]);

    const handleImageChange = (newImages: (File)[]) => {
        setImages(newImages);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const request = {
            title: formData.get("title"),
            description: description,
            position: formData.get("position"),
            status: formData.get("status"),
            featured: formData.get("featured") === "true",
        };

        formData.append("request", JSON.stringify(request));

        images.forEach((image) => {
            if (image instanceof File) {
                formData.append("thumbnail", image);
            }
        });
        {
            alertMessage && (
                <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                    {alertMessage}
                </Alert>
            )
        }

        const response = await fetch(
            "https://freshskinweb.onrender.com/admin/products/brand/create",
            {
                method: "POST",
                body: formData,
            }
        );

        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            location.reload();
        }
    };

    return (
        <>
            {permissions?.includes("brands_create") && (
                <Box sx={{ padding: 3, backgroundColor: "#ffffff" }}>
                    <Typography variant="h5" gutterBottom>
                        Trang tạo mới thương hiệu sản phẩm
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
                            />
                            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                                <RadioGroup defaultValue={false} name="featured" row>
                                    <FormControlLabel value={true} control={<Radio />} label="Nổi bật" />
                                    <FormControlLabel value={false} control={<Radio />} label="Không nổi bật" />
                                </RadioGroup>
                            </FormControl>
                            <UploadImage
                                label="Chọn ảnh"
                                id="images"
                                name="images"
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
                            />
                            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                                <RadioGroup defaultValue="ACTIVE" name="status" row>
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
                                Tạo thương hiệu
                            </Button>
                        </form>
                    </Paper>
                </Box>
            )}
        </>
    );
}