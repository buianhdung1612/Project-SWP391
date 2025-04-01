"use client"

import { useContext, useEffect, useState } from "react";
import { Box, Typography, TextField, FormControl, Button, Paper, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@mui/material';
import UploadImage from "@/app/components/Upload/UploadImage";
import { ProfileAdminContext } from "@/app/admin/layout";
import Alert from '@mui/material/Alert';
import { useParams } from "next/navigation";
export default function EditAccountAdmin() {
    const { id } = useParams();
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;
    const [listRoles, setListRoles] = useState([]);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username: "",
        avatar: []
    })
    const [roleCurrent, setRoleCurrent] = useState(0);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");

    useEffect(() => {
        const fetchRoles = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/roles');
            const data = await response.json();
            setListRoles(data.data);
        };

        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/account/${id}`);
            const data = await response.json();
            setRoleCurrent(data.data.role.roleId)
            setData(data.data);
        }

        fetchRoles();
        fetchData();
    }, []);

    const [images, setImages] = useState<(File)[]>([]);

    const handleImageChange = (newImages: (File)[]) => {
        setImages(newImages);
    };

    const handleRemoveDefaultImage = (index: number) => {
        setData(prevData => ({
            ...prevData,
            avatar: prevData.avatar.filter((_, i) => i !== index)
        }));
    };

    const handleChangeRole = (event: any) => {
        setRoleCurrent(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const request = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password"),
            phone: formData.get("phone"),
            status: formData.get("status"),
            roleId: roleCurrent
        };

        formData.append("request", JSON.stringify(request));

        images.forEach((image) => {
            if (image instanceof File) {
                formData.append("thumbnail", image);
            }
        });

        const response = await fetch('https://freshskinweb.onrender.com/admin/blogs/create', {
            method: "POST",
            body: formData
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
            {permissions?.includes("accounts_edit") && (
                <Box sx={{ padding: 3, backgroundColor: "#e3f2fd" }}>
                    <Typography variant="h5" gutterBottom>
                        Trang tạo mới tài khoản quản trị
                    </Typography>

                    <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
                                <InputLabel shrink={true}>-- Chọn nhóm quyền --</InputLabel>
                                <Select
                                    value={roleCurrent}
                                    onChange={handleChangeRole}
                                    label=" Chọn nhóm quyền --"
                                    displayEmpty
                                >
                                    {listRoles && listRoles.length > 0 && listRoles.map((item: any, index: number) => (
                                        <MenuItem key={index} value={item.roleId}>{item.title}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                            <TextField
                                label="Họ"
                                name="firstname"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 3 }}
                                required
                                value={data.firstName}
                                onChange={(e) =>
                                    setData({ ...data, firstName: e.target.value })
                                }
                            />
                            <TextField
                                label="Tên"
                                name="lastname"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 3 }}
                                required
                                value={data.lastName}
                                onChange={(e) =>
                                    setData({ ...data, lastName: e.target.value })
                                }
                            />
                            <TextField
                                label="Tài khoản người dùng"
                                name="username"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 3 }}
                                aria-readonly
                                value={data.username}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 3 }}
                                aria-readonly
                                type="email"
                                value={data.email}
                            />
                            <TextField
                                label="Số điện thoại"
                                name="phone"
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 3 }}
                                required
                                value={data.phone}
                                onChange={(e) =>
                                    setData({ ...data, phone: e.target.value })
                                }
                            />
                            <UploadImage
                                label="Chỉnh sửa ảnh đại diện"
                                id="images"
                                name="images"
                                onImageChange={handleImageChange}
                                defaultImages={data.avatar}
                                onRemoveDefaultImage={handleRemoveDefaultImage}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ width: "100%" }}
                            >
                                Cập nhật thông tin
                            </Button>
                        </form>
                    </Paper>
                </Box>
            )}
        </>
    )
}