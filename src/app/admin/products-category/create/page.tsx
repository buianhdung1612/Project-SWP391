"use client"
import dynamic from 'next/dynamic';
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, InputLabel, Select, MenuItem } from '@mui/material';
// import UploadImage from '@/app/components/Upload/UploadImage';

interface DataSubmit {
    title: string,
    parentId: number,
    description: string,
    position: number,
    featured: boolean,
    status: string
}

export default function CreateProductAdminPage() {
    const [description, setDescription] = useState('');
    const [categoryCurrent, setCategoryCurrent] = useState("");
    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/products/category/show');
            const data = await response.json();
            setListCategory(data.data);
        };

        fetchCategories();
    }, []);

    const handleChangeCategory = (event: any) => {
        setCategoryCurrent(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const dataSubmit: DataSubmit = {
            title: event.target.title.value,
            parentId: parseInt(categoryCurrent),
            description: description,
            position: event.target.position.value,
            featured: event.target.featured.value,
            status: event.target.status.value
        }

        const response = await fetch('https://freshskinweb.onrender.com/admin/products/category/create', {
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
                        label="Tên sản phẩm"
                        name='title'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 3 }}
                        required
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
                    {/* <UploadImage/> */}
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