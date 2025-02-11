import FormInputCheckout from "@/app/components/Form/FormInputCheckout";

export default function SaleCode() {
    return (
        <>
            <div className="ml-[28px] pt-[24px] pb-[12px] border-t border-b border-solid border-[#d9d9d9] flex items-center justify-between">
                <div className="flex-1">
                    <FormInputCheckout label="Nhập mã giảm giá" name="code-sale" id="codesale" />
                </div>
                <button className="rounded-[4px] ml-[12px] mb-[10px] bg-[#72a834] border border-solid border-[#72a834] text-white text-[14px] font-[450] h-[44px] px-[20px]">
                    Áp dụng
                </button>
            </div>
        </>
    )
}