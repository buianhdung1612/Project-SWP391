import Link from "next/link"

export default function Banner2() {
    const data: string[] = [
        "/demo/banner-three-1.webp",
        "/demo/banner-three-2.webp",
        "/demo/banner-three-3.webp"
    ]
    return (
        <>
            <div className="container mx-auto flex justify-between mt-[20px]">
                {data.map((item: string, index: number) => (
                    <div className="w-[412px] h-[196px]" key={index}>
                        <Link href="/products">
                            <img src={item} className="w-full h-full object-cover" />
                        </Link>
                    </div>
                ))}

            </div>
        </>
    )
}