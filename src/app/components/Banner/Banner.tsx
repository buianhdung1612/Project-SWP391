import Link from "next/link";

export default function Banner() {
    return (
        <>
            <div className="container mx-auto flex mt-[10px]">
                <div className="w-[858px] h-[340px] mr-[15px] ">
                    <Link href="/products">
                        <img src="https://res.cloudinary.com/dr53sfboy/image/upload/v1742356502/product-brand/dsa_20250319-035502.webp" className="rounded-[15px] object-cover" />
                    </Link>
                </div>
                <div className="flex-1">
                    <div className="mb-[15px] h-[164px]">
                        <Link href="/products">
                            <img src="https://res.cloudinary.com/dr53sfboy/image/upload/v1742356503/product-brand/dsa_20250319-035503_2.webp" className="rounded-[15px]" />
                        </Link>
                    </div>
                    <div className="h-[164px]">
                        <Link href="/products">
                            <img src="https://res.cloudinary.com/dr53sfboy/image/upload/v1742356504/product-brand/dsa_20250319-035503_3.webp" className="rounded-[15px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}