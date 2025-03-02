"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MiddlewareGetData from "./MiddlewareGetData";

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

export default function DetailProductPage() {
    const { slug } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Context>({
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
            deal: "/demo/deal.webp",
            banner: "/demo/banner-sale.webp",
            title: "",
            brand: { title: "" },
            variants: [{ volume: 0, price: 0, unit: "" }],
            discountPercent: 0,
            description: ""
        }
    });

    useEffect(() => {
        const fetchDetailProduct = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/home/products/${slug}`);
            const data = await response.json();

            setData(data.data[0]);
            setIsLoading(false);
        };

        fetchDetailProduct();
    }, [slug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <MiddlewareGetData data={data} />
    );
}
