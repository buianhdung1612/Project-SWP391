"use client"

import React from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio } from '@mui/material';

// interface dataProduct {
//     title: string,
//     description: string,
//     variants: string,
// }

export default function CreateProductAdminPage() {
    const handleSubmit = (event: any) => {
        event.preventDefault();

        

        
    }

    return (
        <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h4" gutterBottom>
                Trang tạo mới sản phẩm
            </Typography>

            <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Tên sản phẩm"
                        name='title'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    {/* <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel id="product-type-label">Danh mục sản phẩm</InputLabel>
                        <Select name='category-id' labelId="product-type-label" label="Danh mục sản phẩm" defaultValue="">
                            <MenuItem value="category1">Danh mục 1</MenuItem>
                            <MenuItem value="category2">Danh mục 2</MenuItem>
                        </Select>
                    </FormControl> */}
                    <TextField
                        label="Mô tả"
                        name="description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Giá theo dung tích"
                        name='variants'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    {/* <TextField
                        label="% Giảm giá"
                        name='discount'
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2 }}
                    /> */}
                    <TextField
                        label="Số lượng"
                        name='stock'
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2 }}
                    />
                    <FormControl fullWidth sx={{ marginBottom: 3 }}>
                        <RadioGroup
                            defaultValue="active"
                            name="status"
                            row
                        >
                            <FormControlLabel value="active" control={<Radio />} label="Hoạt động" />
                            <FormControlLabel value="inactive" control={<Radio />} label="Dừng hoạt động" />
                        </RadioGroup>
                    </FormControl>
                    <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                        Tạo sản phẩm
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}