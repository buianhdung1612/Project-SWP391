"use client"
import dynamic from 'next/dynamic';
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, InputLabel, Select, MenuItem, Divider } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import UploadImage from '@/app/components/Upload/UploadImage';
import SubCategory from '@/app/components/Sub-Category/SubCategory';

interface InputField {
    price: number;
    volume: number;
    unit: string
}

export default function CreateProductAdminPage() {
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [usageInstructions, setUsageInstructions] = useState('');
    const [listCategory, setListCategory] = useState([]);
    const [brandCurrent, setBrandCurrent] = useState('');
    const [listBrand, setListBrand] = useState([]);
    const [listSkinType, setListSkinType] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/products/category/show');
            const data = await response.json();
            setListCategory(data.data);
        };
        const fetchBrands = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/products/brand/show');
            const data = await response.json();
            setListBrand(data.data);
        };

        const fetchSkintypes = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/skintypes/show');
            const data = await response.json();
            setListSkinType(data.data);
        }

        fetchCategories();
        fetchBrands();
        fetchSkintypes();
    }, []);

    const [inputCheckedCategory, setInputCheckedCategory] = useState<number[]>([]);

    const handleCheckedChange = (checkedIds: number[]) => {
        setInputCheckedCategory(prev => {
            const newCheckedIds = Array.from(new Set([...prev, ...checkedIds]));
            return newCheckedIds;
        });
    };

    const [images, setImages] = useState<File[]>([]);
    const handleImageChange = (newImages: File[]) => {
        setImages(newImages);
    };

    const handleChangeBrand = (event: any) => {
        setBrandCurrent(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData();

        const request = {
            categoryId: inputCheckedCategory,
            brandId: brandCurrent,
            title: event.target.title.value,
            description: description,
            variants: inputs.map(input => ({
                price: Number(input.price),
                volume: input.volume ? Number(input.volume) : 0,
                unit: input.unit
            })),
            skinTypes: checkedSkinType,
            discountPercent: parseInt(event.target.discount.value),
            position: event.target.position.value,
            origin: event.target.origin.value,
            ingredients: ingredients,
            usageInstructions: usageInstructions,
            benefits: event.target.benefits.value,
            skinIssues: event.target.skinIssues.value,
            featured: event.target.featured.value === "true",
            status: event.target.status.value,
        };

        formData.append("request", JSON.stringify(request));

        images.forEach((image) => formData.append("thumbnail", image));

        const response = await fetch('https://freshskinweb.onrender.com/admin/products/create', {
            method: 'POST',
            body: formData,
        });

        const dataResponse = await response.json();
        if (dataResponse.code === 200) {
            location.reload();
        }
    }

    // Variants
    const [inputs, setInputs] = useState<InputField[]>([
        { price: 0, volume: 0, unit: "ML" }
    ]);
    const handleAddInput = () => {
        setInputs(
            [...inputs, { price: 0, volume: 0, unit: "ML" }]
        );
    };
    const handleRemoveInput = (indexRemove: number) => {
        const newInputs = inputs.filter((_, index) => index !== indexRemove);
        setInputs(newInputs);
    };
    const handleInputChange = (index: number, field: 'volume' | 'price' | 'unit', value: string) => {
        const newInputs = [...inputs];
        if (field === "unit") {
            newInputs[index][field] = value ? value : "ML";
        }
        else {
            newInputs[index][field] = value ? parseFloat(value) : 0;
        }
        setInputs(newInputs);
    };

    // SkinType
    const [checkedSkinType, setCheckedSkinType] = useState<number[]>([]);
    const handleChangeCheckedSkinType = (event: any) => {
        const id = parseInt(event.target.name);
        setCheckedSkinType((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };


    return (
        <Box sx={{ padding: 3, backgroundColor: '#ffffff' }}>
            <Typography variant="h5" gutterBottom>
                Trang tạo mới sản phẩm
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
                    <div className='mb-6 sub-menu'>
                        <Typography className='border border-solid border-[#BFBFBF] rounded-[5px] p-[10px]'>Chọn danh mục sản phẩm</Typography>
                        <SubCategory items={listCategory} onCheckedChange={handleCheckedChange} />
                    </div>
                    <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
                        <InputLabel shrink={true}>-- Chọn thương hiệu --</InputLabel>
                        <Select
                            value={brandCurrent}
                            onChange={handleChangeBrand}
                            label=" Chọn thương hiệu --"
                            displayEmpty
                        >
                            <MenuItem value="">
                                -- Chọn thương hiệu --
                            </MenuItem>
                            {listBrand.map((item: any, index: number) => (
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
                    <UploadImage label='Chọn ảnh' id="images" name="images" onImageChange={handleImageChange} />

                    <h4>Mô tả</h4>
                    <TinyEditor value={description} onEditorChange={(content: string) => setDescription(content)} />
                    <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                        {inputs.map((input, index: number) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TextField
                                    label="Dung tích / Số lượng"
                                    type='number'
                                    variant="outlined"
                                    size="small"
                                    value={input.volume}
                                    onChange={(e) => handleInputChange(index, 'volume', e.target.value)}
                                    sx={{ mr: 1, width: "150px" }}
                                />
                                <Typography variant="h6">:</Typography>
                                <TextField
                                    label="Giá"
                                    type='number'
                                    variant="outlined"
                                    size="small"
                                    value={input.price}
                                    onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                    sx={{ ml: 1, width: "150px" }}
                                />
                                <Select
                                    value={input.unit}
                                    onChange={(e) => handleInputChange(index, "unit", e.target.value)}
                                    size="small"
                                    sx={{ ml: 1, width: "150px" }}
                                >
                                    <MenuItem value="ML">ML</MenuItem>
                                    <MenuItem value="G">G</MenuItem>
                                </Select>
                                <MdDeleteForever onClick={() => handleRemoveInput(index)} className='text-red-400 text-[25px] ml-[10px] cursor-pointer' />
                            </Box>
                        ))}
                        <Button variant="contained" onClick={handleAddInput}>
                            Thêm
                        </Button>
                    </Box>
                    <TextField
                        label="% Giảm giá"
                        name='discount'
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2 }}
                        required
                    />
                    <FormGroup row>
                        {listSkinType.map((item: any, index: number) => (
                            <FormControlLabel
                                key={index}
                                control={<Checkbox checked={checkedSkinType.includes(item.id)} onChange={handleChangeCheckedSkinType} name={item.id} />}
                                label={item.type}
                            />
                        ))}
                    </FormGroup>
                    <TextField
                        label="Xuất sứ"
                        name='origin'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        required
                    />
                    <h4>Thành phần</h4>
                    <TinyEditor value={ingredients} onEditorChange={(ingredients: string) => setIngredients(ingredients)} />
                    <Divider sx={{marginBottom: 2}}/>
                    <h4>Hướng dẫn sử dụng</h4>
                    <TinyEditor value={usageInstructions} onEditorChange={(usageInstructions: string) => setUsageInstructions(usageInstructions)} />
                    <TextField
                        label="Lợi ích"
                        name='benefits'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        required
                    />
                    <TextField
                        label="Vấn đề da"
                        name='skinIssues'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        required
                    />
                    <TextField
                        label="Vị trí (tự động tăng)"
                        name='position'
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2, marginTop: 2 }}
                    />
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
                        Tạo sản phẩm
                    </Button>
                </form>
            </Paper>
        </Box >
    );
}