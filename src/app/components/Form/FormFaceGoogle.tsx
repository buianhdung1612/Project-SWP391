import Link from "next/link";

export default function FormFaceGoogle(props: { info: string }) {
    const { info = "" } = props;

    // const handleClickFacebook = () => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://freshskinweb.onrender.com/home`);
    //         const data = await response.json();
    //     };
    // }

    return (
        <>
            <div className="text-center text-[14px] text-[#00090f] mb-[15px]">{info}</div>
            <div className="flex items-center justify-center mr-[5px] mb-[30px]">
                <Link href="https://freshskinweb.onrender.com/oauth2/authorization/facebook" className="w-[129px] h-[36px]">
                    <img src="/demo/fb-btn.svg" className="w-full h-full object-cover cursor-pointer" />
                </Link>
                <Link href="https://freshskinweb.onrender.com/oauth2/authorization/google" className="w-[129px] h-[36px]">
                    <img src="/demo/gp-btn.svg" className="w-full h-full object-cover cursor-pointer ml-[5px]" />
                </Link>
            </div>
        </>
    )
}