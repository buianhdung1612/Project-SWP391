"use client"

import { useDispatch, useSelector } from "react-redux";
import FormOrder from "./FormOrder";
import Section2 from "./Section2";
import Link from "next/link";
import { methodChoosen } from "@/app/(actions)/order";
import { useRouter } from "next/navigation";
import { cartReset } from "@/app/(actions)/cart";

interface DataSubmit {
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    totalAmount: number,
    totalPrice: number,
    paymentMethod: string,
    products: any
}

export default function OrderPage() {
    const dispatchOrder = useDispatch();
    const router = useRouter();

    const quantity = useSelector((state: any) => state.cartReducer.totalQuantityInit);
    const totalPrice = useSelector((state: any) => (state.cartReducer.totalPriceInit));
    const products = useSelector((state: any) => (state.cartReducer.products));

    const handleSubmitForm = async (event: any) => {
        event.preventDefault();
        
        if(!event.target.method.value){
            dispatchOrder(methodChoosen(false));
            return;
        }

        const provinceData = event.target.province.value.split('+')[1];
        const districtData = event.target.district.value.split('+')[1];
        const wardData = event.target.ward.value.split('+')[1];
        const dataAddress = `${event.target.address.value}, ${provinceData}, ${districtData}, ${wardData}`;

        const dataProducts: any = [];
        products.map((item: any, index: number) => (
            dataProducts.push({
                variantId: item.variantId,
                quantity: item.quantity
            })
        ))

        const data: DataSubmit = {  
            firstName: event.target.firstname.value,
            lastName: event.target.lastname.value,
            email: event.target.email.value,
            address: dataAddress,
            phoneNumber: event.target.phone.value,
            totalAmount: quantity,
            totalPrice: totalPrice + 40000,
            paymentMethod: event.target.method.value,
            products: dataProducts
        }

        const response = await fetch('https://freshskinweb.onrender.com/admin/orders/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataResponse = await response.json();

        if (dataResponse.code == 200) {
            dispatchOrder(cartReset());
            router.push(`/order/success/${dataResponse.data.orderId}`);
            
        }
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