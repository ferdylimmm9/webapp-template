import { Radio, RadioGroupProps, RadioProps } from '@mantine/core';
import { useController } from 'react-hook-form';

import { useFormState } from '../form';

export interface RadioInputFieldProps extends RadioGroupProps {
  data: RadioProps[];
  type: 'radio';
  name: string;
}

export default function RadioInputField(props: RadioInputFieldProps) {
  const { data, name, type, readOnly, ...rest } = props;
  const formState = useFormState();
  const { field, fieldState } = useController({
    name,
  });

  const error = fieldState?.error?.message;

  const disabled = readOnly || formState.disabled;
  return (
    <Radio.Group
      {...rest}
      {...field}
      onChange={(val) => field.onChange(val)}
      value={field.value}
      error={error}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      readOnly={disabled}
    >
      {data.map((radio) => {
        return <Radio key={radio.value as any} {...radio} />;
      })}
    </Radio.Group>
  );
}
