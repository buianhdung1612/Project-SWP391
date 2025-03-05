"use client"

import { Box, Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PermissionPage() {
    const [listRoles, setListRoles] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/roles');
            const data = await response.json();
            setListRoles(data.data);
        };

        fetchCategories();
    }, []);

    return (
        <>
            <Box p={3}>
                <Typography variant="h4" gutterBottom>
                    Trang phân quyền
                </Typography>

                <Paper sx={{ backgroundColor: "white", p: 2 }}>
                    <Box display="flex" gap={20} flexWrap="wrap">
                        <Button
                            variant="outlined"
                            color="success"
                            sx={{ borderColor: 'green', color: 'green' }}
                        >
                                Cập nhật
                        </Button>
                    </Box>
                    <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tính năng</TableCell>
                                    
                                </TableRow>
                            </TableHead>

                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </>
    )
}