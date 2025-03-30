"use client";

import dynamic from "next/dynamic";
import React, { useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import {
    Box,
    Typography,
    TextField,
    FormControl,
    Button,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";

import { ProfileAdminContext } from "../../../layout";

export default function EditVoucherAdminPage() {
    const dataProfile = useContext(ProfileAdminContext);
    const today = new Date().toISOString().split("T")[0];
    const tenDaysLater = new Date();
    tenDaysLater.setDate(tenDaysLater.getDate() + 10);
    const tenDaysLaterStr = tenDaysLater.toISOString().split("T")[0];

    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(tenDaysLaterStr);
    const permissions = dataProfile?.permissions;
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<
        "success" | "error" | "info" | "warning"
    >("info");

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data: any = {
            name: event.target.name.value,
            type: event.target.type.value,
            discountValue: event.target.discountValue.value,
            maxDiscount: event.target.maxDiscount.value,
            minOrderValue: event.target.minOrderValue.value,
            usageLimit: event.target.usageLimit.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
        }

        const response = await fetch(`https://freshskinweb.onrender.com/admin/vouchers/create`, {
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
    };

    return (
        <>
            {alertMessage && (
                <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                    {alertMessage}
                </Alert>
            )}
            <Box sx={{ padding: 3, backgroundColor: "#ffffff" }}>
                <Typography variant="h5" gutterBottom>
                    Trang tạo mới mã giảm giá
                </Typography>

                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Mã giảm giá"
                            name="name"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <FormControl fullWidth sx={{ marginBottom: 3 }}>
                            <RadioGroup defaultValue="FIXED_AMOUNT" name="type" row>
                                <FormControlLabel
                                    value="FIXED_AMOUNT"
                                    control={<Radio />}
                                    label="Giảm theo giá"
                                />
                                <FormControlLabel
                                    value="PERCENTAGE"
                                    control={<Radio />}
                                    label="Giảm theo phần trăm"
                                />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            label="Giá giảm / Phần trăm giảm"
                            type="number"
                            name="discountValue"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <TextField
                            label="Giá giảm tối đa"
                            type="number"
                            name="maxDiscount"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <TextField
                            label="Giá trị đơn hàng tối thiểu"
                            type="number"
                            name="minOrderValue"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <TextField
                            label="Lượt sử dụng"
                            type="number"
                            name="usageLimit"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <TextField
                            label="Ngày bắt đầu"
                            type="date"
                            name="startDate"
                            variant="outlined"
                            fullWidth
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <TextField
                            label="Ngày kết thúc"
                            type="date"
                            name="endDate"
                            variant="outlined"
                            fullWidth
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            sx={{ marginBottom: 3 }}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ width: "100%" }}
                        >
                            Tạo mã giảm giá
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    );
}
