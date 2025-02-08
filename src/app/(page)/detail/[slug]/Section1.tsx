"use client"

import { createContext } from "react";
import Image from "./Image";
import Information from "./Information";

interface PriceByVolume {
    volume: number;
    priceNew: number;
    price: number;
    discount: number;
}

interface Section1Context {
    thumbnail: string;
    deal: string;
    banner: string;
    title: string;
    trademark: string;
    priceByVolume: PriceByVolume[];
    uses: string;
}

export const Section1Context = createContext<Section1Context>({
    thumbnail: "",
    deal: "",
    banner: "",
    title: "",
    trademark: "",
    priceByVolume: [],
    uses: ""
});

export default function Section1() {
    const data: any = {
        thumbnail: "/demo/sua-rua-mat.webp",
        deal: "/demo/deal.webp",
        banner: "/demo/banner-sale.webp",
        title: "Gel Rửa Mặt & Tắm La Roche-Posay Làm Sạch & Giảm Mụn 400ml",
        trademark: "Roche-Posay",
        priceByVolume: [
            {
                volume: 30,
                priceNew: 312000,
                price: 395000,
                discount: 22
            },
            {
                volume: 95,
                priceNew: 400000,
                price: 500000,
                discount: 20
            },
            {
                volume: 400,
                priceNew: 585000,
                price: 750000,
                discount: 22
            }
        ],
        uses: "Dành cho da nhạy cảm"
    }

    return (
        <>
            <div className="container mx-auto flex mt-[40px]">
                <Section1Context.Provider
                    value={{
                        thumbnail: data.thumbnail,
                        deal: data.deal,
                        banner: data.banner,
                        title: data.title,
                        trademark: data.trademark,
                        priceByVolume: data.priceByVolume,
                        uses: data.uses
                    }}
                >
                    <Image />
                    <Information />
                </Section1Context.Provider>
            </div>
        </>
    )
}