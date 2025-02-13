import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function Pagination() {
    return (
        <>
            <div className="text-center mt-[50px] mb-[-25px]">
                <ul className="flex items-center justify-center cursor-pointer">
                    <li className=" mx-[3px] rounded-[5px] text-[14px] font-[400] text-white bg-primary w-[30px] h-[30px] flex items-center justify-center">1</li>
                    <li className="mx-[3px] rounded-[5px] text-[14px] font-[400] text-primary bg-white w-[30px] border border-solid border-primary h-[30px] flex items-center justify-center hover:text-white hover:bg-primary">2</li>
                    <li className="mx-[3px] rounded-[5px] text-[10px] font-[400] text-primary bg-white w-[30px] border border-solid border-primary h-[30px] flex items-center justify-center hover:text-white hover:bg-primary">
                        <TbPlayerTrackNextFilled />
                    </li>
                </ul>
            </div>
        </>
    )
}