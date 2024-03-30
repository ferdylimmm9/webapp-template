import { Button, Flex } from '@mantine/core';
import { FloppyDisk, Pen, Trash, X } from '@phosphor-icons/react';
import { useFormContext } from 'react-hook-form';

import { useFormState } from '@/components/form';

interface FormActionComponentProps {
  onClickDelete?: () => void;
}

export default function FormActionComponent({
  onClickDelete,
}: FormActionComponentProps) {
  const { disabled, setDisabled } = useFormState();
  const { getValues, reset, formState } = useFormContext();
  const isEdit = !!getValues('data');

  const submitButton = !disabled && (
    <Button
      type="submit"
      color="green"
      leftSection={<FloppyDisk size={16} />}
      loading={formState.isSubmitting}
    >
      Simpan
    </Button>
  );

  const cancelButton = !disabled && isEdit && (
    <Button
      leftSection={<X size={16} />}
      color="yellow"
      onClick={() => {
        reset();
        setDisabled(true);
      }}
    >
      Batal
    </Button>
  );

  const editButton = disabled && isEdit && (
    <Button leftSection={<Pen size={16} />} onClick={() => setDisabled(false)}>
      Edit
    </Button>
  );

  const deleteButton = disabled && onClickDelete && (
    <Button
      leftSection={<Trash size={16} />}
      color="red"
      onClick={onClickDelete}
    >
      Hapus
    </Button>
  );

  return (
    <Flex direction="row" gap={16}>
      {deleteButton}
      {editButton}
      {cancelButton}
      {submitButton}
    </Flex>
  );
}
