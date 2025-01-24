import MenuUnShow from "./MenuUnShow";
import MenuShow from "./MenuShow";

export default function Section2() {
    return(
        <>
            <div className="container mx-auto flex items-center justify-center py-[10px]">
                <MenuUnShow text="Trang chủ" link="/"/>
                <MenuShow text="Thương hiệu" link=""/>
                <MenuShow text="Dưỡng da" link=""/>
                <MenuUnShow text="Khuyến mãi HOT" image="fire 1.png" link=""/>  
                <MenuUnShow text="Sản phẩm mới" link=""/>
                <MenuUnShow text="Top bán chạy" link=""/>  
                <MenuUnShow text="So sánh sản phẩm" link=""/>  
            </div>
        </>
    )
}