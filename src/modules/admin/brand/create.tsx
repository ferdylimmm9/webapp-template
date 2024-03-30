import React from 'react';

import BrandForm from './components/brand-form';
import { BrandFormType } from './components/brand-form-type';

import notification from '@/common/helpers/notifications';

export default function BrandCreate() {
  const onSubmit = React.useCallback(async (values: BrandFormType) => {
    notification.success({
      message: 'Simpan Brand Sukses',
    });
    notification.error({
      message: 'Simpan Brand Gagal',
    });
  }, []);
  return <BrandForm onSubmit={onSubmit} />;
}
