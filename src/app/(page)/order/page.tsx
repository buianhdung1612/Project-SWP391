"use client"

import { useDispatch } from "react-redux";
import FormOrder from "./FormOrder";
import Section2 from "./Section2";
import Link from "next/link";
import { methodChoosen, orderSubmit } from "@/app/(actions)/order";
import { useRouter } from "next/navigation";

interface DataSubmit {
    email: string,
    firstname: string,
    lastname: string,
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

    const handleSubmitForm = (event: any) => {
        event.preventDefault();
        
        if(!event.target.method.value){
            dispatchOrder(methodChoosen(false));
            return;
        }

        const data: DataSubmit = {
            email: event.target.email.value,
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            province: event.target.province.value,
            district: event.target.district.value,
            ward: event.target.ward.value,
            method: event.target.method.value
        }

        dispatchOrder(orderSubmit(data));
        router.push(`/order/success/1`);
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