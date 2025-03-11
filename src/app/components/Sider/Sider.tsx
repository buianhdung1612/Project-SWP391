import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image"; // 🟢 Thêm import Image
import { CiCrop } from "react-icons/ci";
import { FaBlog, FaBorderNone, FaJoomla, FaObjectGroup, FaTable, FaUsers } from "react-icons/fa";
import { FaGaugeHigh, FaGear, FaGroupArrowsRotate, FaHurricane } from "react-icons/fa6";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { MdOutlineQuiz } from "react-icons/md";

interface Menu {
    content: string,
    icon: ReactNode,
    link: Url
}

const menu: Menu[] = [
    {
        content: "Tổng quan",
        icon: <FaGaugeHigh />,
        link: "/admin/dashboard"
    },
    {
        content: "Danh mục sản phẩm",
        icon: <FaTable />,
        link: "/admin/products-category"
    },
    {
        content: "Thương hiệu",
        icon: <TbBrandCampaignmonitor />,
        link: "/admin/brands"
    },
    {
        content: "Thể loại da",
        icon: <CiCrop />,
        link: "/admin/skin"
    },
    {
        content: "Sản phẩm",
        icon: <FaBorderNone />,
        link: "/admin/products"
    },
    {
        content: "Danh mục bài viết",
        icon: <FaJoomla />,
        link: "/admin/blogs-category"
    },
    {
        content: "Bài viết",
        icon: <FaBlog />,
        link: "/admin/blogs"
    },
    {
        content: "Bộ câu hỏi",
        icon: <MdOutlineQuiz />,
        link: "/admin/quiz"
    },
    {
        content: "Đơn hàng",
        icon: <FaHurricane />,
        link: "/admin/orders"
    },
    {
        content: "Nhóm quyền",
        icon: <FaGroupArrowsRotate />,
        link: "/admin/roles"
    },
    {
        content: "Phân quyền",
        icon: <FaObjectGroup />,
        link: "/admin/roles/permissions"
    },
    {
        content: "Tài khoản quản trị",
        icon: <FaUsers />,
        link: "/admin/accounts"
    },
    {
        content: "Cài đặt chung",
        icon: <FaGear />,
        link: "/admin/settings/general"
    }
]

export default function Sider() {
    return (
        <div className="fixed left-0 top-0 w-64 min-h-screen bg-[#D8F3DC] text-black border-r rounded-r-2xl flex flex-col">
            
            {/* Logo */}
            <div className="flex justify-center py-4 border-b">
                <Link href="/admin/dashboard">
                    <Image 
                        src="/demoLogo.png" 
                        alt="Fresh Skin Logo"
                        width={150}
                        height={40}
                        priority
                    />
                </Link>
            </div>

            {/* Menu */}
            <ul className="space-y-1 px-4 mt-4 flex-1">
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link 
                            href={item.link} 
                            className="flex items-center gap-3 px-5 py-3 rounded-lg hover:bg-green-200 transition duration-200"
                        >
                            {item.icon}
                            <span>{item.content}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
} 