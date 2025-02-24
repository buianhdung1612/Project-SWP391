import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import { CiCrop } from "react-icons/ci";
import { FaBlog, FaBorderNone, FaJoomla, FaObjectGroup, FaTable, FaUsers } from "react-icons/fa";
import { FaGaugeHigh, FaGear, FaGroupArrowsRotate, FaHurricane } from "react-icons/fa6";
import { TbBrandCampaignmonitor } from "react-icons/tb";

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
        content: "Tài khoản",
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
        <>
            <div className="sider">
                <Link className="sider__logo" href="/admin/dashboard">
                    <span className="sider__logo--black">FRESH</span>
                    <span className="sider__logo--yellow">SKINCARE</span>
                </Link>
                <div className="sider__menu">
                    <ul>
                        {menu.map((item: Menu, index: number) => (
                            <li key={index}>
                                {item.icon}
                                <Link href={item.link} className="ml-[15px]">{item.content}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}