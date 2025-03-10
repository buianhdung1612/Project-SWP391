"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";

interface SkinType {
    type: string,
    description: string
}

export default function CreateTypeSkinAdminPage() {

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

        if (dataResponse.code == 200) {
            location.reload();
        }
    }

    return (
        <>
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