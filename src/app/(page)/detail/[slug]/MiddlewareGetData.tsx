"use client"

import React, { createContext } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import SaleCode from "@/app/components/SaleCode/SaleCode";

interface Variants {
    volume: number;
    price: number;
    unit: string;
}
interface Brand {
    title: string;
}
interface ProductRelated {
    title: string;
    slug: string;
    description: string;
    thumbnail: string[];
    variants: Variants[];
    discountPercent: number;
}

interface ProductDetail {
    thumbnail: string[];
    deal: string;
    banner: string;
    title: string;
    brand: Brand;
    variants: Variants[];
    discountPercent: number;
    description: string;
}

interface Context {
    productsRelated: ProductRelated[],
    productDetail: ProductDetail
}

export const Context = createContext<Context>({
    productsRelated: [
        {
            title: "",
            slug: "",
            description: "",
            thumbnail: [],
            variants: [{ volume: 0, price: 0, unit: "" }],
            discountPercent: 0
        }
    ],
    productDetail: {
        thumbnail: [],
        deal: "",
        banner: "",
        title: "",
        brand: { title: "" },
        variants: [{ volume: 0, price: 0, unit: "" }],
        discountPercent: 0,
        description: ""
    }
});

interface MiddlewareGetDataProps {
    data: Context;
}

export default function MiddlewareGetData({ data }: MiddlewareGetDataProps) {
    const dataSale = [
        { percent: "10", code: "DINOS10", minimum: "500" },
        { percent: "10", code: "DINOS10", minimum: "500" },
        { percent: "10", code: "DINOS10", minimum: "500" },
        { percent: "10", code: "DINOS10", minimum: "500" },
    ];

    return (
        <Context.Provider value={{
            productsRelated: data.productsRelated,
            productDetail: data.productDetail
        }}>
            <Section1 />
            <SaleCode data={dataSale} />
            <Section2 />
        </Context.Provider>
    );
}
