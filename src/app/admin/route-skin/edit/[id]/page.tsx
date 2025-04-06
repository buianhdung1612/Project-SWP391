"use client"

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import dynamic from "next/dynamic";
import { ProfileAdminContext } from "@/app/admin/layout";

const TinyEditor = dynamic(() => import("../../../../../../TinyEditor"), {
    ssr: false,
});

export default function EditRouteSkinAdminPage() {
    const { id } = useParams();
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions;

    console.log(permissions);

    const [data, setData] = useState({
        skinTypeEntity: {
            type: ""
        }
    })

    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://freshskinweb.onrender.com/admin/skin-care-routines/${id}`);
    //         const data = await response.json();
    //         setData(data);
    //         setRountine(data.rountine)
    //     };

    //     fetchData();
    // }, []);

    // const handleClick = async () => {
    //     console.log(rountine);
    //     const response = await fetch(`https://freshskinweb.onrender.com/admin/skin-care-routines/edit/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(rountine)
    //     });

    //     const dataResponse = await response.json();

    //     if (dataResponse.code === 200) {
    //         setAlertMessage(dataResponse.message);
    //         setAlertSeverity("success");
    //         setTimeout(() => location.reload(), 2000);
    //     } else {
    //         setAlertMessage(dataResponse.message);
    //         setAlertSeverity("error");
    //     }
    // }

    const [rountines, setRountines] = useState([{
        title: "",
        content: "",
        products: []
    }]);

    const handleAddRountine = () => {
        setRountines([...rountines, {
            title: "",
            content: "",
            products: []
        }])
    };

    const handleDeleteRountine = (indexRountine: number) => {
        const newRountines = rountines.filter((_, index: number) => index != indexRountine);
        setRountines(newRountines);
    }


    const handleChangeRountine = (indexRountine: number, field: 'content' | 'title', value: any) => {
        const newRountines = [...rountines];
        newRountines[indexRountine][field] = value;
        setRountines(newRountines);
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
            {permissions?.includes("rountine_edit") && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {rountines.map((item: any, index: number) => (
                        <Paper key={index} elevation={2} sx={{ padding: 2, backgroundColor: '#fdfdfd' }}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Bước {index + 1}
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                                <TextField
                                    label="Tiêu đề mỗi bước"
                                    variant="outlined"
                                    value={item.title}
                                    onChange={(e) => handleChangeRountine(index, "title", e.target.value)}
                                    sx={{ width: { xs: '100%', md: '25%' } }}
                                />

                                <TextField
                                    label="Nội dung"
                                    variant="outlined"
                                    multiline
                                    minRows={2}
                                    value={item.content}
                                    onChange={(e) => handleChangeRountine(index, "content", e.target.value)}
                                    sx={{ flex: 1 }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => handleDeleteRountine(index)}
                                >
                                    Xoá bước
                                </Button>
                            </Box>
                        </Paper>
                    ))}

                    <Button
                        onClick={handleAddRountine}
                        variant="contained"
                        color="secondary"
                        sx={{ alignSelf: 'flex-start' }}
                    >
                        + Thêm bước
                    </Button>
                </Box>
            )}
        </>
    )
}