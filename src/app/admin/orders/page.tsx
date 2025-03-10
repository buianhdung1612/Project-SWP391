"use client"

import { Box, Typography, TextField, Select, MenuItem, InputLabel,FormControl, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Tooltip, Stack, Pagination, Chip } from "@mui/material";
import { BiDetail } from "react-icons/bi";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrdersAdminPage() {
    const [data, setData] = useState({
        totalPages: 1,
        totalItems: 1,
        pageSize: 4,
        currentPage: 1,
        orders: [{
            orderId: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            orderItems: [],
            orderDate: ""
        }]
    });

    const linkApi = 'https://freshskinweb.onrender.com/admin/orders';

    const [inputChecked, setInputChecked] = useState<number[]>([]);

    // Hiển thị lựa chọn mặc định
    const [filterStatus, setFilterStatus] = useState("");
    const [keyword, setKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [changeMulti, setChangeMulti] = useState("PENDING");


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

        // Tìm kiếm đơn hàng
        const keywordCurrent = urlCurrent.searchParams.get('keyword');
        setKeyword(keywordCurrent ?? "");

        if (keywordCurrent) {
            api.searchParams.set('keyword', keywordCurrent);
        }
        else {
            api.searchParams.delete('keyword');
        }
        // Hết Tìm kiếm đơn hàng

        // Phân trang
        const pageCurrent = urlCurrent.searchParams.get('page');
        setPage(pageCurrent ? parseInt(pageCurrent) : 1);

        if (pageCurrent) {
            api.searchParams.set('page', pageCurrent);
        }
        else {
            api.searchParams.delete('page');
        }
        // Hết Phân trang

        const fetchOrders = async () => {
            const response = await fetch(api.href);
            const data = await response.json();
            setData(data.data);
        };

        fetchOrders();
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

    // Tìm kiếm đơn hàng
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
    // Hết Tìm kiếm đơn hàng

    // Thay đổi trạng thái 1 đơn hàng
    const handleChangeStatusOneOrder = async (status: string, dataPath: string) => {
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
    // Hết Thay đổi trạng thái 1 đơn hàng

    // Thay đổi trạng thái nhiều đơn hàng
    const handleChangeMulti = async (event: any) => {
        event.preventDefault();

        const statusChange = changeMulti;

        const path = `${linkApi}/change-multi`;

        const data: any = {
            id: inputChecked,
            orderStatus: statusChange
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

    const handleInputChecked = (event: any, id: number) => {
        if (event.target.checked) {
            setInputChecked(prev => [...prev, id]);
        } else {
            setInputChecked(prev => prev.filter(id => id !== id));
        }
    }
    // Hết Thay đổi trạng thái nhiều đơn hàng

    // Phân trang
    const handlePagination = (event: any, page: number) => {
        const url = new URL(location.href);

        if (page) {
            url.searchParams.set("page", page.toString());
        }
        else {
            url.searchParams.delete("page");
        }

        location.href = url.href;
    }
    // Hết phân trang

    return (
        <Box p={3}>
            {/* Header */}
            <Typography variant="h5" gutterBottom>
                Trang danh sách đơn hàng
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
                            <MenuItem value="PENDING">Chờ duyệt</MenuItem>
                            <MenuItem value="COMPLETED">Đã duyệt</MenuItem>
                            <MenuItem value="CANCELED">Hủy</MenuItem>
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
                    <form onSubmit={handleChangeMulti} style={{ flex: 1, gap: "8px" }}>
                        <Box display="flex" >
                            <Select fullWidth name="status" value={changeMulti} displayEmpty onChange={(e) => setChangeMulti(e.target.value)} >
                                <MenuItem value="PENDING">Chờ duyệt</MenuItem>
                                <MenuItem value="COMPLETED">Đã duyệt</MenuItem>
                                <MenuItem value="CANCELED">Hủy</MenuItem>
                            </Select>
                            <Button variant="contained" color="success" type="submit" sx={{ width: "120px" }}>
                                Áp dụng
                            </Button>
                        </Box>
                    </form>
                </Box>
                <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell ></TableCell>
                                <TableCell>Mã đơn hàng</TableCell>
                                <TableCell>Ngày đặt</TableCell>
                                <TableCell>Khách hàng</TableCell>
                                <TableCell>Điện thoại</TableCell>
                                <TableCell>Địa chỉ giao hàng</TableCell>
                                <TableCell>Tình trạng</TableCell>
                                <TableCell>Chi tiết </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.orders.map((order: any, index: number) => (
                                <TableRow key={order.orderId}>
                                    <TableCell padding="checkbox" onClick={(event) => handleInputChecked(event, order.orderId)}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>#{order.orderId}</TableCell>
                                    <TableCell>{order.orderDate}</TableCell>
                                    <TableCell>{order.firstName} {order.lastName}</TableCell>
                                    <TableCell>{order.phoneNumber}</TableCell>
                                    <TableCell>{order.address}</TableCell>
                                    <TableCell>
                                        {order.orderStatus === "PENDING" && (
                                            <Chip
                                                label="Chờ duyệt"
                                                color="secondary"
                                                size="small"
                                                variant="outlined"
                                                onClick={() => handleChangeStatusOneOrder("PENDING", `/edit/${order.orderId}`)}
                                            />
                                        )}
                                        {order.orderStatus === "COMPLETED" && (
                                            <Chip
                                                label="Đã duyệt"
                                                color="success"
                                                size="small"
                                                variant="outlined"
                                                onClick={() => handleChangeStatusOneOrder("COMPLETED", `/edit/${order.orderId}`)}
                                            />
                                        )}
                                        {order.orderStatus === "CANCELED" && (
                                            <Chip
                                                label="Hủy"
                                                color="error"
                                                size="small"
                                                variant="outlined"
                                                onClick={() => handleChangeStatusOneOrder("INACTIVE", `/edit/${order.orderId}`)}
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex">
                                            <Tooltip title="Chi tiết" placement="top">
                                                <Link href={`/admin/orders/detail/${order.orderId}`}>
                                                    <BiDetail className="text-[25px] text-[#138496] mr-2" />
                                                </Link>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {/* Pagination */}
            <Stack spacing={2} marginTop={2}>
                <Pagination
                    count={data.totalPages}
                    color="primary"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    siblingCount={1}
                    sx={{
                        '& .MuiPaginationItem-root': {
                            backgroundColor: 'white',
                            color: 'blue',
                            '&:hover': {
                                backgroundColor: '#e0e0e0',
                            },
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'blue',
                            color: 'white',
                        },
                    }}
                    onChange={handlePagination}
                />
            </Stack>
        </Box>
    );
}