export const provinceChoosen = (provinceChoosen: boolean) => {
    return {
        type: "PROVINCE_CHOOSEN",
        provinceChoosen: provinceChoosen
    }
}

export const methodChoosen = (methodChoosen: boolean) => {
    return {
        type: "METHOD_CHOOSEN",
        methodChoosen: methodChoosen
    }
}

export const orderSubmit = (data: {
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    totalAmount: number,
    totalPrice: number,
    paymentMethod: string
}) => {
    
    return {
        type: "ORDER_SUBMIT",
        data: data
    }
}