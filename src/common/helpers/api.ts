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

export type ModelType = 'users' | 'categories' | 'spare_parts';

const client = axios.create({
  baseURL: API_URl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

interface CallApiProps {
  url: string;
  method: MethodType;
  params?: any;
  data?: any;
}

export async function callApi<T = any>({
  url,
  method = 'GET',
  data,
  params,
}: CallApiProps) {
  const token = getToken()?.token;
  //https://medium.com/@amavictor/how-to-use-react-query-axios-and-a-custom-request-processor-to-transform-your-data-2a9f0c9f5bf0
  return client({
    method,
    url,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    params,
  })
    .then((value: AxiosResponse<T>) => value.data)
    .catch((error) => Promise.reject(error.response.data));
}

export async function uploadFile<T = any>({
  id,
  model,
}: {
  model: ModelType;
  id: string;
}) {
  const token = getToken()?.token;
  return client({
    method: 'POST',
    url: [apiList.file + model + id].join('/'),
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  })
    .then((value: AxiosResponse<T>) => value.data)
    .catch((error) => Promise.reject(error.response.data));
}
