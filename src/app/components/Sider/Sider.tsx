import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useState } from "react";  
import Image from "next/image"; 
import { CiCrop } from "react-icons/ci";
import { FaBlog, FaBorderNone, FaJoomla, FaObjectGroup, FaTable, FaUsers } from "react-icons/fa";
import { FaGaugeHigh, FaGear, FaGroupArrowsRotate, FaHurricane } from "react-icons/fa6";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { MdExpandLess, MdExpandMore, MdCategory } from "react-icons/md";

interface Menu {
    content: string,
    icon: React.ReactNode,
    link?: Url,
    subMenu?: Menu[] 
}

const subCategory: Menu[] = [
    { content: "Sản phẩm", icon: <FaBorderNone />, link: "/admin/products" },
    { content: "Danh mục sản phẩm", icon: <FaTable />, link: "/admin/products-category" },
    { content: "Thương hiệu", icon: <TbBrandCampaignmonitor />, link: "/admin/brands" },
    { content: "Thể loại da", icon: <CiCrop />, link: "/admin/skin" }
];

const subBlog: Menu[] = [
    { content: "Danh mục bài viết", icon: <FaJoomla />, link: "/admin/blogs-category" },
    { content: "Bài viết", icon: <FaBlog />, link: "/admin/blogs" }
];

const subPermission: Menu[] = [
    { content: "Nhóm quyền", icon: <FaGroupArrowsRotate />, link: "/admin/roles" },
    { content: "Phân quyền", icon: <FaObjectGroup />, link: "/admin/roles/permissions" }
];

const menu: Menu[] = [
    { content: "Tổng quan", icon: <FaGaugeHigh />, link: "/admin/dashboard" },
    { content: "Quản lý sản phẩm", icon: <MdCategory />, subMenu: subCategory }, 
    { content: "Quản lý bài viết", icon: <FaBlog />, subMenu: subBlog }, 
    { content: "Quản lý quyền", icon: <FaGroupArrowsRotate />, subMenu: subPermission },
    { content: "Đơn hàng", icon: <FaHurricane />, link: "/admin/orders" },
    { content: "Tài khoản quản trị", icon: <FaUsers />, link: "/admin/accounts" },
    { content: "Cài đặt chung", icon: <FaGear />, link: "/admin/settings/general" }
];

export default function Sider() {
    // Dùng object để lưu trạng thái mở của từng nhóm menu
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    // Hàm toggle mở menu theo từng nhóm
    const toggleMenu = (menuName: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuName]: !prev[menuName],
        }));
    };

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
                        {item.subMenu ? (
                            <>
                                <button 
                                    onClick={() => toggleMenu(item.content)} 
                                    className="flex items-center justify-between w-full px-5 py-3 rounded-lg hover:bg-green-200 transition duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        <span>{item.content}</span>
                                    </div>
                                    {openMenus[item.content] ? <MdExpandLess /> : <MdExpandMore />}
                                </button>
                                
                                {openMenus[item.content] && (
                                    <ul className="pl-8 space-y-1">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link 
                                                    href={subItem.link as Url} 
                                                    className="flex items-center gap-3 px-5 py-2 rounded-lg hover:bg-green-100 transition duration-200"
                                                >
                                                    {subItem.icon}
                                                    <span>{subItem.content}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <Link 
                                href={item.link as Url} 
                                className="flex items-center gap-3 px-5 py-3 rounded-lg hover:bg-green-200 transition duration-200"
                            >
                                {item.icon}
                                <span>{item.content}</span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
