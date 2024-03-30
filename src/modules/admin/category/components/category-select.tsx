import { Select, SelectProps } from '@mantine/core';

import { categories } from './category-form-type';

import Input from '@/components/input';

interface CategorySelectProps extends SelectProps {
  type: 'form' | 'standalone';
  name?: string;
}

export default function CategorySelect(props: CategorySelectProps) {
  const { type = 'form', name = '', ...rest } = props;
  const data: SelectProps['data'] = categories.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  if (type === 'form') {
    return <Input {...rest} type="select" data={data} name={name} />;
  }
  return <Select {...rest} data={data} />;
}
