"use client";

import { useContext, useEffect, useState } from "react";
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
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import UploadImage from "@/app/components/Upload/UploadImage";
import { ProfileAdminContext } from "../../layout";
import Alert from "@mui/material/Alert";
export default function CreateAccountAdmin() {
  const dataProfile = useContext(ProfileAdminContext);
  const permissions = dataProfile?.permissions;
  const [listRoles, setListRoles] = useState([]);
  const [roleCurrent, setRoleCurrent] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://freshskinweb.onrender.com/admin/roles"
      );
      const data = await response.json();
      setListRoles(data.data);
    };

    fetchCategories();
  }, []);

  const [images, setImages] = useState<File[]>([]);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertSeverity, setAlertSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const handleImageChange = (newImages: File[]) => {
    setImages(newImages);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const request = {
      username: formData.get("username"),
      password: formData.get("password"),
      role: roleCurrent,
      firstName: formData.get("firstname"),
      lastName: formData.get("lastname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      status: formData.get("status"),
    };

    formData.append("request", JSON.stringify(request));

    images.forEach((image) => {
      if (image instanceof File) {
        formData.append("avatar", image);
      }
    });

    const response = await fetch(
      "https://freshskinweb.onrender.com/admin/account/create",
      {
        method: "POST",
        body: formData,
      }
    );

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
      {permissions?.includes("accounts_create") && (
        <Box sx={{ padding: 3, backgroundColor: "#ffffff" }}>
          <Typography variant="h5" gutterBottom>
            Trang tạo mới tài khoản quản trị
          </Typography>

          <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
            <form onSubmit={handleSubmit}>
              <FormControl
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 3 }}
              >
                <InputLabel shrink={true}>-- Chọn nhóm quyền --</InputLabel>
                <Select
                  value={roleCurrent}
                  onChange={(e) => setRoleCurrent(e.target.value)}
                  label="Chọn nhóm quyền --"
                  displayEmpty
                >
                  <MenuItem value="">-- Chọn nhóm quyền --</MenuItem>
                  {listRoles.map((item: any, index: number) => (
                    <MenuItem key={index} value={item.roleId}>
                      {item.title}
                    </MenuItem>
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
              />
              <TextField
                label="Tên"
                name="lastname"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 3 }}
                required
              />
              <TextField
                label="Tên đăng nhập"
                name="username"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 3 }}
                required
              />
              <TextField
                label="Mật khẩu"
                name="password"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 3 }}
                required
                type="password"
              />
              <TextField
                label="Địa chỉ"
                name="address"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 3 }}
                required
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 3 }}
                required
                type="email"
              />
              <TextField
                label="Số điện thoại"
                name="phone"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 3 }}
                required
              />
              <UploadImage
                label="Ảnh đại diện"
                id="images"
                name="images"
                onImageChange={handleImageChange}
              />
              <FormControl fullWidth sx={{ marginBottom: 3 }}>
                <RadioGroup defaultValue="ACTIVE" name="status" row>
                  <FormControlLabel
                    value="ACTIVE"
                    control={<Radio />}
                    label="Hoạt động"
                  />
                  <FormControlLabel
                    value="INACTIVE"
                    control={<Radio />}
                    label="Dừng hoạt động"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                Tạo tài khoản
              </Button>
            </form>
          </Paper>
        </Box>
      )}
    </>
  );
}
