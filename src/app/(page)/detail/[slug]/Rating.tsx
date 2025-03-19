"use client"

import { useContext, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { SettingProfileContext } from "../../layout";
import { useSelector } from "react-redux";
import { Context } from "./MiddlewareGetData";

export default function Rating() {
    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    const products = useSelector((state: any) => state.cartReducer.products);

    const { productDetail } = useContext(Context);

    useEffect(() => {
        const fetchDetailProduct = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/reviews/${productDetail.id}`);
            const data = await response.json();

            console.log(data);
        };

        fetchDetailProduct();
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="px-[20px]">
                    <div className="text-[18px] font-[700] mb-[10px]">Đánh giá</div>
                    <div className="text-[13px] font-[400]">Đánh giá trung bình</div>
                    <div className="flex items-center">
                        <div className="w-[30%] text-center">
                            <span className="font-[700] text-[80px] text-[#f60]">4.9</span>
                            <span className="flex items-center justify-center mb-[10px]">
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                                <FaStar className="text-[#f60]" />
                            </span>
                            <span>122 nhận xét</span>
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
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[5px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[10px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[10px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                            <div className="flex items-center mb-[10px]">
                                <span className="mr-[15px] text-[13px]">5 sao</span>
                                <div className="relative">
                                    <input
                                        className="w-[150px] h-[15px] bg-[#D7D7D7] outline-none"
                                        readOnly
                                    />
                                    <input
                                        className="w-[100px] h-[15px] bg-[#f60] outline-none absolute left-0 top-[4.5px]"
                                        readOnly
                                    />
                                </div>
                                <span className="ml-[15px] text-[13px] text-[#B1B1B1] font-[600]">107 Rất hài lòng</span>
                            </div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-[13px]">Chia sẻ nhận xét của bạn về sản phẩm này</div>
                            <button className="text-[15px] mt-[15px] font-bold text-white bg-[#F26800] h-[34px] px-[10px] rounded-[3px]">Viết Bình luận</button>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] px-[20px]">
                    <div className="pb-[10px] mb-[10px] border-b border-b-[#f4f4f4] border-solid">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                </span>
                                <span className="ml-[10px] text-[13px] font-bold text-[#326E51]">Hiền Nguyễn</span>
                                <span className="text-[#999] text-[13px] ml-[10px]">Lăn Khử Mùi EtiaXil Nhãn Xanh Cho Da Nhạy Cảm 15ml</span>
                            </div>
                            <div className="text-[13px] text-[#666]">13:46 | 2024-05-23</div>
                        </div>
                        <div className="mt-[5px] text-[13px]">Đi spa được bạn NV chỉ cho dùng hãng này, xài dính tới giờ hơn 1 năm rồi chưa có ý đổi đổi brand ^^ Ban đầu dùng mỗi tối, sau 1 tuần thì cách ngày ra dùng nha mấy bà, đợt đầu ham hố dùng liên tiếp tuần thứ 2 nó bị kích ứng. Kiểm soát tuyến mồ hôi tốt cực</div>
                    </div>
                    <div className="pb-[10px] mb-[10px] border-b border-b-[#f4f4f4] border-solid">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="flex items-center">
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                    <FaStar className="text-[#f60]" />
                                </span>
                                <span className="ml-[10px] text-[13px] font-bold text-[#326E51]">Hiền Nguyễn</span>
                                <span className="text-[#999] text-[13px] ml-[10px]">Lăn Khử Mùi EtiaXil Nhãn Xanh Cho Da Nhạy Cảm 15ml</span>
                            </div>
                            <div className="text-[13px] text-[#666]">13:46 | 2024-05-23</div>
                        </div>
                        <div className="mt-[5px] text-[13px]">Đi spa được bạn NV chỉ cho dùng hãng này, xài dính tới giờ hơn 1 năm rồi chưa có ý đổi đổi brand ^^ Ban đầu dùng mỗi tối, sau 1 tuần thì cách ngày ra dùng nha mấy bà, đợt đầu ham hố dùng liên tiếp tuần thứ 2 nó bị kích ứng. Kiểm soát tuyến mồ hôi tốt cực</div>
                    </div>
                </div>
            </div>
        </>
    )
}