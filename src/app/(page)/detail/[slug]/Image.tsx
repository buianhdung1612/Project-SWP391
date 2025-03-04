import { useContext } from "react";
import { Context } from "./MiddlewareGetData";

export default function Image() {
    const { productDetail } = useContext(Context);
    
    return (
        <>
            <div className="w-[115px] px-3">
                <div className="cursor-pointer border border-solid bg-white border-[#e4e4e4] w-[80px] aspect-square mb-[10px]">
                    <img src={productDetail.thumbnail[1]} className="w-full h-full object-cover"/>
                </div>
                <div className="cursor-pointer border border-solid bg-white border-[#e4e4e4] w-[80px] aspect-square mb-[10px]">
                    <img src={productDetail.thumbnail[2]} className="w-full h-full object-cover"/>
                </div>
                <div className="cursor-pointer border border-solid bg-white border-[#e4e4e4] w-[80px] aspect-square mb-[10px]">
                    <img src={productDetail.thumbnail[3]} className="w-full h-full object-cover"/>
                </div>
                <div className="cursor-pointer border border-solid bg-white border-[#e4e4e4] w-[80px] aspect-square">
                    <img src={productDetail.thumbnail[4]} className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className="w-[420px] h-[420px] mr-[20px] relative">
                <div className="w-[358px] aspect-square absolute top-[10%] left-[15%]">
                    <img src={productDetail.thumbnail[0]} className="w-full h-full object-cover" />
                </div>
                {productDetail.deal && (
                    <div className="w-[40px] aspect-square absolute top-[5px] right-[5px]">
                        <img src={productDetail.deal} className="w-full h-full aspect-square" />  
                    </div>
                )}
                {productDetail.banner && (
                    <div className="w-[280px] h-[80px] absolute top-[75%]">
                        <img src={productDetail.banner} className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </>
    )
}