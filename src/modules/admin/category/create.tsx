import React from 'react';

import CategoryForm from './components/category-form';
import { CategoryFormType } from './components/category-form-type';

import notification from '@/common/helpers/notifications';

export default function CategoryCreate() {
  const onSubmit = React.useCallback(async (values: CategoryFormType) => {
    notification.success({
      message: 'Simpan Category Sukses',
    });
    notification.error({
      message: 'Simpan Category Gagal',
    });
  }, []);
  return <CategoryForm onSubmit={onSubmit} />;
}
