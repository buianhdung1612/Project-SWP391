import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function HeaderAdmin() {
    return (
        <>
            <div className="header">
                <div className="header__wrap">
                    <div className="header__title">WELCOME TO ADMIN PAGE</div>
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