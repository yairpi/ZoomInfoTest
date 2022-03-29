import { Product } from "../../../models/product";

export type ProductsState = {
    products: Product[];
};


export type ProductsAction = {
    type: string;
    products: [];
};