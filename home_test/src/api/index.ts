import axios from "axios";
const IP = "192.168.100.47";
export const getProducts = async (index: number) => {
    const res = await axios.get(`http://${IP}:3000/products/${index}`);
    return await res.data;
};