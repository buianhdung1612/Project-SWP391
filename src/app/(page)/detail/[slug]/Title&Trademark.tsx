import { useContext } from "react";
import { Context } from "./MiddlewareGetData";

export default function TitleTrademark() {
    const { productDetail } = useContext(Context);
    console.log(productDetail.stock);

    return (
        <>
            <div className="text-[22px] mb-[15px] font-[600] ">
                {productDetail.title}
            </div>
            <div className="flex items-center pb-[5px] mb-[10px] border-b border-solid border-[#e4e4e4]">
                <div className="text-[14px] text-[#00090f]">Thương hiệu: <span className="text-primary">{productDetail.brand.title}</span></div>
                <div className="text-[14px] text-[#00090f] mx-[10px]">|</div>
                {productDetail.stock > 0 ? (
                    <div className="text-[14px] text-[#00090f]">Tình trạng: <span className="text-primary">Còn hàng</span></div>

                ) : (
                    <div className="text-[14px] text-[#00090f]">Tình trạng: <span className="text-[#C5332D]">Hết hàng</span></div>
                )}
            </div>
        </>
    )
}