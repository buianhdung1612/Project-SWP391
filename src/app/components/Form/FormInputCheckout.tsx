"use client"

import { useState } from "react";

export default function FormInputCheckout(props: {
    label?: string,
    type?: string,
    name?: string,
    id?: string,
    required?: boolean
}) {
    const { label = "", type = "text", name = "", id = "", required = false } = props;

    const [ inputIsFocused, setInputIsFocused ] = useState(false);
    const [ currentValueInput, setCurrentValueInput ] = useState("");

    const handleFocusInput = () => {
        setInputIsFocused(true);
    }

    const handleInput = (event: any) => {
        setCurrentValueInput(event.target.value);
    }

    const handleBlurInput = () => {
        if(currentValueInput.length <= 0){
            setInputIsFocused(false);
        }
    }

    return (
        <>
            <div className="relative">
                {inputIsFocused === false && (
                    <label htmlFor={id} className="text-[15px] font-[300] text-[#999] absolute top-[12px] left-[11px]">{label}</label>
                )}
                {inputIsFocused === true && (
                    <label htmlFor={id} className="text-[13px] font-[300] text-[#999] absolute top-[5px] left-[11px]">{label}</label>
                )}
                <input
                    type={type}
                    name={name}
                    id={id}
                    className="pt-[16px] pb-[2px] px-[11px] w-full h-[44px] bg-white text-[#333] rounded-[4px] border border-solid border-[#d9d9d9] focus:border-[#72a834] outline-none input-checkout mb-[10px] text-[14px] font-[450]"
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                    onInput={handleInput}
                    required={required}
                />
            </div>
        </>
    )
}