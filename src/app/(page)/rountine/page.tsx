"use client"

import { useContext, useEffect, useState } from "react"
import { SettingProfileContext } from "../layout";

export default function RountinePage() {
    const [data, setData] = useState<any>(null);
    const settingProfile = useContext(SettingProfileContext);

    if (!settingProfile) {
        return null;
    }

    const { profile } = settingProfile;

    console.log(profile.skinType);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/products/skin-type`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    skinType: profile.skinType
                })
            });

            const dataResponse = await response.json();
            console.log(dataResponse);
        };

        fetchData();
    });

    return (
        <>
            dsa
        </>
    )
}