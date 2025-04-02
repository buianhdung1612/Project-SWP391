"use client"

import { useDispatch, useSelector } from "react-redux";
import FormOrder from "./FormOrder";
import Section2 from "./Section2";
import Link from "next/link";
import { methodChoosen } from "@/app/(actions)/order";
import { cartReset } from "@/app/(actions)/cart";
import { useContext } from "react";
import { SettingProfileContext } from "../layout";
import { useRouter } from "next/navigation";

interface DataSubmit {
    userId?: number,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    totalAmount: number,
    totalPrice: number,
    paymentMethod: string,
    orderItems: any
}

export default function OrderPage() {
    const router = useRouter();
    const dispatchOrder = useDispatch();

    const quantity = useSelector((state: any) => state.cartReducer.totalQuantityInit);
    const totalPrice = useSelector((state: any) => (state.cartReducer.totalPriceInit));
    const products = useSelector((state: any) => (state.cartReducer.products));

    const settingProfile = useContext(SettingProfileContext);
            
    if (!settingProfile) {
        return null;
    }

    const { profile, setting } = settingProfile;

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
        products.map((item: any) => (
            dataProducts.push({
                productVariantId: item.variantId,
                quantity: item.quantity
            })
        ))

        if(profile.userID !== 0){
            const data: DataSubmit = {  
                userId: profile.userID,
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                address: dataAddress,
                phoneNumber: event.target.phone.value,
                totalAmount: quantity,
                totalPrice: totalPrice,
                paymentMethod: event.target.method.value,
                orderItems: dataProducts,
            }

            const response = await fetch('https://freshskinweb.onrender.com/home/orders/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
    
            const dataResponse = await response.json();
    
            if (dataResponse.code == 200) {
                dispatchOrder(cartReset());
                if(event.target.method.value == "QR"){
                    const responseVNPAY = await fetch(`https://freshskinweb.onrender.com/api/vnpay/create?orderId=${dataResponse.data.orderId}`);
                    const dataResponseVNPAY = await responseVNPAY.json();
                    if (dataResponseVNPAY.code === 200) {
                        window.location.href = dataResponseVNPAY.data; 
                    }
                }
                else{
                    router.push(`/order/success/${dataResponse.data.orderId}`)
                }
            }
        }
        else{
            const data: DataSubmit = {  
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                address: dataAddress,
                phoneNumber: event.target.phone.value,
                totalAmount: quantity,
                totalPrice: totalPrice,
                paymentMethod: event.target.method.value,
                orderItems: dataProducts
            }

            const response = await fetch('https://freshskinweb.onrender.com/home/orders/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
    
            const dataResponse = await response.json();
            if (dataResponse.code == 200) {
                dispatchOrder(cartReset());
                if(event.target.method.value == "QR"){
                    const responseVNPAY = await fetch(`https://freshskinweb.onrender.com/api/vnpay/create?orderId=${dataResponse.data.orderId}`);
                    const dataResponseVNPAY = await responseVNPAY.json();
                    if (dataResponseVNPAY.code === 200) {
                        window.location.href = dataResponseVNPAY.data; 
                    }
                }
                else{
                    router.push(`/order/success/${dataResponse.data.orderId}`)
                }
            }
        }        
    }

    return (
        <>
            <form className="flex" onSubmit={handleSubmitForm}>
                <div className="w-[60%] pl-[15%] pr-[2%] py-[25px] flex flex-wrap justify-center">
                    <Link href="/" className="w-[206px] h-[82px] mb-[21px]">
                        <img src={setting.logo || "https://res.cloudinary.com/dr53sfboy/image/upload/v1742357764/product-brand/dsa_20250319-041604_3.png"} className="w-full h-full object-cover" />
                    </Link>
                    <FormOrder />
                </div>
                <Section2 />
            </form>
        </>
    )
}