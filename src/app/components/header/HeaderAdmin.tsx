import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function HeaderAdmin() {
    return (
        <>
            <div className="header">
                <div className="header__wrap">
                    <div className="header__title text-[#506A65] text-[20px] ml-[20px]"> Admin Page</div>
                    <div className="header__icons">
                        <Link href="/admin/accounts/my-profile" className="header__profile">
                            <img src="/" alt="User Avatar" />
                        </Link>
                        <Link href="/admin/auth/logout">
                            <FaArrowRightFromBracket className="text-[#6D7587] text-[20px] ml-[20px]"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}