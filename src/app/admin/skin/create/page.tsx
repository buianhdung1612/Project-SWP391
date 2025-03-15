"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import {useState} from "react";
interface SkinType {
    type: string,
    description: string
}

export default function CreateTypeSkinAdminPage() {
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data: SkinType = {
            type: event.target.type.value,
            description: event.target.description.value
        }

        const response = await fetch('https://freshskinweb.onrender.com/admin/skintypes/create', {
            method: "POST",
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
            <Box sx={{ padding: 3, backgroundColor: '#ffffff' }}>
                <Typography variant="h5" gutterBottom>
                    Trang tạo mới thể loại da
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
                        />
                        <TextField
                            label="Mô tả thể loại da"
                            name='description'
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                            Tạo mới thể loại da
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    )
}