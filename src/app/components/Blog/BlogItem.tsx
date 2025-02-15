import Link from "next/link"

export default function BlogItem(props: {
    image: string,
    day: string,
    title: string,
    description: string,
    link: string
}) {
    const { image = "", day = "", title = "", description = "", link = "" } = props;
    return (
        <>
            <div className="">
                <Link href={link} className="relative">
                    <div className="w-[303px] h-[190px] overflow-hidden rounded-t-[10px]">
                        <img src={image} className="w-full h-full object-cover image-blog-home" />
                    </div>
                    <p className="text-white absolute bottom-[0] rounded-tr-[40px] text-[14px] font-[500] bg-[#94C83D] w-[120px] h-[32px] flex items-center justify-center">{day}</p>
                </Link>
                <div className="bg-[#F7F7F7] p-[10px] rounded-b-[10px]">
                    <Link href={link} className="text-[16px] hover:text-primary font-[600] mb-[10px]">{title}</Link>
                    <div className="text-[14px] line-clamp-2 text-[#2f2f2f]">{description}</div>
                </div>
            </div>
        </>
    )
}