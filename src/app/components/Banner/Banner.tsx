import Link from "next/link";

export default function Banner() {
    return (
        <>
            <div className="container mx-auto flex mt-[10px]">
                <div className="w-[858px] h-[340px] mr-[15px] ">
                    <Link href="/products">
                        <img src="banner-1.webp" className="rounded-[15px] object-cover" />
                    </Link>
                </div>
                <div className="flex-1">
                    <div className="mb-[15px] h-[164px]">
                        <Link href="products">
                            <img src="banner-2.webp" className="rounded-[15px]" />
                        </Link>
                    </div>
                    <div className="h-[164px]">
                        <Link href="/products">
                            <img src="banner-3.webp" className="rounded-[15px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}