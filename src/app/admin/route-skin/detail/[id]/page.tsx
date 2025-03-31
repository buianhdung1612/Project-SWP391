"use client";

import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Paper,
    Divider,
    Chip,
} from "@mui/material";
import { ProfileAdminContext } from "../../../layout";
import { useParams } from "next/navigation";

export default function RouteSkinDetailPage() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;

    const [data, setData] = useState({
        skinTypeEntity: {
            type: ""
        },
        rountine: "",
        createdAt: ""
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://freshskinweb.onrender.com/admin/skin-care-routines/${id}`
                );
                const dataResponse = await response.json();
                setData(dataResponse);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) {
        return (
            <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                <Typography variant="h6">Đang tải dữ liệu...</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Chi tiết lộ trình chăm sóc da
            </Typography>
            {permissions?.includes("rountine_view") && (
                <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Loại da: {data.skinTypeEntity?.type}
                    </Typography>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Typography variant="body1" gutterBottom>
                        <strong>Lộ trình:</strong> <span dangerouslySetInnerHTML={{ __html: data.rountine }} ></span>
                    </Typography>
                    <Grid container spacing={2} sx={{ marginTop: 2 }}>
                        <Grid item xs={6}>
                            <Typography variant="body2" color="textSecondary">
                                <strong>Ngày tạo:</strong> {data.createdAt}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </Box >
    );
}
