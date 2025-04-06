"use client"
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Chip, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import { ProfileAdminContext } from "../layout";

export default function RouteSkinAdminPage() {
    const [data, setData] = useState([]);
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;

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
                {permissions?.includes("rountine_view") && (
                    <Paper sx={{ backgroundColor: "white", p: 2 }}>
                        <Box display="flex" gap={20} flexWrap="wrap">
                            <Button
                                variant="outlined"
                                color="success"
                                sx={{ borderColor: '#374785', color: '#374785' }}
                            >
                                <Link href="/admin/route-skin/create">
                                    + Thêm mới
                                </Link>
                            </Button>
                        </Box>
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
                                            <TableCell><span className="line-clamp-2" dangerouslySetInnerHTML={{ __html: item.rountine }} ></span></TableCell>
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
                )}
            </Box>
        </>
    );
}