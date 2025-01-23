import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function MenuShow(props: { text: string }) {
    const { text } = props;

    return (
        <>
            <Link href="">
                <div className="px-[20px] py-[7px] text-[15px] border border-1 rounded-[8px] border-[#efefef] mr-[15px] flex items-center hover:text-[#4e7661]">
                    {text}
                    <MdOutlineArrowDropDown className="mx-[5px] text-[24px]" />
                </div>
            </Link>

        </>
    )
}