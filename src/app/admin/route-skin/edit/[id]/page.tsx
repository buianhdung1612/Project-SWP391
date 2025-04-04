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


    const handleChangeRountine = (indexRountine: number, field: 'content' | 'title' | 'products', value: any) => {
        const newRountines = [...rountines];
        if (field == "products") {

        }
        else {
            newRountines[indexRountine][field] = value;
        }
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
            <Box sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
                <Typography variant="h5" gutterBottom>
                    Trang chỉnh sửa lộ trình chăm sóc da <span style={{ color: "#1976d2", fontWeight: "bold" }}>
                        {data.skinTypeEntity?.type}
                    </span>
                </Typography>

                {permissions?.includes("rountine_edit") && (
                    <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                        <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                            {rountines.map((item: any, index: number) => (
                                <div key={index}>
                                    <div className="flex">
                                        <TextField
                                            label="Tiêu đề mỗi bước"
                                            name='title'
                                            variant="outlined"
                                            sx={{ marginBottom: 3, width: "18%", marginRight: "20px" }}
                                            required
                                            value={item.title}
                                        />
                                        <TextField
                                            label="Nội dung"
                                            name='content'
                                            variant="outlined"
                                            sx={{ marginBottom: 3, flex: "1" }}
                                            required
                                            value={item.content}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Box>


                        {/* <Button onClick={handleClick} variant="contained" color="primary" sx={{ width: '100%' }}>
                            Chỉnh sửa lộ trình chăm sóc da
                        </Button> */}
                    </Paper>
                )}
            </Box>
        </>
    )
}