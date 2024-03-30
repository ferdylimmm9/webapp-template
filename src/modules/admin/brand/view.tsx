import { useRouter } from 'next/router';
import React from 'react';

import BrandForm from './components/brand-form';
import { BrandFormType, brands } from './components/brand-form-type';

import notification from '@/common/helpers/notifications';

export default function BrandView() {
  const { query } = useRouter();
  const id = query.id;

  const brand = brands.find((brand) => brand.id === id);

  const onSubmit = React.useCallback(async (values: BrandFormType) => {
    notification.success({
      message: 'Edit Brand Sukses',
    });
    notification.error({
      message: 'Edit Brand Gagal',
    });
  }, []);

  return <BrandForm brand={brand} onSubmit={onSubmit} />;
}
