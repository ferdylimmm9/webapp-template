import { Flex } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';

import { BrandFormSchema, BrandFormType, BrandModel } from './brand-form-type';
import FormActionComponent from '../../components/form-action-component';
import Title from '../../components/title';

import Form from '@/components/form';
import Input from '@/components/input';
import useYupValidationResolver from '@/hooks/use-yup-validation-resolver';

interface BrandFormProps {
  brand?: BrandModel;
  onSubmit: (values: BrandFormType) => Promise<any>;
}

export default function BrandForm(props: BrandFormProps) {
  const { onSubmit, brand } = props;
  const defaultValues = React.useMemo<BrandFormType>(() => {
    return {
      manufacture: brand?.manufacture ?? '',
      name: brand?.name ?? '',
      type: brand?.type ?? 'car',
      data: brand,
    };
  }, [brand]);
  const resolver = useYupValidationResolver(BrandFormSchema());
  const methods = useForm({
    defaultValues,
    resolver,
  });
  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Title mb={16} />
      <Flex direction="column" gap={16}>
        <Input
          type="text"
          name="name"
          label="Nama Brand"
          placeholder="Masukkan Nama Brand"
        />
        <Input
          type="text"
          name="manufacture"
          label="Deskripsi Manufaktur"
          placeholder="Masukkan Deskripsi Manufaktur"
        />
        <FormActionComponent />
      </Flex>
    </Form>
  );
}
