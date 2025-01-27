export default function FormFaceGoogle(props: { info: string }) {
    const { info = "" } = props;

    return (
        <>
            <div className="text-center text-[14px] text-[#00090f] mb-[15px]">{info}</div>
            <div className="flex items-center justify-center mr-[5px] mb-[30px]">
                <div className="w-[129px] h-[36px]">
                    <img src="/demo/fb-btn.svg" className="w-full h-full object-cover cursor-pointer" />
                </div>
                <div className="w-[129px] h-[36px]">
                    <img src="/demo/gp-btn.svg" className="w-full h-full object-cover cursor-pointer ml-[5px]" />
                </div>
            </div>
        </>
    )
}