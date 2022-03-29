import axios from "axios";
export const getProducts = async (index: number) => {
    const res = await axios.get(`http://localhost:3000/products/${index}`);
    return await res.data;
};