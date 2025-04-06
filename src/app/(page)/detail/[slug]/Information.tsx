"use client"

import Price from "./Price";
import MoreInfo from "./MoreInfo";

export default function Information() {
    return (
        <>
            <div className="flex-1">
                <Price/>
                <MoreInfo/>
            </div>
        </>
    )
}