import { useRouter } from 'next/router';
import React from 'react';

import CategoryForm from './components/category-form';
import { CategoryFormType } from './components/category-form-type';
import LoaderView from '../components/loader-view';

import { useGetCategory, useUpdateCategory } from '@/api-hooks/category-api';
import notification from '@/common/helpers/notifications';
import { queryClient } from '@/pages/_app';

export default function CategoryView() {
  const { query } = useRouter();
  const id = query.id as string;

  const queryCategory = useGetCategory(id);
  const { mutateAsync } = useUpdateCategory();

  const onSubmit = React.useCallback(
    async (values: CategoryFormType) => {
      try {
        await mutateAsync({ id, data: values });
        notification.success({
          message: 'Edit Kategori Sukses',
        });
        //update cache
        queryClient.refetchQueries();
      } catch (e: any) {
        notification.error({
          message: e.message,
        });
      }
    },
    [id, mutateAsync],
  );

  return (
    <LoaderView query={queryCategory}>
      {(category) => <CategoryForm category={category} onSubmit={onSubmit} />}
    </LoaderView>
  );
}
