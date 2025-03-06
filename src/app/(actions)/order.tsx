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