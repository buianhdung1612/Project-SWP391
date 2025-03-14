"use client"
import dynamic from 'next/dynamic';
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});
import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select } from '@mui/material';
import UploadImage from '@/app/components/Upload/UploadImage';
import { ProfileAdminContext } from '../../layout';

export default function CreateBlogAdminPage() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;
    const [content, setContent] = useState('');
    const [categoryCurrent, setCategoryCurrent] = useState('');
    const [listCategory, setListCategory] = useState([]);
    const [loading, setLoading] = useState(false); // Thêm trạng thái loading

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/blogs/category/show');
            const data = await response.json();
            setListCategory(data.data);
        };

        fetchCategories();
    }, []);

    const handleChangeCategory = (event: any) => {
        setCategoryCurrent(event.target.value);
    };

    const [images, setImages] = useState<(File)[]>([]);

    const handleImageChange = (newImages: (File)[]) => {
        setImages(newImages);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (loading) return; // Nếu đang gửi request, không làm gì cả

        setLoading(true); // Bắt đầu gửi request
        try {
            const formData = new FormData(event.currentTarget);

            const request = {
                title: formData.get("title"),
                content: content,
                position: formData.get("position"),
                status: formData.get("status"),
                featured: formData.get("featured") === "true",
                categoryID: categoryCurrent
            };

            formData.append("request", JSON.stringify(request));

            images.forEach((image) => {
                if (image instanceof File) {
                    formData.append("thumbnail", image);
                }
            });

            const response = await fetch('https://freshskinweb.onrender.com/admin/blogs/create', {
                method: "POST",
                body: formData
            });

            const dataResponse = await response.json();

            if (dataResponse.code === 200) {
                alert("Bài viết đã được tạo thành công!");
                location.reload();
            } else {
                alert("Có lỗi xảy ra. Vui lòng thử lại!");
            }
        } catch (error) {
            alert("Lỗi khi gửi dữ liệu!");
            console.error(error);
        } finally {
            setLoading(false); // Kết thúc request
        }
    };

    return (
        <Box sx={{ padding: 3, backgroundColor: '#F5F5F5' }}>
            <Typography variant="h5" gutterBottom>
                Trang tạo mới bài viết
            </Typography>

            {permissions?.includes("blogs_create") && (
                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Tiêu đề bài viết"
                            name='title'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
                            <InputLabel shrink={true}>-- Chọn danh mục --</InputLabel>
                            <Select
                                value={categoryCurrent}
                                onChange={handleChangeCategory}
                                label="Chọn danh mục --"
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
                        <h4>Nội dung bài viết</h4>
                        <TinyEditor value={content} onEditorChange={(content: string) => setContent(content)} />
                        <TextField
                            label="Vị trí (tự động tăng)"
                            name='position'
                            variant="outlined"
                            fullWidth
                            type="number"
                            sx={{ marginBottom: 2, marginTop: 2 }}
                        />
                        <FormControl fullWidth sx={{ marginBottom: 3 }}>
                            <RadioGroup defaultValue="ACTIVE" name="status" row>
                                <FormControlLabel value="ACTIVE" control={<Radio />} label="Hoạt động" />
                                <FormControlLabel value="INACTIVE" control={<Radio />} label="Dừng hoạt động" />
                            </RadioGroup>
                        </FormControl>
                        <Button 
                            type='submit' 
                            variant="contained" 
                            color="primary" 
                            sx={{ width: '100%' }}
                            disabled={loading} // Vô hiệu hóa khi đang gửi request
                        >
                            {loading ? "Đang tạo bài viết..." : "Tạo bài viết"}
                        </Button>
                    </form>
                </Paper>
            )}
        </Box>
    );
}
