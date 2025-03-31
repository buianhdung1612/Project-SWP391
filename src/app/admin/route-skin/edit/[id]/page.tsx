"use client"

import { Box, Button, Paper, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import TinyEditor from "../../../../../../TinyEditor";

export default function EditRouteSkinAdminPage() {
    const { id } = useParams();

    const [rountine, setRountine] = useState('');

    const [data, setData] = useState({
        skinTypeEntity: {
            type: ""
        }
    })
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/skin-care-routines/${id}`);
            const data = await response.json();
            setData(data);
            setRountine(data.rountine)
        };

        fetchData();
    }, []);

    const handleClick = async () => {
        const response = await fetch(`https://freshskinweb.onrender.com/admin/skin-care-routines//edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rountine)
        });

        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            setAlertMessage(dataResponse.message);
            setAlertSeverity("success");
            setTimeout(() => location.reload(), 2000);
        } else {
            setAlertMessage(dataResponse.message);
            setAlertSeverity("error");
        }
    }

    return (
        <>
            {
                alertMessage && (
                    <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                        {alertMessage}
                    </Alert>
                )
            }
            <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
                <Typography variant="h5" gutterBottom>
                    Trang chỉnh sửa lộ trình chăm sóc da <span style={{ color: "#1976d2", fontWeight: "bold" }}>
                        {data.skinTypeEntity?.type}
                    </span>
                </Typography>

                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <TinyEditor value={rountine} onEditorChange={(rountine: string) => setRountine(rountine)} />
                    <Button onClick={() => handleClick} variant="contained" color="primary" sx={{ width: '100%' }}>
                        Chỉnh sửa lộ trình chăm sóc da
                    </Button>
                </Paper>
            </Box>
        </>
    )
}