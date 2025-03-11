import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function HeaderAdmin() {

    const handleClickLogout = async () => {
        const response = await fetch('https://freshskinweb.onrender.com/auth/logout', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const dataResponse = await response.json();
        if (dataResponse.code === 200) {

            location.href = `/admin/auth/login`;
        }
    }

    return (
        <>
            <div className="header">
                <div className="header__wrap">
                    <div className="header__title text-[#506A65] text-[20px] ml-[20px]"> Admin Page</div>
                    <div className="header__icons">
                        <Link href="/admin/accounts/my-profile" className="header__profile">
                            <img src="/" alt="User Avatar" />
                        </Link>
                        <span onClick={handleClickLogout} className="cursor-pointer">
                            <FaArrowRightFromBracket className="text-[#6D7587] text-[20px] ml-[20px]" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}