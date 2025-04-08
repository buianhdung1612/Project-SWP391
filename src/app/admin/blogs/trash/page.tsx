"use client";

import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Chip,
  Tooltip,
  Stack,
  Pagination,
} from "@mui/material";
import {
  MdDeleteOutline,
  MdOutlineSettingsBackupRestore,
} from "react-icons/md";
import Alert from "@mui/material/Alert";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { ProfileAdminContext } from "../../layout";

export default function BlogTrashAdminPage() {
  const dataProfile = useContext(ProfileAdminContext);
  const permissions = dataProfile?.permissions;
  const [data, setData] = useState({
    totalPages: 1,
    totalItems: 1,
    pageSize: 8,
    currentPage: 1,
    blogs: [],
  });
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertSeverity, setAlertSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("info");

  const linkApi = "https://freshskinweb.onrender.com/admin/blogs/trash";

  

  // Hiển thị lựa chọn mặc định
  const [filterStatus, setFilterStatus] = useState("");
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState("position-desc");
  const [page, setPage] = useState(1);
  const [changeMulti, setChangeMulti] = useState("RESTORED");

  useEffect(() => {
    const urlCurrent = new URL(location.href);
    const api = new URL(linkApi);

    // Lọc theo trạng thái
    const statusCurrent = urlCurrent.searchParams.get("status");
    setFilterStatus(statusCurrent ?? "");

    if (statusCurrent) {
      api.searchParams.set("status", statusCurrent);
    } else {
      api.searchParams.delete("status");
    }
    // Hết Lọc theo trạng thái

    // Tìm kiếm sản phẩm
    const keywordCurrent = urlCurrent.searchParams.get("keyword");
    setKeyword(keywordCurrent ?? "");

    if (keywordCurrent) {
      api.searchParams.set("keyword", keywordCurrent);
    } else {
      api.searchParams.delete("keyword");
    }
    // Hết Tìm kiếm sản phẩm

    // Phân trang
    const pageCurrent = urlCurrent.searchParams.get("page");
    setPage(pageCurrent ? parseInt(pageCurrent) : 1);

    if (pageCurrent) {
      api.searchParams.set("page", pageCurrent);
    } else {
      api.searchParams.delete("page");
    }
    // Hết Phân trang

    // Sắp xếp theo tiêu chí
    const sortKeyCurrent = urlCurrent.searchParams.get("sortKey");
    const sortValueCurrent = urlCurrent.searchParams.get("sortValue");

    if (sortKeyCurrent && sortValueCurrent) {
      setSort(`${sortKeyCurrent}-${sortValueCurrent}`);
    } else {
      setSort("position-desc");
    }

    if (sortKeyCurrent && sortValueCurrent) {
      api.searchParams.set("sortKey", sortKeyCurrent);
      api.searchParams.set("sortValue", sortValueCurrent);
    } else {
      api.searchParams.delete("sortKey");
      api.searchParams.delete("sortValue");
    }
    // Hết Sắp xếp theo tiêu chí

    const fetchBlogs = async () => {
      const response = await fetch(api.href);
      const data = await response.json();
      setData(data.data);
    };

    fetchBlogs();
  }, []);

  // Lọc theo trạng thái
  const handleChangeFilterStatus = async (event: any) => {
    const value = event.target.value;
    const url = new URL(location.href);

    if (value) {
      url.searchParams.set("status", value);
    } else {
      url.searchParams.delete("status");
    }

    location.href = url.href;
  };
  // Hết Lọc theo trạng thái

  // Tìm kiếm sản phẩm
  const handleSumbitSearch = async (event: any) => {
    event.preventDefault();

    const value = event.target.keyword.value;
    const url = new URL(location.href);

    if (value) {
      url.searchParams.set("keyword", value);
    } else {
      url.searchParams.delete("keyword");
    }

    location.href = url.href;
  };
  // Hết Tìm kiếm sản phẩm

  // Thay đổi trạng thái nhiều sản phẩm
  const handleChangeMulti = async (event: any) => {
    event.preventDefault();

    const statusChange = changeMulti;

    if (statusChange == "DELETE-DESTROY") {
      const confirm: boolean = window.confirm(
        "Bạn có chắc muốn xóa vĩnh viễn những bài viết này không?"
      );
      if (confirm) {
        const path = `${linkApi}/delete`;

        const data: any = {
          id: selectedCategories,
        };

        const response = await fetch(path, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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

      return;
    }

    const path = `${linkApi}/change-multi`;

    const data: any = {
      id: selectedCategories,
      status: statusChange,
    };

    const response = await fetch(path, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleInputChecked = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (event.target.checked) {
      setSelectedCategories((prev) => [...prev, id]);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== id));
    }
  };
  // Hết Thay đổi trạng thái nhiều sản phẩm

  // Xóa vĩnh viễn một sản phẩm
  const handleDeleteOnebrand = async (id: number) => {
    const confirm: boolean = window.confirm(
      "Bạn có chắc muốn xóa vĩnh viễn sản phẩm này không?"
    );
    if (confirm) {
      const path = `${linkApi}/delete/${id}`;

      const response = await fetch(path, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
  };
  // Hết Xóa một sản phẩm

  // Khôi phục một sản phẩm
  const handleRestoreOnebrand = async (id: number) => {
    const confirm: boolean = window.confirm(
      "Bạn có chắc muốn khôi phục sản phẩm này không?"
    );
    if (confirm) {
      const path = `${linkApi}/restore/${id}`;

      const response = await fetch(path, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
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
  };
  // Hết Xóa một sản phẩm

  // Sắp xếp theo tiêu chí
  const handleChangeSort = async (event: any) => {
    const value = event.target.value;
    const url = new URL(location.href);

    if (value) {
      const [sortKey, sortValue] = value.split("-");
      url.searchParams.set("sortKey", sortKey);
      url.searchParams.set("sortValue", sortValue);
    } else {
      url.searchParams.delete("sortKey");
      url.searchParams.delete("sortValue");
    }

    location.href = url.href;
  };
  // Hết Sắp xếp theo tiêu chí

  // Phân trang
  const handlePagination = (event: any, page: number) => {
    const url = new URL(location.href);

    if (page) {
      url.searchParams.set("page", page.toString());
    } else {
      url.searchParams.delete("page");
    }

    location.href = url.href;
  };
  // Hết phân trang

  return (
    <>
      {alertMessage && (
        <Alert severity={alertSeverity} sx={{ mb: 2 }}>
          {alertMessage}
        </Alert>
      )}

      {permissions?.includes("blogs_edit") &&
        permissions?.includes("blogs_view") && (
          <Box p={3}>
            {/* Header */}
            <Typography variant="h5" gutterBottom>
              Trang thùng rác bài viết
            </Typography>

            {/* Bộ lọc và Tìm kiếm */}
            <Paper elevation={1} sx={{ p: 2, mb: 2, bgcolor: "white" }}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                marginBottom={2}
                gutterBottom
              >
                Bộ lọc và Tìm kiếm
              </Typography>
              <Box display="flex" flexWrap="wrap">
                <FormControl sx={{ width: "30%", marginRight: "20px" }}>
                  <InputLabel id="filter-label" shrink={true}>
                    Bộ lọc
                  </InputLabel>
                  <Select
                    labelId="filter-label"
                    label="Bộ lọc"
                    value={filterStatus}
                    displayEmpty
                    onChange={handleChangeFilterStatus}
                  >
                    <MenuItem value="">Tất cả</MenuItem>
                    <MenuItem value="active">Hoạt động</MenuItem>
                    <MenuItem value="inactive">Dừng hoạt động</MenuItem>
                  </Select>
                </FormControl>
                <form
                  onSubmit={handleSumbitSearch}
                  style={{ flex: 1, gap: "8px" }}
                >
                  <Box display="flex">
                    <TextField
                      label="Nhập từ khóa..."
                      variant="outlined"
                      fullWidth
                      name="keyword"
                      defaultValue={keyword}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Button
                      variant="contained"
                      color="success"
                      type="submit"
                      sx={{ backgroundColor: "#374485" }}
                    >
                      Tìm
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
            {/* Sắp xếp */}
            <Paper elevation={1} sx={{ p: 2, mb: 3, bgcolor: "white" }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Sắp xếp
              </Typography>
              <Box display="flex" gap={2} flexWrap="wrap">
                <FormControl fullWidth sx={{ maxWidth: 300 }}>
                  <InputLabel id="sort-label" shrink={true}>
                    Sắp xếp
                  </InputLabel>
                  <Select
                    labelId="sort-label"
                    label="Sắp xếp"
                    value={sort}
                    displayEmpty
                    onChange={handleChangeSort}
                  >
                    <MenuItem value="position-desc">Vị trí giảm dần</MenuItem>
                    <MenuItem value="position-asc">Vị trí tăng dần</MenuItem>
                    <MenuItem value="title-desc">Tiêu đề từ Z đến A</MenuItem>
                    <MenuItem value="title-asc">Tiêu đề từ A đến Z</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Paper>

            {/* Table */}
            <Paper sx={{ backgroundColor: "white", p: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ marginLeft: "20px" }}>
                Danh sách
              </Typography>
              <Box display="flex" gap={20} flexWrap="wrap">
                <form
                  onSubmit={handleChangeMulti}
                  style={{ flex: 1, gap: "8px" }}
                >
                  {selectedCategories.length > 0 && (
                    <Box display="flex" gap={0.5}>
                      <Select
                        fullWidth
                        sx={{ maxWidth: 200 }}
                        name="status"
                        value={changeMulti}
                        displayEmpty
                        onChange={(e) => setChangeMulti(e.target.value)}
                      >
                        <MenuItem value="RESTORED">Khôi phục</MenuItem> 
                        <MenuItem value="DELETE-DESTROY">Xóa vĩnh viễn</MenuItem>
                      </Select>
                      <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{
                          width: "120px",
                          backgroundColor: "#374785",
                          color: "#ffffff",
                        }}
                      >
                        Áp dụng
                      </Button>
                    </Box>
                  )}
                </form>
                <Button
                  variant="outlined"
                  color="success"
                  sx={{ borderColor: "#374485", color: "#374485" }}
                >
                  <Link href="/admin/blogs" className="flex items-center">
                    <IoReturnDownBackOutline className="text-[25px] mr-[5px]" />
                    Danh sách bài viết
                  </Link>
                </Button>
              </Box>
              <TableContainer sx={{ marginTop: "40px" }} component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>STT</TableCell>
                      <TableCell>Hình ảnh</TableCell>
                      <TableCell>Tiêu đề</TableCell>
                      <TableCell>Trạng thái</TableCell>
                      <TableCell>Vị trí</TableCell>
                      <TableCell>Tác giả</TableCell>
                      <TableCell>Hành động</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.blogs.map((blog: any, index: number) => (
                      <TableRow key={blog.id}>
                         <TableCell
                          padding="checkbox"
                        >
                          <Checkbox onChange={(event) => handleInputChecked(event, blog.id)} />
                        </TableCell>
                        <TableCell>
                          {(data.currentPage - 1) * data.pageSize + index + 1}
                        </TableCell>
                        <TableCell>
                          <img
                            src={blog.thumbnail}
                            alt={blog.title}
                            style={{
                              width: 100,
                              height: 100,
                              objectFit: "cover",
                            }}
                          />
                        </TableCell>
                        <TableCell>{blog.title}</TableCell>
                        <TableCell>
                          {blog.status === "ACTIVE" && (
                            <Chip
                              label="Hoạt động"
                              color="success"
                              size="small"
                              variant="outlined"                           
                            />
                          )}
                          {blog.status === "INACTIVE" && (
                            <Chip
                              label="Dừng hoạt động"
                              color="error"
                              size="small"
                              variant="outlined"                            
                            />
                          )}
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {blog.position}
                          </Typography>
                        </TableCell>
                        <TableCell>{blog.author}</TableCell>
                        <TableCell>
                          <div className="flex">
                            <Tooltip title="Khôi phục" placement="top">
                              <MdOutlineSettingsBackupRestore
                                className="text-[25px] text-blue-500 cursor-pointer"
                                onClick={() => handleRestoreOnebrand(blog.id)}
                              />
                            </Tooltip>
                            <Tooltip
                              title="Xóa vĩnh viễn"
                              placement="top"
                              className="cursor-pointer"
                              onClick={() => handleDeleteOnebrand(blog.id)}
                            >
                              <MdDeleteOutline className="text-[25px] text-[#C62828] ml-1" />
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            {/* Pagination */}
            <Stack spacing={2} marginTop={2}>
              <Pagination
                count={data.totalPages}
                color="primary"
                page={page}
                variant="outlined"
                shape="rounded"
                siblingCount={1}
                sx={{
                  "& .MuiPaginationItem-root": {
                    backgroundColor: "white",
                    color: "blue",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  },
                  "& .Mui-selected": {
                    backgroundColor: "blue",
                    color: "white",
                  },
                }}
                onChange={handlePagination}
              />
            </Stack>
          </Box>
        )}
    </>
  );
}
