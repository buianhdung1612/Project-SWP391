"use client"

import { Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import TableProduct from "./TableProduct";

export default async function ProductsAdminPage() {
    const response = await fetch('https://freshskinweb.onrender.com/admin/products');
    const data = await response.json();
    const products = data.data.products;

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
                        <Select labelId="filter-label" label="Bộ lọc" defaultValue="" displayEmpty >
                            <MenuItem value="">Tất cả</MenuItem>
                            <MenuItem value="active">Hoạt động</MenuItem>
                            <MenuItem value="inactive">Không hoạt động</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Nhập từ khóa..."
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1 }}
                    />
                    <Button variant="contained" color="success" sx={{ width: "8%" }}>
                        Tìm
                    </Button>
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
            <TableProduct data={products}/>
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