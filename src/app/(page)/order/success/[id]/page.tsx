"use client"

import Link from "next/link";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { createContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Data {
    fullname: string,
    email: string,
    address: string,
    phone: string,
    quantity: number,
    totalPrice: number,
    method: string,
    date: string
}

export const SuccessOrderContext = createContext<Data>({
    fullname: "",
    email: "",
    address: "",
    phone: "",
    quantity: 0,
    totalPrice: 0,
    method: "",
    date: ""
});

export default function SuccessPage() {
    const { id } = useParams();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        totalAmount: 0,
        totalPrice: 0,
        paymentMethod: "",
        orderDate: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/orders/search/${id}`);
            const data = await response.json();
            setData(data.data);
            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto pt-[30px]">
            <div className="flex items-center justify-center">
                <Link href="/" className="w-[206px] h-[82px] mb-[21px]">
                    <img src="/logo.svg" className="w-full h-full object-cover" />
                </Link>
            </div>
            <div className="flex items-start">
                <SuccessOrderContext.Provider
                    value={{
                        fullname: `${data.firstName} ${data.lastName}`,
                        email: data.email,
                        address: data.address,
                        phone: data.phoneNumber,
                        quantity: data.totalAmount,
                        totalPrice: data.totalPrice,
                        method: data.paymentMethod,
                        date: data.orderDate
                    }}
                >
                    <Section1 />
                    <Section2 />
                </SuccessOrderContext.Provider>
            </div>
        </div>
    );
}
