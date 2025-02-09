import Link from "next/link";

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
                            <i className="fa-solid fa-right-from-bracket header__out"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}