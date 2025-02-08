export default function MoreInfo() {
    return (
        <>
            <div className="mt-[20px] grid grid-cols-2 gap-x-[20px] gap-y-[10px]">
                <div className="flex">
                    <div className="w-[20px] h-[20px]">
                        <img src="/demo/star2.webp" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[14px] ml-[8px]">Nhận <b>Fresh Point</b> cho mỗi lần mua</div>
                </div>
                <div className="flex">
                    <div className="w-[20px] h-[20px]">
                        <img src="/demo/14days.webp" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[14px] ml-[8px]">Luôn có <b>14</b> ngày đổi trả miễn phí</div>
                </div>
                <div className="flex">
                    <div className="w-[20px] h-[20px]">
                        <img src="/demo/ship.webp" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[14px] ml-[8px]">Giao nhanh miễn phí 2H <b>Trễ tặng 100K</b></div>
                </div>
                <div className="flex">
                    <div className="w-[20px] h-[20px]">
                        <img src="/demo/back.webp" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[14px] ml-[8px]">Fresh đền <b>100%</b> nếu phát hiện hàng giả</div>
                </div>
            </div>
        </>
    )
}