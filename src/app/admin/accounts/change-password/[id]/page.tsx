"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export default function ChangePasswordAdminAccount() {
    const { id } = useParams();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const password = event.target.password.value;
        
        const response = await fetch(`https://freshskinweb.onrender.com/admin/account/change-password/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: password
            })
        });

        const dataResponse = await response.json();

        if (dataResponse.code == 200) {
            location.reload();
        }
    }

    return (
        <>
            <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
                <Typography variant="h5" gutterBottom>
                    Trang đổi mật khẩu
                </Typography>

                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Mật khẩu mới"
                            name='password'
                            variant="outlined"
                            type="password"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                            Đổi mật khẩu
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    )
}