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
    firstname: string,
    lastname: string,
    phone: string,
    address: string,
    province: string,
    district: string,
    ward: string,
    method: string
}) => {
    
    return {
        type: "ORDER_SUBMIT",
        data: data
    }
}