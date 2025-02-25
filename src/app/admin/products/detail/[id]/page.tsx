"use client";




export default function DetailProductAdminPage() {

    

    return (
        // <Container maxWidth="md" sx={{ mt: 4 }}>
        //     <Card elevation={3}>
        //         <CardContent>
        //             {/* Title */}
        //             <Typography
        //                 variant="h4"
        //                 component="h1"
        //                 gutterBottom
        //                 sx={{ fontWeight: "bold", textAlign: "center" }}
        //             >
        //                 {productInfo.title}
        //             </Typography>

        //             {/* Status */}
        //             <Box sx={{ textAlign: "center", mb: 2 }}>
        //                 <Chip
        //                     label={
        //                         productInfo.status === "ACTIVE" ? "Đang hoạt động" : "Không hoạt động"
        //                     }
        //                     color={productInfo.status === "ACTIVE" ? "success" : "error"}
        //                     sx={{ fontSize: "1rem", fontWeight: "bold" }}
        //                 />
        //             </Box>

        //             <Divider sx={{ my: 2 }} />

        //             {/* Thumbnail */}
        //             <Box sx={{ textAlign: "center", mb: 4 }}>
        //                 {productInfo.thumbnail.map((image, index) => (
        //                     <img
        //                         key={index}
        //                         src={image}
        //                         alt="Product Thumbnail"
        //                         style={{
        //                             maxWidth: "100%",
        //                             height: "auto",
        //                             borderRadius: "8px",
        //                             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        //                         }}
        //                     />
        //                 ))}
        //             </Box>

        //             {/* Brand */}
        //             <Box sx={{ mb: 4 }}>
        //                 <Typography
        //                     variant="h6"
        //                     sx={{ fontWeight: "bold", color: "#555", mb: 1 }}
        //                 >
        //                     Thương hiệu:
        //                 </Typography>
        //                 <Box
        //                     sx={{
        //                         display: "flex",
        //                         alignItems: "center",
        //                         gap: 2,
        //                         p: 2,
        //                         borderRadius: 2,
        //                         backgroundColor: "#f5f5f5",
        //                         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        //                     }}
        //                 >
        //                     <img
        //                         src={productInfo.brand.image}
        //                         alt={productInfo.brand.title}
        //                         style={{
        //                             width: 50,
        //                             height: 50,
        //                             borderRadius: "50%",
        //                             objectFit: "cover",
        //                         }}
        //                     />
        //                     <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        //                         {productInfo.brand.title}
        //                     </Typography>
        //                 </Box>
        //             </Box>

        //             <Divider sx={{ my: 2 }} />

        //             {/* Categories */}
        //             <Box sx={{ mb: 4 }}>
        //                 <Typography
        //                     variant="h6"
        //                     sx={{ fontWeight: "bold", color: "#555", mb: 1 }}
        //                 >
        //                     Danh mục:
        //                 </Typography>
        //                 <List>
        //                     {productInfo.category.map((cat) => (
        //                         <ListItem key={cat.id} sx={{ p: 0 }}>
        //                             <ListItemText
        //                                 primary={cat.title}
        //                                 secondary={cat.description}
        //                                 primaryTypographyProps={{ fontWeight: "bold" }}
        //                             />
        //                         </ListItem>
        //                     ))}
        //                 </List>
        //             </Box>

        //             {/* Variants */}
        //             <Box sx={{ mb: 4 }}>
        //                 <Typography
        //                     variant="h6"
        //                     sx={{ fontWeight: "bold", color: "#555", mb: 1 }}
        //                 >
        //                     Các phiên bản:
        //                 </Typography>
        //                 <Grid container spacing={2}>
        //                     {productInfo.variants.map((variant, index) => (
        //                         <Grid item xs={12} sm={6} key={index}>
        //                             <Box
        //                                 sx={{
        //                                     p: 2,
        //                                     borderRadius: 2,
        //                                     backgroundColor: "#f5f5f5",
        //                                     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        //                                     textAlign: "center",
        //                                 }}
        //                             >
        //                                 <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        //                                     Dung tích: {variant.volume} ml
        //                                 </Typography>
        //                                 <Typography variant="body1" sx={{ color: "#4caf50" }}>
        //                                     Giá: {variant.price.toLocaleString("vi-VN")} VND
        //                                 </Typography>
        //                             </Box>
        //                         </Grid>
        //                     ))}
        //                 </Grid>
        //             </Box>

        //             <Divider sx={{ my: 2 }} />

        //             {/* Description */}
        //             <Box
        //                 sx={{
        //                     mb: 4,
        //                     p: 3,
        //                     borderRadius: 2,
        //                     backgroundColor: "#f5f5f5",
        //                     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        //                 }}
        //             >
        //                 <Typography
        //                     variant="h5"
        //                     gutterBottom
        //                     sx={{
        //                         fontWeight: "bold",
        //                         textAlign: "center",
        //                         color: "#333",
        //                         mb: 2,
        //                     }}
        //                 >
        //                     Mô tả
        //                 </Typography>
        //                 <div
        //                     dangerouslySetInnerHTML={{
        //                         __html: showFullDescription
        //                             ? productInfo.description
        //                             : productInfo.description.slice(0, 800) +
        //                             (productInfo.description.length > 800 ? "..." : ""),
        //                     }}
        //                     style={{
        //                         fontSize: "1rem",
        //                         lineHeight: 1.8,
        //                         color: "#555",
        //                         textAlign: "justify",
        //                     }}
        //                 />
        //                 {productInfo.description.length > 800 && (
        //                     <Box sx={{ mt: 2, textAlign: "center" }}>
        //                         <Button
        //                             variant="text"
        //                             onClick={() => setShowFullDescription(!showFullDescription)}
        //                             sx={{
        //                                 fontWeight: "bold",
        //                                 textTransform: "none",
        //                                 mx: 1,
        //                             }}
        //                         >
        //                             {showFullDescription ? "Rút gọn" : "Xem thêm"}
        //                         </Button>
        //                     </Box>
        //                 )}
        //             </Box>
        //         </CardContent>
        //     </Card>
        // </Container>
<div>ds</div>
    );
}