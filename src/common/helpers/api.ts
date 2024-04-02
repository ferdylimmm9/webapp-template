import axios, { AxiosResponse } from 'axios';

import { getToken } from '@/hooks/use-auth';

export const API_URl =
  'https://toko-ria-server-production.up.railway.app/api/v1' as const;

export const apiList = {
  userRegister: '/user/register',
  userLogin: '/user/login',
  userCar: '/user/car',
  user: '/user',
  sparePart: '/spare-part',
  category: '/category',
  supplier: '/supplier',
  carBrand: '/car-brand',
  sparePartBrand: '/spare-part-brand',
  specialPrice: '/special-price',
  complaint: '/complaint',
  purchase: '/purchase',
  sale: '/sale',
  saleCartCheckout: '/sale/cart-checkout',
  saleCreate: '/sale/create',
  cart: '/cart',
  cartDetails: '/cart/details',
  file: '/file/upload',
  stockAdjustment: 'stock-adjustment',
} as const;

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

const client = axios.create({
  baseURL: API_URl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function callApi<T = any>({
  url,
  method = 'GET',
  data,
  params,
}: {
  url: string;
  method: MethodType;
  params?: any;
  data?: any;
}) {
  const token = getToken()?.token;
  return (await client({
    method,
    url,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    params,
  })) as AxiosResponse<T>;
}
