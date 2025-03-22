"use client"

import { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { SettingProfileContext } from "../../layout";
import { Context } from "./MiddlewareGetData";
import { useRouter } from "next/navigation";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Rating() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [starChoose, setStarChoose] = useState(0);
    const [openComment, setOpenComment] = useState(false);
    
    const settingProfile = useContext(SettingProfileContext);

    const { profile } = settingProfile || {}; 

    const productDetail = useContext(Context).productDetail;

    const [data, setData] = useState({
        page: {
            totalItems: 0,
            totalPages: 1,
            pageSize: 6,
            currentPage: 1
        },
        reviews: [],
        ratingDetail: {
            totalComment: 0,
            rating1: 0,
            rating2: 0,
            rating3: 0,
            rating4: 0,
            rating5: 0,
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/reviews/${productDetail.id}`);
            const data = await response.json();

            setData(data.data);
            setIsLoading(false);
        };

        fetchData();
    }, [productDetail.id]); // Thêm productDetail.id vào dependency array

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleClickWriteComment = () => {
        if (!profile || profile.firstName === "") {
            router.push("/user/login");
        } else {
            setOpenComment(!openComment);
        }
    }

    const handleChooseStar = (rating: number) => {
        setStarChoose(rating);
    }

    const handleSubmitComment = async (event: any) => {
        event.preventDefault();

        const data = {
            userId: profile?.userID,
            productId: productDetail.id,
            rating: starChoose,
            comment: event.target.comment.value
        };

        const response = await fetch(`https://freshskinweb.onrender.com/reviews/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataResponse = await response.json();
        if (dataResponse && dataResponse.code === 200) {
            location.reload();
        }
    }

    const handleSubmitReply = async (event: any, parentId: number) => {
        event.preventDefault();
    
        const data = {
            userId: profile?.userID,
            productId: productDetail.id,
            rating: 0,
            comment: event.target.reply.value,
            parentId: parentId
        }
    
        const response = await fetch(`https://freshskinweb.onrender.com/reviews/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    
        const dataResponse = await response.json();
        if (dataResponse) {
            if (dataResponse.code == 200) {
                location.reload();
            }
        }
    }

    // Tính toán tổng đánh giá
    const totalRating = data.ratingDetail.rating1 + data.ratingDetail.rating2 + data.ratingDetail.rating3 + data.ratingDetail.rating4 + data.ratingDetail.rating5;
    const ratingGeneral = totalRating > 0
        ? ((data.ratingDetail.rating1 * 1 + data.ratingDetail.rating2 * 2 + data.ratingDetail.rating3 * 3 + data.ratingDetail.rating4 * 4 + data.ratingDetail.rating5 * 5) / totalRating).toFixed(1)
        : "0";

    const widthRating1 = totalRating > 0 ? (data.ratingDetail.rating1 / totalRating * 150).toFixed(0) : 0;
    const widthRating2 = totalRating > 0 ? (data.ratingDetail.rating2 / totalRating * 150).toFixed(0) : 0;
    const widthRating3 = totalRating > 0 ? (data.ratingDetail.rating3 / totalRating * 150).toFixed(0) : 0;
    const widthRating4 = totalRating > 0 ? (data.ratingDetail.rating4 / totalRating * 150).toFixed(0) : 0;
    const widthRating5 = totalRating > 0 ? (data.ratingDetail.rating5 / totalRating * 150).toFixed(0) : 0;
    const setStar = parseInt(ratingGeneral.charAt(2));

    return (
        <>
        <div className="container mx-auto mt-[40px] py-[5px] bg-[#F0F0F5]">
            {/* Thông tin chung */}
            <div className="px-[20px]">
                <div className="text-[18px] font-[700] mb-[10px]">Đánh giá</div>
                <div className="text-[13px] font-[400]">Đánh giá trung bình</div>
                <div className="flex items-center">
                    <div className="w-[30%] text-center">
                        <span className="font-[700] text-[80px] text-[#f60]">{ratingGeneral}</span>
                        <span className="flex items-center justify-center mb-[10px]">
                            {[...Array(parseInt(ratingGeneral))].map((_, i) => (
                                <FaStar key={i} className="text-[#f60]" />
                            ))}
                            {(setStar == 3 || setStar == 4 || setStar == 5 || setStar == 6 || setStar == 7) && (
                                <>
                                    <FaStarHalfAlt className="text-[#f60]" />
                                    {[...Array(5 - 1 - parseInt(ratingGeneral))].map((_, i) => (
                                        <FaRegStar key={i} className="text-[#f60]" />
                                    ))}
                                </>
                            )}
                            {(setStar == 0 || setStar == 1 || setStar == 2) && (
                                <>
                                    {[...Array(5 - parseInt(ratingGeneral))].map((_, i) => (
                                        <FaRegStar key={i} className="text-[#f60]" />
                                    ))}
                                </>
                            )}
                            {(setStar == 8 || setStar == 9) && (
                                <>
                                    <FaStar className="text-[#f60]" />
                                    {[...Array(5 - 1 - parseInt(ratingGeneral))].map((_, i) => (
                                        <FaRegStar key={i} className="text-[#f60]" />
                                    ))}
                                </>
                            )}
                        </span>
                        <span>{data.page.totalItems} nhận xét</span>
                    </div>
                    <div className="w-[40%] pt-[35px]">
                        <div className="flex items-center mb-[5px]">
                            <span className="mr-[15px] text-[13px]">5 sao</span>
                            <div className="relative">
                                <input
                                    className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                    readOnly
                                />
                                <input
                                    style={{ width: `${widthRating5}px` }}
                                    className="h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                    readOnly
                                />
                            </div>
                            <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">{data.ratingDetail.rating5} Rất hài lòng</span>
                        </div>
                        <div className="flex items-center mb-[5px]">
                            <span className="mr-[15px] text-[13px]">4 sao</span>
                            <div className="relative">
                                <input
                                    className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                    readOnly
                                />
                                <input
                                    style={{ width: `${widthRating4}px` }}
                                    className="h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                    readOnly
                                />
                            </div>
                            <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">{data.ratingDetail.rating4} Hài lòng</span>
                        </div>
                        <div className="flex items-center mb-[10px]">
                            <span className="mr-[15px] text-[13px]">3 sao</span>
                            <div className="relative">
                                <input
                                    className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                    readOnly
                                />
                                <input
                                    style={{ width: `${widthRating3}px` }}
                                    className="h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                    readOnly
                                />
                            </div>
                            <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">{data.ratingDetail.rating3} Bình thường</span>
                        </div>
                        <div className="flex items-center mb-[10px]">
                            <span className="mr-[15px] text-[13px]">2 sao</span>
                            <div className="relative">
                                <input
                                    className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                    readOnly
                                />
                                <input
                                    style={{ width: `${widthRating2}px` }}
                                    className="h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                    readOnly
                                />
                            </div>
                            <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">{data.ratingDetail.rating2} Không hài lòng</span>
                        </div>
                        <div className="flex items-center mb-[10px]">
                            <span className="mr-[15px] text-[13px]">1 sao</span>
                            <div className="relative">
                                <input
                                    className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                    readOnly
                                />
                                <input
                                    style={{ width: `${widthRating1}px` }}
                                    className="h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                    readOnly
                                />
                            </div>
                            <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">{data.ratingDetail.rating1} Rất tệ</span>
                        </div>
                    </div>
                    <div className="flex-1 text-center">
                        <div className="text-[13px]">Chia sẻ nhận xét của bạn về sản phẩm này</div>
                        <button
                            onClick={() => handleClickWriteComment()}
                            className="text-[15px] mt-[15px] font-bold text-white bg-[#F26800] h-[34px] px-[10px] rounded-[3px]"
                        >
                            Viết Bình luận
                        </button>
                    </div>
                </div>
                {/* Comment */}
                {openComment && (
                    <div className="px-2 bg-white p-[10px] rounded-[5px]">
                        <div className="text-[12px] font-[400]">Đánh giá sản phẩm này *</div>
                        <div className="px-1 my-[10px]">
                            {starChoose == 0 && (
                                <div className="flex items-center">
                                    <CiStar onClick={() => handleChooseStar(1)} className="w-[28px] h-[28px] text-[#f60] cursor-pointer" />
                                    <CiStar onClick={() => handleChooseStar(2)} className="w-[28px] h-[28px] text-[#f60] cursor-pointer" />
                                    <CiStar onClick={() => handleChooseStar(3)} className="w-[28px] h-[28px] text-[#f60] cursor-pointer" />
                                    <CiStar onClick={() => handleChooseStar(4)} className="w-[28px] h-[28px] text-[#f60] cursor-pointer" />
                                    <CiStar onClick={() => handleChooseStar(5)} className="w-[28px] h-[28px] text-[#f60] cursor-pointer" />
                                </div>
                            )}
                            {starChoose == 1 && (
                                <div className="flex items-center">
                                    <FaStar className="w-[23px] h-[23px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(2)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(3)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(4)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(5)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <span className="text-[13px] ml-[15px] mt-1">Rất tệ</span>
                                </div>
                            )}
                            {starChoose == 2 && (
                                <div className="flex items-center">
                                    <FaStar onClick={() => handleChooseStar(1)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(2)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(3)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(4)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(5)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <span className="text-[13px] ml-[15px] mt-1">Không hài lòng</span>
                                </div>
                            )}
                            {starChoose == 3 && (
                                <div className="flex items-center">
                                    <FaStar onClick={() => handleChooseStar(1)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(2)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(3)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(4)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(5)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <span className="text-[13px] ml-[15px] mt-1">Bình thường</span>
                                </div>
                            )}
                            {starChoose == 4 && (
                                <div className="flex items-center">
                                    <FaStar onClick={() => handleChooseStar(1)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(2)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(3)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(4)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <CiStar onClick={() => handleChooseStar(5)} className="w-[28px] h-[28px] text-[#f60]" />
                                    <span className="text-[13px] ml-[15px] mt-1">Hài lòng</span>
                                </div>
                            )}
                            {starChoose == 5 && (
                                <div className="flex items-center">
                                    <FaStar onClick={() => handleChooseStar(1)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(2)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(3)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(4)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <FaStar onClick={() => handleChooseStar(5)} className="w-[23px] h-[23px] text-[#f60]" />
                                    <span className="text-[13px] ml-[15px] mt-1">Rất hài lòng</span>
                                </div>
                            )}
                        </div>
                        <div className="text-[12px] font-[400]">Mô tả nhận xét *</div>
                        <form onSubmit={handleSubmitComment}>
                            <textarea
                                name="comment"
                                placeholder="Nhập mô tả tại đây"
                                rows={2}
                                className="flex min-h-[60px] w-full placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-white border-[1px] border-[#ccc] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,.075),0_0_8px_rgba(102,175,233,0.6)] focus:border-[#66afe9] focus-visible:ring-0 px-3 py-1.5 rounded-[3px] text-sm my-[10px]"
                            ></textarea>
                            <div className="flex items-center mt-[50px] mb-[10px] justify-end">
                                <button onClick={() => setOpenComment(false)} className="w-[100px] h-[34px] text-center font-bold text-[15px] rounded-[3px] text-white bg-[#e8e8e8]">
                                    Bỏ qua
                                </button>
                                <button
                                    className="w-[100px] h-[34px] flex items-center justify-center gap-2 rounded-full text-center font-bold text-[15px] text-white bg-[#306E51] cursor-pointer ml-[5px]"
                                    type="submit"
                                >
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            {/* Phân trang */}
            <div className="mx-[20px] mt-[10px] px-[10px] bg-white flex items-center rounded-[3px] py-[6px]">
                <span className="text-[14px] text-black">{data.ratingDetail.totalComment} bình luận cho sản phẩm này</span>
            </div>

            <div className="mt-[20px] px-[20px]">
                {data.reviews.map((item: any, index: number) => (
                    <div key={index} className="pb-[10px] mb-[10px] border-b border-b-[#f4f4f4] border-solid">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {item.rating !== 0 && (
                                    <span className="flex items-center mr-[10px]">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-[#f60]" />
                                        ))}
                                    </span>
                                )}
                                <span className="text-[13px] font-bold text-[#326E51]">{item.user.firstName} {item.user.lastName}</span>
                                <span className="text-[#999] text-[13px] ml-[10px]">{productDetail.title}</span>
                            </div>
                            <div className="text-[13px] text-[#666]">{item.createdAt}</div>
                        </div>
                        <div className="mt-[5px] text-[13px]">{item.comment}</div>
                        {item.replies.map((item: any, index: number) => (
                            <div key={index} className="py-[10px] pl-[30px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {item.rating !== 0 && (
                                            <span className="flex items-center mr-[10px]">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <FaStar key={i} className="text-[#f60]" />
                                                ))}
                                            </span>
                                        )}
                                        <span className="text-[13px] font-bold text-[#326E51]">{item.user.firstName} {item.user.lastName}</span>
                                    </div>
                                    <div className="text-[13px] text-[#666]">{item.createdAt}</div>
                                </div>
                                <div className="mt-[5px] text-[13px]">{item.comment}</div>
                            </div>
                        ))}
                        {profile?.firstName !== "" && (
                            <form onSubmit={(event) => handleSubmitReply(event, item.reviewId)} className="flex pl-[30px] items-center">
                                <textarea
                                    name="reply"
                                    className="w-[80%] min-h-[40px] leading-[32px] px-3 border-[1px] border-[#ccc] rounded-[3px] focus:border-[#66afe9] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,.075),0_0_8px_rgba(102,175,233,0.6)] outline-none"
                                    rows={1}
                                    placeholder="Nội dung trả lời của bạn."
                                >
                                </textarea>
                                <button
                                    type="submit"
                                    className="flex ml-[10px] items-center gap-2 justify-center text-sm disabled:opacity-80 text-white w-[100px] bg-[#326E51] h-[34px] shrink-0 py-[7px] px-2.5 leading-[32px] text-center font-bold normal-case rounded-full"
                                >
                                    Gửi
                                </button>
                            </form>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}