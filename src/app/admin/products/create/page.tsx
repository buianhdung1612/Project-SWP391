"use client"
import dynamic from 'next/dynamic';
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, InputLabel, Select, MenuItem } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';

// interface dataProduct {
//     title: string,
//     description: string,
//     variants: string,
// }



interface InputField {
    volume: string;
    price: string;
}

type SkinType = 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';

interface Variants {
    volume: number | string,
    price: number | string
}

interface DataSubmit {
    title: string,
    categoryId: number,
    brandId: number,
    description: string,
    variants: Variants[],
    discountPercent: number,
    position: number,
    // skinType: string[],
    origin: string,
    ingredients: string,
    usageInstructions: string,
    benefits: string,
    skinIssues: string,
    featured: boolean,
    status: string
}

export default function CreateProductAdminPage() {
    const [description, setDescription] = useState('');
    const [categoryCurrent, setCategoryCurrent] = useState("");
    const [listCategory, setListCategory] = useState([]);
    const [brandCurrent, setBrandCurrent] = useState("");
    const [listBrand, setListBrand] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/products/category/show');
            const data = await response.json();
            setListCategory(data.data);
        };

        fetchCategories();

        const fetchBrands = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/products/brand/show');
            const data = await response.json();
            setListBrand(data.data);
        };

        fetchBrands();
    }, []);

    const handleChangeCategory = (event: any) => {
        setCategoryCurrent(event.target.value);
    };

    const handleChangeBrand = (event: any) => {
        setBrandCurrent(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // Skin Type
        const selectedSkinTypes: string[] = [];

        for (const type in checked) {
            if (checked[type as SkinType]) {
                selectedSkinTypes.push(type as SkinType);
            }
        }

        const dataSubmit: DataSubmit = {
            title: event.target.title.value,
            categoryId: parseInt(categoryCurrent),
            brandId: parseInt(brandCurrent),
            description: description,
            variants: inputs,
            discountPercent: event.target.discount.value,
            position: event.target.position.value,
            // skinType: selectedSkinTypes,
            origin: event.target.origin.value,
            ingredients: event.target.ingredients.value,
            usageInstructions: event.target.usageInstructions.value,
            benefits: event.target.benefits.value,
            skinIssues: event.target.skinIssues.value,
            featured: event.target.featured.value,
            status: event.target.status.value
        }

        const response = await fetch('https://freshskinweb.onrender.com/admin/products/create', {
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

    // Variants
    const [inputs, setInputs] = useState<InputField[]>([
        { volume: "", price: "" }
    ]);

    const handleAddInput = () => {
        setInputs(
            [...inputs, { volume: "", price: "" }]
        );
    };

    const handleRemoveInput = (indexRemove: number) => {
        const newInputs = inputs.filter((item, index) => index !== indexRemove);
        setInputs(newInputs);
    };

    const handleInputChange = (index: number, field: 'volume' | 'price', value: string) => {
        const newInputs = [...inputs];
        newInputs[index][field] = value;
        setInputs(newInputs);
    };

    // SkinType
    const [checked, setChecked] = useState({
        oily: false,
        dry: false,
        combination: false,
        sensitive: false,
        normal: false,
    });

    const handleChange = (event: any) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };


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
                        sx={{ marginBottom: 3 }}
                        required
                    />
                    <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
                        <InputLabel shrink={true}>-- Chọn danh mục --</InputLabel>
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
                    {/* <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel id="product-type-label">Danh mục sản phẩm</InputLabel>
                        <Select name='category-id' labelId="product-type-label" label="Danh mục sản phẩm" defaultValue="">
                            <MenuItem value="category1">Danh mục 1</MenuItem>
                            <MenuItem value="category2">Danh mục 2</MenuItem>
                        </Select>
                    </FormControl> */}
                    <h4>Mô tả</h4>
                    <TinyEditor value={description} onEditorChange={(content: string) => setDescription(content)} />

                    <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                        {inputs.map((input, index: number) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TextField
                                    label="Dung tích (ml)"
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
                    <TextField
                        label="Số lượng"
                        name='stock'
                        variant="outlined"
                        fullWidth
                        type="number"
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        required
                    />
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={checked.oily} onChange={handleChange} name="oily" />}
                            label="Da dầu"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checked.dry} onChange={handleChange} name="dry" />}
                            label="Da khô"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checked.combination} onChange={handleChange} name="combination" />}
                            label="Da hỗn hợp"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checked.sensitive} onChange={handleChange} name="sensitive" />}
                            label="Da nhạy cảm"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checked.normal} onChange={handleChange} name="normal" />}
                            label="Da bình thường"
                        />
                    </FormGroup>
                    <TextField
                        label="Xuất sứ"
                        name='origin'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        required
                    />
                    <TextField
                        label="Thành phần"
                        name='ingredients'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        required
                    />
                    <TextField
                        label="Hướng dẫn sử dụng"
                        name='usageInstructions'
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2, marginTop: 2 }}
                        required
                    />
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