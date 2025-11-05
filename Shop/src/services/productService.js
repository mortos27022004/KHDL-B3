import { del, post, get, patch } from "../utils/request";


export const getProducts = (page = 1, limit = 20) => get(`products?_start=${(page-1) * limit}&_limit=${limit}`);

export const createProduct = (product) => post('products', product);

export const editProduct = async (product) => patch('products/' + product.id, product);

export const deleteProduct = async (product) => del('products/' + product.id);
