import axios from "axios";

export const getProducts = axios.create({
    baseURL: " https://api.escuelajs.co/api/v1/products"
});