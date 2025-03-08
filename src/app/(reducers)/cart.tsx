"use client"

interface CartItem {
    image: string,
    title: string,
    price: number,
    link: string,
    variantId: number,
    volume: number,
    unit: string,
    quantity: number
}

// Data Init
const productsInit: CartItem[] = [];
const totalPriceInit: number = productsInit.reduce((sum: number, item: CartItem) => {
    return sum + item.price * item.quantity
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
                    return sum += item.price * item.quantity
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
            const priceTotalUpdatedIncreaseQuantity: number = state.totalPriceInit + updatedDataIncreaseQuantity[action.index].price;
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
                const priceTotalUpdatedDecreaseQuantity: number = state.totalPriceInit - updatedDataDecreaseQuantity[action.index].price;
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
                return sum += item.price * item.quantity
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

        case "CART_ADD_NEW_PRODUCT":
            const updatedDataNewProduct = action.products;
            const priceTotalUpdatedAddNewProduct: number = updatedDataNewProduct.reduce((sum: number, item: CartItem) => {
                return sum + item.price * item.quantity
            }, 0)
            const quantityTotalUpdatedAddNewProduct: number = updatedDataNewProduct.reduce((sum: number, item: CartItem) => {
                return sum + item.quantity
            }, 0);

            return {
                ...state,
                products: updatedDataNewProduct,
                totalPriceInit: priceTotalUpdatedAddNewProduct,
                totalQuantityInit: quantityTotalUpdatedAddNewProduct
            }

        case "CART_RESET":
            return {
                products: [],
                totalPriceInit: 0,
                totalQuantityInit: 0
            }
        default:
            return state;
    }

}