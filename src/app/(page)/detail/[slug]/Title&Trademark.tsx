import { useContext } from "react";
import { Section1Context } from "./Section1";

export default function TitleTrademark() {
    const { title, trademark } = useContext(Section1Context);
    return (
        <>
            <div className="text-[22px] mb-[15px] font-[600] ">
                {title}
            </div>
            <div className="flex items-center pb-[5px] mb-[10px] border-b border-solid border-[#e4e4e4]">
                <div className="text-[14px] text-[#00090f]">Thương hiệu: <span className="text-primary">{trademark}</span></div>
                <div className="text-[11px] font-[700] text-[#00090f] mx-[12px]">|</div>
                <div className="text-[14px] text-[#00090f]">Tình trạng: <span className="text-primary">Còn hàng</span></div>
            </div>
        </>
    )
}