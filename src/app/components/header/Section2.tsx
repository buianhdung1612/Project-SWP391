import MenuUnShow from "./MenuUnShow";
import MenuShow from "./MenuShow";

export default function Section2() {
    return(
        <>
            <div className="container mx-auto flex items-center justify-center py-[10px]">
                <MenuUnShow text="Trang chủ" link="/"/>
                <MenuShow text="Thương hiệu" link=""/>
                <MenuShow text="Dưỡng da" link=""/>
                <MenuUnShow text="Khuyến mãi HOT" image="fire 1.png" link="/product-category/khuyen-mai-hot"/>  
                <MenuUnShow text="Sản phẩm mới" link="/product-category/san-pham-moi"/>
                <MenuUnShow text="Top bán chạy" link="/product-category/top-ban-chay"/>  
                <MenuUnShow text="So sánh sản phẩm" link=""/>  
            </div>
        </>
    )
}