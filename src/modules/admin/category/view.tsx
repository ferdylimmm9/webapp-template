import { useRouter } from 'next/router';
import React from 'react';

import CategoryForm from './components/category-form';
import { CategoryFormType, categories } from './components/category-form-type';

import notification from '@/common/helpers/notifications';

export default function CategoryView() {
  const { query } = useRouter();
  const id = query.id;

  const category = categories.find((category) => category.id === id);

  const onSubmit = React.useCallback(async (values: CategoryFormType) => {
    notification.success({
      message: 'Edit Kategori Sukses',
    });
    notification.error({
      message: 'Edit Kategori Gagal',
    });
  }, []);

  return <CategoryForm category={category} onSubmit={onSubmit} />;
}
