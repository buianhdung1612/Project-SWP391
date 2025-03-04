"use client"

export default function Aside(props: any) {
    const { data } = props;

    const handleCheckboxChange = (event: any, subItem: string, title: string) => {
        const url = new URL(location.href);

        if (event.target.checked) {
            if(title == "Loại sản phẩm"){
                url.searchParams.set("category", subItem);
            }
        } else {
            if(title == "Loại sản phẩm"){
                url.searchParams.delete("category");
            }
        }

        console.log(url);
    };

    return (
        <aside className="w-[196px]">
            {data.map((item: any, index: number) => (
                item.data.length > 0 && (
                    <div className="py-[15px] border-b border-solid" key={index}>
                        <div className="text-[18px] font-[600] mb-[8px]">{item.title}</div>
                        {item.data.map((subItem: string, subIndex: number) => (
                            <div key={subIndex} className="flex items-center ml-[5px] mb-[10px]">
                                <input
                                    type="checkbox"
                                    onChange={(event) => handleCheckboxChange(event, subItem, item.title)}
                                    className="mr-2 cursor-pointer"
                                />
                                <span className="text-[14px] text-[#282828] hover:text-primary">{subItem}</span>
                            </div>
                        ))}
                    </div>
                )
            ))}
        </aside>
    );
}