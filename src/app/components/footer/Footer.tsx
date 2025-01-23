import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import TitleFooter from "../title/TitleFooter";
import ContentFooter from "./ContentFooter";

export default function Footer() {
    interface buttonIcon {
        icon: ReactNode,
        link: Url
    }

    const menuButton: buttonIcon[] = [
        {
            icon: <FaFacebookF />,
            link: "#"
        },
        {
            icon: <FaTwitter />,
            link: "#"
        },
        {
            icon: <FaYoutube />,
            link: "#"
        },
        {
            icon: <FaInstagram />,
            link: "#"
        }
    ]

    const contentPolicy: any = [
        "Chính sách và quy định chung",
        "Chính sách thanh toán",
        "Chính sách giao nhận",
        "Chính sách đổi trả sản phẩm",
        "Chính sách bảo mật thông tin cá nhân",
        "Điều khoản sử dụng"
    ] 

    const contentSupport: any = [
        "Quyền lợi Fresh-er",
        "Thông tin thành viên",
        "Tích điểm đổi quà",
        "Hỗ trợ kỹ thuật",
        "Câu hỏi thường gặp",
        "Liên hệ"
    ] 

    return (
        <>
            <div className="bg-[#B2D18F] container mx-auto flex items-center px-[20px] rounded-[10px] mt-[60px] justify-between">
                <div className="">
                    <div className="text-[22px] font-[600] uppercase text-white">
                        Đăng ký nhận tin từ Dino Beaute
                    </div>
                    <div className="text-[14px] font-[400] text-white">
                        Nhận thông tin sản phẩm mới nhất và các chương trình khuyến mãi.
                    </div>
                </div>
                <div className="w-[166px] h-[114px]">
                    <img src="/demo/footer.webp" className="w-full h-full object-cover" />
                </div>
                <form action="" className="relative">
                    <input type="email" placeholder="Nhập địa chỉ email" content="email" className="w-[450px] py-[15px] pl-[20px] pr-[125px] rounded-[50px] text-[14px]" />
                    <button type="submit" className="text-[14px] text-white bg-primary rounded-tr-[48px] rounded-br-[48px] py-[15px] px-[30px] absolute right-[0px] hover:bg-[#4E7661]">Đăng ký</button>
                </form>
            </div>
            <div className="container mx-auto mt-[30px] px-[10px] flex pb-[50px]">
                <div className="w-[304px] mr-[30px]">
                    <div className="w-[150px] h-[60px]">
                        <img src="logo.svg" alt="logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[14px] my-[10px]">Không phải những người đẹp là những người hạnh phúc, mà những người hạnh phúc mới là những người đẹp.</div>
                    <div className="flex items-center">
                        {menuButton.map((item: buttonIcon, index: number) => (
                            <Link href={item.link} key={index}>
                                <div className="w-[35px] h-[35px] mr-[10px] bg-[#4E7661] text-white flex items-center justify-center rounded-[5px] hover:bg-[#719181]">
                                    {item.icon}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-[420px]">
                    <TitleFooter title="Thông tin liên hệ"/>
                    <div className="text-[14px] mb-[5px]"><b>Địa chỉ: </b>70 Lữ Gia, Phường 15, Quận 11, TP. Hồ Chí Minh</div>
                    <div className="text-[14px] mb-[5px]">
                        <b>Điện thoại: </b>
                        <span className="text-primary font-[600] hover:text-secondary cursor-pointer">1900 6750</span>
                    </div>
                    <div className="text-[14px] mb-[5px]">
                        <b>Email: </b>
                        <span className="text-primary font-[600] hover:text-secondary cursor-pointer">support@sapo.vn</span>
                    </div>
                </div>
                <div className="w-[304px]">
                    <TitleFooter title="Chính sách"/>
                    {contentPolicy.map((item: string, index: number) => (
                        <ContentFooter title={item} key={index}/>
                    ))}
                </div>
                <div className="flex-1">
                    <TitleFooter title="Hỗ trợ"/>
                    {contentSupport.map((item: string, index: number) => (
                        <ContentFooter title={item} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}