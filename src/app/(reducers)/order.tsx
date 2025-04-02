interface initState {
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    totalAmount: number,
    totalPrice: number,
    paymentMethod: string,
    provinceChoosen: boolean
}

const initialState: initState = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    totalAmount: 0,
    totalPrice: 0,
    paymentMethod: "",
    provinceChoosen: false
}

export const orderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "PROVINCE_CHOOSEN":
            return {
                ...state,
                provinceChoosen: action.provinceChoosen
            };
        default:
            return state;
    }
}