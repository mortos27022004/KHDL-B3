import { del, post, get, patch } from "../utils/request";

export const getTotalProduct = () => get('meta_data/total_product');