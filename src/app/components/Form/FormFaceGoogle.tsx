// import Link from "next/link";

export default function FormFaceGoogle(props: { info: string }) {
    const { info = "" } = props;

    const handleOAuth = async (provider: string) => {
        const response = await fetch(`https://freshskinweb.onrender.com/oauth2/authorization/${provider}`);
        const data = await response.json();

        if (data.code === 200) {
            
            // Chuyển hướng về trang chủ
            location.href = "/";
        } else {
            console.error("Error logging in:", data.message);
        }
    }

    return (
        <>
            <div className="text-center text-[14px] text-[#00090f] mb-[15px]">{info}</div>
            <div className="flex items-center justify-center mr-[5px] mb-[30px]">
                <button onClick={() => handleOAuth("facebook")} className="w-[129px] h-[36px]">
                    <img src="/demo/fb-btn.svg" className="w-full h-full object-cover cursor-pointer" />
                </button>
                <button onClick={() => handleOAuth("google")} className="w-[129px] h-[36px] ml-[5px]">
                    <img src="/demo/gp-btn.svg" className="w-full h-full object-cover cursor-pointer" />
                </button>
            </div>
        </>
    )
}