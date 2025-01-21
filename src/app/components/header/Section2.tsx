import { MdOutlineArrowDropDown } from "react-icons/md";
import MenuUnShow from "./MenuUnShow";
import MenuShow from "./MenuShow";

export default function Section2() {
    return(
        <>
            <div className="container mx-auto flex items-center justify-center py-[10px]">
                <MenuUnShow text="Trang chủ"/>
                <MenuShow text="Thương hiệu"/>
                <MenuShow text="Dưỡng da"/>
                <MenuUnShow text="Khuyến mãi HOT" image="fire 1.png"/>  
                <MenuUnShow text="Sản phẩm mới"/>
                <MenuUnShow text="Top bán chạy"/>  
                <MenuUnShow text="So sánh sản phẩm"/>  
            </div>
        </>
    )
}