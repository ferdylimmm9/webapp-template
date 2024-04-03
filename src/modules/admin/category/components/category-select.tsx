import { Select, SelectProps } from '@mantine/core';

import { useGetCategories } from '@/api-hooks/category-api';
import Input from '@/components/input';

interface CategorySelectProps extends SelectProps {
  type: 'form' | 'standalone';
  name?: string;
}

export default function CategorySelect(props: CategorySelectProps) {
  const { type = 'form', name = '', disabled, ...rest } = props;
  const { data = [], isFetching } = useGetCategories();

  const options: SelectProps['data'] = data.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  const _disabled = disabled || isFetching;

  if (type === 'form') {
    return (
      <Input
        {...rest}
        type="select"
        data={options}
        name={name}
        disabled={_disabled}
      />
    );
  }

  return <Select {...rest} data={options} disabled={_disabled} />;
}
