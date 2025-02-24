"use client"

import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { MdDeleteOutline, MdEditNote } from "react-icons/md";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsAdminPage() {
    const [data, setData] = useState([]);

    const linkApiShow = 'https://freshskinweb.onrender.com/admin/skintypes/show';
    const linkApi = 'https://freshskinweb.onrender.com/admin/skintypes';

    // Hiển thị lựa chọn mặc định
    useEffect(() => {
        const fetchSkintypes = async () => {
            const response = await fetch(linkApiShow);
            const data = await response.json();
            setData(data.data);
        };

        fetchSkintypes();
    }, []);

    // Xóa một sản phẩm
    const handleDeleteOneSkinType = async (id: number) => {
        const path = `${linkApi}/delete/${id}`;

        const response = await fetch(path, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const dataResponse = await response.json();

        if (dataResponse.code == 200) {
            location.reload();
        }
    }
    // Hết Xóa một sản phẩm

    return (
        <Box p={3}>
            {/* Header */}
            <Typography variant="h4" gutterBottom>
                Trang thể loại da
            </Typography>

            {/* Table */}
            <Paper sx={{ backgroundColor: "white", p: 2 }}>
                <Box display="flex" gap={20} flexWrap="wrap">
                    <Button
                        variant="outlined"
                        color="success"
                        sx={{ borderColor: 'green', color: 'green', marginLeft: "88%" }}
                    >
                        <Link href="/admin/skin/create">
                            + Thêm mới
                        </Link>
                    </Button>
                </Box>
                <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell>Tiêu đề</TableCell>
                                <TableCell>Mô tả</TableCell>
                                {/* <TableCell>Tạo bởi</TableCell> */}
                                {/* <TableCell>Cập nhật bởi</TableCell> */}
                                <TableCell>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((type: any, index: number) => (
                                <TableRow key={type.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{type.type}</TableCell>                      
                                    <TableCell>{type.description}</TableCell>                      
                                    {/* <TableCell>
                                    {product.createdBy}
                                    <br />
                                    {product.createdAt}
                                </TableCell>
                                <TableCell>
                                    {product.updatedBy}
                                    <br />
                                    {product.updatedAt}
                                </TableCell> */}
                                    <TableCell>
                                        <div className="flex">
                                            <Tooltip title="Sửa" placement="top">
                                                <Link href={`/admin/skin/edit/${type.id}`}>
                                                    <MdEditNote className="text-[25px] text-[#E0A800]" />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip title="Xóa" placement="top" className="cursor-pointer" onClick={() => handleDeleteOneSkinType(type.id)}>
                                                <MdDeleteOutline className="text-[25px] text-[#C62828] ml-1" />
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}