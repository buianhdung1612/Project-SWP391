"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import { useContext, useState } from "react";
import { ProfileAdminContext } from "../../layout";
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});

interface Data {
    title: string,
    description: string
}

export default function CreateRoleAdmin() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;

    const [content, setContent] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data: Data = {
            title: event.target.title.value,
            description: content
        }

        const response = await fetch(`https://freshskinweb.onrender.com/admin/roles/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const dataResponse = await response.json();

        if (dataResponse.code === 200) {
            location.reload();
        }
    }

    return (
        <>
            <Box sx={{ padding: 3, backgroundColor: '#ffffff' }}>
                <Typography variant="h5" gutterBottom>
                    Trang tạo mới nhóm quyền
                </Typography>

                {permissions?.includes("roles_create") && (
                    <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Tiêu đề nhóm quyền"
                                name='title'
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 3 }}
                                required
                            />
                            <h4>Mô tả nhóm quyền</h4>
                            <TinyEditor value={content} onEditorChange={(content: string) => setContent(content)} />
                            <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                                Tạo mới
                            </Button>
                        </form>
                    </Paper>
                )}
            </Box >
        </>
    )
}