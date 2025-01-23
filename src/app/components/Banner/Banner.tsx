export default function Banner() {
    return (
        <>
            <div className="container mx-auto flex">
                <div className="w-[858px] h-[340px] mr-[15px] ">
                    <img src="banner-1.webp" className="rounded-[15px] object-cover" />
                </div>
                <div className="flex-1">
                    <div className="mb-[15px] h-[164px]">
                        <img src="banner-2.webp" className="rounded-[15px]" />
                    </div>
                    <div className="h-[164px]">
                        <img src="banner-3.webp" className="rounded-[15px]" />
                    </div>
                </div>
            </div>
        </>
    )
}