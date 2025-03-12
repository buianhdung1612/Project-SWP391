import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useContext, useState } from "react";
import { CiCrop } from "react-icons/ci";
import { FaBlog, FaBorderNone, FaJoomla, FaObjectGroup, FaTable, FaUsers } from "react-icons/fa";
import { FaGaugeHigh, FaGear, FaGroupArrowsRotate, FaHurricane } from "react-icons/fa6";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { MdExpandLess, MdExpandMore, MdCategory } from "react-icons/md";
import { BiCarousel } from "react-icons/bi";
import { DiHaskell } from "react-icons/di";
import { ProfileAdminContext } from "@/app/admin/layout";

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
    { content: "Quản lý bài viết", icon: <BiCarousel />, subMenu: subBlog },
    { content: "Quản lý quyền", icon: <DiHaskell />, subMenu: subPermission },
    { content: "Đơn hàng", icon: <FaHurricane />, link: "/admin/orders" },
    { content: "Tài khoản quản trị", icon: <FaUsers />, link: "/admin/accounts" },
    { content: "Cài đặt chung", icon: <FaGear />, link: "/admin/settings/general" }
];

export default function Sider() {
    const dataProfile = useContext(ProfileAdminContext);
    const permissions = dataProfile?.permissions ?? [];
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const toggleMenu = (menuName: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuName]: !prev[menuName],
        }));
    };

    return (
        <div className="fixed left-0 top-0 w-64 min-h-screen bg-[#374785] text-white border-r rounded-r-2xl flex flex-col">
            {/* Admin Page Title */}
            <div className="flex justify-center py-4 border-b text-xl font-bold">
                Admin Page
            </div>

            {/* Menu */}
            <ul className="space-y-1 px-4 mt-4 flex-1">
                {menu.map((item, index) => {
                    if (
                        item.content === "Tổng quan" && !permissions.includes("dashboard_view") ||
                        item.content === "Đơn hàng" && !permissions.includes("orders_view") ||
                        item.content === "Tài khoản quản trị" && !permissions.includes("roles_view") ||
                        item.content === "Cài đặt chung" && !permissions.includes("settings_view") ||
                        item.content === "Quản lý sản phẩm" && !permissions.includes("products_view") && !permissions.includes("products-category_view") &&  !permissions.includes("brands_view") && !permissions.includes("skin_view") ||
                        item.content === "Quản lý bài viết" && !permissions.includes("blogs_view") && !permissions.includes("blogs-category_view") || 
                        item.content === "Quản lý quyền" && !permissions.includes("roles_view") && !permissions.includes("roles_permissions")
                    ) {
                        return null;
                    }

                    return (
                        <li key={index}>
                            {item.subMenu ? (
                                <>
                                    <button
                                        onClick={() => toggleMenu(item.content)}
                                        className="flex items-center justify-between w-full px-5 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            {item.icon}
                                            <span>{item.content}</span>
                                        </div>
                                        {openMenus[item.content] ? <MdExpandLess /> : <MdExpandMore />}
                                    </button>

                                    {openMenus[item.content] && (
                                        <ul className="pl-8 space-y-1">
                                            {item.subMenu.map((subItem, subIndex) => {
                                                if (
                                                    (subItem.content === "Sản phẩm" && !permissions.includes("products_view")) ||
                                                    (subItem.content === "Danh mục sản phẩm" && !permissions.includes("products-category_view")) ||
                                                    (subItem.content === "Thương hiệu" && !permissions.includes("brands_view")) ||
                                                    (subItem.content === "Thể loại da" && !permissions.includes("skin_view")) ||
                                                    (subItem.content === "Danh mục bài viết" && !permissions.includes("blogs-category_view")) ||
                                                    (subItem.content === "Bài viết" && !permissions.includes("blogs_view")) ||
                                                    (subItem.content === "Nhóm quyền" && !permissions.includes("roles_view")) ||
                                                    (subItem.content === "Phân quyền" && !permissions.includes("roles_permissions"))
                                                ) {
                                                    return null;
                                                }
                                                return (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={subItem.link as Url}
                                                            className="flex items-center gap-3 px-5 py-2 rounded-lg hover:bg-blue-500 transition duration-200"
                                                        >
                                                            {subItem.icon}
                                                            <span>{subItem.content}</span>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.link as Url}
                                    className="flex items-center gap-3 px-5 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                                >
                                    {item.icon}
                                    <span>{item.content}</span>
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
