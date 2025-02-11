"use client"

import { useDispatch } from "react-redux";
import FormOrder from "./FormOrder";
import Section2 from "./Section2";
import Link from "next/link";
import { orderSubmit } from "@/app/(actions)/order";
import { useRouter } from "next/navigation";

interface DataSubmit {
    email: string,
    fullname: string,
    phone: string,
    address: string,
    province: string,
    district: string,
    ward: string,
    method: string
}

export default function OrderPage() {
    const dispatchOrder = useDispatch();
    const router = useRouter();

    const handleSubmitForm = async (event: any) => {
        event.preventDefault();

        const data: DataSubmit = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            province: event.target.province.value,
            district: event.target.district.value,
            ward: event.target.ward.value,
            method: event.target.method.value
        }

        await dispatchOrder(orderSubmit(data));
        router.push("/order/success/1");
    }

    return (
        <>
            <form action="" className="flex" onSubmit={handleSubmitForm}>
                <div className="w-[60%] pl-[15%] pr-[2%] py-[25px] flex flex-wrap items-center justify-center">
                    <Link href="/" className="w-[206px] h-[82px] mb-[21px]">
                        <img src="/logo.svg" className="w-full h-full object-cover" />
                    </Link>
                    <FormOrder />
                </div>
                <Section2 />
            </form>
        </>
    )
}