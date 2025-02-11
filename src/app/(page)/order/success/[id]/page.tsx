import Link from "next/link";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function SuccessPage() {

    return (
        <div className="container mx-auto pt-[30px]">
            <div className="flex items-center justify-center">
                <Link href="/" className="w-[206px] h-[82px] mb-[21px]">
                    <img src="/logo.svg" className="w-full h-full object-cover" />
                </Link>
            </div>
            <div className="flex items-start">
                <Section1 />
                <Section2/>
            </div>

        </div>
    )
}