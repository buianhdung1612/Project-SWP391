"use client"
import dynamic from 'next/dynamic';

const TinyEditor = dynamic(() => import("../../../../../../TinyEditor"), {
    ssr: false
});

import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select } from '@mui/material';
// import UploadImage from '@/app/components/Upload/UploadImage';
import { useParams } from 'next/navigation';
import { ProfileAdminContext } from '@/app/admin/layout';
import Alert from '@mui/material/Alert';
export default function EditBlogAdminPage() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;
    const { id } = useParams();

    const [content, setContent] = useState('');
    const [categoryCurrent, setCategoryCurrent] = useState('');
    const [listCategory, setListCategory] = useState([]);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");
    const [data, setData] = useState({
        title: "",
        position: 0,
        status: "ACTIVE",
        featured: false
    })

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/blogs/category/show');
            const data = await response.json();
            setListCategory(data.data);
        };

        const fetchDataBlog = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/blogs/${id}`);
            const data = await response.json();
            console.log(data)
            setData(data.data);
            setContent(data.data.content);
            setCategoryCurrent(data.data.blogCategory.id)
        }

        fetchCategories();
        fetchDataBlog();
    }, []);

    const handleChangeCategory = (event: any) => {
        setCategoryCurrent(event.target.value);
    };

    // const [images, setImages] = useState<(File)[]>([]);

    // const handleImageChange = (newImages: (File)[]) => {
    //     setImages(newImages);
    // };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const formData = new FormData(event.currentTarget);

        // const request = {
        //     title: formData.get("title"),
        //     content: content,
        //     position: formData.get("position"),
        //     status: formData.get("status"),
        //     featured: formData.get("featured") === "true",
        //     categoryID: categoryCurrent
        // };

        // formData.append("request", JSON.stringify(request));

        // images.forEach((image) => {
        //     if (image instanceof File) {
        //         formData.append("thumbnail", image);
        //     }
        // });

        const dataSubmit: any = {
            title: data.title,
            categoryID: categoryCurrent,
            content: content,
            featured: data.featured,
            position: data.position,
            status: data.status
        }

        console.log(dataSubmit);

        const response = await fetch(`https://freshskinweb.onrender.com/admin/blogs/edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: dataSubmit
        });

        const dataResponse = await response.json();

      
        if (dataResponse.code === 200) {
            setAlertMessage(dataResponse.message);
            setAlertSeverity("success");
            setTimeout(() => location.reload(), 2000);
        } else {
            setAlertMessage(dataResponse.message);
            setAlertSeverity("error");
        }
    }

    return (
       <> {alertMessage && (
            <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                {alertMessage}
            </Alert>
        )}
        <Box sx={{ padding: 3, backgroundColor: '#F5F5F5' }}>
            <Typography variant="h5" gutterBottom>
                Trang tạo mới bài viết
            </Typography>

            {permissions?.includes("blogs_edit") && (
                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Tiêu đề bài viết"
                            name='title'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                        />
                        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
                            <InputLabel shrink={true}>-- Chọn danh mục --</InputLabel>
                            <Select
                                value={categoryCurrent}
                                onChange={handleChangeCategory}
                                label=" Chọn danh mục --"
                                displayEmpty
                            >
                                <MenuItem value=''>
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
                                row
                                onChange={(e) => setData({ ...data, featured: e.target.value === "true" })}
                            >
                                <FormControlLabel value={true} control={<Radio />} label="Nổi bật" />
                                <FormControlLabel value={false} control={<Radio />} label="Không nổi bật" />
                            </RadioGroup>
                        </FormControl>
                        {/* <UploadImage
                        label="Chọn ảnh"
                        id="images"
                        name="images"
                        onImageChange={handleImageChange}
                    /> */}
                        <h4>Nội dung bài viết</h4>
                        <TinyEditor value={content} onEditorChange={(content: string) => setContent(content)} />
                        <TextField
                            label="Vị trí (tự động tăng)"
                            name='position'
                            variant="outlined"
                            fullWidth
                            type="number"
                            sx={{ marginBottom: 2, marginTop: 2 }}
                            value={data.position}
                            onChange={(e) => setData({ ...data, position: parseInt(e.target.value) })}
                        />
                        {/* <UploadImage/> */}
                        <FormControl fullWidth sx={{ marginBottom: 3 }}>
                            <RadioGroup
                                value={data.status}
                                name="status"
                                row
                                onChange={(e) => setData({ ...data, status: e.target.value })}
                            >
                                <FormControlLabel value="ACTIVE" control={<Radio />} label="Hoạt động" />
                                <FormControlLabel value="INACTIVE" control={<Radio />} label="Dừng hoạt động" />
                            </RadioGroup>
                        </FormControl>
                        <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                            Chỉnh sửa bài viết
                        </Button>
                    </form>
                </Paper>
            )}
        </Box >
        </>
    );
}