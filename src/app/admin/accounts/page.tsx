"use client"

import { Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Chip, Tooltip, Stack, Pagination } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BiDetail } from "react-icons/bi";
import { MdDeleteOutline, MdEditNote, MdOutlineChangeCircle } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

export default function AccountAdminPage() {
    const [data, setData] = useState({
        accounts: []
    });

    const linkApi = 'https://freshskinweb.onrender.com/admin/accounts';

    // Hiển thị lựa chọn mặc định
    const [filterStatus, setFilterStatus] = useState("");
    const [keyword, setKeyword] = useState("");
    const [changeMulti, setChangeMulti] = useState("active");

    // Lọc theo trạng thái
    const handleChangeFilterStatus = async (event: any) => {
        const value = event.target.value;
        const url = new URL(location.href);

        if (value) {
            url.searchParams.set("status", value);
        }
        else {
            url.searchParams.delete("status");
        }

        location.href = url.href;
    }
    // Hết Lọc theo trạng thái

    // Tìm kiếm tài khoản
    const handleSumbitSearch = async (event: any) => {
        event.preventDefault();

        const value = event.target.keyword.value;
        const url = new URL(location.href);

        if (value) {
            url.searchParams.set("keyword", value);
        }
        else {
            url.searchParams.delete("keyword");
        }

        location.href = url.href;
    }
    // Hết Tìm kiếm sản phẩm

    // Thay đổi trạng thái 1 tài khoản
    const handleChangeStatusOneAccount = async (status: string, dataPath: string) => {
        const statusChange = status;
        const path = `${linkApi}${dataPath}`;
        const data = {
            status: statusChange
        }
        const response = await fetch(path, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataResponse = await response.json();

        if (dataResponse.code == 200) {
            location.reload();
        }
    }

    // Xóa một sản phẩm
    const handleDeleteOneAccount = async (id: number) => {
        const path = `${linkApi}/deleteT/${id}`;

        const response = await fetch(path, {
            method: "PATCH",
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
        <>
            <Box p={3}>
                {/* Header */}
                <Typography variant="h4" gutterBottom>
                    Trang danh sách tài khoản quản trị
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
                                        shrink: true,
                                    }}
                                />
                                <Button variant="contained" color="success" type="submit">
                                    Tìm
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Paper>

                {/* Table */}
                <Paper sx={{ backgroundColor: "white", p: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ marginLeft: "20px" }}>
                        Danh sách
                    </Typography>
                    <Box display="flex" gap={20} flexWrap="wrap">
                        <Button
                            variant="contained"
                            startIcon={<DeleteIcon />}
                            sx={{ backgroundColor: '#757575', '&:hover': { backgroundColor: '#616161' } }}
                        >
                            <Link href="/admin/accounts/trash">
                                Thùng rác
                            </Link>
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            sx={{ borderColor: 'green', color: 'green' }}
                        >
                            <Link href="/admin/accounts/create">
                                + Thêm mới
                            </Link>
                        </Button>
                    </Box>
                    <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>STT</TableCell>
                                    <TableCell>Avatar</TableCell>
                                    <TableCell>Họ tên</TableCell>
                                    <TableCell>Nhóm quyền</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Trạng thái</TableCell>
                                    {/* <TableCell>Tạo bởi</TableCell> */}
                                    {/* <TableCell>Cập nhật bởi</TableCell> */}
                                    <TableCell>Hành động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.accounts.map((user: any, index: number) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>
                                            <img
                                                src={user.thumbnail[0]}
                                                alt={user.title}
                                                style={{ width: 100, height: 100, objectFit: "cover" }}
                                            />
                                        </TableCell>
                                        <TableCell>{user.fullName}</TableCell>
                                        <TableCell>{user.roleId}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            {user.status === "ACTIVE" && (
                                                <Chip
                                                    label="Hoạt động"
                                                    color="success"
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={() => handleChangeStatusOneAccount("INACTIVE", `/edit/${user.id}`)}
                                                />
                                            )}
                                            {user.status === "INACTIVE" && (
                                                <Chip
                                                    label="Dừng hoạt động"
                                                    color="error"
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={() => handleChangeStatusOneAccount("ACTIVE", `/edit/${user.id}`)}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                <Tooltip title="Chi tiết" placement="top">
                                                    <Link href={`/admin/accounts/detail/${user.id}`}>
                                                        <BiDetail className="text-[25px] text-[#138496] mr-2" />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip title="Sửa" placement="top">
                                                    <Link href={`/admin/accounts/edit/${user.id}`}>
                                                        <MdEditNote className="text-[25px] text-[#E0A800]" />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip title="Đổi mật khẩu" placement="top">
                                                    <Link href={`/admin/accounts/change-password/${user.id}`}>
                                                        <MdOutlineChangeCircle className="text-[25px] text-[#5A6268]" />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip title="Xóa" placement="top" className="cursor-pointer" onClick={() => handleDeleteOneAccount(user.id)}>
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
        </>
    )
}