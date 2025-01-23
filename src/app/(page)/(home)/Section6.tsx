export default function Section6() {
    const data: string[] = [
        "/demo/banner-three-1.webp",
        "/demo/banner-three-2.webp",
        "/demo/banner-three-3.webp"
    ]
    return (
        <>
            <div className="container mx-auto flex justify-between mt-[50px]">
                {data.map((item: string, index: number) => (
                    <div className="w-[412px] h-[196px]" key={index}>
                        <img src={item} className="w-full h-full object-cover"/>
                </div>
                ))}

            </div>
        </>
    )
}