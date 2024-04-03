import { useMutation, useQuery } from '@tanstack/react-query';

import { apiList, callApi } from '@/common/helpers/api';
import {
  CategoryFormType,
  CategoryModel,
} from '@/modules/admin/category/components/category-form-type';

export function useGetCategories() {
  return useQuery({
    queryKey: ['get-categories'],
    queryFn: async () =>
      await callApi<CategoryModel[]>({
        method: 'GET',
        url: apiList.category,
      }),
  });
}

export function useGetCategory(id: string) {
  return useQuery({
    queryKey: ['get-categories', id],
    queryFn: async () =>
      await callApi<CategoryModel>({
        method: 'GET',
        url: `${apiList.category}/${id}`,
      }),
  });
}

export function useDeleteCategory() {
  return useMutation({
    mutationFn: async (id: string) =>
      await callApi({
        method: 'DELETE',
        url: `${apiList.category}/${id}`,
      }),
  });
}

export function useUpdateCategory() {
  return useMutation({
    mutationFn: async (request: { id: string; data: CategoryFormType }) =>
      await callApi({
        method: 'POST',
        url: `${apiList.category}/${request.id}`,
        data: request.data,
      }),
  });
}

export function useCreateCategory() {
  return useMutation({
    mutationFn: async (request: CategoryFormType) =>
      await callApi({
        method: 'POST',
        url: `${apiList.category}`,
        data: request,
      }),
  });
}
