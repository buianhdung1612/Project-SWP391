import CategoryList from "@/app/components/Category/CategoryList";
import Title from "@/app/components/title/Title";

const data: any = [
    {
        title: "Trang điểm",
        quantity: "15",
        image1: "/demo/danhmuc_1.webp",
        image2: "/demo/danhmuc_1.webp",
        image3: "/demo/danhmuc_1.webp",
        image4: "/demo/danhmuc_1.webp",
        image5: "/demo/danhmuc_1.webp"
    },
    {
        title: "Trang điểm",
        quantity: "15",
        image1: "/demo/danhmuc_1.webp",
        image2: "/demo/danhmuc_1.webp",
        image3: "/demo/danhmuc_1.webp",
        image4: "/demo/danhmuc_1.webp",
        image5: "/demo/danhmuc_1.webp"
    },
    {
        title: "Trang điểm",
        quantity: "15",
        image1: "/demo/danhmuc_1.webp",
        image2: "/demo/danhmuc_1.webp",
        image3: "/demo/danhmuc_1.webp",
        image4: "/demo/danhmuc_1.webp",
        image5: "/demo/danhmuc_1.webp"
    },
    {
        title: "Trang điểm",
        quantity: "15",
        image1: "/demo/danhmuc_1.webp",
        image2: "/demo/danhmuc_1.webp",
        image3: "/demo/danhmuc_1.webp",
        image4: "/demo/danhmuc_1.webp",
        image5: "/demo/danhmuc_1.webp"
    },
    {
        title: "Trang điểm",
        quantity: "15",
        image1: "/demo/danhmuc_1.webp",
        image2: "/demo/danhmuc_1.webp",
        image3: "/demo/danhmuc_1.webp",
        image4: "/demo/danhmuc_1.webp",
        image5: "/demo/danhmuc_1.webp"
    }
]

export default function Section1() {
    return (
        <>
            <div className="container mx-auto mb-[40px]">
                <Title title="danh mục hot" link="/products"/>
                <CategoryList data={data}/>
            </div>
        </>
    )
}