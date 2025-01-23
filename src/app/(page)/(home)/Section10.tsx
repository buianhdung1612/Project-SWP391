export default function Section10() {
    const data: string[] = [
        "demo/video1.webp",
        "demo/video2.webp",
        "demo/video3.webp",
        "demo/video4.webp",
        "demo/video5.webp",
        "demo/video6.webp",
        "demo/video7.webp",
        "demo/video8.webp"
    ]
    return (
        <>
            <div className="container mx-auto grid grid-cols-4 gap-[20px] mt-[60px] mb-[10px]">
                {data.map((item: string, index: number) => (
                    <div className="w-[300px] aspect-square" key={index}>
                        <img src={item} className="w-full h-full object-cover rounded-[10px]" />
                    </div>
                ))}
            </div>
        </>
    )
}