import { del, post, get, patch } from "../utils/request";


export const getCart = () => get('Ca');

export const createProduct = (product) => post('products', product);

export const editProduct = async (product) => patch('products/' + product.id, product);

export const deleteProduct = async (product) => del('products/' + product.id);
