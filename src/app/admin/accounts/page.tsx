"use client"

import { Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { BiDetail } from "react-icons/bi";
import { MdDeleteOutline, MdEditNote, MdOutlineChangeCircle } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AccountAdminPage() {
    const [data, setData] = useState([]);

    const linkApi = 'https://freshskinweb.onrender.com/admin/users/show';
    const linkApiUse = 'https://freshskinweb.onrender.com/admin/users';

    // Hiển thị lựa chọn mặc định
    const [filterStatus, setFilterStatus] = useState("");
    const [keyword, setKeyword] = useState("");

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
    
            // Tìm kiếm tài khoản
            const keywordCurrent = urlCurrent.searchParams.get('keyword');
            setKeyword(keywordCurrent ?? "");
    
            if (keywordCurrent) {
                api.searchParams.set('keyword', keywordCurrent);
            }
            else {
                api.searchParams.delete('keyword');
            }
            // Hết Tìm kiếm tài khoản
    
            const fetchAccounts = async () => {
                const response = await fetch(api.href);
                const data = await response.json();
                setData(data.data);
            };
    
            fetchAccounts();
        }, []);

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
        const path = `${linkApiUse}${dataPath}`;

        const data = {
            status: statusChange
        }

        console.log(data);
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
    
    // Xóa một tài khoản
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
    // Hết Xóa một tài khoản

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
                                    <TableCell>Họ</TableCell>
                                    <TableCell>Tên</TableCell>
                                    <TableCell>Nhóm quyền</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Trạng thái</TableCell>
                                    <TableCell>Hành động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((account: any, index: number) => (
                                    <TableRow key={account.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>
                                            <img
                                                src={account.avatar}
                                                style={{ width: 100, height: 100, objectFit: "cover" }}
                                            />
                                        </TableCell>
                                        <TableCell>{account.firstName}</TableCell>
                                        <TableCell>{account.lastName}</TableCell>
                                        <TableCell>{account.role?.title || ""}</TableCell>
                                        <TableCell>{account.email}</TableCell>
                                        <TableCell>
                                            {account.status === "ACTIVE" && (
                                                <Chip
                                                    label="Hoạt động"
                                                    color="success"
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={() => handleChangeStatusOneAccount("INACTIVE", `/edit/${account.id}`)}
                                                />
                                            )}
                                            {account.status === "INACTIVE" && (
                                                <Chip
                                                    label="Dừng hoạt động"
                                                    color="error"
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={() => handleChangeStatusOneAccount("ACTIVE", `/edit/${account.id}`)}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                <Tooltip title="Chi tiết" placement="top">
                                                    <Link href={`/admin/users/show/${account.id}`}>
                                                        <BiDetail className="text-[25px] text-[#138496] mr-2" />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip title="Sửa" placement="top">
                                                    <Link href={`/admin/users/edit/${account.id}`}>
                                                        <MdEditNote className="text-[25px] text-[#E0A800]" />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip title="Xóa" placement="top" className="cursor-pointer" onClick={() => handleDeleteOneAccount(account.id)}>
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