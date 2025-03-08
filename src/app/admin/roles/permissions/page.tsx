"use client"

import Permission from "@/app/components/Permission/Permission";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PermissionPage() {
    const [listRoles, setListRoles] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://freshskinweb.onrender.com/admin/roles');
            const data = await response.json();
            setListRoles(data.data);
        };

        fetchCategories();
    }, []);

    const handleClick = () => {
        const dataFinal: any = [];

        const listElementRoleId = document.querySelectorAll("[role-id]");
        listElementRoleId.forEach(elementRoleId => {
            const roleId = elementRoleId.getAttribute("role-id");
            const listInputChecked = document.querySelectorAll(`input[data-id="${roleId}"]:checked`);

            const permissions: any = [];

            listInputChecked.forEach(input => {
                const tr = input.closest("[data-name]");
                const name = tr?.getAttribute("data-name");
                permissions.push(name);
            });

            dataFinal.push({
                roleId: roleId,
                permissions: permissions
            })
        });

        console.log(dataFinal);
    }

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
                Quản lý phân quyền
            </Typography>

            <Paper sx={{ backgroundColor: "white", p: 2 }}>
                <Box display="flex" justifyContent="flex-end" gap={2} mb={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ minWidth: "150px", boxShadow: 2 }}
                        onClick={handleClick}
                    >
                        Cập nhật quyền
                    </Button>
                </Box>

                <table style={{ width: '100%', tableLayout: 'fixed', borderSpacing: '0 10px', borderCollapse: 'separate' }}>
                    <thead>
                        <tr>
                            <th style={{ fontWeight: "bold", textAlign: "left", padding: '12px', backgroundColor: '#f5f5f5' }}>Tính năng</th>
                            {listRoles.map((item: any, index: number) => (
                                <th key={index} style={{ fontWeight: "bold", textAlign: 'center', padding: '12px', backgroundColor: '#f5f5f5' }} role-id={item.roleId}>
                                    {item.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Tổng quan */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e3f2fd' }} colSpan={listRoles.length + 1}>
                                Tổng quan
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "dashboard_view", dataContent: "Xem" }
                            ]}
                        />

                        {/* Danh mục sản phẩm */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Danh mục sản phẩm
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "products-category_view", dataContent: "Xem" },
                                { dataName: "products-category_create", dataContent: "Thêm mới" },
                                { dataName: "products-category_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "products-category_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Sản phẩm */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Sản phẩm
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "products_view", dataContent: "Xem" },
                                { dataName: "products_create", dataContent: "Thêm mới" },
                                { dataName: "products_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "products_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Thương hiệu */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Thương hiệu
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "brands_view", dataContent: "Xem" },
                                { dataName: "brands_create", dataContent: "Thêm mới" },
                                { dataName: "brands_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "brands_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Thể loại da */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Thể loại da
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "skin_view", dataContent: "Xem" },
                                { dataName: "skin_create", dataContent: "Thêm mới" },
                                { dataName: "skin_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "skin_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Danh mục bài viết */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Danh mục bài viết
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "blogs-category_view", dataContent: "Xem" },
                                { dataName: "blogs-category_create", dataContent: "Thêm mới" },
                                { dataName: "blogs-category_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "blogs-category_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Bài viết */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Bài viết
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "blogs_view", dataContent: "Xem" },
                                { dataName: "blogs_create", dataContent: "Thêm mới" },
                                { dataName: "blogs_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "blogs_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Đơn hàng */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Đơn hàng
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "orders_view", dataContent: "Xem" },
                                { dataName: "orders_confirm", dataContent: "Duyệt đơn" },
                                { dataName: "orders_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Nhóm quyền */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Nhóm quyền
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "roles_view", dataContent: "Xem" },
                                { dataName: "roles_create", dataContent: "Thêm mới" },
                                { dataName: "roles_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "roles_delete", dataContent: "Xóa" },
                                { dataName: "roles_permissions", dataContent: "Phân quyền" }
                            ]}
                        />

                        {/* Tài khoản quản trị */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Tài khoản quản trị
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "accounts_view", dataContent: "Xem" },
                                { dataName: "accounts_create", dataContent: "Thêm mới" },
                                { dataName: "accounts_edit", dataContent: "Chỉnh sửa" },
                                { dataName: "accounts_delete", dataContent: "Xóa" }
                            ]}
                        />

                        {/* Cài đặt */}
                        <tr>
                            <td style={{ fontWeight: "bold", padding: '12px', backgroundColor: '#e1f5fe' }} colSpan={listRoles.length + 1}>
                                Cài đặt
                            </td>
                        </tr>
                        <Permission
                            roles={listRoles}
                            permissions={[
                                { dataName: "settings_view", dataContent: "Xem" },
                                { dataName: "settings_edit", dataContent: "Chỉnh sửa" }
                            ]}
                        />
                    </tbody>
                </table>
            </Paper>
        </Box>
    );
}
