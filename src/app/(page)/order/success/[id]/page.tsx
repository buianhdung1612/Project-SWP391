"use client"

import Link from "next/link";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SuccessOrderContext } from "./SuccessOrderContext"

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
        orderDate: "",
        orderItems: []
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/home/order/${id}`);
            const data = await response.json();
            setData(data.data);
            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(data);

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
                        date: data.orderDate,
                        products: data.orderItems
                    }}
                >
                    <Section1 />
                    <Section2 />
                </SuccessOrderContext.Provider>
            </div>
        </div>
    );
}
