export default function FormInput(props: any) {
    const { type = "text", name = "", placeholder = "" } = props;
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="mb-[15px] w-[412px] h-[45px] placeholder-[#333] px-[20px] rounded-[4px] border border-solid border-[#e1e1e1]"
            />
        </>
    )
}