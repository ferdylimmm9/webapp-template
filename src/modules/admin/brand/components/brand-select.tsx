import { Select, SelectProps } from '@mantine/core';

import { brands } from './brand-form-type';

import Input from '@/components/input';

interface BrandSelectProps extends SelectProps {
  type: 'form' | 'standalone';
  name?: string;
  filterBrand?: 'default' | 'car' | 'item';
}

export default function BrandSelect(props: BrandSelectProps) {
  const { type = 'form', name = '', filterBrand = 'default', ...rest } = props;
  const data: SelectProps['data'] = brands
    .filter((brand) => {
      switch (filterBrand) {
        case 'car':
          return brand.type === 'car';
        case 'item':
          return brand.type === 'item';
        case 'default':
        default:
          return true;
      }
    })
    .map((brand) => {
      return {
        value: brand.id,
        label: brand.name,
      };
    });

  if (type === 'form') {
    return <Input {...rest} type="select" data={data} name={name} />;
  }
  return <Select {...rest} data={data} />;
}
