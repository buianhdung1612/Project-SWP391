"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    Divider
} from "@mui/material";

export default function DetailRoleAdmin() {
    const { id } = useParams();
    const [data, setData] = useState({
        title: "",
        description: "",
        status: "ACTIVE"
    })

    useEffect(() => {
        const fetchRole = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/roles/${id}`);
            const data = await response.json();
            setData(data.data);
        };

        fetchRole();
    }, []);

    return (
        <>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Card elevation={3}>
                    <CardContent>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            {data.title}
                        </Typography>
                        <Box sx={{ textAlign: "center", mb: 2 }}>
                            <Chip
                                label={data.status === "ACTIVE" ? "Đang hoạt động" : "Không hoạt động"}
                                color={data.status === "ACTIVE" ? "success" : "error"}
                                sx={{ fontSize: "1rem", fontWeight: "bold" }}
                            />
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555", mr: 1 }}>
                                    Mô tả:
                                </Typography>
                                <div dangerouslySetInnerHTML={{ __html: data.description }}></div> 
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}