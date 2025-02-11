import { combineReducers, createStore } from "redux";
import { cartReducer } from "./(reducers)/cart";
import { orderReducer } from "./(reducers)/order";

const allReducer = combineReducers({
    cartReducer,
    orderReducer
})

export const store = createStore(allReducer);
