"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const TinyEditor = dynamic(() => import('../../../../../../TinyEditor'), {
    ssr: false
});

interface Data {
    title: string,
    description: string
}

export default function EditRoleAdmin () {
    const [description, setDescription] = useState('');
    const { id } = useParams();

    const [roleInfo, setRoleInfo] = useState({
        title: "",
        position: 0,
        featured: false,
        status: "ACTIVE",
    });

    useEffect(() => {
        const fetchBrand = async () => {
            const response = await fetch(
                `https://freshskinweb.onrender.com/admin/roles/${id}`
            );
            const data = await response.json();
            setRoleInfo(data.data);
            setDescription(data.data.description);
        };

        fetchBrand();
    }, []);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data: Data = {
            title: event.target.title.value,
            description: description
        }

        const response = await fetch(`https://freshskinweb.onrender.com/admin/roles/edit/${id}`, {
            method: "PATCH",
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
                    Trang chỉnh sửa nhóm quyền
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
                            value={roleInfo.title}
                            onChange={(e) =>
                                setRoleInfo({ ...roleInfo, title: e.target.value })
                            }
                        />
                        <h4>Mô tả nhóm quyền</h4>
                        <TinyEditor value={description} onEditorChange={(description: string) => setDescription(description)} />
                        <Button type='submit' variant="contained" color="primary" sx={{ width: '100%' }}>
                            Cập nhật
                        </Button>
                    </form>
                </Paper>
            </Box >
        </>
    )
}