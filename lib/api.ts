import api from './axios';
import { Product } from './products';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await api.get('/products/');
    return response.data;
};

export const fetchProduct = async (slug: string): Promise<Product> => {
    const response = await api.get(`/products/${slug}/`);
    return response.data;
};
