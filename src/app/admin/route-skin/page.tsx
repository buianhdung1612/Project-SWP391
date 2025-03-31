"use client"
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Chip, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";

export default function RouteSkinAdminPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchSkintypes = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/skin-care-routines`);
            const data = await response.json();
            setData(data.data.content);
        }

        fetchSkintypes();
    }, []);

    return (
        <>
            {/* Table */}
            <Box p={3}>
                <Typography variant="h5" gutterBottom>
                    Trang lộ trình da
                </Typography>
                <Paper sx={{ backgroundColor: "white", p: 2 }}>
                    <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>STT</TableCell>
                                    <TableCell>Loại da</TableCell>
                                    <TableCell>Lộ trình</TableCell>
                                    <TableCell>Hành động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item: any, index: number) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.skinTypeEntity.type}</TableCell>
                                        <TableCell>{item.rountine}</TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                <Tooltip title="Chi tiết" placement="top">
                                                    <Link href={`/admin/route-skin/detail/${item.id}`}>
                                                        <BiDetail className="text-[25px] text-[#138496] mr-2" />
                                                    </Link>

                                                </Tooltip>
                                                <Tooltip title="Sửa" placement="top">
                                                    <Link href={`/admin/route-skin/edit/${item.id}`}>
                                                        <MdEditNote className="text-[25px] text-[#E0A800]" />
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
            </Box>
        </>
    );
}