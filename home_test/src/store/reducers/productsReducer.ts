import { ADD_PRODUCTS, UPDATE_PRODUCTS_LIST } from "../actions/productsAction";
import { ProductsAction, ProductsState } from "./interfaces/iProductsReducer";

const initialState: ProductsState = {
    products: [],
};

export default (state: ProductsState = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                products: action.products,
            };
        case UPDATE_PRODUCTS_LIST:
            return {
                products: [...state.products, ...action.products],
            };
        default:
            return state;
    }
};