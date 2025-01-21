import Link from "next/link";

export default function MenuUnShow(props: { text: string, image?: string }) {
    const { text = "", image = "" } = props;

    return (
        <>
            <Link href="">
                <div className="px-[20px] py-[7px] text-[16px] border border-1 rounded-[8px] border-[#efefef] mr-[15px] flex">
                    {text}
                    {image && (
                        <img src={image} className="ml-[5px]" />
                    )}
                </div>
            </Link>

        </>
    )
}