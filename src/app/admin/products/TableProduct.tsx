import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Chip, Tooltip } from "@mui/material";
import { BiDetail } from "react-icons/bi";
import { MdDeleteOutline, MdEditNote } from "react-icons/md";

export default function TableProduct(props: any) {
    const { data } = props;

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell ></TableCell>
                            <TableCell>STT</TableCell>
                            <TableCell>Hình ảnh</TableCell>
                            <TableCell>Tiêu đề</TableCell>
                            <TableCell>Giá</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell>Vị trí</TableCell>
                            {/* <TableCell>Tạo bởi</TableCell> */}
                            {/* <TableCell>Cập nhật bởi</TableCell> */}
                            <TableCell>Hành động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((product: any, index: number) => (
                            <TableRow key={product.id}>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        style={{ width: 100, height: 100, objectFit: "cover" }}
                                    />
                                </TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{100}</TableCell>
                                <TableCell>
                                    {product.status === "ACTIVE" && (
                                        <Chip
                                            label="Hoạt động"
                                            color="success"
                                            size="small"
                                            variant="outlined"
                                        />
                                    )}
                                    {product.status === "INACTIVE" && (
                                        <Chip
                                            label="Dừng hoạt động"
                                            color="error"
                                            size="small"
                                            variant="outlined"
                                        />
                                    )}
                                </TableCell>
                                <TableCell>{product.position}</TableCell>
                                {/* <TableCell>
                                    {product.createdBy}
                                    <br />
                                    {product.createdAt}
                                </TableCell>
                                <TableCell>
                                    {product.updatedBy}
                                    <br />
                                    {product.updatedAt}
                                </TableCell> */}
                                <TableCell>
                                    <div className="flex">
                                        <Tooltip title="Chi tiết" placement="top">
                                            <BiDetail className="text-[25px] text-[#138496] mr-2" />
                                        </Tooltip>
                                        <Tooltip title="Sửa" placement="top">
                                            <MdEditNote className="text-[25px] text-[#E0A800]" />
                                        </Tooltip>
                                        <Tooltip title="Xóa" placement="top">
                                            <MdDeleteOutline className="text-[25px] text-[#C62828] ml-1" />
                                        </Tooltip>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}