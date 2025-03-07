"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import { useState } from "react";
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});

interface Data {
    title: string,
    description: string
}

export default function CreateRoleAdmin () {
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
            <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
                <Typography variant="h4" gutterBottom>
                    Trang tạo mới nhóm quyền
                </Typography>

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
            </Box >
        </>
    )
}