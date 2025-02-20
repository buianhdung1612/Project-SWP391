"use client";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import dynamic from "next/dynamic";
const TinyEditor = dynamic(() => import('../../../../../TinyEditor'), {
    ssr: false
});

export default function SettingGeneralAdminPage() {
    const [policy1, setPolicy1] = useState('');
    const [policy2, setPolicy2] = useState('');
    const [policy3, setPolicy3] = useState('');
    const [policy4, setPolicy4] = useState('');
    const [policy5, setPolicy5] = useState('');
    const [policy6, setPolicy6] = useState('');
    const [support1, setSupport1] = useState('');
    const [support2, setSupport2] = useState('');
    const [support3, setSupport3] = useState('');
    const [support4, setSupport4] = useState('');
    const [support5, setSupport5] = useState('');
    const [support6, setSupport6] = useState('');

    const [formData, setFormData] = useState({
        websiteName: '',
        logo: '',
        phone: '',
        email: '',
        address: '',
        copyright: '',
        facebook: '',
        twitter: '',
        youtube: '',
        instagram: ''
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const data: any = {
            websiteName: formData.websiteName,
            logo: formData.logo,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            copyright: formData.copyright,
            facebook: formData.facebook,
            twitter: formData.twitter,
            youtube: formData.youtube,
            instagram: formData.instagram,
            policy1: policy1,
            policy2: policy2,
            policy3: policy3,
            policy4: policy4,
            policy5: policy5,
            policy6: policy6,
            support1: support1,
            support2: support2,
            support3: support3,
            support4: support4,
            support5: support5,
            support6: support6
        }

        console.log(data);
    };

    return (
        <>
            <Box p={3} sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
                <Typography variant="h4" gutterBottom>
                    Trang cài đặt chung
                </Typography>
                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Tên website"
                            name="websiteName"
                            value={formData.websiteName}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Logo"
                            name="logo"
                            value={formData.logo}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Số điện thoại"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Địa chỉ"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Copyright"
                            name="copyright"
                            value={formData.copyright}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Facebook"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Twitter"
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Youtube"
                            name="youtube"
                            value={formData.youtube}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Instagram"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                        />
                        <h4 className="my-4 ml-2 text-[18px]">Chính sách và quy định chung</h4>
                        <TinyEditor value={policy1} onEditorChange={(content: string) => setPolicy1(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Chính sách thanh toán</h4>
                        <TinyEditor value={policy2} onEditorChange={(content: string) => setPolicy2(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Chính sách giao nhận</h4>
                        <TinyEditor value={policy3} onEditorChange={(content: string) => setPolicy3(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Chính sách đổi trả sản phẩm</h4>
                        <TinyEditor value={policy4} onEditorChange={(content: string) => setPolicy4(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Chính sách bảo mật thông tin cá nhân</h4>
                        <TinyEditor value={policy5} onEditorChange={(content: string) => setPolicy5(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Điều khoản sử dụng</h4>
                        <TinyEditor value={policy6} onEditorChange={(content: string) => setPolicy6(content)} />

                        <h4 className="my-4 ml-2 text-[18px]">Quyền lợi Fresh-er</h4>
                        <TinyEditor value={support1} onEditorChange={(content: string) => setSupport1(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Thông tin thành viên</h4>
                        <TinyEditor value={support2} onEditorChange={(content: string) => setSupport2(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Tích điểm đổi quà</h4>
                        <TinyEditor value={support3} onEditorChange={(content: string) => setSupport3(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Hệ thống cửa hàng</h4>
                        <TinyEditor value={support4} onEditorChange={(content: string) => setSupport4(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Tuyển dụng</h4>
                        <TinyEditor value={support5} onEditorChange={(content: string) => setSupport5(content)} />
                        <h4 className="my-4 ml-2 text-[18px]">Liên hệ</h4>
                        <TinyEditor value={support6} onEditorChange={(content: string) => setSupport6(content)} />

                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                            Cập nhật
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    )
}