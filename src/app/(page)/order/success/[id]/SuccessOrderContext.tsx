import { createContext } from "react";

interface Data {
    fullname: string;
    email: string;
    address: string;
    phone: string;
    quantity: number;
    totalPrice: number;
    method: string;
    date: string;
    products: any
}

export const SuccessOrderContext = createContext<Data>({
    fullname: "",
    email: "",
    address: "",
    phone: "",
    quantity: 0,
    totalPrice: 0,
    method: "",
    date: "",
    products: []
});
