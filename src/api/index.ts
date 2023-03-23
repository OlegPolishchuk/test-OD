import { PAGINATION } from '@/shared/constants';
import { Product } from '@/types';

const URL = 'https://api.escuelajs.co/api/v1/products';

export const ProductsAPI = {
  async getProducts(offset: number = PAGINATION.offset, limit: number = PAGINATION.limit) {
    try {
      const res = await fetch(`${URL}?offset=${offset}&limit=${limit}`);
      const data: Product[] = await res.json();

      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
