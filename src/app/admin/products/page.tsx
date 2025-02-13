"use client"

import { Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import TableProduct from "./TableProduct";
import { useEffect, useState } from "react";

export default function ProductsAdminPage() {
    const [products, setProducts] = useState([]);
    const [linkApi, setLinkApi] = useState('https://freshskinweb.onrender.com/admin/products');

    // Hiển thị lựa chọn mặc định
    const [filterStatus, setFilterStatus] = useState("");
    const [keyword, setKeyword] = useState("");
    const [sort, setSort] = useState("position-desc");

    useEffect(() => {
        const urlCurrent = new URL(location.href);
        const api = new URL(linkApi);

        // Lọc theo trạng thái
        const statusCurrent = urlCurrent.searchParams.get('status');
        setFilterStatus(statusCurrent ?? "");

        if (statusCurrent) {
            api.searchParams.set('status', statusCurrent);
        }
        else {
            api.searchParams.delete('status');
        }
        // Hết Lọc theo trạng thái

        // Tìm kiếm sản phẩm
        const keywordCurrent = urlCurrent.searchParams.get('keyword');
        setKeyword(keywordCurrent ?? "");

        if (keywordCurrent) {
            api.searchParams.set('keyword', keywordCurrent);
        }
        else {
            api.searchParams.delete('keyword');
        }
        // Hết Tìm kiếm sản phẩm

        // Sắp xếp theo tiêu chí
        const sortKeyCurrent = urlCurrent.searchParams.get('sortKey');
        const sortValueCurrent = urlCurrent.searchParams.get('sortValue');

        if (sortKeyCurrent && sortValueCurrent) {
            setSort(`${sortKeyCurrent}-${sortValueCurrent}`);
        } else {
            setSort("position-desc");
        }

        if(sortKeyCurrent && sortValueCurrent){
            api.searchParams.set("sortKey", sortKeyCurrent);
            api.searchParams.set("sortValue", sortValueCurrent);
        }
        else{
            api.searchParams.delete("sortKey");
            api.searchParams.delete("sortValue");
        }
        // Hết Sắp xếp theo tiêu chí

        const fetchProducts = async () => {
            const response = await fetch(api.href);
            const data = await response.json();
            setProducts(data.data.products);
        };

        fetchProducts();
    }, []);

    // Lọc theo trạng thái
    const handleChangeFilterStatus = async (event: any) => {
        const value = event.target.value;
        let url = new URL(location.href);

        if (value) {
            url.searchParams.set("status", value);
        }
        else {
            url.searchParams.delete("status");
        }

        location.href = url.href;
    }
    // Hết Lọc theo trạng thái

    // Tìm kiếm sản phẩm
    const handleSumbitSearch = async (event: any) => {
        event.preventDefault();

        const value = event.target.keyword.value;
        let url = new URL(location.href);

        if (value) {
            url.searchParams.set("keyword", value);
        }
        else {
            url.searchParams.delete("keyword");
        }

        location.href = url.href;
    }
    // Hết Tìm kiếm sản phẩm

    // Sắp xếp theo tiêu chí
    const handleChangeSort = async (event: any) => {
        const value = event.target.value;
        let url = new URL(location.href);
        
        if(value){
            const [sortKey, sortValue] = value.split("-");
            url.searchParams.set("sortKey", sortKey);
            url.searchParams.set("sortValue", sortValue);
        }
        else{
            url.searchParams.delete("sortKey");
            url.searchParams.delete("sortValue");
        }

        location.href = url.href;
    }
    // Hết Sắp xếp theo tiêu chí

    return (
        <Box p={3}>
            {/* Header */}
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Trang danh sách sản phẩm
            </Typography>

            {/* Bộ lọc và Tìm kiếm */}
            <Paper elevation={1} sx={{ p: 2, mb: 2, bgcolor: "white" }} >
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={2} gutterBottom>
                    Bộ lọc và Tìm kiếm
                </Typography>
                <Box display="flex" flexWrap="wrap">
                    <FormControl sx={{ width: '30%', marginRight: '20px' }} >
                        <InputLabel id="filter-label" shrink={true}>Bộ lọc</InputLabel>
                        <Select labelId="filter-label" label="Bộ lọc" value={filterStatus} displayEmpty onChange={handleChangeFilterStatus} >
                            <MenuItem value="">Tất cả</MenuItem>
                            <MenuItem value="active">Hoạt động</MenuItem>
                            <MenuItem value="inactive">Dừng hoạt động</MenuItem>
                        </Select>
                    </FormControl>
                    <form onSubmit={handleSumbitSearch} style={{ flex: 1, gap: "8px" }}>
                        <Box display="flex">
                            <TextField
                                label="Nhập từ khóa..."
                                variant="outlined"
                                fullWidth
                                name="keyword"
                                defaultValue={keyword}
                                InputLabelProps={{
                                    shrink: true, // Giúp label không bị đè
                                }}
                            />
                            <Button variant="contained" color="success" type="submit">
                                Tìm
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
            {/* Sắp xếp */}
            <Paper elevation={1} sx={{ p: 2, mb: 3, bgcolor: "white" }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Sắp xếp
                </Typography>
                <Box display="flex" gap={2} flexWrap="wrap">
                    <FormControl fullWidth sx={{ maxWidth: 300 }}>
                        <InputLabel id="sort-label" shrink={true}>Sắp xếp</InputLabel>
                        <Select labelId="sort-label" label="Sắp xếp" value={sort} displayEmpty onChange={handleChangeSort}>
                            <MenuItem value="position-desc">Vị trí giảm dần</MenuItem>
                            <MenuItem value="position-asc">Vị trí tăng dần</MenuItem>
                            <MenuItem value="price-desc">Giá giảm dần</MenuItem>
                            <MenuItem value="price-asc">Giá tăng dần</MenuItem>
                            <MenuItem value="title-desc">Tiêu đề từ Z đến A</MenuItem>
                            <MenuItem value="title-asc">Tiêu đề từ A đến Z</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Paper>

            {/* Table */}
            <TableProduct data={products} />
            {/* Action Buttons */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <Box>
                    <Button variant="contained" color="success">
                        Áp dụng
                    </Button>{" "}
                    <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                        Thùng rác
                    </Button>
                </Box>
                <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                    Thêm mới
                </Button>
            </Box>
        </Box>
    );
}