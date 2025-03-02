interface initState {
    email: string,
    firstname: string,
    lastname: string,
    phone: string,
    address: string,
    province: string,
    district: string,
    ward: string,
    method: string,
    provinceChoosen: boolean,
    methodChoosen: boolean
}

const initialState: initState = {
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    method: "",
    provinceChoosen: false,
    methodChoosen: true
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
                firstname: action.data.firstname,
                lastname: action.data.lastname,
                phone: action.data.phone,
                address: action.data.address,
                province: action.data.province,
                district: action.data.district,
                ward: action.data.ward,
                method: action.data.method,
                provinceChoosen: state.provinceChoosen
            };
        case "METHOD_CHOOSEN":
            return {
                ...state,
                methodChoosen: action.methodChoosen
            };
        default:
            return state;
    }
}