// "use client"

// import { Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Tooltip } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { BiDetail } from "react-icons/bi";
// import { MdDeleteOutline, MdEditNote, MdOutlineChangeCircle } from "react-icons/md";
// import Link from "next/link";
// import { useState } from "react";

export default function AccountAdminPage() {
    // const [data, setData] = useState({
    //     accounts: []
    // });

    // const linkApi = 'https://freshskinweb.onrender.com/admin/accounts';

    // // Hiển thị lựa chọn mặc định
    // const [filterStatus, setFilterStatus] = useState("");
    // const [keyword, setKeyword] = useState("");
    // // const [changeMulti, setChangeMulti] = useState("active");

    // // Lọc theo trạng thái
    // const handleChangeFilterStatus = async (event: any) => {
    //     const value = event.target.value;
    //     const url = new URL(location.href);

    //     if (value) {
    //         url.searchParams.set("status", value);
    //     }
    //     else {
    //         url.searchParams.delete("status");
    //     }

    //     location.href = url.href;
    // }
    // // Hết Lọc theo trạng thái

    // // Tìm kiếm tài khoản
    // const handleSumbitSearch = async (event: any) => {
    //     event.preventDefault();

    //     const value = event.target.keyword.value;
    //     const url = new URL(location.href);

    //     if (value) {
    //         url.searchParams.set("keyword", value);
    //     }
    //     else {
    //         url.searchParams.delete("keyword");
    //     }

    //     location.href = url.href;
    // }
    // // Hết Tìm kiếm sản phẩm

    // // Thay đổi trạng thái 1 tài khoản
    // const handleChangeStatusOneAccount = async (status: string, dataPath: string) => {
    //     const statusChange = status;
    //     const path = `${linkApi}${dataPath}`;
    //     const data = {
    //         status: statusChange
    //     }
    //     const response = await fetch(path, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     });

    //     const dataResponse = await response.json();

    //     if (dataResponse.code == 200) {
    //         location.reload();
    //     }
    // }

    // // Xóa một tài khoản
    // const handleDeleteOneAccount = async (id: number) => {
    //     const path = `${linkApi}/deleteT/${id}`;

    //     const response = await fetch(path, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     });

    //     const dataResponse = await response.json();

    //     if (dataResponse.code == 200) {
    //         location.reload();
    //     }
    // }
    // // Hết Xóa một tài khoản

    return (
        <>
            <div>dsa</div>
        </>
    )
}