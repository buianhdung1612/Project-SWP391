import Link from "next/link";
import { FaSquare } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export default function ContentFooter(props: { title: string }) {
    const { title = "" } = props;

    return (
        <>
            <div className="px-[5px] hover:text-primary">
                <Link href="">
                    <FaSquare className="text-[5px] inline-flex mr-[10px]" />
                    <span className="text-[14px] font-[400]">{title}</span>
                </Link>
            </div>
        </>
    )
}