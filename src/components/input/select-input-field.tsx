import { Select, SelectProps } from '@mantine/core';
import React from 'react';
import { useController } from 'react-hook-form';

import { useFormState } from '../form';

export interface SelectFieldProps extends SelectProps {
  type: 'select';
  name: string;
  onAfterChange?: (value: string | null) => void;
}

export default function SelectField(props: SelectFieldProps) {
  const {
    name,
    type,
    disabled,
    readOnly,
    rightSection,
    onAfterChange,
    ...rest
  } = props;
  const formState = useFormState();

  const { field, fieldState } = useController({
    name,
  });

  const _disabled = disabled || readOnly || formState.disabled;
  const error = fieldState.error?.message;

  return (
    <Select
      {...rest}
      {...field}
      disabled={_disabled}
      error={error}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      onChange={(val) => {
        field.onChange(val);
        onAfterChange?.(val);
      }}
    />
  );
}
