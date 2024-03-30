import { Flex } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';

import {
  CategoryFormSchema,
  CategoryFormType,
  CategoryModel,
} from './category-form-type';
import FormActionComponent from '../../components/form-action-component';
import Title from '../../components/title';

import Form from '@/components/form';
import Input from '@/components/input';
import useYupValidationResolver from '@/hooks/use-yup-validation-resolver';

interface CategoryFormProps {
  category?: CategoryModel;
  onSubmit: (values: CategoryFormType) => Promise<void>;
}

export default function CategoryForm(props: CategoryFormProps) {
  const { category, onSubmit } = props;
  const defaultValues = React.useMemo<CategoryFormType>(() => {
    return {
      description: category?.description ?? '',
      file_url: category?.file_url ?? '',
      name: category?.name ?? '',
      data: category,
    };
  }, [category]);

  const resolver = useYupValidationResolver(CategoryFormSchema());
  const methods = useForm({
    defaultValues,
    resolver,
  });

  return (
    <Form methods={methods} onSubmit={onSubmit} defaultEditable={!category}>
      <Title mb={16} />
      <Flex direction="column" gap={16}>
        <Input
          type="text"
          name="name"
          label="Nama Kategori"
          placeholder="Masukkan Nama Kategori"
          required
        />
        <Input
          type="text"
          name="description"
          label="Deskripsi Kategori"
          placeholder="Masukkan Deskripsi Kategori"
        />
        <FormActionComponent onClickDelete={() => {}} />
      </Flex>
    </Form>
  );
}
