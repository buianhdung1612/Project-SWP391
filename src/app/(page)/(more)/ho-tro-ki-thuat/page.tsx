"use client";

import { useContext } from "react";
import { SettingContext } from "../../layout";

export default function Support4() {
    const setting = useContext(SettingContext);

    return (
        <>
            <div className="container mx-auto mt-[10px]">
                <div className="uppercase mb-[15px] text-[16px] text-[#00090f] hover:text-secondary cursor-pointer font-[650]">Hỗ trợ kĩ thuật</div>
                <div className="text-[14px]" dangerouslySetInnerHTML={{ __html: setting?.support4 || '' }} />
            </div>
        </>
    );
}