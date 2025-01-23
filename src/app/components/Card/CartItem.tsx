import Link from "next/link";
import { CiHeart } from "react-icons/ci";

export default function CardItem(props: {
    image: string,
    category: string,
    title: string,
    priceOld: number,
    priceNew: number,
    discount: number,
    deal?: string,
    banner?: string,
    className?: string,
    link: string
}) {
    const { image = "", category = "", title = "", priceOld = "", priceNew = "", discount = "", banner = "", deal = "", className = "", link = "" } = props;
    return (
        <>
            <div className="bg-white rounded-[10px]">
                <Link href={link}>
                    <div className="w-[226px] aspect-square relative">
                        <img src={image} className="w-full h-full object-cover" />
                        <CiHeart className="text-[28px] absolute top-[2%] right-[2%] hover:text-primary cursor-pointer" />
                        {banner && (
                            <img src={banner} className="absolute bottom-0" />
                        )}
                        {deal && (
                            <img src={deal} className="absolute top-[2%] left-[2%]" />
                        )}
                    </div>
                </Link>
                <div className={`text-center mt-[5px] w-[226px] ` + className}>
                    {category && (
                        <div className="uppercase text-[14px] font-[600 text-[#4e7661] mb-[5px] hover:text-primary">{category}</div>
                    )}
                    <Link href={link}>
                        <div className="text-[14px] font-[400] mx-[5px] line-clamp-2 mb-[5px] hover:text-secondary">{title}</div>
                    </Link>
                    <div className="flex items-center mb-[10px] justify-center">
                        <span className="text-[#c90000] text-[15px] font-[500] mr-[5px]">{priceNew.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        <span className="text-[#98a4a9] text-[12px] font-[300] line-through mr-[5px]">{priceOld.toLocaleString("en-US")}<sup className="underline">đ</sup></span>
                        <span className="text-white bg-primary py-[3px] rounded-[3px] text-[12px] min-w-11">-{discount}%</span>
                    </div>
                </div>
            </div>
        </>
    )
}