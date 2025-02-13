import Banner2 from "@/app/components/Banner/Banner2";
import Pagination from "@/app/components/Pagination/Pagination";
import Link from "next/link";

interface BlogItem {
    title: string,
    description: string,
    image: string,
    date: string
}

export default function BlogPage() {
    const data: BlogItem[] = [
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        },
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        },
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        },
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        },
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        },
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        },
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        },
        {
            title: "Rửa mặt bằng nước muối sinh lý như thế nào để không hại da?",
            description: "Bạn có thể dễ dàng rửa mặt bằng nước muối sinh lý hằng ngày. Dung dịch đặc biệt này sẽ giúp cải thiện tình trạng mụn trên da trong thời gian nhất định. Rửa mặt bằng nước muối sinh lý là phương pháp vệ sinh da mặt đơn giản và tiết kiệm. Nó không chỉ an toàn, ít gây kích ứng mà còn phù hợp với mọi loại da, kể cả da ",
            image: "/demo/blog-image.webp",
            date: "16/11/2023"
        }
    ]
    return (
        <>
            <Banner2 />
            <div className="container mx-auto mb-[35px]">
                <div className="uppercase text-center p-[20px] text-[18px] font-[550] text-textColor">Tin tức</div>
                <div className="w-full flex">
                    <div className="w-[50%] px-[10px] relative">
                        <img src={data[0].image} className="w-full h-full object-cover rounded-[10px]" />
                        <Link href="#" className="absolute bottom-0 p-[5px] pb-[30px] w-[96.8%] blog-image-first rounded-bl-[10px] rounded-br-[10px] text-[18px] text-white hover:text-secondary">
                            {data[0].title}
                        </Link>
                    </div>
                    <div className="w-[50%] px-[10px]">
                        {data.slice(1, 4).map((item: any, index: number) => (
                            <div className="flex" key={index}>
                                <div className="w-[186px] h-[121px] mr-[10px] mb-[12px]">
                                    <img src={item.image} className="w-full h-full object-cover rounded-[10px]" />
                                </div>
                                <div className="flex-1">
                                    <Link href="#" className="text-textColor text-[14px] hover:text-secondary">{item.title}</Link>
                                    <div className="text-textColor text-[13px] italic py-1">{item.date}</div>
                                    <div className="text-textColor text-[13px] line-clamp-2">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex">
                <div className="w-[75%] px-[10px]">
                    <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
                        {data.slice(4, 8).map((item: BlogItem, index: number) => (
                            <div className="w-full" key={index}>
                                <div className="w-full h-[290px] ">
                                    <img src="/demo/blog-image.webp" className="w-full h-full object-cover rounded-[10px]" />
                                </div>
                                <div className="mt-[10px]">
                                    <Link href="#" className="text-[18px] text-[#222] font-[600] hover:text-primary">{item.title}</Link>
                                    <div className="text-[14px] text-[#2f2f2f] font-[450] line-clamp-2 my-[7px]">{item.description}</div>
                                    <Link href="#" className="underline text-[16px] text-[#000000] font-[400] hover:text-primary">Đọc tiếp</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 px-[10px]">
                    <div className="text-[18px] text-primary font-[600] pb-[8px] border-b border-solid border-secondary">Tin tức</div>
                    <div className="mt-[8px]">
                        {data.slice(0, 4).map((item: BlogItem, index: number) => (
                            <Link href="#" key={index} className=" block text-textColor hover:text-secondary text-[14px] mb-[10px] font-[500]">{item.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    )
}