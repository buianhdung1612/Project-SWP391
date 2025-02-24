"use client"
import dynamic from 'next/dynamic';
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});
import React, { useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import UploadImage from '@/app/components/Upload/UploadImage';


export default function CreateBlogCategoryAdminPage() {
    // Mô tả TinyMCE
    const [description, setDescription] = useState('');

    // Ảnh Files
    const [images, setImages] = useState<File[]>([]);
    const handleImageChange = (newImages: File[]) => {
        setImages(newImages);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData();

        const dataSubmit = {
            title: event.target.title.value,
            description: description,
            position: event.target.position.value,
            featured: event.target.featured.value,
            status: event.target.status.value
        }

        images.forEach((image) => formData.append("thumbnail", image));

        const response = await fetch('https://freshskinweb.onrender.com/admin/products/brand/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataSubmit)
        });

        const dataResponse = await response.json();

        if (dataResponse.code == 200) {
            location.reload();
        }
    }

    return (
        <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h4" gutterBottom>
                Trang tạo mới danh mục sản phẩm
            </Typography>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Tên danh mục"
                        name='title'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 3 }}
                        required
                    />

                    <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <RadioGroup
                            defaultValue={false}
                            name="featured"
                            row
                        >
                            <FormControlLabel value={true} control={<Radio />} label="Nổi bật" />
                            <FormControlLabel value={false} control={<Radio />} label="Không nổi bật" />
                        </RadioGroup>
                    </FormControl>
                    <h4>Mô tả</h4>
                    <TinyEditor value={description} onEditorChange={(content: string) => setDescription(content)} />
                    <TextField
                        label="Vị trí (tự động tăng)"
                        name='position'
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2, marginTop: 2 }}
                    />
                    <UploadImage label='Chọn ảnh' id="images" name="images" onImageChange={handleImageChange} />
                    <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <RadioGroup
                            defaultValue="ACTIVE"
                            name="status"
                            row
                        >
                            <FormControlLabel value="ACTIVE" control={<Radio />} label="Hoạt động" />
                            <FormControlLabel value="INACTIVE" control={<Radio />} label="Dừng hoạt động" />
                        </RadioGroup>
                    </FormControl>
                    <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                        Tạo danh mục
                    </Button>
                </form>
            </Paper>
        </Box >
    );
}