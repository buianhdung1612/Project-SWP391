// "use client"

// import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
// import { MdDeleteOutline, MdEditNote } from "react-icons/md";

// import { useEffect, useState } from "react";
// import Link from "next/link";

export default function QuizAdminPage() {
    // const [data, setData] = useState([]);

    // const linkApiShow = 'https://freshskinweb.onrender.com/admin/skintypes/show';
    // const linkApi = 'https://freshskinweb.onrender.com/admin/skintypes';

    // // Hiển thị lựa chọn mặc định
    // useEffect(() => {
    //     const fetchSkintypes = async () => {
    //         const response = await fetch(linkApiShow);
    //         const data = await response.json();
    //         setData(data.data);
    //     };

    //     fetchSkintypes();
    // }, []);

    // // Xóa một sản phẩm
    // const handleDeleteOneSkinType = async (id: number) => {
    //     const path = `${linkApi}/delete/${id}`;

    //     const response = await fetch(path, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     });

    //     const dataResponse = await response.json();

    //     if (dataResponse.code == 200) {
    //         location.reload();
    //     }
    // }
    // // Hết Xóa một sản phẩm

    return (
        // <Box p={3}>
        //     {/* Header */}
        //     <Typography variant="h5" gutterBottom>
        //         Trang bộ đề câu hỏi
        //     </Typography>

        //     {/* Table */}
        //     <Paper sx={{ backgroundColor: "white", p: 2 }}>
        //         <Box display="flex" gap={20} flexWrap="wrap">
        //             <Button
        //                 variant="outlined"
        //                 color="success"
        //                 sx={{ borderColor: 'green', color: 'green', marginLeft: "88%" }}
        //             >
        //                 <Link href="/admin/quiz/create">
        //                     + Thêm mới
        //                 </Link>
        //             </Button>
        //         </Box>
        //         <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
        //             <Table>
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell>STT</TableCell>
        //                         <TableCell>Tiêu đề</TableCell>
        //                         {/* <TableCell>Tạo bởi</TableCell> */}
        //                         {/* <TableCell>Cập nhật bởi</TableCell> */}
        //                         <TableCell>Hành động</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //             </Table>
        //         </TableContainer>
        //     </Paper>
        // </Box>
        <>dsa</>
    );
}