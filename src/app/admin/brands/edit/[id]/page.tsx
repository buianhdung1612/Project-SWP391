"use client";
import dynamic from 'next/dynamic';
const TinyEditor = dynamic(() => import('../../../../../../TinyEditor'), {
    ssr: false
});
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import UploadImage from '@/app/components/Upload/UploadImage';
import { useParams } from 'next/navigation';

interface DataSubmit {
    title: string,
    description: string,
    position: number,
    featured: boolean,
    status: string
}


export default function EditBrandtAdminPage() {
    const { id } = useParams();
    const [description, setDescription] = useState('');

    const [brandInfo, setBrandInfo] = useState({
        title: "",
        description: "",
        position: 0,
        featured: false,
        status: "ACTIVE"
    });

    // Láy data
    useEffect(() => {
        const fetchBrand = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/products/brand/${id}`);
            const data = await response.json();
            setBrandInfo(data.data);
            setDescription(data.data.description);
        };

        fetchBrand();
    }, []);


    const handleChangeFeatured = (event: any) => {
        setBrandInfo({ ...brandInfo, featured: event.target.value === "true" });
    };

    const handleChangeStatus = (event: any) => {
        setBrandInfo({ ...brandInfo, status: event.target.value });
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const dataSubmit: DataSubmit = {
            title: event.target.title.value,
            description: description,
            featured: event.target.featured.value,
            status: event.target.status.value,
            position: event.target.position.value
        }
        
        const response = await fetch(`https://freshskinweb.onrender.com/admin/products/brand/edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataSubmit)
        });

        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            location.reload();
        }
    };

    return (
        <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h4" gutterBottom>
                Trang chỉnh sửa sản phẩm
            </Typography>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Tên thương hiệu"
                        name='title'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 3 }}
                        required
                        value={brandInfo.title}
                        onChange={(e) => setBrandInfo({ ...brandInfo, title: e.target.value })}
                    />
                    <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <RadioGroup
                            value={brandInfo.featured.toString()}
                            name="featured"
                            onChange={handleChangeFeatured}
                            row
                        >
                            <FormControlLabel value="true" control={<Radio />} label="Nổi bật" />
                            <FormControlLabel value="false" control={<Radio />} label="Không nổi bật" />
                        </RadioGroup>
                    </FormControl>
                    <h4>Mô tả</h4>
                    <TinyEditor value={description} onEditorChange={(content: string) => setDescription(content)} />
                    <UploadImage label='Chọn ảnh' id="images" name="images" />                                     
                    <TextField
                        label="Vị trí (tự động tăng)"
                        name='position'
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        value={brandInfo.position}
                        onChange={(e) => setBrandInfo({ ...brandInfo, position: parseInt(e.target.value) })}
                    />
                    <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <RadioGroup
                            value={brandInfo.status}
                            name="status"
                            onChange={handleChangeStatus}
                            row
                        >
                            <FormControlLabel value="ACTIVE" control={<Radio />} label="Hoạt động" />
                            <FormControlLabel value="INACTIVE" control={<Radio />} label="Dừng hoạt động" />
                        </RadioGroup>
                    </FormControl>
                    <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                        Cập nhật thương hiệu
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
