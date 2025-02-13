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

    useEffect(() => {
        const urlCurrent = new URL(location.href);
        const api = new URL(linkApi);

        const statusCurrent = urlCurrent.searchParams.get('status');
        setFilterStatus(statusCurrent ?? "");
        const keywordCurrent = urlCurrent.searchParams.get('keyword');
        setKeyword(keywordCurrent ?? "");

        if (statusCurrent) {
            api.searchParams.set('status', statusCurrent);
        }
        else {
            api.searchParams.delete('status');
        }

        if (keywordCurrent) {
            api.searchParams.set('keyword', keywordCurrent);
        }
        else {
            api.searchParams.delete('keyword');
        }

        const fetchProducts = async () => {
            const response = await fetch(api.href);
            const data = await response.json();
            setProducts(data.data.products);
        };

        fetchProducts();
    }, []);



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
                        <InputLabel>Sắp xếp</InputLabel>
                        <Select defaultValue="">
                            <MenuItem value="asc">Vị trí tăng dần</MenuItem>
                            <MenuItem value="desc">Vị trí giảm dần</MenuItem>
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
                    + Thêm mới
                </Button>
            </Box>
        </Box>
    );
}