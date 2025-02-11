interface initState {
    email: string,
    fullname: string,
    phone: string,
    address: string,
    province: string,
    district: string,
    ward: string,
    method: string,
    provinceChoosen: boolean
}

const initialState: initState = {
    email: "",
    fullname: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    method: "",
    provinceChoosen: false
}

export const orderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "PROVINCE_CHOOSEN":
            return {
                ...state,
                provinceChoosen: action.provinceChoosen
            };
        case "ORDER_SUBMIT":
            return {
                email: action.data.email,
                fullname: action.data.fullname,
                phone: action.data.phone,
                address: action.data.address,
                province: action.data.province,
                district: action.data.district,
                ward: action.data.ward,
                method: action.data.method,
                provinceChoosen: state.provinceChoosen
            };
        default:
            return state;
    }
}