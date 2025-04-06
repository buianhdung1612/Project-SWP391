"use client"

import { Box, Button, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
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

    const [routineTitle, setRoutineTitle] = useState<string>("");
    const [routineDescription, setRoutineDescription] = useState<string>("");
    const [rountines, setRountines] = useState([
        {
            step: "",
            content: "",
        },
    ]);

    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("info");

    const [listSkinType, setListSkinType] = useState([]);

    useEffect(() => {
        const fetchSkintypes = async () => {
            const response = await fetch("https://freshskinweb.onrender.com/admin/skintypes/show");
            const data = await response.json();
            setListSkinType(data.data);
        };

        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/skin-care-routines/${id}`);
            const data = await response.json();
            setRountines(data.data.rountineStep);
            setRoutineTitle(data.data.title);
            setRoutineTitle(data.data.description);
        }

        fetchSkintypes();
        fetchData();
    }, []);

    console.log(rountines);

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

    console.log(rountines);



    const handleAddRountine = () => {
        setRountines([
            ...rountines,
            {
                step: "",
                content: "",
            },
        ]);
    };

    const handleDeleteRountine = (indexRountine: number) => {
        const newRountines = rountines.filter((_, index: number) => index !== indexRountine);
        setRountines(newRountines);
    };

    const handleChangeRountine = (indexRountine: number, field: "content" | "step", value: any) => {
        const newRountines = [...rountines];
        newRountines[indexRountine][field] = value;
        setRountines(newRountines);
    };

    const [selectedSkinType, setSelectedSkinType] = useState<number | null>(null);

    const handleChangeSkinType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSkinType(parseInt(event.target.value));
    };


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
                <div>
                    <Typography variant="h5" sx={{ mb: 1, pt: 2 }}>
                        Chọn loại da
                    </Typography>
                    <RadioGroup row value={selectedSkinType?.toString() ?? ""} onChange={handleChangeSkinType}>
                        {listSkinType.map((item: any, index: number) => (
                            <FormControlLabel
                                key={index}
                                value={item.id.toString()}
                                control={<Radio />}
                                label={item.type}
                            />
                        ))}
                    </RadioGroup>

                    <TextField
                        label="Tiêu đề lộ trình"
                        variant="outlined"
                        fullWidth
                        value={routineTitle}
                        onChange={(e) => setRoutineTitle(e.target.value)}
                        sx={{ mb: 2, mt: 2 }}
                    />

                    <TextField
                        label="Mô tả lộ trình"
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={3}
                        value={routineDescription}
                        onChange={(e) => setRoutineDescription(e.target.value)}
                        sx={{ mb: 3 }}
                    />

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
                        {rountines.map((item: any, index: number) => (
                            <Paper key={index} elevation={2} sx={{ padding: 2, backgroundColor: "#fdfdfd" }}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                    Bước {index + 1}
                                </Typography>

                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
                                    <TextField
                                        label="Tiêu đề mỗi bước"
                                        variant="outlined"
                                        value={item.title}
                                        onChange={(e) => handleChangeRountine(index, "step", e.target.value)}
                                        sx={{ width: { xs: "100%", md: "25%" } }}
                                    />
                                    <TinyEditor value={item.content} onEditorChange={(content: string) => handleChangeRountine(index, "content", content)} />
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

                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                    <Button variant="outlined" color="error" onClick={() => handleDeleteRountine(index)}>
                                        Xoá bước
                                    </Button>
                                </Box>
                            </Paper>
                        ))}

                        <Button onClick={handleAddRountine} variant="contained" color="secondary" sx={{ alignSelf: "flex-start" }}>
                            + Thêm bước
                        </Button>
                    </Box>

                    <Box sx={{ py: 4 }}>
                        <Button variant="contained" color="primary" size="large" sx={{ marginLeft: "85%" }}>
                            Tạo mới lộ trình
                        </Button>
                    </Box>
                </div>
            )}
        </>
    )
}