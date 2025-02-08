import { useContext } from "react";
import { Section1Context } from "./Section1";

export default function Image() {
    const { thumbnail, deal, banner } = useContext(Section1Context);
    return (
        <>
            <div className="w-[500px] h-[500px] ml-[120px] mr-[20px] relative">
                <div className="w-[358px] aspect-square absolute top-[10%] left-[15%]">
                    <img src={thumbnail} className="w-full h-full object-cover" />
                </div>
                {deal && (
                    <div className="w-[40px] aspect-square absolute top-[5px] right-[5px]">
                        <img src={deal} className="w-full h-full aspect-square" />
                    </div>
                )}
                {banner && (
                    <div className="w-[280px] h-[80px] absolute top-[70%]">
                        <img src={banner} className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </>
    )
}