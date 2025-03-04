export default function Aside(props: any) {
    const { data } = props;

    return (
        <aside className="w-[196px]">
            {data.map((item: any, index: number) => (
                item.data.length > 0 && (
                    <div className="py-[15px] border-b border-solid" key={index}>
                        <div className="text-[18px] font-[600] mb-[8px]">{item.title}</div>
                        {item.data.map((subItem: string, subIndex: number) => (
                            <div
                                key={subIndex}
                                className="w-[100%] text-[14px] text-[#282828] cursor-pointer checkbox ml-[24px] relative mb-[10px] hover:text-primary"
                            >
                                {subItem}
                            </div>
                        ))}
                    </div>
                )
            ))}
        </aside>
    );
}