import { Product } from "../../models/product";


export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const UPDATE_PRODUCTS_LIST = 'UPDATE_PRODUCTS_LIST';


export const addProducts = (data: Product[]) => {
    return async (dispatch: any) => {
        dispatch(
            { type: ADD_PRODUCTS, products: data }
        );
    };
};

export const updateProducts = (data: Product[]) => {
    return async (dispatch: any) => {
        dispatch(
            { type: UPDATE_PRODUCTS_LIST, products: data }
        );
    };
};