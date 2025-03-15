"use client";
import dynamic from 'next/dynamic';
const TinyEditor = dynamic(() => import('../../../../../../TinyEditor'), {
    ssr: false
});
import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, InputLabel, Select, MenuItem } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import UploadImage from '@/app/components/Upload/UploadImage';
import { useParams } from 'next/navigation';
import SubCategory from '@/app/components/Sub-Category/SubCategory';
import { ProfileAdminContext } from '@/app/admin/layout';
import Alert from '@mui/material/Alert';
interface InputField {
    volume: number;
    price: number;
}

type SkinType = 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal';

export default function EditProductAdminPage() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;
    const { id } = useParams();
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");

    // Quản lý mặc định
    const [description, setDescription] = useState('');
    const [listCategory, setListCategory] = useState([]);
    const [brandCurrent, setBrandCurrent] = useState("");
    const [listBrand, setListBrand] = useState([]);
    const [defaultImages, setDefaultImages] = useState<string[]>([]);

    const [productInfo, setProductInfo] = useState({
        title: "",
        categories: {},
        brandId: {},
        description: "",
        variants: [],
        discountPercent: 0,
        position: 0,
        origin: "",
        ingredients: "",
        usageInstructions: "",
        benefits: "",
        skinIssues: "",
        featured: false,
        status: "ACTIVE"
    });
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

        const fetchProduct = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/products/${id}`);
            const data = await response.json();
            setProductInfo(data.data);
            setDescription(data.data.description);
            setInputs(data.data.variants);
            setBrandCurrent(data.data.brand.id.toString());
            setDefaultImages(data.data.thumbnail);
            setInputCheckedCategory(data.data.categories);
        };

        fetchCategories();
        fetchBrands();
        fetchProduct();
    }, []);
    
    // Variants
    const [inputs, setInputs] = useState<InputField[]>([
        { volume: 0, price: 0 }
    ]);

    const handleAddInput = () => {
        setInputs([...inputs, { volume: 0, price: 0 }]);
    };

    const handleRemoveInput = (indexRemove: number) => {
        const newInputs = inputs.filter((item, index) => index !== indexRemove);
        setInputs(newInputs);
    };

    const handleInputChange = (index: number, field: 'volume' | 'price', value: string) => {
        const newInputs = [...inputs];
        newInputs[index][field] = value ? parseFloat(value) : 0;
        setInputs(newInputs);
    };

    // Skin Type
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

    // Upload ảnh
    const [images, setImages] = useState<File[]>([]);
    const handleImageChange = (newImages: File[]) => {
        setImages(newImages);
    };

    const [inputCheckedCategory, setInputCheckedCategory] = useState<number[]>([]);

    const handleCheckedChange = (checkedIds: number[]) => {
        setInputCheckedCategory(prev => {
            const newCheckedIds = Array.from(new Set([...prev, ...checkedIds]));
            return newCheckedIds;
        });
    };

    const handleChangeBrand = (event: any) => {
        setBrandCurrent(event.target.value);
    };

    const handleChangeFeatured = (event: any) => {
        setProductInfo({ ...productInfo, featured: event.target.value === "true" });
    };

    const handleChangeStatus = (event: any) => {
        setProductInfo({ ...productInfo, status: event.target.value });
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

        // const dataSubmit: DataSubmit = {
        //     title: event.target.title.value,
        //     categoryId: parseInt(categoryCurrent),
        //     brandId: parseInt(brandCurrent),
        //     description: description,
        //     variants: inputs,
        //     discount: event.target.discount.value,
        //     origin: event.target.origin.value,
        //     ingredients: event.target.ingredients.value,
        //     usageInstructions: event.target.usageInstructions.value,
        //     benefits: event.target.benefits.value,
        //     skinIssues: event.target.skinIssues.value,
        //     featured: event.target.featured.value,
        //     status: event.target.status.value,
        //     position: event.target.position.value
        // }

        const formData = new FormData();

        // Tạo đối tượng JSON cho phần "request"
        const requestPayload = {
            categoryId: inputCheckedCategory,
            brandId: brandCurrent,
            title: event.target.title.value,
            description: description,
            variants: inputs.map(input => ({
                price: Number(input.price),
                volume: input.volume ? Number(input.volume) : 0
            })),
            skinTypes: [1, 2, 3, 4, 5],
            discountPercent: parseInt(event.target.discount.value),
            position: event.target.position.value,
            origin: event.target.origin.value,
            ingredients: event.target.ingredients.value,
            usageInstructions: event.target.usageInstructions.value,
            benefits: event.target.benefits.value,
            skinIssues: event.target.skinIssues.value,
            featured: event.target.featured.value === "true",
            status: event.target.status.value,
        };

        formData.append("request", JSON.stringify(requestPayload));

        images.forEach((image) => formData.append("thumbnail", image));

        const response = await fetch(`https://freshskinweb.onrender.com/admin/products/edit/${id}`, {
            method: "PATCH",
            body: formData,
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
    };

    return (
        <>{
            alertMessage && (
                <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                    {alertMessage}
                </Alert>
            )
        }
        <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h4" gutterBottom>
                Trang chỉnh sửa sản phẩm
            </Typography>

            {permissions?.includes("products_edit") && (
                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Tên sản phẩm"
                            name='title'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                            value={productInfo.title}
                            onChange={(e) => setProductInfo({ ...productInfo, title: e.target.value })}
                        />
                        <div className='mb-6 sub-menu'>
                            <Typography className='border border-solid border-[#BFBFBF] rounded-[5px] p-[10px]'>Chọn danh mục sản phẩm</Typography>
                            <SubCategory items={listCategory} onCheckedChange={handleCheckedChange} defaultCheckedIds={inputCheckedCategory} />
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
                                value={productInfo.featured.toString()}
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
                        <UploadImage label='Chọn ảnh' id="images" name="images" onImageChange={handleImageChange} defaultImages={defaultImages} />
                        <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                            {inputs.map((input, index: number) => (
                                <Box key={`${input.volume}-${input.price}-${index}`} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
                            value={productInfo.discountPercent}
                            onChange={(e) => setProductInfo({ ...productInfo, discountPercent: parseFloat(e.target.value) })}
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
                            value={productInfo.origin}
                            onChange={(e) => setProductInfo({ ...productInfo, origin: e.target.value })}
                        />
                        <TextField
                            label="Thành phần"
                            name='ingredients'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 2, marginTop: 2 }}
                            required
                            value={productInfo.ingredients}
                            onChange={(e) => setProductInfo({ ...productInfo, ingredients: e.target.value })}
                        />
                        <TextField
                            label="Hướng dẫn sử dụng"
                            name='usageInstructions'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 2, marginTop: 2 }}
                            required
                            value={productInfo.usageInstructions}
                            onChange={(e) => setProductInfo({ ...productInfo, usageInstructions: e.target.value })}
                        />
                        <TextField
                            label="Lợi ích"
                            name='benefits'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 2, marginTop: 2 }}
                            required
                            value={productInfo.benefits}
                            onChange={(e) => setProductInfo({ ...productInfo, benefits: e.target.value })}
                        />
                        <TextField
                            label="Vấn đề da"
                            name='skinIssues'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 2, marginTop: 2 }}
                            required
                            value={productInfo.skinIssues}
                            onChange={(e) => setProductInfo({ ...productInfo, skinIssues: e.target.value })}
                        />
                        <TextField
                            label="Vị trí (tự động tăng)"
                            name='position'
                            variant="outlined"
                            fullWidth
                            type="number"
                            sx={{ marginBottom: 2, marginTop: 2 }}
                            value={productInfo.position}
                            onChange={(e) => setProductInfo({ ...productInfo, position: parseInt(e.target.value) })}
                        />
                        <FormControl fullWidth sx={{ marginBottom: 3 }}>
                            <RadioGroup
                                value={productInfo.status}
                                name="status"
                                onChange={handleChangeStatus}
                                row
                            >
                                <FormControlLabel value="ACTIVE" control={<Radio />} label="Hoạt động" />
                                <FormControlLabel value="INACTIVE" control={<Radio />} label="Dừng hoạt động" />
                            </RadioGroup>
                        </FormControl>
                        <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                            Cập nhật sản phẩm
                        </Button>
                    </form>
                </Paper>
            )}
        </Box>
        </>
    );
}
