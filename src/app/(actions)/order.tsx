export const provinceChoosen = (provinceChoosen: boolean) => {
    return {
        type: "PROVINCE_CHOOSEN",
        provinceChoosen: provinceChoosen
    }
}

export const orderSubmit = (data: {
    email: string,
    fullname: string,
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