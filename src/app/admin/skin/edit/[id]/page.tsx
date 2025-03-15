"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
interface SkinType {
    type: string,
    description: string
}

export default function EditTypeSkinAdminPage() {
    const { id } = useParams();

    const [data, setData] = useState({
        type: "",
        description: ""
    })
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");
   
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/skintypes/${id}`);
            const data = await response.json();
            setData(data.data);
        };

        fetchData();
    }, []);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data: SkinType = {
            type: event.target.type.value,
            description: event.target.description.value
        }

        const response = await fetch(`https://freshskinweb.onrender.com/admin/skintypes/edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
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
                    Trang chỉnh sửa thể loại da
                </Typography>

                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Thể loại da"
                            name='type'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                            value={data.type}
                            onChange={(e) => setData({ ...data, type: e.target.value })}
                        />
                        <TextField
                            label="Mô tả thể loại da"
                            name='description'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                            value={data.description}
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                        />
                        <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                            Chỉnh sửa thể loại da
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    )
}