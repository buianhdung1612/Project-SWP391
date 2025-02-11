"use client"

interface CartItem {
    image: string,
    title: string,
    priceNew: number,
    link: string,
    volume: number,
    quantity: number
}

const productsInit: CartItem[] = [
    {
        image: "/demo/danhmuc_1.webp",
        title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
        priceNew: 179000,
        link: "#",
        volume: 30,
        quantity: 2
    },
    {
        image: "/demo/danhmuc_1.webp",
        title: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
        priceNew: 179000,
        link: "#",
        volume: 30,
        quantity: 1
    }
];

const totalPriceInit: number = productsInit.reduce((sum: number, item: CartItem) => {
    return sum + item.priceNew * item.quantity
}, 0);

const totalQuantityInit: number = productsInit.reduce((sum: number, item: CartItem) => {
    return sum + item.quantity
}, 0);

const dataInit: any = {
    products: productsInit,
    totalPriceInit: totalPriceInit,
    totalQuantityInit: totalQuantityInit
}

export const cartReducer = (state = dataInit, action: any) => {
    switch (action.type) {
        case "CART_CHANGE_QUANTITY":
            const updatedDataChangeQuantity = [...state.products];
            const newQuantity = parseInt(action.event.target.value);
            if (newQuantity >= 0) {
                updatedDataChangeQuantity[action.index].quantity = newQuantity;

                const priceTotalUpdatedChangeQuantity: number = updatedDataChangeQuantity.reduce((sum: number, item: CartItem) => {
                    return sum += item.priceNew * item.quantity
                }, 0);

                const quantityTotalUpdatedChangeQuantity: number = updatedDataChangeQuantity.reduce((sum: number, item: CartItem) => {
                    return sum += item.quantity
                }, 0);

                return {
                    ...state,
                    products: updatedDataChangeQuantity,
                    totalPriceInit: priceTotalUpdatedChangeQuantity,
                    totalQuantityInit: quantityTotalUpdatedChangeQuantity
                }
            }

            return state;

        case "CART_INCREASE_QUANTITY":
            action.event.preventDefault();

            const updatedDataIncreaseQuantity = [...state.products];
            updatedDataIncreaseQuantity[action.index].quantity += 1;
            const priceTotalUpdatedIncreaseQuantity: number = state.totalPriceInit + updatedDataIncreaseQuantity[action.index].priceNew;
            const quantityTotalUpdatedIncreaseQuantity: number = state.totalQuantityInit + 1;

            return {
                ...state,
                products: updatedDataIncreaseQuantity,
                totalPriceInit: priceTotalUpdatedIncreaseQuantity,
                totalQuantityInit: quantityTotalUpdatedIncreaseQuantity
            }

        case "CART_DECREASE_QUANTITY":
            action.event.preventDefault();

            const updatedDataDecreaseQuantity = [...state.products];
            if (updatedDataDecreaseQuantity[action.index].quantity - 1 >= 0) {
                updatedDataDecreaseQuantity[action.index].quantity -= 1;
                const priceTotalUpdatedDecreaseQuantity: number = state.totalPriceInit - updatedDataDecreaseQuantity[action.index].priceNew;
                const quantityTotalUpdatedDecreaseQuantity: number = state.totalQuantityInit - 1;

                return {
                    ...state,
                    products: updatedDataDecreaseQuantity,
                    totalPriceInit: priceTotalUpdatedDecreaseQuantity,
                    totalQuantityInit: quantityTotalUpdatedDecreaseQuantity
                }
            }

            return state;

        case "CART_DELETE":
            const updatedDataDelete = state.products.filter((item: CartItem, index: number) => index !== action.index);

            const priceTotalUpdatedDelete: number = updatedDataDelete.reduce((sum: number, item: CartItem) => {
                return sum += item.priceNew * item.quantity
            }, 0);

            const quantityTotalUpdatedDelete: number = updatedDataDelete.reduce((sum: number, item: CartItem) => {
                return sum += item.quantity
            }, 0);

            return {
                ...state,
                products: updatedDataDelete,
                totalPriceInit: priceTotalUpdatedDelete,
                totalQuantityInit: quantityTotalUpdatedDelete
            }
            
        default:
            return state;
    }

}