"use client"

import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { BiDetail } from "react-icons/bi";
import { MdDeleteOutline, MdEditNote } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RoleAdminPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const linkApi = 'https://freshskinweb.onrender.com/admin/role';

    useEffect(() => {
        const fetchbrands = async () => {
            const response = await fetch(linkApi);
            const data = await response.json();
            setData(data.data);
            setIsLoading(false);
        };

        fetchbrands();
    }, []);

    

    // Xóa một quyền
    const handleDeleteOneRole = async (id: number) => {
        const path = `${linkApi}/delete/${id}`;

        const response = await fetch(path, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const dataResponse = await response.json();

        if (dataResponse.code == 200) {
            location.reload();
        }
    }
    // Hết Xóa một quyền

    if (isLoading) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Box p={3}>
                <Typography variant="h4" gutterBottom>
                    Nhóm quyền
                </Typography>
                <Paper sx={{ backgroundColor: "white", p: 2 }}>
                    <Box display="flex" gap={20} flexWrap="wrap">
                        <Button
                            variant="outlined"
                            color="success"
                            sx={{ borderColor: 'green', color: 'green' }}
                        >
                            <Link href="/admin/roles/create">
                                + Thêm mới
                            </Link>
                        </Button>
                    </Box>
                    <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>STT</TableCell>
                                    <TableCell>Nhóm quyền</TableCell>
                                    <TableCell>Mô tả ngắn</TableCell>
                                    {/* <TableCell>Tạo bởi</TableCell> */}
                                    {/* <TableCell>Cập nhật bởi</TableCell> */}
                                    <TableCell>Hành động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((role: any, index: number) => (
                                    <TableRow key={role.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{role.title}</TableCell>
                                        <TableCell dangerouslySetInnerHTML={{__html: role.description}}></TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                <Tooltip title="Chi tiết" placement="top">
                                                    <Link href={`/admin/roles/detail/${role.id}`}>
                                                        <BiDetail className="text-[25px] text-[#138496] mr-2" />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip title="Sửa" placement="top">
                                                    <Link href={`/admin/roles/edit/${role.id}`}>
                                                        <MdEditNote className="text-[25px] text-[#E0A800]" />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip title="Xóa" placement="top" className="cursor-pointer" onClick={() => handleDeleteOneRole(role.id)}>
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