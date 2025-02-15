export default function CategoryItem(props: any) {
    const { title = "", quantity = "", image1 = "", image2 = "", image3 = "", image4 = "", image5 = "" } = props;
    return (
        <>
            <div className="flex">
                <div className="border border-dashed border-primary rounded-tl-[15px] rounded-bl-[15px]">
                    <div className="bg-[#F0F6EA] w-[231px] aspect-square p-[2px] rounded-tl-[15px]">
                        <img src={image1} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[231px] bg-[#F0F6EA] text-center py-[4px] rounded-bl-[15px]">
                        <div className="text-[14px] font-[600] hover:text-primary cursor-pointer">{title}</div>
                        <div className="text-[12px] text-[#777]">({quantity} sản phẩm)</div>
                    </div>
                </div>
                <div className="border-t border-dashed border-primary rounded-tr-[15px]">
                    <div className="w-[70px] aspect-square border-b border-r border-dashed border-primary rounded-tr-[15px] cursor-pointer">
                        <img src={image2} className="w-full h-full object-cover image-section2-home" />
                    </div>
                    <div className="w-[70px] aspect-square border-b border-r border-dashed border-primary cursor-pointer">
                        <img src={image3} className="w-full h-full object-cover image-section2-home" />
                    </div>
                    <div className="w-[70px] aspect-square border-b border-r border-dashed border-primary cursor-pointer">
                        <img src={image4} className="w-full h-full object-cover image-section2-home" />
                    </div>
                    <div className="w-[70px] aspect-square border-b border-r border-dashed border-primary rounded-br-[15px] cursor-pointer">
                        <img src={image5} className="w-full h-full object-cover image-section2-home" />
                    </div>
                </div>
            </div>
        </>
    )
}