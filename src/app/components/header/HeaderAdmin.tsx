import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Image from "next/image"; 
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
                <div className="flex items-center justify-center flex-1 mt-[-50px] mr-[-300px]">
                  <Image 
                    src="/adminLogo.png"  
                    alt="Admin Logo"
                    width={150} 
                    height={50}  
                  />
            </div>
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